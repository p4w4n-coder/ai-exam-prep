import { useState } from "react";
import "./HomePage.css";

const EXAMS = [
  {
    id: "AIF-C01", label: "AWS AIF-C01", fullName: "AWS Certified AI Practitioner",
    badge: "AWS", color: "#FF6B00", bg: "#FFF4EB", border: "#FFD4A8",
    duration: 90, qCount: 65, passing: "700/1000", level: "Foundational",
    domains: ["AI/ML Fundamentals","Generative AI","Foundation Models","Responsible AI","Security & Governance"],
  },
  {
    id: "GAIL", label: "Google GAIL", fullName: "Generative AI Leader",
    badge: "Google", color: "#4285F4", bg: "#EEF3FF", border: "#C3D5FF",
    duration: 90, qCount: 40, passing: "Pass/Fail", level: "Professional",
    domains: ["GenAI Fundamentals","GCP Offerings","Techniques","Business Strategy"],
  },
  {
    id: "AB-731", label: "Microsoft AB-731", fullName: "AI Transformation Leader",
    badge: "Microsoft", color: "#0078D4", bg: "#EFF6FF", border: "#B3D4F5",
    duration: 45, qCount: 50, passing: "700/1000", level: "Specialist",
    domains: ["Responsible AI","Copilot","Azure AI","Governance","Licensing"],
  },
  {
    id: "CPMAI", label: "PMI CPMAI", fullName: "Certified Professional in Managing AI",
    badge: "PMI", color: "#C8102E", bg: "#FFF0F2", border: "#FFB3BE",
    duration: 160, qCount: 120, passing: "Pass/Fail", level: "Professional",
    domains: ["AI Lifecycle","Responsible AI","Data Governance","Model Evaluation","Ops"],
  },
];

const SET_CATEGORIES = ["All","Fundamentals","Services","GenAI","Simulations","Drills"];

function getCategoryForSet(title) {
  const t = title.toLowerCase();
  if (t.includes("simulation")) return "Simulations";
  if (t.includes("service") || t.includes("svc")) return "Services";
  if (t.includes("genai") || t.includes("gen ai") || t.includes("bedrock")) return "GenAI";
  if (t.includes("fundamental") || t.includes("set 1") || t.includes("set 2") || t.includes("set 3")) return "Fundamentals";
  if (t.includes("drill") || t.includes("retake") || t.includes("security")) return "Drills";
  return "Fundamentals";
}

function shortenPillText(text) {
  return text
    .replace(/tricky service pairs/i, "Service Pairs")
    .replace(/advanced scenario distinctions/i, "Advanced")
    .replace(/confirmed exam traps/i, "Exam Traps")
    .replace(/round \d+/i, "")
    .replace(/set \d+/i, "")
    .replace(/domain \d+:/i, "")
    .replace(/\(.*?\)/g, "")
    .replace(/simulation \d+/i, "")
    .split("·")[0]
    .split("—")[0]
    .trim()
    .slice(0, 22);
}

function QuizCard({ quiz, exam, onStart }) {
  const pills = quiz.sections.slice(0, 4).map(s => shortenPillText(s.title)).filter(Boolean);
  const extra = quiz.sections.length > 4 ? quiz.sections.length - 4 : 0;
  const mins = Math.round(quiz.total * 1.4);

  return (
    <div className="qcard" onClick={() => onStart(quiz.id)}>
      <div className="qcard-header" style={{ borderLeft: `3px solid ${exam.color}` }}>
        <div className="qcard-meta">
          <span className="qcard-badge" style={{ background: exam.color }}>{exam.badge}</span>
          <span className="qcard-title">{quiz.title}</span>
        </div>
        <div className="qcard-stats">
          <span className="qcard-qcount">{quiz.total}q</span>
          <span className="qcard-time">~{mins} min</span>
        </div>
      </div>
      <div className="qcard-pills">
        {pills.map(p => <span key={p} className="qcard-pill">{p}</span>)}
        {extra > 0 && <span className="qcard-pill qcard-pill-more">+{extra}</span>}
      </div>
      <button className="qcard-btn" style={{ background: exam.color }} onClick={e => { e.stopPropagation(); onStart(quiz.id); }}>
        Start Practice →
      </button>
    </div>
  );
}

export default function HomePage({ quizzes, onStart, onStudy, onAbout }) {
  const [activeExam, setActiveExam] = useState("AIF-C01");
  const [activeCategory, setActiveCategory] = useState("All");
  const [menuOpen, setMenuOpen] = useState(false);

  const exam = EXAMS.find(e => e.id === activeExam);
  const totalQ = quizzes.reduce((a, q) => a + q.total, 0);

  const filtered = quizzes
    .filter(q => q.exam === activeExam)
    .filter(q => activeCategory === "All" || getCategoryForSet(q.title) === activeCategory);

  const availableCategories = SET_CATEGORIES.filter(cat =>
    cat === "All" || quizzes.filter(q => q.exam === activeExam).some(q => getCategoryForSet(q.title) === cat)
  );

  return (
    <div className="home">

      {/* ── Header ── */}
      <header className="site-header">
        <div className="header-inner">
          <div className="logo">
            <span className="logo-mark">⚡</span>
            <div>
              <div className="logo-name">AIExamPrep</div>
              <div className="logo-tagline">AI Certification Practice</div>
            </div>
          </div>
          <nav className="header-nav-desktop">
            <button className="nav-link" onClick={onStudy}>Study Notes</button>
            <button className="nav-link" onClick={onAbout}>How It Works</button>
            <button className="nav-cta" onClick={() => document.getElementById("practice").scrollIntoView({ behavior: "smooth" })}>
              Start Practicing →
            </button>
          </nav>
          <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>☰</button>
        </div>
        {menuOpen && (
          <div className="mobile-menu">
            <button onClick={() => { onStudy(); setMenuOpen(false); }}>📖 Study Notes</button>
            <button onClick={() => { onAbout(); setMenuOpen(false); }}>How It Works</button>
            {EXAMS.map(e => (
              <button key={e.id} onClick={() => { setActiveExam(e.id); setMenuOpen(false); }}
                style={{ color: activeExam === e.id ? e.color : undefined, fontWeight: activeExam === e.id ? 700 : 400 }}>
                {e.label}
              </button>
            ))}
          </div>
        )}
      </header>

      {/* ── Hero ── */}
      <section className="hero">
        <div className="hero-inner">
          <div className="hero-free-tag">100% free · No signup · No credit card</div>
          <h1 className="hero-title">
            Pass your AI certification<br />
            <span className="hero-accent">with focused practice.</span>
          </h1>
          <p className="hero-desc">
            Practice realistic questions, identify weak areas, and build confidence before exam day.
          </p>
          <button className="hero-cta" onClick={() => document.getElementById("practice").scrollIntoView({ behavior: "smooth" })}>
            Start Practicing Free →
          </button>
          <div className="hero-exams-line">
            {EXAMS.map((e, i) => (
              <span key={e.id}>{i > 0 && <span className="hero-dot">·</span>}{e.label}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ── Stats bar ── */}
      <div className="stats-bar">
        <div className="stats-inner">
          {[
            { n: totalQ.toLocaleString(), l: "Practice Questions" },
            { n: quizzes.length, l: "Practice Sets" },
            { n: "4", l: "Certifications" },
            { n: "$0", l: "Cost Forever" },
          ].map(s => (
            <div key={s.l} className="stat-item">
              <div className="stat-n">{s.n}</div>
              <div className="stat-l">{s.l}</div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Why different ── */}
      <section className="why-section">
        <div className="container">
          <div className="why-grid">
            {[
              { icon: "⚡", title: "Targeted Practice", text: "Questions organized around published exam objectives, with explanations that teach the underlying concept." },
              { icon: "🎯", title: "Identify Weak Areas", text: "Section-level scoring shows exactly where to focus your study time." },
              { icon: "📈", title: "Exam-Ready Format", text: "Original scenario-based practice designed to test application of the published objectives." },
            ].map(w => (
              <div key={w.title} className="why-card">
                <div className="why-icon">{w.icon}</div>
                <div>
                  <div className="why-title">{w.title}</div>
                  <div className="why-text">{w.text}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── AIF-C01 publisher content ── */}
      {activeExam === "AIF-C01" && (
        <section className="aif-guide-section">
          <div className="container">
            <div className="section-label">AIF-C01 study guide</div>
            <h2 className="aif-guide-title">Learn the concepts before you practice them</h2>
            <p className="aif-guide-intro">AIExamPrep is an independent study resource. This guide follows the five published AIF-C01 content domains and provides original explanations and practice activities rather than reproducing AWS exam questions.</p>
            <div className="aif-domain-grid">
              {[
                ["1", "Fundamentals of AI and ML", "20%", "AI terminology, use cases, lifecycle, MLOps, and model metrics."],
                ["2", "Fundamentals of Generative AI", "24%", "GenAI concepts, foundation-model lifecycle, limitations, AWS infrastructure, and cost tradeoffs."],
                ["3", "Applications of Foundation Models", "28%", "Model selection, RAG, prompt engineering, customization, agents, and evaluation."],
                ["4", "Guidelines for Responsible AI", "14%", "Responsible development, bias, fairness, transparency, and accountability."],
                ["5", "Security, Compliance, and Governance for AI Solutions", "14%", "Security, compliance, governance, risk controls, and oversight."],
              ].map(([n, title, weight, text]) => (
                <article className="aif-domain-card" key={n}>
                  <div className="aif-domain-number">{n}</div>
                  <div>
                    <div className="aif-domain-weight">{weight}</div>
                    <h3>{title}</h3>
                    <p>{text}</p>
                  </div>
                </article>
              ))}
            </div>
            <div className="publisher-note">
              <strong>Editorial note:</strong> Practice questions on this site are independently written. AWS, AIF-C01, and AWS Certified AI Practitioner are trademarks of Amazon Web Services, Inc.; AIExamPrep is not affiliated with or endorsed by AWS.
            </div>
          </div>
        </section>
      )}

      {/* ── Practice Sets ── */}
      <section className="practice-section" id="practice">
        <div className="container">

          {/* Certification selector */}
          <div className="section-label">Choose your certification</div>
          <div className="cert-tabs">
            {EXAMS.map(e => (
              <button
                key={e.id}
                className={`cert-tab ${activeExam === e.id ? "cert-tab-active" : ""}`}
                style={activeExam === e.id ? { borderColor: e.color, color: e.color, background: e.bg } : {}}
                onClick={() => { setActiveExam(e.id); setActiveCategory("All"); }}
              >
                <span className="cert-tab-label">{e.label}</span>
                <span className="cert-tab-count">{quizzes.filter(q => q.exam === e.id).length} sets</span>
              </button>
            ))}
          </div>

          {/* Exam info strip */}
          <div className="exam-strip" style={{ background: exam.bg, borderColor: exam.border }}>
            <div className="es-left">
              <span className="es-badge" style={{ background: exam.color }}>{exam.badge}</span>
              <div>
                <div className="es-name">{exam.fullName}</div>
                <div className="es-meta">
                  <span>⏱ {exam.duration} min</span>
                  <span>📝 {exam.qCount} questions</span>
                  <span>🎯 {exam.passing}</span>
                </div>
              </div>
            </div>
            <div className="es-domains">
              {exam.domains.map(d => <span key={d} className="es-domain" style={{ color: exam.color, borderColor: exam.border }}>{d}</span>)}
            </div>
          </div>

          {/* Category filter */}
          <div className="section-label" style={{ marginTop: "1.5rem" }}>Practice sets</div>
          <div className="cat-tabs">
            {availableCategories.map(cat => (
              <button
                key={cat}
                className={`cat-tab ${activeCategory === cat ? "cat-tab-active" : ""}`}
                style={activeCategory === cat ? { background: exam.color, borderColor: exam.color, color: "#fff" } : {}}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Cards grid */}
          <div className="cards-grid">
            {filtered.map(q => <QuizCard key={q.id} quiz={q} exam={exam} onStart={onStart} />)}
            {filtered.length === 0 && <p className="no-results">No sets found for this filter.</p>}
          </div>

        </div>
      </section>

      {/* ── Steps ── */}
      <section className="steps-section">
        <div className="container">
          <h2 className="steps-title">How it works</h2>
          <div className="steps-row">
            {[
              { n: "01", title: "Choose", sub: "Pick your certification" },
              { n: "02", title: "Study", sub: "Review key concepts" },
              { n: "03", title: "Practice", sub: "Focus on weak areas" },
              { n: "04", title: "Simulate", sub: "Test your readiness" },
            ].map((s, i) => (
              <div key={s.n} className="step">
                <div className="step-num">{s.n}</div>
                <div className="step-title">{s.title}</div>
                <div className="step-sub">{s.sub}</div>
                {i < 3 && <div className="step-arrow">→</div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Pre-footer CTA ── */}
      <section className="prefooter-cta">
        <div className="container">
          <h2 className="pfc-title">Ready to start practicing?</h2>
          <p className="pfc-sub">Build your confidence before exam day. Free, forever.</p>
          <button className="pfc-btn" onClick={() => document.getElementById("practice").scrollIntoView({ behavior: "smooth" })}>
            Start Practicing Free →
          </button>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="site-footer">
        <div className="container">
          <div className="footer-inner">
            <div>
              <div className="footer-logo">⚡ AIExamPrep</div>
              <div className="footer-desc">Free AI certification practice. No signup. No limits.</div>
            </div>
            <div className="footer-links">
              {EXAMS.map(e => <button key={e.id} className="footer-link" onClick={() => setActiveExam(e.id)}>{e.label}</button>)}
              <button className="footer-link" onClick={onStudy}>Study Notes</button>
            </div>
          </div>
          <div className="footer-bottom">
            Not affiliated with AWS, Google, Microsoft, or PMI · All trademarks belong to their respective owners
          </div>
        </div>
      </footer>
    </div>
  );
}
