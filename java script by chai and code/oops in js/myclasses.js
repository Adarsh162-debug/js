/* class user{
    constructor(username,email,password){
        this.username=username
        this.email=email
        this.password=password
    
    }
    encryptionpass(){
        return `${this.password}abc`
    }
    changeusername(){
        return this.username
    }

 }
 const chai=new user("adarsh","ashs@gmail.com","124");
 console.log(chai.encryptionpass());
 console.log(chai.changeusername());

 // behind the scene
 function user1(username,email,password){
     this.username=username
        this.email=email
        this.password=password
 }
 user1.prototype.encryptionpass=function(){  return `${this.password}abc`

 }
 const chai1=new user1("adarsh","ashs@gmail.com","124578");
 console.log(chai.encryptionpass());
 */

 class user{
    constructor(username){
        this.username=username
    }
      logMe(){
        console.log(`${this.username}`);       
    }
 }
 class teacher extends user{
    constructor(username,email,password){
        this.email=email
        this.password=password
       super(username)
    }
    addcourse(){
        console.log(`a new course was addede by ${this.username}`);
        
    }

 }