/* в этот файл добавляет скрипты*/
// DropDownMenu in header (only in mobile version)
const navigation = document.querySelector('.main-nav');
const menu = navigation.querySelector('.main-nav__list');
const menuBtn = navigation.querySelector('.main-nav__toggle');

const toggleMenu = () => {
  navigation.classList.toggle('main-nav--closed');

  if (!navigation.classList.contains('main-nav--closed')) {
    menu.classList.add('main-nav__list--opened');
  } else {
    menu.classList.remove('main-nav__list--opened');

  }
};

const addDropDownMenu = () => {
  navigation.classList.add('main-nav--closed');
  menuBtn.style.cssText = 'display: block;';
};

const deleteDropDownMenu = () => {
  navigation.classList.remove('main-nav--closed');
  menuBtn.style.cssText = 'display: none;';
  menu.classList.remove('main-nav__list--opened');

};


const onresize = () => {
  if (document.body.clientWidth < 768) {
    addDropDownMenu();

  } else {
    deleteDropDownMenu();
  }
};


if (document.body.clientWidth < 768) {
  addDropDownMenu();

} else {
  deleteDropDownMenu();

}

window.addEventListener('resize', () => onresize());
menuBtn.addEventListener('click', () => toggleMenu());


const slider = document.querySelector('.slider');
const before = slider.querySelector('.slider__wrapper-before');
const changeBtn = document.querySelector('.slider__button');
const body = document.body;

let isActive = false;

//при загрузке стр делаем толстому коту ширину половины слайдера
document.addEventListener('DOMContentLoaded', () => {
  const width = slider.offsetWidth / 2;
  before.style.width = `${width}px`;
});

// передаем позицию по Ох
//сдвиг = максимум между 0 и концом слайдера
//максимум, чтобы не выходить за пределы слайдера
const beforeAfterSlider = (cursorPosition) => {
  const shift = Math.max(0, Math.min(cursorPosition, slider.offsetWidth));
  before.style.width = `${shift}px`;
  changeBtn.style.left = `${shift}px`;
};

const pauseEvents = (evt) => {
  evt.stopPropagation();
  evt.preventDefault();
  return false;
};

body.addEventListener('mousedown', () => {
  isActive = true;
});

body.addEventListener('mouseup', () => {
  isActive = false;
});

body.addEventListener('mouseleave', () => {
  isActive = false;
});


body.addEventListener('mousemove', (evt) => {
  if (!isActive) {
    return;
  }

  let cursorPosition = evt.pageX;
  cursorPosition -= slider.getBoundingClientRect().left;
  beforeAfterSlider(cursorPosition);
  pauseEvents(evt);
});

/*
const slider = document.querySelector('.slider');
const before = slider.querySelector('.slider__image--before');
const resizer = document.querySelector('.slider__button');
// const body = document.body;

let active = false;
//Sort overflow out for Overlay Image
document.addEventListener('DOMContentLoaded', () => {
  const width = slider.offsetWidth;
  console.log(before);
  before.style.width = `${width }px`;
});

//Adjust width of image on resize
window.addEventListener('resize', () => {
  const width = slider.offsetWidth;
  console.log(width);
  before.style.width = `${width }px`;
});

resizer.addEventListener('mousedown',() =>{
  active = true;
  resizer.classList.add('resize');

});

document.body.addEventListener('mouseup',() =>{
  active = false;
  resizer.classList.remove('resize');
});

document.body.addEventListener('mouseleave', () => {
  active = false;
  resizer.classList.remove('resize');
});

document.body.addEventListener('mousemove',(e) =>{
  if (!active) {
    return;
  }
  let x = e.pageX;
  x -= slider.getBoundingClientRect().left;
  slideIt(x);
  pauseEvent(e);
});

resizer.addEventListener('touchstart',() =>{
  active = true;
  resizer.classList.add('resize');
});

document.body.addEventListener('touchend',() =>{
  active = false;
  resizer.classList.remove('resize');
});

document.body.addEventListener('touchcancel',() =>{
  active = false;
  resizer.classList.remove('resize');
});

//calculation for dragging on touch devices
document.body.addEventListener('touchmove',(e) =>{
  if (!active) {
    return;
  }
  let x;

  let i;
  for (i = 0; i < e.changedTouches.length; i++) {
    x = e.changedTouches[i].pageX;
  }

  x -= slider.getBoundingClientRect().left;
  slideIt(x);
  pauseEvent(e);
});

function slideIt(x){
  const transform = Math.max(0,(Math.min(x,slider.offsetWidth)));
  before.style.width = `${transform}px`;
  resizer.style.left = `${transform - 0}px`;
}

//stop divs being selected.
function pauseEvent(e){
  if(e.stopPropagation) {
    e.stopPropagation();
  }
  if(e.preventDefault) {
    e.preventDefault();
  }
  e.cancelBubble = true;
  e.returnValue = false;
  return false;
}


*/
