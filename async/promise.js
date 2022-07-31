
console.log('Task 1');
const status = true; 

/**
 * function define 
 */
const promise = new Promise(function(resolve,reject){
    setTimeout(function(){
        if(status){
            resolve('Task 2')
        }
        else{
            reject('failed');
        }
    },2000)
});

/**
 * function call 
 */

promise 
    .then(function(success){
        console.log(success)
    })
    .catch(function(error){
        console.log(error)
    })

console.log('Task 3');


/**
 * 
 * jodi reject na thake ! 
 * 
 */
