const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');

menu.addEventListener('clink', function() {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
})
const images =
document.querySelectorAll('.car-images img');

images. forEach((Image) => {
    images.addEventListener('click', () => {
    images.forEach((img) => 
    img.classList.remove('active'));
    images.classList.add('active');
    });
});