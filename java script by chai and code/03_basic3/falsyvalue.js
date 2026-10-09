//const useremail="abhdaschdb";
//const useremail=[];
const useremail="";
if(useremail){
   console.log("got user email");    
}
else{
    console.log("donot have any email")
}

/*
//////////++ some value are always false+++////////
 (false,0,-0,BigInt," ",null,undefined,NaN)


 //////////++ some value are always true+++///////
 "0",'false'," ",[],{},function(){}*/

 /*array checking
     const useremail1=[];
     if(useremail1==0){
        console.log("array is empty");   
     }*/
       


//object 
const emptyobj={};
if(Object.keys(emptyobj).length==0){
    console.log("object is empty");
}

//nullish coalescing operator (??):null undefined
/*
let val1:
val1= 5 ?? 10;
*/






//terniary operator


//condition ? true : false

const iceteaprice=100
iceteaprice>=80? console.log("less than 80") : console.log("more than 80")



