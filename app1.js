

/*//getelemntbyclassName
let myobj=document.getElementsByClassName("oldImg");
for (let i=0; i<myobj.length;i++) {
    myobj[i].src="assets/spiderman_img.png";

    console.log(`value of image no.${i} is changed.`);
    
   // console.dir(myobj[i]);
     //console.dir(myobj[i].src);
     
}*/

//getelemet by tagname
/*
let c=document.getElementsByTagName("p");
console.log(c);
let c1=document.getElementsByTagName("p")[1];
console.log(c1);
//agar value change karna ho to
document.getElementsByTagName("p")[1].innerText="abaa";

//agar tag present na ho to

let c2=document.getElementsByTagName("papau");
console.log(c2);

*/
//query selectors
 let p=document.querySelector('p');
 console.log(p);
 let p2=document.querySelector('#myId');
 console.log(p2); 

 //query selector
 console.dir(document.querySelector("p"));

 console.dir(document.querySelector("#description"));
  console.dir(document.querySelector(".oldImg"));



 console.dir(document.querySelector("div a"));

 //for all select use queryselectorall
 console.dir(document.querySelectorAll("div a"));


 //manipulating aatributes
  let img=document.querySelector('img');
  console.log(img);
   
  //get attribute
    let get=img.getAttribute('id');
    console.log(get);
    let set=img.setAttribute('id',"spiderman");
    let g=img.getAttribute("src");
    let s=img.setAttribute("src","assets/creation_2.jpeg" );
    
    let mg=document.querySelector('img');
    console.dir(img);

   console.dir(img.style);

   let heading=document.querySelector("h1");
   console.dir(heading.style)

   heading.style.color="red";
   console.dir(heading.style.color);

heading.style.backgroundcolor="green";
   console.dir(heading.style.backgroundcolor);

//manipulating attributes

let link=document.querySelectorAll(".box a");

for (linkes of link){
  linkes.style.color="red";

}

/*by for loop
for (let i = 0; i <link.length; i++) {
 link[i].style.color="green";
}*/
 let im=document.querySelector('img');
 console.dir(img.classList);
/*
 let heading=document.querySelector('h1');
  console.dir(heading.classList.add("green"));
  */
  //for parent element
  let h4=document.querySelector('h4');
  console.dir(h4.parentElement);

  //for chid element
  let box=document.querySelector('.box');
  console.dir(box.replaceChildren);
  console.dir(box.childElementCount);
  //ul ke kitna child hai
  let ul=document.querySelector('ul');
  console.dir(ul.parentElement);
  console.dir(ul.childElementCount);
  console.dir(ul.children);

  //sibling
  
console.dir(document.querySelector( ".box ul"));
console.dir(ul.children);
//access sibling element by[];

console.dir(ul.children[0]);
console.dir(ul.children[1]);


  //acess by privous and nextsebling method
  console.dir(ul.children[2].previousElementSibling);//t his can acess line 1;
//it can access line 2;
 console.dir(ul.children[1].previousElementSibling);

 //it can show the next line of this (1)line
   console.dir(ul.children[1].nextElementSibling);

let img3=document.querySelector('img');
console.dir(img3.previousElementSibling);

console.dir(img3.nextElementSibling);
img3.previousElementSibling.style.color
="green";//color change ho gya hai
console.dir(img3.previousElementSibling.color);
console.dir(img3.previousElementSibling.style);

console.dir(document.createElement('p'));
 let newp=document.createElement('p');
  let r=newp.innertext="hii, i am a new p";
 console.dir(newp);
 console.dir(r);
 console.dir(newp);

/*
 let body=document.querySelector('body');
   co
   
   nsole.dir(body.appendChild("newp"));
*/

//append child
let btn=document.createElement('button');
console.dir(btn);
btn.innerText="click meeee";

 let f=box.appendChild(btn);
 console.dir(f);

 ///remove  element
 btn.remove();
  let newp1=document.createElement('p1');

  newp1.innerText="hii i  am new para";
  console.dir(newp1);
   let n=newp.appendChild(newp1);
   console.dir(n);

let btn2=document.createElement('buttom');
btn2.innerText="new button!!!";

   console.dir(btn2);
   let para=document.createElement('p');
    console.dir(para);
    //isert ajacent element
    console.dir(para.insertAdjacentElement('beforebegin',btn2));

// use of removechild
    let  body=document.querySelector('body');
     console.dir(body.removeChild(btn));







 



 









 


 