let winner = ""
let playerCounter = 0
let computerCounter = 0
let playerSelection


function computerPlay(){
    machine=Math.floor(Math.random()*3)
    return machine
};

function playRound(playerSelection, computerSelection){
    if (playerSelection==="rock"){
        if (computerSelection===0){
            winner = "tie";
            playerCounter+=0
            computerCounter+=0
            return ("Computer played rock. its a tie.")
        };
        if (computerSelection===1){
            winner = "computer";
            playerCounter+=0
            computerCounter+=1
            return ("Computer played paper. you lost this round.")
        };
        if (computerSelection===2){
            winner= "player";
            playerCounter+=1
            computerCounter+=0
            return ("Computer played scissors. You won this round.")
        };
    }else if (playerSelection==="paper"){
        if (computerSelection===0){
            winner= "player";
            playerCounter+=1
            computerCounter+=0
            return ("Computer played rock. You won this round.")
        };
        if (computerSelection===1){
            winner = "tie";
            playerCounter+=0
            computerCounter+=0
            return ("Computer played paper. Its a tie.")
        };
        if (computerSelection===2){
            winner = "computer";
            playerCounter+=0
            computerCounter+=1
            return ("Computer played scissors. You lost this round.")
        };
    }else if (playerSelection==="scissors"){
        if (computerSelection===0){
            winner = "computer";
            playerCounter+=0
            computerCounter+=1
            return ("Computer played rock. You lost this round.")
        };
        if (computerSelection===1){
            winner= "player";
            playerCounter+=1
            computerCounter+=0
            return ("Computer played paper. You won this round.")
        };
        if (computerSelection===2){
            winner = "tie";
            playerCounter+=0
            computerCounter+=0
            return ("Computer played scissors. Its a tie.")
        };
    };
};

let buttons = document.querySelectorAll('button');
let results = document.querySelector('#results');
let finalResult= document.querySelector('#final-result')


buttons.forEach((button) => {
    button.addEventListener('click', function rpsGame() {
        playerSelection = button.id;
        let round = playRound(playerSelection, computerPlay())
        results.textContent = `${round} The machine score is ${computerCounter} and your score is ${playerCounter}`;
        if (playerCounter>=5){
            finalResult.textContent = "You Won!"
        }
        else if(computerCounter>=5){
            finalResult.textContent = "You loose."
        }
        
    })
    if(playerCounter>=5){
        button.removeEventListener('click', rpsGame());
    }
})
