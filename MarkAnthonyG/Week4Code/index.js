// const doActivity = (variable) => {
//     for (var x = 0; x < 10; x++) {
//         variable++;
//     }
// }

// testVar();
// function testVar() {
//     let y = 0;

//     for (var x = 0; x <100; x++ ) {
//         x++;
//         doActivity(x);
//         console.log(x);
//     }
// }



////// LET VS VAR GLOBAL SCOPE

// const addSansTax = (a,b) => a + b;
// const addWithTax = (a,b) => (a + b) * 1.07;


// const calculateTotal = (a, b, callback) => {
//     return callback(a, b)
// }

// let cat = 1200;
// let dog = 1800;

// console.log(calculateTotal(cat, dog, addWithTax));
// console.log(calculateTotal(cat, dog, addSansTax));

// const calculateTotal = (itemA, itemB, callback) => {
//     return callback(itemA,itemB);
// }

// console.log(calculateTotal(dog, cat, addWithTax));
// console.log(calculateTotal(dog, cat, addSansTax));

/////// Callback function




let ids = [25, 59, 2489, 149, 151, 134, 94];
let myPokemon = [];

const showMyPokemon = (ids) => {
    for (const id of ids) {
        fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
            .then(response => response.json())
            .then(data => {
                // console.log(data);
                handleData(data);
            })
            .catch(err => console.log(`Error: could not retrieve for ${id}`, err));
    }
}

// showMyPokemon(ids);

// setTimeout(() => {
//     console.log("before ST", myPokemon)
// },2000);

// console.log("after ST", myPokemon);

// const showMyPokemon = (ids) => {
//     for (const id of ids) {
//         fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
//         .then(res => res.json())
//         .then(data => handleData(data))
//         .catch(err => console.log(err, "ERROR"))
//     }
// }

const handleData = (pokeInfo) => {
    console.log(pokeInfo);
    let pokemon = {
        name: pokeInfo.name,
        id: pokeInfo.id,
        img: pokeInfo.sprites.front_default,
    }
    myPokemon.push(pokemon);

    //Update HTML

    let div = document.createElement(`div`);
    let h2 = document.createElement('h2');
    let image = document.createElement('img');
    h2.innerText = `${pokemon.id}: ${pokemon.name}`;
    image.src = pokemon.img;
    div.appendChild(h2);
    div.appendChild(image);
    document.body.appendChild(div);
}

// showMyPokemon(ids);
// console.log(myPokemon);

let user = [9];
// let myUser = ()

//`https:/reqres.in/api/users`

fetch(`https:/reqres.in/api/users?page=2`)
    .then(res => res.json())
    .then(data => {
        console.log(data.data[2]);
        user.push(data.data[2]);
        console.log(user);
    })




// Tobias Funk, #9


// setTimeout(() => {
//     console.log(users);
// }, 2000)






// fetch(`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}
//     `)
//     .then(res => res.json())
//     .then(data => {
//         console.log(data);
//         spacePic.src = data.url;
//     }).catch(error => console.log("messed up",error));

// const spacePic = document.createElement("img");
// document.body.appendChild(spacePic);

