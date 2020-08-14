var modal = document.querySelectorAll(".myModal");
var btn = document.querySelectorAll(".myBtn");
var span = document.querySelectorAll(".close");

btn.forEach(function(e, i) {
  e.addEventListener('click', function() {
    modal[i].style.display = "block";
  })
  span[i].addEventListener('click', function() { 
    modal[i].style.display = "none";
  })
})