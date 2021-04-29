import { renderHome } from './home.js'
import { renderMenu } from './menu.js'
import { renderAbout } from './about.js'

const render = function() {
    const pageBody = document.querySelector('body')

    const header = document.createElement('header');

    const navbar = document.createElement('div');
    navbar.id = 'navbar';

    const navHome = document.createElement('div');
    navHome.classList = 'navbar-item';
    navHome.innerText = 'HOME';
    navHome.addEventListener('click', renderHome);
    navbar.appendChild(navHome);

    const navMenu = document.createElement('div');
    navMenu.classList = 'navbar-item';
    navMenu.innerText = 'MENU';
    navMenu.addEventListener('click', renderMenu);
    navbar.appendChild(navMenu);

    const navAbout = document.createElement('div');
    navAbout.classList = 'navbar-item';
    navAbout.innerText = 'ABOUT';
    navAbout.addEventListener('click', renderAbout);
    navbar.appendChild(navAbout);

    header.appendChild(navbar);

    pageBody.appendChild(header);
};

export { render as renderHeader };