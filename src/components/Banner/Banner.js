import React from 'react';

function Banner({type, children, restartGame}) {
  return <div className={`${type} banner`}>
    {children}
    <button onClick={restartGame}>restart?</button>
  </div>;
}

export default Banner;
