window.addEventListener("scroll", function(e) {
  var arrow = document.getElementById("arrow");
  if (document.documentElement.scrollTop > 0) {
    arrow.className = arrow.className.replace("downarrow", "arrowfade");
  } else {
    arrow.className = arrow.className.replace("arrowfade", "downarrow");
  }
});
