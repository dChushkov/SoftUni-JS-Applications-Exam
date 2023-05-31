import { getAllItems, searchFruit } from '../api/data.js';
import { createSubmitHandler, alertMessageFn } from '../util.js';

let ctx = null;

const searchTemplate = (onSearch,isLoggedIn, foundProducts) => ctx.html`
        <section id="search">
        
            <div class="form">
                <h2>Search</h2>
                <form @submit=${onSearch} class="search-form">
                    <input type="text" name="search" id="search-input" />
                    <button class="button-list">Search</button>
                </form>
            </div>

            <h4>Results:</h4>
            <div class="search-result"></div>
            ${foundProducts.length === 0 ? 
                ctx.html`
                    <p class="no-result">No result.</p>
                ` 
                : foundProducts.map(searchCard)}
            </div>
                <!--If there are matches display a div with information about every fruit-->
                
            </div>
        </section>
`;

const searchCard = (item, isLoggedIn) => ctx.html`
<div class="fruit">
                    <img src="${item.imageUrl}" alt="example1" />
                    <h3 class="title">${item.name}</h3>
                    <p class="description">${item.description}</p>

                    ${isLoggedIn !== false 
                        ? ctx.html`<a class="details-btn" href="/catalog/${item._id}">More Info</a>`
                        : ''}
                </div>
`;

export async function showSearch(context) {
    ctx = context;
    const isLoggedIn = ctx.userData !== null;
    let foundProducts = [];
    ctx.render(searchTemplate(onSearch, isLoggedIn, foundProducts));

    async function onSearch(event) {
        event.preventDefault();
        const form = event.target;
        const formData = new FormData(form);
        const queryStr = formData.get('search');
        if (queryStr === '') {
            alertMessageFn('The search field must not be empty!');
            return;
        }

        foundProducts = await searchFruit(queryStr);
        ctx.render(searchTemplate(onSearch, isLoggedIn, foundProducts));
    }
}