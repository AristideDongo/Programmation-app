import React from 'react';

const Difficulty = ({ handleLevelSelection }) => {
  return (
    <div className="max-w-lg mx-auto p-4 md:p-6 mt-5 bg-white shadow-lg rounded-lg overflow-auto">
      <h1 className="text-xl md:text-2xl font-bold text-center text-black">Choisissez votre niveau</h1>
      <div className="space-y-3 md:space-y-4 mt-4 md:mt-6 text-white font-bold text-lg md:text-xl">
        <button
          onClick={() => handleLevelSelection("Facile")}
          className="w-full py-2 md:py-3 px-4 bg-green-500 hover:bg-green-600 transition duration-300 rounded-lg"
        >
          Facile
        </button>
        <button
          onClick={() => handleLevelSelection("Moyen")}
          className="w-full py-2 md:py-3 px-4 bg-yellow-500 hover:bg-yellow-600 transition duration-300 rounded-lg"
        >
          Moyen
        </button>
        <button
          onClick={() => handleLevelSelection("Difficile")}
          className="w-full py-2 md:py-3 px-4 bg-orange-500 hover:bg-orange-600 transition duration-300 rounded-lg"
        >
          Difficile
        </button>
        <button
          onClick={() => handleLevelSelection("Très Difficile")}
          className="w-full py-2 md:py-3 px-4 bg-red-500 hover:bg-red-600 transition duration-300 rounded-lg"
        >
          Très Difficile
        </button>
        <button
          onClick={() => handleLevelSelection("Expert")}
          className="w-full py-2 md:py-3 px-4 bg-gray-900 hover:bg-black transition duration-300 rounded-lg"
        >
          Expert
        </button>
      </div>
    </div>
  );
};

export default Difficulty;
