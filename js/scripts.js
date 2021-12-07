console.clear();

const app = (() => {
  let body;
  let menu;
  let menuItems;

  const init = () => {
    body = document.querySelector('body');
    menu = document.querySelector('.menu-icon');
    lettermenu = document.querySelector('.menu-leter');
    lettermenuclo = document.querySelector('.menu-leter-close');
    menuItems = document.querySelectorAll('.nav__list-item');
    cloItems = document.querySelector('.cl');
    cloItems1 = document.querySelector('.cl1');
    cloItems2 = document.querySelector('.cl2');
    cloItems3 = document.querySelector('.cl3');
    cloItems4 = document.querySelector('.cl4');
    cloItems5 = document.querySelector('.cl5');

    applyListeners();
  };

  const applyListeners = () => {
    menu.addEventListener('click', () => toggleClass(body, 'nav-active'));
    lettermenu.addEventListener('click', () => toggleClass(body, 'nav-active'));
    lettermenuclo.addEventListener('click', () => toggleClass(body, 'nav-active'));
    cloItems.addEventListener('click', () => toggleClass(body, 'nav-active'));
    cloItems1.addEventListener('click', () => toggleClass(body, 'nav-active'));
    cloItems2.addEventListener('click', () => toggleClass(body, 'nav-active'));
    cloItems3.addEventListener('click', () => toggleClass(body, 'nav-active'));
    cloItems4.addEventListener('click', () => toggleClass(body, 'nav-active'));
    cloItems5.addEventListener('click', () => toggleClass(body, 'nav-active'));
  };

  const toggleClass = (element, stringClass) => {
    if (element.classList.contains(stringClass))
    element.classList.remove(stringClass);else

    element.classList.add(stringClass);
  };

  init();
})();