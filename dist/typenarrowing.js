"use strict";
//Typeof guards
function triple(value) {
    if (typeof value === 'string') {
        return value.repeat(3);
    }
    return value * 3;
}
//if we pass a string like 'hi' we want to repear that string 
//three times and give us 'hihhi) - triple the string 
const el = document.getElementById('idk');
if (el) {
    el;
}
else {
    el;
}
const printLetters = (word) => {
    if (word) {
        for (let char of word) {
            console.log(char);
        }
    }
    else {
        word;
        console.log('You did not pass in a word');
    }
};
// Equality Narrowing
function someDemo(x, y) {
    if (x == y) {
        x;
        y;
    }
}
function getRuntime(media) {
    if ('numEpisodes' in media) {
        return media.numEpisodes * media.episodeDuration;
    }
    media;
}
console.log(getRuntime({ title: 'Amadeus', duration: 160 }));
console.log(getRuntime({ title: 'SpongeBob', numEpisodes: 80, episodeDuration: 30 }));
//Instance narrowing - used with Date 
function printFullDate(date) {
    if (date instanceof Date) {
        date;
        console.log(date.toUTCString());
    }
    else {
        console.log(new Date(date).toUTCString());
    }
}
class User {
    constructor(username) {
        this.username = username;
    }
}
class Company {
    constructor(name) {
        this.name = name;
    }
}
function printName(entity) {
    if (entity instanceof User) {
        entity;
    }
    else {
        entity;
    }
}
// animal is Cat is the type predicator 
function isCat(animal) {
    return animal.numLives !== undefined; //if this function returns true then we now that the animal type is cat
} //is going to check if it is a cat or not
function makeNoise(animal) {
    if (isCat(animal)) {
        animal;
        return "Meow";
    }
    else {
        animal;
    }
}
function getFarmAnimalSound(animal) {
    switch (animal.kind) {
        case ("pig"):
            return "Oink";
        case ("cow"):
            return "Muuh";
        case ("rooster"):
            return "Cocorococo";
        default:
            const _exhaustiveCheck = animal;
            return _exhaustiveCheck;
        //checks if we are missing something, if we don't handle all the cases
    }
}
const stevie = {
    name: 'Stevie',
    weight: 2,
    age: 1.5,
    kind: "rooster"
};
console.log(getFarmAnimalSound(stevie));
//Exhaustive checking
