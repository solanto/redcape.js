window.addEventListener("scroll", function(e) {
  var arrow = document.getElementById("arrow");
  var body = document.body;
  if (document.documentElement.scrollTop > 0) {
    arrow.className = arrow.className.replace("downarrow", "arrowfade");
    // body.className = body.className.replace("bright", "muted");
  } else {
    arrow.className = arrow.className.replace("arrowfade", "downarrow");
    // body.className = body.className.replace("muted", "bright");
  }
});

var moveRotation = -1; // start by going left
var moveSpan = document.getElementById("move");
moveSpan.className = "rotateleft";

function rotateMove() {
  if (moveRotation == 1) {
    moveSpan.className = moveSpan.className.replace("rotateleft", "rotateright");
    moveRotation = -1;
  } else {
    moveSpan.className = moveSpan.className.replace("rotateright", "rotateleft");
    moveRotation = 1;
  }
}

setInterval(rotateMove, 250);

var colorSpan = document.getElementById("color");
function colorBeat() {
  colorSpan.className = "pacific";
  setTimeout(function() {colorSpan.className = "";}, 20);
}

setInterval(colorBeat, 1200);

var inputSpan = document.getElementById("input");
function stretchInput() {
  inputSpan.className = "stretch";
  setTimeout(function() {inputSpan.className = "";}, 500);
}
