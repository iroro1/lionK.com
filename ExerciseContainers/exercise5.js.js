// Complete the below questions using this array:
const array = [
  {
    username: "john",
    team: "red",
    score: 5,
    items: ["ball", "book", "pen"]
  },
  {
    username: "becky",
    team: "blue",
    score: 10,
    items: ["tape", "backpack", "pen"]
  },
  {
    username: "susy",
    team: "red",
    score: 55,
    items: ["ball", "eraser", "pen"]
  },
  {
    username: "tyson",
    team: "green",
    score: 1,
    items: ["book", "pen"]
  }
];

//Create an array using forEach that has all the usernames with a "!" to each of the usernames
let excArr = [];
array.forEach(e => {
  excArr.push(e["username"] + "!");
  // console.log(e["username"] + "!");
});
// console.log(array);

//Create an array using map that has all the usernames with a "? to each of the usernames
const marr = array.map(e => {
  return `${e["username"]}?`;
});

//Filter the array to only include users who are on team: red
const farr = array.filter(u => {
  return u["team"] === "red";
});

//Find out the total score of all users using reduce
const rarr = array.reduce((total, user) => {
  return total + user["score"];
}, 0);

// console.log(rarr);

// (1), what is the value of i?
// (2), Make this map function pure:
const arrayNum = [1, 2, 4, 5, 8, 9];
const newArray = arrayNum.map((num, i) => {
  return num * 2;
});

//BONUS: create a new list with all user information, but add "!" to the end of each items they own.
const bonus = array.map(user => {
  let n = user["items"].map(i => i + "!");
  user["items"] = n;
  // return n;
  return user;
});
// console.log(array);
