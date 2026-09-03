import { useState, useEffect } from "react";
import quizData from "./data/quizData.json";
import HomePage from "./pages/HomePage";
import QuizPage from "./pages/QuizPage";
import StudyPage from "./pages/StudyPage";
import AboutPage from "./pages/AboutPage";
import { saveAppState, loadAppState, clearAppState, clearQuizProgress } from "./utils/progressStorage";
import "./App.css";

export default function App() {
  const [page, setPage] = useState("home");
  const [activeQuiz, setActiveQuiz] = useState(null);
  const [initialStudyExam, setInitialStudyExam] = useState(null);

  useEffect(() => {
    const saved = loadAppState();
    if (saved && saved.page === "quiz" && saved.quizId) {
      const quiz = quizData.find(q => q.id === saved.quizId);
      if (quiz) {
        setActiveQuiz(quiz);
        setPage("quiz");
      } else {
        clearAppState();
      }
    }
  }, []);

  function openQuiz(quizId) {
    const quiz = quizData.find(q => q.id === quizId);
    setActiveQuiz(quiz);
    setPage("quiz");
    saveAppState("quiz", quizId);
    window.scrollTo(0, 0);
  }

  function goHome() {
    if (activeQuiz) clearQuizProgress(activeQuiz.id);
    clearAppState();
    setPage("home");
    setActiveQuiz(null);
    window.scrollTo(0, 0);
  }

  function goStudy(studyKey) {
    setInitialStudyExam(studyKey || null);
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
    return <StudyPage onBack={goHome} initialExam={initialStudyExam} />;
  }

  if (page === "about") {
    return <AboutPage onBack={goHome} />;
  }

  return <HomePage quizzes={quizData} onStart={openQuiz} onStudy={goStudy} onAbout={goAbout} />;
}
