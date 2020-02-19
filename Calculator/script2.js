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
const calculate = () => {
  let narr = [];
  let screen = display.textContent.split("");
  let temp = "";
  screen.forEach((v, i) => {
    if (v === "+" || v === "-" || v === "x" || v === "/") {
      narr.push(temp, v);
      temp = "";
    } else {
      temp += v;
    }
  });
  narr.push(temp);
  let ans = Number(narr[0]);
  for (let i = 1; i < narr.length; i++) {
    let v1 = 0;
    if (i % 2 === 0) {
      v1 = Number(narr[i]);
      narr[i - 1] === "+"
        ? (ans = ans + v1)
        : narr[i - 1] === "-"
        ? (ans = ans - v1)
        : narr[i - 1] === "/"
        ? (ans = ans / v1)
        : (ans = ans * v1);
    }
  }
  ans = String(ans);
  if (ans.includes(".")) {
    ans = parseFloat(ans);
    ans = ans.toFixed(4);
  }
  display.textContent = ans;
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
      maxlength() === true ? null : (display.textContent += ".");
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
