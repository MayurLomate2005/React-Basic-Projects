import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';

function App() {
  return (
    <div className='w-full min-h-screen bg-zinc-950'>
      <Navbar />
      {/* Add padding-top to avoid content hiding behind fixed navbar */}
      <div className="pt-20 px-4 text-white">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </div>
    </div>
  );
}


export default App;
