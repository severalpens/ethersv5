require('dotenv').config();
const fs = require('fs-extra');
const chalk = require("chalk");
const { ethers } = require("ethers");
const chairperson = {address: process.env.chairpersonAddress,privateKey: process.env.chairpersonPrivateKey}
const kodos = {address: '0x4b6f646f73000000000000000000000000000000000000000000000000000000',proposal: 0}
const kang = {address: '0x4b616e6700000000000000000000000000000000000000000000000000000000',proposal: 1}
const third = {address: '0x5468697264000000000000000000000000000000000000000000000000000000',proposal: 2}
const constructorArg = [kodos.address, kang.address, third.address];
const lizzie = {address: process.env.lizzieAddress,privateKey: process.env.lizziePrivateKey}
const tim = {address: process.env.timAddress,privateKey: process.env.timPrivateKey}
const paul = {address: process.env.paulAddress,privateKey: process.env.paulPrivateKey}

// contract arg:
// ["0x4b6f646f73000000000000000000000000000000000000000000000000000000", 
// "0x4b616e6700000000000000000000000000000000000000000000000000000000",
//  "0x5468697264000000000000000000000000000000000000000000000000000000"]

const overrides = {
      gasLimit: 200000,
      gasPrice: ethers.utils.parseUnits('20.0', 'gwei')
}

//Contract details
const artifact = require("./build/contracts/Votable.json");
const network = "rinkeby";

//Instantiations
const provider = new ethers.providers.InfuraProvider(network, {
  projectId: process.env.projectId,
  projectSecret: process.env.projectSecret
});

const wallet = new ethers.Wallet(chairperson.privateKey, provider);
const lizzieWallet = new ethers.Wallet(lizzie.privateKey, provider);
const timWallet = new ethers.Wallet(tim.privateKey, provider);
const paulWallet = new ethers.Wallet(paul.privateKey, provider);
const factory = new ethers.ContractFactory(artifact.abi, artifact.bytecode, wallet);


//Create a new contract
  async function run() {
    const deployment = await factory.deploy(constructorArg);
    const contract = await deployment.deployed();

    const lizzieContract = new ethers.Contract(contract.address, artifact.abi, lizzieWallet);
    const timContract = new ethers.Contract(contract.address, artifact.abi, timWallet);
    const paulContract = new ethers.Contract(contract.address, artifact.abi, paulWallet);
    console.log('contract address:');
    console.log(contract.address);


    console.log("chairperson gives right to vote to Lizzie");
    let t1 = await contract.giveRightToVote(lizzie.address,overrides);
    let t1Result = await t1.wait();
    console.log(`https://rinkeby.etherscan.io/tx/${t1Result.transactionHash}`);

    console.log("chairperson gives right to vote to Tim");
    let t2 = await contract.giveRightToVote(tim.address,overrides);
    let t2Result = await t2.wait();
    console.log(`https://rinkeby.etherscan.io/tx/${t2Result.transactionHash}`);

    console.log("chairperson gives right to vote to Paul");
    let t3 = await contract.giveRightToVote(paul.address,overrides);
    let t3Result = await t3.wait();
    console.log(`https://rinkeby.etherscan.io/tx/${t3Result.transactionHash}`);

    console.log("Lizzie votes for Kang");
    let t4 = await lizzieContract.vote(kang.proposal,overrides);
    let t4Result = await t4.wait();
    console.log(`https://rinkeby.etherscan.io/tx/${t4Result.transactionHash}`);

    try{
    console.log("Tim votes for Kang");
    let t5 = await timContract.vote(kang.proposal,overrides);
    console.log(`https://rinkeby.etherscan.io/tx/${t5.hash}`);
    let t5Result = await t5.wait();
    console.log(`https://rinkeby.etherscan.io/tx/${t5Result.transactionHash}`);
    }
    catch(err){

    }

    try{
    console.log("Paul votes for Kang");
    let t6 = await paulContract.vote(kang.proposal,overrides);
    console.log(`https://rinkeby.etherscan.io/tx/${t6.hash}`);
    let t6Result = await t6.wait();
    console.log(`https://rinkeby.etherscan.io/tx/${t6Result.transactionHash}`);
    }catch(err){

    }

    console.log("chairperson announces winning name");
    let t8 = await contract.winnerName();
    console.log(t8);
    let winner = ethers.utils.parseBytes32String(t8);
    console.log('And the winner is..');
    console.log(`Congratulations ${winner}!`);

};

run()

