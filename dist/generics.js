"use strict";
/*  Generics are a special feature or special bit of syntax that allows us to define reusable functions

or reusable classes that can work with multiple types. */
const nums = [];
const letters = [];
//We use generics when the input type is the same as the return type
const btn = document.querySelector('.btn');
function numberidentity(item) {
    return item;
}
function stringidentity(item) {
    return item;
}
function identity(item) {
    return item;
}
function getRandomElement(list) {
    const randIdx = Math.floor(Math.random() * list.length);
    return list[randIdx];
}
//(list: T - means we accept an aray of
//type array of T)
function merge(object1, object2) {
    return Object.assign(Object.assign({}, object1), object2);
}
const comboObj = merge({ name: 'colt' }, { pets: ['blue', 'elton'] });
//vai fazer a interseção dos dois para criar o novo
function merge2(object1, object2) {
    return Object.assign(Object.assign({}, object1), object2);
}
const comboObj2 = merge({ name: 'colt' }, { pets: ['blue', 'elton'] });
function printDoubleLenght(thing) {
    return thing.length * 2;
}
//default value for generic funtion <T = number>
function makeEmptyList() {
    return [];
}
