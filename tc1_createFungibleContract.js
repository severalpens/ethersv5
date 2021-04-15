require('dotenv').config();
const chalk = require("chalk");
const { ethers } = require("ethers");

//Contract details
const artifact = require("./build/contracts/FungibleTokenContract.json");
const network = "rinkeby";
const initialBalance = ethers.utils.parseEther("10000.0");
const contractConstructorArgs = [initialBalance];

//Instantiations
const provider = new ethers.providers.InfuraProvider(network, {
  projectId: process.env.projectId,
  projectSecret: process.env.projectSecret
});
const wallet = new ethers.Wallet(process.env.privateKey, provider);
const factory = new ethers.ContractFactory(artifact.abi, artifact.bytecode, wallet);
 

//Create a new contract
  (async function () {
    const deployment = await factory.deploy(...contractConstructorArgs);
    const contract = await deployment.deployed();

    //You can now add the contract address to the .env file (ftAddress)
    console.log(chalk.green(`Success! You can now update your .env file: ftAddress=${contract.address}`));
    
    //You can inspect the token transfer activity on Etherscan 
    console.log(chalk.blue(`https://rinkeby.etherscan.io/token/${contract.address}`));

})();

