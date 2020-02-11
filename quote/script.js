let text = document.querySelector("#text");
let author = document.querySelector("#author");
let nextBtn = document.querySelector("#new-quote");
let tweet = document.querySelector("#tweet-quote");

const rand = d => {
  let rn = Math.floor(Math.random() * d.length);
  return rn;
};

img = document.createElement("img");
img.setAttribute(
  "src",
  "https://i.ya-webdesign.com/images/transparent-welcome-gif-background-3.gif"
);
img.setAttribute("alt", "LOADING...");
img.setAttribute("width", "200px");

const api = async () => {
  let txt;
  text.appendChild(img);

  const data = await fetch(`https://type.fit/api/quotes`).then(res =>
    res.json()
  );

  if (data) {
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
