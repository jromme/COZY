document.addEventListener("DOMContentLoaded", function(event) {
  if (window.location.href == "http://localhost:9000/") {
    setTimeout(function () {window.location.href = "/pages/02_inlog/index.html";}, 2000);
  }

  if (window.location.href == "http://localhost:9000/pages/06_temperatuur/index.html") {
      console.log(
        $('.dial').knob()
      )

        $(".dial").knob({
          'min':-50,
          'max':50,
          'value':75,
        });
  }
});

