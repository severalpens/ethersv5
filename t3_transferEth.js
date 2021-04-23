require('dotenv').config();
const { ethers } = require("ethers");
const network = "rinkeby";
const chalk = require("chalk")
const provider = new ethers.providers.InfuraProvider(network, {
  projectId: process.env.projectId,
  projectSecret: process.env.projectSecret
});


const wallet = new ethers.Wallet(process.env.privateKey, provider);

//Transfer ether using IIFE function to enable async/await
(async function () {

  let tx = await wallet.sendTransaction({
    to: process.env.address2,
    value: ethers.utils.parseEther("1")
  });

  console.log(chalk.green("Transaction request successfully sent! See Etherscan for details:"));
  console.log(chalk.blue(`https://rinkeby.etherscan.io/tx/${tx.hash}`));
  console.log(chalk.yellow("Now just waiting for transaction to be completed.."));
  
  let completedTransaction = await tx.wait();
  delete(completedTransaction.logsBloom);
  console.log(chalk.green("Transaction request successfully sent! Details:"));
 console.log(completedTransaction);

})();

