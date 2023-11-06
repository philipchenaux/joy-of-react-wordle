import React from 'react';
import {checkGuess} from "../../game-helpers";

function GuessInput({addCurrentGuess, gameState, updateGuessedLetters, answer}) {
  const [userInput, setUserInput] = React.useState('')
  return (
    <form className="guess-input-wrapper" onSubmit={(e) => {
      e.preventDefault();
      addCurrentGuess(userInput);
      updateGuessedLetters(checkGuess(userInput, answer))
      setUserInput('')
    }}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input id="guess-input" type="text" value={userInput}
             onChange={(e) => setUserInput(e.target.value.toUpperCase())}
      pattern=".{5,5}"  required={true}  title="must be 5 characters" disabled={gameState != 'running'}/>
    </form>)
}

export default GuessInput;
