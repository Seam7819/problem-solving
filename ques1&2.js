// Q1. What is the difference between var, let, and const in JavaScript?
"var is function-scoped and gets hoisted with a default value of undefined, so it can lead to bugs like variables leaking outside blocks. let and const are block-scoped, introduced in ES6 to fix that. The difference between them is that let allows reassignment, while const doesn't — though if it holds an object or array, the contents can still be mutated. In practice, I default to const, use let only when I know a value will change, and avoid var altogether."

var a = 10;
let b = 20;
const c = 30;

b = 40; // Works
c = 50; // Error

// Q2. Explain the concept of hoisting in JavaScript.
"Hoisting is JavaScript's behavior of moving declarations to the top of their scope during the compile phase, before the code actually runs. var gets hoisted and initialized as undefined. let and const are hoisted too, but they stay in a 'temporal dead zone' until their line runs, so accessing them early throws an error instead of silently giving undefined. Function declarations are hoisted completely, body included, which is why you can call a function before its definition in the file."

"
b = 40; // Works
c = 50; // Error

Interview Tip:

In modern JavaScript, use const by default, let when reassignment is needed, and avoid var.

Q2. Explain the concept of hoisting.

Answer:

Hoisting is JavaScript's behavior of moving declarations to the top of their scope before execution.

Example:

console.log(a);
var a = 10;

JavaScript interprets it as:

var a;
console.log(a); // undefined
a = 10;

For let and const, variables are hoisted but remain in the Temporal Dead Zone (TDZ) until initialized.

console.log(x);
let x = 5;

Output:

ReferenceError"