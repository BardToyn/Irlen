//header

const openButton = document.getElementById('openCatalog');
const menu = document.getElementById('catalogModal');
const burgerLineOne = document.getElementById('burgerLineOne');
const burgerLineTwo = document.getElementById('burgerLineTwo');
const burgerLineThree = document.getElementById('burgerLineThree');

openButton.addEventListener('click', () => {
  menu.classList.toggle('header-catalog_hidden');
  burgerLineOne.classList.toggle('btn__burger__line_animation-one');
  burgerLineTwo.classList.toggle('btn__burger__line_animation-two');
  burgerLineThree.classList.toggle('btn__burger__line_animation-three');
});

//burger animation

//burger menu

const burgerMobile = document.getElementById('burgerMobile');
const burgerMobIcon = document.getElementById('burgerMobIcon');
const mobileMenu = document.querySelector('.mobileMenu');

burgerMobIcon.addEventListener('click', function(event) {
    event.stopPropagation();

    if (mobileMenu.classList.contains('menu-visible')) {
        mobileMenu.classList.remove('menu-visible');
        burgerMobIcon.classList.remove('fa-times');
        burgerMobIcon.classList.add('fa-bars');
    } else {
        mobileMenu.classList.add('menu-visible');
        burgerMobIcon.classList.remove('fa-bars');
        burgerMobIcon.classList.add('fa-times');
    }
});

// Закрываем меню при клике вне него
document.addEventListener('click', function(event) {
    if (!mobileMenu.contains(event.target) && event.target !== burgerMobIcon) {
        mobileMenu.classList.remove('menu-visible');
        burgerMobIcon.classList.remove('fa-times');
        burgerMobIcon.classList.add('fa-bars');
    }
});

