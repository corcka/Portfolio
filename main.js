// окно1:

var okno1 = document.getElementById('okno1');
var clickmenu = document.getElementById('.nav__menu');
var closeokno1 = document.querySelector('.container__section1');

    function onClickMenu() {
        okno1.style.cssText = "display: flex;";
    }

        function onClickOut() {
        okno1.style.cssText = "display: none;";
    }



//  окно2:

var okno = document.getElementById('okno-block');
var clickbutton = document.getElementById('.section1__button');
var closeokno = document.querySelector('.krestik');

    function onClickButton() {
        okno.style.cssText = "display: flex;";
    }

    function onClickKrestik() {
        okno.style.cssText = "display: none;";
    }

    // слайдер:

    const images = document.querySelectorAll('.slider .slider-line .myimg');
    const sliderLine = document.querySelector('.slider-line');
    let count = 0;
    let width;

    function init() {
        console.log('resize');
        width = document.querySelector('.slider').offsetWidth;
        sliderLine.style.width = width*images.length + 'px';
        images.forEach(item => {
            item.style.width = width + 'px';
            item.style.height = 'auto';
        });
        rollSlider();
    }

window.addEventListener('resize', init);
    init();

document.querySelector('.slider-prev').addEventListener('click', function(){
    count--;
    if (count < 0) {
        count = images.length - 1;
    }
    rollSlider();
});

document.querySelector('.slider-next').addEventListener('click', function(){
    count++;
    if (count >= images.length) {
        count = 0;
    }
    rollSlider();
});

function rollSlider(){
    sliderLine.style.transform = 'translate(-'+count*width+'px';
}


//  выборка:

const filterBox = document.querySelectorAll('.box');

document.querySelector('.section6__menu').addEventListener('click', event => {
    if (event.target.tagName !== 'LI') return false;

    let filterClass = event.target.dataset['f'];
    
    filterBox.forEach( elem => {
        elem.classList.remove('hide');
        if (!elem.classList.contains(filterClass) && filterClass !== 'all') {
            elem.classList.add('hide');
        }
    });

});