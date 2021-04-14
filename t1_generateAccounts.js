//Generate new Ethereum account
const { ethers } = require("ethers");
const rawAccount1 = ethers.Wallet.createRandom();
const account1 = {address: rawAccount1.address, privateKey: rawAccount1.privateKey};
console.log(account1);

const rawAccount2 = ethers.Wallet.createRandom();
const account2 = {address: rawAccount2.address, privateKey: rawAccount2.privateKey};
console.log(account2);

//*****DO THE FOLLOWING AFTER CREATING THE ACCOUNT*********** */
//Store the info (address,privateKey, address2, privateKey2) for the accounts  in your .env file
//Add test network (rinkeby) value to account1 at https://faucet.rinkeby.io/
//*********************************************************** */

