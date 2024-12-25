const hm = document.querySelector('#hamburger-menu');
const navbarnav = document.querySelector('.navbar-nav');
// Hamburger menu toggle
document.querySelector('#hamburger-menu').onclick = (e) => {
    navbarnav.classList.toggle('active');
    e.preventDefault();
};

document.addEventListener('click', function (e) {
    if (!hm.contains(e.target) && !navbarnav.contains(e.target)) {
        navbarnav.classList.remove('active');
    }
});