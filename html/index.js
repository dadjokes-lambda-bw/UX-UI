var slideIndex = 1;
showSlides(slideIndex);

let dot1 = document.querySelectorAll(".dot")[0]
let dot2 = document.querySelectorAll(".dot")[1]
let dot3 = document.querySelectorAll(".dot")[2]
dot1.addEventListener('click', currentSlide(1))
dot2.addEventListener('click', currentSlide(2))
dot3.addEventListener('click', currentSlide(3))


let button1 = document.querySelector(".prev")
let button2 = document.querySelector(".next")
button1.addEventListener('click', plusSlides(-1))
button2.addEventListener('click', plusSlides(1))




// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);

}


// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1} 
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none"; 
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block"; 
  dots[slideIndex-1].className += " active";
}