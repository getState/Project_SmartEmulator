import storage from "./models/Storage.js";
import Store from "./models/store.js";
import Router from "./router.js";
import { qs } from "./utils.js";

const tag = "[main]";


document.addEventListener("DOMContentLoaded", main);


function main() {
    console.log(tag, "main");

    // const store = new Store(storage);
    const $app = qs("#app", document)
    const router = new Router($app);
    const store = new Store(storage);

    
}