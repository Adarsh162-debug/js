  
  //object literals
  let student={
    name:"shardha",age:"12",marks:94.4};
console.log(student);

const item={
    price:100.99,
    discount:50,
    colors:["red","pink"]
};

const post={
    username:"@adarsh",
    content:"this is my  #firstpost",
    reports:5
};

//access the value
console.log(post["username"]);
console.log(post.content);

 //true works as a string
let obj={
    1:'a',2:'b',
    true:"c",null:"d"
}
console.log(obj["true"]);
console.log(obj["1"]);
console.log(obj[1]);

//problem////////////////////////////////////////////
//console.log(obj.1);
/////////////////////////////
 //add/update
const stu={
    name:"shardha",
    age:12,
    marks:94.4,
    city:"delhi"
};
console.log(stu);
stu["name"]="raja";
console.log(stu);
stu.geder="male";

stu.age="twelve";
console.log(stu);

//delete
delete stu.age;
console.log(stu);

 const classes ={
    aman:{ grade:'a',
        city:"delhi"
    },
    adarsh:{
        grade:"a+",
        city:"pune"
    }

 };
 console.log(classes);
 console.log(classes.adarsh);
 

 //array of object
 let classinfo=[ { name: "adarsh",
    age:33,grade:'A'
 },{
name:"ramu",
    age:43,grade:"e"}
,{
name:"baba" ,
    age:65,grade:"d"}];
 
    console.log(classinfo);
     console.log(classinfo[1]);
     classinfo[1].grade="ad";
    console.log(classinfo[1]);
    
 console.log(Math.abs(12));
 console.log(Math.abs(-12));


 console.log(Math.pow(2,9));

 console.log(Math.floor(23.999));
 console.log(Math.ceil(23.8));
 console.log(Math.ceil(-5.5));
console.log(Math.random());

  let num=Math.random();
  num=num*10;
   console.log(num);
      num=Math.floor(num);
  num=num+1;
 console.log(num);
 
 

console.log(Math.floor(Math.random()*100)+1);
console.log(Math.floor(Math.random()*5)+20);


  const max=prompt("enter the max number");
   const random=Math.floor(Math.random()*max)+1;

   let guess=prompt("guess the number");
   while(true){
    if(guess=="quit"){
        console.log("user quit");
        break;   
    }
    if(guess== random){
        console.log("your are right ! congrate!!");   
        break;
    }else if(guess<random){
        guess=prompt("your guess was to small,plz try again");
    }else{
       guess= prompt("your guess was too large.please try again");
    }

   }

   
 
 



