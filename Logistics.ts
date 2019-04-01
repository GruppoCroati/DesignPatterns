interface ITransport {

    deliver(): void
}

class Truck implements ITransport {

    public deliver(): void {
         console.log("The delivery of the goods has been carried out by land.");
    }
}
class Ship implements ITransport {

    public deliver(): void {
        console.log("The delivery of the goods has been carried out by sea.");
    }
}
class VehicleFactory {

    public makeNewVehicle(vehicleType: string): ITransport {
        switch(vehicleType) {
            case "onTheRoad": return new Truck();
            case "byTheSea": return new Ship();
            default: return null;
        }
    }
}

const vehicleFactory = new VehicleFactory();

console.log("");

const truck = vehicleFactory.makeNewVehicle("onTheRoad")

truck.deliver();

console.log("");

const ship  = vehicleFactory.makeNewVehicle("byTheSea")

ship.deliver();

console.log("");

