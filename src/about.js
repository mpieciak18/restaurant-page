const render = function() {
    const section = document.querySelector('section');
    section.innerHTML = '';

    section.style.backgroundColor = 'white';
    section.style.color = 'black';
    section.style.justifyContent = 'center';

    const title = document.createElement('div');
    title.id = 'title';
    title.innerText = 'El Puerco Hambre';
    section.appendChild(title);

    const subTitle = document.createElement('div');
    subTitle.id = 'subtitle';
    subTitle.innerText = 'About Our Restaurant';
    section.appendChild(subTitle);

    const divider = document.createElement('div');
    divider.classList = 'divider';
    section.appendChild(divider);

    const pageContents = document.createElement('div');
    pageContents.id = 'page-contents';

    const lineOne = document.createElement('p');
    lineOne.innerText = 'Here at El Puerco Hambre, our goal is to bring you the best & most delicious Cuban comfort foods.';
    lineOne.style.textAlign = 'center';
    pageContents.append(lineOne);

    const lineTwo = document.createElement('p');
    lineTwo.innerText = 'We hope you and your loved ones enjoy your experience with us & our authentic Cuban cuisine!';
    lineTwo.style.textAlign = 'center';
    pageContents.append(lineTwo);

    const lineThree = document.createElement('p');
    lineThree.innerText = 'It\'ll be our pleasure to have you dine with us.';
    lineThree.style.textAlign = 'center';
    pageContents.append(lineThree);

    section.appendChild(pageContents);
};

export { render as renderAbout };