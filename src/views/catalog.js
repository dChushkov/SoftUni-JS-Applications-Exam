import { getAllItems } from '../api/data.js';

let ctx = null;

const catalogTemplate = (allItems) => ctx.html`
        <h2>Fruits</h2>
        <section id="dashboard">
            ${allItems.length == 0 ? 
                ctx.html`<h2>No fruit info yet.</h2>` : 
                allItems.map(itemCard)}
        
        </section>
        
        
`;

const itemCard = (item) => ctx.html`
<div class="fruit">
    <img src="${item.imageUrl}" alt="example1" />
    <h3 class="title">${item.name}</h3>
    <p class="description">${item.description}</p>
    <a class="details-btn" href="/catalog/${item._id}">More Info</a>
</div>
`;

export async function showCatalog(context) {
    ctx = context;
    const allItems = await getAllItems();

    ctx.render(catalogTemplate(allItems));
    //console.log('allItems');
}