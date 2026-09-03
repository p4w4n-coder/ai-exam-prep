import React, { useEffect, useRef } from "react";
import "./HomePage.css";

/*
  AIExamReady generic landing page.
  Certification-specific content stays inside certification/practice pages.
  Change PRACTICE_PATH / STUDY_PATH below only if your existing routes use
  different paths.
*/

const PRACTICE_PATH = "/practice";
const STUDY_PATH = "/study-guide";

const certifications = [
  {
    provider: "AWS",
    name: "AIF-C01",
    description: "AI Practitioner preparation with focused study and practice.",
  },
  {
    provider: "Google",
    name: "AI Certification",
    description: "Practice resources for Google's AI certification path.",
  },
  {
    provider: "Microsoft",
    name: "AI Certification",
    description: "Focused practice for Microsoft's AI credentials.",
  },
  {
    provider: "PMI",
    name: "CPMAI",
    description: "Study and practice for AI project-management certification.",
  },
];

const benefits = [
  {
    number: "01",
    title: "Study Resources",
    text: "Review concise explanations, terminology, concepts, and topic summaries before practicing.",
  },
  {
    number: "02",
    title: "Practice Sets",
    text: "Choose focused practice or broader simulations depending on where you are in your preparation.",
  },
  {
    number: "03",
    title: "Review & Improve",
    text: "Use explanations and results to decide what to revisit instead of simply repeating questions.",
  },
];

export default function HomePage() {
  const revealRef = useRef(null);

  useEffect(() => {
    const root = revealRef.current;
    if (!root) return;

    const items = root.querySelectorAll(".aier-reveal");
    if (!("IntersectionObserver" in window)) {
      items.forEach((item) => item.classList.add("aier-visible"));
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("aier-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    items.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="aier-home" ref={revealRef}>
      <header className="aier-header">
        <div className="aier-container aier-nav">
          <a className="aier-brand" href="/" aria-label="AIExamReady home">
            <span className="aier-brand-mark" aria-hidden="true">
              <svg viewBox="0 0 32 42" role="img">
                <path d="M20 1 4 24h10L11 41l18-25H18z" />
              </svg>
            </span>
            <span>
              <strong>AIExamReady</strong>
              <small>AI Certification Practice</small>
            </span>
          </a>

          <nav className="aier-nav-links" aria-label="Main navigation">
            <a href="#certifications">Certifications</a>
            <a href="#approach">Our Approach</a>
            <a href="#resources">Resources</a>
            <a className="aier-nav-cta" href={PRACTICE_PATH}>
              Start Practicing →
            </a>
          </nav>
        </div>
      </header>

      <main>
        <section className="aier-hero">
          <div className="aier-hero-glow aier-glow-one" aria-hidden="true" />
          <div className="aier-hero-glow aier-glow-two" aria-hidden="true" />

          <div className="aier-container aier-hero-content">
            <div className="aier-pill">100% free · No signup · No credit card</div>

            <h1>
              Prepare smarter.
              <br />
              <span>Practice with purpose.</span>
            </h1>

            <p>
              Build confidence for your certification with focused study
              resources, original practice questions, and clear explanations.
            </p>

            <div className="aier-actions">
              <a className="aier-primary" href={PRACTICE_PATH}>
                Start Practicing Free →
              </a>
              <a className="aier-secondary" href={STUDY_PATH}>
                Explore Resources
              </a>
            </div>

            <div className="aier-trust">
              AI certification preparation · Multiple certification tracks ·
              Learn at your own pace
            </div>
          </div>
        </section>

        <section id="certifications" className="aier-section aier-soft aier-reveal">
          <div className="aier-container">
            <div className="aier-section-head">
              <div className="aier-kicker">Choose your path</div>
              <h2>One place for certification preparation.</h2>
              <p>Select a certification and jump straight into focused practice.</p>
            </div>

            <div className="aier-paths">
              {certifications.map((cert) => (
                <a className="aier-path" href={PRACTICE_PATH} key={cert.provider}>
                  <span className="aier-tag">{cert.provider}</span>
                  <h3>{cert.name}</h3>
                  <p>{cert.description}</p>
                  <span className="aier-card-link">Practice →</span>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section id="approach" className="aier-feature aier-reveal">
          <div className="aier-container aier-feature-grid">
            <div className="aier-feature-copy">
              <div className="aier-kicker">Our approach</div>
              <h2>Don&apos;t just memorize answers. Understand why.</h2>
              <p>
                AIExamReady is designed around a simple learning loop:
                understand a concept, practice it, review the reasoning, and
                focus your next study session where it matters.
              </p>

              <div className="aier-feature-items">
                <div className="aier-feature-item">
                  <span className="aier-check">✓</span>
                  <span>
                    <strong>Focused practice</strong>
                    <small>Work through questions organized by certification topics.</small>
                  </span>
                </div>
                <div className="aier-feature-item">
                  <span className="aier-check">✓</span>
                  <span>
                    <strong>Explanations that teach</strong>
                    <small>Use answer explanations to reinforce the underlying concept.</small>
                  </span>
                </div>
                <div className="aier-feature-item">
                  <span className="aier-check">✓</span>
                  <span>
                    <strong>Track your progress</strong>
                    <small>See what you know and where another review would help.</small>
                  </span>
                </div>
              </div>
            </div>

            <div className="aier-practice-preview" aria-label="Practice question preview">
              <div className="aier-preview-top">
                <span>Practice Session</span>
                <span>Question 47 / 65</span>
              </div>

              <div className="aier-progress">
                <span />
              </div>

              <div className="aier-question">
                <small>CERTIFICATION PRACTICE</small>
                <h3>
                  Which approach best helps a team use relevant information to
                  improve the quality of an AI system&apos;s responses?
                </h3>

                <div className="aier-option">A. Use relevant retrieved context</div>
                <div className="aier-option">B. Increase randomness without testing</div>
                <div className="aier-option">C. Remove evaluation criteria</div>
                <div className="aier-option">D. Ignore the source information</div>
              </div>
            </div>
          </div>
        </section>

        <section id="resources" className="aier-section aier-reveal">
          <div className="aier-container">
            <div className="aier-section-head">
              <div className="aier-kicker">Built for learning</div>
              <h2>Everything you need to study with intention.</h2>
              <p>
                Keep the landing page simple; use the deeper pages for detailed
                material.
              </p>
            </div>

            <div className="aier-benefits">
              {benefits.map((item) => (
                <article className="aier-benefit" key={item.number}>
                  <span>{item.number}</span>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="aier-final aier-reveal">
          <div className="aier-container">
            <h2>Ready to start preparing?</h2>
            <p>
              Choose your certification, explore the study resources, and begin
              practicing at your own pace.
            </p>
            <a className="aier-primary" href={PRACTICE_PATH}>
              Start Practicing Free →
            </a>
          </div>
        </section>
      </main>

      <footer className="aier-footer">
        <div className="aier-container aier-footer-inner">
          <span>© AIExamReady · Independent study resource</span>
          <span>Not affiliated with certification providers.</span>
        </div>
      </footer>
    </div>
  );
}
