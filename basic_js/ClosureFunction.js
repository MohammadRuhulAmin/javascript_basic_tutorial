console.log("From Function Closure");
function Parent(){
    let count = 0;
    return function(){
        count+=1;
    }
}


Parent();
Parent();
console.dir(Parent());
Parent();

console.dir(Parent());