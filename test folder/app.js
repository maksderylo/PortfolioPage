
var  menubox = document.getElementById("meni");

function closemenu(){
    menubox.style.left = "-350px";
}
function openmenu(){
    menubox.style.left = "10px";
}
var bodyy = document.querySelector('.bodyy');
var hightis = bodyy.offsetHeight;
document.querySelector("#message").textContent = hightis;
