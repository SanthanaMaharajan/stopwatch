const hours= document.getElementById("hours");
const minutes=document.getElementById("minutes");
const seconds=document.getElementById("seconds");
const resetButton=document.getElementById("reset");
const startButton=document.getElementById("start");
const stopButton=document.getElementById("stop");
let interval;
let second=0;
let minute=0;
let hour=0;

function startTimer(){
    second++;
    if(second<60){
        seconds.innerHTML=second<10? "0"+second :second; 
    }
    else if (second=60){
        minute++;
        second=0;
        seconds.innerHTML=second<10? "0"+second :second;
        if(minute<60){
            minutes.innerHTML=minute<10?"0"+minute:minute;
        }
        else if(minute=60){
            hour++;
            minute=0;
            minutes.innerHTML=minute<10?"0"+minute:minute;
            hours.innerHTML=hour<10?"0"+hour:hour;
        }
    }
};

startButton.onclick= function(){
    clearInterval(interval)
    interval = setInterval(startTimer,1000);
};

stopButton.onclick= function(){
    clearInterval(interval);
}

resetButton.onclick=function(){
    hour=0;
    minute=0;
    second=0;
    hours.innerHTML=hour<10?"0"+hour:hour;
    minutes.innerHTML=minute<10?"0"+minute:minute;
    seconds.innerHTML=second<10?"0"+second:second;
}