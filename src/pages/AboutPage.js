import "./AboutPage.css";

export default function AboutPage({ onBack }) {
  return (
    <div className="about-page">
      <div className="about-inner">

        <button className="back-link" onClick={onBack}>← Back to Home</button>

        <div className="about-hero">
          <div className="about-icon">⚡</div>
          <h1 className="about-title">About AIExamReady</h1>
          <p className="about-subtitle">Free AI certification exam preparation — built by a practitioner, for practitioners</p>
        </div>

        <div className="about-section">
          <h2>What is AIExamReady?</h2>
          <p>
            AIExamReady is a free, independent exam preparation resource for professionals
            studying for AI certification exams — specifically the <strong>Microsoft AB-731
            AI Transformation Leader</strong> and <strong>PMI-CPMAI Certified Professional
            in Managing AI</strong> certifications.
          </p>
          <p>
            The site provides over 1,082 scenario-based practice questions with detailed
            explanations, study notes covering all exam domains, and video study guides.
            Everything is completely free — no signup, no paywall, no limits.
          </p>
        </div>

        <div className="about-section">
          <h2>Who Built This?</h2>
          <p>
            This site was built by an AI transformation professional with 18+ years of
            experience in the telecommunications industry, working in competitive intelligence,
            network performance analysis, and AI-driven business transformation.
          </p>
          <p>
            Having gone through the process of preparing for both the AB-731 and CPMAI
            certifications, the goal was simple: create the high-quality, scenario-based
            practice questions that didn't exist freely online — and share them with
            everyone preparing for the same exams.
          </p>
        </div>

        <div className="about-section">
          <h2>What Exams Are Covered?</h2>
          <div className="about-exams">
            <div className="about-exam-card">
              <div className="about-exam-badge" style={{ background: "#0078d4" }}>Microsoft</div>
              <h3>AB-731 AI Transformation Leader</h3>
              <ul>
                <li>45 minutes · 700/1000 passing score</li>
                <li>Covers Copilot, Azure AI, Responsible AI</li>
                <li>Governance, licensing, and Foundry</li>
                <li>5 full practice sets · 840+ questions</li>
              </ul>
            </div>
            <div className="about-exam-card">
              <div className="about-exam-badge" style={{ background: "#e03c31" }}>PMI</div>
              <h3>PMI-CPMAI Certified Professional in Managing AI</h3>
              <ul>
                <li>160 minutes · 120 questions · Pass/Fail</li>
                <li>Covers AI project lifecycle and governance</li>
                <li>Data management, model evaluation, ethics</li>
                <li>2 full practice sets · 240+ questions</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="about-section">
          <h2>Is This Free?</h2>
          <p>
            Yes — completely free, forever. No account required. No premium tier.
            No content locked behind a paywall. All 1,082+ questions and study notes
            are accessible to everyone without signing up.
          </p>
          <p>
            The site is supported by Google AdSense advertising to cover hosting costs.
            No user data is collected beyond standard anonymous analytics.
          </p>
        </div>

        <div className="about-section">
          <h2>Contact</h2>
          <p>
            For questions, feedback, or to report an error in any question or explanation,
            please email: <a href="mailto:hello@aiexamready.com">hello@aiexamready.com</a>
          </p>
          <p>
            This is an independent resource and is not affiliated with, endorsed by,
            or connected to Microsoft, PMI, or any other certification body.
            Microsoft, AB-731, PMI, and CPMAI are trademarks of their respective owners.
          </p>
        </div>

        <div className="about-disclaimer">
          <p>
            © 2026 AIExamReady.com · Independent educational resource ·
            Not affiliated with Microsoft or PMI ·
            <a href="mailto:hello@aiexamready.com">hello@aiexamready.com</a>
          </p>
        </div>

      </div>
    </div>
  );
}
