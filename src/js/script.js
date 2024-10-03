let swiper;

function initSwiper() {
    swiper = new Swiper(".mySwiper", {
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        slidesPerView: "auto",
        spaceBetween: 16,
    });
}

function handleResize() {
    if (innerWidth > 768) {
        if (swiper) {
            swiper.destroy(true, true); 
            swiper = null;
        }
    } else {
        if (!swiper) {
            initSwiper(); 
        }
    }
}

handleResize();

window.addEventListener('resize', handleResize);



const showMoreBtn = document.getElementById('showMoreBtn');
const showLessBtn = document.getElementById('showLessBtn');
const swiperWrapper = document.querySelector('.image-slider__wrapper');

function showAllItems() {
    swiperWrapper.classList.remove('two-rows');
    swiperWrapper.classList.add('full-height');
    showMoreBtn.style.display = 'none';
    showLessBtn.style.display = 'inline-flex';
}

function hideItems() {
    swiperWrapper.classList.remove('full-height');
    swiperWrapper.classList.add('two-rows'); 
    showLessBtn.style.display = 'none'; 
    showMoreBtn.style.display = 'inline-flex'; 
}

showMoreBtn.addEventListener('click', showAllItems);
showLessBtn.addEventListener('click', hideItems);

window.addEventListener('load', function () {
    hideItems();
});