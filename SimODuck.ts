abstract class Duck {

    //protected flyBehaviour: FlyBehaviour

    //protected quackBehaviour: QuackBehaviour

    constructor(private flyBehaviour: FlyBehaviour,private quackBehaviour: QuackBehaviour) {

    }

    performQuack() {
        this.quackBehaviour.quack();
    }

    performFly() {
        this.flyBehaviour.fly();
    }

    public setFlyBehavior(fb: FlyBehaviour) {
        this.flyBehaviour = fb;
    }

    public setQuackBehavior(qb: QuackBehaviour) {
        this.quackBehaviour = qb;
    }

    swim() { console.log("I'm swimming") };

    abstract display()

    //others methods
}

interface FlyBehaviour {
    fly();
}

class FlyWithWings implements FlyBehaviour {

    fly() {
        console.log("I'm flying");
    }
}

class FlyWithNoWings implements FlyBehaviour {

    fly() {
        console.log("I cannot flying");
    }
}


interface QuackBehaviour {
    quack();
}

class Quack implements QuackBehaviour {

    quack() { console.log("quack"); }
}

class Squeak implements QuackBehaviour {

    quack() { console.log("squeak"); }
}

class MuteQuack implements QuackBehaviour {

    quack() {
        console.log("---");
    }
}

class DecoyDuck extends Duck {

    constructor() {
        super(new FlyWithNoWings(),new MuteQuack())
    }

    display() {
        console.log("I'm a DecoyDuck!");
    }
}

class MallardDuck extends Duck {

    constructor() {
        super(new FlyWithWings(), new Quack())
    }
       
    display() {
        console.log("I'm a MallardDuck!");
    }
}

class RubberDuck extends Duck {

    constructor() {
        super(new FlyWithNoWings(),new Squeak() )

    }

    display() {
        console.log("I'm a RubberDuck!");
    }
}

var mallard = new MallardDuck();

mallard.performQuack();

mallard.setQuackBehavior(new Squeak())

mallard.performQuack();
