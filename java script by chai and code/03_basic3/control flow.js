//if
/*if(true){

}

if(false){
     
}*/
const temperature=41;
if(temperature<=50){
    console.log("less than 50");   
}else{
    console.log(" not less than 50");   
}

/*const score=200
if(score>100){
    //var is global variable
    //it work both inner and outer
    let power="fly"
    console.log(`user power:${power}`);
    

}
console.log(`user power:${power}`);*/

/*
if else if condition
const balance=1000;
if(balance<250){
    console.log("less than 250");   
}else if(balance<500){
    console.log("less than 500");
    
}
else if(balance<750){
    console.log("less than 750");
    
}else {
    console.log("less than 1000");
    
}*/

const userloggin=true;
const debitcard=true;
if(userloggin && debitcard &&2==2){
    console.log("allow to buy course"); 
}
if(userloggin|| email){
    console.log("your elligible");
    

}