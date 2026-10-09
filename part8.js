
//foreach
let arr=[1,2,3,4,5];
/*let print=function(el){
    console.log(el)};
    arr.forEach(print);
*/
//approach 2
arr.forEach(function(el){
    console.log(el);
    
});


let arr3=[{name:"aman",
    marks:95,
},
{
    name:"shardha",
    marks:94.4,
},
{
    name:"rajat",
    marks:92,
},
];
let sgpa=arr3.map((le)=>{
    return le.marks/10;
});
console.log(sgpa);

 
/*
arr3.forEach((student1)=>{
    console.log(student1.marks);
   
});
*/
/*
//map

let num=[1,2,3,4];
let double=num.map((number) =>{
    return number*2;});
    console.log(double);

   */
  
  
    //filter 
    let nu=[2,3,1,4,5,6,2,7,8,9];
    let even=nu.filter((eve)=>
        //(even%2==0));
    {return eve<5});
    console.log(even);
    
/*
    //every methods

    [2,4,6].every((ele)=>(ele%2==0))
    //some method
    [1,2,3,4].some((ele)=>ele%2==0);
*/

    //reduce method
    let num=[1,2,3,4];
     let finalvalue=num.reduce((res,el)=>(res+el));
     console.log(finalvalue);


     //use reduce for maximum value
      let n=[2,33,44,5,66,78,99];
      let max=n.reduce((acc,cu)=>{
        if(cu>acc){
            return cu;
        }else{
            return acc;
        }
      });
      console.log(max);


      //pratice question
      let nuu=[10,20,305,40,50];
      let div=nuu.every((acc)=>(acc%10==0));
      console.log(div);
    // pratice q2
       let nu2=[10,20,305,40,50];
      let div2=nu2.reduce((min,el)=>{
        if(min<el){
            return min;
        }else{
            return el;
        }
      });
      console.log(div2);


      //default parameters
        
      function sum(a,b=9) {
        return a+b;
        
      }

      //dono case me run hoga agar ek vlaue ho to bhi aur 2 ho to bhi
      console.log(sum(4));
      
   console.log(
    sum(9,16));

console.log(..."apna college");
 
let maxi=[1,2,3,4,5,6,7,8,999,88,77,666,5,44,33,22,11,12,23,45,67,89];

console.log(
 Math.max(...maxi));


//spread with array literals
let are=[1,2,3,4,5,6,7];
let newarr=[...are];
console.log(newarr);
newarr.push(9);
console.log(newarr);


let char=[..."hello"];
console.log(char);


 let eve=[2,4,6,8,10];
 let od=[1,3,5,7,9];
 let news=[...od,...even];
 console.log(news);


 //spread with object literals

 const data={
    email:"adarshbaba@gmail.com",
    password:"abcd",
 };
  const newdata={...data,id:123,country:"india",
  }
  console.log(newdata);

  function sum(...args) {
    for(let i=0;i<args.length;i++){
        console.log("you give us ",args[i]);   
    }
  }
console.log(sum(2,7,9,4));



function min(a,b,c,d) {
    console.log(arguments);
    console.log(arguments.length);

    
    
} min(1,2,34,5)

//arguments.push(9);


//rest
function sum(...args){
    return args.reduce((sum,el)=>sum+el);
}
console.log(sum(1,2,34,5));



  function min(...args){
    return args.reduce((sum,el)=>{
        if(sum>el){
            return el;
        }else{
            return sum;
        }
    });
}
console.log(min(1,2,34,5));

 function min(msg,...args){
    console.log(msg);
    return args.reduce((sum,el)=>{
        if(sum>el){
            return el;
        }else{
            return sum;
        }
    });
}
console.log(min(1,2,34,5));


 //destructing
 let names=["tony","bruce","peter","steve","aed","yegd"];
// let winner=names[0];
 //let runner=names[1];
 //console.log(runner);

//             "way1"
 //let [winner,runerup,secondrunnerup]=names;
 //console.log(winner,runerup);
 

 //way2
 let [winner,runerup,...others]=names;
 console.log(winner,runerup,others[3]);
 



 //destructing with object

 const stu={
    name:"karan",
    age:14,
    class:9,
    username:"karan@123",
    password:"abcd",
 };

 /*
 let {username,password}=stu;
 console.log(username,);
 */
let {
    username:user,password:secret,city="delhi"}=stu;



    //assignment question
let num1=[1,2,3,4,5];
let square=num1.map((el)=>
    {return el*el});
console.log(square);
let sum1=num1.reduce((acc,el)=>
acc+el);
console.log(sum1);

let avg=sum1/num1.length;
console.log(avg);


//q2
let num2=[1,2,3,4,5];
let plus=num1.map((el)=>
    {return el+5});
console.log(plus);

let string=["adarsh","satyam","raju","raja","ashu"];
let upper=string.map((el)=>el.toUpperCase());
console.log(upper);



// q5
let evens={
    name:"adarsh",
    age:13,
}
let odds={
    roll:14,
    place:"bhopal",
}
let merge={...evens,...odds};
console.log(merge);



  