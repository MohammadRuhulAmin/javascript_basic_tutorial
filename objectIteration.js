const numbers = {
    one :1,
    two:2,
    three:3,
    four:4
};

myNumbers[Symbol.iterator] = function(){
    let n = 0;
    let done = false;
    return {
        next(){
            n+=10;
            if(n == 10) done = true 
            return{
                value:n,
                done:done
            }
        }
    }
}

for(let num of myNumbers){
    console.log(num)
}

