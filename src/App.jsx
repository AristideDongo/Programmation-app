import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import QuizHtml from './pages/QuizHtml';
import QuizCss from './pages/QuizCss';
import QuizJs from './pages/QuizJs';
import Header from './components/Header';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quiz-html" element={<QuizHtml />} />
        <Route path="/quiz-css" element={<QuizCss />} />
        <Route path="/quiz-js" element={<QuizJs />} />
      </Routes>
    </Router>
  );
}

export default App;
