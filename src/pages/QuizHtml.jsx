import React from 'react';
import Quiz from '../components/Quiz';
import { HTML} from '../data/HtmlQuiz';

function QuizHtml() {
  return (
  <Quiz questions={HTML} />
);
}

export default QuizHtml;
