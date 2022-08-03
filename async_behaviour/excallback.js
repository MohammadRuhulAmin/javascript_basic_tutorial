

const taskOne = (userName,callback)=>{
    setTimeout(()=>{
        console.log(`Task One is Completed for ${userName}`);
        callback(taskTwo)
    },1000);
}

const taskTwo = (userName,callback)=>{
    setTimeout(()=>{
        console.log(`Task Two is Completed for ${userName}`);
        callback(taskThree)
    },000)
}

const taskThree = (userName)=>{
    setTimeout(()=>{
        console.log(`Task Three is Completed for ${userName}`);
    },000)
}

/**
 * call back with higher order function !! 
 * 
 */

taskOne('Ruhul',()=>{
    taskTwo('Ruhul',()=>{
        taskThree('Ruhul');
    })
})

