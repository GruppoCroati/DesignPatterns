abstract class Logistics {

    public abstract createTransport(): LogisticTransport;

    public planDelivery(): string {

        const vehicle = this.createTransport();

        return vehicle.deliver();
    }
}

class RoadLogistics extends Logistics {

    public createTransport(): LogisticTransport {
        return new Truck();
    }
}

class SeaLogistics extends Logistics {

    public createTransport(): LogisticTransport {
        return new Ship();
    }
}

interface LogisticTransport {

    deliver(): string;
}

class Truck implements LogisticTransport {

    public deliver(): string {
        return "The delivery of the goods has been carried out by land.";
    }
}

class Ship implements LogisticTransport {

    public deliver(): string {
        return "The delivery of the goods has been carried out by sea.";
    }
}

function clientCode(logistics: Logistics) {

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
