let navbar = document.querySelector('.header .navbar');

document.querySelector('#menu-btn').addEventListener('click', (event) => {
    navbar.classList.add('active');
});

document.querySelector('#nav-close').addEventListener('click', (event) => {
    navbar.classList.remove('active');
});
//Search Bar
let searchBar = document.querySelector('.search-form');

document.querySelector('#search-btn').addEventListener('click', (event) => {
    searchBar.classList.add('active');
});

document.querySelector('#close-search').addEventListener('click', (event) => {
    searchBar.classList.remove('active');
});
    
window.onscroll = () => {
    searchBar.classList.remove('active');
};
window.onscroll = () => {
    navbar.classList.remove('active');
    if(window.scrollY > 0) {
        document.querySelector('.header').classList.add('active');
    } else {
        document.querySelector('.header').classList.remove('active');
    }
};
window.load = () => {
    if(window.scrollY > 0) {
        document.querySelector('.header').classList.add('active');
    } else {
        document.querySelector('.header').classList.remove('active');
    }
};

var swiper = new Swiper(".home-slider", {
    loop: true,
    grabCursor: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  var swiper = new Swiper(".product-slider", {
    loop: true,
    grabCursor: true,
    spaceBetween: 20,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        0: {
          slidesPerView: 1,
        },
        640: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 3,
        },
        1024: {
          slidesPerView: 4,
        },
      },
  });

  var swiper = new Swiper(".review-slider", {
    loop: true,
    grabCursor: true,
    spaceBetween: 20,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        0: {
          slidesPerView: 1,
        },
        640: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 3,
        }
      },
  });