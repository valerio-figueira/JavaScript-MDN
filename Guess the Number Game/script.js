let randomNumber = Math.floor(Math.random() * 100) + 1;

const guesses = document.querySelector('.guesses');
const lastResult = document.querySelector('.lastResult');
const lowOrHigh = document.querySelector('.lowOrHigh');
const guessSubmit = document.querySelector('.guessSubmit');
const guessField = document.querySelector('.guessField');
const main = document.querySelector('main');

let guessCount = 1;
let resetButton = document.createElement('input');
resetButton.setAttribute('type', 'button');
resetButton.setAttribute('value', 'Start new game');
resetButton.style.display = 'block';
resetButton.style.padding = '8px';
resetButton.style.margin = 'auto';
lastResult.style.padding = '4px';


guessSubmit.addEventListener('click', function(){
    const x = Number(guessField.value);

    if(guessCount === 1){
        guesses.textContent = 'Previous guesses: ' + x + ' ';
    } else {
        guesses.textContent += x + ' ';
    }

    if(x === randomNumber){
        lastResult.textContent = 'Congratulations! You got it right!';
        lastResult.style.background = 'green';
        gameOver();
    } else if(guessCount === 5){
        lastResult.textContent = '!!GAME OVER!!';
        lastResult.style.background = 'crimson';
        gameOver();
    } else {
        if(x > randomNumber){
            lastResult.textContent = 'Wrong!';
            lastResult.style.background = 'crimson';
            lowOrHigh.textContent = 'Last guess was too high!';
        } else if(x < randomNumber){
            lastResult.textContent = 'Wrong!';
            lastResult.style.background = 'crimson';
            lowOrHigh.textContent = 'Last guess was too low!';
        }

    }
    guessCount++;
    guessField.value = null;
    guessField.focus();
})

function gameOver(){
    guessSubmit.disabled = true;
    guessField.disabled = true;
    lowOrHigh.textContent = null;
    main.appendChild(resetButton);
    resetButton.addEventListener('click', resetGame);
}

function resetGame(){
    lastResult.style.padding = '0';
    guessCount = 1;
    
    const resetParas = document.querySelectorAll('.resultParas p');

    for(const resetPara of resetParas){
        resetPara.textContent = null;
    }

    resetButton.parentNode.removeChild(resetButton);

    guessSubmit.disabled = false;
    guessField.disabled = false;
    guessField.value = null;
    guessField.focus();

    randomNumber = Math.floor(Math.random() * 100) + 1;
}