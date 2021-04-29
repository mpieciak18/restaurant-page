import { renderMenu } from './menu.js'

const render = function() {
    const pageBody = document.querySelector('body');
    let appendBody = true;

    let section = document.querySelector('section');

    if (section == null) {
        section = document.createElement('section');
    } else {
        section.innerHTML = '';
        appendBody = false;
    };

    section.style.backgroundColor = '#c33124';
    section.style.color = 'white';
    section.style.justifyContent = 'center';

    const title = document.createElement('div');
    title.id = 'title';
    title.innerText = 'El Puerco Hambre';
    section.appendChild(title);

    const subTitle = document.createElement('div');
    subTitle.id = 'subtitle';
    subTitle.innerText = 'Cuban Comfort Foods';
    section.appendChild(subTitle);

    const divider = document.createElement('div');
    divider.classList = 'divider';
    section.appendChild(divider);

    const pageContents = document.createElement('div');
    pageContents.id = 'page-contents';
    pageContents.innerText = 'Come get a taste of Cuba, here at El Puerco Hambre!';
    section.appendChild(pageContents);

    const menuButton = document.createElement('div');
    menuButton.id = 'menu-button';
    menuButton.addEventListener('click', renderMenu);
    const menuButtonText = document.createElement('div');
    menuButtonText.id = 'menu-button-text';
    menuButtonText.innerText = 'Check Out Our Menu';
    menuButton.appendChild(menuButtonText);
    section.appendChild(menuButton);

    if (appendBody == true) {
        pageBody.appendChild(section);
    };
};

export { render as renderHome };