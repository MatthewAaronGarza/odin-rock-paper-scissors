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

// function getPlayerChoice() {

//     playerSelection = prompt("Let's play Rock Paper Scissors, please enter your choice!")
//     playerSelectionLower(playerSelection)
//     checkerAndReprompt(playerSelection)
//     return playerSelection 

// }


// playerSelection to lower case
// function playerSelectionLower(string){
//     playerSelection = playerSelection.toLowerCase()
//     return playerSelection
// }


// function checkerAndReprompt(string) {

//     // checker and reprompt
//     if (playerSelection == 'rock' || playerSelection == 'paper' || playerSelection == 'scissors') {

//     } else {
//         playerSelection = prompt("It seems you entered something other than Rock, Paper, or Scissors, try again and we can play!")
//         // call the function to clean up new prompt
//         playerSelectionLower(playerSelection)
//         // introduced recursion so that we eventually get a correct entry or we continually ask for one that works
//         checkerAndReprompt()
//     }

// }


function getRandomIntegerBetween1and3() {
    let min = Math.ceil(1) // since we are only looking for a random number between 1 and 3 with 1 the min
    let max = Math.max(3) //  since we are only looking for a random number between 1 and 3 with 3 the max

    return Math.floor(Math.random() * (max - min + 1) + min ) // now we have a random number between 1 and 3 inclusive of 1 and 3

}


function getComputerChoice() {
    let computerNumber = getRandomIntegerBetween1and3()
    if (computerNumber == 1) {
        return 'rock'
    } else if (computerNumber == 2) {
        return 'paper'
    } else {
        return 'scissors'
    }
}


function playRound(playerSelection) {

    // getPlayerChoice()
    let computerSelection = getComputerChoice()

    // paper scenarios 
    if (playerSelection == 'paper' && computerSelection == 'rock') {
        
        
        
        return 'You win! Paper beats rock!'

    } else if (playerSelection == 'paper' && computerSelection == 'paper') {
        return "It's a tie! You and the computer both choose paper!"

    } else if (playerSelection == 'paper' && computerSelection == 'scissors') {
        return 'You lose! Paper loses to scissors!'

    // rock scenarios
    } else if (playerSelection == 'rock' && computerSelection == 'rock') {
        return "It's a tie! You and the computer both choose rock!"

    } else if (playerSelection == 'rock' && computerSelection == 'paper') {
        return "You lose! Rock loses to paper!"

    } else if (playerSelection == 'rock' && computerSelection == 'scissors') {
        return "You win! Rock beats scissors!"

    // scissor scenarios
    } else if (playerSelection == 'scissors' && computerSelection == 'rock') {
        return "You lose! Scissors loses to rock!"

    } else if (playerSelection == 'scissors' && computerSelection == 'paper') {
        return "You win! Scissors beats paper!"

    } else if (playerSelection == 'scissors' && computerSelection == 'scissors') {
        return "It's a tie! You and the computer both choose scissors!"
    }



}




function game() {
    
    let humanScore = 0
    let computerScore = 0
    
    for (let i = 0; i < 5; i++) {
        
        let gameResult = playRound()
        console.log(gameResult)

        if (gameResult.includes('win')) {
            humanScore = humanScore + 1

        } else if (gameResult.includes('lose')) {
            computerScore = computerScore + 1
        }


    }
    
    console.log("Wow! the final score was " + humanScore + " to " + computerScore)
}




/* 

we want someone to click on the image, that is their selection


*/

// let content = document.getElementsByClassName('content')
// let title = document.getElementsByClassName('title')


// let rock = document.getElementsByClassName('rock')
// let paper = document.getElementsByClassName('paper')
// let scissors = document.getElementsByClassName('paper')

let rock = document.getElementById('rock')
let paper = document.getElementById('paper')
let scissors = document.getElementById('scissors')


playerSelection = ''



rock.addEventListener('click', function(){

    playerSelection = 'rock'

    // need to create somewhere for the string to live - 

    let outcomeTextHolder = document.createElement('p')

    let outcomeText = playRound(playerSelection)

    let outcome = document.getElementById('outcome')

    // following to make sure that the outcomeText works
    // console.log(outcomeText)

    // now we need to put it into the outcomeTextHolder

    outcomeTextHolder.textContent = outcomeText

    // following is to make sure that the outcomeTextHolder also 
    // correctly holds the text
    // console.log(outComeTextHolder)

    // now we need to add the outcomeTextHolder to the outcome Div

    outcome.prepend(outcomeTextHolder)

    // now we need to clear the text away somehow

    
})

paper.addEventListener('click', function(){

    playerSelection = 'paper'

    // need to create somewhere for the string to live - 

    let outcomeTextHolder = document.createElement('p')

    let outcomeText = playRound(playerSelection)

    let outcome = document.getElementById('outcome')

    // following to make sure that the outcomeText works
    // console.log(outcomeText)

    // now we need to put it into the outcomeTextHolder

    outcomeTextHolder.textContent = outcomeText

    // following is to make sure that the outcomeTextHolder also 
    // correctly holds the text
    // console.log(outComeTextHolder)

    // now we need to add the outcomeTextHolder to the outcome Div

    outcome.prepend(outcomeTextHolder)

    // now we need to clear the text away somehow

    
})

scissors.addEventListener('click', function(){

    playerSelection = 'scissors'

    // need to create somewhere for the string to live - 

    let outcomeTextHolder = document.createElement('p')

    let outcomeText = playRound(playerSelection)

    let outcome = document.getElementById('outcome')

    // following to make sure that the outcomeText works
    // console.log(outcomeText)

    // now we need to put it into the outcomeTextHolder

    outcomeTextHolder.textContent = outcomeText

    // following is to make sure that the outcomeTextHolder also 
    // correctly holds the text
    // console.log(outComeTextHolder)

    // now we need to add the outcomeTextHolder to the outcome Div

    outcome.prepend(outcomeTextHolder)

    // now we need to clear the text away somehow

    
})