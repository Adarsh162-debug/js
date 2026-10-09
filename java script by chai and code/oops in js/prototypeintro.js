let myName="hitesh       "
//console.log(myName.length);

console.log(myName.trim().length);

//console.log(myName.truelength());

let heropower={
    thor:"hammer",
    spiderman:"sling",
    getspiderpower:function(){
        console.log(`spidy power is${this.spiderman}`);       
    }
}

Object.prototype.hitesh=function(){
    console.log(`hitesh is present in all object`);
}
heropower.hitesh()




