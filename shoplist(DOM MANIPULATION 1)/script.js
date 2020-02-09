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
  dbtn.setAttribute("class", "remove btn");
  dbtn.textContent = "x";

  li.appendChild(document.createTextNode(input.value));
  li.appendChild(dbtn);
  ul.appendChild(li);
  input.value = "";
}
// load local Storage
let state ={
  items=[]
};
function loadList() {
  if (localStorage.getItem("items") === "") {
    return "The Shopping List Is Empty.";
  } else {
    state.items = localStorage.getItem("items");
    console.log(state.items);
  }
}
// items = loadList();
console.log(items);

function addListAfterClick() {
  if (inputLength() > 0) {
    // local storage
    localStorage.setItem("items", [...items, input.value]);
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
  if (e.target.className !== "remove btn") {
    return e.target.classList.toggle("done"); //Mark item
  } else {
    // delete item
    e.target.parentElement.remove();
  }
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

ul.addEventListener("click", lisManipulation);

window.addEventListener("load", loadList);
