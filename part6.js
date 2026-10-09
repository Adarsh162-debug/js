  //uses of function
  function hello() {
    console.log("hello");
  }
  hello();
   hello();
    hello();
     hello();

     function printname() {
        console.log("apna college");
         console.log("apna college");
     }

     printname();
     function print1to5() {
        for(let i=0;i<5;i++){
            console.log(i);
                    }
        
     }
     print1to5();


     function age() {
        let age=12;
        if(age>12){
            console.log("your adult");
        }
        else{
            console.log("your not adult");   
        }
        
     }
     age();

     function poem() {
        console.log("twinkle teinkle little star");
        console.log("how are you wonder"); 
     }
     poem();

     function dice() {
        let d= Math.floor(Math.random()*6)+1;
        console.log(d);
        
     }
     dice();
      dice();
       dice();
        dice();
         dice();


         //function with arguments
         function print1to5( num) {
       
            console.log(num);
                    }
     print1to5(10);
      print1to5(1);


      function printinfo(name,age){
        console.log(name,age);
      }
      printinfo("adarsh",45);
      printinfo("adarsh")
      


      function printsum(a,b) {
        console.log(a+b);
      }
      printsum(3,8)


      //pratice q3
      function average( a,b,c) {
        console.log((a+b+c)/2);
      }
      average(13,56,42);


      function fun(n){
        for(let i=1;i<=10;i++){
            let m=n*i;
            console.log(m);
            
      }}
    fun(67);



function sum(a,b) {
     console.log("hello");
 return a+b ;
 //this is not working because console is after the return
    console.log("hello");

}
console.log(sum(2,3));
//call single in two times
console.log(sum(sum(3,5),8));


function isadult(age) {
    if(age>=18){
        return"adult";
    }else{
        return "not adult";
    }  
}
console.log(isadult(13));


//pratice qs5

function sum(n) {
    let sum=0;
    for (let i = 0; i <n; i++){
     sum=sum+i;
    }
 return sum ;
}
console.log(sum(23));


 //pratice qs6
 let str=["hii","hello","bye","!"];
 function concate(str){
    let result=" ";
    for(let i=0;i<str.length;i++){
        result +=str[i];
    }
    return result;
 }
  console.log(
   concate(str));

   let sum2=54;//global scope
   function calsum(a,b) {
    let sum4=a+b;//function scope
    console.log(sum4);
   }
  console.log(calsum(1,2));
    console.log(sum2);



    //////block scope ////
   /* { let a=12;}
    console.log(a);
    //because a is outof block
    */

/*    for(let i=1;i<5;i++){
      console.log(i);
    }*/
   // console.log(i);not working same reason
   /*let ages=25;
   if(ages>=18){
    let str="adult";
*/
   
   //console.log(str);because str not working on out of block
  /* lexical scope
   function outfun(){
    let x=4;
    let y=5;
    function innerfunc(){
      console.log(x);
      console.log(y);   
    }
   
   outfun();
  }*/
 /*
// pratice qs7
 let greet="hello";
 function changeGreet(){
  let greet="namaste";
  console.log(greet);
  function innergreet()
  {
    console.log(greet);    
  }
  innergreet();
 }
 console.log(greet);
 changeGreet();


 function multiplegreet(func,count){
  for(let i=1;i<=count;i++){
    func();
  }
 }
 let greets=function(){
  console.log("hello");
 }
 multiplegreet(function(){console.log("namaste")},1000);
 multiplegreet(greet,1000);


*/
/*
 //higher order functions
 function oodorEvenfactory(request){
  if(request=="odd"){
    let odd=function(n){
      console.log(!(n%2==0));
    }
    return odd;
  }else if(request=="even"){
 let even=function(n){
      console.log((n%2==0));
    }
    return even;
  }else{
    console.log("wrong request");
  }
 }
 let request="odd";
 let func=oddorevenfactory(request);


*/
 //methods


 const calculator={
   num:55,
   add:function(a,b){
    return a+b;
   },
   sub:function(a,b){
    return a-b;
   },
   mul:function(a,b){
    return a*b;
   }
 };
 console.log(
   calculator
);
console.log(calculator.num);
console.log(
  calculator.add
);
console.log(calculator.add(33,45));


//method type 2

const calculator1={
   num:55,
   add(a,b){
    return a+b;
   },
   sub(a,b){
    return a-b;
   },
   mul(a,b){
    return a*b;
   }
 };
 console.log(
   calculator1
);
console.log(calculator1.num);
console.log(
  calculator1.add
);
console.log(calculator1.add(33,45));
console.log(calculator.mul(4,7));



//////////////////////////
//asssignment question///////
let arr=[1,2,3,4,56,7];
let num=8;
function fun(arr,num){
  for(let i=0;i<=arr.length;i++){
    if(arr[i]>num)
   console.log(arr[i]);   
  } 
}
 fun(arr,num);


 ///q2

 let str1="abcdabcdefggh";
 function uniquestr(str){

  let ans=" ";
for(let i=0;i<str.length;i++){
  let currchar=str[i];
  if(ans.indexOf(currchar)==-1){
    ans+=currchar;
  }
}
return ans;


}
uniquestr(str);


