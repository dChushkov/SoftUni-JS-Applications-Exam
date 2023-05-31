import { getItemById, updateItem } from '../api/data.js';
import { createSubmitHandler } from '../util.js';

let ctx = null; 




const editTemplate = (onEdit, item) => ctx.html`
            <section id="edit">
                <div class="form">
                    <h2>Edit Fruit</h2>
                    <form @submit=${onEdit} class="edit-form">
                        <input type="text" .value=${item.name}  name="name" id="name" placeholder="Fruit Name" />
                        <input type="text" .value=${item.imageUrl}  name="imageUrl" id="Fruit-image" placeholder="Fruit Image URL" />
                        <textarea id="fruit-description" .value=${item.description}  name="description" placeholder="Description" rows="10"
                            cols="50"></textarea>
                        <textarea id="fruit-nutrition" .value=${item.nutrition}  name="nutrition" placeholder="Nutrition" rows="10" cols="50"></textarea>
                        <button type="submit">post</button>
                    </form>
                </div>
            </section>
`;

export async function showEdit(context, itemId) {
    ctx = context;

    const item = await getItemById(itemId);

    ctx.render(editTemplate(createSubmitHandler(onEdit), item));

    async function onEdit(userInput, form) {

        const { name, imageUrl, description, nutrition } = userInput; 
        await updateItem(itemId, { name, imageUrl, description, nutrition });
        form.reset();
        ctx.page.redirect(`/catalog/${itemId}`);
    }
}