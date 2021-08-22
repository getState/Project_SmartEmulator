import { on, qs } from "../utils.js";
import View from "./View.js";

const tag = "[HeaderView]";


export default class HeaderView extends View{
    constructor(isPrev, isNew){
        console.log(tag, "constructor");

        super(qs(".header"));
        this.isPrev = isPrev;
        this.isNew = isNew;
        this.template = new Template();

        this.show();

        this.bindEvents();

    }

    bindEvents(){
        if(this.isPrev){
            on(qs(".header__prev", this.element), "click", (event) => this.handlePrev(event));
        }
        if(this.isNew){
            on(qs(".header__new", this.element), "click", (event) => this.handleNew(event));
        }
    }


    show(){
        this.element.innerHTML += this.template.getPrev(this.isPrev);
        this.element.innerHTML += this.template.getTime(this.getTime());
        this.element.innerHTML += this.template.getNew(this.isNew);
    }

    handlePrev(){
        window.location.hash = "";
    }

    handleNew(event){
        this.emit("@newClick");
        event.stopPropagation();
    }

    getTime(){
        const now = new Date();

        let result = ""
        result += `${now.getFullYear()}년 `;
        result += `${now.getMonth()}월 `;
        result += `${now.getDate()}일 `;
        result += `${now.getHours()}시 `;
        result += `${now.getMinutes()}분 `;
        result += `${now.getSeconds()}초 `;
        
        return result;
    }
}



class Template{
    getPrev(isPrev){
        return `
            <button class="button header__prev ${!isPrev && "hidden"}">
                BACK
            </button>
        `
    }
    getTime(time){
        return `
            <div class="header__time">
                ${time}
            </div>
        `
    }
    getNew(isNew){
        return `
            <button class="button header__new ${!isNew && "hidden"}">
                NEW
            </button>
        `
    }
}