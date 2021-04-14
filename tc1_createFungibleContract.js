require('dotenv').config();
const { ethers } = require("ethers");
const network = "rinkeby";
const artifact = require("./build/contracts/FungibleTokenContract.json");
const initialBalance = ethers.utils.parseEther("10000.0");
const contractConstructorArgs = [initialBalance];
const provider = new ethers.providers.InfuraProvider(network, process.env.INFURA);
const wallet = new ethers.Wallet(process.env.privateKey, provider);
const factory = new ethers.ContractFactory(artifact.abi, artifact.bytecode, wallet);
 

//Create a new contract
  (async function () {
    const deployment = await factory.deploy(...contractConstructorArgs);
    const contract = await deployment.deployed();

    //You can now add the contract address to the .env file (ftAddress)
    console.log(`update .env file: ftAddress=${contract.address}`)
    
    //You can inspect the token transfer activity on Etherscan 
    console.log(`https://rinkeby.etherscan.io/token/${contract.address}`);

    console.log(contract);

})();

