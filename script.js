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
            return ("Computer played rock. its a tie.")
        };
        if (computerSelection===1){
            winner = "computer";
            return ("Computer played paper. you lost.")
        };
        if (computerSelection===2){
            winner= "player";
            return ("Computer played scissors. You won")
        };
    }else if (playerSelection==="paper"){
        if (computerSelection===0){
            winner= "player";
            return ("Computer played rock. You won.")
        };
        if (computerSelection===1){
            winner = "tie";
            return ("Computer played paper. Its a tie.")
        };
        if (computerSelection===2){
            winner = "computer";

            return ("Computer played scissors. You lost")
        };
    }else if (playerSelection==="scissors"){
        if (computerSelection===0){
            winner = "computer";
            return ("Computer played rock. You lost.")
        };
        if (computerSelection===1){
            winner= "player";
            return ("Computer played paper. You won.")
        };
        if (computerSelection===2){
            winner = "tie";
            return ("Computer played scissors. Its a tie.")
        };
    };
};

let buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        playerSelection = button.id;
        (playRound(playerSelection, computerPlay()))
    })
})