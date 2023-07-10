// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "openzeppelin-contracts/contracts/token/ERC1155/IERC1155.sol";

interface IBeatsNFT is IERC1155 {

	function initialize(address _harmoniMain) external;

    function mint(address to, uint256 id, uint256 amount, string calldata _uri) external;

    function uri(uint256 tokenId) external view returns (string memory);

    function totalSupply(uint256 id) external view returns (uint256);

    function exists(uint256 id) external view returns (bool);
}