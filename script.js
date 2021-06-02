const carousel  = document.getElementsByClassName('carousel');
const content = document.getElementsByClassName('content');
const next = document.getElementsByClassName('next');
const prev = document.getElementsByClassName('prev');

let slideIndex = 13;
let gap = 18;
let myindexplus = 0;
let width = 0;
let imgWidth = 0;

function find_size(){
  if (screen.width > 1000) gap = 16;
  if (screen.width > 1200) gap = 18.7;
  if (screen.width >= 1600) gap = 16;
  width = carousel[0].offsetWidth;
  imgWidth = document.querySelector('.pets__slider-cont').offsetWidth;
}

find_size();

window.addEventListener('resize', (e) => {
  find_size();
});

function scrolltoposition(position){
  carousel[0].scrollTo(position, 0);
}

function findelement(){
  let cloneelem = carousel[0].children[0].children[myindexplus].cloneNode(true);
  myindexplus += 1;
  addelementsinend(cloneelem)
}

function addelementsinend(cloneelem){
  carousel[0].children[0].append(cloneelem);
}


for(i=0; i<40; i++){
  findelement();
}
scrolltoposition((imgWidth + gap) * 13);

next[0].addEventListener('mousedown', e => {
  slideIndex = String(Number(slideIndex) + 1);
  scrolltoposition((imgWidth + gap) * slideIndex);
  if (slideIndex > 0) {
    prev[0].style.display = 'flex';
  }
  if (slideIndex >= 3) {
    findelement();
    findelement();
  }
});

prev[0].addEventListener('mousedown', e => {
  if (slideIndex <= 0) {
    slideIndex = 20;
  }
  slideIndex = String(Number(slideIndex) - 1);
  scrolltoposition((imgWidth + gap) * slideIndex);
  if (slideIndex < 3) {
    next[0].style.display = 'flex';
  }
});

const progress = document.getElementsByClassName('testimonians__scroll');
const testimonials_carousel  = document.getElementsByClassName('carousel_testimonials');
const testimonials_content  = document.getElementsByClassName('content_testimonials');

let testimonials_width = testimonials_carousel[0].offsetWidth;
let testimonials_imgWidth = document.querySelector('.testimonials__review-cont').offsetWidth;
window.addEventListener('resize', (e) => {
  testimonials_width = testimonials_carousel[0].offsetWidth;
  testimonials_imgWidth = document.querySelector('.testimonials__review-cont').offsetWidth;
});

let testimonials_slideIndex = 0;
let testimonials_slideCoefficient = 5;


progress[0].addEventListener('input', e => {
  testimonials_carousel[0].scrollTo((testimonials_imgWidth + gap) * progress[0].value, 0);

});


const slideFunc = () => {
  let i = Number(progress[0].value);
  i += 1;
  if (i > 8) i=0;
  progress[0].value = String(i);
  testimonials_carousel[0].scrollTo((testimonials_imgWidth + gap) * progress[0].value, 0);
}

let autoSlideTimeout = null;
let autoSlideInterval = setInterval(slideFunc, 10000);
const delayAutoSliding = () => {
  clearTimeout(autoSlideTimeout);
  clearInterval(autoSlideInterval);
  autoSlideInterval = null;

  autoSlideTimeout = setTimeout(() => {
    clearInterval(autoSlideInterval);
    autoSlideInterval = setInterval(slideFunc, 10000);
  }, 40000);
}

testimonials_carousel[0].addEventListener('click', delayAutoSliding);

