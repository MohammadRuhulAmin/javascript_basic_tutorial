const promise_1 = new Promise((resolve,reject)=>{
    let myPromise = true;
    if(myPromise){
        resolve('Promise is kept properly');
    }else{
        reject('The promise was not kept properly');
    }
});

const promise_2 = new Promise((resolve,reject)=>{
   const done = true;
   if(done)resolve('The work is done');
   else reject('The work is not done');
})

const promise_3 = new Promise((resolve,reject)=>{
    const myWork = false;
    if(myWork)resolve('The work is done for promise _3')
    else reject('The work is not done for promise_3')
})

promise_1
    .then((resolve)=>{
        console.log(resolve)
    })
    .catch((reject)=>{
        console.log(reject)
    })


promise_2
    .then((resolve)=>{
        console.log(resolve);
    })
    .catch((error)=>{
        console.log(error)
    })

promise_3 
    .then((resolve)=>{
        console.log(resolve);
    })
    .catch((error)=>{
        console.log(error)
    })


// Promise.all([promise_1,promise_2,promise_3])
//        .then(([resolve_1,resolve_2,resolve_3])=>{
//             console.log(resolve_1);
//             console.log(resolve_2);
//             console.log(resolve_3);
//         })
//         .catch(([error_1,error_2,error_3])=>{
//             console.log(error_1);
//             console.log(error_2);
//             console.log(error_3);
//         })