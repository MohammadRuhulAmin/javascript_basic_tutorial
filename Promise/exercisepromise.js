
const taskOne = ()=>{
    return new  Promise((resolve,reject)=>{
        setTimeout(()=>{
            let taskDone = false;
            if(taskDone)resolve('Task One is Done')
            else reject('Task One is Not Done');
        },3000)
    })
}


const taskTwo = ()=>{
    return new Promise ((resolve,reject)=>{
        setTimeout(()=>{
            let taskDone = false;
            if(taskDone)resolve('Task Two is Done')
            else reject('Task Two is Not Done')
        },4000)
    })
}


const taskThree = ()=>{
    return new Promise ((resolve,reject)=>{
        setTimeout(()=>{
            let taskDone = false;
            if(taskDone)resolve('Task Three is Done')
            else reject('Task Three is Not Done')
        },4000)
    })
}



taskOne()
    .then((res)=>{console.log(res)})
    .catch((error)=>{console.log(error)})
    .then(taskTwo)
    .then((res)=>console.log(res))
    .catch((error)=>console.log(error))
    .then(taskThree)
    .then((res)=>console.log(res))
    .catch((err)=>console.log(err))

