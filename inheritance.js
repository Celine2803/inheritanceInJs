class Animal{
    constructor(){
        this.alive=true;
    }
    eat(){
        console.log("All Animals Eat");
    }
}

class Rabbit extends Animal{

}

let animal1=new Rabbit();
console.log(animal1.eat());