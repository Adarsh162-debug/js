//pratice 1
let nums=14;
if(nums%10==0){
    console.log("good");
}else{
    console.log("bad number")
}

//pratice 2
/*
let name=prompt("your name");
let age=prompt("your age");
console.log( name + age);
*/

let day=2;
switch (day) {
    case 1:
        console.log("janauary","february","march");
        break;
         case 2:
        console.log("april","may","june");
        break;
         case 3:
        console.log("july","august","september");
        break;
     case 4:
        console.log("october","november","december");
        break;


    default: console.log("out off stock");
        break;
}

//pratice 4
let s="golden String";
if((s[0]=='a'||s[0]=='A')&&(s.length>5)){
    console.log("golden string");
}else{
    console.log("golden not");
    
}

//pratice 5

let n1=123;
let n2=234;
let n3=987;
if (n1<n2<n3) {
    console.log(` n3 is greater: ${n3}`);   
}

//pratice 6
let n=32;
let m=47852;
if([n.length]-1==2 && [m.length]-1==2){
console.log("same last digit");
}else{
    console.log("not same");
    
}