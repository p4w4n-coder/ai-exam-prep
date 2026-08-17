import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import quizData from '../data/quizData.json';

const EXAM_TYPES = [
  { id: 'AB-731',  label: 'Microsoft AB-731',         color: '#0078D4', bg: '#e8f4ff' },
  { id: 'CPMAI',   label: 'PMI CPMAI',                color: '#5C2D91', bg: '#f3eeff' },
  { id: 'AIF-C01', label: 'AWS AIF-C01',              color: '#FF9900', bg: '#fff7e8' },
  { id: 'GAIL',    label: 'Google GenAI Leader',      color: '#4285F4', bg: '#e8f0fe' },
];

export default function HomePage() {
  const navigate = useNavigate();
  const [selectedExam, setSelectedExam] = useState('AB-731');

  const filtered = quizData.filter(q => q.exam === selectedExam);
  const totalQ = filtered.reduce((a, q) => a + q.total, 0);

  const examInfo = EXAM_TYPES.find(e => e.id === selectedExam);

  return (
    <div style={{ maxWidth: 900, margin: '0 auto', padding: '24px 16px', fontFamily: 'system-ui, sans-serif' }}>
      <div style={{ textAlign: 'center', marginBottom: 32 }}>
        <h1 style={{ fontSize: 28, fontWeight: 700, marginBottom: 8 }}>AI Exam Prep</h1>
        <p style={{ color: '#555', fontSize: 15 }}>
          Free practice questions for AI certifications
        </p>
      </div>

      {/* Exam type tabs */}
      <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', justifyContent: 'center', marginBottom: 28 }}>
        {EXAM_TYPES.map(exam => (
          <button
            key={exam.id}
            onClick={() => setSelectedExam(exam.id)}
            style={{
              padding: '8px 20px',
              borderRadius: 24,
              border: `2px solid ${selectedExam === exam.id ? exam.color : '#ddd'}`,
              background: selectedExam === exam.id ? exam.bg : '#fff',
              color: selectedExam === exam.id ? exam.color : '#666',
              fontWeight: selectedExam === exam.id ? 700 : 400,
              cursor: 'pointer',
              fontSize: 14,
              transition: 'all 0.15s',
            }}
          >
            {exam.label}
          </button>
        ))}
      </div>

      {/* Stats */}
      <div style={{ textAlign: 'center', marginBottom: 24, color: '#777', fontSize: 14 }}>
        {filtered.length} practice sets · {totalQ} questions
      </div>

      {/* Quiz cards */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: 16 }}>
        {filtered.map(quiz => (
          <div
            key={quiz.id}
            onClick={() => navigate(`/quiz/${quiz.id}`)}
            style={{
              background: '#fff',
              border: '1px solid #e5e7eb',
              borderRadius: 12,
              padding: 20,
              cursor: 'pointer',
              transition: 'box-shadow 0.15s, border-color 0.15s',
              borderLeft: `4px solid ${examInfo.color}`,
            }}
            onMouseEnter={e => { e.currentTarget.style.boxShadow = '0 4px 16px rgba(0,0,0,0.1)'; e.currentTarget.style.borderColor = examInfo.color; }}
            onMouseLeave={e => { e.currentTarget.style.boxShadow = 'none'; e.currentTarget.style.borderColor = '#e5e7eb'; }}
          >
            <div style={{ fontWeight: 600, fontSize: 15, marginBottom: 6, color: '#1a1a1a' }}>{quiz.title}</div>
            <div style={{ fontSize: 13, color: '#888' }}>{quiz.total} questions · {quiz.sections.length} sections</div>
            <div style={{ marginTop: 14, display: 'inline-block', background: examInfo.bg, color: examInfo.color, fontSize: 12, fontWeight: 600, padding: '4px 12px', borderRadius: 12 }}>
              Start →
            </div>
          </div>
        ))}
      </div>

      {filtered.length === 0 && (
        <div style={{ textAlign: 'center', padding: 60, color: '#aaa' }}>
          No practice sets found for {selectedExam}
        </div>
      )}
    </div>
  );
}
