import { renderHome } from './home.js'
import { renderMenu } from './menu.js'
import { renderAbout } from './about.js'

const render = function() {
    const pageBody = document.querySelector('body')

    const header = document.createElement('header');

    const topMenu = document.createElement('div');
    topMenu.id = 'top-menu';

    const menuItemOne = document.createElement('div');
    menuItemOne.classList = 'menu-item';
    menuItemOne.id = `top-menu-item-1`;
    menuItemOne.innerText = 'HOME';
    menuItemOne.addEventListener('click', renderHome);
    topMenu.appendChild(menuItemOne);

    const menuItemTwo = document.createElement('div');
    menuItemTwo.classList = 'menu-item';
    menuItemTwo.id = `top-menu-item-2`;
    menuItemTwo.innerText = 'MENU';
    menuItemTwo.addEventListener('click', renderMenu);
    topMenu.appendChild(menuItemTwo);

    const menuItemThree = document.createElement('div');
    menuItemThree.classList = 'menu-item';
    menuItemThree.id = `top-menu-item-3`;
    menuItemThree.innerText = 'ABOUT';
    menuItemThree.addEventListener('click', renderAbout);
    topMenu.appendChild(menuItemThree);

    header.appendChild(topMenu);

    pageBody.appendChild(header);
};

export { render as renderHeader };