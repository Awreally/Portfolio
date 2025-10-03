const mobil = document.querySelector('.menu-mobil');
const linkContainer = document.querySelector('.linkcontainer');
const hero = document.querySelector('.hero')
const gallery = document.querySelector('.gallery')

mobil.addEventListener('click', () => {
    linkContainer.classList.toggle('active');
    hero.classList.toggle('hidden');
});