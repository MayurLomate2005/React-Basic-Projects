import React, { useState } from 'react';

const Body = () => {
  const [number, setNumber] = useState(0);

  const incMe = () => {
    setNumber(number + 1);
  };

  const decMe = () => {
    setNumber(number - 1);
  };
  const Reset = ()=>{
    setNumber(0);
  }

  return (
    <>
      <button type="button" className="btn" onClick={incMe}>
        Increase Me
      </button>

      <button
        type="button"
        className="btn"
        onClick={decMe}
        disabled={number === 0} // ✅ disable button if number is 0
      >
        Decrease Me
      </button>

      <button type="button" className="btn" onClick={Reset}>
        Reset
      </button>

      <p>{number}</p>
    </>
  );
};

export default Body;
