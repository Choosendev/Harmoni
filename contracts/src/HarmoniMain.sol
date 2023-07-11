// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "./BeatsNFT.sol";
import "./interfaces/IBeatsNFT.sol";
import "openzeppelin-contracts/contracts/token/ERC1155/IERC1155Receiver.sol";
import "./interfaces/IERC20Decimals.sol";

contract HarmoniMain is IERC1155Receiver {

	address public beatsNFT;
	address public usdcContract;
	uint48 public nextId; // 2^48 able to store 281,474,976,710,655 of beats;

	struct Beats {
		uint32 beatPrice; // 4,294,967,295 / 2 = able to store max price of 42,949,672.95 considering max 2 decimals for stablecoin payment
		uint64 amount; // up to 18,446,744,073,709,551,615 max quantity of beats available for sale
		uint8 creatorsNumber; // numbers of collaborators
		address[] creators;
		uint8[] shares; // total must = 100 (100%)
	}

	mapping(uint256 => Beats) public beatInfo;
	mapping(address => uint48[]) public beatsCreated;
	mapping(address => uint256) public creatorRevenues;

	event BeatCreated(Beats beatInfo);
	event BeatsPurchased(address buyer, uint48 beatId, uint256 totalPayments);
	event Withdrawed(address receiver, uint256 amount);

	constructor(address _beatsNFT, address _usdcContract) {
		beatsNFT = _beatsNFT;
		usdcContract = _usdcContract;
	}

	function beatsBalance(uint48 _tokenId) external view returns(uint256 _balances) {
		_balances = IBeatsNFT(beatsNFT).balanceOf(address(this), _tokenId);
	}

	function beatPrice(uint48 _tokenId) external view returns(uint256 _beatPrice) {
		_beatPrice = uint256(beatInfo[_tokenId].beatPrice) * IERC20Decimals(usdcContract).decimals() / 10**2; // parse to same decimals with USDC
	}

    /**
     * @dev Mint new beats to this address.
	 * @notice Create new beat and sell from Harmoni main contract.
     *
     * @param _beatPrice Price of beat in 2 decimals (i.e. $1.99 == 199)
     * @param _amount Quantity of beats to sell
     * @param _creators Creators array
	 * @param _shares Revenue shares array
	 * @param _creatorsNumber Number of collaborators
     * @return tokenId Beat ID created
     */
	function createBeat(
		uint32 _beatPrice, 
		uint32 _amount, 
		address[] memory _creators, 
		uint8[] memory _shares, 
		uint8 _creatorsNumber,
		string calldata _uri
		) external returns(uint48 tokenId) {
		require(_creatorsNumber == _creators.length, "Creators number incorrect");
		require(_creatorsNumber == _shares.length, "Shares number incorrect");

		// Check if revenue shares are correctly allocated.
		uint8 sharesCheck;
		for (uint8 i; i < _creatorsNumber; ) {
			sharesCheck += _shares[i];
			unchecked {
				i++;
			}
		}
		require(sharesCheck == 100, "Shares are not 100% in total");

		tokenId = nextId;
		beatInfo[tokenId].beatPrice = _beatPrice;
		beatInfo[tokenId].amount = _amount;

		for (uint8 i; i < _creatorsNumber; ) {
			beatInfo[tokenId].creators[i] = _creators[i];
			beatInfo[tokenId].shares[i] = _shares[i];
			beatsCreated[_creators[i]].push(tokenId);
			unchecked {
				i++;
			}
		}

		IBeatsNFT(beatsNFT).mint(address(this), uint256(tokenId), uint256(_amount), _uri);

		emit BeatCreated(beatInfo[tokenId]);
		nextId++;
	}

    /**
     * @dev Send beatNFTs to buyer.
	 * @notice Buy beats with USDC payments, multiple purchase available.
     *
     * @param _tokenId Beat ID to purchase
     * @param _payments Total payments amount (price * quantity)
	 * @param _quantity Total quantity purchasing
     * @return bool Operation success
     */
	function buyBeat(uint48 _tokenId, uint256 _payments, uint256 _quantity) external returns(bool) {
		require(_tokenId < nextId, "No beat found");
		require(IBeatsNFT(beatsNFT).balanceOf(address(this), _tokenId) >= _quantity, "Beats sold out");
		require(IERC20Decimals(usdcContract).allowance(msg.sender, address(this)) >= _payments, "No approval to spend");

		uint256 _beatPrice = uint256(beatInfo[_tokenId].beatPrice) * IERC20Decimals(usdcContract).decimals() / 10**2; // parse to same decimals with USDC
		uint256 toPay = _beatPrice * _quantity;
		require(_payments >= toPay, "Not enough payments");

		bool success = IERC20Decimals(usdcContract).transferFrom(msg.sender, address(this), _payments);
		require(success, "Payment failed");

		for (uint8 i; i < beatInfo[_tokenId].creatorsNumber; ) {
			creatorRevenues[beatInfo[_tokenId].creators[i]] += _payments * beatInfo[_tokenId].shares[i] / 100;
			unchecked {
				i++;
			}
		}

		IBeatsNFT(beatsNFT).safeTransferFrom(
        	address(this),
        	msg.sender,
        	_tokenId,
        	_quantity,
        	""
    	);

		emit BeatsPurchased(msg.sender, _tokenId, _payments);

		return true;
	}

    /**
     * @dev Withdraw all creator's funds to creator.
	 * @notice Anyone can call this function but only creator will be receiving funds.
     *
     * @param _creator Creator address
     * @return bool Operation success
     */
	function withdrawRevenues(address _creator) public returns(bool) {
		uint256 toWithdraw = creatorRevenues[_creator];
		require(toWithdraw > 0, "No funds to withdraw");

		creatorRevenues[_creator] = 0;
		IERC20Decimals(usdcContract).transfer(_creator, toWithdraw);

		emit Withdrawed(_creator, toWithdraw);

		return true;
	}

    /**
     * @dev Batch withdrawal all creators' funds to creators.
	 * @notice Anyone can call this function but only creators will be receiving funds.
     *
     * @param _creators Creators address
     * @return bool Operation success
     */
	function batchWithdrawRevenues(address[] memory _creators) external returns(bool) {
		for (uint8 i; i < _creators.length; ) {
			withdrawRevenues(_creators[i]);
			unchecked {
				i++;
			}
		}
		return true;
	}

    /**
     * @dev Handles the receipt of a single ERC1155 token type. This function is
     * called at the end of a `safeTransferFrom` after the balance has been updated.
     *
     * NOTE: To accept the transfer, this must return
     * `bytes4(keccak256("onERC1155Received(address,address,uint256,uint256,bytes)"))`
     * (i.e. 0xf23a6e61, or its own function selector).
     *
     * @ param operator The address which initiated the transfer (i.e. msg.sender)
     * @ param from The address which previously owned the token
     * @ param id The ID of the token being transferred
     * @ param value The amount of tokens being transferred
     * @ param data Additional data with no specified format
     * @return `bytes4(keccak256("onERC1155Received(address,address,uint256,uint256,bytes)"))` if transfer is allowed
     */
    function onERC1155Received(
        address ,
        address ,
        uint256 ,
        uint256 ,
        bytes calldata
    ) external pure returns (bytes4) {
		return bytes4(keccak256("onERC1155Received(address,address,uint256,uint256,bytes)"));
	}

    /**
     * @dev Handles the receipt of a multiple ERC1155 token types. This function
     * is called at the end of a `safeBatchTransferFrom` after the balances have
     * been updated.
     *
     * NOTE: To accept the transfer(s), this must return
     * `bytes4(keccak256("onERC1155BatchReceived(address,address,uint256[],uint256[],bytes)"))`
     * (i.e. 0xbc197c81, or its own function selector).
     *
     * @ param operator The address which initiated the batch transfer (i.e. msg.sender)
     * @ param from The address which previously owned the token
     * @ param ids An array containing ids of each token being transferred (order and length must match values array)
     * @ param values An array containing amounts of each token being transferred (order and length must match ids array)
     * @ param data Additional data with no specified format
     * @return `bytes4(keccak256("onERC1155BatchReceived(address,address,uint256[],uint256[],bytes)"))` if transfer is allowed
     */
    function onERC1155BatchReceived(
        address ,
        address ,
        uint256[] calldata ,
        uint256[] calldata ,
        bytes calldata 
    ) external pure returns (bytes4) {
		return bytes4(keccak256("onERC1155BatchReceived(address,address,uint256[],uint256[],bytes)"));
	}

    function supportsInterface(bytes4 interfaceId) external view returns (bool) {}
}