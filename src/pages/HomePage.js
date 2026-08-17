import { useState } from "react";
import "./HomePage.css";

const EXAMS = [
  {
    id: "AIF-C01",
    label: "AWS AIF-C01",
    fullName: "AWS Certified AI Practitioner",
    badge: "AWS",
    color: "#FF9900",
    bg: "#FFF8EC",
    border: "#FFE0A0",
    icon: "☁️",
    level: "Foundational",
    duration: "90 min",
    questions: 65,
    passing: "700 / 1000",
    domains: ["GenAI Fundamentals", "Foundation Models", "SageMaker", "Bedrock", "Security"],
  },
  {
    id: "GAIL",
    label: "Google GAIL",
    fullName: "Generative AI Leader",
    badge: "Google",
    color: "#4285F4",
    bg: "#EEF3FF",
    border: "#C3D5FF",
    icon: "🔷",
    level: "Professional",
    duration: "90 min",
    questions: 40,
    passing: "Pass / Fail",
    domains: ["GenAI Fundamentals", "GCP Offerings", "Techniques", "Business Strategy"],
  },
  {
    id: "AB-731",
    label: "Microsoft AB-731",
    fullName: "AI Transformation Leader",
    badge: "Microsoft",
    color: "#0078D4",
    bg: "#EFF6FF",
    border: "#B3D4F5",
    icon: "🤖",
    level: "Specialist",
    duration: "45 min",
    questions: 50,
    passing: "700 / 1000",
    domains: ["Responsible AI", "Copilot", "Azure AI", "Governance", "Licensing"],
  },
  {
    id: "CPMAI",
    label: "PMI CPMAI",
    fullName: "Certified Professional in Managing AI",
    badge: "PMI",
    color: "#C8102E",
    bg: "#FFF0F2",
    border: "#FFB3BE",
    icon: "📋",
    level: "Professional",
    duration: "160 min",
    questions: 120,
    passing: "Pass / Fail",
    domains: ["AI Lifecycle", "Responsible AI", "Data Governance", "Model Evaluation", "Ops"],
  },
];

function QuizCard({ quiz, exam, onStart }) {
  return (
    <div className="qcard">
      <div className="qcard-top" style={{ background: exam.bg, borderBottom: `1px solid ${exam.border}` }}>
        <span className="qcard-badge" style={{ background: exam.color }}>{exam.badge}</span>
        <span className="qcard-count">{quiz.total} questions</span>
      </div>
      <div className="qcard-body">
        <div className="qcard-icon">{exam.icon}</div>
        <h3 className="qcard-title">{quiz.title}</h3>
        <div className="qcard-sections">
          {quiz.sections.slice(0, 3).map(s => (
            <span key={s.id} className="qcard-pill">{s.title.split(":")[0].trim()}</span>
          ))}
          {quiz.sections.length > 3 && (
            <span className="qcard-pill">+{quiz.sections.length - 3} more</span>
          )}
        </div>
      </div>
      <div className="qcard-footer">
        <button
          className="qcard-btn"
          style={{ background: exam.color }}
          onClick={() => onStart(quiz.id)}
        >
          Start Practice →
        </button>
      </div>
    </div>
  );
}

export default function HomePage({ quizzes, onStart, onStudy, onAbout }) {
  const [activeTab, setActiveTab] = useState("AIF-C01");

  const totalQ = quizzes.reduce((a, q) => a + q.total, 0);
  const activeExam = EXAMS.find(e => e.id === activeTab);
  const filtered = quizzes.filter(q => q.exam === activeTab);

  return (
    <div className="home">

      {/* ── Topbar ── */}
      <div className="topbar">
        <div className="topbar-inner">
          <span>🎓 Free AI certification practice — no signup, no limits</span>
          <div style={{ display: "flex", gap: "1rem" }}>
            <button className="topbar-link" onClick={onStudy}>Study Notes</button>
            <button className="topbar-link" onClick={onAbout}>About</button>
          </div>
        </div>
      </div>

      {/* ── Header ── */}
      <header className="site-header">
        <div className="header-inner">
          <div className="logo">
            <div className="logo-mark">⚡</div>
            <div>
              <div className="logo-name">AIExamPrep</div>
              <div className="logo-sub">AI Certification Practice</div>
            </div>
          </div>
          <nav className="header-nav">
            {EXAMS.map(e => (
              <button
                key={e.id}
                className={`nav-exam-link ${activeTab === e.id ? "nav-exam-link-active" : ""}`}
                style={activeTab === e.id ? { color: e.color, borderBottomColor: e.color } : {}}
                onClick={() => setActiveTab(e.id)}
              >
                {e.label}
              </button>
            ))}
            <button className="nav-cta" onClick={onStudy}>Study Notes</button>
          </nav>
        </div>
      </header>

      {/* ── Hero ── */}
      <section className="hero">
        <div className="hero-inner">
          <div className="hero-left">
            <div className="hero-tag">🏆 Free · No Signup · No Limits</div>
            <h1 className="hero-title">
              Pass Your<br />
              <span className="hero-highlight">AI Certification</span><br />
              Exam — First Try
            </h1>
            <p className="hero-desc">
              {totalQ.toLocaleString()}+ scenario-based practice questions for
              AWS AIF-C01, Google GenAI Leader, Microsoft AB-731, and PMI CPMAI.
              Built by practitioners. Updated for 2025.
            </p>
            <div className="hero-actions">
              <button className="hero-btn-primary" onClick={() => setActiveTab("AIF-C01")}>
                Start Practicing Free
              </button>
              <button className="hero-btn-secondary" onClick={onStudy}>
                📖 Study Notes
              </button>
            </div>
          </div>
          <div className="hero-right">
            {EXAMS.map(exam => {
              const count = quizzes.filter(q => q.exam === exam.id).length;
              return (
                <div
                  key={exam.id}
                  className="hero-exam-card"
                  style={{ borderLeft: `4px solid ${exam.color}`, cursor: "pointer" }}
                  onClick={() => setActiveTab(exam.id)}
                >
                  <div className="hec-left">
                    <span className="hec-icon">{exam.icon}</span>
                    <div>
                      <div className="hec-name">{exam.label}</div>
                      <div className="hec-full">{exam.fullName}</div>
                    </div>
                  </div>
                  <div className="hec-right">
                    <div className="hec-stat">{quizzes.filter(q=>q.exam===exam.id).reduce((a,q)=>a+q.total,0)}</div>
                    <div className="hec-stat-label">questions</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Stats bar ── */}
      <div className="stats-bar">
        <div className="stats-bar-inner">
          {[
            { num: totalQ.toLocaleString(), label: "Practice Questions" },
            { num: quizzes.length, label: "Practice Sets" },
            { num: "4", label: "Certifications" },
            { num: "$0", label: "Cost" },
          ].map((s, i) => (
            <div key={i} className="stat-item">
              <div className="stat-item-num">{s.num}</div>
              <div className="stat-item-label">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Exam Tabs + Content ── */}
      <div className="main-content">
        <div className="container">

          {/* Exam tab pills */}
          <div className="exam-tab-row">
            {EXAMS.map(exam => (
              <button
                key={exam.id}
                className={`exam-pill ${activeTab === exam.id ? "exam-pill-active" : ""}`}
                style={activeTab === exam.id ? {
                  background: exam.bg,
                  borderColor: exam.color,
                  color: exam.color,
                } : {}}
                onClick={() => setActiveTab(exam.id)}
              >
                <span>{exam.icon}</span>
                <span>{exam.label}</span>
                <span className="exam-pill-count">
                  {quizzes.filter(q => q.exam === exam.id).length} sets
                </span>
              </button>
            ))}
          </div>

          {/* Exam info strip */}
          <div className="exam-info-strip" style={{ borderColor: activeExam.border, background: activeExam.bg }}>
            <div className="eis-left">
              <div className="eis-badge" style={{ background: activeExam.color }}>{activeExam.badge}</div>
              <div>
                <div className="eis-name">{activeExam.fullName}</div>
                <div className="eis-meta">
                  <span>⏱ {activeExam.duration}</span>
                  <span>📝 {activeExam.questions} questions</span>
                  <span>🎯 Pass: {activeExam.passing}</span>
                  <span>📊 {activeExam.level}</span>
                </div>
              </div>
            </div>
            <div className="eis-domains">
              {activeExam.domains.map(d => (
                <span key={d} className="eis-domain-pill" style={{ borderColor: activeExam.border, color: activeExam.color, background: "white" }}>{d}</span>
              ))}
            </div>
          </div>

          {/* Cards grid */}
          <div className="cards-grid">
            {filtered.map(q => (
              <QuizCard key={q.id} quiz={q} exam={activeExam} onStart={onStart} />
            ))}
          </div>

        </div>
      </div>

      {/* ── How it works ── */}
      <section className="how-section">
        <div className="container">
          <div className="how-header">
            <h2 className="how-title">How to Use AIExamPrep</h2>
            <p className="how-sub">Four steps to pass your AI certification exam</p>
          </div>
          <div className="how-steps">
            {[
              { n: "1", icon: "🎯", title: "Choose Your Exam", text: "Select your target certification from AWS AIF-C01, Google GAIL, AB-731, or CPMAI." },
              { n: "2", icon: "📚", title: "Study the Notes", text: "Read domain summaries and exam traps before diving into questions." },
              { n: "3", icon: "✏️", title: "Practice by Section", text: "Work through sets by domain. Focus on sections where your score is below 80%." },
              { n: "4", icon: "🏆", title: "Take the Real Exam", text: "Once you consistently score 85%+ on simulations, you are ready." },
            ].map(step => (
              <div key={step.n} className="how-step">
                <div className="how-step-num">{step.n}</div>
                <div className="how-step-icon">{step.icon}</div>
                <h3 className="how-step-title">{step.title}</h3>
                <p className="how-step-text">{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="site-footer">
        <div className="container">
          <div className="footer-inner">
            <div>
              <div className="footer-logo">⚡ AIExamPrep</div>
              <p className="footer-desc">Free AI certification practice. No signup. No cost. No limits.</p>
            </div>
            <div className="footer-links">
              {EXAMS.map(e => (
                <button key={e.id} className="footer-link" onClick={() => setActiveTab(e.id)}>{e.label}</button>
              ))}
              <button className="footer-link" onClick={onStudy}>Study Notes</button>
            </div>
          </div>
          <div className="footer-bottom">
            Not affiliated with AWS, Google, Microsoft, or PMI · All trademarks belong to their respective owners · Independent study resource
          </div>
        </div>
      </footer>
    </div>
  );
}
