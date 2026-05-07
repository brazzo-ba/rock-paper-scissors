console.log("Hello js");

let humanSelection = '';

let roundCount = 0; // ✅ ADD THIS

let choiceOne = document.querySelector(".rock");
let choiceTwo = document.querySelector(".paper");
let choiceThree = document.querySelector(".scissors");

choiceOne.addEventListener('click', () => {
    getHumanChoice("rock");
});

choiceTwo.addEventListener('click', () => {
    getHumanChoice("paper");
});

choiceThree.addEventListener('click', () => {
    getHumanChoice("scissors");
});

function getHumanChoice(choice) {
    humanSelection = choice;
}

function getComputerChoice(){
    let math = Math.random();
    if(math <= 0.3) {
        return 'rock';
    } else if(math > 0.3 && math <= 0.6) {
        return 'paper';
    } else {
        return 'scissors';
    }
}

let computerScore = 0;
let humanScore = 0;

let playBtn = document.querySelector('.play');

playBtn.addEventListener('click', () => {

    // ✅ STOP GAME AFTER 5 ROUNDS
    if (roundCount >= 5) return;

    let computerSelection = getComputerChoice();

    const body = document.body;

    let hSel = document.createElement('p');
    hSel.textContent = humanSelection;
    body.appendChild(hSel);

    let cSel = document.createElement('p');
    cSel.textContent = computerSelection;
    body.appendChild(cSel);

    function playRound(humanChoice, computerChoice) {

        if (humanChoice === computerChoice) return 'Tie!';

        if (
            (humanChoice === 'rock' && computerChoice === 'scissors') ||
            (humanChoice === 'paper' && computerChoice === 'rock') ||
            (humanChoice === 'scissors' && computerChoice === 'paper')
        ) {
            humanScore++;
            return 'You win!';
        }

        computerScore++;
        return 'You lose!';
    }

    playRound(humanSelection, computerSelection);

    let score = document.createElement('p');
    score.textContent = `Human: ${humanScore} | Computer: ${computerScore}`;
    body.appendChild(score);

    roundCount++; // ✅ ADD ROUND COUNT

    console.log(humanScore, computerScore, roundCount);

    // ✅ END GAME AFTER 5 ROUNDS
    if (roundCount === 5) {
        let scores = document.createElement('p');

        if (humanScore > computerScore) {
            scores.textContent = "ENDE!! You win the game!";
        } else if (computerScore > humanScore) {
            scores.textContent = "ENDE!! Computer wins the game!";
        } else {
            scores.textContent = "ENDE!! It's a tie!";
        }

        body.appendChild(scores);
    }

});