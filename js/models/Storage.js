const storage = {
    apps : [
        {id : 1, src : "../assets/app_alarm.png", name : "알람", hash:"alarm"},
        {id : 2, src : "../assets/app_image.png", name : "메모", hash:"memo"},
        {id : 3, src : "../assets/app_memo.png", name : "사진", hash:"image"},
    ],
    get alarms(){
        if(this._alarms){
            return this._alarms;
        }
        const initialValue = localStorage.getItem("alarms");
        if(initialValue === null){
            this._alarms = [];
            return this._alarms;
        }
        const initialAlarms = JSON.parse(initialValue).map(value => {
            return{
                ...value,
                time : new Date(value.time)
            }
            
        });
        this._alarms = initialAlarms;
        return this._alarms;
    },
    set alarms(alarms){
        this._alarms = alarms;
        localStorage.setItem("alarms", JSON.stringify(this._alarms));
    },
    // _alarms:[
    //     {id : 1, ampm : "오전", hour: 6, minute:30}
    // ],
    get memos(){
        if(this._memos){
            return this._memos;
        }
        const initialValue = localStorage.getItem("memos");
        if(initialValue === null){
            this._memos = [
                {
                    id: 1,
                    content: "샘플메모입니다.....샘플메모입니다.....샘플메모입니다.....샘플메모입니다.....샘플메모입니다.....샘플메모입니다.....샘플메모입니다.....샘플메모입니다....."
                },
            ];
            return this._memos;
        }
        this._memos = initialValue;
        return this._memos;
    },
    set memos(memos){
        this._memos = memos;
        localStorage.setItem("memos", JSON.stringify(this._memos));
    },

    images:[
        {
            id : 1,
            src : "../assets/movies/movie1.jpg"
        },
        {
            id : 2,
            src : "../assets/movies/movie2.jpg"
        },
        {
            id : 3,
            src : "../assets/movies/movie3.jpg"
        },
        {
            id : 4,
            src : "../assets/movies/movie4.jpg"
        },
        {
            id : 5,
            src : "../assets/movies/movie5.jpg"
        },
        {
            id : 6,
            src : "../assets/movies/movie6.jpg"
        },
        {
            id : 7,
            src : "../assets/movies/movie7.jpg"
        },
        {
            id : 8,
            src : "../assets/movies/movie8.jpg"
        },
        {
            id : 9,
            src : "../assets/movies/movie9.jpg"
        },
        {
            id : 10,
            src : "../assets/movies/movie10.jpg"
        },
        {
            id : 11,
            src : "../assets/movies/movie11.jpg"
        }
    ],
    
}


export default storage;