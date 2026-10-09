
/*//for loop
for (let i = 0; i < 10; i++) {
console.log(i);    
}
for (let i = 5; i >1; i--) {
console.log(i);    
}
 //print  all odd number 1 to 15
for (let i = 1; i <= 15;i=i+2) {
console.log(i);    
}
//backward odd number
for (let i=15; i>=1;i=i-2) {
console.log(i);    
}
//print  all even number 1 to 15
for (let i = 0; i <= 15;i=i+2) {
console.log(i);    
}

//backward odd number
for (let i=15; i>=0;i=i-2) {
console.log(i);    
}

//infinite loops



//multiplication of 5
let j=5;
for (let i = 0; i <= 10; i++) {

console.log(j*i); }


/*let n=prompt("enter your table number");
n=parseInt(n);
for (let i=n;i<=n*10;i=i+n) {
console.log(i); }



   //nested loop
for (let i = 0; i < 10; i++) {
    for(let j=0;j<10;j++){
  console.log(i);
  }
}*/

//while loop 
/*
let i=1;
while (i<10) {
  console.log(i);  

i++;
}
*/
/*
let i=1;
while (i<10) {
  console.log(i);
i++;
}

let i=0;
while (i<=10) {
  console.log(i);
i=i++;
}

const  fm="malik";
let g=prompt("enter your guess movies name");
while ((g!=fm)&&(gm="quite")) {
  g=prompt("wrong guess. plz try again");
}
if(g==fm){
  console.log("congratrs");
  
}
*//*
//break case
let i=1;
while (i<=10) {
  if(i==3){
    break;
  }
  console.log(i);
i++;
}
console.log("we used break at 3");


let fruits=["mango","apple","banana","litchi"];
fruits.push("pineapple");
//for(let i=0;i<fruits.length;i++){
//  console.log(i,fruits[i]); 
//}
for(let i=fruits.length-1;i>=0;i--){
 console.log(i,fruits[i]); 
}

let heros=[["ironman","spiderman"],["superman","wonderman"]];
for (let i = 0; i <= heros.length; i++) {
console.log(i,heros[i],heros[i].length);
for (let j = 0; j <=heros.length[i]; j++) {
console.log(`j=${j},${heros[i][j]}`); 
}  
}
//nested loop
let student=[["aman",95],["sharda",94.4]];
for(let i=0;i<=student.length;i++){
  for (let j = 0; j <=student[i].length; j++) {
    console.log(i,student[i][j]);  
  }
}*/


/*
//for of loop
let fruits=["mnago","apple","banana","litche"];
 for(fruit1 of fruits){
  console.log(fruit1);
  
 }
*/
/*

  for(char of "apnacollege"){
    console.log(char);
    
  }*/
 /*
 let c=["adarsh","mansi","manav"];
 for(na of c){
  console.log(na);
  
 }*/


 // to do
/*
 let todo=[];
 let req=prompt("plz enter your request");
 while(true){
  if(req=="quit"){
    console.log("quitting app");
    break;
  }
  if(req=="list"){
    for(task of tado){
      console.log(task);
      
    }
  }
 }
console.log(req);
*/
 let nu=[1,2,3,4,5,6,7,8];
  console.log( nu.shift[2]);


