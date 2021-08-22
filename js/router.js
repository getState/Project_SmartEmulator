import Alarm from "./controllers/Alarm.js";
import Home from "./controllers/Home.js";
import Image from "./controllers/Image.js";
import Memo from "./controllers/Memo.js";

export default class Router{
    constructor($app){
        this.$app = $app;

        this.hashChangeHandler()

        this.init();
    }

    init(){
        window.addEventListener("hashchange", () => this.hashChangeHandler());
    }

    hashChangeHandler(){
        this.$app.innerHTML = `
            <header class = "header"></header>
            <main class="main"></main>
        `;
        const hash = window.location.hash;
        if(hash === "#alarm"){
            new Alarm();
        }else if(hash === "#memo"){
            new Memo();
        }else if(hash === "#image"){
            new Image();
        }else{
            new Home();
        }
    }
}