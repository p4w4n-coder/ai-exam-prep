import { useState } from "react";
import STUDY_NOTES from "../data/studyNotes";
import "./StudyPage.css";

function TrapCard({ trap, index }) {
  return (
    <div className="trap-card">
      <span className="trap-num">⚠ {index + 1}</span>
      <p>{trap}</p>
    </div>
  );
}

function SectionNote({ section, examColor }) {
  const [open, setOpen] = useState(false);
  return (
    <div className={`section-note ${open ? "section-note-open" : ""}`}
      style={{ "--exam-color": examColor }}>
      <button className="section-note-header" onClick={() => setOpen(!open)}>
        <span className="section-note-icon">{section.icon}</span>
        <span className="section-note-title">{section.title}</span>
        <span className="section-note-arrow">{open ? "▲" : "▼"}</span>
      </button>
      {open && (
        <div className="section-note-body">
          {section.keyPoints.map((point, i) => (
            <div key={i} className="key-point">
              <div className="key-point-heading">{point.heading}</div>
              <div className="key-point-body">{point.body}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

function ExamNotes({ data, onBack }) {
  return (
    <div className="exam-notes">
      <button className="back-link" onClick={onBack}>← Study Notes Home</button>

      <div className="exam-notes-header" style={{ "--exam-color": data.color }}>
        <h1 className="exam-notes-title">{data.label}</h1>
        <div className="exam-info-grid">
          {Object.entries(data.examInfo).map(([key, val]) => (
            <div key={key} className="exam-info-item">
              <span className="exam-info-label">{key.replace(/([A-Z])/g, ' $1').trim()}</span>
              <span className="exam-info-val">{val}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Top exam traps */}
      <div className="traps-section">
        <h2 className="traps-title">
          <span>🎯</span> Top Exam Traps — Know These Cold
        </h2>
        <div className="traps-grid">
          {data.topTraps.map((trap, i) => (
            <TrapCard key={i} trap={trap} index={i} />
          ))}
        </div>
      </div>

      {/* Ad slot */}
      <div className="ad-slot ad-slot-horizontal">Advertisement</div>

      {/* Section notes */}
      <div className="sections-notes">
        <h2 className="sections-notes-title">Domain Study Notes</h2>
        <p className="sections-notes-sub">
          Click any domain to expand key concepts, definitions, and exam-critical distinctions.
        </p>
        <div className="sections-notes-list">
          {data.sections.map((section) => (
            <SectionNote key={section.id} section={section} examColor={data.color} />
          ))}
        </div>
      </div>

      {/* Ad slot */}
      <div className="ad-slot ad-slot-horizontal">Advertisement</div>

      <div className="study-cta">
        <h3>Ready to test your knowledge?</h3>
        <p>Practice questions with full explanations for every answer.</p>
      </div>
    </div>
  );
}

export default function StudyPage({ onBack, onStartQuiz }) {
  const [activeExam, setActiveExam] = useState(null);

  if (activeExam) {
    return (
      <div className="study-page">
        <ExamNotes
          data={STUDY_NOTES[activeExam]}
          onBack={() => setActiveExam(null)}
        />
      </div>
    );
  }

  return (
    <div className="study-page">
      <div className="study-home">
        <button className="back-link" onClick={onBack}>← All Exams</button>
        <h1 className="study-home-title">Study Notes</h1>
        <p className="study-home-sub">
          Concise exam-focused notes covering key concepts, definitions,
          and the most commonly tested distinctions. Read first, then practice.
        </p>

        <div className="study-cards">
          {Object.entries(STUDY_NOTES).map(([key, exam]) => (
            <div
              key={key}
              className="study-card"
              style={{ "--exam-color": exam.color }}
              onClick={() => setActiveExam(key)}
            >
              <div className="study-card-color-bar" />
              <div className="study-card-content">
                <h2 className="study-card-title">{exam.label}</h2>
                <div className="study-card-meta">
                  <span>{exam.examInfo.questions}</span>
                  <span>·</span>
                  <span>{exam.examInfo.duration}</span>
                  <span>·</span>
                  <span>{exam.sections.length} domains</span>
                </div>
                <div className="study-card-traps">
                  <span className="trap-preview-label">Top trap:</span>
                  <span className="trap-preview-text">{exam.topTraps[0]}</span>
                </div>
                <button className="study-card-btn">
                  Open Study Notes →
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="study-tip">
          <span className="study-tip-icon">💡</span>
          <p><strong>How to use these notes:</strong> Read the Top Exam Traps first — these are the distinctions that catch most candidates. Then expand each domain and focus on the concepts you find unfamiliar. Finish with a practice quiz to test retention.</p>
        </div>
      </div>
    </div>
  );
}
