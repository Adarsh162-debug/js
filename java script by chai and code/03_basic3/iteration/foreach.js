 
 
 
 /*
 //for each loop have no any return value
 const lang=["js","cpp","c","ruby"]
  
 const values=lang.forEach((item)=>{
    console.log(item);
    return item
 })
 console.log(values);
 //it give output undefined
    */


 /////////////////++++++filter+++++++//////

 //filter me value return karta hai aur with full fill of condition
 const mynums=[1,2,3,4,5,6,7,8,9,10]

 //by the use of pranthesis
 /*const newnums=mynums.filter((num) => num>4)
 console.log(newnums);*/
/*
 //by the use of curli braces
 const newnums=mynums.filter((num) =>{
    return num>4})
 console.log(newnums);
*/

/*
 // access by if else condition
 const newnums=[]
 mynums.forEach((num)=>{
    if(num>4){
        newnums.push(num);
        
    }
 })
 console.log(newnums);
 */
  
 //pratice photo in phone


///////////////+++++++map++++++++////////////
const mynumber=[1,2,3,4,5,6,7,8,9,10]


/*
//const newnums=mynumber.map((num)=>num+10)


const newnums=mynumber.map((num)=>{return num+10})
console.log(newnums);*/


//for chainning loop
//multile method in single code=channing 
const newnums=mynumber.map((num)=>num*10)
.map((num)=>num+1)
.filter((num)=>num>=40)
 console.log(newnums)



   