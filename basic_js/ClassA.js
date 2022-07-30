class ClassA{
    constructor(name,email){
        this.name = name;
        this.email = email;
    }
    run(){
        return this.name +" "+ this.email;
    }
}

const a = new ClassA("ruhul amin","alfaBinomialbeta@gmail.com");
console.log(a);