import React, { useState, useEffect } from 'react';
import ScorePage from './ScorePage';

function Quiz({ questions }) {
  const questionsPerLevel = 10; // Nombre de questions par niveau
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null); // Réponse sélectionnée
  const [isAnswerRevealed, setIsAnswerRevealed] = useState(false); // Pour savoir si la réponse correcte doit être affichée
  const [timeoutId, setTimeoutId] = useState(null); // Pour gérer le délai de 5s
  const [isAnswerSelected, setIsAnswerSelected] = useState(false); // Pour savoir si une réponse a été sélectionnée
  const [namePlayer, setNamePlayer] = useState(null) // Pour recuperer le nom du player

  const level = Math.floor(currentQuestion / questionsPerLevel) + 1; // Calcul du niveau en fonction de la question actuelle

  const handleAnswerClick = (answer) => {
    if (isAnswerSelected) return; // Si une réponse a déjà été sélectionnée, ne rien faire

    setSelectedAnswer(answer);
    setIsAnswerSelected(true); // Marquer qu'une réponse a été sélectionnée
    setIsAnswerRevealed(true);

    if (answer.isCorrect) {
      setScore(score + 1);
    }

    // Afficher la bonne réponse en vert pendant 5 secondes
    const id = setTimeout(() => {
      setIsAnswerRevealed(false);
      setCurrentQuestion(currentQuestion + 1);
    }, 3000);

    // Sauvegarder l'ID du setTimeout pour le nettoyer plus tard
    setTimeoutId(id);
  };

  const handleSkip = () => {
    // Passer à la question suivante sans changer le score
    setCurrentQuestion(currentQuestion + 1);
    setIsAnswerRevealed(false);
  };

  useEffect(() => {
    const data = localStorage.getItem("playerName")
    if (data) {
      setNamePlayer((data));
    }
  }, [])

  useEffect(() => {
    // Nettoyer le setTimeout lorsque le composant est démonté
    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [timeoutId]);

  if (currentQuestion >= questions.length) {
    return <ScorePage score={score} totalQuestions={questions.length} />;
  }

  const question = questions[currentQuestion];

  return (
    <div className="max-w-lg mx-auto p-6 mt-5 bg-white shadow-lg rounded-lg overflow-auto">
      <h1 className='text-xl text-black mb-4 font-bold'>Nom du Joueur:{namePlayer} </h1>
      <h1 className="text-2xl font-bold text-black text-center">Niveau {level}</h1>
      <h2 className='text-lg font-semibold mb-4 text-center text-gray-500'>Question {currentQuestion + 1} sur {questions.length}</h2>
      <h3 className="text-xl font-semibold mb-4 text-center text-black">{question.question}</h3>
      <div className="space-y-4">
        {question.answers.map((answer, index) => {
          let buttonColor = 'bg-blue-600 hover:bg-blue-700'; // Couleur par défaut
          if (isAnswerRevealed) {
            if (answer === selectedAnswer) {
              buttonColor = answer.isCorrect
                ? 'bg-green-500 hover:bg-green-600' // Correct => Vert
                : 'bg-red-500 hover:bg-red-600'; // Incorrect => Rouge
            } else if (answer.isCorrect) {
              buttonColor = 'bg-green-500 hover:bg-green-600'; // Bonne réponse -> Vert (affichée même si non sélectionnée)
            }
          } else if (answer === selectedAnswer) {
            buttonColor = 'bg-blue-500 hover:bg-blue-600'; // Sélectionnée mais pas encore révélée
          }

          return (
            <button
            disabled={isAnswerSelected} // Désactiver le bouton si une réponse a déjà été sélectionnée
              key={index}
              onClick={() => handleAnswerClick(answer)}
              className={`${buttonColor} w-full hover:scale-105 py-3 px-4 text-white rounded-lg transition duration-200`}
            >
              {answer.text}
            </button>
          );
        })}
      </div>
      <button
        onClick={handleSkip}
        className="w-full mt-4 py-3 px-4 bg-red-600 hover:bg-transparent text-white hover:text-red-600 hover:border-2 hover:border-red-600 rounded-lg transition duration-200"
      >
        Sauter la question
      </button>
    </div>
  );
}

export default Quiz;
