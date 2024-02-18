var roltotal = document.getElementById("roltotal");
  var rolquadro = roltotal.getElementsByClassName("rolquadro");
  for (var i = 0; i < rolquadro.length; i++) {
    rolquadro[i].addEventListener("click", function() {
      var current = document.getElementsByClassName("active");
      current[0].className = current[0].className.replace(" active", "");
      this.className += " active";
    });
  }