let winner = ""
let playerCounter = 0
let computerCounter = 0



function computerPlay(){
    machine=Math.floor(Math.random()*3)
    return machine
};
function playRound(playerSelectionLower, computerSelection){
    if (playerSelectionLower==="rock"){
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
    }else if (playerSelectionLower==="paper"){
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
    }else if (playerSelectionLower==="scissors"){
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
function game(){
    for (i = 0; i < 5; i++){
        computerSelection = computerPlay();
        playerSelectionGeneral= prompt("Write your choice");
        playerSelectionLower = playerSelectionGeneral.toLowerCase();
        result = playRound(playerSelectionLower, computerSelection)

        if (winner==="tie"){
            playerCounter+=1
            computerCounter+=1

        };if(winner==="player"){
            playerCounter+=1

        };if(winner==="computer"){
            computerCounter+=1

        };
        console.log(result)

        };console.log(`The final score was ${playerCounter} points for you and ${computerCounter} points for the machine.`);
}





console.log(game())