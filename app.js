var  menubox = document.getElementById("meni");

function closemenu(){
    menubox.style.top = "-50vh";
}
function openmenu(){
    menubox.style.top = "30px";
}

var wide= document.getElementById("wide");
var short= document.getElementById("menu");
var meni= document.getElementById("meni");
var above= document.getElementById("above");
var maintext= document.getElementById("maintext");
var findout= document.getElementById("subtitle");

function leavehometo(url){
    wide.style.top = "-50vh";
    short.style.top = "-50vh";
    meni.style.top = "-50vh";


    maintext.style.top = "-50vh";
    findout.style.top = "-50vh";
    above.style.top = "-50vh";
    setTimeout(() => {
        window.location.href = url;
    }, 1000);
}

var secondd = document.getElementById("secondd");

function leaveaboutto(url){
    wide.style.top = "-50vh";
    short.style.top = "-50vh";
    meni.style.top = "-50vh";

    setTimeout(() => {
        window.location.href = url;
    }, 1000);
}

function leaveskillsto(url){
    wide.style.top = "-50vh";
    short.style.top = "-50vh";
    meni.style.top = "-50vh";

    setTimeout(() => {
        window.location.href = url;
    }, 1000);
}

function leavecontactto(url){
    wide.style.top = "-50vh";
    short.style.top = "-50vh";
    meni.style.top = "-50vh";

    setTimeout(() => {
        window.location.href = url;
    }, 1000);
}


