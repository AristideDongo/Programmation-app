import React from 'react';
import { useNavigate } from 'react-router-dom';

function ScorePage({ score, totalQuestions }) {
    const navigate = useNavigate();

  return (
    <div>
      <h2>Quiz terminé !</h2>
      <p>Votre score est de {score} sur {totalQuestions}</p>
      <button onClick={() => navigate("/")}>Recommencer le quiz</button>
    </div>
  );
}

export default ScorePage;
