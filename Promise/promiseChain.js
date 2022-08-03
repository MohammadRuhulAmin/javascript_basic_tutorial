
const taskOne = ()=>{
    return new Promise((resolve,reject)=>{
        const taskDone = false;
        if(taskDone)resolve('Task One is Done');
        else reject('Task One is not Done');
    })
}

const taskTwo = ()=>{
    return new Promise((resolve,reject)=>{
        const taskDone = false;
        if(taskDone)resolve('Task Two is Done');
        else reject('Task Tow is not Done');
    })
}

const taskThree = ()=>{
    return new Promise((resolve,reject)=>{
        const taskDone = false;
        if(taskDone)resolve('Task Three is Done');
        else reject('Task Three is not Done');
    })
}


taskOne()
    .then((res)=>console.log(res))
    .catch((res)=>console.log(res))
    .then(taskThree)
    .then((res)=>console.log(res))
    .catch((res)=>console.log(res))
    .then(taskTwo)
    .then((res)=>console.log(res))
    .catch((res)=>console.log(res))