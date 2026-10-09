
//uses of trims
let str="           hello             ";
console.log(str.trim());
           
//let p=prompt("enter your password");
//console.log(p.trim());
//console.log(p);

//imutatble string
let msg="    apna     ";
let m=msg.trim();
console.log(m);
console.log(msg);
//string method on case
let name="Read";
console.log(name.toUpperCase());
console.log(name.toLowerCase());

//string with method
//use of indexof
let str1="ilove coding";
console.log(str1.indexOf("e"));
console.log(str1.indexOf("j"));


//multiple method in single line
let str2="           i am adarsh";
let ms=str2.trim().toUpperCase();
console.log(ms);


//use of slice
let str4="ilovecoding";
console.log(str4.slice(5));
console.log(str4.slice(1,5));
console.log(str4.slice(5,str4.length));
console.log(str4.slice(-6));
//pratice qs
let msg3="help";
let msg1=msg3.trim().toUpperCase();
console.log(msg1);

//uses of replace
let word="i love coding";
console.log(word.replace("love","do"));
console.log(word.replace("l","d"));
console.log(word.replace("love","apna"));

//uses of repeat
let s="mango ";
console.log(s.repeat(3));

//pratice qs
let w="apnecollege";
console.log(w.slice(4,9));
console.log(w.indexOf("ne"));
console.log(w.replace("apne","our"));
console.log(w.slice(4).replace("l","t").replace("l","t"));;


//array
let student=["adarsh","raja","harsh"];
console.log(student);
console.log(student[2]);
 let nums=[1,2,3,4];
 console.log(nums);
 console.log(typeof nums);
 
 
 let name2="sharda";
 console.log(name2[0]);

 //creating array
 let nu=[1,3,5,6,8];
 let nam=["adarsh","baba","raha"];
 let st=["adarsh",2023,14,"cs"];//mixed array
 console.log(st);

console.log(st.length-1);

 //empty array
 let e=[];
 console.log(e);
 console.log(e.length);
 //char print karne keliye
 console.log(st[0][3]);

 //change value in array
 let fr=["mango","banana","litch","apple"];
 console.log(fr);
 fr[0]="grapes";
  console.log(fr);//count like empty space
  fr[10]="papaya";
  console.log(fr);
   console.log(fr.length);
  

   //use push,pop,unshift,shift
   let car=["auto","swift","benz","barbus"];
   car.push("toyota");
   console.log(car);
    car.push("sarafi");
       console.log(car);

//pop
         car.pop("sarafi");
       console.log(car);

   //unshift(add in starting)
   car.unshift("farari");
    console.log(car);

//shift(delete on stating of array)
 car.shift();
    console.log(car);


 //pratice qs
 let mo=["janauary","july","march","august"]
 mo.shift();
 mo.shift();
 mo.unshift("june");
 mo.unshift("july"); 
 console.log(mo);
 

 //concate in array
 let pri=["red","green","yellow","blue"];
 let sec=["purple","hondar","gray"];
 console.log(pri.concat(sec));//jo phale likege wo phale aaega
 console.log(sec.concat(pri));

 //reverse in array
 console.log(pri.reverse());
  console.log(sec.reverse());


  //use of splice
  pri.splice(3);
console.log(pri);
 pri.splice(0,1);//0 th index element 1 delete
console.log(pri);
pri.push("heap");
pri.push("farari");
pri.splice(1 ,2);
console.log(pri);


pri.splice(0,0,"black","safari","creta");
console.log(pri);

 //sort an array
 let days=["monday","sunday","wednesday","tuesday"];
 console.log(days.sort());
  let squares=[25,16,4,49,36,9];
  console.log(squares.sort());
let c=['a','b','c','d'];
console.log(c.sort());
//pratice qs
let mon=["january","july","march","august"];
console.log(mon.splice(0,2,"july","june"));
console.log(mo);
 
let lan=["c","c++","javascript","phyton","java","c#"];
console.log(lan.reverse().indexOf("java"));

//array refernce
"name"=="name";
let arr=[1,2];
let arr2=[1,2];
console.log(arr===arr2);

let n1=['a','b'];
let n2=n1;
n2.push('c');
console.log(n1==n2);

//const array
 const g=9.8;
 console.log(g);
  const arr9=[1,2,3,4,5];
  arr9.push(8);
  console.log(arr9);
  //arr9=arr;



  //nested array

  let arr6=[[1,2],[3,4],[5,6]];
  console.log(arr6);
  console.log(arr6[0].length);
  console.log(arr6[0][1]);
   console.log(arr6[1][1]);

//pratice qs
   let arr1=[["x","null","0"],["null","x","null"],["0","null","x"]]
  
 
   arr1[0][1]="1";
     console.log(arr1);

     //pratice part 3
     let arr5=[7,9,0,-2];
     let n=3;
     let ans=arr5.splice(0,n);
     console.log(ans);


//q2
     let arr4=[7,9,0,-2];
     let num=3;
     let an=arr4.slice(arr4.length-n);
     console.log(an);
     //q3
     let ste="[]";
     if(ste=="[]"){
      console.log("string is blank"); 
     }
     else{
      console.log("not blank");
     }
     //q4
     let ste2="apNACoLLEGE";
     let index=3;
     if(ste2[index]==ste2[index].toLowerCase()){
      console.log("character is lowercase"); 
     }
     else{
      console.log("character is not lowercase");
     }

     //q5
     






     
   

  
  


 







 




