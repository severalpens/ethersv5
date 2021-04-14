pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

// Example class - a mock class using delivering from ERC20
contract NonFungibleTokenContract is ERC721 {
  constructor(address to) ERC721("NonFungibleTokenContract", "NFTC") public {
    _safeMint(to, 1,"item1");
    _safeMint(to, 2,"item2");
    _safeMint(to, 3,"item3");
  }


}