import { methods } from './api.js';
const endpoints = {
    catalog: "/data/fruits?sortBy=_createdOn%20desc",
    create: "/data/fruits",
    search: (searching) => `/data/fruits?where=name%20LIKE%20%22${searching}%22`,
    details: (id) => `/data/fruits/${id}`,
    update: (id) => `/data/fruits/${id}`,
    delete: (id) => `/data/fruits/${id}`,
    own: (fruitId, userId) =>
        `/data/fruits?where=fruitId%3D%22${fruitId}%22%20and%20_ownerId%3D%22${userId}%22&count`,
};



export async function getAllItems() {
    return methods.get(endpoints.catalog);
}

export async function getItemById(id) {
    return methods.get(endpoints.details(id));
}

export async function createItem(data) {
    return methods.post(endpoints.create, data);
}

export async function updateItem(id, data) {
    return methods.put(endpoints.update(id), data);
}

export async function deleteItem(id) {
    return methods.delete(endpoints.delete(id));
}

export async function searchFruit(searching) {
    return methods.get(endpoints.search(searching));
}