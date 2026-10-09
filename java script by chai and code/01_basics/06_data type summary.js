const id= Symbol('123');
const anotherid= Symbol('123');
 console.log(id==anotherid);
 //reason  ka char valre same nahi hai


 //BigInt ke last me (n) important hai
 const bignumber=234567896542n;
 //console.log(bignumber)


 //refernce(non primitive)

 //array,objects,functions

const hero=[" sakti kappor", "arjun kappur","dara"]
 let myobj={
    name:"hiest",
    age:45
 }

 const myfunction=function(){
    console.log("hello world");

 }
// to know the data type
console.log(typeof myfunction)
console.log( typeof bignumber)
console.log(typeof null);
console.log(typeof hero);



 
