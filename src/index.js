import { renderHeader } from './header.js'
import { renderHome } from './home.js'
import { renderFooter } from './footer.js'

const isHome = function() {
    renderHeader();
    renderHome();
    renderFooter();
};

isHome();