

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