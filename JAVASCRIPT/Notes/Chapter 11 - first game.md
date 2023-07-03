# Chapter 11 - Your First Game

## A rock, paper and Scissors game
//ROck, paper or scissors Game

let playGame = confirm("Will you like to Plaly Rock , paper or scissors with me?")
if(playGame){
    let playerchoice = prompt("Please select Rock, Paper or scissors any one")
    if(playerchoice){
        let player = playerchoice.trim().toLowerCase();
        if(
            player === 'rock' ||
            player === 'paper' ||
            player === 'scissors'
        ){
            let computerChoice = Math.floor(Math.random() * 3 + 1);
            let computer =
                computerChoice === 1 ? 'rock' :
                computerChoice === 2 ? 'paper' : 'scissors';
            
            let result = 
                player === computer ? "Tie game!!" :
                player === 'rock' && computer === 'paper' ? `player: ${player}\ncomputer: ${computer}\nComputer Wins!!` :
                player === 'paper' && computer === 'scissors' ? `player: ${player}\ncomputer: ${computer}\nComputer Wins!!` :
                player === 'scissors' && computer === 'rock' ? `player: ${player}\ncomputer: ${computer}\nComputer Wins!!` :
                `player: ${player}\ncomputer: ${computer}\nComputer Wins!!`;
            alert(result)
            let playagin = confirm("Want to Play again");
            playagin ? location.reload() : alert("ok no problem")
        }

    } else{
        alert("it's okya next time maybe")
    }
} else {
    alert("It's okya maybe next time")
}