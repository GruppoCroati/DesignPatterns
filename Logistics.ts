abstract class ITransport {

    public abstract deliver(): void

    public showLogo(): void {
        console.log("My company logo");
    }
}

class Truck extends ITransport {

    public deliver(): void {
         console.log("The delivery of the goods has been carried out by land.");
    }
}
class Ship extends ITransport {

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

truck.showLogo();

console.log("");

const ship  = vehicleFactory.makeNewVehicle("byTheSea")

ship.deliver();

console.log("");

ship.showLogo();

console.log("");

