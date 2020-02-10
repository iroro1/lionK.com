// Solve the below problems:

// #1) Check if this array includes the name "John".
// const dragons = ["Tim", "Johnathan", "Sandy", "Sarah"];

// console.log(dragons.includes("john"));

// #2) Check if this array includes any name that has "John" inside of it. If it does, return that
// name or names in an array.
const dragons = ["Tim", "Johnathan", "Sandy", "Sarah"];
const ndrag = dragons.filter(n => n.includes("John"));
// console.log(ndrag);
// console.log(dragons.filter(name => name.includes("John")));
// #3) Create a function that calulates the power of 100 of a number entered as a parameter
const pow100 = x => x ** 100;
// #4) Useing your function from #3, put in the paramter 10000. What is the result?
console.log(pow100(10000));
// Research for yourself why you get this result
// 1 x 10^300 that is 1000 to power 100
