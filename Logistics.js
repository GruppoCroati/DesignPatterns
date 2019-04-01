var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var ITransport = /** @class */ (function () {
    function ITransport() {
    }
    ITransport.prototype.showLogo = function () {
        console.log("My company logo");
    };
    return ITransport;
}());
var Truck = /** @class */ (function (_super) {
    __extends(Truck, _super);
    function Truck() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Truck.prototype.deliver = function () {
        console.log("The delivery of the goods has been carried out by land.");
    };
    return Truck;
}(ITransport));
var Ship = /** @class */ (function (_super) {
    __extends(Ship, _super);
    function Ship() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Ship.prototype.deliver = function () {
        console.log("The delivery of the goods has been carried out by sea.");
    };
    return Ship;
}(ITransport));
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
truck.showLogo();
console.log("");
var ship = vehicleFactory.makeNewVehicle("byTheSea");
ship.deliver();
console.log("");
ship.showLogo();
console.log("");
