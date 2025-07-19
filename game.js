let btnRock = document.getElementById('btnRock');
let btnPaper = document.getElementById('btnPaper');
let btnScissors = document.getElementById('btnScissors');
let scoreBoard = document.getElementById('scoreBoard');
        let humanChoice;

        let playerOnePoints = 0;
        let playerTwoPoints = 0;
    
btnRock.addEventListener('click', () => {
     humanChoice = 'rock';
     playGame();
});

btnPaper.addEventListener('click', () => {
    humanChoice =  'paper';
    playGame();
});

btnScissors = btnScissors.addEventListener('click', () => {
    humanChoice = 'scissors';
    playGame();
});

function choice(number) {
    if(number == 1) {
        return 'rock';
    } else if (number == 2) {
        return 'paper';
    }else {
        return 'scissors';
    };
};

function getComputerChoice() {
    let getComputerNumber = Math.floor(Math.random() * 3) + 1
    return choice(getComputerNumber);
};

function playGame () {
        
        let playerOne = getComputerChoice();
        let playerTwo = humanChoice;
        
        console.log(playerOne);
        console.log(playerTwo);
        
        if(playerOne == 'rock' && playerTwo == 'paper') {
            console.log("point for player 2");
            
            playerTwoPoints += 1;
        } else if (playerOne == 'rock' && playerTwo == 'scissors') {
            console.log("point for player 1");
            playerOnePoints += 1;
        } else if (playerOne == 'paper' && playerTwo == 'scissors') {
            console.log("point for player 2");
            playerTwoPoints += 1;
        } else if (playerOne == 'scissors' && playerTwo == 'rock') {
            console.log("point for player 2");
            playerTwoPoints += 1;
        } else if (playerOne == 'scissors' && playerTwo == 'paper') {
            console.log("point for player 1");
            playerOnePoints += 1;
        } else if (playerOne == 'paper' && playerTwo == 'rock'){
            playerOnePoints += 1;
        };
        console.log(playerOnePoints);
        console.log(playerTwoPoints);

        scoreBoard.textContent = `${playerOnePoints} : ${playerTwoPoints}`;
        if(playerOnePoints === 5) {
        scoreBoard.textContent = "Computer wins!!!"
        playerOnePoints = 0;
        playerTwoPoints = 0;
        }else if (playerTwoPoints === 5) {
        scoreBoard.textContent = "Human wins!!!"
        playerOnePoints = 0;
        playerTwoPoints = 0;
        };
    };