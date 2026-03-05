const promise1 = new Promise((resolve,reject)=>{
    setTimeout(()=>{

        resolve({name:"Ali",age:19})
    },4000)
})

const promise2 = new Promise((resolve,reject)=>{
    setTimeout(()=>{

        resolve({name:"Sahil",age:19})
    },2000)
})

// promise1.then(()=>{
//     console.log("Promise 1 resolved");
    
// })

// promise2.then(()=>{
//     console.log("Promise 2 resolved");
    
// })
// async 
//  2 sec   4 sec 
const resolvePromises = async()=>{
       try {
             const data =  await promise1

     console.log("Promise 1 resolved", data);
      console.log(a);
    const data2 =  await promise2
   
    
     console.log("Promise 2 resolved", data2);
       } catch (error) {
          console.log(error)
       }

     
}

resolvePromises()











 






