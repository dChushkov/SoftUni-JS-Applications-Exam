import { getItemById } from '../api/data.js';
import { showDelete } from './delete.js';
import { showEdit } from './edit.js';

let ctx = null;
const detailsTemplate = (item, isTrue) => ctx.html`
        <section id="details">
            <div id="details-wrapper">
                <img id="details-img" src="${item.imageUrl}" alt="example1" />
                <p id="details-title">${item.name}</p>
                <div id="info-wrapper">
                    <div id="details-description">
                        <p>${item.description}</p>
                        <p id="nutrition">Nutrition</p>
                        <p id="details-nutrition">
                            ${item.nutrition}
                        </p>
                    </div>
                    
                    ${isTrue ? ctx.html`
                    <div id="action-buttons">
                        <a @click=${() => showEdit(ctx, item._id)} href="javascript:void(0)" id="edit-btn">Edit</a>
                        <a @click=${() => showDelete(ctx, item._id)} href="javascript:void(0)" id="delete-btn">Delete</a>
                    </div>
                    ` 
                    : null}

                    
                </div>
            </div>
        </section>
`;

export function showDetails(context) {
    ctx = context;
    const itemId = ctx.params.id;
    update();

    

    async function update() {
        const item = await getItemById(itemId);
        
        const isTrue = ctx.userData?._id == item._ownerId;

        
        const userId = ctx.userData?._id;
        

        ctx.render(detailsTemplate(item, isTrue));
    }
}