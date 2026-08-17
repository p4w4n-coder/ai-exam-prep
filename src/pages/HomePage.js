import { useState, useRef, useCallback } from "react";
import "./HomePage.css";

const EXAM_INFO = {
  "AB-731": {
    label: "Microsoft AB-731",
    subtitle: "AI Transformation Leader",
    badge: "Microsoft",
    badgeColor: "#0078d4",
    gradFrom: "#0078d4",
    gradTo: "#00b4d8",
    desc: "45 min · 700/1000 passing · Scenario-based · 8 responsible AI standards",
    icon: "🤖",
    sectionTitle: "AB-731 — AI Transformation Leader",
    sectionDesc: "45 minutes · 700/1000 to pass · Covers Copilot, Azure AI, Responsible AI, governance, licensing, and Foundry. Questions match the real exam's scenario-based format.",
  },
  "CPMAI": {
    label: "PMI-CPMAI",
    subtitle: "Certified Professional in Managing AI",
    badge: "PMI",
    badgeColor: "#e03c31",
    gradFrom: "#e03c31",
    gradTo: "#ff6b6b",
    desc: "160 min · 120 questions · 5 domains · Pass/Fail",
    icon: "📋",
    sectionTitle: "PMI-CPMAI — Certified Professional in Managing AI",
    sectionDesc: "160 minutes · 120 questions · Pass/Fail · Covers AI project lifecycle, responsible AI, data governance, model evaluation, and operationalization.",
  },
  "AIF-C01": {
    label: "AWS AIF-C01",
    subtitle: "AWS Certified AI Practitioner",
    badge: "AWS",
    badgeColor: "#FF9900",
    gradFrom: "#FF9900",
    gradTo: "#ffbe57",
    desc: "90 min · 65 questions · 5 domains · 700/1000 passing",
    icon: "☁️",
    sectionTitle: "AWS AIF-C01 — AI Practitioner",
    sectionDesc: "90 minutes · 65 questions · 700/1000 to pass · Covers GenAI fundamentals, SageMaker, Bedrock, responsible AI, and security. Service name recall is critical.",
  },
  "GAIL": {
    label: "Google GenAI Leader",
    subtitle: "Generative AI Leader Certification",
    badge: "Google",
    badgeColor: "#4285F4",
    gradFrom: "#4285F4",
    gradTo: "#34A853",
    desc: "4 domains · GenAI fundamentals + GCP offerings · RAG and responsible AI",
    icon: "🔷",
    sectionTitle: "Google Generative AI Leader",
    sectionDesc: "4 domains · GenAI fundamentals, Google Cloud offerings, techniques to improve output, and business strategies. Covers Vertex AI, Gemini, RAG, and responsible AI.",
  },
};

const EXAM_ORDER = ["AB-731", "CPMAI", "AIF-C01", "GAIL"];

// Spotlight card — tracks mouse position for radial gradient effect
function SpotlightCard({ children, accentColor }) {
  const cardRef = useRef(null);
  const [spot, setSpot] = useState({ x: 0, y: 0, opacity: 0 });

  const handleMouseMove = useCallback((e) => {
    const rect = cardRef.current.getBoundingClientRect();
    setSpot({ x: e.clientX - rect.left, y: e.clientY - rect.top, opacity: 1 });
  }, []);

  const handleMouseLeave = useCallback(() => {
    setSpot(s => ({ ...s, opacity: 0 }));
  }, []);

  return (
    <div
      ref={cardRef}
      className="spotlight-card"
      style={{ "--accent": accentColor }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Spotlight radial gradient */}
      <div
        className="spotlight-glow"
        style={{
          opacity: spot.opacity,
          background: `radial-gradient(300px circle at ${spot.x}px ${spot.y}px, ${accentColor}22, transparent 70%)`,
        }}
      />
      {/* Top accent line */}
      <div className="spotlight-top-line" />
      {children}
    </div>
  );
}

function QuizCard({ quiz, onStart }) {
  const info = EXAM_INFO[quiz.exam];
  return (
    <SpotlightCard accentColor={info.badgeColor}>
      <div className="sc-header">
        <span className="sc-badge" style={{ background: info.badgeColor }}>{info.badge}</span>
        <span className="sc-count">{quiz.total} questions</span>
      </div>
      <div className="sc-icon">{info.icon}</div>
      <h3 className="sc-title">{quiz.title}</h3>
      <div className="sc-pills">
        {quiz.sections.slice(0, 3).map(s => (
          <span key={s.id} className="sc-pill">{s.title.split(":")[0].trim()}</span>
        ))}
        {quiz.sections.length > 3 && (
          <span className="sc-pill">+{quiz.sections.length - 3} more</span>
        )}
      </div>
      <button
        className="sc-btn"
        style={{ background: `linear-gradient(135deg, ${info.gradFrom}, ${info.gradTo})` }}
        onClick={() => onStart(quiz.id)}
      >
        Start Practice →
      </button>
    </SpotlightCard>
  );
}

export default function HomePage({ quizzes, onStart, onStudy, onAbout }) {
  const [activeTab, setActiveTab] = useState("AB-731");

  const totalQ = quizzes.reduce((a, q) => a + q.total, 0);
  const filtered = quizzes.filter(q => q.exam === activeTab);
  const info = EXAM_INFO[activeTab];

  return (
    <div className="home">

      {/* ── Header ── */}
      <header className="site-header">
        <div className="header-inner">
          <div className="logo">
            <span className="logo-icon">⚡</span>
            <span className="logo-text">AI<span className="logo-accent">Exam</span>Prep</span>
          </div>
          <nav className="header-nav">
            <button className="nav-study-btn" onClick={onStudy}>📖 Study Notes</button>
            <button className="nav-study-btn" onClick={onAbout}>About</button>
          </nav>
        </div>
      </header>

      {/* ── Hero ── */}
      <section className="hero hero-animated">
        {/* Animated orbs */}
        <div className="orb orb-1" />
        <div className="orb orb-2" />
        <div className="orb orb-3" />

        <div className="hero-inner">
          <div className="hero-eyebrow">Free · No signup · No limits</div>
          <h1 className="hero-title">
            Crack Your<br />
            <span className="hero-gradient">AI Certification</span><br />
            Exam
          </h1>
          <p className="hero-sub">
            {totalQ.toLocaleString()} practice questions for{" "}
            <strong>AWS AIF-C01</strong>, <strong>Google GenAI Leader</strong>,{" "}
            <strong>Microsoft AB-731</strong>, and <strong>PMI-CPMAI</strong> —
            scenario-based, with full explanations. Free forever.
          </p>
          <div className="hero-stats">
            <div className="stat">
              <span className="stat-num">{totalQ.toLocaleString()}</span>
              <span className="stat-label">Questions</span>
            </div>
            <div className="stat-div" />
            <div className="stat">
              <span className="stat-num">{quizzes.length}</span>
              <span className="stat-label">Practice Sets</span>
            </div>
            <div className="stat-div" />
            <div className="stat">
              <span className="stat-num">4</span>
              <span className="stat-label">Exams Covered</span>
            </div>
            <div className="stat-div" />
            <div className="stat">
              <span className="stat-num">$0</span>
              <span className="stat-label">Cost</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── Study Notes Banner ── */}
      <div className="container">
        <div className="study-banner" onClick={onStudy}>
          <div className="study-banner-left">
            <span className="study-banner-icon">📖</span>
            <div>
              <div className="study-banner-title">Study Notes</div>
              <div className="study-banner-sub">Key concepts, exam traps, and domain summaries for AIF-C01, GAIL, AB-731, and CPMAI</div>
            </div>
          </div>
          <button className="study-banner-btn">Read Notes →</button>
        </div>
      </div>

      {/* ── Ad ── */}
      <div className="container">
        <div className="ad-slot ad-slot-horizontal">Advertisement</div>
      </div>

      {/* ── Exam Picker Tabs ── */}
      <div className="container">
        <div className="exam-tabs">
          {EXAM_ORDER.map(examId => {
            const ei = EXAM_INFO[examId];
            const count = quizzes.filter(q => q.exam === examId).length;
            const isActive = activeTab === examId;
            return (
              <button
                key={examId}
                className={`exam-tab${isActive ? " exam-tab-active" : ""}`}
                onClick={() => setActiveTab(examId)}
                style={isActive ? {
                  borderColor: ei.badgeColor,
                  background: `linear-gradient(135deg, ${ei.badgeColor}18, ${ei.gradTo}10)`,
                  boxShadow: `0 0 20px ${ei.badgeColor}25`,
                } : {}}
              >
                <span className="et-icon">{ei.icon}</span>
                <div className="et-text">
                  <span className="et-label" style={isActive ? { color: ei.badgeColor } : {}}>{ei.label}</span>
                  <span className="et-sub">{count} sets · {quizzes.filter(q => q.exam === examId).reduce((a,q) => a+q.total, 0)} questions</span>
                </div>
                {isActive && <div className="et-dot" style={{ background: ei.badgeColor }} />}
              </button>
            );
          })}
        </div>
      </div>

      {/* ── Active Exam Section ── */}
      <section className="exam-section">
        <div className="container">
          <div className="section-header">
            <div className="section-badge" style={{ background: info.badgeColor }}>{info.badge}</div>
            <h2 className="section-title">{info.sectionTitle}</h2>
            <p className="section-desc">{info.sectionDesc}</p>
          </div>
          <div className="cards-grid">
            {filtered.map(q => <QuizCard key={q.id} quiz={q} onStart={onStart} />)}
          </div>
        </div>
      </section>

      {/* ── Ad ── */}
      <div className="container">
        <div className="ad-slot ad-slot-horizontal">Advertisement</div>
      </div>

      {/* ── Tips ── */}
      <section className="tips-section" id="about">
        <div className="container">
          <h2 className="section-title" style={{ textAlign: "center", marginBottom: "2rem" }}>
            How to Use This Site
          </h2>
          <div className="tips-grid">
            {[
              { icon: "🎯", title: "Start with Set 1", text: "Each set covers different topics. Set 1 is calibrated easy-to-medium. Later sets increase difficulty with trap questions." },
              { icon: "📖", title: "Read Every Explanation", text: "The explanation is where the learning happens — especially when you got the answer right for the wrong reason." },
              { icon: "⏱️", title: "Time Yourself", text: "AB-731: 45 sec/q. CPMAI: 80 sec/q. AIF-C01: 83 sec/q. Practice under time pressure before the real exam." },
              { icon: "🔁", title: "Repeat Weak Sections", text: "Use the section score to identify gaps. Retake individual sections rather than full sets when drilling weaknesses." },
            ].map(tip => (
              <div key={tip.title} className="tip-card">
                <div className="tip-icon">{tip.icon}</div>
                <h3>{tip.title}</h3>
                <p>{tip.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Bottom Ad ── */}
      <div className="container">
        <div className="ad-slot ad-slot-horizontal">Advertisement</div>
      </div>

      {/* ── Footer ── */}
      <footer className="site-footer">
        <div className="container">
          <p>
            <strong>AIExamPrep</strong> · Free practice questions for AWS AIF-C01, Google GenAI Leader, AB-731, and PMI-CPMAI ·
            Not affiliated with AWS, Google, Microsoft, or PMI
          </p>
          <p style={{ marginTop: "0.5rem", color: "#64748b" }}>
            AWS, AIF-C01, Google, Microsoft, AB-731, PMI, and CPMAI are trademarks of their respective owners.
          </p>
        </div>
      </footer>
    </div>
  );
}
