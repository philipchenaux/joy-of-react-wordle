import React from 'react';

const keyBoard = [
  ['Q','W','E','R','T','Y','U','I','O','P'],
  ['A','S','D','F','G','H','J','K','L'],
  ['Z','X','C','V','B','N','M']
]
function Keyboard({guessedLetters}) {
  return <div>{keyBoard.map((row, index) => {
    return <p key={index} className="guess">
      {
    row.map((letter) => {
      return <span key={letter} className={`key ${guessedLetters[letter]}`}>{letter}</span>
    })}
      </p>
  })}</div>;
}

export default Keyboard;
