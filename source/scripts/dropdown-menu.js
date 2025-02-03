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
menuBtn.addEventListener('touchstart', (evt) => {
  evt.preventDefault();
  toggleMenu();
});
