import storage from "../models/Storage.js";
import HeaderView from "../views/HeaderView.js";
import ImageListView from "../views/ImageListView.js";
import ImageView from "../views/ImageView.js";

export default class Image{
    constructor(){
        
        this.headerView = new HeaderView(true, false);
        this.imageListView = new ImageListView(storage.images);
        this.imageView = new ImageView();
        

        this.subscribeViewEvents();
    }

    subscribeViewEvents(){
        this.imageListView.on("@click", (event) => this.handleClick(event.detail))
    }


    handleClick(src){
        console.log(src);
        this.imageView.show(src);
    }

    
}