import React from 'react';
import './Loader.css';

const Loader = () => {
  const strands = [];
  
  for(let i = 0; i < 15; i++){
    strands.push(
      <div key={i} className="strand">
        <div className="top" style={{ animationDelay: `${i * -0.2}s` }}></div>
        <div className="bottom" style={{ animationDelay: `${-1.5 - (i * 0.2)}s` }}></div>
      </div>
    );
  }

  return (
    <div className='loader-body'>
      {strands}
    </div>
  );
}

export default Loader;
