
// this is called annonimus function or function expression
const express = function(a,b) {return a*b;}

console.log(express(12,32));

const myExpression = function(){
    return "This is function expression";
}

console.log(myExpression());