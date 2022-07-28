

/**
 * 
 * Self invoking function call 
 * (function myFunction(){
 *      console.log("My Self-invoking function is being called")
 * })()
 * 
 */




/**
 * 
 * IIFE => Immidiately invocation  function expression 
 * this is also annonimus self invoking function expression
 * 
 */
(function myFunction(){
    console.log("Self invoking function is being called ! ");
})()

/**
 * js functions are also object 
 * 
 */

function myObjectFunction(){
    return ("This is a way to express")
}

console.log("The element is : "+typeof myObjectFunction);

/**
 * 
 * the difference between arrow function & normal function 
 * In arrow function there is no use of this key word 
 *  
 */