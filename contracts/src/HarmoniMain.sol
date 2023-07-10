// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "./BeatsNFT.sol";

contract HarmoniMain {

	address public beatsNFT;
	uint256 public nextId;

	mapping(uint256 => uint256) public beatPrice;

	constructor(address _beatsNFT) {
		beatsNFT = _beatsNFT;
	}

	function createBeat(uint256 _beatPrice, uint256 _amount) external {
		beatPrice[nextId] = _beatPrice;
		nextId++;
	}

	function buyBeat() external {

	}
}