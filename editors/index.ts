class Player {
  
    //public score = 0 // this is changeable outside the class. just for anotation
    constructor (public first: string, public last:string, private score:number){
        this.first = first;
        this.last = last;

    }



}

const elton = new Player ('Elton', 'Steele', 2);
//elton.score = 23

// Classes and Interfaces
 
interface Colorful {
    color:string
}

interface Printable {
    print():void
}

class Bike implements Colorful {
    constructor (public color : string){

    }
}

class Jacket implements Colorful, Printable {
    constructor(public brand:string, public color: string){}
    print(): void {
        console.log('Hi')
    }
}

const jacket1 = new Jacket('Prada', 'black')

//Abstract Classes - only 

abstract class Employee{
    constructor (public first: string, public last:string){}
    abstract getPay():number

}

