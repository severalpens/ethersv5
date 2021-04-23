const ethers = require('ethers')

let arr1 = ethers.utils.formatBytes32String("Kodos")
let arr2 = ethers.utils.formatBytes32String("Kang")
let arr3 = ethers.utils.formatBytes32String("Third")
console.log(arr1);
console.log(arr2);
console.log(arr3);

// ["0x4b6f646f73000000000000000000000000000000000000000000000000000000","0x4b616e6700000000000000000000000000000000000000000000000000000000","0x5468697264000000000000000000000000000000000000000000000000000000"]
// ["0x4b6f646f73000000000000000000000000000000000000000000000000000000","0x4b616e6700000000000000000000000000000000000000000000000000000000","0x5468697264000000000000000000000000000000000000000000000000000000"]

try{
    const chalk = require('chalk');
    
    //Print notice informing user to run 'node [filename]' instead:
    console.log(chalk.yellow("index.js (npm start) is deliberately empty. Please run files/modules individually by entering eg 'node t1_generateAccounts' instead"));

}
catch(error){
    console.log("Error: Make sure you run 'npm install' after downloading project")
    console.log(error)
}