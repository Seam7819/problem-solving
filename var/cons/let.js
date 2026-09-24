// Q1. What is the difference between var, let, and const in JavaScript?
// Notes / Answer:
// বাংলা: var function-scoped, re-declare ও update দুটোই করা যায়, hoist হয়ে undefined দিয়ে initialize হয়। let block-scoped, update করা যায় কিন্তু re-declare করা যায় না। const block-scoped, re-assign করা যায় না (তবে object/array এর ভেতরের content mutate করা যায়)।
// English: var is function-scoped, can be re-declared/updated, hoisted with undefined. let is block-scoped, can be updated but not re-declared. const is block-scoped and cannot be re-assigned (though its object/array contents can still be mutated).
// var a = 10; var a = 20;   // OK
// let b = 10; b = 20;        // OK, can't re-declare
// const c = { x: 1 }; c.x = 2; // OK — content changed, not reassigned
