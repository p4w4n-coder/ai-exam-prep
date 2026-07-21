import { useState } from "react";
import quizData from "./data/quizData.json";
import HomePage from "./pages/HomePage";
import QuizPage from "./pages/QuizPage";
import StudyPage from "./pages/StudyPage";
import AboutPage from "./pages/AboutPage";
import "./App.css";

export default function App() {
  const [page, setPage] = useState("home");
  const [activeQuiz, setActiveQuiz] = useState(null);

  function openQuiz(quizId) {
    const quiz = quizData.find(q => q.id === quizId);
    setActiveQuiz(quiz);
    setPage("quiz");
    window.scrollTo(0, 0);
  }

  function goHome() {
    setPage("home");
    setActiveQuiz(null);
    window.scrollTo(0, 0);
  }

  function goStudy() {
    setPage("study");
    window.scrollTo(0, 0);
  }

  function goAbout() {
    setPage("about");
    window.scrollTo(0, 0);
  }

  if (page === "quiz" && activeQuiz) {
    return <QuizPage quiz={activeQuiz} onBack={goHome} />;
  }

  if (page === "study") {
    return <StudyPage onBack={goHome} />;
  }

  if (page === "about") {
    return <AboutPage onBack={goHome} />;
  }

  return <HomePage quizzes={quizData} onStart={openQuiz} onStudy={goStudy} onAbout={goAbout} />;
}
