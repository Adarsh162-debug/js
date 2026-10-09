
//promise 1
const promiseOne=new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log('async task is completed');
        resolve()
     },1000)
        
    })
    promiseOne.then(function(){console.log("promise consumed");
    })

    //promise 2
 new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("async task 2");
        resolve()},
        1000)
    }).then(function(){
        console.log("async 2 resolved");
        
    })


    //promise 3
        const promiseThree=new Promise(function(resolve, reject){
            setTimeout(function(){
               resolve({username:"chai",email:"chaiaurcode.com"})
                
            },1000) })
            promiseThree.then(function(user){
                console.log(user);     
        })
    

        //promise 4
        const promisefour=new Promise(function(resolve, reject) {
            setTimeout(function(){
                let error=false
                if(!error){
                    resolve({username:"hitesh",password:"1234567"})
                }else{
                    reject('ERROR: something went wrong')
                }
                
            },1000)
            
        })
       promisefour.then(function(user){
            console.log(user);
            return user.username
        }).then((username)=>{
            console.log(username);
            
        }).catch(function(error){
            console.log(error);
            
        }).finally(()=>console.log("the promise is either resolved or rejected"));
    
///primose use by aysnc and await
         const promisefive=new Promise(function(resolve, reject) {
            setTimeout(function(){
                let error=true
                if(!error){
                    resolve({username:"hitesh",password:"1234567"})
                }else{
                    reject('ERROR: something went wrong')
                }
                
            },1000)
         })

         async function consumepromise() {
           try{ 
           const response=  await promisefive
           console.log(response);   
         }catch(error){
            console.log(error);
         } 
         }

         consumepromise()
          
        
        




    
