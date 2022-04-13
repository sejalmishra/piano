const keys = document.querySelectorAll(".key");
const note = document.querySelector(".note");
const letternote = document.querySelectorAll(".letternote");

function musicplay(e){
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    const music = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    if(!key) return;
    note.innerHTML = key.getAttribute("data-note");
    key.classList.add("playing");
    music.currentTime=0;
    music.play();
}

function removeTransition(e) {
    if(e.propertyName!=="transform") return;
    this.classList.remove("playing");
}

letternote.forEach((e, index) => {
    e.setAttribute("style","transition-delay:"+index*30+"ms");
})

keys.forEach(key => {
 key.addEventListener("transitionend", removeTransition)
});


window.addEventListener("keydown",musicplay);
