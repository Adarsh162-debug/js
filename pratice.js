
 let p1=document.createElement("p");
 p1.innerText="hey i am red";
  document.querySelector("body").append(p1);
  p1.classList.add('red')

let h3=document.createElement("h");
 h3.innerText="hey i am blue";
  document.querySelector("body").append(h3);
  h3.classList.add('blue');


  let div=document.createElement("div");
  let h1=document.createElement("h1");
  let para2=document.createElement("p");
  h1.innerText="i am inner div";
  para2.innerText="me too";
  div.append(h1);
   div.append(para2);
  div.classList.add("box");
document.querySelector("body").append(div);

//asignment p9;
let bt=document.createElement("button");
let input=document.createElement("input");
bt.innerText="click me";
document.querySelector("body").append(bt);
document.querySelector("body").append(input);

btn.setAttribute("id","btn");
input.setAttribute("placeholder","username");
 

let btn1=document.querySelector("#btn");
btn1.classList.add("btnstyle");
