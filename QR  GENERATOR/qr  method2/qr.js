let imagebox=document.getElementById("imagebox")
let qrimage=document.getElementById("qrimage")
let qrtext=document.getElementById("qrtext")

function GenerateQR(){
     if(qrtext.value.length>0){
        qrimage.src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data="
        + qrtext.value;  
         imagebox.classList.add("show-img")
    }
    else{
         alert("enter the  text or Url")
    }
}