let question = document.getElementById("qs")
let yesBtn = document.getElementById("yes")
let noBtn = document.getElementById("no")
let ans = document.getElementById("ans")
let meme = document.getElementById("meme")

let currentWidth = window.innerWidth - 120;     //Subtracted the width of the button
let currentHeight = window.innerHeight - 60;    //Subtracted the height of the button

yesBtn.onclick = ()=>{
    ans.innerText="I love you too ❤";
    noBtn.style.display = "none";
    yesBtn.style.display = "none";
    question.style.display = "none";
}

noBtn.addEventListener("mouseover", ()=>{
    moveButtonToRandomPosition();
})

function moveButtonToRandomPosition() {
    noBtn.style.position = "absolute";
    noBtn.style.top = Math.floor(Math.random() * currentHeight) + "px";
    noBtn.style.left = Math.floor(Math.random() * currentWidth) + "px";
}

noBtn.onclick = ()=>{
    meme.src = "/prakash-raj-cheating.gif";
    noBtn.style.display = "none";
    yesBtn.style.display = "none";
    question.style.display = "none";
}
