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
}