window.addEventListener("scroll", function(e) {
  var arrow = document.getElementById("arrow");
  var body = document.body;
  if (document.documentElement.scrollTop > 0) {
    arrow.className = arrow.className.replace("downarrow", "arrowfade");
    body.className = body.className.replace("bright", "muted");
  } else {
    arrow.className = arrow.className.replace("arrowfade", "downarrow");
    body.className = body.className.replace("muted", "bright");
  }
});
