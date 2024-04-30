let showbtn =document.getElementById("showbtn");
let closebtn=document.getElementById("closebtn");
let popup=document.querySelector(".popup");
let subp=document.querySelector("sub-p");


// we can write it is the default symbol for function ("click", function(){})
showbtn.addEventListener("click",()=> {
    popup.style.display="block";
    showbtn.style.display="none";
    document.body.style.backgroundColor="pink";
    subp.style.display="none";
})
closebtn.addEventListener("click",()=> {
    popup.style.display="none";
    showbtn.style.display="block";
    document.body.style.backgroundColor="skyblue";
    subp.style.display="block";
})
