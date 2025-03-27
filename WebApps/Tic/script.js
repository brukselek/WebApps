//assign the board element to a variable(HTML DOM feature)
const board = document.getElementById('board');
//create an array of cells by selecting all elements with the class cell
const cells = document.getElementsByClassName('cell');
//create an array of players
const players = ['X', 'O'];
   //create a variable to keep track of the current player
   let currentPlayer = players[0];

let botEnabled = false;

//create a const variable that creates an h2 element.
//I define the content and style of the element
const endMessage = document.createElement('h2');
endMessage.textContent = `X's turn!`;
endMessage.style.marginTop = '30px';
endMessage.style.textAlign='center';

//displays the endMessage after the board element
board.after(endMessage);

//create an array of winning combinations
const winningCombinations = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
];

//flag to track the game status
let gameOver = false;

for(let i = 0; i < cells.length; i++){
   cells[i].addEventListener('click', () => {
      if(cells[i].textContent !== '' || gameOver){
         return;
      }
      cells[i].textContent = currentPlayer;
      if(checkWin(currentPlayer)){
         endMessage.textContent = `Game over! ${currentPlayer} wins!`;
         gameOver = true;
         return;
      }
      if(checkTie()){
         endMessage.textContent = `Game is tied!`;
         gameOver = true;
         return;
      }
      currentPlayer = (currentPlayer === players[0]) ? players[1] : players[0]
         if (botEnabled) {
            setTimeout(botMove, 500); // Small delay for realism
            return;
         }

        if(currentPlayer == players[0]) {
            endMessage.textContent= `X's turn!`;
        } else {
            endMessage.textContent= `O's turn!`;
        }     
    });
}

//a function called checkWin to check the win status of the game  
function checkWin(currentPlayer) {
   for(let i = 0; i < winningCombinations.length; i++){
      const [a, b, c] = winningCombinations[i];
      //checks if the textContent of the cells in the winning combination array is equal to the currentPlayer
      if(cells[a].textContent === currentPlayer && cells[b].textContent === currentPlayer && cells[c].textContent === currentPlayer){
         //if yes return true
         return true;
      }
   }
   //if not return false
   return false;
}

//a function called checkTie to check the draw status of the game 
function checkTie(){
   for(let i = 0; i < cells.length; i++){
      //if the board isnt filled everywhere
      if(cells[i].textContent === '')
         //theres no tie
         return false;
   }
   //else the function returns true - there is a tie
   return true;
}
function restartButton() {
   for (let i = 0; i < cells.length; i++) {
      cells[i].textContent = '';
   }
   endMessage.textContent = "X's turn!";
   currentPlayer = players[0];
   gameOver = false;  // Reset gameOver to allow new moves
   // Reset botEnabled only if switching back to human mode
   if (!botEnabled) {
      botEnabled = false;
      document.getElementById('botButton').value = "Play vs Bot"; // Reset button text
   }
}

function toggleBotMode() {
   botEnabled = !botEnabled;
   document.getElementById('botButton').value = botEnabled ? "Play vs Human" : "Play vs Bot";
   
   if (!botEnabled) {
      restartButton(); // If switching to human mode, restart the game
   } else {
      restartButton(); // Reset the game state to start fresh in bot mode
      endMessage.textContent = `X's turn!`; // Ensure X starts the game
   }
}

function botMove() {
   // If game ends, then stop the function
   if (gameOver) {
      return;
   }

   // an array of emptyCells that stores the empty cells for the bot to randomly choose from
   let emptyCells = [];

   for (let i = 0; i < cells.length; i++) {
      if (cells[i].textContent === '') {
         emptyCells.push(i);
      }
   }

   let randomIndex = Math.floor(Math.random() * emptyCells.length);
   let botChoice = emptyCells[randomIndex];

   cells[botChoice].textContent = 'O';

   if (checkWin("O")) {
      endMessage.textContent = `Game over! O wins!`;
      gameOver = true;
      return;
   }

   if (checkTie()) {
      endMessage.textContent = `Game is tied!`;
      gameOver = true;
      return;
   }

   currentPlayer = "X"; // Switch back to human player
   endMessage.textContent = `X's turn!`;
}