const readline = require('readline');

module.exports = function prompt(message) {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    rl.question(message + " ", (answer) => {
    

        rl.close();
    });
}