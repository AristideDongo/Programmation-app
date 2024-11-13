import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';  
import LanguageSelection from '../components/LanguageSelection';

function Home() {
  const [showPopup, setShowPopup] = useState(true);
  const [playerName, setPlayerName] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const storedName = localStorage.getItem('playerName');
    if (storedName) {
      setPlayerName(storedName);
    }
  }, []);

  const handleLanguageSelect = (language) => {
    if (playerName.trim() === '') {
      alert("Entrer un Nom avant de jouer");
      return;
    }

    switch(language) {
      case 'HTML':
        navigate('/quiz-html');
        break;
      case 'CSS':
        navigate('/quiz-css');
        break;
      case 'JavaScript':
        navigate('/quiz-js');
        break;
      default:
        break;
    }
  };

  const handleNameChange = (e) => {
    setPlayerName(e.target.value);
  };

  const handleStartGame = () => {
    if (playerName.trim() === '') {
      alert('Veuillez entrer un nom valide.');
      return;
    }
    localStorage.setItem('playerName', playerName);
    setShowPopup(false);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleStartGame();
    }
  }

  return (
    <div className="flex justify-center items-center min-h-screen">
      {/* Popup Modal */}
      {showPopup && (
        <motion.div 
          className="fixed inset-0 bg-black bg-opacity-5 flex justify-center items-center z-50 px-4 sm:px-8"
          initial={{ opacity: 0, y: -50 }}  
          animate={{ opacity: 1, y: 0 }}        
          exit={{ opacity: 0, y: 50 }}      
          transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }} 
        >
          <div className="bg-[#4CC9FE] p-8 sm:p-10 rounded-tr-2xl rounded-bl-2xl border-[3px] border-[#FFFECB] shadow-lg w-full max-w-md md:max-w-lg lg:max-w-xl">
            <h2 className="text-3xl sm:text-4xl text-black font-bold mb-4 text-center">Bienvenue !</h2>
            <p className="mb-6 text-lg sm:text-xl font-semibold text-center">Entrez votre nom pour commencer.</p>
            <input
              type="text"
              value={playerName}
              onChange={handleNameChange}
              onKeyPress={handleKeyPress}
              placeholder="Nom du joueur"
              className="border bg-black text-[#FBFBFB] p-3 w-full mb-4 rounded-lg text-base sm:text-lg focus:outline-none focus:ring-2 focus:ring-black"
            />
            <button 
              onClick={handleStartGame}
              className="p-3 bg-green-600 text-white w-full rounded-tl-xl rounded-br-xl hover:bg-green-700 border-4 border-black transition duration-300"
            >
              Commencer
            </button>
          </div>
        </motion.div>
      )}

      {/* Main content */}
      {!showPopup && (
        <div>
          <LanguageSelection onSelectLanguage={handleLanguageSelect} />
        </div>
      )}
    </div>
  );
}

export default Home;
