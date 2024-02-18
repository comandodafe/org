var tb1 = document.getElementById("tb1");
  var tr_1 = tb1.getElementsByClassName("trt");
  for (var i = 0; i < tr_1.length; i++) {
    tr_1[i].addEventListener("click", function() {
      var current = document.getElementsByClassName("active");
      current[0].className = current[0].className.replace(" active", "");
      this.className += " active";
      });
  }
  var tb2 = document.getElementById("tb2");
  var tr_1 = tb2.getElementsByClassName("trt");
  for (var i = 0; i < tr_1.length; i++) {
    tr_1[i].addEventListener("click", function() {
      var current = document.getElementsByClassName("active");
      current[0].className = current[0].className.replace(" active", "");
      this.className += " active";
      });
  }