
// Fonction pour calculer le niveau en fonction de la question actuelle
export const calculateLevel = (currentQuestion, questionsPerLevel, selectedLevel) => {
    return selectedLevel || Math.floor(currentQuestion / questionsPerLevel) + 1;
  };
  
  // Fonction pour filtrer les questions par niveau
  export const filterQuestionsByLevel = (questions, selectedLevel) => {
    return questions.filter(question => question.level === selectedLevel);
  };
 export const handleAnswerSelection = (answer, selectedAnswer, setSelectedAnswer, setIsAnswerRevealed, setIsAnswerSelected, setScore, timeoutId, setTimeoutId, setCurrentQuestion) => {
    setSelectedAnswer(answer);
    setIsAnswerRevealed(true);
  
    if (answer.isCorrect) {
      setScore((prevScore) => prevScore + 1);
    }
  
    // Réinitialiser après un délai pour passer à la question suivante
    setTimeout(() => {
      setIsAnswerSelected(false);
      setIsAnswerRevealed(false); // Réinitialiser la révélation de la réponse
      setSelectedAnswer(null); // Réinitialiser la sélection de la réponse
      setCurrentQuestion((prev) => prev + 1); // Passer à la question suivante
    }, 1500); // Délai avant de passer à la question suivante
  };
  
  // Fonction pour passer à la question suivante sans changer le score
  export const handleSkipQuestion = (
    setCurrentQuestion,
    setIsAnswerRevealed,
    setIsAnswerSelected
  ) => {
    setCurrentQuestion(prevQuestion => prevQuestion + 1);
    setIsAnswerRevealed(false);
    setIsAnswerSelected(false);
  };
  
  // Fonction pour récupérer le nom du joueur depuis le localStorage
  export const getPlayerName = () => {
    const data = localStorage.getItem("playerName");
    return data ? data : null;
  };
  