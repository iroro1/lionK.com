let text = document.querySelector("#text");
let author = document.querySelector("#author");
let nextBtn = document.querySelector("#new-quote");
let tweet = document.querySelector("#tweet-quote");

const rand = d => {
  let rn = Math.floor(Math.random() * d.length);
  return rn;
};
const api = async () => {
  let txt;
  const data = await fetch(`https://type.fit/api/quotes`)
    .then(res => res.json())
    .then(data => data);
  // console.log(data);
  if (data) {
    console.log(data);
    let i = rand(data);
    text.textContent = data[i].text;
    author.textContent = data[i].author;
    txt = data[i].text;
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
