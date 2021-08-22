import storage from "../models/Storage.js";
import HeaderView from "../views/HeaderView.js";
import HomeView from "../views/HomeView.js";

export default class Home{
    constructor(){
        this.headerView = new HeaderView(false, false);
        this.homeView = new HomeView(storage.apps)

    }



}