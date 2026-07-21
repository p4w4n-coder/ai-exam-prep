import "./HomePage.css";

const EXAM_INFO = {
  "AB-731": {
    label: "Microsoft AB-731",
    subtitle: "AI Transformation Leader",
    badge: "Microsoft",
    badgeColor: "#0078d4",
    desc: "45 min · 700/1000 passing · Scenario-based · 8 responsible AI standards",
    icon: "🤖",
  },
  "CPMAI": {
    label: "PMI-CPMAI",
    subtitle: "Certified Professional in Managing AI",
    badge: "PMI",
    badgeColor: "#e03c31",
    desc: "160 min · 120 questions · 5 domains · Pass/Fail",
    icon: "📋",
  },
};

function QuizCard({ quiz, onStart }) {
  const info = EXAM_INFO[quiz.exam];
  return (
    <div className="quiz-card" style={{ "--accent-color": quiz.color }}>
      <div className="quiz-card-header">
        <span className="quiz-badge" style={{ background: info.badgeColor }}>
          {info.badge}
        </span>
        <span className="quiz-count">{quiz.total} questions</span>
      </div>
      <div className="quiz-card-icon">{info.icon}</div>
      <h3 className="quiz-card-title">{quiz.title}</h3>
      <p className="quiz-card-sections">
        {quiz.sections.length} sections
        {quiz.sections.slice(0, 3).map(s => (
          <span key={s.id} className="section-pill">{s.title.split(":")[0].trim()}</span>
        ))}
        {quiz.sections.length > 3 && (
          <span className="section-pill">+{quiz.sections.length - 3} more</span>
        )}
      </p>
      <button className="start-btn" onClick={() => onStart(quiz.id)}>
        Start Practice →
      </button>
    </div>
  );
}

export default function HomePage({ quizzes, onStart, onStudy, onAbout }) {
  const ab731 = quizzes.filter(q => q.exam === "AB-731");
  const cpmai = quizzes.filter(q => q.exam === "CPMAI");
  const totalQ = quizzes.reduce((a, q) => a + q.total, 0);

  return (
    <div className="home">
      {/* Header */}
      <header className="site-header">
        <div className="header-inner">
          <div className="logo">
            <span className="logo-icon">⚡</span>
            <span className="logo-text">AI<span className="logo-accent">Exam</span>Prep</span>
          </div>
          <nav className="header-nav">
            <a href="#ab731">AB-731</a>
            <a href="#cpmai">CPMAI</a>
            <button className="nav-study-btn" onClick={onStudy}>📖 Study Notes</button>
            <button className="nav-study-btn" onClick={onAbout}>About</button>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="hero">
        <div className="hero-inner">
          <div className="hero-eyebrow">Free · No signup · No limits</div>
          <h1 className="hero-title">
            Crack Your<br />
            <span className="hero-gradient">AI Certification</span><br />
            Exam
          </h1>
          <p className="hero-sub">
            {totalQ.toLocaleString()} practice questions for <strong>Microsoft AB-731</strong> and <strong>PMI-CPMAI</strong> —
            scenario-based, with full explanations. Built by practitioners, completely free.
          </p>
          <div className="hero-stats">
            <div className="stat">
              <span className="stat-num">{totalQ.toLocaleString()}</span>
              <span className="stat-label">Questions</span>
            </div>
            <div className="stat-div" />
            <div className="stat">
              <span className="stat-num">7</span>
              <span className="stat-label">Practice Sets</span>
            </div>
            <div className="stat-div" />
            <div className="stat">
              <span className="stat-num">2</span>
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

      {/* Study Notes Banner */}
      <div className="container">
        <div className="study-banner" onClick={onStudy}>
          <div className="study-banner-left">
            <span className="study-banner-icon">📖</span>
            <div>
              <div className="study-banner-title">New: Study Notes</div>
              <div className="study-banner-sub">Key concepts, exam traps, and domain summaries for AB-731 and CPMAI</div>
            </div>
          </div>
          <button className="study-banner-btn">Read Notes →</button>
        </div>
      </div>

      {/* Ad slot — top */}
      <div className="container">
        <div className="ad-slot ad-slot-horizontal">
          {/* Google AdSense — replace after approval
          <ins class="adsbygoogle" style="display:block" data-ad-client="ca-pub-XXXXXXXX"
            data-ad-slot="XXXXXXXXXX" data-ad-format="auto" data-full-width-responsive="true"></ins>
          <script>(adsbygoogle = window.adsbygoogle || []).push({});</script>
          */}
          Advertisement
        </div>
      </div>

      {/* AB-731 section */}
      <section className="exam-section" id="ab731">
        <div className="container">
          <div className="section-header">
            <div className="section-badge" style={{ background: "#0078d4" }}>Microsoft</div>
            <h2 className="section-title">AB-731 — AI Transformation Leader</h2>
            <p className="section-desc">
              45 minutes · 700/1000 to pass · Covers Copilot, Azure AI, Responsible AI, governance, licensing, and Foundry.
              Questions match the real exam's scenario-based format.
            </p>
          </div>
          <div className="cards-grid">
            {ab731.map(q => <QuizCard key={q.id} quiz={q} onStart={onStart} />)}
          </div>
        </div>
      </section>

      {/* Mid-page ad */}
      <div className="container">
        <div className="ad-slot ad-slot-horizontal">Advertisement</div>
      </div>

      {/* CPMAI section */}
      <section className="exam-section" id="cpmai">
        <div className="container">
          <div className="section-header">
            <div className="section-badge" style={{ background: "#e03c31" }}>PMI</div>
            <h2 className="section-title">PMI-CPMAI — Certified Professional in Managing AI</h2>
            <p className="section-desc">
              160 minutes · 120 questions · Pass/Fail · Covers AI project lifecycle, responsible AI,
              data governance, model evaluation, and operationalization. PMI scenario-based FIRST/BEST/MOST format.
            </p>
          </div>
          <div className="cards-grid">
            {cpmai.map(q => <QuizCard key={q.id} quiz={q} onStart={onStart} />)}
          </div>
        </div>
      </section>

      {/* Exam tips */}
      <section className="tips-section" id="about">
        <div className="container">
          <h2 className="section-title" style={{ textAlign: "center", marginBottom: "2rem" }}>
            How to Use This Site
          </h2>
          <div className="tips-grid">
            <div className="tip-card">
              <div className="tip-icon">🎯</div>
              <h3>Start with Set 1</h3>
              <p>Each set covers different topics. Set 1 is calibrated easy-to-medium. Later sets increase difficulty with trap questions.</p>
            </div>
            <div className="tip-card">
              <div className="tip-icon">📖</div>
              <h3>Read Every Explanation</h3>
              <p>The explanation is where the learning happens — especially when you got the answer right for the wrong reason.</p>
            </div>
            <div className="tip-card">
              <div className="tip-icon">⏱️</div>
              <h3>Time Yourself</h3>
              <p>AB-731: 45 seconds per question. CPMAI: 80 seconds per question. Practice under time pressure before the real exam.</p>
            </div>
            <div className="tip-card">
              <div className="tip-icon">🔁</div>
              <h3>Repeat Weak Sections</h3>
              <p>Use the section score at the end to identify gaps. Retake individual sections rather than full sets when drilling weaknesses.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom ad */}
      <div className="container">
        <div className="ad-slot ad-slot-horizontal">Advertisement</div>
      </div>

      {/* Footer */}
      <footer className="site-footer">
        <div className="container">
          <p>
            <strong>AIExamPrep</strong> · Free practice questions for AB-731 and PMI-CPMAI ·
            Not affiliated with Microsoft or PMI · Questions are original practice content
          </p>
          <p style={{ marginTop: "0.5rem", color: "#64748b" }}>
            Microsoft, AB-731, PMI, and CPMAI are trademarks of their respective owners.
            This site is an independent study resource.
          </p>
        </div>
      </footer>
    </div>
  );
}
