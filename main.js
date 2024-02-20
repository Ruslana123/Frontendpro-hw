'use strict'

// Відображаємо зображення та кнопки Next, Prev з боків від зображення.
// При кліку на Next - показуємо наступне зображення.
// При кліку на Prev - попереднє .
// При досягненні останнього зображення - ховати кнопку Next. Аналогічно з першим зображенням і кнопкою Prev.
const images = ["images/img1.jpg", "images/img2.jpg", "images/img3.jpg", "images/img4.jpg", "images/img5.jpg", "images/img6.jpg", "images/img7.jpg", "images/img8.jpg", "images/img9.jpg"];

let currentSlide = 0;
const slides = document.querySelector('.slide');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

slides.src = images[currentSlide];


prevBtn.addEventListener("click", () => {

    if(currentSlide > 0) {
        currentSlide--
        slides.src = images[currentSlide];
    }

    updateButton();
})



nextBtn.addEventListener("click", () => {
    if(currentSlide < images.length - 1) {
        currentSlide++
        slides.src = images[currentSlide];
    }
    updateButton();
})

function updateButton() {
    if(currentSlide === 0) {
        prevBtn.style.display = "none";
    } else {
        prevBtn.style.display = "block";
    }
    if(currentSlide === images.length - 1) {
        nextBtn.style.display = "none";
    } else {
        nextBtn.style.display = "block";
    }
}

updateButton();