const sports = ["golf", "football", "cricket"];

const games = [
    {
        name: "Starcraft 2",
        released: "2010",        
    },
    {
        name: "Age of Empires II",       
    },
    {
        name: "Cyberpunk 2077",
        released: 2020
    }
];

//question 1
function printSeason(season) {
    console.log(season);
}

printSeason("summer");

//question 2
function printNumbers(firstNumber, secondNumber) {
    console.log(firstNumber, secondNumber);
}

printNumbers(10, 20);

//question 3
function addNumbers(numberOne, numberTwo, numberThree) {
    const result = numberOne + numberTwo + numberThree;
    return result;
}

const result = addNumbers(10, 20, 30);
console.log(result);

const total = document.querySelector(".total");
total.innerHTML = result;

//question 4
function createGreeting(name) {
   const greeting = "Hello, my name is " + name + ".";
   return greeting;
}
const greeting = createGreeting("Janne");

const newString = document.querySelector("#name");
newString.innerHTML = greeting;

//question 5
function printListItems(item) {
    for (let i = 0; i < item.length; i++ ) {
        console.log(item[i]);

    }
}

printListItems (sports);

//question 6
function createGames(gamesList) {

    let html = "";

    for(let i = 0; i < gamesList.length; i++) {

        let releaseYear = "Unknown year";

        if(gamesList[i].released) {
            releaseYear = gamesList[i].released;
        }

        html += `<div class="game">
                    <h5>${gamesList[i].name}</h5>
                    <p>Released: ${releaseYear}</p>
                </div>`;
    }

    return html;
}

const newHTML = createGames(games);

const gameContainer = document.querySelector(".game-container");
gameContainer.innerHTML = newHTML;
