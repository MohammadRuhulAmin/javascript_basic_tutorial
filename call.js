
const myMethodList = {

    fullName:function(){
        return this.firstName + " " + this.lastName; 
    }

};

const obj1 = {
    firstName :"Ruhul ",
    lastName:"Amin"
};
const obj2 = {
    firstName:"Sakib",
    lastName:"Hasan"
};

console.log(myMethodList.fullName.call(obj1));