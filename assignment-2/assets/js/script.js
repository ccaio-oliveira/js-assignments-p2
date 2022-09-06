const playerScore = document.querySelector('#playerPoint');
const computerScore = document.querySelector('#computerPoint');
const btnRock = document.querySelector('#btnRock');
const btnPaper = document.querySelector('#btnPaper');
const btnScissors = document.querySelector('#btnScissors');
const divChoice = document.querySelector('#choice');
const divResult = document.querySelector('#result');
const allBtn = document.querySelectorAll('.btn');

function computerPlay() {
    const computerOption = ['Rock', 'Paper', 'Scissors'];
    const option = Math.floor(Math.random() * (3 - 0) + 0);
    return computerOption[option];
}

function playRound(playerSelection, computerSelection) {
    divChoice.innerHTML = `You choose ${playerSelection} and the Computer choose ${computerSelection}`;
    
    if(playerSelection === computerSelection){
        divResult.innerHTML = `It's a draw!`;
        divResult.style.color = '#000';
    } else {
        if(
            playerSelection === 'Rock' && computerSelection === 'Scissors' ||
            playerSelection === 'Paper' && computerSelection === 'Rock' ||
            playerSelection === 'Scissors' && computerSelection === 'Paper'
        ){
            divResult.innerHTML = 'You Win!!!';
            divResult.style.color = 'green';

            playerPoints += 1;
            playerScore.innerHTML = playerPoints;
        } else {
            divResult.innerHTML = 'You loose!';
            divResult.style.color = 'red';

            computerPoints += 1;
            computerScore.innerHTML = computerPoints;
        }
    }
}

let playerPoints = 0;
let computerPoints = 0;

function game(playerChoice) {
    const computer = computerPlay();
    return playRound(playerChoice, computer);
}

function stopGame(){
    if(playerPoints === 5 || computerPoints === 5) {
        for(let button of allBtn){
            button.disabled = true;
        }
    }
}

btnRock.onclick = () => {
    game('Rock');
    stopGame();   
}

btnPaper.onclick = () => {
    game('Paper');
    stopGame();
}

btnScissors.onclick = () => {
    game('Scissors');
    stopGame();
}