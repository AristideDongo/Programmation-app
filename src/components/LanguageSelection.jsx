import React from 'react';
import Html from "../assets/images/formation-html.jpg";
import Css from "../assets/images/0_GpOUO1n2m49hMkbh.jpg";
import Javascript from "../assets/images/Unofficial_JavaScript_logo_2.svg.png";

function LanguageSelection({ onSelectLanguage }) {
  return (
    <div className="flex flex-col mt-8 items-center p-[100px] w-full max-w-7xl mx-auto">
      <h2 className="text-2xl font-bold mb-6">Sélectionnez un Langage de Programmation ou entre Langage de Balisage ou Style</h2>
      <div className="grid grid-cols-3 gap-6 w-full">
        <button
          onClick={() => onSelectLanguage('HTML')}
          className="relative text-orange-600 font-extrabold text-4xl rounded-lg flex items-end justify-center hover:shadow-2xl hover:shadow-orange-600 transition duration-300 overflow-hidden w-[350px] h-[350px]"
        >
          <span className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${Html})` }}></span>
          <div className="relative z-10 w-full bg-black bg-opacity-50 p-2 rounded-md">HTML</div>
        </button>
        <button
          onClick={() => onSelectLanguage('CSS')}
          className="relative text-blue-600 font-extrabold text-4xl rounded-lg flex items-end justify-center hover:shadow-2xl hover:shadow-blue-500 transition duration-300 overflow-hidden w-[350px] h-[350px]"
        >
          <span className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${Css})` }}></span>
          <div className="relative z-10 w-full bg-black bg-opacity-50 p-2 rounded-md">CSS</div>
        </button>
        <button
          onClick={() => onSelectLanguage('JavaScript')}
          className="relative text-yellow-500 font-extrabold text-4xl rounded-lg flex items-end justify-center hover:shadow-2xl hover:shadow-yellow-500 transition duration-300 overflow-hidden w-[350px] h-[350px]"
        >
          <span className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${Javascript})` }}></span>
          <div className="relative w-full z-10 bg-black bg-opacity-50 p-2 rounded-md">JAVASCRIPT</div>
        </button>
      </div>
    </div>
  );
}

export default LanguageSelection;
