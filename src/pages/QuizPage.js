import { useState, useEffect, useCallback } from "react";
import "./QuizPage.css";

const SECTION_COLORS = [
  "#5DCAA5","#6B9FE8","#E87B5D","#B06BE8",
  "#E8C45D","#5DB8E8","#E85D8F","#6BE87B",
  "#E8A05D","#A0E85D"
];

function AdSlot({ type = "horizontal" }) {
  return (
    <div className={`ad-slot ad-slot-${type}`}>
      {/* Google AdSense — paste your ad unit code here after approval:
      <ins className="adsbygoogle" style={{display:"block"}}
        data-ad-client="ca-pub-XXXXXXXXXXXXXXXX"
        data-ad-slot="XXXXXXXXXX"
        data-ad-format="auto" data-full-width-responsive="true"></ins>
      */}
      Advertisement
    </div>
  );
}

function SectionSelect({ quiz, onSelect }) {
  return (
    <div className="section-select">
      <div className="qp-header">
        <button className="back-link" onClick={onSelect.bind(null, null, true)}>
          ← All Exams
        </button>
        <h1 className="qp-title">{quiz.title}</h1>
        <p className="qp-meta">{quiz.total} questions · {quiz.sections.length} sections</p>
      </div>

      <AdSlot type="horizontal" />

      <div className="mode-cards">
        <div
          className="mode-card mode-card-all"
          onClick={() => onSelect("all")}
        >
          <div className="mode-icon">⚡</div>
          <div className="mode-info">
            <div className="mode-name">Full Practice Set</div>
            <div className="mode-desc">All {quiz.total} questions · Random order</div>
          </div>
          <div className="mode-arrow">→</div>
        </div>
      </div>

      <h2 className="sections-heading">Or practice by section</h2>
      <div className="sections-list">
        {quiz.sections.map((section, idx) => (
          <div
            key={section.id}
            className="section-row"
            style={{ "--sec-color": SECTION_COLORS[idx % SECTION_COLORS.length] }}
            onClick={() => onSelect(idx)}
          >
            <div className="section-dot" />
            <div className="section-row-info">
              <div className="section-row-title">{section.title}</div>
              {section.description && (
                <div className="section-row-desc">{section.description}</div>
              )}
            </div>
            <div className="section-row-count">{section.questions.length}q</div>
          </div>
        ))}
      </div>
    </div>
  );
}

function ResultsView({ questions, answers, sectionTitle, onRetry, onBack, onHome }) {
  const correct = answers.filter((a, i) => a === questions[i].ans).length;
  const pct = Math.round((correct / questions.length) * 100);
  const passed = pct >= 70;

  return (
    <div className="results-view">
      <div className={`results-banner ${passed ? "pass" : "fail"}`}>
        <div className="results-score">{pct}%</div>
        <div className="results-verdict">{passed ? "Well done!" : "Keep practicing"}</div>
        <div className="results-sub">{correct} / {questions.length} correct · {sectionTitle}</div>
      </div>

      <AdSlot type="horizontal" />

      <div className="results-breakdown">
        <h3 className="breakdown-title">Question Review</h3>
        {questions.map((q, idx) => {
          const userAns = answers[idx];
          const isCorrect = userAns === q.ans;
          return (
            <div key={idx} className={`review-item ${isCorrect ? "review-correct" : "review-wrong"}`}>
              <div className="review-q-header">
                <span className={`review-badge ${isCorrect ? "badge-correct" : "badge-wrong"}`}>
                  {isCorrect ? "✓" : "✗"}
                </span>
                <span className="review-q-num">Q{idx + 1}</span>
              </div>
              <p className="review-q-text">{q.q}</p>
              <div className="review-opts">
                {q.opts.map((opt, oi) => (
                  <div
                    key={oi}
                    className={`review-opt
                      ${oi === q.ans ? "opt-correct" : ""}
                      ${oi === userAns && !isCorrect ? "opt-wrong" : ""}
                    `}
                  >
                    <span className="opt-letter">{["A","B","C","D"][oi]}</span>
                    {opt}
                  </div>
                ))}
              </div>
              <div className="review-explain">
                <span className="explain-label">Explanation</span>
                <p>{q.explain}</p>
              </div>
            </div>
          );
        })}
      </div>

      <div className="results-actions">
        <button className="btn btn-secondary" onClick={onRetry}>Retry Section</button>
        <button className="btn btn-primary" onClick={onBack}>Choose Another Section</button>
        <button className="btn btn-ghost" onClick={onHome}>← All Exams</button>
      </div>

      <AdSlot type="horizontal" />
    </div>
  );
}

export default function QuizPage({ quiz, onBack }) {
  const [view, setView] = useState("select"); // select | quiz | results
  const [sectionIdx, setSectionIdx] = useState(null);
  const [questions, setQuestions] = useState([]);
  const [sectionTitle, setSectionTitle] = useState("");
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState(null);
  const [revealed, setRevealed] = useState(false);
  const [answers, setAnswers] = useState([]);
  const [elapsed, setElapsed] = useState(0);
  const [timerActive, setTimerActive] = useState(false);

  // Timer
  useEffect(() => {
    if (!timerActive) return;
    const id = setInterval(() => setElapsed(e => e + 1), 1000);
    return () => clearInterval(id);
  }, [timerActive]);

  const formatTime = (s) => {
    const m = Math.floor(s / 60);
    const sec = s % 60;
    return `${m}:${sec.toString().padStart(2, "0")}`;
  };

  function startSection(idxOrAll) {
    let qs = [];
    let title = "";

    if (idxOrAll === "all") {
      qs = quiz.sections.flatMap(s => s.questions);
      title = "Full Practice Set";
      // Shuffle
      qs = [...qs].sort(() => Math.random() - 0.5);
    } else {
      const sec = quiz.sections[idxOrAll];
      qs = sec.questions;
      title = sec.title;
    }

    setQuestions(qs);
    setSectionTitle(title);
    setSectionIdx(idxOrAll);
    setCurrent(0);
    setSelected(null);
    setRevealed(false);
    setAnswers([]);
    setElapsed(0);
    setTimerActive(true);
    setView("quiz");
  }

  function handleSelect(optIdx) {
    if (revealed) return;
    setSelected(optIdx);
  }

  function handleReveal() {
    if (selected === null) return;
    setRevealed(true);
  }

  function handleNext() {
    const newAnswers = [...answers, selected];
    if (current + 1 >= questions.length) {
      setAnswers(newAnswers);
      setTimerActive(false);
      setView("results");
    } else {
      setAnswers(newAnswers);
      setCurrent(c => c + 1);
      setSelected(null);
      setRevealed(false);
    }
  }

  function handleRetry() {
    startSection(sectionIdx);
  }

  function handleBackToSection() {
    setTimerActive(false);
    setView("select");
  }

  const q = questions[current];
  const progress = questions.length > 0 ? ((current) / questions.length) * 100 : 0;

  if (view === "select") {
    return (
      <div className="quiz-page">
        <SectionSelect
          quiz={quiz}
          onSelect={(idx, goHome) => {
            if (goHome) { onBack(); return; }
            startSection(idx);
          }}
        />
      </div>
    );
  }

  if (view === "results") {
    return (
      <div className="quiz-page">
        <ResultsView
          questions={questions}
          answers={answers}
          sectionTitle={sectionTitle}
          onRetry={handleRetry}
          onBack={handleBackToSection}
          onHome={onBack}
        />
      </div>
    );
  }

  return (
    <div className="quiz-page">
      {/* Quiz header */}
      <div className="quiz-topbar">
        <button className="back-link" onClick={() => { setTimerActive(false); setView("select"); }}>
          ← {quiz.title.split("—")[0].trim()}
        </button>
        <div className="quiz-topbar-right">
          <span className="timer">⏱ {formatTime(elapsed)}</span>
          <span className="q-counter">{current + 1} / {questions.length}</span>
        </div>
      </div>

      {/* Progress bar */}
      <div className="progress-track">
        <div className="progress-fill" style={{ width: `${progress}%` }} />
      </div>

      {/* Question */}
      <div className="question-wrap">
        <div className="section-label">{sectionTitle}</div>
        <h2 className="question-text">{q.q}</h2>

        <div className="options-list">
          {q.opts.map((opt, oi) => {
            let cls = "option";
            if (revealed) {
              if (oi === q.ans) cls += " option-correct";
              else if (oi === selected) cls += " option-wrong";
            } else if (oi === selected) {
              cls += " option-selected";
            }
            return (
              <button key={oi} className={cls} onClick={() => handleSelect(oi)}>
                <span className="opt-letter-badge">{["A","B","C","D"][oi]}</span>
                <span className="opt-text">{opt}</span>
              </button>
            );
          })}
        </div>

        {/* Explanation */}
        {revealed && (
          <div className={`explanation-box ${selected === q.ans ? "explain-correct" : "explain-wrong"}`}>
            <div className="explain-verdict">
              {selected === q.ans ? "✓ Correct" : `✗ Incorrect — Correct answer: ${["A","B","C","D"][q.ans]}`}
            </div>
            <p>{q.explain}</p>
          </div>
        )}

        {/* Ad after every 20 questions */}
        {current > 0 && current % 20 === 0 && !revealed && (
          <AdSlot type="horizontal" />
        )}

        <div className="quiz-actions">
          {!revealed ? (
            <button
              className={`btn btn-primary ${selected === null ? "btn-disabled" : ""}`}
              onClick={handleReveal}
              disabled={selected === null}
            >
              Check Answer
            </button>
          ) : (
            <button className="btn btn-primary" onClick={handleNext}>
              {current + 1 >= questions.length ? "See Results →" : "Next Question →"}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
