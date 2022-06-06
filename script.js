function computerPlay(){
    let machine=Math.floor(Math.random()*3)
    return machine
}

let computerSelection = computerPlay()
let playerSelection = prompt("Write your choice")
//0 = rock --- 1 = paper --- 2 = scissors