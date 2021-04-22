const render = function() {
    const pageBody = document.querySelector('body')

    const footer = document.createElement('footer');

    const footerText = document.createElement('div');
    footerText.id = 'footer-text';
    footerText.innerText = 'Developed by Mark Pieciak';

    footer.appendChild(footerText);

    pageBody.appendChild(footer);
};

export { render as renderFooter };