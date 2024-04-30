let startbtn=document.getElementById("start")
let stoptbtn=document.getElementById("stop")
let Resetbtn=document.getElementById("reset")


// initial  start with all 00 ;
let hr=0;
let min=0;
let sec=0;
let count=0;


// function start(){
    // timer=true
// }
// in html  we can write  in btn  onclick="stopwatch()"


startbtn.addEventListener("click", function () {
    timer = true;
    stopwatch();
  });
stoptbtn.addEventListener("click", function () {
    timer = false;
  });
Resetbtn.addEventListener("click", function () {
    timer = false;
    hr = 0;
    min = 0;
    sec = 0;
    count = 0;

  });

function stopwatch(){
    if(timer){
        count++;
    }
    // count =1000msec times will go   100*10
       if(count==100) { 
        sec++;
        count=0;
       } 
       if(sec==60){
        min++;
        sec=0;
        count=0;
       }
       if(min==60){
        hr++;
        min=0;
        sec=0;
        count=0;
       }
document.getElementById("count").innerHTML=count;
document.getElementById("sec").innerHTML=sec;
document.getElementById("min").innerHTML=min;
document.getElementById("hr").innerHTML=hr;
setTimeout(stopwatch,10)
}
