/*let btns=document.querySelector("button");
console.dir(btns);*/

/* way1
 btn.onclick=function(){
    alert("button was clicked");
    //console.log("button was clicked");
 }*/
/*
//way2

function sayhello(){
    alert("hello");
}
btn.onclick=sayhello;
*/
/*
//onmouseenter
let btns=document.querySelectorAll("button");
for( btn of btns){
     btn.onclick = sayhello;
    btn.onmouseenter= function(){
        console.log(("you entered a button"));        
     console.dir(btn);
    }
}

function sayhello(){
    alert("hello");
 
}
*/


/*use eventlister
let btns=document.querySelectorAll("button");
for( btn of btns){
    //btn.onclick=sayhello;
    //btn.onclick=sayname;
    btn.addEventListener("click",function(){
        console.log("i am here");
    });
      btn.addEventListener("click",sayname);
      btn.addEventListener("dblclick",sayhello);


}
    function sayhello(){
        alert("hello");
    }
    function sayname(){
     alert("apna college");
    }*/

     //click on single butto to change bg color
/*
     //html code 
     <h3>genertae a random number</h3>
        <br/>
           <button > generate color</button>
           <br/>
           <div>this is your new color</div>
   let btn=document.querySelector("button");
   
    btn.addEventListener("click",function(){

     let h3=document.querySelector("h3");
        let randomcolor=getrandomcolor();
        h3.innerText=randomcolor;

        let div=document.querySelector("div");
        div.style.backgroundColor = randomcolor;

        console.log("color updated");
        
    });
 
 function getrandomcolor(){
    let red=Math.floor(Math.random()*255);
     let green=Math.floor(Math.random()*255);
      let blue=Math.floor(Math.random()*255);
      let color=`rgb (${red},${green},${blue})`;
      return color;

 }*/
/*
      //add eventlistener in multiple lines
 <p>
            this is a new paragraph
        </p>

        <div> hey iam ready</div>
      let p=document.querySelector("p");
      p.addEventListener("dblclick",heyram
      )
      function heyram(){
        console.log(" i love ram");

      }
      let div= document.querySelector("div");
      div.addEventListener("mouseenter",function(){
        console.log("mouse inside div");
        
      })*/
/*
//html code
<button>click me!!!</button>
       <h1>use of 'this' i  event listener</h1>
       <h3>let's demo it on element</h3>
       <p>this is a sample paragraph</p>

///
        let btn=document.querySelector("button");
        let p=document.querySelector("p");
        let h1=document.querySelector("h1");
        let h3=document.querySelector("h3");function changecolor(){      
            console.dir(this.innerText);
            this.style.backgroundColor="blue";}
        btn.addEventListener("click",function(){
            //console.log(this);//button ka pura information aa jaega
            console.dir(this);}
            //we can also access the button property
       function changecolor(){      
      console.dir(this.innerText);
//we can also change color by (this)
            this.style.backgroundColor="blue";


        });
    
         p.addEventListener("click",function(){
            console.dir(this.innerText);
            this.style.backgroundColor="blue";
         })
         
           h1.addEventListener("click",function(){
            console.dir(this.innerText);
            this.style.backgroundColor="blue";
         })
         
          h3.addEventListener("click",function(){
            console.dir(this.innerText);
            this.style.backgroundColor="blue";
         })
            */
           //mouse event
          /* 
         let btn= document.querySelector("button");
         btn.addEventListener("click",function(event){
            console.log(event);
            console.log(event.key);
            console.log(event.code);    
            
         });*/
     /*    //keyboard event
let inp=document.querySelector("input");
//keydown
inp.addEventListener("keydown",function(event){
       console.log( "key=",event.key);
         console.log("code=",event.code);  
    console.log("key was pressed");
});//use key up
    inp.addEventListener("keyup",function(){
    console.log("key was released");
    
});*/
/*
 //arrowup, arrowdown,arrpwleft,arrow right
let inp=document.querySelector("input");
inp.addEventListener("keydown",function(event){
         console.log("code=",event.code);  
         if(event.code=="ArrowUp"){
            console.log("character moves forward");
         }else if(event.code=="ArrowDown"){
            console.log("character moves backward");
     }else if(event.code=="ArrowLeft"){
            console.log("character moves left");
             }else if(event.code=="ArrowRight"){
            console.log("character moves right");
             }

});*/
 //pree u ,d,r,l
 /*
 html
  <button>click me!!!</button>
     <input placeholder="type something "></input>



let inp=document.querySelector("input");
inp.addEventListener("keydown",function(event){
         console.log("code=",event.code);  
         if(event.code=="keyU"){
            console.log("character moves forward");
         }else if(event.code=="keyD"){
            console.log("character moves backward");
     }else if(event.code=="keyL"){
            console.log("character moves left");
             }else if(event.code=="keyR"){
            console.log("character moves right");
             }
            });*/
   let form=document.querySelector("form");
   form.addEventListener("submit",function(event){
    event.preventDefault();
     let inp=document.querySelector("input");
     console.dir(inp);
     console.log(inp.innerText);
     
   })


































