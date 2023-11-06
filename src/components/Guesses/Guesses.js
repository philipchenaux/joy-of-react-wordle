import React from 'react';
import {NUM_OF_GUESSES_ALLOWED} from "../../constants";
import Guess from "../Guess/Guess"
import {range} from "../../utils"

function Guesses({guesses, answer}) {
  return <ul className="guess-results">{
    range(NUM_OF_GUESSES_ALLOWED).map((i) =>
      <p className="guess" key={i} >
        { i < guesses.length ?
          <Guess value={guesses[i]} answer={answer}/>
         : <Guess />}
      </p>
    )
  }</ul>;
}

export default Guesses;