var matchDate, matchTime, curTime, curDate;
var saved = document.getElementById("saved");
var sound = document.getElementById("sound");
var play = document.getElementById("play");
var pause = document.getElementById("pause");
var notify = document.getElementById("notify");
var period1 = document.getElementById("period");
let setHours = document.getElementById("set-hours");
let setMinutes = document.getElementById("set-minutes");
let date = document.getElementById("date");
var background = document.getElementById("background");
var alarmBg = document.getElementById("alarm");

function OnButMute(){
    sound.muted = true;
    sound.play();
}

function update(){
    const time = new Date();

    let current = document.getElementById("cur-time");
    

    let hour = time.getHours();
    let minutes = String(time.getMinutes()).padStart(2,'0');
    let seconds = String(time.getSeconds()).padStart(2,'0');
    let period = "AM";
    let d_ate = String(time.getDate()).padStart(2,'0');
    let month = String(time.getMonth() + 1).padStart(2,'0');
    let year = String(time.getFullYear());

    if(hour >= 12){
        period = "PM";
        if(hour > 12){
            hour -= 12;
        }
    }
    hour = String(hour).padStart(2,'0');
    current.innerHTML = `${hour}:${minutes}:${seconds} ${period}`;
    curTime = `${hour}:${minutes} ${period}`;
    curDate = `${d_ate}-${month}-${year}`;

    if(matchTime === curTime && matchDate === curDate){
        notify.style.visibility="visible";
        play.click();
    }
    if(matchTime < curTime){
        notify.style.visibility="hidden";
        item.innerHTML="";
        item.style.background = "none";
        matchTime="";
        matchDate="";
        pause.click();
    }

    console.log(curDate,curTime);
}
    
    var item = document.createElement("ul");
    function Alarm(){
        if(setHours.value=="" || setMinutes.value==""){
            alert("Please Set the time.");
        }
        else if(date.value==""){
            alert("Please Set the date.");
        }
        else if(`${setHours.value}:${setMinutes.value} ${period}`<=curTime){
            alert("Please enter the future time.");
            setHours.value="";
            setMinutes.value="";
            date.value="";
        }
        else if(date.value<curDate){
            alert("Please enter the present or future date.");
            setHours.value="";
            setMinutes.value="";
            date.value="";
        }
        else{
            matchDate=date.value;
            matchTime=`${setHours.value}:${setMinutes.value} ${period1.value}`;
            if(item.innerHTML==""){
                item.innerHTML=`<p>${setHours.value}:${setMinutes.value} ${period1.value}</p>&nbsp;&nbsp;&nbsp;<p>${date.value}</p>`;
                item.style.width = "100%";
                item.style.background = "black";
                saved.appendChild(item);
            }
            else{
                alert("Not Allowed");
            }
            console.log(matchDate,matchTime);
            setHours.value="";
            setMinutes.value="";
            date.value="";
            sound.muted=false;
            let clearAlarm = document.getElementById("clear-alarm");
            pause.click();
            clearAlarm.addEventListener("click",function remove(){
                item.innerHTML="";
                matchTime="";
                matchDate="";
                notify.style.visibility="hidden";
                sound.muted=true;
            })
        }
    }

function playAudio(){
    sound.play();
}
function pauseAudio(){
    sound.pause();
    sound.currentTime=0;
}

setInterval(update,1000);