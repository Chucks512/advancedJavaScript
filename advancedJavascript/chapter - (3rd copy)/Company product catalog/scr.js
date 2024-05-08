//NAME, MODEL, COST, QUANTITY
class car {
    constructor(theName, model, cost, quantity) {
    this.theName = theName;
    this.model = model;
    this.cost = cost;
    this.quantity = quantity;
    }
}

superCar = new car("Ford","Mustang","1,5M","1k");
hyperCar = new car("Bugatti","Veyron","230M","150");
sportsCar = new car("Toyota","86","800k","20k");
carList = [hyperCar, superCar, sportsCar];

const theList = [   {},
                    {},
                    {}
                ];

console.log(carList);
