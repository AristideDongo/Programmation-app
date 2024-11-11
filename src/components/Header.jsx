import React from 'react';

const Header = () => {
  return (
    <header className="bg-blue-600 text-white p-6 flex flex-col items-center justify-center h-40 mx-20 rounded-b-3xl">
      <h1 className="text-4xl font-bold mb-2">Quiz Programmation</h1>
      <p className="text-lg mb-4">Testez vos connaissances en programmation avec notre quiz interactif !</p>
    </header>
  );
};

export default Header;
