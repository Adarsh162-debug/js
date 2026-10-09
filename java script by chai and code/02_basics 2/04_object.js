/*singleton object
const tinderuser=new Object()
console.log(tinderuser);*/



/*non singleton object initlize
const tinderuser2={};

console.log(tinderuser2);
*/
const tinderuser={};
tinderuser.id="123abs"
tinderuser.name="adarsh"
tinderuser.isloggedin=false


//console.log(tinderuser);
 const regularuser={
    email:"sklwewej",
    //object initlize
    fullname:{
        // not need userfullname
        userfullname:{
            firstname:"hitesh",
           // lastname:"raja"

        }
    
        
    }
 }

//console.log(regularuser.fullname);
//console.log(regularuser.fullname.userfullname);
//console.log(regularuser.fullname?.userfullname);




 const obj1={1: "a",2: "b"}
 const obj2={3: "a",4: "b"}



 /* it created my array in a single array
 //const obj3={obj1,obj2}*/

 /*2nd way
 to remove  more array in the output
 const obj3=Object.assign(obj1,obj2);*/


 /*for exact answer
 const obj3=Object.assign({},obj1,obj2)*/


 /*advance way for addition
const obj3={...obj1,...obj2}*/

//console.log(obj3);

const user=[
   {
  id:1,
  email:"h@gmail.com",
   },{



   },{



   }




]
user[1].email
console.log (tinderuser);

console.log(Object.keys(tinderuser));
console.log(Object.values(tinderuser));
console.log(Object.entries(tinderuser)) ;
console.log(tinderuser.hasOwnProperty("islogged"));








 
 
 
 


















