const render = function() {
    const section = document.querySelector('section');
    section.innerHTML = '';

    const title = document.createElement('div');
    title.id = 'title';
    title.innerText = 'El Puerco Hambre';
    section.appendChild(title);

    const subTitle = document.createElement('div');
    subTitle.id = 'subtitle';
    subTitle.innerText = 'Cuban Comfort Foods';
    section.appendChild(subTitle);

    const divider = document.createElement('div');
    divider.id = 'divider';
    section.appendChild(divider);

    const pageContents = document.createElement('div');
    pageContents.id = 'page-contents';
    pageContents.innerText = 'Come get a taste of Cuba, here at El Puerco Hambre!';
    section.appendChild(pageContents);

    const menuButton = document.createElement('div');
    menuButton.id = 'menu-button';
    const menuButtonText = document.createElement('div');
    menuButtonText.id = 'menu-button-text';
    menuButtonText.innerText = 'Check Out Our Menu';
    menuButton.appendChild(menuButtonText);
    section.appendChild(menuButton);
};

export { render as renderAbout };