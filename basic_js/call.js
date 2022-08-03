const myMethodList = {
    fullName: function(){
        return this.firstName + " " + this.lastName;
    }
}

const person1 = {
    firstName : "Ruhul",
    lastName :"Amin"
};

const person2 = {
    firstName:"Sakib",
    lastName :"Hasan"
}

console.log(myMethodList.fullName.call(person1));

console.log(myMethodList.fullName.call(person2));