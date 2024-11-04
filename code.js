

let hour= document.getElementById("hour");
let minute= document.getElementById("minute");
let second= document.getElementById("second");
let millisecond= document.getElementById("millisecond");



let play_pause= document.getElementById("play-pause-btn");
let pause= document.getElementById("stop-btn");
let reset= document.getElementById("reset-btn");

var hourvalue=0;
var minutevalue=0;
var secondvalue=0;
let ms=0;


function seconds(){
    secondvalue+=1;
    if(secondvalue>=60){
        secondvalue=0;
        minutes();
    }
    if(secondvalue<10){
        second.innerHTML=`0${secondvalue}`;
    }
    else{
        second.innerHTML=`${secondvalue}`;
    }

}

function styleTime(h,m,s,ms){
    h=h<10?`0${h}`:h;
    m=m<10?`0${m}`:m;
    s=s<10?`0${s}`:s;
    ms= ms<10?`00${ms}`:ms<100?`0${ms}`:ms>=100?`${ms}`:ms;

    hour.innerHTML=h;
    minute.innerHTML=m;
    second.innerHTML=s;
    millisecond.innerHTML=ms;
}
function displayTimer(){

    ms+=10;

    if(ms>=1000){
        ms=0;
        secondvalue++;
        if(secondvalue>=60){
            secondvalue=0;
            minutevalue++;
            if(minutevalue>=60){
                minutevalue=0;
                hourvalue+=1;
            }
        }
    }

     styleTime(hourvalue,minutevalue,secondvalue,ms);

}
let start;
let temp=true;
let play_icon=document.getElementById("play-icon");
let pause_icon=document.getElementById("pause-icon");

        // Click Events // >>>>>>>--------
play_pause.addEventListener("click",()=>{

    play_pause.classList.toggle("active");

    if(temp){
        start=setInterval(displayTimer,10);
        temp=false;

    }
    else{
        clearInterval(start);
        temp=true;
    }
    
})


reset.addEventListener("click",()=>{
    clearInterval(start);

    hourvalue=0;
    minutevalue=0;
    secondvalue=0;
    ms=0;

    hour.innerHTML="00";
    minute.innerHTML="00";
    second.innerHTML="00";
    millisecond.innerHTML="000";
});

    

   