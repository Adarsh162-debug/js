let gemeseq=[];
let userseq=[];
let btns=["yellow","red","purple","green"];

let started=false;
let level=0;

let h2 =document.querySelector("h2");

document.addEventListener("keypress",function(){
   if(!started){
    console.log("game is started");
    started=true;
    levelUp();
   }  
});

function btnFlash(btn){ 
btn.ClassList.add("flash");
setTimeout(function (){
    btn.ClassList.remove("flash");
},250);
}


function levelUp(){
    level++;
    h2.innerText=`level ${level}`;
 let randIdx=Math.floor(Math.random()*3);
 let randColor=btns[randIdx];
 let randBtn=document.querySelector(`.${randColor}`);
 gameseq.push(randColor);
  console.log(randIdx);
  console.log(randColor);
  console.log(randBtn);
  
     btnFlash(randBtn);

}
 function btnPress(){
   let btn=this; 
   btnFlash(btn);


    let userColor = btn.getAttribute("id");
    userseq.push(userColor);
    console.log(userseq);
 }
 let allBtns=document.querySelectorAll(".btn");
 for(btn of allBtns){
    btn.addEventListener("click",btnPress)
 }