

// use of event.stopPropagation
/*
html code

    <div>
        <ul>
            <li>one</li>
             <li>two</li>
              <li>three</li>
        </ul>
    </div>



let div=document.querySelector("div");
let ul=document.querySelector("ul");
let lis=document.querySelector("li");

div.addEventListener( "click",function(){
    console.log("div was clicked");   
})
ul.addEventListener( "click",function(event){
    event.stopPropagation();
    console.log("ul was clicked");   
});

for(li of lis){
    div.addEventListener("click",function(event){
        console.log("li was clicked");
     
    })
}*/
 let  btn=document.querySelector("button");
 let  ul=document.querySelector("ul");
 let  inp=document.querySelector("input");


 btn.addEventListener("click",function(){
    let item=document.createElement("li");
    item.innerText=inp.value


  //delete button ade karne ke liye
  let delbtn=document.createElement("button");
  delbtn.innerText="delete";
  delbtn.classList.add("delete");
  item.appendChild(delbtn);
   ul.appendChild(item);
    inp.value=" ";
 }
 );
 ul.addEventListener("click",function(event){
  if(event.target.nodeName=="BUTTON"){
    let listitem=event.target.parentElement;
 listitem.remove();
    console.log("delete");
  }
  
 });









/*// new wala button delete nahi ho pa ragha hai
 let delbtns=document.querySelectorAll(".delete");
 for(delbtne of delbtns){
    delbtne.addEventListener("click",function(){
        let par=this.parentElement;
        console.log(par);   
        par.remove();
    });*/
 