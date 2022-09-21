//Typeof guards
 function triple(value: number| string){
if(typeof value ==='string'){
   return value.repeat(3)
}
return value*3
}

//if we pass a string like 'hi' we want to repear that string 
//three times and give us 'hihhi) - triple the string 


const el = document.getElementById('idk')
if (el){
    el
} else {
    el
}

const printLetters =(word?:string) => {
    if(word){
        for (let char of word){
            console.log(char);
        }
    } else {
        word
        console.log('You did not pass in a word')
    }
}


// Equality Narrowing

function someDemo(x:string |number, y: string| boolean) {
    if( x==y){
        x
        y
    }
}

//Narrowing with the in operator

interface Movie {
    title:string,
    duration:number
}

interface TVShow {
    title: string,
    numEpisodes:number,
    episodeDuration:number
}

function getRuntime(media: Movie | TVShow){
    if('numEpisodes' in media ){
       return media.numEpisodes*media.episodeDuration
    }
        media
}

console.log(getRuntime({title: 'Amadeus', duration: 160}))
console.log(getRuntime({title: 'SpongeBob', numEpisodes: 80, episodeDuration:30}))



//Instance narrowing - used with Date 

function printFullDate(date: string | Date){
    if(date instanceof Date){
        date
        console.log(date.toUTCString());
    } else {
        console.log(new Date(date).toUTCString());
    }
    }

    class User{
        constructor(public username : string){}
    } class Company {
        constructor(public name:string) {}
    }

    function printName(entity: User | Company){
        if(entity instanceof User){
            entity
    } else {
        entity
    }

    }

    //type predicates

    interface Cat{
      name: string,
      numLives: number
    }

    interface Dog {
      name: string,
      breed:string
    }

    // animal is Cat is the type predicator 
    function isCat(animal: Cat | Dog): animal is Cat{
      return (animal as Cat).numLives !== undefined //if this function returns true then we now that the animal type is cat
    } //is going to check if it is a cat or not

    function makeNoise(animal: Cat | Dog){
      if(isCat(animal)){
         animal
         return "Meow"
      } else {
         animal
      }
    }

    //Discriminated Unions - helps to narrow types when they all have the same properties
    // we use a specific property that it is kind or type with a literal type

    interface Rooster{
      name: string; 
      weight: number;
      age:number;
      kind:"rooster"
   }
    
   interface Cow{
      name: string; 
      weight: number;
      age:number;
      kind:"cow"
   }

   interface Pig{
      name: string; 
      weight: number;
      age:number;
      kind:"pig"
   }


    type FarmAnimal = Pig | Cow | Rooster;

    function getFarmAnimalSound(animal: FarmAnimal){
      switch(animal.kind){
         case("pig"):
         return "Oink";
         case("cow"):
         return "Muuh";
         case("rooster"):
         return "Cocorococo"
        default :
        const _exhaustiveCheck: never = animal;
        return _exhaustiveCheck;
        //checks if we are missing something, if we don't handle all the cases
      }
    }

    const stevie: Rooster ={
      name: 'Stevie',
      weight: 2,
      age: 1.5,
      kind: "rooster" 
    }

    console.log(getFarmAnimalSound(stevie))

//Exhaustive checking

