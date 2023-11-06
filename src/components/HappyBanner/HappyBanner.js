import React from 'react';
import Banner from "../Banner";

function HappyBanner({numGuesses, restartGame}) {
  return <Banner type="happy" restartGame={restartGame}>
    <p>
      <strong>Congratulations!</strong> Got it in
      <strong>{' '}{numGuesses}{numGuesses > 1 ? " guesses" : " guess"}</strong>.
    </p>
  </Banner>
}

export default HappyBanner;
