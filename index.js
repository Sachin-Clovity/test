function add(a, b) {
  return a + b;
}

function greet(name) {
  return `Hello, ${name}!`;
}

console.log(greet("world"));
console.log("2 + 3 =", add(2, 3));

module.exports = { add, greet };
