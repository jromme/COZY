document.addEventListener("DOMContentLoaded", function(event) { 
  if (window.location.href == "http://localhost:9000/") {
  setTimeout(function () {window.location.href = "/pages/02_inlog/index.html";}, 2000);
  }
});