 /*const user={
    username:"adarsh",
    price:999,
    welcomemessage:function(){
        console.log(`${this.username},welcome to website and price is(${this.price})
        
            `);
            console.log(this);
        
    }
 }
 user.welcomemessage()

 user .username="sam"
 user.price=1234
 user.welcomemessage();


 console.log(this);*/

/*this keyword is only aplicable for objects not functions
 function chai(){
    let user="hiyesdh"
    console.log(this.user);
 }
  chai()
  */

/*
same output undefined

  let raj=function chai(){
    let user="hiyesdh"
    console.log(this.user);
 }
  raj()
*/
////////////////////////////// arrow function//////
/*way 1
const chai=()=>{
    let username="hitesh"
    console.log(this )
}
 chai()*/

 /////////////////arrow initilize/////////////
 //way1
 const addtwo=(num1,num2)=>{
    return num1+num2
 }
 console.log(addtwo(3,5))

/*way 2 by arrow
 const addtwo=(num1,num2)=>num1+num2
 console.log(addtwo(3,4))
 */


 //way3
 const addno=(num1,num2)=>(num1+num2)
 console.log(addno(3,4))
