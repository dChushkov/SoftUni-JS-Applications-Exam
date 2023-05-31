import { createItem } from '../api/data.js';
import { createSubmitHandler } from '../util.js';

let ctx = null;

const createTemplate = (onCreate) => ctx.html`
        <section id="create">
            <div class="form">
                <h2>Add Fruit</h2>
                <form @submit=${onCreate} class="create-form">
                    <input type="text" name="name" id="name" placeholder="Fruit Name" />
                    <input type="text" name="imageUrl" id="Fruit-image" placeholder="Fruit Image" />
                    <textarea id="fruit-description" name="description" placeholder="Description" rows="10"
                        cols="50"></textarea>
                    <textarea id="fruit-nutrition" name="nutrition" placeholder="Nutrition" rows="10" cols="50"></textarea>
                    <button type="submit">Add Fruit</button>
                </form>
            </div>
        </section>
`;




export function showCreate(context) {

    ctx = context;

    ctx.render(createTemplate(createSubmitHandler(onCreate)));

    async function onCreate(userInput, form) {

        const { name, imageUrl, description, nutrition } = userInput; 
        
        await createItem({ name, imageUrl, description, nutrition });
        form.reset();
        ctx.page.redirect('/catalog');
        //console.log('onCreate');
    }
}