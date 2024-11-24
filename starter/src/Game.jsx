import React from "react";

function Game() {
  return (
    <div className="game-area">
      <header className="game-header">
        <h2 className="game-header-title">Guess a number between 1 and 100</h2>
        <button>New Game</button>
      </header>

      <section className="game-body">
        <h2 className="u-center">
          {`a new number has been generated`} <br /> {`10 trials remaining`}{" "}
          <br /> {`Good luck!`}
        </h2>

        <form className="game-form">
          <div className="form-input-wrapper">
            <input className="game-input" type="number" placeholder="00" />
          </div>
        </form>
        <h2 className="u-marg-bt">35 is too high</h2>
        <button>Guess</button>
      </section>
    </div>
  );
}

export default Game;
