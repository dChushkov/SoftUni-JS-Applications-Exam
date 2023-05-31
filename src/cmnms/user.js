import { getUserData } from '../util.js';

let ctx = null;

export function user(context, next) {
    ctx = context;
    ctx.userData = getUserData();
    next();
}