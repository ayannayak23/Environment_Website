//Ayan Nayak

let slide = 1;
slideShow(slide);

let arrowLeft = document.querySelector("#arrows-left")
let arrowRight = document.querySelector("#arrows-right")

function changeSlides(n) {
  slideShow(slide += n);
}

arrowLeft.addEventListener('click', changeSlides(-1));
arrowRight.addEventListener('click', changeSlides(1));

function slideShow(n) {
  let slides = document.getElementsByClassName("slide");
  if (n > 3) {slide = 1}
  if (n < 1) {slide = 3}
  for (i = 0; i < 3; i++) {
    slides[i].style.display = "none";
  }

  slides[slide-1].style.display = "block";
}
