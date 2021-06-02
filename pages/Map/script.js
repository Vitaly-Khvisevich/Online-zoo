const mapobj = document.getElementsByClassName('map__wrapper');
const mapfull = document.getElementsByClassName('map');
const mapimg = document.getElementsByClassName('map__img');
const headerElem = document.getElementsByClassName('header');
const headerMobileElem = document.getElementsByClassName('header__mobile');
const footerElem = document.getElementsByClassName('footer');
const zoomin = document.getElementsByClassName('map__plus-icon');
const zoomout = document.getElementsByClassName('map__minus-icon');
const animalspic = document.getElementsByClassName('animals_pic');
const pointers = document.getElementsByClassName('pointers');
const elementsbox = document.querySelectorAll('.boxs');
let origwidth =mapimg[0].scrollWidth;
let topIndent = 0;
let leftIndent = 0;

const closeactve = () => {
  elementsbox.forEach(function(elem) {
    if (elem.classList.contains("panda-box")){
      elem.children[6].style.visibility = 'hidden';
      elem.children[2].style.zIndex = "0";
      elem.children[5].style.zIndex = "0";
    }
    else if (elem.classList.contains("eagle")){
      elem.children[4].style.visibility = 'hidden';
      elem.children[3].style.zIndex = "0";
    }
    else{
      elem.children[3].style.visibility = 'hidden'; 
      elem.children[2].style.zIndex = "0";
    }
  });
}

const moveAt = (e) => {
  mapobj[0].style.left = e.pageX - leftIndent + 'px';
  if (e.pageX >= mapfull[0].offsetWidth) {
    stopDrag();
  } else if (e.pageX <= 0) {
    stopDrag();
  }
  mapobj[0].style.top = e.pageY - (80 - pageYOffset) - topIndent + 'px';
}

const calculateCoords = (e, elem) => {
  var box = elem.getBoundingClientRect();
  topIndent = e.pageY - box.top + pageYOffset;
  leftIndent = e.pageX - box.left + pageXOffset;
}

const stopDrag = () => {
  document.removeEventListener('mousemove', moveAt);
  mapobj[0].removeEventListener('mouseup', stopDrag);
}



mapobj[0].addEventListener('mousedown', (e) => {
  
  
  if (event.target.classList.contains('whatch-online-button')){

  }
  else{
    closeactve();
  }

  if (mapobj[0].width <= mapfull[0].offsetWidth && mapobj[0].height <= mapfull[0].offsetHeight) {
    return;
  }
  calculateCoords(e, mapobj[0]);
  moveAt(e);
  document.addEventListener('mousemove', moveAt);
  mapobj[0].addEventListener('mouseup', stopDrag);
});



mapobj[0].ondragstart = function() {
  return false;
};

headerElem[0].addEventListener('mouseenter', stopDrag);
headerMobileElem[0].addEventListener('mouseenter', stopDrag);
footerElem[0].addEventListener('mouseenter', stopDrag);

zoomin[1].addEventListener('mousedown', () => {
  
  if (mapimg[0].offsetWidth <= origwidth * 2) {
  mapimg[0].style.width = `${mapimg[0].scrollWidth * 1.10}px`;
  mapimg[0].style.height = `${mapimg[0].scrollHeight * 1.10}px`;
  for (i=0; i<animalspic.length; i++){
    animalspic[i].style.width = `${animalspic[i].scrollWidth * 1.10}px`;
  }
  for (j=0; j<pointers.length; j++){
    pointers[j].style.width = `${pointers[j].scrollWidth * 1.10}px`;
  }
  
}
});


zoomout[1].addEventListener('mousedown', () => {
  if (mapobj[0].offsetWidth >= mapfull[0].offsetWidth || mapobj[0].offsetHeight >=mapfull[0].offsetHeight) {
  mapimg[0].style.width = `${mapimg[0].scrollWidth / 1.10}px`;
  mapimg[0].style.height = `${mapimg[0].scrollHeight / 1.10}px`;
  mapobj[0].style.left = '10%';
  mapobj[0].style.top = '10%';
  for (i=0; i<animalspic.length; i++){
    animalspic[i].style.width = `${animalspic[i].scrollWidth / 1.10}px`;
  }
  for (j=0; j<pointers.length; j++){
    pointers[j].style.width = `${pointers[j].scrollWidth / 1.10}px`;
  }
  }
  else{
    mapobj[0].style.left = '10%';
    mapobj[0].style.top = '10%';
  }
  
  });

  

  elementsbox.forEach(function(elem) {
    elem.addEventListener("click", function() {
      if (elem.classList.contains("panda-box")){
        closeactve();
        elem.children[6].style.visibility = 'initial';
        elem.children[2].style.zIndex = "2";
        elem.children[5].style.zIndex = "2";
        elem.children[6].children[2].removeAttribute("disabled");
      }
      else if (elem.classList.contains("eagle")){
        closeactve();
        elem.children[4].style.visibility = 'initial';
        elem.children[3].style.zIndex = "2";
        elem.children[4].children[2].removeAttribute("disabled");
      }
      else{
        closeactve();
        elem.children[3].style.visibility = 'initial';
        elem.children[2].style.zIndex = "2";
        elem.children[3].children[2].removeAttribute("disabled");
        
      }
      
    });
});

