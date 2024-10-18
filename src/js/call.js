
const showMoreBtn1 = document.getElementById('showMoreBtn1');
const showLessBtn1 = document.getElementById('showLessBtn1');
const swiperWrapper = document.querySelector('.sl-btn');

function showAllItems1() {
    swiperWrapper.classList.remove('two-rows1'); 
    swiperWrapper.classList.add('full-height'); 
    showMoreBtn1.style.display = 'none'; 
    showLessBtn1.style.display = 'inline-flex'; 
}

function hideItems1() {
    swiperWrapper.classList.remove('full-height'); 
    swiperWrapper.classList.add('two-rows1'); 
    showLessBtn1.style.display = 'none'; 
    showMoreBtn1.style.display = 'inline-flex'; 
}


showMoreBtn1.addEventListener('click', showAllItems1);
showLessBtn1.addEventListener('click', hideItems1);


window.addEventListener('load', function () {
    hideItems1(); 
});




