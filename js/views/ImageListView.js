import { delegate, on, qs, qsAll, } from "../utils.js";
import View from "./View.js";

const tag = "[ImageListView]";

export default class ImageListView extends View{
    constructor(images){
        console.log(tag, "constructor");

        super(qs(".main"));
        this.images = images;
        this.template = new Template();
        this.show(images);

        this.bindEvents();

    }

    bindEvents(){
        console.log(tag, "bindEvents");
        delegate(this.element, "click", ".imageItem__image", (event) => this.handleClick(event))
        
    }

    handleClick(event){
        const images = qsAll(".imageItem__image", this.element);
        images.forEach(image => {
            image.classList.remove("imageClicked");
        })
        
        event.target.classList.add("imageClicked");
        this.emit("@click", event.target.dataset.src);
    }


    show(images){  
        this.element.innerHTML += this.template.getList(images);
    }
}

class Template{
    getList(images){
        return`
            <ul class="imageList"> 
                ${images.map(this.getItem).join("")}
            </ul>
        `
    }

    getItem(image){
        return `
            <li class="imageList-item">
                <img class="imageItem__image" data-src="${image.src}" src="${image.src}" alt="movie">
            </li>
        `
    }


}