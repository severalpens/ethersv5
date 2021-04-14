# Ethers.js Demo Scripts

## Description
This repo contains demo node modules (javascript files) for interacting with the Ethereum blockchain using the Ethers.js library.

## Assumed Knowledge:
- node.js console applications
- .env and the dotenv npm package
- basic shell commands
- asynchronous javascript (if editing existing scripts)

## Setup Requirements
- Infura account
  - Visit infura.io to set up a new account
  - Create a new project in your Infura account
  - The new project will have a ProjectID and secret that will be used in running the scripts
- Node & NPM
- VS Code (or similar)
- Terminal window (VS Code inbuilt, powershell, gitbash)
- Compiler requirements
  - See https://docs.soliditylang.org/en/v0.7.4/installing-solidity.html for further details.
  - Most of these requirements may already be installed already (eg git).

## Setup
1. Copy & rename `.env_example` to `.env`
1. Update `projectId` and `projectSecret` with credentials from your infura account
1. Navigate to the folder location in a terminal window (`cd C:\path\to\project\folder`)
1. Install `npm i -g truffle` to install the Ethereum contract compiler library globally
2. Run `npm install` to install npm packages


## Run the First Script (t1_generateAccounts.js)
1. Run `node t1_generateAccounts`
1. Add test network (rinkeby) value to account1:
   - Go to https://faucet.rinkeby.io/
   - Follow the instructions on the website to add value
1. Update `.env` file with the account information that has been output to the console window


## Run the first script containing contracts (tc1_createFungibleContract.js)
1. Run `truffle compile`
   1. If this fails, check compiler is installed and requirements are met
1. Run `node tc1_createFungibleContract`
2. Update `.env` file with the contract address information (ftAddress)



## Tasks/Demos:
- `node t1_generateAccounts`: Generate  new Ethereum Accounts
- `node t2_getBalance`: Get the balance of an Ethereum Account
- `node t3_transferEth`: Transfer Eth balance between two Ethereum Accounts
- `node t4_createFT`: Create a new contract using ERC20 spec (Fungible Token)
- `node t5_transferTokens`: Transfer tokens between accounts
- `node t6_createNFT`: Create a new contract using ERC720 spec (Non Fungible Token)
- `node t7_transferNFT`: Transfer an NFT between Ethereum Accounts


