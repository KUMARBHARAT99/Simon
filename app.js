let gameSeq = [];
let userSeq = [];

let btns = ["yellow","red","purple","green"];

let started = false;
let level = 0;

let h2 = document.querySelector("h2");

document.addEventListener("keypress", function(){
    if(started == false){
        console.log("game is started");
        started = true;
        levelup();
    }
});

function btnFlash(box){
    box.classList.add("flash");
    setTimeout(function (){
        box.classList.remove("flash");
    }, 250);
}

function userFlash(box){
    box.classList.add("userflash");
    setTimeout(function (){
        box.classList.remove("userflash");
    }, 250);
}

function levelup(){
    userSeq = [];
    level++;
    h2.innerText = `level ${level}`;

    let randIdx = Math.floor(Math.random() * 3);
    let randcolor = btns[randIdx];
    let randbtn = document.querySelector(`.${randcolor}`);
    gameSeq.push(randcolor);
    btnFlash(randbtn);
}

function checkAns(idx){
    if(userSeq[idx] === gameSeq[idx]){
        if(userSeq.length == gameSeq.length){
            setTimeout(levelup, 1000);   
        }
    }else{
        h2.innerText = ` game over!! Your score was ${userSeq.length - 1}`;
        reset();
    }
}

function btnPress(){
    console.log(this);
    let box = this;
    userFlash(box);
    
    
    let userColor = box.getAttribute("id");
    userSeq.push(userColor);
    checkAns(userSeq.length-1);
}

let allBtns = document.querySelectorAll(".box");
for(box of allBtns){
    box.addEventListener("click",btnPress);
}

function reset(){
    
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
}