require('dotenv').config();
const { ethers } = require("ethers");

//Contract Details
const artifact = require("./build/contracts/FungibleTokenContract.json");
const network = "rinkeby";

//Instantiations
const provider = new ethers.providers.InfuraProvider(network, {
  projectId: process.env.projectId,
  projectSecret: process.env.projectSecret
});
const wallet = new ethers.Wallet(process.env.privateKey, provider);
const contract = new ethers.Contract(process.env.ftAddress, artifact.abi, wallet);
const amount = ethers.utils.parseEther("1.0");

//Transfer a token from wallet holder (account1) to account2
  (async function () {
    let recipient = process.env.address2;
    let transaction = await contract.transfer(recipient,amount);
    let result = await transaction.wait();

    //You can inspect transaction on Etherscan
    console.log(`https://rinkeby.etherscan.io/tx/${result.transactionHash}`);

    //You can inspect the token transfer activity on Etherscan
    console.log(`https://rinkeby.etherscan.io/token/${contract.address}`);

    //You can also inpect token balances on a single account
    console.log(`https://rinkeby.etherscan.io/token/${contract.address}?a=${recipient}`);

    
})();

