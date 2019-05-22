const readline = require('readline');

module.exports = function prompt(message) {
    return new Promise
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    rl.question(message + " ", (answer) => {
        rl.close();
    });
}