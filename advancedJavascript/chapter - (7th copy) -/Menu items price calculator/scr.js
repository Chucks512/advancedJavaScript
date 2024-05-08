/*
Create a class that 
contains the prices of 
two menu items as private field declarations.

Use the constructor in the class 
to get the argument values 
(how many of each item are being bought).

Create a method to calculate and return 
the total cost depending on 
how many of each item the user selects.

Use a getter property to 
grab the value output by the calculation method.

Create two or three objects 
with different combinations of menu selections,
and output the total cost in the console.
*/
// class, 2 private menu item prices
// construtor to input quantities
// calc, return totCost, --use get method for totCost
// 2/3 objects, different requests, cnsl.log(costs)

class pairItems{
    #firstItem; #secondItem;
    constructor(firstItem = 0, secondItem = 0){
        this.#firstItem = firstItem * 10;
        this.#secondItem = secondItem * 5;
    }
    getCost(){
        let cost = (this.#firstItem + this.#secondItem)
        return cost;
    }
}
firstBuyer = new pairItems(1,2);
console.log(firstBuyer.getCost());

secondBuyer = new pairItems(2,1);
console.log(secondBuyer.getCost());