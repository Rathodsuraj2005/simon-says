let gameseq=[];
let userseq=[];
let btns=["red","yellow","green","purple"];

let started=false;
let level=0;
let h2=document.querySelector("h2");


document.addEventListener("keypress",function(){
    if(started==false){
        console.log("game is start");
        started=true;
        levelup();
    }
});

function btnflash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },250  );

}

function levelup(){
    userseq=[];
    level++;
    h2.innerText=`Level ${level}`;
    let randidx = Math.floor(Math.random()*3);
    let randcolor = btns[randidx];
    let randbtn = document.querySelector(`.${randcolor}`);
    gameseq.push(randcolor);
    console.log(gameseq);
    btnflash(randbtn);



}
function checkans(inx){
    
    if(userseq[inx]===gameseq[inx]){
        if(userseq.length == gameseq.length){
            setTimeout(levelup,1000);
        }
       
    }
    else{
    h2.innerHTML=`game is over!  your Score is <b>${level-1}</b><br> Press any key to start`;
    document.querySelector("body").style.backgroundColor="red";
    setTimeout(function(){
        document.querySelector("body").style.backgroundColor="white";
    },150);
    reset();

    }
}

function btnpress(){
    let btn=this;
    btnflash(btn);

    usercolor=btn.getAttribute("id");
    userseq.push(usercolor);
    checkans(userseq.length-1);
}

let allbtn=document.querySelectorAll(".btn");
for(btn of allbtn){
    btn.addEventListener("click",btnpress);
}

function reset(){
    gameseq=[];
    userseq=[];
    level=0;
    started=false;


}





