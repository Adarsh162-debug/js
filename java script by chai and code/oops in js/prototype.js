function multipleBY5(num){
    return num*5
}
multipleBY5.power=2

console.log(multipleBY5(5));
console.log(multipleBY5.prototype);
 function createuser(username,score){
    this.username=username
    this.score=score
 }
 createuser.prototype.increment=function(){
    score++
 }
 createuser.prototype.printME=function(){
    console.log(`score is ${this.score}`);
    
 }
const chai= new createuser("chai ",23)
const tea=createuser("tea",250)
chai.printME()
