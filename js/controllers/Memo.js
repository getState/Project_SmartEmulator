import storage from "../models/Storage.js";
import { qs } from "../utils.js";
import HeaderView from "../views/HeaderView.js";
import MemoFormView from "../views/MemoFormView.js";
import MemoListView from "../views/MemoListView.js";

export default class Memo{
    constructor(){
        
        this.headerView = new HeaderView(true, true);

        this.memoFormView = new MemoFormView();
        this.memoListView = new MemoListView(storage.memos);
        

        this.subscribeViewEvents();
    }

    subscribeViewEvents(){
        this.headerView.on("@newClick", () => this.handleNew());
        this.memoFormView.on("@submit", (event) => this.handleSubmit(event.detail));
    }


    handleNew(){
        this.memoFormView.show();
    }

    handleSubmit(content){
        storage.memos.push({
            id: 3,
            content
        })
        this.memoListView.show(storage.memos);
    }
}