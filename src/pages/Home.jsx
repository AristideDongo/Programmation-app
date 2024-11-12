import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';  
import LanguageSelection from '../components/LanguageSelection';

function Home() {
  const [showPopup, setShowPopup] = useState(true);
  const [playerName, setPlayerName] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const storedName = localStorage.setItem('playerName', playerName);
    if (storedName) {
      setPlayerName(storedName);
    }
  }, [playerName]);

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

  const handlekey = (e) => {
    if (e.key === 'Enter') {
      handleStartGame();
    }
  }

  return (
    <div>
      {/* Popup Modal */}
      {showPopup && (
        <motion.div 
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
          initial={{ y: '-100%' }}  
          animate={{ y: 0 }}        
          exit={{ y: '100%' }}      
          transition={{ duration: 1 }}  
        >
          <div className="bg-white p-10 rounded-lg shadow-lg w-full max-w-lg">
            <h2 className="text-4xl text-black font-bold mb-4 text-center">Bienvenue !</h2>
            <p className="mb-6 text-xl font-semibold text-center">Entrez votre nom pour commencer.</p>
            <input
              type="text"
              value={playerName}
              onChange={handleNameChange}
              onKeyPress={handlekey}
              placeholder="Nom du joueur"
              className="border p-3 w-full mb-4 rounded-lg text-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button 
              onClick={handleStartGame}
              className="p-3 bg-blue-600 text-white w-full rounded-lg hover:bg-blue-700 focus:ring-2 focus:ring-blue-500"
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
