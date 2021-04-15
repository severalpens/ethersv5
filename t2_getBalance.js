require('dotenv').config();
const { ethers } = require("ethers");
const network = "rinkeby";

const provider = new ethers.providers.InfuraProvider(network, {
  projectId: process.env.projectId,
  projectSecret: process.env.projectSecret
});


const getBalanceAsync = async (address) => {
  let rawBalance = await provider.getBalance(address);
  return ethers.utils.formatEther(rawBalance);
}


// Get balances using IIFE function to enable async/await
(async function () {
  const account1Balance = await getBalanceAsync(process.env.address);
  const account2Balance = await getBalanceAsync(process.env.address2);
  console.log(`Account1 balance: ${account1Balance}`);
  console.log(`Account2 balance: ${account2Balance}`);
})();


