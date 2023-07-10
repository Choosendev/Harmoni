// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "openzeppelin-contracts/contracts/token/ERC1155/extensions/ERC1155Supply.sol";
import "openzeppelin-contracts/contracts/token/ERC1155/extensions/ERC1155URIStorage.sol";

contract BeatsNFT is ERC1155Supply, ERC1155URIStorage {

	constructor() ERC1155("") {}

	
}