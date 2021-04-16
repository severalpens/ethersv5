require('dotenv').config();
const { ethers } = require("ethers");
const chalk = require("chalk");

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
  
  //Transfer details
  let from = process.env.address;
  let to = process.env.address2;
  let id = 2;
  let args = [from, to, id];

  //Transfer token
  let transaction = await contract.transferFrom(...args);
  let result = await transaction.wait();

  //You can now add the contract address to the .env file (ftAddress)
  console.log(chalk.green(`Success! Visit etherscan for details:`));
    
  //You can inspect the transaction on Etherscan
  console.log(chalk.blue(`https://rinkeby.etherscan.io/tx/${result.transactionHash}`));

  //You can inspect the token transfer activity on Etherscan
  console.log(chalk.blue(`https://rinkeby.etherscan.io/token/${contract.address}`));
  
})();

