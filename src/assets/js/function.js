var slideIndex = 1;

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {
    slideIndex = 1
  }
  if (n < 1) {
    slideIndex = slides.length
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
  captionText.innerHTML = dots[slideIndex - 1].alt;
}

function convertStringToArray(str) {
  let arr = [];
  let temp1 = str.replace('[', '');
  let temp2 = temp1.replace(']', '');
  let temp3 = temp2.replace('"', '');
  let temp4 = temp3.replace('"', '');
  let temp5 = temp4.replace('"', '');
  let temp6 = temp5.replace('"', '');
  let temp7 = temp6.replace(' ', '');
  arr = temp7.split(',');
  console.log(arr);
  return arr;
}
