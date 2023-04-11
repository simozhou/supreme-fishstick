function toggleText(id) {
  var text = document.getElementById(id);
  if (text.style.display === "none") {
    text.style.display = "block";
  } else {
    text.style.display = "none";
  }
}