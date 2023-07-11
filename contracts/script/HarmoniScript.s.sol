// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.20;

import "forge-std/Script.sol";
import "../src/HarmoniMain.sol";
import "../src/BeatsNFT.sol";
import "../src/mocks/MockUSDC.sol";

contract HarmoniScript is Script {
    HarmoniMain public harmoni;
    BeatsNFT public beatsNFT;
    MockUSDC public mockUSDC;

    function setUp() public {}

    function run() public {
        uint256 deployerPrivateKey = vm.envUint("PRIVATE_KEY");
        vm.startBroadcast(deployerPrivateKey);
        
        beatsNFT = new BeatsNFT();
        mockUSDC = new MockUSDC("USDC", "USDC");
        harmoni = new HarmoniMain(address(beatsNFT), address(mockUSDC));
        vm.stopBroadcast();
    }
}
