const newsMainContent = document.querySelector('.news_main_content');
// Mobile Menu elements//
const menuButton = document.querySelector('.navBtnMenu');
const mobileMenu = document.querySelector('.nav__mobile_menu');
const navMenu = document.querySelector('.header_bar');
const mobileMenuOptions = document.querySelectorAll('.nav_btn_list');
const navBtnMobileClosed = document.querySelector('.nav__btn_mobile_closed');
const navMainMenuMob = document.querySelector('.nav_main_mobileMenu');

const url = 'https://script.google.com/macros/s/AKfycbyC_uMxHykRnZeDqvLZRJKuPB6haaGiDfgHWAvi7jdArdpLI2JTyMYtgz_RsYlRSHOiAQ/exec';
let countNews = 0;

fetch(url).then((rep) => rep.json())
  .then((data) => {
    const newLength = data.data.length;
    data.data.reverse().forEach((el) => {
      countNews += 1;

      if (countNews < newLength) {
        const newsSingleContainer = document.createElement('div');
        newsSingleContainer.className = 'news_single_container';
        const newsSingleImgContainer = document.createElement('div');
        newsSingleImgContainer.className = 'news_single_imgContainer';
        const newsSingleImgDesktop = document.createElement('img');
        newsSingleImgDesktop.className = 'news_single_imgDesktop';
        newsSingleImgDesktop.src = el.link_imagen;
        const newsSingleImgRef = document.createElement('span');
        newsSingleImgRef.className = 'news_single_imgDeskRef';
        newsSingleImgRef.innerText = `Nota. Por ${el.ref_imagen}`;
        const newsSingleRigthContainer = document.createElement('div');
        newsSingleRigthContainer.className = 'news_single_rigthContainer';
        const newsSingleTitle = document.createElement('h3');
        newsSingleTitle.innerText = el.titulo;
        const newsSingleDate = document.createElement('span');
        newsSingleDate.innerText = el.fecha;
        const newsSingleImg = document.createElement('img');
        newsSingleImg.src = el.link_imagen;
        newsSingleImg.className = 'news_single_imgMob';
        const newsSingleSumContainer = document.createElement('div');
        newsSingleSumContainer.className = 'news_single_sumContainer';
        const newsSingleSum = document.createElement('span');
        const newsSingleVerMas = document.createElement('span');
        newsSingleVerMas.id = 'news_singleVerMas';
        newsSingleVerMas.innerText = ' ver más';
        newsSingleSum.innerText = `${el.descripcion}... `;
        newsSingleVerMas.addEventListener('click', () => {
          window.open(el.link_noticia, '_blank');
        });
        newsSingleTitle.addEventListener('click', () => {
          window.open(el.link_noticia, '_blank');
        });
        newsMainContent.appendChild(newsSingleContainer);
        newsSingleContainer.appendChild(newsSingleImgContainer);
        newsSingleImgContainer.appendChild(newsSingleImgDesktop);
        newsSingleImgContainer.appendChild(newsSingleImgRef);
        newsSingleContainer.appendChild(newsSingleRigthContainer);
        newsSingleRigthContainer.appendChild(newsSingleTitle);
        newsSingleRigthContainer.appendChild(newsSingleDate);
        newsSingleRigthContainer.appendChild(newsSingleImg);
        newsSingleRigthContainer.appendChild(newsSingleSumContainer);
        newsSingleSumContainer.appendChild(newsSingleSum);
        newsSingleSumContainer.appendChild(newsSingleSum);
        newsSingleSumContainer.appendChild(newsSingleVerMas);
      }
    });
  });

// Mobile Menu //
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