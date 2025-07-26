import React from 'react';
import {Link} from 'react-router-dom';

function Navbar() {
    return (
        <div className="w-full fixed top-0 left-0 z-50 bg-zinc-900 py-6 flex justify-center h-[50px] ">
            <div className="w-[100%] max-w-5xl flex justify-between items-center text-white rounded-3xl px-10 py-4 shadow-lg">

                {/* Logo */}
                <div className="text-2xl font-bold tracking-wide ">
                    CampusPulse
                </div>

                {/* Nav Items */}
                <ul className="flex gap-[90px] text-lg font-medium">
                    <li><Link to="/" className="hover:text-zinc-300 cursor-pointer transition">Home</Link></li>
                    <li><Link to="/about" className="hover:text-zinc-300 cursor-pointer transition">About</Link></li>
                    <li><Link to="/contact" className="hover:text-zinc-300 cursor-pointer transition">Contact</Link></li>
                </ul>


            </div>
        </div>
    );
}

export default Navbar;
