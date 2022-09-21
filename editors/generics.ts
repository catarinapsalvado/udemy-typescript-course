/*  Generics are a special feature or special bit of syntax that allows us to define reusable functions

or reusable classes that can work with multiple types. */

const nums: Array<number> =[]

const letters : Array<string> =[]

//We use generics when the input type is the same as the return type

const btn = document.querySelector<HTMLButtonElement>('.btn')!

function numberidentity(item:number): number {
    return item;
}

function stringidentity(item:string): string {
    return item;
}

function identity<Type>(item:Type): Type {
return item
}

interface Cat {
    name: string;
    breed:string;
}

function getRandomElement<T>(list: T[]) : T {
const randIdx = Math.floor(Math.random() * list.length)
return list[randIdx]
}


//(list: T - means we accept an aray of
//type array of T)

function merge<T, U>(object1: T,object2: U){
    return {...object1, ...object2}
}
const comboObj = merge({name: 'colt'}, {pets:['blue', 'elton']})
//vai fazer a interseção dos dois para criar o novo

function merge2<T extends object, U extends object>(object1: T,object2: U){
    return {...object1, ...object2}
}
const comboObj2 = merge({name: 'colt'}, {pets:['blue', 'elton']})

interface Lenghty {
    length: number;
}

function printDoubleLenght<T extends Lenghty>(thing: Lenghty): number{
    return thing.length *2
}

//default value for generic funtion <T = number>

function makeEmptyList<T = number>():  T[]{
    return []
}

