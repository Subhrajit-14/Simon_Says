let gameSeq = [];
let userSeq = [];

let btns = ["yellow", "blue", "red", "green"];

let started = false;
let level = 0;

let h2 = document.querySelector("h2");
let body = document.querySelector("body")

document.addEventListener("keypress", function() {
    if(started == 0) {
        console.log("game started");
        started = true
        levelUp();
        body.classList.remove("over");
    }
})

function btnFlash(btn) {
    btn.classList.add("flash");
    setTimeout(function (){
        btn.classList.remove("flash")
}, 250)
}

function userflash(btn) {
    btn.classList.add("userflash");
    setTimeout(function (){
        btn.classList.remove("userflash")
}, 250)
}

function levelUp() {
    userSeq = [];
    level++;
    h2.innerText = `level ${level}`;

    let randIdx = Math.floor(Math.random() * 3)
    let randCol = btns[randIdx]
    let ransBtn = document.querySelector(`.${randCol}`)
    gameSeq.push(randCol)
    console.log(gameSeq)
    btnFlash(ransBtn);
}

function chackAns(idx) {
    if(userSeq[idx] == gameSeq[idx]) {
        if(userSeq.length == gameSeq.length) {
            setTimeout(levelUp, 1000);
        }
    }
    else {
        h2.innerHTML = `Game Over! YOUR SCRORE IS: ${gameSeq.length-1} <br>press any to start game`;
        setTimeout(over, 1);
        reset();
    }
}

function over() {
    body.classList.add("over")
}

function btnPress() {
    let btn = this
    userflash(btn);
    userColor = btn.getAttribute("id");
    userSeq.push(userColor)
    chackAns(userSeq.length-1);
}

let allBtns = document.querySelectorAll(".btn")
for(btn of allBtns) {
    btn.addEventListener("click", btnPress)
}

function reset() {
    started = false;
    userSeq = [];
    gameSeq = [];
    level = 0;
}