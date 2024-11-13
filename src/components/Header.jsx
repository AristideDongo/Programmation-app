import React from 'react';
import { FaReact, FaJs, FaJava, FaPython, FaHtml5, FaCss3 } from 'react-icons/fa';
import { SiFlutter } from "react-icons/si";
import "../App.css"

const Header = () => {
  return (
    <header className="bg-primary text-white p-6 flex flex-col items-center justify-center h-40 md:mx-20 rounded-b-3xl relative overflow-hidden">
      <h1 className="text-3xl md:text-4xl font-bold mb-2 text-center">
        C'est l'heure du défi !
      </h1>
      <p className="text-lg md:text-2xl mb-4 text-center">
        Rejoins le défi, teste tes connaissances et deviens un vrai ninja du code !
      </p>

      {/* Icônes de programmation avec animation */}
      <div className="flex space-x-2 md:space-x-4 absolute bottom-0 animate-scroll overflow-hidden">
        <FaReact className="text-5xl text-blue-400" />
        <FaJs className="text-5xl text-yellow-400" />
        <FaJava className="text-5xl text-red-600" />
        <FaPython className="text-5xl text-blue-300" />
        <FaHtml5 className="text-5xl text-orange-500" />
        <FaCss3 className="text-5xl text-blue-500" />
        <SiFlutter className="text-5xl text-blue-600" />
      </div>
    </header>
  );
};

export default Header;
