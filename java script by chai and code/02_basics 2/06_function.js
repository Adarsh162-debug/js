   function saymyName(){
     console.log("a");
  console.log("d");
 console.log("a");
  console.log("r");
   console.log("s");
    console.log("h");
   }


   /*this do not show output because it show only the reference


   //saymyName()*/
//code 1
   function addtwonumber(number1,number2){
    console.log(number1+number2);
     }
  /*agar kuch argu nahi pass hoga to output nan aata hai
     //addtwonumber();*/

     /*addtwonumber(3,4)
     output=7*/

     /*addtwonumber(3,"a")
     boyh work like string*/



     ///////////////////////////////////////
     
//function addtwonumber1(number1,number2){
     /*let result=(number1+number2);
     return result;*/
     /*return number1+number2;
     }
     const result=addtwonumber1(3,5)
     console.log(result);
    */

     //////////////////////////////////////
     //another method to  create and call function
     /*
     function loginusermessage ( username){      return`${username} just logged in`
     }
     console.log(loginusermessage("hitesh"))
*/
 /*jab kuch nahi diaa jaega to output undedined  hoga
  console.log(loginusermessage())*/

//////////////////////////////////////
function loginusermessage ( username){ 

  /* way 1
    if(username==undefined){
        console.log("plz enter your number")
        return*/

        //way 2 to use if else condition
        if(!username){
            console.log("plz enter your no");
  return   
        }
    }
     
     console.log(loginusermessage())
  

     


























