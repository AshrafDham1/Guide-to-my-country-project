// document.querySelector('vdBackground').defaultPlaybackRate = 0.5;
// document.querySelector('vdBackground').play();
let vid = document.getElementById("vdBackground");
vid.playbackRate = 0.7;

function scrollDown() {
    window.scrollBy({
        top: window.innerHeight + 100,
        behavior: 'smooth'
    });
}
//or we can make it with the a tag and the #+section id
window.addEventListener('load',()=>{
    const vdBackground=document.getElementById('vdBackground');
    const heroSection=document.getElementById('heroSection');

    const vdBackgroundHeight=vdBackground.scrollHeight;
    heroSection.style.height=vdBackgroundHeight+'px';
});


const action1 = document.getElementById("hisbtn1");
const elm1 = document.getElementById("his1");

action1.addEventListener("mouseover", addVisibility);
action1.addEventListener("mouseout", removeVisibility);

function addVisibility() {
   elm1.classList.add("visibility");
   console.log("addVisibility1")
   elm1.style.marginLeft = "10px";

}

function removeVisibility() {
   elm1.classList.remove("visibility");
   elm1.style.marginLeft = "0";
   console.log("removeVisibility1")


}


const action2 = document.getElementById("hisbtn2");
const elm2 = document.getElementById("his2");
action2.addEventListener("mouseover", addVisibility2);
action2.addEventListener("mouseout", removeVisibility2);

function addVisibility2() {
   elm2.classList.add("visibility");
   elm2.style.marginLeft = "60px";
   console.log("addVisibility2")
}
function removeVisibility2() {
   elm2.classList.remove("visibility");
   elm2.style.marginLeft = "0";
   console.log("removeVisibility2")
}


const action3 = document.getElementById("hisbtn3");
const elm3 = document.getElementById("his3");
action3.addEventListener("mouseover", addVisibility3);
action3.addEventListener("mouseout", removeVisibility3);

function addVisibility3() {
   elm3.classList.add("visibility");
   elm3.style.marginLeft = "125px";
   console.log("addVisibility3")
}
function removeVisibility3() {
   elm3.classList.remove("visibility");
   elm3.style.marginLeft = "0";
   console.log("removeVisibility3")
}
const action4 = document.getElementById("hisbtn4");
const elm4 = document.getElementById("his4");
action4.addEventListener("mouseover", addVisibility4);
action4.addEventListener("mouseout", removeVisibility4);

function addVisibility4() {
   elm4.classList.add("visibility");
   elm4.style.marginLeft = "180px";
}
function removeVisibility4() {
   elm4.classList.remove("visibility");
   elm4.style.marginLeft = "0";
}
const action5 = document.getElementById("hisbtn5");
const elm5 = document.getElementById("his5");
action5.addEventListener("mouseover", addVisibility5);
action5.addEventListener("mouseout", removeVisibility5);

function addVisibility5() {
   elm5.classList.add("visibility");
   elm5.style.marginLeft = "175px";
   elm5.style.width="250px"
}
function removeVisibility5() {
   elm5.classList.remove("visibility");
   elm5.style.marginLeft = "0";
}
const action6 = document.getElementById("hisbtn6");
const elm6 = document.getElementById("his6");
action6.addEventListener("mouseover", addVisibility6);
action6.addEventListener("mouseout", removeVisibility6);

function addVisibility6() {
   elm6.classList.add("visibility");
   elm6.style.marginLeft = "175px";
   elm6.style.width="350px"
}
function removeVisibility6() {
   elm6.classList.remove("visibility");
   elm6.style.marginLeft = "0";
}

const action7 = document.getElementById("hisbtn7");
const elm7 = document.getElementById("his7");
action7.addEventListener("mouseover", addVisibility7);
action7.addEventListener("mouseout", removeVisibility7);

function addVisibility7() {
   elm7.classList.add("visibility");
   elm7.style.marginLeft = "105px";
}
function removeVisibility7() {
   elm7.classList.remove("visibility");
   elm7.style.marginLeft = "0";
}
const action8 = document.getElementById("hisbtn8");
const elm8 = document.getElementById("his8");
action8.addEventListener("mouseover", addVisibility8);
action8.addEventListener("mouseout", removeVisibility8);

function addVisibility8() {
   elm8.classList.add("visibility");
   elm8.style.marginLeft = "145px";
}
function removeVisibility8() {
   elm8.classList.remove("visibility");
   elm8.style.marginLeft = "0";
}
const action9 = document.getElementById("hisbtn9");
const elm9 = document.getElementById("his9");
action9.addEventListener("mouseover", addVisibility9);
action9.addEventListener("mouseout", removeVisibility9);

function addVisibility9() {
   elm9.classList.add("visibility");
   elm9.style.marginLeft = "95px";
}
function removeVisibility9() {
   elm9.classList.remove("visibility");
   elm9.style.marginLeft = "0";
}
const action10 = document.getElementById("hisbtn10");
const elm10 = document.getElementById("his10");
action10.addEventListener("mouseover", addVisibility10);
action10.addEventListener("mouseout", removeVisibility10);

function addVisibility10() {
   elm10.classList.add("visibility");
   elm6.style.width="250px"
   elm10.style.marginLeft = "-300px";


}
function removeVisibility10() {
   elm10.classList.remove("visibility");
   elm10.style.marginLeft = "0";
}

const preloader= document.getElementById("preloader");

window.addEventListener("load",fullyLoaded);

function fullyLoaded(){
   preloader.style.display="none"
}

