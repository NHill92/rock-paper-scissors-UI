const choices = ['Rock', 'Paper', 'Scissors'];
const buttons = document.querySelectorAll('button');
const playButtons = document.getElementsByClassName('play-btn');
let playerScore = 0;
let computerScore = 0;

buttons.forEach(button => addEventListener('click', game));

function computerPlay() {
    return choices[Math.floor(Math.random() * choices.length)];
}

function game(e) {    
    const computerChoice = computerPlay();
    const btnPressed = e.target.id.charAt(0).toUpperCase() + e.target.id.slice(1);

    if (btnPressed === computerChoice) {
        document.getElementById('content').innerHTML = 'It\'s a draw!';
    } else if (btnPressed === 'Reset-btn') {
        playerScore = 0;
        computerScore = 0;
        document.getElementById('player-score').innerHTML = playerScore;
        document.getElementById('computer-score').innerHTML = computerScore;
        document.getElementById('content').innerHTML = '';
        for (let i = 0; i < playButtons.length; i++) {
            playButtons[i].disabled = false;
        }
    } else if ((btnPressed === 'Rock' && computerChoice === 'Scissors') || (btnPressed === 'Paper' && computerChoice === 'Rock') || (btnPressed === 'Scissors' && computerChoice === 'Paper')) {
        document.getElementById('content').innerHTML = 'You win! ' + btnPressed + ' beats ' + computerChoice + '.';
        playerScore++;
        document.getElementById('player-score').innerHTML = playerScore;
    } else {
        document.getElementById('content').innerHTML = 'You lose... ' + computerChoice + ' beats ' + btnPressed + '.';
        computerScore++;
        document.getElementById('computer-score').innerHTML = computerScore;
    }

    if (playerScore === 5 || computerScore === 5) {
        
        for (let i = 0; i < playButtons.length; i++) {
            playButtons[i].disabled = true;
        }

        if (playerScore > computerScore) {
            document.getElementById('content').innerHTML = 'YOU WIN!!!';
        } else {
            document.getElementById('content').innerHTML = 'You lost... Play Again!'
        }
    }
}

// const buttons = document.querySelectorAll('button');
// buttons.forEach(button => addEventListener('click', game));