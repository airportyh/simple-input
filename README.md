# Simple Prompt

A prompt library for node.js that *is* simple.

## Usage

The recommended usage is with async/await syntax:

```js
const prompt = require("simple-prompt");

async function main() {
    const input = await prompt("How are you doing?");

    console.log(`You are doing ${input}`);
}
```