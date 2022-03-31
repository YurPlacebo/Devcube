let offset = 0; //смещение от левого края
const Sliderline = document.querySelector('.slider-line');

document.querySelector('.slider-next');addEventListener('click', function(){
    offset = offset + 1000;
    Sliderline.style.left = offset + 'px';
});