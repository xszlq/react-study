class Car{
    constructor(options){
        this.doors = options.doors || 4;
        this.state = options.state || "brand new";
        this.color = options.color || "silver";
    }
}

class Truck{
    constructor(options){
        this.state = options.state || "used";
        this.wheelSize = options.wheelSize || "large";
        this.color = options.color || "blue";
    }
}

class VehicleFactory{
    constructor(){
        this.vehicleClass = Car;
    }

     createVehicle(options){
        switch(options.vehicleType){
            case "car":
                this.vehicleClass = Car;
                break;
            case "truck":
                this.vehicleClass = Truck;
                break;
            //defaults to VehicleFactory.prototype.vehicleClass (Car)
        }

        return new this.vehicleClass( options );
    }
}

const carFactory = new VehicleFactory();
const car = carFactory.createVehicle( {
    vehicleType: "car",
    color: "yellow",
    doors: 6 } );

console.log( car instanceof Car );

// Outputs: Car object of color "yellow", doors: 6 in a "brand new" state
console.log( car );

// 写一个ui库
class MyUI{
    constructor(){

    }
}

class Button{

}
