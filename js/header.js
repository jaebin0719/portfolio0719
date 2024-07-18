document.addEventListener('DOMContentLoaded', function() {
    const menu = document.querySelector('.header-menu');
    const menuText = document.querySelector('.menu-text');
    const menuBar = document.querySelectorAll('.menu-bar span');

    menu.addEventListener('click', function() {
        menuText.classList.toggle('open'); 
        menuBar.forEach(span => span.classList.toggle('change')); 
    });
});
