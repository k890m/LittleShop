// Set up the initial event listeners
document.addEventListener('DOMContentLoaded', () => {
  setupHamburger();
  initializeSlider();
  setupFavorites();
  setupAddToCartButtons();
  setupCartIcon();
  setupFavoritesIcon();
});

// Hamburger menu functionality
function setupHamburger() {
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
}

// Image slider functionality
let slideIndex = 0;
let intervalId = null;

function initializeSlider() {
  const slides = document.querySelectorAll(".slides img");
  if (slides.length > 0) {
    slides[slideIndex].classList.add("displaySlide");
    intervalId = setInterval(nextSlide, 5000);
  }
}

function showSlide(index) {
  const slides = document.querySelectorAll(".slides img");
  slides.forEach((slide, i) => {
    slide.classList.remove("displaySlide");
  });
  slides[index].classList.add("displaySlide");
}

function nextSlide() {
  const slides = document.querySelectorAll(".slides img");
  slideIndex = (slideIndex + 1) % slides.length;
  showSlide(slideIndex);
}

function prevSlide() {
  const slides = document.querySelectorAll(".slides img");
  slideIndex = (slideIndex - 1 + slides.length) % slides.length;
  showSlide(slideIndex);
}

// Favorite functionality
function setupFavorites() {
  document.querySelectorAll('.favorite').forEach(favorite => {
    favorite.addEventListener('click', (e) => {
      e.target.classList.toggle('favorited');
      e.target.textContent = e.target.classList.contains('favorited') ? 'favorite' : 'favorite_border';
    });
  });
}

// Add to cart functionality
let cart = [];

function setupAddToCartButtons() {
  document.querySelectorAll('.item').forEach(item => {
    const addToCartButton = item.querySelector('.add-to-cart');
    addToCartButton.addEventListener('click', () => {
      const itemName = item.querySelector('.item-name').textContent;
      const itemPrice = item.querySelector('.item-price').textContent;
      addToCart(itemName, itemPrice);
    });
  });
}

function addToCart(name, price) {
  const item = cart.find(i => i.name === name);
  if (item) {
    item.quantity += 1;
  } else {
    cart.push({ name, price, quantity: 1 });
  }
  alert(`${name} added to cart!`);
  updateCartIcon();
}

function setupCartIcon() {
  const cartIcon = document.getElementById('cart-icon');
  cartIcon.addEventListener('click', () => {
    displayCartContents();
  });
}

function displayCartContents() {
  let cartContents = 'Your cart is empty.';
  if (cart.length > 0) {
    cartContents = '<h2>Your Cart</h2><ul>';
    cart.forEach(item => {
      cartContents += `<li>${item.name} - ${item.price} (Quantity: ${item.quantity})</li>`;
    });
    cartContents += '</ul>';
  }

  const cartModal = document.createElement('div');
  cartModal.classList.add('cart-modal');
  cartModal.innerHTML = `
    <div class="cart-modal-content">
      <span class="close">&times;</span>
      ${cartContents}
      <button class="checkout">Checkout</button>
    </div>
  `;
  document.body.appendChild(cartModal);

  const closeButton = cartModal.querySelector('.close');
  closeButton.addEventListener('click', () => {
    document.body.removeChild(cartModal);
  });
}
