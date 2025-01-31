//slider
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

// const pauseEvents = (evt) => {
//   evt.stopPropagation();
//   evt.preventDefault();
//   return false;
// };

const pauseEvents = (evt) => {
  if(evt.stopPropagation) {
    evt.stopPropagation();
  }
  if(evt.preventDefault) {
    evt.preventDefault();
  }
  evt.cancelBubble = true;
  evt.returnValue = false;
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

slider.addEventListener('touchstart', (evt) => {
  evt.preventDefault();
  isActive = true;
});

slider.addEventListener('touchend', (evt) => {
  evt.preventDefault();
  isActive = false;
});

slider.addEventListener('touchcancel', (evt) => {
  evt.preventDefault();
  isActive = false;
});


slider.addEventListener('touchmove', (evt) => {
  evt.preventDefault();
  if (!isActive) {
    return;
  }

  let touchPosition;
  let i;

  for (i = 0; i < evt.changedTouches.length; i++) {
    touchPosition = evt.changedTouches[i].pageX;
    touchPosition -= slider.getBoundingClientRect().left;
    beforeAfterSlider(touchPosition);
    pauseEvents(evt);
  }
});
