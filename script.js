document.getElementById('newGameBtn').addEventListener('click', () => {
    alert("Starting a new game!");
    //add game-start logic
});

document.getElementById('continueBtn').addEventListener('click', () => {
    alert("Contining the game...");
    // add game-resume logic
})

document.getElementById('quitBtn').addEventListener('click', () => {
    alert("Quitting the game...");
    window.close(); // Close the window
})