let can = document.getElementById("can");
let inp = document.getElementById("inp");
let ingDim = document.getElementById("image-dim");

let ctx = can.getContext("2d");

// Upload
let img = null;
// originalImage = null;
const upload = () => {
  img = new SimpleImage(inp);
  // originalImage = new SimpleImage(inp);
  console.log("Loaded");
  img.drawTo(can);
  return img;
};
let originalImage = img;
// Clear Filter
const clr = x => {
  ctx.fillStyle = "white";
  ctx.fillRect(0, 0, 300, 300);
  // originalImage.drawTo(x);
};
// Average
const average = p => {
  return (p.getGreen() + p.getRed() + p.getBlue()) / 3;
};
const grayscale = () => {
  clr();
  let imgGray = img,
    avg = 0;
  for (let p of imgGray.values()) {
    avg = average(p);
    p.setRed(avg);
    p.setBlue(avg);
    p.setGreen(avg);
  }
  imgGray.drawTo(can);
  return imgGray;
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
  return p;
};
const red = () => {
  clr(can);

  let imgRed = img;
  for (let p of imgRed.values()) {
    redFunc(p);
  }
  imgRed.drawTo(can);
  return imgRed;
};
// Pink
const orangeFunc = p => {
  // clr();
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
  for (let p of imgOrange.values()) {
    orangeFunc(p);
  }
  imgOrange.drawTo(can);
};
// Green
const greenFunc = p => {
  // clr();
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
  for (let p of imgGreen.values()) {
    greenFunc(p);
  }
  imgGreen.drawTo(can);
};
// Blue
const blueFunc = p => {
  // clr();
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
  for (let p of imgBlue.values()) {
    blueFunc(p);
  }
  imgBlue.drawTo(can);
};
// Rainbow
const rainbow = () => {
  // clr();
  let imgRain = img,
    avg = 0;
  for (let p of imgRain.values()) {
    let x = p.getX(),
      y = p.getY(),
      width = img.getWidth(),
      height = img.getHeight(),
      sec = height / 5;
    avg = average(p);
    if (x < width && y < sec) {
      p.setRed(255 - avg);
      p.setGreen(0);
      p.setBlue(0);
    }
    if (x < width && y >= sec && y < sec * 2) {
      p.setRed(255 - avg);
      p.setGreen(100);
      p.setBlue(0);
    }
    if (x < width && y >= sec * 2 && y < sec * 3) {
      p.setRed(255 - avg);
      p.setGreen(100);
      p.setBlue(100);
    }
    if (x < width && y >= sec * 3 && y < sec * 4) {
      p.setRed(255 - avg);
      p.setGreen(50);
      p.setBlue(avg - 100);
    }
    if (x < width && y >= sec * 4 && y < sec * 5) {
      p.setRed(255 - avg);
      p.setGreen(100);
      p.setBlue(0);
    }
  }
  imgRain.drawTo(can);
};
// Neg
const neg = () => {
  // clr();
  let imgRain = img,
    avg = 0;
  for (let p of imgRain.values()) {
    avg = average(p);
    p.setRed(150 - avg);
    p.setGreen(50 - avg);
    p.setBlue(150 - avg);
  }
  imgRain.drawTo(can);
};

const bborder = () => {
  // clr();
  let imgbord = img,
    avg = 0;
  for (let p of imgbord.values()) {
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
  return imgbord;
};
// Weird
const weirdFunc = p => {
  // clr();
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
  return p;
};
const weird = () => {
  //
  let imgw = img,
    avg = 0;
  for (let p of imgw.values()) {
    avg = average(p);
    weirdFunc(p);
  }
  imgw.drawTo(can);
};

// GREEN SCREEN CODE
let canfg = document.getElementById("canfg");
let canbg = document.getElementById("canbg");
let inpfg = document.getElementById("inpfg");
let inpbg = document.getElementById("inpbg");

let ctxGreen = canfg.getContext("2d");

// Load Image
let imgfg = null;
let imgbg = null;

const crop = (img, width, height) => {
  img.setSize(width, height);
  // let n = new SimpleImage(width, height);
  // for (let p of img.values()) {
  //   let x = p.getX();
  //   let y = p.getY();
  //   if (x < width && y < height) {
  //     let np = n.getPixel(x, y);
  //     np.setRed(p.getRed());
  //     np.setBlue(p.getBlue());
  //     np.setGreen(p.getGreen());
  //   }
  // }
  return img;
};

const uploadGreen = () => {
  imgfg = new SimpleImage(inpfg);
  imgbg = new SimpleImage(inpbg);

  console.log("Loaded");
  imgfg.drawTo(canfg);
  imgbg.drawTo(canbg);
};

// Replace
const refine = () => {
  // let cropWidth = 200;
  // let cropHeight = 200;
  // imgbg.getWidth() < imgfg.getWidth()
  //   ? (cropWidth = imgbg.getWidth())
  //   : (cropWidth = imgfg.getWidth());
  // imgbg.getHeight() < imgfg.getHeight()
  //   ? (cropHeight = imgbg.getHeight())
  //   : (cropHeight = imgfg.getHeight());
  imgfg = crop(imgfg, 300, 300);
  imgbg = crop(imgbg, 300, 300);
  for (let px of imgfg.values()) {
    let x = px.getX();
    let y = px.getY();
    compare(px, x, y);
  }
  imgfg.drawTo(canfg);
  console.log(imgfg.getWidth(), imgfg.getHeight());
  return imgfg;
};

const compare = (px, x, y) => {
  // imgbg = crop(imgbg, 200, 200);
  for (let p of imgbg.values()) {
    if (p.getX() === x && p.getY() === y) {
      if (px.getGreen() > px.getRed() + px.getBlue()) {
        px.setRed(p.getRed());
        px.setGreen(p.getGreen());
        px.setBlue(p.getBlue());
      }
    }
  }
  console.log(px);
  return px;
};

// STEGANOGRAPHIC CODE
let canmain = document.getElementById("canmain");
let canhide = document.getElementById("canhide");
let inpmain = document.getElementById("inpmain");
let inphide = document.getElementById("inphide");

let ctxHide = canhide.getContext("2d");
// ctx.fillRect(0, 0, 300, 300);
// DATA ENCODING

// Chop bits
const chop2hide = img => {
  for (let p of img.values()) {
    p.setRed(Math.floor((p.getRed() / 16) * 16));
    p.setGreen(Math.floor((p.getGreen() / 16) * 16));
    p.setBlue(Math.floor((p.getBlue() / 16) * 16));
  }
  return img;
};
// Shift Hide
const shift = img => {
  for (let p of img.values()) {
    p.setRed(Math.floor(p.getRed() / 16));
    p.setGreen(Math.floor(p.getGreen() / 16));
    p.setBlue(Math.floor(p.getBlue() / 16));
  }
  return img;
};
// NewPV
const newpv = (p, q) => {
  let answer = p + q;
  // if (p + q > 255) ("error: answer printtoo big");
  return answer;
};
// Combine
const combine = (a, b) => {
  let n = new SimpleImage(a.getWidth(), a.getHeight());
  for (let pa of a.values()) {
    // console.log("Workinnnnnnng");
    let x = pa.getX(),
      y = pa.getY();
    let pb = b.getPixel(x, y);
    let np = n.getPixel(x, y);
    np.setRed(newpv(pa.getRed(), pb.getRed()));
    np.setGreen(newpv(pa.getGreen(), pb.getGreen()));
    np.setBlue(newpv(pa.getBlue(), pb.getBlue()));
    // console.log(np);
  }
  return n;
};

// START
let imgmain = null,
  imghide = null;
const uploadSteg = () => {
  imgmain = new SimpleImage(inpmain);
  imghide = new SimpleImage(inphide);
  console.log("Loaded");
  imgmain.drawTo(canmain);
  imghide.drawTo(canhide);
  // }
};

// Hide
const hideProcess = () => {
  let cropWidth = null;
  let cropHeight = null;
  imghide.getWidth() < imgmain.getWidth()
    ? (cropWidth = imghide.getWidth())
    : (cropWidth = imgmain.getWidth());
  imghide.getHeight() < imgmain.getHeight()
    ? (cropHeight = imghide.getHeight())
    : (cropHeight = imgmain.getHeight());

  imgmain = crop(imgmain, cropWidth, cropHeight);
  imghide = crop(imghide, cropWidth, cropHeight);
  imgmain.drawTo(canmain);
  imghide.drawTo(canhide);

  console.log("hiding", imgmain.getWidth(), imghide.getHeight());
  let x = chop2hide(imghide);
  x = shift(x);
  x = combine(imgmain, x);
  x.drawTo(canmain);
  ctxHide.fillStyle = "white";
  ctxHide.fillRect(0, 0, 300, 300);
  // inphide.value = "";

  console.log("Done");
};

// DATA DECODING

// Chop bits
const chop2extract = img => {
  for (let p of img.values()) {
    p.setRed(Math.floor((p.getRed() % 16) * 16));
    p.setGreen(Math.floor((p.getGreen() % 16) * 16));
    p.setBlue(Math.floor((p.getBlue() % 16) * 16));
  }
  return img;
};

// UnShift Hide
const unShift = img => {
  for (let p of img.values()) {
    p.setRed(Math.floor(p.getRed() * 16));
    p.setGreen(Math.floor(p.getGreen() * 16));
    p.setBlue(Math.floor(p.getBlue() * 16));
  }
  return img;
};
// SetNew
const setNew = img => {
  for (let p of img.values()) {
    let z = canmain.getPixel(p.getX(), p.getY());
    p.setRed(z.getRed());
    p.setGreen(z.getGreen());
    p.setBlue(z.getBlue());
  }
  return img;
};
// Extract
const extract = () => {
  let x = new SimpleImage(canmain);
  x = chop2extract(x);
  x = unShift(x);
  // x = setNew(x);
  // let n = new SimpleImage(x);
  x.drawTo(canhide);
  // if (inpmain && !inphide) {
  //   console.log("extracting");
  //   // x = unShift(x);
  // } else {
  //   console.log("extracting");
  //   // let x = chop2extract(inphide);
  //   // x = unShift(x);
  //   inpmain.drawTo(canhide);
  // }
};
