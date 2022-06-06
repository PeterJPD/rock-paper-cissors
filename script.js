function computerPlay(){
    let machine=Math.floor(Math.random()*3)
    return machine
}

let computerSelection = computerPlay()
let playerSelection = prompt("Write your choice")
//0 = rock --- 1 = paper --- 2 = scissors
function playRound(playerSelection, computerSelection){
    if (playerSelection==="rock"){
        if (computerSelection===0){
            console.log("Computer played rock. its a tie.");
        };
        if (computerSelection===1){
            console.log("Computer played paper. you lost.")
        };
        if (computerSelection===2){
            console.log("Computer played scissors. You won")
        };
    }else if (playerSelection==="paper"){
        if (computerSelection===0){
            console.log("Computer played rock. You won.");
        };
        if (computerSelection===1){
            console.log("Computer played paper. Its a tie.")
        };
        if (computerSelection===2){
            console.log("Computer played scissors. You lost")
        };
    }else if (playerSelection==="scissors"){
        if (computerSelection===0){
            console.log("Computer played rock. You lost.");
        };
        if (computerSelection===1){
            console.log("Computer played paper. You won.")
        };
        if (computerSelection===2){
            console.log("Computer played scissors. Its a tie.")
        };
    };
};
playRound(playerSelection, computerSelection)