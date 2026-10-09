 
 /*
 //call stack
 function hello(){
    console.log("inside hello fnx");
    console.log("hello"); 
 }
 function demo(){
    console.log("calling hello fnx");
    hello();
 }
 console.log("calling demo fnx"); 
  demo();
  console.log("done, bye!");
  
*//*
  //visualize call stack
  function one(){
    return 1;
  }
   function two(){
    return one()+one();
  }
  function three(){
    let ans=one()+two();
    console.log(ans);
    
  }
  three();
  */
 let a=25;
 console.log(a);
 let b=10;
 console.log(b);
 console.log(a+b);
 
 
 