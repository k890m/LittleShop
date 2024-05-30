const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
}));

// IMAGE SLIDER

const slides = document.querySelectorAll(".slides img");
let slideIndex = 0;
let intervalId = null;

document.addEventListener("DOMContentLoaded", initializeSlider);

function initializeSlider() {
  if (slides.length > 0) {
    slides[slideIndex].classList.add("displaySlide");
    intervalId = setInterval(nextSlide, 5000);
  }
}

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove("displaySlide");
  });
  slides[index].classList.add("displaySlide");
}

function nextSlide() {
  slideIndex = (slideIndex + 1) % slides.length;
  showSlide(slideIndex);
}

function prevSlide() {
  slideIndex = (slideIndex - 1 + slides.length) % slides.length;
  showSlide(slideIndex);
}

// FAVORITE TOGGLE FUNCTIONALITY

function setupFavorites() {
  document.querySelectorAll('.favorite').forEach(favorite => {
    favorite.addEventListener('click', (e) => {
      e.target.classList.toggle('favorited');
      if (e.target.classList.contains('favorited')) {
        e.target.textContent = 'favorite';
      } else {
        e.target.textContent = 'favorite_border';
      }
    });
  });
}

// ADD TO CART BUTTON FUNCTIONALITY

function setupAddToCartButtons() {
  document.querySelectorAll('.item-image').forEach(itemImage => {
    const addToCartButton = itemImage.querySelector('.add-to-cart');
    itemImage.addEventListener('mouseover', () => {
      addToCartButton.style.display = 'block';
    });
    itemImage.addEventListener('mouseout', () => {
      addToCartButton.style.display = 'none';
    });
  });

  document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', () => {
      alert('Item added to cart!');
    });
  });
}
