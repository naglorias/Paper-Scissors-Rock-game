'use strict';
const computerScore = document.querySelector('.computer-score');
const computerImage = document.querySelector('.computer-image');
const computerName = document.querySelector('.computer-name');
const userScore = document.querySelector('.user-score');
const userImage = document.querySelector('.user-image');
const userName = document.querySelector('.user-name');
const paperBtn = document.querySelector('.paper-btn');
const scissorsBtn = document.querySelector('.scissors-btn');
const rockBtn = document.querySelector('.rock-btn');
const startButton = document.querySelector('.play-btn');
const resetButton = document.querySelector('.reset-btn');
const closeButton = document.querySelector('.close');

let computerEntry = [];
let userEntry = [];
let computerValue = 0;
let userValue = 0;


const gameElements = [
    {
        name: 'Paper',
        image: 'imgs/paper.png',
    },
    {
        name: 'Scissors',
        image: 'imgs/scissors.png'
    },
    {
        name: 'Rock',
        image: 'imgs/rocks.png'
    }];

//Functions
const resetGame = () => {
    computerImage.src = './imgs/qm.png';
    userImage.src = './imgs/qm.png';
    computerName.textContent = 'Name';
    userName.textContent = 'Name';
    computerScore.value = 0;
    userScore.value=0;
    computerValue = 0;
    userValue=0;

};
const compareEntries = (entry1, entry2) =>{
    if (entry1 === 'Paper' && entry2 === 'Scissors') {
        userScore.value = userValue;
        computerScore.value = computerValue + 1;
        computerValue++;
    } else if (entry1 === 'Scissors' && entry2 === 'Paper') {
        userScore.value = userValue + 1;
        computerScore.value = computerValue;
        userValue++;
    } else if (entry1 === 'Scissors' && entry2 === 'Rock') {
        userScore.value = userValue;
        computerScore.value = computerValue + 1;
        computerValue++;
    } else if(entry1 === 'Rock' && entry2 === 'Scissors'){
     userScore.value = userValue + 1;
        computerScore.value = computerValue;
        userValue++;
    } else if (entry1 === 'Paper' && entry2 === 'Rock') {
        userScore.value = userValue + 1;
        computerScore.value = computerValue;
        userValue++;
    } else if (entry1 === 'Rock' && entry2 === 'Paper') {
        userScore.value = userValue;
        computerScore.value = computerValue+1;
        computerValue++;
    } else {
        userScore.value = userScore.value;
        computerScore.value = computerScore.value;
    }
}
const playGame = (array) => {
    const computerImage = document.querySelector('.computer-image');
    const computerName = document.querySelector('.computer-name');
   if(userName.textContent ==='Name'){
    alert('Select a choice');
   }
   else{
    let arrayCopy = array.slice(0);
    if (arrayCopy.length < 1) { arrayCopy = array.slice(0); }
    let arrayRandom = Math.floor(Math.random() * arrayCopy.length);
    let elem = arrayCopy[arrayRandom];
    arrayCopy.splice(arrayRandom, 1);
    computerImage.src = elem.image;
    computerName.textContent = elem.name;
    computerEntry.splice(0);
    computerEntry.push(elem.name);
    return elem;
   }
};
const gameOver = () => { 
    document.querySelector('.game-over').classList.remove('invisible');
    document.querySelector('.game-over').classList.add('visible');
    document.querySelector('.computer-result .score').textContent = computerValue;
    document.querySelector('.user-result .score').textContent = userValue;
    if(computerValue > userValue){
        document.querySelector('.winner p').textContent = 'Ooops! You Lost ☹️';
    }
    else if(computerValue < userValue){
        document.querySelector('.winner p').textContent = 'Wohooo! You Won 🏆🥳';

    }
    else{
        document.querySelector('.winner p').textContent = 'Tied😩';

    }
    //resetGame();
};



//EventListeners
paperBtn.addEventListener('click', () => {
    userImage.src = paperBtn.children[0].src;
    userName.textContent = gameElements[0].name;
    userEntry.splice(0);
    userEntry.push(userName.textContent);


});
scissorsBtn.addEventListener('click', () => {
    userImage.src = scissorsBtn.children[0].src;
    userName.textContent = gameElements[1].name;
    userEntry.splice(0);
    userEntry.push(userName.textContent);

});
rockBtn.addEventListener('click', () => {
    userImage.src = rockBtn.children[0].src;
    userName.textContent = gameElements[2].name;
    userEntry.splice(0);
    userEntry.push(userName.textContent);

});

resetButton.addEventListener('click', resetGame);
startButton.addEventListener('click', function (e) {
    playGame(gameElements);
    compareEntries(userEntry[0],computerEntry[0]);
  e.target.classList.add('disabled');
  setTimeout(function () {
    gameOver();
  },900)
    
    
});


closeButton.addEventListener('click', function () {
    document.querySelector('.game-over').classList.remove('visible');
    document.querySelector('.game-over').classList.add('invisible');
    startButton.classList.remove('disabled');

});
/* // Get the Array item which matchs the id "2"
var result = myArray.find(item => item.id === 2);

console.log(result.name);

    // Get the index of Array item which matchs the id "2"
var index = myArray.findIndex(item => item.id === 2);

console.log(index);  // Prints: 1
console.log(myArray[index].name);  */

 // Print)

