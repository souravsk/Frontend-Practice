Chapter 16 - refactor the  Game

```
//ROck, paper or scissors Game with fucntion and loops

const initGame = () => {
    const startGame = confirm("shall we play rock, paper or secissors");
    startGame ? playGame() : alert("ok maybe next time");
};

//Game flow funcation
const playGame = () => {
    While (true) {
        let playerChoice = getPlayerChoice();
        playerChoice = formatePlayerChoice(playerChoice);
        if(playerChoice === "") {
            invalidChoice();
            continue;
        }
        if (!playerChoice) {
            decidedNotPlay();
            break;
        }
        playerChoice = evaluatePlayerChoice(playerChoice); 
        if (!playerChoice){
            invalidChoice();
            continue;
        }
        const computerChoice = getComputerChoice();
        const result =determineWinner(playerChoice, computerChoice);
        displayResult(result);
        if (askToPlayAgain()){
            continue;
        } else {
            thanksForPlaying();
            break;
        }
    }
};

const getPlayerChoice = () => {
    return prompt("Please enter rock, paper or scissors.");
};

const formatePlayerChoice = (playerChoice) => {
    if(playerChoice || playerChoice === ""){
        return playerChoice.trim().toLowerCase();
    } else {
        return false;
    }
};

const decidedNotPlay = () => {
    alert("I guess you change your mind. Maybe later ")
};

const evaluatePlayerChoice = (playerChoice) => {
    if (
        playerChoice === "rock" ||
        playerChoice === 'paper' ||
        playerChoice === 'scissors'
    ) {
        return playerChoice;
    } else {
        return false;
    }
};

const invalidChoice = () => {
    alert("You didn't enter rock, paper or scissors.");
}

const getComputerChoice = () => {
    const randomNumber = Math.floor(Math.random() * 3);
    const rpsArray = ["rock", "paper", "scissors"];
    return rpsArray[randomNumber];
}

const determineWinner = (player, computer) => {
    const winner = 
        player === computer
            ? "Tie game!!"
            : player === 'rock' && computer === 'paper'
            ? `player: ${player}\ncomputer: ${computer}\nComputer Wins!!`
            : player === 'paper' && computer === 'scissors'
            ? `player: ${player}\ncomputer: ${computer}\nComputer Wins!!`
            : player === 'scissors' && computer === 'rock'
            ? `player: ${player}\ncomputer: ${computer}\nComputer Wins!!`
            : `player: ${player}\ncomputer: ${computer}\nComputer Wins!!`;
    return winner;
};

const displayResult = (result) => {
    alert(result);
}

const askToPlayAgain = () => {
    return confirm ("Play Again?");
}

const thanksForPlaying = () => {
    alert("ok, thanks for playing");
}

initGame();
```