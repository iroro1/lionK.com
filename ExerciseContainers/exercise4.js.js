//Solve these problems:

//#1 Create a one line function that adds adds two parameters
const add = (a, b) => a + b;
//Closure: What does the last line return?
// const addTo = x => y => x + y;
// var addToTen = addTo(10);
// addToTen(3);

//Currying: What does the last line return?
const sum = (a, b) => a + b;
const curriedSum = a => b => a + b;
curriedSum(30)(1);

//Currying: What does the last line return?
const sum = (a, b) => a + b;
const curriedSum = a => b => a + b;
const add5 = curriedSum(5);
add5(12);

//Composing: What does the last line return?
const compose = (f, g) => a => f(g(a));
const fname = num => num * 3;
const bname = num => num * 5;
compose(fname, bname)(10);
// returns 150
//What are the two elements of a pure function?
// 1. should always return the same result for the same inputs
// 2. Should not be affected by external bodies

// 1. Deterministic --> always produces the same results given the same inputs
// 2. No Side Effects -->  It does not depend on any state, or data, change during a program’s execution. It must only depend on its input elements.
