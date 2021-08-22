import { delegate, on, qs, qsAll, } from "../utils.js";
import View from "./View.js";

const tag = "[MemoView]";

export default class MemoListView extends View{
    constructor(memos){
        console.log(tag, "constructor");

        super(qs(".main"));
        this.memos = memos;
        this.template = new Template();
        this.show(memos);

        this.bindEvents();

    }

    bindEvents(){
        console.log(tag, "bindEvents");
        delegate(this.element, "click", ".memoItem__text", (event) => this.handleClick(event))
        // on(this.element, "click", () => console.log("sdg"));
        
    }

    handleClick(event){
        event.preventDefault();
        const texts = qsAll(".memoItem__text", this.element);
        texts.forEach(text => {
            text.classList.remove("opened");
        })
        
        event.target.classList.add("opened");
    }


    show(memos){
        if(qs(".memoList")){
            qs(".memoList").remove();
        }
        
        this.element.innerHTML += this.template.getList(memos);
        
    }
}

class Template{
    getList(memos){
        return`
            <ul class="memoList"> 
                ${memos.map(this.getItem).join("")}
            </ul>
        `
    }

    getItem(memo){
        return `
            <li class="memoList-item">
                <p class="memoItem__text">
                    ${memo.content}
                </p>
            </li>
        `
    }


}