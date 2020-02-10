var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
let lis = document.querySelectorAll("li");
let rmbutton = document.querySelectorAll(".remove");
let p = document.querySelector("#first");

// load local Storage
function loadList(e) {
  let list = localStorage.getItem("items");
  if (list === null || list === "[]") {
    console.log("InValid");
    localStorage.setItem("items", "[]");
    p.textContent = "EMPTY LIST";
    p.setAttribute("class", "text-danger");
  } else {
    p.textContent = "Get it done today";
    p.setAttribute("class", "text-success");
    JSON.parse(list).forEach(e => createListElement(e, "create"));
  }
}

function listInValid(list) {
  if (list === null && list === undefined && list === "" && list.length === 0) {
    return 0;
  } else {
    return 1;
  }
}
function inputLength() {
  return input.value.length;
}
function makeIt(val) {
  let li = document.createElement("li");
  let dbtn = document.createElement("button");
  let i = document.createElement("i");
  // i.setAttribute("class", "fas fa-trash-alt");
  dbtn.setAttribute("class", "remove btn");
  dbtn.appendChild(i);
  li.appendChild(document.createTextNode(val));
  li.appendChild(dbtn);
  ul.appendChild(li);
  input.value = "";
}
function createListElement(val, wtd) {
  if (wtd === "create") {
    makeIt(val);
  } else {
    let list = JSON.parse(localStorage.getItem("items"));
    localStorage.setItem("items", JSON.stringify([...list, val]));
    makeIt(val);
  }
}
function addListAfterClick(e) {
  if (inputLength() > 0) {
    // local storage
    createListElement(input.value);
  }
}
function addListAfterKeypress(event, v) {
  if (inputLength() > 0 && event.keyCode === 13) {
    createListElement(input.value);
  }
}
function lisManipulation(e) {
  if (e.target.className !== "remove btn") {
    return e.target.classList.toggle("done"); //Mark item
  } else {
    // delete item
    e.target.parentElement.remove();
    let list = localStorage.getItem("items");
    list = JSON.parse(list);
    let val = e.target.parentElement.textContent;
    console.log(val);
    let nlist = list.filter(e => e !== val);
    localStorage.setItem("items", JSON.stringify(nlist));
  }
}

window.addEventListener("load", loadList);
button.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);
ul.addEventListener("click", lisManipulation);
