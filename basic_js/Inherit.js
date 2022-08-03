class Car {

    constructor(brand,model){
        this.brand = brand;
        this.model = model;
    }

    info(){
        return this.name + " " + this.model;
    }

}

class Model extends Car{
    constructor(brand,model){
        super(brand,model);
    }
    show(){
        return this.brand + " " + this.model;
    }
}
const m1 = new Model("BMW",1996);
console.log(m1.brand + " ==>" + m1.model);


