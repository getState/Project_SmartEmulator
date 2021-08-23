import storage from "../models/Storage.js";
import { createNextId, qs } from "../utils.js";
import HeaderView from "../views/HeaderView.js";
import AlarmFormView from "../views/AlarmFormView.js";
import AlarmListView from "../views/AlarmListView.js";

let interval = null;

export default class Alarm{
    constructor(){

        if(interval){
            clearInterval(interval);
        }

        this.headerView = new HeaderView(true, true);
        this.alarmFormView = new AlarmFormView();
        this.alarmListView = new AlarmListView(storage.alarms);
        

        interval = setInterval(() => {
            this.alarmCheck();
        }, 1000);

        this.subscribeViewEvents();
    }
    alarmCheck(){
        const now = new Date()
        let deletedAlarms = [];
        storage.alarms.forEach(alarm => {
            const diff = now - alarm.time;
            if(diff > 0){
                const check = alert(`${alarm.ampm} ${alarm.hour}시 ${alarm.minute}분 알람이 시간이 되었습니다!`)
                console.log("끝");
                deletedAlarms.push(alarm.id);
            }
        })
        if(deletedAlarms.length > 0){
            storage.alarms = storage.alarms.filter(alarm => {
                for(const id of deletedAlarms){
                    if(id === alarm.id){
                        return false;
                    }
                }
                return true;
            });
            this.alarmListView.show(storage.alarms);
        }
        
    }

    subscribeViewEvents(){
        this.headerView.on("@newClick", () => this.handleNew());
        this.alarmFormView.on("@submit", (event) => this.handleSubmit(event.detail))
        this.alarmListView.on("@delete", (event) => this.handleDelete(event.detail));
    }


    handleNew(){
        this.alarmFormView.show();
    }
    handleDelete(id){
        console.log("delete");
        storage.alarms = storage.alarms.filter(alarm => alarm.id != id);
        this.alarmListView.show(storage.alarms);
    }

    handleSubmit({ampm, hour, minute}){
        const time = new Date();
        time.setHours(hour);
        if(ampm === "오후"){
            time.setHours(12+Number(hour));
        }
        time.setMinutes(Number(minute));
        storage.alarms = [
            ...storage.alarms,
            {
                id: createNextId(storage.alarms),
                ampm,
                hour,
                minute,
                time
            }
        ]
        this.alarmListView.show(storage.alarms);
    }
}