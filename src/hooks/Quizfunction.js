
export const calculateLevel = (currentQuestion, questionsPerLevel, selectedLevel) => {
    return selectedLevel || Math.floor(currentQuestion / questionsPerLevel) + 1;
  };
  
  export const filterQuestionsByLevel = (questions, selectedLevel) => {
    return questions.filter(question => question.level === selectedLevel);
  };
 export const handleAnswerSelection = (answer, selectedAnswer, setSelectedAnswer, setIsAnswerRevealed, setIsAnswerSelected, setScore, timeoutId, setTimeoutId, setCurrentQuestion) => {
    setSelectedAnswer(answer);
    setIsAnswerRevealed(true);
  
    if (answer.isCorrect) {
      setScore((prevScore) => prevScore + 1);
    }
  
    setTimeout(() => {
      setIsAnswerSelected(false);
      setIsAnswerRevealed(false);
      setSelectedAnswer(null);
      setCurrentQuestion((prev) => prev + 1);
    }, 1500);
  };
  
  export const handleSkipQuestion = (
    setCurrentQuestion,
    setIsAnswerRevealed,
    setIsAnswerSelected
  ) => {
    setCurrentQuestion(prevQuestion => prevQuestion + 1);
    setIsAnswerRevealed(false);
    setIsAnswerSelected(false);
  };
  
  export const getPlayerName = () => {
    const data = localStorage.getItem("playerName");
    return data ? data : null;
  };
  