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


