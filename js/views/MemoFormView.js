import { on, qs } from "../utils.js";
import View from "./View.js";


export default class MemoFormView extends View{
    constructor(){
        const $main = qs(".main");


        $main.innerHTML += `
            <form class="memo">
                <input class="memo__input" placeholder="메모를 입력하세요">
            </form>
        `

        super(qs(".memo"));



        this.bindEvents();
        this.hide();
        
    }

    bindEvents(){
        on(qs(".memo"), "submit", (event) => this.handleSubmit(event));
    }

    handleSubmit(event){
        console.log(event);
        event.preventDefault();
        
        const value = qs(".memo__input").value;
        this.emit("@submit", value);
        this.hide();
    }

    show(){
        qs(".memo").style.display = "block";
        this.bindEvents();
    }

    hide(){
        qs(".memo").style.display = "none";
    }


}