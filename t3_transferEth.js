require('dotenv').config();
const { ethers } = require("ethers");
const network = "rinkeby";

const provider = new ethers.providers.getDefaultProvider(network,
  {
    infura: {
      projectId: process.env.projectId,
      projectSecret: process.env.projectSecret
    }
  }
);

const wallet = new ethers.Wallet(process.env.privateKey, provider);

//Transfer ether using IIFE function to enable async/await
(async function () {

  let tx = await wallet.sendTransaction({
    to: process.env.address2,
    value: ethers.utils.parseEther("0.0000000001")
  });

  console.log(`https://rinkeby.etherscan.io/tx/${tx.hash}`);

 let completedTransaction = await tx.wait();
 delete(completedTransaction.logsBloom);
 console.log(completedTransaction);

})();

