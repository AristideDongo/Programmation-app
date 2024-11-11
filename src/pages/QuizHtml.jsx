import React from 'react';
import Quiz from '../components/Quiz';
import { htmlQuestions } from '../data/HtmlQuiz';

function QuizHtml() {
  return (
  <Quiz questions={htmlQuestions} />
);
}

export default QuizHtml;
