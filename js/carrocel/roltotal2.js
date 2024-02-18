var roltotal = document.getElementById("roltotal");
  var campoativo = roltotal.getElementsByClassName("campoativo");
  for (var i = 0; i < campoativo.length; i++) {
    campoativo[i].addEventListener("click", function() {
      var current = document.getElementsByClassName("active");
      current[0].className = current[0].className.replace(" active", "");
      this.className += " active";
    });
  }