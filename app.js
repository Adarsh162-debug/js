/*console.log("hello world");
console.log("hello   by adarsh singh");
let a=23;
let b=12;
console.log("sum is =", a+b);*/ 
/*
let pen=123;
let pencil=145;
//console.log("the total price:",pen+pencil,"rupiyes");

//let output="the total price:  "+pen+pencil +" "+"rupiyes";
/*use of(`);
template literals
//let output=`the total price is :${pen+pencil} rupiyes`;

//console.log(output);
console.log(`the total price is : ${pen+pencil}  rupiyee.`)*/
 

/*airthmetic operators
let a=10;
let b=5;
console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(a/b);
console.log(a%b);
console.log(a**b);
console.log(a++);
console.log(++a);
console.log(b++);
console.log(b);

a=b;
console.log(a);
*/
//comparison operators

let age=18;
console.log(age>18);
console.log(age<18);
console.log(age<=18);
console.log(age>=18);
console.log(age==18);
console.log(age!=18);
console.log(typeof age);
//(===) it means value and type dono compare karege;
 

//comparsion for non-numbers
console.log('a'<'A');
console.log('p'>'P');
console.log('a'>'b');
console.log(typeof 'a');
console.log();

//conditional statements
console.log("before my if statements");
let a=14;
if(a>=18){
    console.log("you are able to elect vote");
   
}
if(a<18){
     console.log("you cannat vote");

}
console.log("after my if statements");

let name="adarsh";
if(name=="adarsh"){
    console.log(`welcome ${name}`);

}

//pratice
let color="yellow";
if(color=="red"){
  console.log("stop vechile");
} 
if(color=="green"){
     console.log ("go vechile");
}
 if(color=="yellow"){
    console.log("go");
 }
  let Age=2;
  if(Age>=18){
    console.log("you can vote");
  }else if(Age<=18){
    console.log("you cannot vote");
  }
  else if(Age<18){
    console.log("you cannot vote2");
  }

  //pratice session
  let popcorn='sui';
  if(popcorn=='xl'){
    console.log(`price is: ${250}`);
  }else if(popcorn=='l'){
    console.log(`price is: ${200}`);
  }else if(popcorn=='m'){
    console.log(`price is: ${100}`);
  }else if(popcorn=='s'){
    console.log(`price is: ${50}`);
  }
  else{
    console.log(`price is: ${0}`);
  }

   //nested loop
   let mark=5;
   if(mark>=33){
    if(mark>=80){
        console.log("grade A");
    }else{
        console.log("grade b");
    }

   }else{
    console.log("fail");
    
   }
   //logical operator
   let ages=2;
   if(ages>5||ages<50){
    console.log("you are young age");
   }else{
    console.log("you are not adult");
   }
   //pratice qs
   let nam="darsh";
   if(nam[0]=='a'&& nam.length>=3){
    console.log("good string");
   }else{
    console.log(" not good string");
   }


   //truthy value
   let string=" ";

   if(string){
    console.log("string is not empty")
   }else {
    console.log("string is empty");
    
   }
    let nums=5;
    if(nums){
        console.log("num is not equal to 0"); 
    }else{
         console.log("num is  equal to 0"); 
    }

    //switch statement
    let colors="green";
    switch(colors){
        case "red":
            console.log('stop'); 
        break;
        case "yellow":
            console .log('slow down');
            break;
            case "green":
                 console .log('go');
            break;
            default:
                console.log("broken light");
    }

    //pratice qs
    let day=5;
    switch (day) {
      case 1:
        console.log("sunday");
        break;
         case 2:
        console.log("monday");
        break;
         case 3:
        console.log("tuesday");
        break;
         case 4:
        console.log("wednesday");
        break;
         case 5:
        console.log("thursday");
        break;
         case 6:
        console.log("friday");
        break;
        
    
      default:
        console.log("saturday");
        
        break;
    }
  




     //use of alert and prompts
     //refer karne ke baad jo notification aata hai
     //alert("something wrong");
     //pri t karne ke liye
     console.log("this is a simple log");
     //error me show karne ke liye
     console.error("this is an error");
     //serve open karne ke baad ko warning show hoyta hai
     console.warn("this is an warning");
     //use of prompt
     // let f=prompt("enter your  name :");
      //console.log(f);

      //pratice on prompt
        let first=prompt("enter your  firstname :");
        let last=prompt("enter your  lastname :");
        let msg="welcome " +first + " "+last;
        alert(msg);
       


      
      