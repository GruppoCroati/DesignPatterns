var Truck = /** @class */ (function () {
    function Truck() {
    }
    Truck.prototype.deliver = function () {
        console.log("The delivery of the goods has been carried out by land.");
    };
    return Truck;
}());
var Ship = /** @class */ (function () {
    function Ship() {
    }
    Ship.prototype.deliver = function () {
        console.log("The delivery of the goods has been carried out by sea.");
    };
    return Ship;
}());
var VehicleFactory = /** @class */ (function () {
    function VehicleFactory() {
    }
    VehicleFactory.prototype.makeNewVehicle = function (vehicleType) {
        switch (vehicleType) {
            case "onTheRoad": return new Truck();
            case "byTheSea": return new Ship();
            default: return null;
        }
    };
    return VehicleFactory;
}());
var vehicleFactory = new VehicleFactory();
console.log("");
var truck = vehicleFactory.makeNewVehicle("onTheRoad");
truck.deliver();
console.log("");
var ship = vehicleFactory.makeNewVehicle("byTheSea");
ship.deliver();
console.log("");
