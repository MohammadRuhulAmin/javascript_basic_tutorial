function Person(firstName,lastName,age,contact){
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.contact = contact;
    this.fullName = function(){
        return this.firstName + ' ' + this.lastName;
    }
};
Person.prototype.country = "Bangladesh";
Person.prototype.region = "South Asia";
const ruhul = new Person("Ruhul","Amin",25,"01322-352864");
console.log(ruhul);