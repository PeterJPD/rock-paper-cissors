function computerPlay(){
    let machine=Math.floor(Math.random()*3)
    return machine
} 

let computerSelection = computerPlay();
let playerSelectionGeneral= prompt("Write your choice");
let playerSelectionLower = playerSelectionGeneral.toLowerCase()
//0 = rock --- 1 = paper --- 2 = scissors

function playRound(playerSelectionLower, computerSelection){
    if (playerSelectionLower==="rock"){
        if (computerSelection===0){
            return ("Computer played rock. its a tie.");
        };
        if (computerSelection===1){
            return ("Computer played paper. you lost.")
        };
        if (computerSelection===2){
            return ("Computer played scissors. You won")
        };
    }else if (playerSelectionLower==="paper"){
        if (computerSelection===0){
            return ("Computer played rock. You won.");
        };
        if (computerSelection===1){
            return ("Computer played paper. Its a tie.")
        };
        if (computerSelection===2){
            return ("Computer played scissors. You lost")
        };
    }else if (playerSelectionLower==="scissors"){
        if (computerSelection===0){
            return ("Computer played rock. You lost.");
        };
        if (computerSelection===1){
            return ("Computer played paper. You won.")
        };
        if (computerSelection===2){
            return ("Computer played scissors. Its a tie.")
        };
    };
};

function game(){
    for(let i=0; i<5; i++){
        return playRound(playerSelectionLower, computerSelection)
    }
}
