var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
let lis = document.querySelectorAll("li");
let rmbutton = document.querySelectorAll(".remove");

function inputLength() {
  return input.value.length;
}

function createListElement() {
  var li = document.createElement("li");
  let dbtn = document.createElement("button");
  dbtn.setAttribute("class", "remove");
  dbtn.textContent = "x";

  li.appendChild(document.createTextNode(input.value));
  li.appendChild(dbtn);
  ul.appendChild(li);
  input.value = "";
}

function addListAfterClick() {
  if (inputLength() > 0) {
    createListElement();
  }
}

function addListAfterKeypress(event) {
  if (inputLength() > 0 && event.keyCode === 13) {
    createListElement();
  }
}

function lisManipulation(e) {
  //   console.log(e.target.textContent);
  if (e.target.className !== "remove") {
    return e.target.classList.toggle("done");
  } else {
    e.target.parentElement.remove();
  }
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

ul.addEventListener("click", lisManipulation);
