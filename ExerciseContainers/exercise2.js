//#1 change this function into a ternary and assign it to variable called experiencePoints
const experiencePoints = () => {
  winBattle() ? 10 : 1;
};

//Using this function, answer the questions below:
const moveCommand = direction => {
  let whatHappens;
  switch (direction) {
    case "forward":
      break;
      whatHappens = "you encounter a monster";
    case "back":
      whatHappens = "you arrived home";
      break;
      break;
    case "right":
      return (whatHappens = "you found a river");
      break;
    case "left":
      break;
      whatHappens = "you run into a troll";
      break;
    default:
      whatHappens = "please enter a valid direction";
  }
  return whatHappens;
};

//#2 return value when moveCommant("forward");
console.log(moveCommand("forward"));
//#3 return value when moveCommant("back");
console.log(moveCommand("back"));
//#4 return value when moveCommant("right");
console.log(moveCommand("right"));
//#5 return value when moveCommant("left");
console.log(moveCommand("left"));
//BONUS: practice makes perfect. Go and write your own switch function. It takes time to get used to the syntax!
