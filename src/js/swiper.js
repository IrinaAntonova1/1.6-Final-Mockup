import Swiper from 'swiper';
import 'swiper/swiper-bundle.css';

let swipers = [];

function initSwipers() {
    const sliders = document.querySelectorAll('.mySwiper');
    sliders.forEach(slider => {
        const swiper = new Swiper(slider, {
            pagination: {
                el: slider.querySelector('.swiper-pagination'),
                clickable: true,
            },
            slidesPerView: "auto",
            spaceBetween: 16,
        });
        swipers.push(swiper);
    });
}

function handleResize() {
    if (window.innerWidth > 768) {
        if (swipers.length > 0) {
            swipers.forEach(swiper => swiper.destroy(true, true));
            swipers = []; 
        }
    } else {
        if (swipers.length === 0) {
            initSwipers(); 
        }
    }
}


window.addEventListener('load', handleResize);


window.addEventListener('resize', handleResize);

