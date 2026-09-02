const assert = require("assert");
const { add, greet } = require("./index");

assert.strictEqual(add(2, 3), 5);
assert.strictEqual(greet("world"), "Hello, world!");

console.log("All tests passed.");
