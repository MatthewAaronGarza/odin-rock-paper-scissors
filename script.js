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

// opening prompt 
playerSelection = prompt("Let's play Rock Paper Scissors, please enter your choice!")
checkerAndReprompt()


// playerSelection to lower case
function playerSelectionLower(string){
    playerSelection = playerSelection.toLowerCase()
    return playerSelection
}

function checkerAndReprompt() {

    // checker and reprompt
    if (playerSelection == 'rock' || playerSelection == 'paper' || playerSelection == 'scissors') {

    } else {
        playerSelection = prompt("It seems you entered something other than Rock, Paper, or Scissors, try again and we can play!")
        // call the function to clean up new prompt
        playerSelectionLower(playerSelection)
        // introduced recursion so that we eventually get a correct entry or we continually ask for one that works
        checkerAndReprompt()
    }

}


function getRandomIntegerBetween1and3() {
    let min = Math.ceil(1) // since we are only looking for a random number between 1 and 3 with 1 the min
    let max = Math.max(3) //  since we are only looking for a random number between 1 and 3 with 3 the max

    return Math.floor(Math.random() * (max - min + 1) + min ); // now we have a random number between 1 and 3 inclusive of 1 and 3
    
}


function getComputerChoice() {
}
