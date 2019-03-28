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
var Duck = /** @class */ (function () {
    function Duck(flyBehaviour, quackBehaviour) {
        this.flyBehaviour = flyBehaviour;
        this.quackBehaviour = quackBehaviour;
    }
    Duck.prototype.performQuack = function () {
        this.quackBehaviour.quack();
    };
    Duck.prototype.performFly = function () {
        this.flyBehaviour.fly();
    };
    Duck.prototype.setFlyBehavior = function (fb) {
        this.flyBehaviour = fb;
    };
    Duck.prototype.setQuackBehavior = function (qb) {
        this.quackBehaviour = qb;
    };
    Duck.prototype.swim = function () { console.log("I'm swimming"); };
    ;
    return Duck;
}());
var FlyWithWings = /** @class */ (function () {
    function FlyWithWings() {
    }
    FlyWithWings.prototype.fly = function () {
        console.log("I'm flying");
    };
    return FlyWithWings;
}());
var FlyWithNoWings = /** @class */ (function () {
    function FlyWithNoWings() {
    }
    FlyWithNoWings.prototype.fly = function () {
        console.log("I cannot fly");
    };
    return FlyWithNoWings;
}());
var Quack = /** @class */ (function () {
    function Quack() {
    }
    Quack.prototype.quack = function () { console.log("quack"); };
    return Quack;
}());
var Squeak = /** @class */ (function () {
    function Squeak() {
    }
    Squeak.prototype.quack = function () { console.log("squeak"); };
    return Squeak;
}());
var MuteQuack = /** @class */ (function () {
    function MuteQuack() {
    }
    MuteQuack.prototype.quack = function () { console.log("---"); };
    return MuteQuack;
}());
var DecoyDuck = /** @class */ (function (_super) {
    __extends(DecoyDuck, _super);
    function DecoyDuck() {
        return _super.call(this, new FlyWithNoWings(), new MuteQuack()) || this;
    }
    DecoyDuck.prototype.display = function () {
        console.log("I'm a DecoyDuck!");
    };
    return DecoyDuck;
}(Duck));
var MallardDuck = /** @class */ (function (_super) {
    __extends(MallardDuck, _super);
    function MallardDuck() {
        return _super.call(this, new FlyWithWings(), new Quack()) || this;
    }
    MallardDuck.prototype.display = function () {
        console.log("I'm a MallardDuck!");
    };
    return MallardDuck;
}(Duck));
var RubberDuck = /** @class */ (function (_super) {
    __extends(RubberDuck, _super);
    function RubberDuck() {
        return _super.call(this, new FlyWithNoWings(), new MuteQuack()) || this;
    }
    RubberDuck.prototype.display = function () {
        console.log("I'm a RubberDuck!");
    };
    return RubberDuck;
}(Duck));
var mallard = new MallardDuck();
mallard.performQuack();
mallard.setQuackBehavior(new Squeak());
mallard.performQuack();
mallard.setQuackBehavior(new MuteQuack());
mallard.performQuack();
