pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

// Example class - a mock class using delivering from ERC20
contract FungibleTokenContract is ERC20 {
  constructor(uint256 initialBalance) ERC20("FungibleTokenContract", "FTC") public {
    _mint(msg.sender, initialBalance);
  }


}