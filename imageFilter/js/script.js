let can = document.getElementById("can");
let inp = document.getElementById("inp");
let ingDim = document.getElementById("image-dim");

let ctx = can.getContext("2d");
ctx.fillStyle = "white";
ctx.fillRect(0, 0, can.width, can.height);
const clr = () => {
  ctx.clear(0, 0, can.width, can.height);
};
let img = null;
const upload = () => {
  img = new SimpleImage(inp);
  console.log("Loaded");
  img.drawTo(can);
};

const average = p => {
  return (p.getGreen() + p.getRed() + p.getBlue()) / 3;
};
const grayscale = () => {
  // weighted grey scale
  let imgGray = img,
    avg = 0;
  for (var p of imgGray.values()) {
    avg = average(p);
    p.setRed(avg);
    p.setBlue(avg);
    p.setGreen(avg);
  }
  imgGray.drawTo(can);
};
// red
const redFunc = p => {
  avg = average(p);
  if (avg < 128) {
    p.setRed(2 * avg);
    p.setBlue(0);
    p.setGreen(0);
  } else {
    p.setRed(255);
    p.setBlue(2 * avg - 255);
    p.setGreen(2 * avg - 255);
  }
};
const red = () => {
  let imgRed = img,
    avg = 0;
  for (var p of imgRed.values()) {
    redFunc(p);
  }
  imgRed.drawTo(can);
};
// Orange
const orangeFunc = p => {
  avg = average(p);
  if (avg < 128) {
    p.setRed(2 * avg);
    p.setBlue(0.8 * avg);
    p.setGreen(0);
  } else {
    p.setRed(255);
    p.setBlue(1.2 * avg - 51);
    p.setGreen(2 * avg - 255);
  }
};
const orange = () => {
  let imgOrange = img,
    avg = 0;
  for (var p of imgOrange.values()) {
    orangeFunc(p);
  }
  imgOrange.drawTo(can);
};
// Green
const greenFunc = p => {
  avg = average(p);
  if (avg < 128) {
    p.setRed(0);
    p.setBlue(0);
    p.setGreen(2 * avg);
  } else {
    p.setRed(2 * avg - 255);
    p.setBlue(2 * avg - 255);
    p.setGreen(255);
  }
};
const green = () => {
  let imgGreen = img,
    avg = 0;
  for (var p of imgGreen.values()) {
    greenFunc(p);
  }
  imgGreen.drawTo(can);
};
// Blue
const blueFunc = p => {
  avg = average(p);
  if (avg < 128) {
    p.setRed(0);
    p.setBlue(2 * avg);
    p.setGreen(0);
  } else {
    p.setRed(2 * avg - 255);
    p.setBlue(255);
    p.setGreen(2 * avg - 255);
  }
};
const blue = () => {
  let imgBlue = img,
    avg = 0;
  for (var p of imgBlue.values()) {
    blueFunc(p);
  }
  imgBlue.drawTo(can);
};
// Rainbow
const rainbow = () => {
  // clr();
  let imgRain = img,
    avg = 0;
  for (var p of imgRain.values()) {
    let x = p.getX(),
      y = p.getY(),
      width = img.getWidth(),
      height = img.getHeight(),
      sec = height / 5;
    avg = average(p);
    if (x < width && y < sec) {
      p.setRed(120 - avg);
      p.setGreen(0);
      p.setBlue(0);
    }
    if (x < width && y >= sec && y < sec * 2) {
      p.setRed(100);
      p.setGreen(100 - avg);
      p.setBlue(20);
    }
    if (x < width && y >= sec * 2 && y < sec * 3) {
      p.setRed(100);
      p.setGreen(100);
      p.setBlue(80 - avg);
    }
    if (x < width && y >= sec * 3 && y < sec * 4) {
      p.setRed(255 - avg);
      p.setGreen(50);
      p.setBlue(avg - 100);
    }
    if (x < width && y >= sec * 4 && y < sec * 5) {
      p.setRed(40 - avg);
      p.setGreen(50);
      p.setBlue(0);
    }
  }
  imgRain.drawTo(can);
};

const bborder = () => {
  //
  let imgbord = img,
    avg = 0;
  for (var p of imgbord.values()) {
    let x = p.getX(),
      y = p.getY(),
      width = img.getWidth(),
      height = img.getHeight(),
      sec = height / 15;
    sec2 = width / 12;
    avg = average(p);
    if (x < width && y < sec) {
      p.setRed(0);
      p.setGreen(0);
      p.setBlue(0);
    }
    if (x < sec2) {
      p.setRed(0);
      p.setGreen(0);
      p.setBlue(0);
    }
    if (x < width && y > sec * 14) {
      p.setRed(0);
      p.setGreen(0);
      p.setBlue(0);
    }
    if (x > sec2 * 11 && y < height) {
      p.setRed(0);
      p.setGreen(0);
      p.setBlue(0);
    }
  }
  imgbord.drawTo(can);
};
// Weird
const weirdFunc = p => {
  avg = average(p);
  if (avg < 128) {
    p.setRed(2 + avg * 2);
    p.setBlue(0);
    p.setGreen(2 * avg);
  } else {
    p.setRed(2 * avg - 255);
    p.setBlue(2 * avg - 255);
    p.setGreen(50 * avg);
  }
};
const weird = () => {
  //
  let imgw = img,
    avg = 0;
  for (var p of imgw.values()) {
    avg = average(p);
    weirdFunc(p);
  }
  imgw.drawTo(can);
};
