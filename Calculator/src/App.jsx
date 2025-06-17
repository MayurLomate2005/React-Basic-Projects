import { useState } from 'react';
import './App.css';

function App() {
  const [input, setInput] = useState(''); // to store input and result

  // function runs when any button is clicked
  const handleClick = (value) => {
    if (value === 'AC') {
      setInput('');
    } else if (value === '=') {
      try {
        setInput(eval(input)); // calculate the result
      } catch (error) {
        setInput('Error');
      }
    } else {
      setInput(input + value); // append the value to input
    }
  };

  return (
    <div className="container">
      <h2>Simple Calculator</h2>
      <div className="screen">{input || '0'}</div>

      <div className="button-grid">
        {[
          '7', '8', '9', '/',
          '4', '5', '6', '*',
          '1', '2', '3', '-',
          '0', '.', '=', '+',
          'AC'
        ].map((btn, index) => (
          <button key={index} onClick={() => handleClick(btn)}>
            {btn}
          </button>
        ))}
      </div>
    </div>
  );
}

export default App;
