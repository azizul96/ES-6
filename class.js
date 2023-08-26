class Vehicle{
    constructor(company, type, speed){
        this.company = company
        this.type = type
        this.speed = speed
    }

    make(){
        return `${this.name} ${this.type} ${this.speed}`;
    }
}

const bus = new Vehicle('Hanif', 'bus', 90)
console.log(bus);
const truck = new Vehicle('green line', 'truck', 70)
console.log(truck);

// Example o inheritance 
class Car extends Vehicle{
    constructor(company, type, speed, year){
        super (company, type, speed)
        this.year = year
    }
}
const car = new Car('Toyota', 'Car', 200, 1971)
console.log(car);