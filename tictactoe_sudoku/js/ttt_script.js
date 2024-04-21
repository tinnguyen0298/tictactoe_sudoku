/**
 * Tic-Tac-Toe Game
 */


function openForm() {
    // document.getElementById("myForm").style.display = "block";
    // for (let i = 1; i <= 9; i++) 
    // {
    //   document.getElementById(i.toString()).style.display = "none";
    // }
    var newWinDow = window.open("sdk_index.html", "Sudoku Game", "width=600,height=600");
  }

  function closeForm() {
    document.getElementById("myForm").style.display = "none";
    for (let i = 1; i <= 9; i++) 
    {
      document.getElementById(i.toString()).style.display = "table-cell";    
    }
  }
  function startGame() {
    let playerSymbol = "X";
    let gameEnded = false;
    
    let winPos = [
      [1, 2, 3], [4, 5, 6], 
      [7, 8, 9], [1, 4, 7], 
      [2, 5, 8], [3, 6, 9], 
      [1, 5, 9], [3, 5, 7]
    ];
  
    // Add event listeners to each cell
    for (let i = 1; i <= 9; i++) {
      document.getElementById(i.toString()).addEventListener("click", function() {
        // Check if cell is empty and game is not ended
        if (this.innerHTML === "" && !gameEnded) {
          // Display player symbol in cell and style it
        //   openForm()///////////////////////////////////////////////////////////////
            openForm();
            this.innerHTML = playerSymbol;
            this.classList.add(playerSymbol.toLowerCase());
          
          // Check for win
            checkWin();
          
          // Switch player symbol for next turn
            playerSymbol = playerSymbol === "X" ? "O" : "X";
        }
      });
    }
    
    // Check for win
    function checkWin() {
      for (let i = 0; i < winPos.length; i++) {
        if (
          document.getElementById(winPos[i][0]).innerHTML === playerSymbol &&
          document.getElementById(winPos[i][1]).innerHTML === playerSymbol &&
          document.getElementById(winPos[i][2]).innerHTML === playerSymbol
        ) {
          // Add win class to winning cells
          document.getElementById(winPos[i][0]).classList.add("win");
          document.getElementById(winPos[i][1]).classList.add("win");
          document.getElementById(winPos[i][2]).classList.add("win"); 
          
          // End game
          playerSymbol = playerSymbol === "X" ? "O" : "X";
          gameEnded = true;
          
          // Show winner alert
          setTimeout(function() {
            alert(playerSymbol + " wins!");
          }, 500);
        }
      }
    }
    
    // Reset game
    document.getElementById("reset").addEventListener("click", function() {
      for (let i = 1; i <= 9; i++) {
        let cell = document.getElementById(i.toString());
        cell.innerHTML = "";
        cell.classList.remove("x");
        cell.classList.remove("o");
        cell.classList.remove("win");
      }
      
      // Reset game state
      gameEnded = false;
      playerSymbol = "X";
    });
  }
  
  // Call startGame function when the page loads
  document.addEventListener("DOMContentLoaded", startGame);