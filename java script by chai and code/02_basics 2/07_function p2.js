

/*function calculateprice(...num1){
    return num1
}
console.log(calculateprice(200,400,600,4000)) */


///////////////////////////////////////////////
/*function calculateprice( val1,val2,val3, ...num1){
    return num1
}
console.log(calculateprice(200,400,600,4000)) */

const user={
    username:"adarsh",
    price:199,
    name:"baba"
    
}
function handleobject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${ anyobject.price}  and name is ${anyobject.name}`);
    
}
handleobject(user)



///////////////////////////////////
//array initilize with function
const mynewarray=[200,300,400,190,209]
function returnsecondvalue(getarray){
    return getarray[2]}
// array access by this function rule

//console.log(returnsecondvalue(mynewarray));
console.log(returnsecondvalue([200,400,2000,123]))