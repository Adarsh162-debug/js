 function fun(){

     const username="ram"
     function two(){
        const website="youtube"
        console.log(username);
        
     }
     /*not work outside the local variable
     console.log(website) */
     two();
        
     }
     fun()
     if(true){
        const username="adarsh"
            if(username==="adarsh"){
                const website1="youtube1"
            console.log(username+website1);
            
            }
        }
       /*not accessable
        console.log(website);
        */
     
////////////////////////interesting++++++++++++++++
  
/*
 agar direct function create hoga to  function call aur print function ke naam ke uppar bhi kar sakte hai
console.log(Addno(5));

function Addno(num){
    return num+1
}*/

/*
 but agar variable banake karege to code galat ho jaega 
 isme function ke naam ke niche hi hoga
console.log(addno(5));

 const addno=function Addno(num){
    return num+1
 }*/ 









