// change everything below to the newer Javascript!
console.log("good");

// let + const
let a = "test";
let b = true;
let c = 789;
// a = test;

// Destructuring
const person = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue",
  city: "LA"
};
const { firstName, lastName, age, eyeColor, city } = person;
// var firstName = person.firstName;
// var lastName = person.lastName;
// var age = person.age;
// var eyeColor = person.eyeColor;

// Object properties
// let a = "test";
// let b = true;
// let c = 789;

// const okObj = {
//   a,
//   b,
//   c
// };
// const okObj = {
//   a: a,
//   b: b,
//   c: c
// };

// Template strings
var message1 =
  "Hello " +
  firstName +
  " have I met you before? I think we met in " +
  city +
  " last summer no???";

let message = `Hello ${firstName} have I met you before? I think we met in ${city} last summer no???`;
// default arguments
// default age to 10;
function isValidAge(age = 10) {
  return age;
}

// Symbol
// Create a symbol: "This is my first Symbol"
let sym1 = Symbol("This is my first Symbol");
// Arrow functions
const whereAmI = (username, location) => {
  if (username && location) {
    return "I am not lost";
  } else {
    return "I am totally lost!";
  }
};