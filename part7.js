 const student={
    name:"adarsh",
    age:23,
    eng:95,
    math:93,
    phy:97,
    getavg(){
        let avg=(this.eng+this.math+this.phy)/3;
        console.log(`${this.name} got avg marks=${ avg}`);
        console.log(`${this.name} is age is=${this.age}`); 
    }
}
student.getavg();
console.log(this);

//try and catch
console.log("hello");
console.log("hello");

try{
    console.log(a);
} catch(execption ){
    console.log("caught an error..  a is not defined");
    
}
console.log("hello2");
console.log("hello2");
console.log("hello2");

///arrow function

const sum2=(a,b)=>{
    console.log(a+b);  
};
sum2(30,7)

const mul=(a,b)=>{
    console.log(a*b);
    
}
mul(9,8)
/*
const cube=(n)=>{
    return n*n*n;
};
cube(5,2);*/

const mul2=(a,b)=>(a**b);
console.log(mul2(4,6));




///set timming 
console.log("hi there! ");
setTimeout(() => {console.log("apna college");
}, 4000);
console.log("welcome to");

setTimeout(() => {console.log("hello adarsh");   
}, 1000);

/*
//set interval
 setInterval(() => {console.log("hello adarsh");   
}, 3000);*/


/*
let id=setInterval(() => {console.log("adarsh");}, 4000);
console.log(id);*/


/// arrow function 
const stud={
    name:"aman",
    marks:76,
    prop:this,//global scope
    getname:function(){
        console.log(this);
        return this.name;
    },
    getmarks:()=>{
        console.log(this);//parent's scope ->window
        return this.marks;
        
    },
};



stud.getname();




//pratice q

const square=(n)=>n*n;
console.log(square(4));
 

let id=setInterval(() => {console.log("hello adarsh");   
}, 2000);
setTimeout(()=>{
    clearInterval(id);
    console.log("clear interval ram");   
},10000)




//assignment question

