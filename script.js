document.addEventListener('DOMContentLoaded', (event) => {
    let randomNumber = Math.floor(Math.random() * 100) + 1;
    let attempts = 3;

    const guessedInput = document.getElementById('guessedInput');
    const button = document.getElementById('Button');
    const feedbackParagraph = document.getElementById('paragraph');
    const attemptsLeft = document.getElementById('attemptsLeft');

    attemptsLeft.textContent = `Attempts left: ${attempts}`;

    button.addEventListener('click', () => {
        let userGuess = parseInt(guessedInput.value);
        
        if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
            feedbackParagraph.textContent = 'Please enter a valid number between 1 and 100.';
            feedbackParagraph.style.color = 'red';
            return;
        }

        attempts--;

        if (userGuess === randomNumber) {
            feedbackParagraph.textContent = 'Congratulations! You guessed the correct number!';
            feedbackParagraph.style.color = 'green';
            button.disabled = true;
        } else if (userGuess < randomNumber) {
            feedbackParagraph.textContent = 'Guessed number is too low, please try again.';
            feedbackParagraph.style.color = 'orange';
        } else {
            feedbackParagraph.textContent = 'Guessed number is too high, please try again.';
            feedbackParagraph.style.color = 'orange';
        }

        attemptsLeft.textContent = `Attempts left: ${attempts}`;

        if (attempts === 0 && userGuess !== randomNumber) {
            feedbackParagraph.textContent = `Better luck next time! The correct number was ${randomNumber}.`;
            feedbackParagraph.style.color = 'red';
            button.disabled = true;
        }
    });
});