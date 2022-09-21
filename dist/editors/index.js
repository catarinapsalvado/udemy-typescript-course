"use strict";
class Player {
    //public score = 0 // this is changeable outside the class. just for anotation
    constructor(first, last, score) {
        this.first = first;
        this.last = last;
        this.score = score;
        this.first = first;
        this.last = last;
    }
}
const elton = new Player('Elton', 'Steele', 2);
class Bike {
    constructor(color) {
        this.color = color;
    }
}
class Jacket {
    constructor(brand, color) {
        this.brand = brand;
        this.color = color;
    }
    print() {
        console.log('Hi');
    }
}
const jacket1 = new Jacket('Prada', 'black');
//Abstract Classes - only 
class Employee {
    constructor(first, last) {
        this.first = first;
        this.last = last;
    }
}
