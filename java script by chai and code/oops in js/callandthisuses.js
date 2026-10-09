function setUsername(username){
    this.username=username;
}
function createUser(username,email,password){
    setUsername.call(this,username);
    this.email=email
    this.password=password
}
 let chai=new createUser("adarsh","affas@gmail.com","12334");
 console.log(chai);
 