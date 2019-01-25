const choices = ['Rock', 'Paper', 'Scissors'];
const buttons = document.querySelectorAll('button');
const playButtons = document.getElementsByClassName('play-btn');
let playerScore = 0;
let computerScore = 0;
let playerChoice = '';
let computerChoice = '';

// buttons.forEach(buttons => addEventListener('click', game));

document.addEventListener('click', function (e) {
    if (e.target.matches('.play-btn')) {
        playerChoice = e.target.id.charAt(0).toUpperCase() + e.target.id.slice(1);

        playRound(computerPlay(), playerChoice);

        if (checkScore()) {
            getWinner();
            disableBtn();
        }
    }
    if (e.target.matches('#reset-btn')) {
        playerScore = 0;
        computerScore = 0;
        document.getElementById('player-score').innerHTML = playerScore;
        document.getElementById('computer-score').innerHTML = computerScore;
        document.getElementById('content').innerHTML = '';
        enableBtn();
    }
});

function computerPlay() {
    return choices[Math.floor(Math.random() * choices.length)];
}

function disableBtn() {
    for (let i = 0; i < playButtons.length; i++) {
        playButtons[i].disabled = true;
    }
}

function enableBtn() {
    for (let i = 0; i < playButtons.length; i++) {
        playButtons[i].disabled = false;
    }
}

function getWinner() {
    if (playerScore > computerScore) {
        document.getElementById('content').innerHTML = 'YOU WIN!!!';
    } else {
        document.getElementById('content').innerHTML = 'You lost... Play Again!';
    }
}

function playRound(computerChoice, playerChoice) {
    if (playerChoice === computerChoice) {
        document.getElementById('content').innerHTML = 'It\'s a draw!';
    } else if ((playerChoice === 'Rock' && computerChoice === 'Scissors') || (playerChoice === 'Paper' && computerChoice === 'Rock') || (playerChoice === 'Scissors' && computerChoice === 'Paper')) {
        document.getElementById('content').innerHTML = 'You win! ' + playerChoice + ' beats ' + computerChoice + '.';
        playerScore++;
        document.getElementById('player-score').innerHTML = playerScore;
    } else {
        document.getElementById('content').innerHTML = 'You lose... ' + computerChoice + ' beats ' + playerChoice + '.';
        computerScore++;
        document.getElementById('computer-score').innerHTML = computerScore;
    }
}

function checkScore() {
    return playerScore === 5 || computerScore === 5;
}