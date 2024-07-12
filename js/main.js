
const sliderContainer = document.querySelector('.slider-slides');
const nextBtn = document.querySelector('#next-btn')
const prevBtn = document.querySelector('#prev-btn')
const sliderWrapper = document.querySelector('.slider');
const anchor = document.querySelectorAll('a');

anchor.forEach(el => {
    el.setAttribute('target', '_blank')
})


let sliderSlides = document.querySelectorAll('.slider-slides .slider-item');

function slide(type) {
    sliderSlides = document.querySelectorAll('.slider-slides .slider-item');

    if (type === 'next') {
        sliderContainer.appendChild(sliderSlides[0]);
        sliderSlides[0].classList.add('next');
    }else {
        sliderContainer.prepend(sliderSlides[sliderSlides.length - 1]);
        sliderSlides[sliderSlides.length - 1].classList.add('prev');

    }

}




nextBtn.addEventListener('click', function() {
    slide('next')
})
prevBtn.addEventListener('click', function() {
    slide('prev')
})
