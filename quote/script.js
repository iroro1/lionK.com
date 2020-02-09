let text = document.querySelector("#text");
let author = document.querySelector("#author");
let nextBtn = document.querySelector("#new-quote");

const api = () => {
  fetch("https://thesimpsonsquoteapi.glitch.me/quotes")
    .then(res => res.json())
    .then(data => {
      text.textContent = data[0].quote;
      author.textContent = data[0].character;
    });
};
window.addEventListener("load", api);
nextBtn.addEventListener("click", api);
