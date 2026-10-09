 const lang=["js","cpp","c","ruby"]
/*
 //foreach loop is use in function 
 lang.forEach(function (val){
    console.log(val);
 })*/

/*
    //foreach loop in arrow    
lang.forEach( (val)=>{
    console.log(val);}
)*/




/*
//by using function in foreach
function print(item){
    console.log(item);
}
lang.forEach(print())
  */


/*
//arrrow ke andar kya kya parameter access kar sakte hai
lang.forEach((item,index,arr)=>{
    console.log(item,index,arr);
})*/


 //multiple object in asingle array
 const mycoding=[
    {
        languagename:"javascript",
        languagefile:"js"
    }
     ,{
        languagename:"c",
        languagefile:"c"
    },
     {
        languagename:"cpp",
        languagefile:"c++"
    },
     {
        languagename:"java",
        languagefile:"java"
    }

 ]
 mycoding.forEach((item)=>{
    console.log(item.languagefile);
    console.log(item.languagename);

    
 })



 