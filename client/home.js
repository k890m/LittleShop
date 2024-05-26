const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}))

//IMAGE SLIDER

const slides = document.querySelectorAll(".slides img");
let slideIndex = 0;
let intervalId = null;


document.addEventListener("DOMContentLoaded", initializeSlider)
//initializeSlider();

function initializeSlider(){
  if(slides.length > 0){
    slides[slideIndex].classList.add("displaySlide")
    intervalId = setInterval(nextSlide, 5000);
  }
}

function showSlide(index){
  slideIndex.forEach(slide => {
    slide.classList.remove("displaySlide")
  });
  slides[slideIndex].classList.add("displaySlide")
}

function prevSlide(){
  
}

function nextSlide(){
  slideIndex++;
  showSlide(slideIndex)
}