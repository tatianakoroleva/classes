//class

class Car{
    constructor(material, speed){
        this.material = material;
        this.speed = speed;
    }

    get maxSpeed(){
        return this.speed * 1.1;

    }

    info(){
        return `Report: ${this.material}, speed: ${this.speed}`
    }
}

class FastCar extends Car{
    constructor(material, speed, accel){
        super(material, speed);
        this.accel = accel;
    }

    info(){
        return `Report: ${this.material}, speed: ${this.speed}, accel: ${this.accel}`
    }
}

const raceCar = new Car('Cooper', 345);
const workCar = new Car('Iron', 342)

const redFastCar = new FastCar('Carbon', 500, 10);

console.log(redFastCar.maxSpeed);
