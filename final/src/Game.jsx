import React, { useState } from "react";
import { generateRandomNumber } from "./utils";

function Game() {
  const [guessButtonDisabled, setGuessButtonDisabled] = useState(true);
  const [inputReadOnly, setInputReadOnly] = useState(true);
  const [newGameButtonDisabled, setNewGameButtonDisabled] = useState(false);
  const [secretNumber, setSecretNumber] = useState(null);
  const [numTrials, setNumTrials] = useState(0);
  const [playerGuess, setPlayerGuess] = useState("");
  const [feedback, setFeedback] = useState("");

  function handleNewGame() {
    setGuessButtonDisabled(false);
    setInputReadOnly(false);
    setNewGameButtonDisabled(true);
    setSecretNumber(generateRandomNumber(100))
    setNumTrials(10);
    setFeedback("");
    setPlayerGuess("");
  }

  function punishPlayer() {
    setNumTrials(numTrials-1)
    if (numTrials === 1) {
      setFeedback(`You loose! The secret number was ${secretNumber}! You scored ${numTrials*10}%`);
      setInputReadOnly(true);
      setGuessButtonDisabled(true);
      setNewGameButtonDisabled(false);
    }
  }

  function handleGuess() {
    if (+playerGuess === secretNumber) {
      setFeedback(`You won! The secret number was ${secretNumber}`)
    } else if (+playerGuess > secretNumber) {
      setFeedback(`${playerGuess} is too high`)
      punishPlayer()
    } else if (+playerGuess < secretNumber) {
      setFeedback(`${playerGuess} is too low`)
      punishPlayer();
    }
  }
  return (
    <div className="game-area">
      <header className="game-header">
        <h2 className="game-header-title">Guess a number between 1 and 100</h2>
        <button onClick={handleNewGame} disabled={newGameButtonDisabled}>New Game</button>
      </header>

      <section className="game-body">
        <h2 className="u-center">
         {numTrials > 0 && `${numTrials} trials remaining.`}
        </h2>

        <form className="game-form">
          <div className="form-input-wrapper">
            <input className="game-input" type="number" placeholder="00" readOnly={inputReadOnly} value={playerGuess} onChange={(e) => setPlayerGuess(e.target.value)} />
          </div>
        </form>
        <h2 className="u-marg-bt">{feedback}</h2>
        <button disabled={guessButtonDisabled} onClick={handleGuess}>Guess</button>
      </section>
    </div>
  );
}

export default Game;
