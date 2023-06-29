// Mobile Menu //
const menuButton = document.querySelector('.navBtnMenu');
const mobileMenu = document.querySelector('.nav__mobile_menu');
const navMenu = document.querySelector('.header_bar');
const mobileMenuOptions = document.querySelectorAll('.nav_btn_list');
const navBtnMobileClosed = document.querySelector('.nav__btn_mobile_closed');
const navMainMenuMob = document.querySelector('.nav_main_mobileMenu');
// speakers data //
menuButton.addEventListener('click', () => {
  mobileMenu.style.display = 'flex';
  navMainMenuMob.style.display = 'block';
  navMenu.style.display = 'none';
});
for (let i = 0; i < mobileMenuOptions.length; i += 1) {
  mobileMenuOptions[i].addEventListener('click', () => {
    mobileMenu.style.display = 'none';
    navMainMenuMob.style.display = 'none';
    navMenu.style.display = 'block';
  });
}
navBtnMobileClosed.addEventListener('click', () => {
  mobileMenu.style.display = 'none';
  navMainMenuMob.style.display = 'none';
  navMenu.style.display = 'block';
});