import { page } from './lib.js';
import { addH } from './cmnms/addH.js';
import { user } from './cmnms/user.js';
import { showCatalog } from './views/catalog.js';
import { showCreate } from './views/create.js';
import { showDetails } from './views/details.js';
import { showHome } from './views/home.js';
import { showLogin } from './views/login.js';
import { showRegister } from './views/register.js';
import { showSearch } from './views/search.js';



page(user);
page(addH);

page('/index.hmtl', '/');
page('/', showHome);
page('/catalog', showCatalog);
page('/catalog/:id', showDetails);
page('/create', showCreate);
page('/login', showLogin);
page('/register', showRegister);
page('/search', showSearch);


page.start();