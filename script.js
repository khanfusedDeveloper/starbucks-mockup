document.addEventListener("DOMContentLoaded", function () {
    const hamburgerContainer = document.querySelector('.hamburger-container');
    const menu = document.querySelector('.menu');

    hamburgerContainer.addEventListener('click', function () {
        hamburgerContainer.classList.toggle('active');
        if (menu.style.display === 'flex') {
            menu.style.display = 'none';
        } else {
            menu.style.display = 'flex';
        }
    });
});