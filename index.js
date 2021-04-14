try{
    const chalk = require('chalk');
    
    //Print notice informing user to run 'node [filename]' instead:
    console.log(chalk.yellow("index.js (npm start) is deliberately empty. Please run files/modules individually by entering eg 'node t1_generateAccounts' instead"));

}
catch(error){
    console.log("Error: Make sure you run 'npm install' after downloading project")
    console.log(error)
}