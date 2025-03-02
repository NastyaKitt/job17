let items = document.querySelectorAll('.itemm');
let currentIndex = 0; 

function updateSlider() {
    items.forEach(item => item.classList.remove('show'));

    for (let i = 0; i < 4; i++) {
        let index = (currentIndex + i) % items.length;
        items[index].classList.add('show');
    }
}

function nextSlide() {
    currentIndex += 1;
    if (currentIndex + 4 > items.length) {
        currentIndex = 0; 
    }
    updateSlider();
}

setInterval(nextSlide, 5000);

updateSlider();

// 



let itemx = document.querySelectorAll('.itemx');
let currentIndexx = 0;

function updatexSlider() {
    itemx.forEach(itemx => itemx.classList.remove('show'));

    for (let i = 0; i < 3; i++) {
        let indexx = (currentIndexx + i) % itemx.length;
        itemx[indexx].classList.add('show');
    }
}

function nextSlidex() {
    currentIndexx += 1; 
    if (currentIndexx + 4 > itemx.length) {
        currentIndexx = 0;
    }
    updatexSlider(); 
}

setInterval(nextSlidex, 5000); 

updatexSlider();


// 



let itemss = document.querySelectorAll('.itemss'); 
let currentIndess = 0;

function updatesSlider() {
    itemss.forEach(itemss => itemss.classList.remove('show'));

    for (let i = 0; i < 3; i++) {
        let indess = (currentIndess + i) % itemss.length;
        itemss[indess].classList.add('show');
    }
}

function nextSlides() {
    currentIndess += 1; // 
    if (currentIndess + 4 > itemss.length) {
        currentIndess = 0;
    }
    updatesSlider(); 
}

setInterval(nextSlides, 5000);

updatesSlider();



// 



let callPopup = document.getElementById('callPopup')
let popupWin = document.getElementById('popupWin')
let clsPopup = document.getElementById('clsPopup')

callPopup.addEventListener('click', function(){
    popupWin.classList.add('show')
})
clsPopup.addEventListener('click', function(){
    popupWin.classList.remove('show')
})

//


function smoothScroll(target) {
    const element = document.querySelector(target);
    if (element) {
        const offset = window.innerHeight / 2 - element.offsetHeight / 2;
        const elementPosition = element.getBoundingClientRect().top + window.scrollY;
        const offsetPosition = elementPosition - offset;

        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        });
    }
}

const buttons = document.querySelectorAll('a button');

buttons.forEach(button => {
    button.addEventListener('click', (event) => {
        event.preventDefault();
        const targetId = button.parentElement.getAttribute('href');
        smoothScroll(targetId);
    });
});


// 



function setCursorPosition(pos, e) {
    e.focus();
    if (e.setSelectionRange) {
        e.setSelectionRange(pos, pos);
    } else if (e.createTextRange) {
        var range = e.createTextRange();
        range.collapse(true);
        range.moveEnd("character", pos);
        range.moveStart("character", pos);
        range.select();
    }
}

function mask(e) {
    var matrix = this.placeholder, // .defaultValue
        i = 0,
        def = matrix.replace(/\D/g, ""),
        val = this.value.replace(/\D/g, "");
    
    def.length >= val.length && (val = def);
    matrix = matrix.replace(/[_\d]/g, function(a) {
        return val.charAt(i++) || "_";
    });
    
    this.value = matrix;
    i = matrix.lastIndexOf(val.substr(-1));
    i < matrix.length && matrix != this.placeholder ? i++ : i = matrix.indexOf("_");
    setCursorPosition(i, this);
}

window.addEventListener("DOMContentLoaded", function() {
    // Изменяем здесь, если это нужно
    var input = document.querySelector("#tel");
    
    input.addEventListener("input", mask, false);
    input.focus();
    setCursorPosition(3, input);
});