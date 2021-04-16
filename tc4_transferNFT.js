require('dotenv').config();
const { ethers } = require("ethers");

//Contract details
const artifact = require("./build/contracts/NonFungibleTokenContract.json");
const network = "rinkeby";


//Instantiations
const provider = new ethers.providers.InfuraProvider(network, {
  projectId: process.env.projectId,
  projectSecret: process.env.projectSecret
});
const wallet = new ethers.Wallet(process.env.privateKey, provider);
const contract = new ethers.Contract(process.env.nftAddress, artifact.abi, wallet);

//Transfer a token from wallet holder (account1) to account2
(async function () {
  let from = process.env.address;
  let to = process.env.address2;
  let transaction = await contract.transferFrom(from, to, 1);
  let result = await transaction.wait();

  //You can inspect the transaction on Etherscan
  console.log(`https://rinkeby.etherscan.io/tx/${result.transactionHash}`);

  //You can inspect the token transfer activity on Etherscan
  console.log(`https://rinkeby.etherscan.io/token/${contract.address}`);
  
})();

