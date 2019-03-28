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
var Logistics = /** @class */ (function () {
    function Logistics() {
    }
    Logistics.prototype.planDelivery = function () {
        var vehicle = this.createTransport();
        return vehicle.deliver();
    };
    return Logistics;
}());
var RoadLogistics = /** @class */ (function (_super) {
    __extends(RoadLogistics, _super);
    function RoadLogistics() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RoadLogistics.prototype.createTransport = function () {
        return new Truck();
    };
    return RoadLogistics;
}(Logistics));
var SeaLogistics = /** @class */ (function (_super) {
    __extends(SeaLogistics, _super);
    function SeaLogistics() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SeaLogistics.prototype.createTransport = function () {
        return new Ship();
    };
    return SeaLogistics;
}(Logistics));
var Truck = /** @class */ (function () {
    function Truck() {
    }
    Truck.prototype.deliver = function () {
        return "The delivery of the goods has been carried out by land.";
    };
    return Truck;
}());
var Ship = /** @class */ (function () {
    function Ship() {
    }
    Ship.prototype.deliver = function () {
        return "The delivery of the goods has been carried out by sea.";
    };
    return Ship;
}());
function clientCode(logistics) {
    console.log(logistics.planDelivery());
}
console.log('');
console.log('App: Launched with the RoadLogistics.');
console.log('');
clientCode(new RoadLogistics());
console.log('');
console.log('App: Launched with the SeaLogistics.');
console.log('');
clientCode(new SeaLogistics());
console.log('');
