class Player {
    constructor(name) {
      this.name = name;
    }
  }
  
  class GuessingGame {
    constructor(player1, player2) {
      this.player1 = player1;
      this.player2 = player2;
      this.numberToGuess = Math.floor(Math.random() * 100) + 1;
      this.maxChances = 4;
    }
  
    startGame() {
      alert("Welcome to the Guess the Number Game!\nA random number between 1 and 100 has been chosen.");
  
      for (let chance = 1; chance <= this.maxChances; chance++) {
        alert(`\nChance ${chance}:`);
  
        let guessPlayer1 = this.getPlayerGuess(this.player1);
  
        // If the user clicked "Cancel," exit the game
        if (guessPlayer1 === null) {
          alert("Game canceled. See you next time!");
          return;
        }
  
        let guessPlayer2 = this.getPlayerGuess(this.player2);
  
        // If the user clicked "Cancel," exit the game
        if (guessPlayer2 === null) {
          alert("Game canceled. See you next time!");
          return;
        }
  
        this.checkGuesses(guessPlayer1, guessPlayer2);
      }
  
      alert(`\nGame Over! The correct number was: ${this.numberToGuess}`);
    }
  
    getPlayerGuess(player) {
      let guess = prompt(`${player.name}, enter your guess:`);
  
      // If the user clicks "Cancel" in the prompt, return null
      if (guess === null) {
        return null;
      }
  
      guess = parseInt(guess);
  
      while (isNaN(guess) || guess < 1 || guess > 100) {
        guess = prompt("Invalid input. Please enter a number between 1 and 100:");
  
        // If the user clicks "Cancel" in the prompt, return null
        if (guess === null) {
          return null;
        }
  
        guess = parseInt(guess);
      }
  
      return guess;
    }
  
    checkGuesses(guessPlayer1, guessPlayer2) {
      let differencePlayer1 = Math.abs(this.numberToGuess - guessPlayer1);
      let differencePlayer2 = Math.abs(this.numberToGuess - guessPlayer2);
  
      alert(`${this.player1.name}'s guess: ${guessPlayer1}\n${this.player2.name}'s guess: ${guessPlayer2}`);
  
      if (guessPlayer1 === this.numberToGuess || guessPlayer2 === this.numberToGuess) {
        alert("Congratulations! One of you guessed the correct number.");
        location.reload();
      }
  
      if (differencePlayer1 < differencePlayer2) {
        alert(`${this.player1.name} is closer to the number.`);
      } else if (differencePlayer2 < differencePlayer1) {
        alert(`${this.player2.name} is closer to the number.`);
      } else {
        alert("It's a tie! Both players are equally close to the number.");
      }
    }
  }
  
  function startGame() {
    const player1 = new Player(document.getElementById("player1-name").value.trim());
    const player2 = new Player(document.getElementById("player2-name").value.trim());
  
    const game = new GuessingGame(player1, player2);
    game.startGame();
  }
  