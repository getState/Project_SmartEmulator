import { delegate, on, qs, qsAll, } from "../utils.js";
import View from "./View.js";

const tag = "[HomeView]";

export default class HomeView extends View{
    constructor(apps){
        console.log(tag, "constructor");

        super(qs(".main"));
        this.apps = apps;
        this.template = new Template();

        this.show(apps);

        this.bindEvents();

    }

    bindEvents(){
        console.log(tag, "bindEvents");
        // on(this.element, "click", () => console.log("sdg"));
        const links = qsAll(".appItem-link", this.element);

        links.forEach(link => {
            on(link, "click", (event) => this.handleLinkClick(event, link.dataset.hash))
        })
    }

    handleLinkClick(event, hash){
        event.preventDefault();
        window.location = `#${hash}`;
    }


    show(){
        this.element.innerHTML += this.template.getList(this.apps);
    }
}

class Template{
    getList(apps){
        return`
            <ul class="appList"> 
                ${apps.map(this.getItem).join("")}
            </ul>
        `
    }

    getItem(app){
        return `
            <li class="appList-item">
                <a href="#" data-hash="${app.hash}" class="appItem-link">
                    <img class="appItem-img" src="${app.src}" alt="${app.name}">
                    <div class="appItem-text">${app.name}</div>
                </a>
            </li>
        `
    }


}