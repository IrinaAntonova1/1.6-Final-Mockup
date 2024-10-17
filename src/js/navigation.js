
const burgerBtn = document.querySelector('.burger-btn'); 
const navigationMenu = document.querySelector('.navigation'); 
const overlay = document.querySelector('.overlay'); 


function openNav() {
    navigationMenu.classList.add('active');  
    overlay.classList.add('active'); 
}


function closeNav() {
    navigationMenu.classList.remove('active'); 
    overlay.classList.remove('active');
}


burgerBtn.addEventListener('click', openNav);


overlay.addEventListener('click', closeNav);


const closeNavBtn = document.querySelector('.navigation_nav-btns');
if (closeNavBtn) {
    closeNavBtn.addEventListener('click', closeNav);
}

