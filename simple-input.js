const readline = require('readline');

module.exports = function input(message) {
    return new Promise((accept) => {
        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });
    
        rl.question(message + " ", (answer) => {
            rl.close();
            accept(answer);
        });
    });
}