

//Provate, geeters and setters estou meia perdida 

class Player { 
    static description = 'Não se consegue aceder individualmente, só na class'
    score = 0; // on every instance of player, score should be set to 0
    numLives = 10;
    constructor(first, last){
        this.first = first;
        this.last = last;   
}

get fullName (){
    return `${this.first} and ${this.last}`;
}


    taunt(){
        console.log('BUAAAH')
    }
    loseLife (){
        this.numLives -=1
    }
}

const player1 = new Player("blue","steele")
/* player1.taunt()
console.log(player1.first) */
console.log(player1.last )
console.log(player1.numLives)
player1.loseLife()
console.log(player1.numLives)

console.log(player1.fullName)
console.log(player1.score) 

const player2 = new Player("charlie", "brown")
player2.taunt()

class AdminPlayer extends Player {
    constructor (first, last,powers){
        super(first, last)
        this.powers=powers
    }
isAdmin=true
}

const admin = new AdminPlayer('cat', 's', ['delete', 'restore'])

console.log(admin)

//super references the constructor of the parent class