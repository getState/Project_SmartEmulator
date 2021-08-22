import { delegate, formatRelativeDate, on, qs, qsAll, } from "../utils.js";
import View from "./View.js";

const tag = "[AlarmListView]";

export default class AlarmListView extends View{
    constructor(alarms){
        console.log(tag, "constructor");

        super(qs(".main"));
        this.alarms = alarms;
        this.template = new Template();
        this.show(alarms);

        this.bindEvents();
    }

    bindEvents(){
        console.log(tag, "bindEvents");
        delegate(this.element, "click", ".alarmItem-delete", (event) => this.handleDelete(event))
        
    }
    handleDelete(event){
        const id = event.target.dataset.id
        this.emit("@delete", id);
    }
    
    show(alarms){
        if(qs(".alarmList")){
            qs(".alarmList").remove();
        }
        
        this.element.innerHTML += this.template.getList(alarms);
        
    }
}

class Template{
    getList(alarms){
        return`
            <ul class="alarmList"> 
                ${alarms.map(this.getItem).join("")}
            </ul>
        `
    }

    getItem(alarm){
        return `
        <li class="alarmList-item">
            <div class="alarmItem-text">
                ${alarm.ampm} ${alarm.hour}시 ${alarm.minute}분 ${formatRelativeDate(alarm.time)}
            </div>
            <button class="button alarmItem-delete" data-id = ${alarm.id}>
                삭제
            </button>
        </li>
        `
    }


}