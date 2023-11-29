function getComputerChoiche(){
    let options = ["rock", "paper", "scissors"]
    let choice = Math.floor(Math.random() * options.length)
    return options[choice]
}

function round(computerChoiche, playerSelection){
    playerSelection = playerSelection.toLowerCase()

    if(playerSelection == "rock"){
        if(computerChoiche == "paper"){
            return "You lose, paper beats rock!"
        }
        else if(computerChoiche == "scissors"){
            return "You win, rock beats scissors!"
        }
        else{
            return "It's a tie!!!"
        }
    }

    else if(playerSelection == "paper"){
        if(computerChoiche == "scissors"){
            return "You lose, scissors beat paper!"
        }
        else if(computerChoiche == "rock"){
            return "You win, paper beats rock!"
        }
        else{
            return "It's a tie!!!"
        }
    }

    else if(playerSelection == "scissors"){
        if(computerChoiche == "rock"){
            return "You lose, rock beats scissors!"
        }
        else if(computerChoiche == "rock"){
            return "You win, scissors beat paper!"
        }
        else{
            return "It's a tie!!!"
        }
    }

    else{
        return "You have to choose one of these options: Rock, Paper or Scissors"
    }
}

function game(){
    let win = 0
    let lose = 0
    for(let i = 0; i<5; i++){
        let playerSelection = prompt("Choose between Rock, Paper or Scissors:")
        let computerChoice = getComputerChoiche()
        console.log("The computer plays:")
        console.log(computerChoice)
        let result = round(computerChoice, playerSelection)
        console.log(result)

        /** Now we count the wins and loses */
        
        if(result.includes("win")){
            win++
        }
        else if(result.includes("lose")){
            lose++
        }
    }
    if(win>lose){
        return "You have won the game."
    }
    else if(win<lose){
        return "You have lost the game."
    }else{
        return "You tied."
    }
}

let result = game()
console.log(result)