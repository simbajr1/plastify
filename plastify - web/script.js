document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.getElementById('hamburger');
  const navMenu = document.getElementById('nav-menu');
  
  hamburger.addEventListener('click', () => {
      navMenu.classList.toggle('active');
  });

  const carousel = document.querySelector('.testimonial-carousel');
  const testimonials = document.querySelectorAll('.testimonial');
  const prevButton = document.querySelector('.carousel-prev');
  const nextButton = document.querySelector('.carousel-next');

  let currentIndex = 0;

  const updateCarousel = () => {
      carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
  };

  nextButton.addEventListener('click', () => {
      currentIndex = (currentIndex + 1) % testimonials.length;
      updateCarousel();
  });

  prevButton.addEventListener('click', () => {
      currentIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
      updateCarousel();
  });
});

function initMap() {
  const location = { lat: -1.2921, lng: 36.8219 }; // Example coordinates
  const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 10,
      center: location,
  });
  const marker = new google.maps.Marker({
      position: location,
      map: map,
  });
}

function handleLinkClicks() {
  document.querySelector('.hero button').addEventListener('click', function() {
      location.href = 'products.html';
  });

  document.querySelectorAll('.about-us button').forEach(button => {
      button.addEventListener('click', function() {
          location.href = '#footer';
      });
  });

  document.querySelectorAll('.featured-products .product button').forEach(button => {
      button.addEventListener('click', function() {
          location.href = 'products.html';
      });
  });

  document.querySelectorAll('header nav ul li a').forEach(link => {
      link.addEventListener('click', function(event) {
          const targetId = link.getAttribute('href').substring(1);
          const targetElement = document.getElementById(targetId);
          if (targetElement) {
              event.preventDefault();
              targetElement.scrollIntoView({ behavior: 'smooth' });
          }
      });
  });
}
document.getElementById('see-more-btn').addEventListener('click', function() {
    alert('See more button clicked');
});
let currentTestimonial = 0;
const testimonials = document.querySelectorAll('.testimonial');

function showTestimonial(index) {
    testimonials.forEach((testimonial, i) => {
        testimonial.classList.remove('active');
        if (i === index) {
            testimonial.classList.add('active');
        }
    });
}

function nextTestimonial() {
    currentTestimonial = (currentTestimonial + 1) % testimonials.length;
    showTestimonial(currentTestimonial);
}

document.addEventListener('DOMContentLoaded', () => {
    showTestimonial(currentTestimonial);
    setInterval(nextTestimonial, 3000); // Change testimonial every 3 seconds
});


handleLinkClicks();

