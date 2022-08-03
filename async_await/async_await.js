const taskOne = ()=>{
    return new Promise((resolve,reject)=>{
        const taskDone = true;
        setTimeout(()=>{
            if(taskDone)resolve('Task One is Done')
            else reject('Task one is not Done')
        },4000)
    })
}

const taskTwo = ()=>{
    return new Promise((resolve,reject)=>{
        const taskDone = false;
        setTimeout(()=>{
            if(taskDone)resolve('Task Two is Done')
            else reject('Task Two is not Done')
        },2000)
    })
}



async function allTaskController(){
    try{
        const task_1 = await taskOne();
        console.log(task_1);
        const task_2 = await taskTwo();
        console.log(task_2);
    }
    catch(error){
        console.log(error)
    }
}

allTaskController();