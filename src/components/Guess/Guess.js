import React from 'react';
import {LENGTH_OF_GUESS} from "../../constants";
import {range} from "../../utils";
import {checkGuess} from "../../game-helpers";


function Guess({value, answer}) {
  const checkedGuess = value ? checkGuess(value['label'], answer) : null;

  return range(LENGTH_OF_GUESS).map((j) => value ?
      <span className={`cell ${checkedGuess[j]['status']}`} key={j}>{value['label'][j]}</span>
      :
      <span className="cell" key={j}></span>)
}

export default Guess;
