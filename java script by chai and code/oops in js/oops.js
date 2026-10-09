// javascript and classes
//oops




/*object
-collection of properties and method
-tolowercase
*/

//why use oop


/*parts of oop
 object literal
 - constructor function
 - prototypes
 -classes
 -instances(new,this)

 ## 4 pillars
 -abstraction
 -encapsulation
 -inheritance
 -polymorphism


*/
/////////// code //////////
const user={
    username:"hitesh",
    logincount:8,
    signed:true,
}
   /* getUserdetail:function(){
       // console.log("got user details from database");
      // console.log(`username: ${this.username}`);
      console.log(this);}  
}*/
//console.log(user.username);
//console.log(user.getUserdetail());
//console.log(this);


function user2(username,logincount){
   this.username= username;
   this.logincount=logincount;

   this.greeting=function(){
    console.log(`welcome ${this.username}`); 
   }
   return this;
}

const userOne= new user2("hitesh",12)
const usertwo= new user2("hitesh",2)
console.log(userOne);
console.log(usertwo);
console.log(userOne.constructor);


const newhero=["hulk","spiderman"]
console.log(newhero);
































































