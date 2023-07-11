// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.20;

import "forge-std/Test.sol";
import "../src/HarmoniMain.sol";
import "../src/BeatsNFT.sol";
import "../src/mocks/MockUSDC.sol";

contract HarmoniTest is Test {

    HarmoniMain public harmoni;
    BeatsNFT public beatsNFT;
    MockUSDC public mockUSDC;
    address public alice;
    address public bob;

    function setUp() public {
        beatsNFT = new BeatsNFT();
        mockUSDC = new MockUSDC("USDC", "USDC");
        harmoni = new HarmoniMain(address(beatsNFT), address(mockUSDC));
        beatsNFT.initialize(address(harmoni));
        alice = vm.addr(1);
        bob = vm.addr(2);
    }

    function _createBeat() internal {
        address[] memory creators = new address[](2);
        uint8[] memory shares = new uint8[](2);

        creators[0] = alice;
        shares[0] = 30;

        creators[1] = bob;
        shares[1] = 70;

        harmoni.createBeat(299, 1000, creators, shares, 2, "https://beats.com");
        harmoni.createBeat(199, 2000, creators, shares, 2, "https://beats2.com");
    }

    function testCreateBeat() public {
        _createBeat();
        HarmoniMain.Beat memory beat = harmoni.beatInfoView(1);
        harmoni.beatsCreatedView(alice);
        harmoni.beatsBalance(1);
        harmoni.beatPrice(1);

        assertEq(beat.creators[0], alice);
    }

    function testbuyBeat() public {
        _createBeat();

        uint256 payment = 1990000; // $1.99 per beat in 6 decimals

        vm.startPrank(alice);
        mockUSDC.mint(alice, payment);
        mockUSDC.approve(address(harmoni), payment);
        harmoni.buyBeat(1, payment, 1);
        vm.stopPrank();

        beatsNFT.balanceOf(alice, 1);
        harmoni.beatsBalance(1);

        HarmoniMain.Beat memory beat = harmoni.beatInfoView(1);
        assertEq(harmoni.creatorRevenues(alice), payment * beat.shares[0] / 100);
    }
}
