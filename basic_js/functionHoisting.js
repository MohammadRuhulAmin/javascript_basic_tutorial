

/**
 * 
 * If you decleare a function in this way the function hoisting will be validated ! 
 * 
 *  myFunction(); 
 * 
 * function myFunction(){
 *  console.log("ok done!")
 * }
 * 
 * 
 */
 myFunction(); 
 
    function myFunction(){
    console.log("ok done!")
    }
    


/**
 * 
 * but in function expression / for annonimus function it is not possible to make function hoisting !! 
 * 
 * 
 */


console.log(a()); // function hoisting is not possible in annonimus function call !
let a = function(){
    return "trying function hoisting";
}
