let qrcode= new QRCode(
    document.querySelector(".qrcode")
);

qrcode.makeCode("Why did you scan me ?")

function generateQR(){
    if(document.querySelector("input").value === "" || document.querySelector("input").value === " ")
    {
        alert("Input Field cannot be blank");
    }
    else{
        qrcode.makeCode(document.querySelector("input").value);
    }
        
}