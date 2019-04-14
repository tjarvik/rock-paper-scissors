
     
     let playerScore = 0;
     let computerScore = 0;
     const playerScoreDiv = document.querySelector('#player');
     const computerScoreDiv = document.querySelector('#computer');
     const roundResultDiv = document.querySelector('#round-result');
     const finalResultDiv = document.querySelector('#final-result');
     let rockButton = document.querySelector('#rock');
     let paperButton = document.querySelector('#paper');
     let scissorsButton = document.querySelector('#scissors');
     rockButton.onclick = () => playRound(1);
     paperButton.onclick = () => playRound(2);
     scissorsButton.onclick = () => playRound(3);

     function playRound (playerSelection) {
       let computerSelection = Math.ceil(Math.random() * 3);
       let difference = playerSelection - computerSelection;
       let selectionNames = ["", "Rock", "Paper", "Scissors"];
       switch (difference) {
         case 0:
           roundResultDiv.textContent = "Tie game!";
           break;
         case 1:
         case -2:
           playerScore++;
           playerScoreDiv.textContent = "Your score: " + playerScore;
           roundResultDiv.textContent = "You Win! " + selectionNames[playerSelection] + " beats " + selectionNames[computerSelection];
           if(playerScore == 5) {
            finish();
           }
           break;
         case 2:
         case -1:
           computerScore++;
           computerScoreDiv.textContent = "Computer score: " + computerScore;
           roundResultDiv.textContent = "You Lose! " + selectionNames[computerSelection] + " beats " + selectionNames[playerSelection];
           if(computerScore == 5) {
            finish();
           }
           break;
       }
     }
 
     function finish() {
      finalResultDiv.textContent = "Final score - You: " + playerScore + ", Computer: " + computerScore;
      rockButton.style.display = 'none';
      paperButton.style.display = 'none';
      scissorsButton.style.display = 'none';
    }
  
