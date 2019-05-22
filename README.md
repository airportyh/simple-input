# Simple Input

An input/prompt library for node.js that *is* simple.

## Usage

The recommended usage is with async/await syntax:

```js
const prompt = require("simple-input");

async function main() {
    const name = await prompt("What is your name?");
    console.log(`Hello, ${name}!`);
}

main().catch(err => console.error(err.message));
```

But you can also use the promise style as the function
returns a promise:

```js
const prompt = require("simple-input");

prompt("What is your name?")
    .then((name) => {
        console.log(`Hello, ${name}!`);
    })
    .catch(err => {
        console.error(err.message);
    });
```