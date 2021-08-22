import { qs } from "../utils.js";
import View from "./View.js";


export default class ImageView extends View{
    constructor(){
        const $main = qs(".main");


        $main.innerHTML += `
        <div class="imageView">
            
        </div>
        `

        super(qs(".imageView"));

        
    }

    show(src){
        qs(".imageView").innerHTML = `<img src="${src}" alt="movie" class="imageView__image">`
    }


}