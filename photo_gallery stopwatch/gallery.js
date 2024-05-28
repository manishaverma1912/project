let startbtn = document.getElementById("start");
let stoptbtn = document.getElementById("stop");
let Resetbtn = document.getElementById("reset");

// initial  start with all 00 ;
let min = 0;
let sec = 0;
let count = 0;

startbtn.addEventListener("click", function () {
  timer = true;
  stopwatch();
});
stoptbtn.addEventListener("click", function () {
  timer = false;
});
Resetbtn.addEventListener("click", function () {
  timer = false;
  min=0;
  sec = 0;
  count = 0;
  document.getElementById("sec").innerHTML = "00";
  document.getElementById("count").innerHTML = "00";
});

function stopwatch() {
  if (timer) {
    count++;

    // count =1000msec times will go   100*10
    if (count == 100) {
      sec++;
      count = 0;
    }
    if(sec==1 && count==0){
      document.getElementById("img_src").src="manisha git.jpg";
      document.getElementById("img_src").style.display="block";
    }
    else if(sec==3  && count==0){
      document.getElementById("img_src").src="1medal.jpg";
      document.getElementById("img_src").style.display="block";
    }
    else if(sec==5  && count==0){
      document.getElementById("img_src").src="2medal.jpg";
      document.getElementById("img_src").style.display="block";
    }
    else if(sec==7  && count==0){
      document.getElementById("img_src").src="3 medal.jpg";
      document.getElementById("img_src").style.display="block";
    }
    else if(sec==9  && count==0){
      document.getElementById("img_src").src="ai.jpeg";
      document.getElementById("img_src").style.display="block";
    }
    else if(sec==11 && count==0){
      document.getElementById("img_src").src="cs.jpeg";
      document.getElementById("img_src").style.display="block";
    }
    else if(sec==13 && count==0){
      document.getElementById("img_src").src="com.jpeg";
      document.getElementById("img_src").style.display="block";
    }
    else if(sec==15 && count==0){
      document.getElementById("img_src").src="aero.jpeg";
      document.getElementById("img_src").style.display="block";
    }
    else if(sec==17 && count==0){
      document.getElementById("img_src").src="fu.jpeg";
      document.getElementById("img_src").style.display="block";
    }
    else if(sec==19 && count==0){
      document.getElementById("img_src").src="ee.jpeg";
      document.getElementById("img_src").style.display="block";
    }
    else if(sec==21 && count==0){
      document.getElementById("img_src").src="che.jpeg";
      document.getElementById("img_src").style.display="block";
    }
    else if(sec==23 && count==0){
      document.getElementById("img_src").src="ece.jpeg";
      document.getElementById("img_src").style.display="block";
    }
    else if(sec==25 && count==0){
      document.getElementById("img_src").src="mech.jpeg";
      document.getElementById("img_src").style.display="block";
    }
    else if(sec==27 && count==0){
      document.getElementById("img_src").src="ek.jpeg";
      document.getElementById("img_src").style.display="block";
    }
    else if(sec==29 && count==0){
      document.getElementById("img_src").src="f.jpeg";
      document.getElementById("img_src").style.display="block";
    }
    else if(sec==31 && count==0){
      document.getElementById("img_src").src="l.jpeg";
      document.getElementById("img_src").style.display="block";
    }
    else if(sec==33 && count==0){
      document.getElementById("img_src").src="o.jpeg";
      document.getElementById("img_src").style.display="block";
    }
    else if(sec==35 && count==0){
      document.getElementById("img_src").src="w.jpeg";
      document.getElementById("img_src").style.display="block";
    }
    else if(sec==37 && count==0){
      document.getElementById("img_src").src="e.jpeg";
      document.getElementById("img_src").style.display="block";
    }
    else if(sec==39 && count==0){
      document.getElementById("img_src").src="r.jpeg";
      document.getElementById("img_src").style.display="block";
    }
    else if(sec==41 && count==0){
      document.getElementById("img_src").src="n.jpeg";
      document.getElementById("img_src").style.display="block";
    }
    else if(sec==43 && count==0){
      document.getElementById("img_src").src="a.jpeg";
      document.getElementById("img_src").style.display="block";
    }
    else if(sec==45 && count==0){
      document.getElementById("img_src").src="t.jpeg";
      document.getElementById("img_src").style.display="block";
    }
    else if(sec==47 && count==0){
      document.getElementById("img_src").src="p.jpeg";
      document.getElementById("img_src").style.display="block";
    }
    else if(sec==49 && count==0){
      document.getElementById("img_src").src="skills.jpeg";
      document.getElementById("img_src").style.display="block";
    }
    else if(sec==51 && count==0){
      document.getElementById("img_src").src="gi.jpeg";
      document.getElementById("img_src").style.display="block";
    }
    else if(sec==53 && count==0){
      document.getElementById("img_src").src="image.png";
      document.getElementById("img_src").style.display="block";
    }
    else if(sec==55 && count==0){
      document.getElementById("img_src").src="fan.gif";
      document.getElementById("img_src").style.display="block";
    }
    else if(sec==57 && count==0){
      document.getElementById("img_src").src="table_lamp.gif";
      document.getElementById("img_src").style.display="block";
    }
    else if(sec==58 && count==0){
      document.getElementById("img_src").src="second.jpeg";
      document.getElementById("img_src").style.display="block";
    }
    // else if(sec==59 && count==0){
    // }
    if (sec == 60) {
      min++;
      document.getElementById("img_src").style.display="none";
      sec = 0;
      count = 0;
    }
    if(min==1 &&sec==0){
      document.getElementById("img_src").src="min.jpeg";
      document.getElementById("img_src").style.display="block";
    }
    else if(min==2 && sec==0){
      document.getElementById("img_src").style.display="none";
    }
    if (min == 60) {
      min= 0;
      sec = 0;
      count = 0;
    }
    let minstring = min;
    let secstring = sec;
    let countstring = count;

    if (min < 10) {
      minstring = "0" + minstring;
    }
    if (sec < 10) {
      secstring = "0" + secstring;
    }
    if (count < 10) {
      countstring = "0" + countstring;
    }
    document.getElementById("min").innerHTML = minstring;
    document.getElementById("sec").innerHTML = secstring;
    document.getElementById("count").innerHTML = countstring;
    setTimeout(stopwatch, 10);
  }
}
