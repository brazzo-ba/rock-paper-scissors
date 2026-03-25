        console.log("Hello js");


function getComputerChoice(){
    let math = Math.random(1);
   if(math <= 0.3) {
        return 'Rock';
}  else if(math > 0.3 && math <= 0.6) {
    return 'Paper';
}
else if(math > 0.6) {
    return 'Scissors';

}
}
function getHumanChoice() {
    let choice = prompt();
    return choice;
}

//console.log(getHumanChoice());

let computerScore = 0;
let humanScore = 0;

/*   if(math <= 0.3) {
        return 'Rock';
}  else if(math > 0.3 && math <= 0.6) {
    return 'Paper';
}
else if(math > 0.6) {
    return 'Scissors';

*/
for(let r = 1; r < 6; r++) {
function playRound(humanChoice, computerChoice) {


    if (humanChoice === computerChoice) return 'Tie!';

    if (
        (humanChoice === 'rock' && computerChoice === 'Scissors') ||
        (humanChoice === 'paper' && computerChoice === 'Rock') ||
        (humanChoice === 'scissors' && computerChoice === 'Paper')
    ) {
        return 'You win!';
    }

    return 'You lose!';
}


let humanSelection = getHumanChoice();
let computerSelection = getComputerChoice();
console.log(humanSelection)
console.log(computerSelection)

console.log('--------------');
console.log('Round ' + r);
console.log('-------------');


playRound(humanSelection, computerSelection);

console.log(playRound(humanSelection, computerSelection));



}