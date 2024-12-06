import React, { useState, useEffect } from "react";
import ScorePage from "./ScorePage";
import Difficulty from "./Difficulty";
import {
  calculateLevel,
  filterQuestionsByLevel,
  handleAnswerSelection,
  handleSkipQuestion,
  getPlayerName,
} from "../hooks/Quizfunction";

function Quiz({ questions }) {
  const questionsPerLevel = 10;
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isAnswerRevealed, setIsAnswerRevealed] = useState(false);
  const [timeoutId, setTimeoutId] = useState(null);
  const [isAnswerSelected, setIsAnswerSelected] = useState(false);
  const [namePlayer, setNamePlayer] = useState(null);
  const [selectedLevel, setSelectedLevel] = useState(null);

  const level = calculateLevel(
    currentQuestion,
    questionsPerLevel,
    selectedLevel
  );

  const filteredQuestions = filterQuestionsByLevel(questions, selectedLevel);

  useEffect(() => {
    setNamePlayer(getPlayerName());

    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [timeoutId]);

  if (!selectedLevel) {
    return <Difficulty handleLevelSelection={setSelectedLevel} />;
  }

  if (currentQuestion >= filteredQuestions.length) {
    return (
      <ScorePage score={score} totalQuestions={filteredQuestions.length} />
    );
  }

  const question = filteredQuestions[currentQuestion];

  return (
    <div className="max-w-lg mx-auto p-6 mt-5 bg-slate-200 shadow-lg rounded-lg overflow-auto">
      <h1 className="text-xl text-black mb-4 font-bold">
        Joueur: {namePlayer}
      </h1>
      <h1 className="text-2xl font-bold text-black text-center">
        Niveau {level}
      </h1>
      <h2 className="text-lg font-semibold mb-4 text-center text-gray-500">
        Question {currentQuestion + 1} sur {filteredQuestions.length}
      </h2>
      <h3 className="text-xl font-semibold mb-4 text-center text-black">
        {question.question}
      </h3>
      <div className="grid grid-cols-2 gap-4">
        {question.answers.map((answer, index) => {
          let buttonColor = "bg-[#00171f] hover:bg-blue-700";
          if (isAnswerRevealed) {
            if (answer === selectedAnswer) {
              buttonColor = answer.isCorrect
                ? "bg-green-500 hover:bg-green-600"
                : "bg-red-500 hover:bg-red-600";
            } else if (answer.isCorrect) {
              buttonColor = "bg-green-500 hover:bg-green-600";
            }
          } else if (answer === selectedAnswer) {
            buttonColor = "bg-blue-500 hover:bg-blue-600";
          }

          return (
            <button
              disabled={isAnswerSelected}
              key={index}
              onClick={() =>
                handleAnswerSelection(
                  answer,
                  selectedAnswer,
                  setSelectedAnswer,
                  setIsAnswerRevealed,
                  setIsAnswerSelected,
                  setScore,
                  timeoutId,
                  setTimeoutId,
                  setCurrentQuestion
                )
              }
              className={`${buttonColor} w-full hover:scale-105 py-3 px-4 text-white rounded-br-xl rounded-tl-xl border-4 border-black hover:shadow-2xl hover:shadow-black transition duration-300`}
            >
              {answer.text}
            </button>
          );
        })}
      </div>

      <button
        onClick={() =>
          handleSkipQuestion(
            setCurrentQuestion,
            setIsAnswerRevealed,
            setIsAnswerSelected
          )
        }
        className="w-full mt-4 py-3 px-4 bg-red-600 hover:bg-transparent text-white hover:text-red-600 hover:border-2 hover:border-red-600 rounded-lg transition duration-300"
      >
        Sauter la question
      </button>
    </div>
  );
}

export default Quiz;
