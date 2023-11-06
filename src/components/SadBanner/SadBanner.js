import React from 'react';
import Banner from "../Banner";

function SadBanner({answer, restartGame}) {
  return <Banner type="sad" restartGame={restartGame}>
    <p>Sorry, the correct answer is <strong>{answer}</strong>.</p>
  </Banner>
}

export default SadBanner;
