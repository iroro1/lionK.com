// write your code here
var start = new SimpleImage("chapel.png");
var hide = new SimpleImage("dinos.png");

function crop(image, width, height) {
  var n = new SimpleImage(width, height);
  for (var p of image.values()) {
    var x = p.getX();
    var y = p.getY();
    // MISSING CODE
    if (x < width && y < height) {
      var np = n.getPixel(x, y);
      np.setRed(p.getRed());
      np.setBlue(p.getBlue());
      np.setGreen(p.getGreen());
    }
  }
  return n;
}

var cropWidth = start.getWidth();
if (hide.getWidth() < cropWidth) {
  cropWidth = hide.getWidth();
}
var cropHeight = start.getHeight();
if (hide.getHeight() < cropHeight) {
  cropHeight = hide.getHeight();
}
start = crop(start, cropWidth, cropHeight);
hide = crop(hide, cropWidth, cropHeight);
// print(start);
// print(hide);

// Code for combining
function newpv(p, q) {
  var answer = p + q;
  if (p + q > 255) print("error: answer too big");
  return answer;
}
function combine(a, b) {
  var n = new SimpleImage(a.getWidth(), a.getHeight());
  for (var pa of a.values()) {
    // missing code
    var x = pa.getX();
    var y = pa.getY();
    var pb = b.getPixel(x, y);
    var np = n.getPixel(x, y);
    np.setRed(newpv(pa.getRed(), pb.getRed()));
    np.setGreen(newpv(pa.getGreen(), pb.getGreen()));
    np.setBlue(newpv(pa.getBlue(), pb.getBlue()));
  }
  return n;
}

print(combine(start, hide));

// print(start.getWidth())
// print(start)
// print(crop(start,100,100))
// print(start.getWidth())
