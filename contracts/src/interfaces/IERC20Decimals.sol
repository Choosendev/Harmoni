// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "openzeppelin-contracts/contracts/token/ERC20/IERC20.sol";

interface IERC20Decimals is IERC20 {

    function decimals() external view returns (uint8);
}