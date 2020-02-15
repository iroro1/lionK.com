let add = document.querySelector("#add");
let subtract = document.querySelector("#subtract");
let divide = document.querySelector("#divide");
let multiply = document.querySelector("#multiply");
let zero = document.querySelector("#zero");
let one = document.querySelector("#one");
let two = document.querySelector("#two");
let three = document.querySelector("#three");
let four = document.querySelector("#four");
let five = document.querySelector("#five");
let six = document.querySelector("#six");
let seven = document.querySelector("#seven");
let eight = document.querySelector("#eight");
let nine = document.querySelector("#nine");
let decimal = document.querySelector("#decimal");
let clear = document.querySelector("#clear");
let display = document.querySelector("#display");
let equals = document.querySelector("#equals");

let ans = 0;

const calcOn = () => {
  display.textContent = 0;
};
const zerolength = () => {
  if (display.textContent.length === 1 && display.textContent === "0") {
    return true;
  }
};
const maxlength = () => {
  if (display.textContent.length > 13) {
    return true;
  }
};
//   let val = display.textContent;
//   let valArr = val.split(/[^0-9]/);
// let op = ["+", "-", "x", "/"];
const calculate = () => {
  //   let val1 = display.textContent.split(/[^+-x/]/);
  let val = display.textContent.split("");
  //   console.log(val1);
  //   console.log(val.find("+"));
  if (val.includes("+")) {
    let arrLen = val.length;
    let addInd = val.indexOf("+");
    let v1 = parseFloat(val.slice(0, addInd).join(""));
    let v2 = parseFloat(val.slice(addInd + 1, arrLen).join(""));
    ans = (v1 + v2).toFixed(0);
    display.textContent = ans;
  } else if (val.includes("-")) {
    let arrLen = val.length;
    let addInd = val.indexOf("-");
    let v1 = parseFloat(val.slice(0, addInd).join(""));
    let v2 = parseFloat(val.slice(addInd + 1, arrLen).join(""));
    ans = (v1 - v2).toFixed(0);
    display.textContent = ans;
  } else if (val.includes("x")) {
    let arrLen = val.length;
    let addInd = val.indexOf("x");
    let v1 = parseFloat(val.slice(0, addInd).join(""));
    let v2 = parseFloat(val.slice(addInd + 1, arrLen).join(""));
    ans = (v1 * v2).toFixed(0);
    display.textContent = ans;
  } else if (val.includes("/")) {
    let arrLen = val.length;
    let addInd = val.indexOf("/");
    let v1 = parseFloat(val.slice(0, addInd).join(""));
    let v2 = parseFloat(val.slice(addInd + 1, arrLen).join(""));
    ans = (v1 / v2).toFixed(0);
    display.textContent = ans;
  }
};
const disp = e => {
  switch (e.target.getAttribute("id")) {
    case "zero":
      zerolength() === true
        ? null
        : maxlength() === true
        ? null
        : (display.textContent += 0);
      break;
    case "one":
      zerolength() === true
        ? (display.textContent = "1")
        : maxlength() === true
        ? null
        : (display.textContent += "1");
      break;
    case "two":
      zerolength() === true
        ? (display.textContent = "2")
        : maxlength() === true
        ? null
        : (display.textContent += "2");
      break;
    case "three":
      zerolength() === true
        ? (display.textContent = "3")
        : maxlength() === true
        ? null
        : (display.textContent += "3");
      break;
    case "four":
      zerolength() === true
        ? (display.textContent = "4")
        : maxlength() === true
        ? null
        : (display.textContent += "4");
      break;
    case "five":
      zerolength() === true
        ? (display.textContent = "5")
        : maxlength() === true
        ? null
        : (display.textContent += "5");
      break;
    case "six":
      zerolength() === true
        ? (display.textContent = "6")
        : maxlength() === true
        ? null
        : (display.textContent += "6");
      break;
    case "seven":
      zerolength() === true
        ? (display.textContent = "7")
        : maxlength() === true
        ? null
        : (display.textContent += "7");
      break;
    case "eight":
      zerolength() === true
        ? (display.textContent = "8")
        : maxlength() === true
        ? null
        : (display.textContent += "8");
      break;
    case "nine":
      zerolength() === true
        ? (display.textContent = "9")
        : maxlength() === true
        ? null
        : (display.textContent += "9");
      break;
    case "decimal":
      maxlength() === true
        ? null
        : display.textContent.includes(".")
        ? null
        : (display.textContent += ".");
      break;
    case "add":
      maxlength() === true ? null : (display.textContent += "+");
      break;
    case "subtract":
      maxlength() === true ? null : (display.textContent += "-");
      break;
    case "multiply":
      maxlength() === true ? null : (display.textContent += "x");
      break;
    case "divide":
      maxlength() === true ? null : (display.textContent += "/");
      break;
    case "clear":
      display.textContent = 0;
      break;
    // default:
    //   display.textContent = 0;
  }
};

const dispRules = () => {
  display.textContent.length < 7 ? true : false;
};

window.addEventListener("load", calcOn);
zero.addEventListener("click", disp);
one.addEventListener("click", disp);
two.addEventListener("click", disp);
three.addEventListener("click", disp);
four.addEventListener("click", disp);
five.addEventListener("click", disp);
six.addEventListener("click", disp);
seven.addEventListener("click", disp);
eight.addEventListener("click", disp);
nine.addEventListener("click", disp);
decimal.addEventListener("click", disp);
add.addEventListener("click", disp);
subtract.addEventListener("click", disp);
multiply.addEventListener("click", disp);
divide.addEventListener("click", disp);
clear.addEventListener("click", disp);
equals.addEventListener("click", calculate);
