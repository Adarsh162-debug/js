//Object literals

const mysym=Symbol("mykey1")
const jsuser={
    name:"hitesh",
    "full name":"adarsh singh",
    [mysym]:"key1",
    age:12,
    location:"bhopal",
    email:"adarsh@google.com",
    isLoggedin:false,

}
console.log(jsuser.email);
/*not working because email is string in type not an array
console.log(jsuser[email]);*/
console.log(jsuser["email"])


//agar data initilize string me hota hai to  access bhi hum string me h karege (array se nahi hoga); 
console.log(jsuser["full name"]);



//not accesable  because it  is initilize in string;
//console.log(jsuser[full name])

console.log(jsuser[mysym])


//one line change the data
jsuser.email="adarshogi14@gmail.com"
console.log(jsuser.email)


/*freeze condition
Object.freeze(jsuser)
jsuser.email="ramaa@gmaila.com"
console.log(jsuser)*/
jsuser.greeting=function(){
    console.log("hello js user");
}
console.log(jsuser.greeting)
console.log(jsuser.greeting())

jsuser.greetingtwo=function(){
    console.log(`hello js user ,${this.name}`);
 } 
 
 console.log(jsuser.greetingtwo());
    




