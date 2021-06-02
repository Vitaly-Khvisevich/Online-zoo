const carousel  = document.getElementsByClassName('animal-camera__carousel');
const content = document.getElementsByClassName('content');
const next = document.getElementsByClassName('next');
const prev = document.getElementsByClassName('prev');


let slideIndex = 0;
let gap = 17;
if (screen.width < 1000) gap = 33;

let width = carousel[0].offsetWidth;
let imgWidth = document.querySelector('.animal-camera__slider-part').offsetWidth;
window.addEventListener('resize', (e) => {
  width = carousel[0].offsetWidth;
  imgWidth = document.querySelector('.animal-camera__slider-part').offsetWidth;
});

next[0].addEventListener('mousedown', e => {
  if (slideIndex == 3) {
    slideIndex = -1; 
  }
  slideIndex = String(Number(slideIndex) + 1);
  carousel[0].scrollTo((imgWidth + gap) * slideIndex, 0);
  if (slideIndex > 0) {
    prev[0].style.display = 'flex';
  }
  if (slideIndex >= 3) {
    slideIndex = -1; 
  }
});
prev[0].addEventListener('mousedown', e => {
  if (slideIndex === -1) {
    slideIndex = 3; 
  }
  if (slideIndex == 0) {
    slideIndex = 4; 
  }
  slideIndex = String(Number(slideIndex) - 1);
  carousel[0].scrollTo((imgWidth + gap) * slideIndex, 0);
  if (slideIndex < 3) {
    next[0].style.display = 'flex';
  }
});
const slider_part = document.querySelectorAll('.animal-camera__slider-part');
const video = document.getElementsByClassName('youtube-video');
let video_part1 = 'https://www.youtube.com/embed/';
let img_part1 = 'https://img.youtube.com/vi/';
let video_part2 = '';
let img_part2 = '';
let img_part3 = '/default.jpg';

function find_adress(){
  let video_part2 = (video[0].children[0].src).replace(video_part1, ''); 
  return(video_part2);
}


slider_part.forEach(element => {
  element.addEventListener('mousedown', e => {
    img_part2 =(element.getElementsByClassName('slider-video')[0].src).replace(img_part1, '').replace(img_part3, '');
    let full_video = `${video_part1}${img_part2}`;
    let ful_img = `${img_part1}${find_adress()}${img_part3}`;
    video[0].children[0].src = full_video;
    element.getElementsByClassName('slider-video')[0].src = ful_img;
  });
});

const more = document.getElementsByClassName('more');
const less = document.getElementsByClassName('less');
const sidebar_wrapper = document.getElementsByClassName('sidebar-wrapper');

function toggleSpoiler(spoilerElement, isInvertedCollapse, isInvertedExpand) {
  if (!spoilerElement.classList.contains('expanded')) {
    more[0].style.display = 'none';
    less[0].style.display = 'initial';
    
  }
  else {
    more[0].style.display = 'initial';
    less[0].style.display = 'none';
    
  }
  let isCollapsing = spoilerElement.classList.contains('expanded');
  let heightBefore = spoilerElement.offsetHeight;
  let offsetBefore = window.pageYOffset;
  spoilerElement.classList.toggle('instant', true);
  spoilerElement.classList.toggle('expanded', !isCollapsing);
  let isScrollRequired = ( isCollapsing && isInvertedCollapse) ||
                         (!isCollapsing && isInvertedExpand );
  if (isScrollRequired) {
    let heightAfter = spoilerElement.offsetHeight;
    let heightDelta = heightAfter - heightBefore;
    window.scrollTo(0, offsetBefore + heightDelta);
  }
}

for (let el of document.querySelectorAll('.spoiler-btn')) {
  el.addEventListener('click', e => toggleSpoiler(el.parentNode));
}