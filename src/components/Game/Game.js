import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import {NUM_OF_GUESSES_ALLOWED} from "../../constants";
import GuessInput from "../GuessInput";
import Guesses from "../Guesses";
import HappyBanner from "../HappyBanner";
import SadBanner from "../SadBanner";
import Keyboard from "../Keyboard";

function Game() {
  const [answer, setAnswer] = React.useState(() => sample(WORDS));
  const [guesses, setGuesses] = React.useState([])
  const [gameState, setGameState] = React.useState('running')
  const [guessedLetters, setGuessedLetters] = React.useState([])
  console.log({answer})

  const updateGuessedLetters = (checkedGuess) => {
      const newGuessedLetters = {...guessedLetters}
      checkedGuess.forEach(({letter, status}) => {
          if (guessedLetters[letter] && ((guessedLetters[letter] === 'misplaced' && status === 'incorrect') || (guessedLetters[letter] === 'correct' && status !== 'correct'))) {
              newGuessedLetters[letter] = guessedLetters[letter]
          }
          else {
              newGuessedLetters[letter] = status
          }})

    setGuessedLetters(newGuessedLetters)
  }
  const addCurrentGuess  = (guess) => {

      const newGuess = {'label': guess, 'key': crypto.randomUUID()}
      const newGuesses = [...guesses, newGuess]
      if (guess === answer) {
          setGameState('won')
      }
      else if (newGuesses.length === NUM_OF_GUESSES_ALLOWED) {
        setGameState('lost');
      }

      setGuesses(newGuesses)
  }

  const restartGame = () => {
      setAnswer(() => sample(WORDS))
      setGuesses([])
      setGameState('running')
      setGuessedLetters([])
  }



  return (
      <>
          {gameState === 'won' && <HappyBanner numGuesses={guesses.length} restartGame={restartGame}/> }
          {gameState === 'lost'  && <SadBanner answer={answer} restartGame={restartGame}/> }
              <>
                <Guesses guesses={guesses} answer={answer} />
                <GuessInput addCurrentGuess={addCurrentGuess} gameState={gameState} updateGuessedLetters={updateGuessedLetters} answer={answer}/>
                <Keyboard guessedLetters={guessedLetters}/>
              </>
      </>
);
}

export default Game;
