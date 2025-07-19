function choice(number) {
    if(number == 1) {
        return "rock";
    } else if (number == 2) {
        return "paper";
    }else {
        return "scissors";
    };
};

function getComputerChoice() {
    let getComputerNumber = Math.floor(Math.random() * 3) + 1
    return getComputerNumber;
}

function humanChoice () {
    let input =  prompt("Enter number from 1 to 3:");
    while (input < 1 || input > 3 || isNaN(input)) {
        input = Number(prompt("Invalid input! Enter number from 1 to 3:"));
    }
    return input;
};

function getHumanChoice (num) {
    return choice(num);
};

function playGame () {
        let playerOnePoints = 0;
        let playerTwoPoints = 0;
    for (let i = 0; i < 5; i++) {
        let playerOne = getComputerChoice();
        let playerTwo = humanChoice();
        console.log(getHumanChoice(playerTwo));
        console.log(choice(playerOne));
        
        if(playerOne == 1 && playerTwo == 2) {
            playerTwoPoints += 1;
        } else if (playerOne == 1 && playerTwo == 3) {
            playerOnePoints += 1;
        } else if (playerOne == 2 && playerTwo == 3) {
            playerTwoPoints += 1;
        } else if (playerOne == 3 && playerTwo == 1) {
            playerTwoPoints += 1;
        } else if (playerOne == 3 && playerTwo == 2) {
            playerOnePoints += 1;
        } else if (playerOne == playerTwo) {
            i--;
        };
    };

function getWinner () {
        console.log(playerOnePoints);
        console.log(playerTwoPoints);
}
      if(playerOnePoints > playerTwoPoints) {
        getWinner();
        
        console.log("Computer wins!");
    } else {
        getWinner();
        
        console.log("Human wins!"); 
    };
};

playGame();

// Сега трябва да се направи точкова система, да се направи кое от камък ножица хартия побеждава.



