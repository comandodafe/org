var roltotal = document.getElementById("roltotal");
  var setup = roltotal.getElementsByClassName("setup");
  for (var i = 0; i < setup.length; i++) {
    setup[i].addEventListener("click", function() {
      var current = document.getElementsByClassName("active");
      current[0].className = current[0].className.replace(" active", "");
      this.className += " active";
    });
  }