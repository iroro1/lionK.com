let text = document.querySelector("#text");
let author = document.querySelector("#author");
let nextBtn = document.querySelector("#new-quote");
let tweet = document.querySelector("#tweet-quote");

const api = () => {
  let txt;
  let data;
  fetch(`https://thesimpsonsquoteapi.glitch.me/quotes`)
    .then(res => res.json())
    .then(data => {
      data;
    });

  if (data) {
    text.textContent = data[0].quote;
    author.textContent = data[0].character;
    txt = data[0].quote;
    tweet.setAttribute("href", `https://twitter.com/intent/tweet?text=${txt}`);
  } else {
    text.textContent =
      "OOps sorry. \r The Server May be Down. Plese Try Again Later ...";
    author.textContent = "Server Error";
    txt = "The Server May be Down. Plese Try Again Later";
    tweet.setAttribute("href", `https://twitter.com/intent/tweet?text=${txt}`);
  }
};
window.addEventListener("load", api);
nextBtn.addEventListener("click", api);
