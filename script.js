
function myFunction() {
  var x = document.getElementById("nav-id");
  if (x.className === "nav-header") {
    x.className += " responsive";
  } else {
    x.className = "nav-header";
  }
}