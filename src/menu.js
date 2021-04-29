const render = function() {
    const section = document.querySelector('section');
    section.innerHTML = '';

    section.style.backgroundColor = "white";
    section.style.color = 'black';
    section.style.justifyContent = '';

    const title = document.createElement('div');
    title.id = 'title';
    title.innerText = 'El Puerco Hambre';
    section.appendChild(title);

    const subTitle = document.createElement('div');
    subTitle.id = 'subtitle';
    subTitle.innerText = 'See Our Menu Below';
    section.appendChild(subTitle);

    const divider = document.createElement('div');
    divider.classList = 'divider';
    divider.innerText = '.';

    const menuItem = document.createElement('div');
    menuItem.classList = 'menu-item';
    const itemName = document.createElement('div');
    itemName.classList = 'item-name';
    const itemDescr = document.createElement('div');
    itemDescr.classList = 'item-descr';

    const buildMenu = function(name, descr) {
        itemName.innerText = name;
        itemDescr.innerText = descr;
        menuItem.appendChild(itemName.cloneNode(true));
        menuItem.appendChild(itemDescr.cloneNode(true));
        section.appendChild(divider.cloneNode(true));
        section.appendChild(menuItem.cloneNode(true));
        menuItem.innerHTML = '';
        itemName.innerText = '';
        itemDescr.innerText = '';
    };
    
    buildMenu('Croquetas de Jamón', 'Ham croquettes with a special zing');
    buildMenu('Papas Rellenas', 'Potato balls stuffed with deliciously seasoned ground beef');
    buildMenu('Empanadas', 'Crunchy, fluffy, fried dough stuffed with beef or chicken');
    buildMenu('Ropa Vieja', 'Shredded flank steak, cook with sweet peppers, garlic, onion, and tomato sauce');
    buildMenu('Churrasco a La Cubana', 'Charbroiled certified Angus skirt steak, topped with chimichurri sauce');
    buildMenu('Rabo Encendido', 'Oxtail stew braised in a flavorful marinade, served in a red wine demi-glaze');
    buildMenu('Cubano', 'Class sandwich with roast pork, serrano ham, Swiss cheese, mustard & pickles');
    buildMenu('Tostones', 'Fried green plaintains with mojo sauce');
    buildMenu('Maduros', 'Sweet ripe plaitains fried to a gold color');
    buildMenu('Tres Leches', 'Plain cake dipped in sweetened condensed milk, evaporated milk, and heavy cream');

    section.firstChild.style.paddingTop = '50px';
    section.lastChild.style.paddingBottom = '50px';
};

export { render as renderMenu };