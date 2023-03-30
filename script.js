var clickMenu=document.getElementById("desplegar");
var clickContraer=document.getElementById("contraer");

clickMenu.addEventListener("click",()=>{
    document.getElementById("desplegable").style.top="20px";
    document.getElementById("desplegable").style.opacity="1";
    document.getElementById("desplegable").style.visibility="visible"
    document.getElementById("desplegar").style.visibility="hidden"
    document.getElementById("contraer").style.visibility="visible"
});

clickContraer.addEventListener("click",()=>{
    document.getElementById("desplegable").style.top="-40px";
    document.getElementById("desplegable").style.opacity="0";
    document.getElementById("desplegable").style.visibility="hidden"
    document.getElementById("desplegar").style.visibility="visible"
    document.getElementById("contraer").style.visibility="hidden"
});
