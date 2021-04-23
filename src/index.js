import { renderHeader } from './header.js'
import { renderHome } from './home.js'
import { renderFooter } from './footer.js'

const initHome = function() {
    renderHeader();
    renderHome();
    renderFooter();
};

initHome();