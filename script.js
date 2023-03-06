/* 

we're going to have the user enter an input of rock, paper, or scissors
    need to think of cases where they do not enter any of those
        let them know and try again


playerSelection = prompt('Let's play Rock Paper Scissors, please enter your selection!')
is how we can capture the user input

the computer will select rock paper or scissors randomly using a function called getComputerChoice

the function playGame(playerSelection, getComputerChoice) will see who between the player and the computer is the winner and print the 
the results to the player.

*/

playerSelection = prompt("Let's play Rock Paper Scissors, please enter your choice!")

//we need to clean up playerSelection incase folks enter Rock, rocks

function playerSelectionLower(string){
    playerSelection = playerSelection.toLowerCase()
    return playerSelection
}

