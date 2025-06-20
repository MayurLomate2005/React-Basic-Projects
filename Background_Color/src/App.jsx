import { useState } from 'react';
import './App.css';

function App() {
  const [color, setColor] = useState("black");

  return (
    <div className="w-full h-screen flex flex-col items-center justify-center" style={{ backgroundColor: color }}>
      <div className="space-x-4">
        <button
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => setColor("red")}
        >
          Red
        </button>

        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => setColor("blue")}
        >
          Blue
        </button>

        <button
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => setColor("green")}
        >
          Green
        </button>
      </div>
    </div>
  );
}

export default App;
