const promise_1 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        let done = true;
        if(done)resolve('Promise One resolved')
        else reject('Promise 1 rejected')
    },3000)   
})

const promise_2 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        let done = true;
        if(done)resolve('Promise Two Resolved');
        else reject('Promise 2 rejected')
    },1000)   
})


Promise.race([promise_1,promise_2])
        .then(([response_1,response_2])=>{
            console.log(response_1)
            console.log(response_2)
        })
        .catch((error)=>{
            console.log(error)
        })