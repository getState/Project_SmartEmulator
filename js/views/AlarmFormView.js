import { on, qs } from "../utils.js";
import View from "./View.js";


export default class AlarmFormView extends View{
    constructor(){
        const $main = qs(".main");


        $main.innerHTML += `
        <form class="alarm" id="alarm">
            <select class="alarm__input" name="ampm" form="alarm">
                <option value="오전">오전</option>
                <option value="오후">오후</option>
            </select>
            <label class="alarm__label">
                <input class="alarm__input" name="hour" type="number" min="00" max="12" value="00" step="1" required />시
            </label>
            <label class="alarm__label">
                <input class="alarm__input" name="minute" type="number" min="00" max="50" value="00" step="10" required />분
            </label>
            <input class="alarm__input button" type="submit" class="button" value="저장" />
        </form>
        `

        super(qs(".alarm"));

        


        this.bindEvents();
        this.hide();
        
    }

    bindEvents(){
        on(qs(".alarm"), "submit", (event) => this.handleSubmit(event));
    }

    handleSubmit(event){
        event.preventDefault();

        const ampm = this.selectElement = qs("select").options[this.selectElement = qs("select").selectedIndex].value;
        const hour = qs("input[name=hour]").value;
        const minute = qs("input[name=minute]").value;

        this.emit("@submit", {ampm, hour, minute});
        this.hide();
    }

    show(){
        qs(".alarm").style.display = "block";
        this.bindEvents();
    }

    hide(){
        qs(".alarm").style.display = "none";
    }


}