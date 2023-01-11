let form = document.getElementById("form");
let chosenPokemon = document.getElementById("selection");

// function pokemonGreetEachOther (pok1, pok2) {
//     console.log(`${pok1.name} says hello to ${pok2.name}`);
    
//     let newTotal = pok2.hp - pok1.moves[1].power;
//     console.log(newTotal);
//     pok2.hp = newTotal;


// }

let numbers = [8,5,1,2340,564,-5415,654,1,2,4,6,6540,10];

let addedNums = 8 + 10;

function addFirstAndLast(data) {
    
    //get first number
    let first = data[0];
    //get last number
    let last = data[data.length - 1];

    return first + last;
    //add those together and return
}

console.log(addFirstAndLast(numbers));



function findAverage(data) {
    let total = 0;

    for (i = 0; i < data.length; i++) {
        total = total + data[i];
    }

    let avg = total / data.length;

    return Math.round(avg);

}

let averageOfGrades = findAverage(numbers);
console.log(averageOfGrades);





















function multiply(num1,num2) {
    let product = num1 * num2;
    return product;
}

let newNumber = multiply(3,7);
// console.log(newNumber);



let pokemon = [ //four different pokemon objects
    {
        name: 'Pikachu',
        hp: 25,
        fainted: false,
        type: 'electric',
        moves: [
            {name: 'tailwhip', power: 2, pp: 45},
            {name: 'thundershock', power: 12, pp: 15},
            {name: 'thunder', power: 100, pp: 1},
        ],
        faint: function () {
            alert(`Pikachu fainted!`);
        }
    },
    {
        name: 'Charmander',
        hp: 20,
        fainted: false,
        type: 'fire',
        moves: [
            {name: 'flamethrower', power: 35, pp: 4},
            {name: 'stomp', power: 20, pp: 10},
            {name: 'bite', power: 18, pp: 15},
            {name: 'tackle', power: 15, pp: 20},
        ],
        faint: function () {
            alert(`Charmander fainted!`);
        }
    },
    {
        name: 'Squirttle',
        hp: 36,
        fainted: true,
        type: 'water',
        moves: [
            {name: 'bubble', power: 12, pp: 40},
            {name: 'withdraw', power: 0, pp: 40},
            {name: 'watergun', power: 30, pp: 20},
            {name: 'hydropump', power: 100, pp: 5},
        ],
        faint: function () {
            alert(`Squirttle fainted!`);
        }
    },
    {
        name: 'Bulbasaur',
        hp: 27,
        fainted: false,
        type: 'grass',
        moves: [
            {name: 'razorleaf', power: 45, pp: 40},
            {name: 'tackle', power: 20, pp: 20},
            {name: 'solarbeam', power: 120, pp: 5},
        ],
        faint: function () {
            alert(`Bulbasaur fainted!`);
        }
    }
]

// console.log(pokemon[multiply(1,3)]);

// pokemonGreetEachOther(pokemon[0],pokemon[1]);
// console.log("Char after battle is: ", pokemon[1]);
// console.log(pokemon[0].moves);
// console.log(pokemon[0].moves[1]["power"]);
//try consoling to get your data!!

// console.log(pokemon);

// pokemon = pokemon.map(
//     function (x) {
        
//         console.log(x.moves[2]);

//         return x;
//     }
// )

// console.log(pokemon);



// MAP
// let pikachuMoves = pokemon[0].moves;
// let movesWithType = pikachuMoves.map(
//     function (move) {
//        console.log(move);
//        move.type = "electric";
//        return move;
//     }
// )

// console.log(movesWithType);

// FILTER

// let pokemonThatCanFight = pokemon.filter(
//     function (thisPokemon) {
//         return (!thisPokemon.fainted);
//     }
// )


// console.log(pokemonThatCanFight);

//Reducer

// let numbers = [12,15,122,392,191];

// let totalOfNum = numbers.reduce(
//     function(prev, curr) {
//         return(prev + curr);
//     }
// )

// console.log(totalOfNum);

//FOR EACH 

// function eat(fruit) {
//     console.log("Eating " + fruit + "... YUM!");
//   }
  
//   let fruits = [ "apple", "orange", "banana" ];
  
//   let oranges = fruits.forEach(function(fruit, index ) {
//     console.log("["+index+"] " + fruit);
//     eat(fruit);
//   });

// Splice

// let fruits = [ "apple", "orange", "banana" ];

// let favoriteFruits = ["mangoes", "strawberries", "duran"];

// let removed = fruits.splice(2,0,favoriteFruits);
// console.log(removed); // []console.log(fruits.length); // 4
// console.log(fruits); 

// index, the # to remove (could be 0), what to add


//**************FORM */

// form.addEventListener("submit", (e) => {
    
//     let pokeID = e.target.elements.pokemonID.value;
//     console.log(pokeID);
//     e.preventDefault();
//     pokemon[pokeID].faint();

//     // faint(pokeID);
// })
// console.log(pokemon[1]);



// function faint (pokeID) {
//     alert(`${pokemon[pokeID].name} fainted like really bad!!`);
// }