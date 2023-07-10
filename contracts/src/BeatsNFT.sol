// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "openzeppelin-contracts/contracts/token/ERC1155/extensions/ERC1155Supply.sol";
import "openzeppelin-contracts/contracts/token/ERC1155/extensions/ERC1155URIStorage.sol";
import "openzeppelin-contracts/contracts/proxy/utils/Initializable.sol";

contract BeatsNFT is ERC1155Supply, ERC1155URIStorage, Initializable {

	address public harmoniMain;

	constructor() ERC1155("") {}

	function initialize(address _harmoniMain) external initializer {
		harmoniMain = _harmoniMain;
	}

    function mint(address to, uint256 id, uint256 amount, string calldata _uri) external {
		require(msg.sender == harmoniMain, "Not Harmoni contract");
		_setURI(id, _uri);
		_mint(to, id, amount, "");
	}

    function uri(uint256 tokenId) public view override(ERC1155URIStorage, ERC1155) returns (string memory) {
		return ERC1155URIStorage.uri(tokenId);
	}

    function _beforeTokenTransfer(
        address operator,
        address from,
        address to,
        uint256[] memory ids,
        uint256[] memory amounts,
        bytes memory data
    ) internal override(ERC1155Supply, ERC1155) {
		ERC1155Supply._beforeTokenTransfer(operator, from, to, ids, amounts, data);
	}
}