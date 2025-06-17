const promiseone =  new Promise(function(resolve,reject){
    //do an async task
    //db calls,cryptography,network
    setTimeout(function(){
        console.log('async task complete');
        resolve()
    },1000)
})

promiseone.then(function(){
    console.log("promise consumed");
    
})

///make promise without creating a variable
new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("async task 2");
        resolve()
    },1000)
}).then(function () {
    console.log("async 2 resolved ");
    
})

//send data from resolve to then
const promisethree = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username :"damien",email:"dsadasdada"})
    },1000)
})
promisethree.then(function(user){
    console.log(user);
    
})



const promisefour = new Promise(function(resolve,reject){
    setTimeout(function () {
        let error = false
        if(!error){
            resolve({username:"damien",pass:"122"})
        }
        else{
            reject('error: somethiing went wrong ')
        }
    },1000)
})

promisefour.then((user) => {
    console.log(user);
    return user.username
    
}).then((username)=> {
     console.log(username);
     
}).catch(function(error){
    console.log(error);
    
}).finally(()=>console.log("the promise is resolved or rejected")
)


const promiseFive = new Promise(function(resolve,reject){
    setTimeout(function () {
        let error = false
        if(!error){
            resolve({username:"jas",pass:"122"})
        }
        else{
            reject('error: js went wrong ')
        }
    },1000)
})

async function consumePromisefive(){
    const response = await promiseFive
    console.log(response);
    
}
consumePromisefive()






// async function getAllUsers(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')

//         const data = await response.json()
//         console.log(data);
//     } catch (error) {
//         console.log("E: ", error);
//     }
// }

//getAllUsers()






fetch('https://api.github.com/users/hiteshchoudhary')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))

// promise.all
// yes this is also available, kuch reading aap b kro.