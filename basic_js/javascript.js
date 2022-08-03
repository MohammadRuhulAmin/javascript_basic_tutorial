document.getElementById("myText").innerHTML = "Ruhul Amin";
document.getElementById("sum").innerHTML = 16+ "Ruhul Amin"+7;
let myObject = {
    name : "Ruhul amin",
    email : "r@gmail.com"
}
function myInfo(){
    console.log("this is ruhul amin");
    document.getElementById("mDetails").innerHTML = "Ruhul Amin"
}
function arrayInfo(){
    let array = ["ruhul","amin","sakib","hasan"]
    console.log( "Is array :=> "+ array instanceof Array)
    document.getElementById("arrId").innerHTML = array
    console.log(typeof array)
}

fruits = ["apple","banana","orange","pineapple"]

function printFruitItem(value,index,array){
     console.log(value)
}
fruits.forEach(printFruitItem)


myObject = undefined
console.log("My Object : " + myObject)
let  numbers = [1,2,3,4,5];
function multiple(value,index,array){
    return value*2;
}
var store = numbers.map(multiple)
console.log(store)

const myAges = [12,23,44,112]

function calc(value,index,array){
    return value*2;
}

const updateAge = myAges.map(calc);
console.log(updateAge);



const friendsAge = [12,44,23,111,1]
function checkFriendAge(value,index,array){
    if(value%2 == 0) return value ;
}

const freshAge = friendsAge.filter(checkFriendAge)
console.log(freshAge)


function myUpdate(total,value,index,array){
    return total + (value*value) ;
}


const summation = friendsAge.reduce(myUpdate)
console.log(summation) 

let myVal = 1;
try{
   if(myVal == 1) throw {
        message : "THis is error",
        name : "Ruhul Throw"
   }
}
catch(err){
    document.getElementById("successMessage").innerHTML = err.message
    console.log(err)
}
finally{
    console.log("My Objection is done !");
}

class MyClass{
    constructor(name,email){
        this.name = name;
        this.email = email;
    }
}

var myName = new MyClass("ruhul amin","ruhul@gmail.com");

console.log(myName);

(function aboutSelfFunction(){
    console.log(this)
})()

/**
 * Difference between invocation & call 
 *  
 * invocation works with object 
 * call doesnot work with object 
 * 
 */

function plus(a,b){
    return a+b
}
plus(4,4) // this is function call 

const myObj = {
    a:function(a,b){
        return a+b ;
    }
}

const ans = myObj.a(12,2); // this is invocation 
console.log(ans)







// eval("function(){console.log('ruhul amin is calling from eval')}")

const person = {
    firstName :"Ruhul",
    lastName : "Amin",
    age :null ,
    get lang(){
        return this.firstName + this.lastName; // this is called computed property of an object !
    },
    set myAge(age){
        this.age = age
    }    
};

console.log(person.lang); // dont have to put () after lang 

person.myAge = 23;
console.log(person.age)


// object constructor 
// this is a constructor function ! 
function Aperson(name,email,contact){
    this.name = name;
    this.email = email;
    this.contact = contact;
    this.fullName = this.name + " " + this.email;
}

const ruhul = new Aperson("ruhul amin","r@gmail.com","01322-352864");
console.log(ruhul);

console.log("what the hack !!");





