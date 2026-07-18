const STUDY_NOTES = {
  "ab731": {
    label: "AB-731 AI Transformation Leader",
    color: "#38bdf8",
    examInfo: {
      duration: "45 minutes",
      passing: "700 / 1000",
      format: "Scenario-based multiple choice",
      questions: "~45 questions",
      provider: "Microsoft"
    },
    topTraps: [
      "8 responsible AI standards — not 6. Reliability & Safety are separate. Privacy & Security are separate.",
      "Researcher + Analyst share 25 combined queries/month per user — not separate limits.",
      "Work IQ requires 'Authenticate with Microsoft' mode — won't work with No Authentication.",
      "No migration path exists between classic and new Copilot Studio experiences.",
      "Free Copilot Chat (web-only) is included with M365 — no extra license needed.",
      "M365 E5 does NOT include M365 Copilot — it's a separate add-on.",
      "Batch API = asynchronous offline processing at discounted rates. PTU = consistent high-volume real-time.",
      "ExternalItem.Read.All scope required for Copilot connector knowledge sources.",
      "ZSA (Zero Standing Access) = no persistent Microsoft engineer access to customer data."
    ],
    sections: [
      {
        id: "genai-value",
        title: "Generative AI Business Value",
        icon: "🧠",
        video: "https://youtu.be/mtZMHZf4TDU",
        keyPoints: [
          { heading: "GenAI vs Traditional ML", body: "GenAI creates new content (text, images, code). Traditional ML predicts/classifies from patterns. Use ML for structured prediction (churn, fraud detection). Use GenAI for content creation, summarization, Q&A." },
          { heading: "Hallucination", body: "GenAI generates plausible but false content. Root cause: probabilistic token prediction, not fact retrieval. Fix: grounding (RAG) + human review + lower temperature." },
          { heading: "RAG vs Fine-tuning", body: "RAG: retrieves current content at query time. No retraining. Best for frequently changing data. Fine-tuning: retrains model weights on domain data. Best for style/terminology adaptation. Permanent change." },
          { heading: "Tokens & Cost", body: "Token = roughly one word or word-piece. Output tokens billed at higher rate than input. Verbose responses cost more. Context window = max tokens per interaction." },
          { heading: "Key Limitations", body: "Knowledge cutoff (stale after training date). Non-deterministic (same prompt = different outputs). Cannot access real-time data without grounding. May fabricate specific facts." }
        ]
      },
      {
        id: "copilot-tools",
        title: "Microsoft Copilot Tools & Selection",
        icon: "🛠️",
        keyPoints: [
          { heading: "M365 Copilot vs Copilot Chat", body: "Copilot Chat (free): web-grounded only, no org data. M365 Copilot (paid add-on): accesses emails, meetings, files, chats via Microsoft Graph. No new privileges — only sees what the user already has access to." },
          { heading: "Researcher vs Analyst", body: "Researcher: deep multi-source web + org research. Account briefs, competitor intelligence. Analyst: structured numerical data in spreadsheets. Both share 25 combined queries/month per user." },
          { heading: "Intelligent Recap", body: "Teams feature that synthesizes meetings into key topics, decisions, and action items. Different from raw transcription (word-for-word). Available even if you missed the meeting." },
          { heading: "Copilot in M365 Apps", body: "Word: draft, summarize, elevate. Excel: analyze data, create formulas. PowerPoint: generate decks from prompts. Outlook: draft replies, summarize threads. Teams: Intelligent Recap, meeting prep. Loop: team co-creation. Planner: generate project plans. OneNote: personal note capture." },
          { heading: "OneDrive Copilot", body: "Can summarize and compare up to 5 files without opening them. Best for multi-document comparison tasks." },
          { heading: "Copilot Connectors", body: "Index external data (Salesforce, SAP) into Microsoft Graph for semantic search by M365 Copilot. Requires ExternalItem.Read.All scope. Different from Power Platform connectors (live API, no data replication)." }
        ]
      },
      {
        id: "responsible-ai",
        title: "Responsible AI — 8 Standards",
        icon: "⚖️",
        keyPoints: [
          { heading: "The 8 Standards (not 6)", body: "1. Fairness — equitable outcomes across groups. 2. Reliability — consistent performance as designed. 3. Safety — no harmful outputs. 4. Privacy — what data is collected and how used. 5. Security — protection against unauthorized access. 6. Inclusiveness — benefits all people including those with disabilities. 7. Transparency — understandable to affected parties. 8. Accountability — humans take responsibility for AI outcomes." },
          { heading: "Reliability vs Safety", body: "Reliability: system performs consistently as designed across all users and contexts. Safety: system does not produce harmful, dangerous, or offensive content. A system can be reliable (consistent) but unsafe (consistently harmful)." },
          { heading: "Privacy vs Security", body: "Privacy: what data is collected, for what purpose, retained how long. Security: how that data is protected from unauthorized access or breach. You can have a clear privacy policy but poor security, and vice versa." },
          { heading: "Fairness vs Inclusiveness", body: "Fairness: no discriminatory outcomes across demographic groups. Inclusiveness: proactively designed to benefit all people including those with disabilities, diverse backgrounds, varying tech access." },
          { heading: "Red Teaming", body: "Adversarial testing before launch. Intentionally tries to break the AI, bypass guardrails, elicit harmful content, or manipulate through multi-turn conversations. Critical findings = launch blockers. Low-severity findings = monitor post-launch." },
          { heading: "Accountability in Practice", body: "Designate named owners for each AI system. Create human override mechanisms. Maintain audit trails for consequential decisions. Humans remain accountable for AI-assisted decisions." }
        ]
      },
      {
        id: "licensing",
        title: "Licensing & Adoption Strategy",
        icon: "📋",
        keyPoints: [
          { heading: "M365 Copilot Licensing", body: "Free tier: Copilot Chat (web-grounded). Paid add-on: M365 Copilot (org data access). Copilot Studio standalone: build agents with knowledge sources. Teams plan (some M365 SKUs): classic agents in Teams only — no GenAI, no other channels." },
          { heading: "Azure OpenAI Pricing", body: "Standard pay-as-you-go: variable/unproven volume. Provisioned throughput (PTU): consistent high-volume, reserved capacity, lower effective per-token cost. Batch API: large-scale asynchronous offline processing at ~50% discount." },
          { heading: "Copilot Studio Plans", body: "Teams plan: classic orchestration, Teams channel only. No GenAI. Excludes GCC, EDU A1, DOD. Standalone subscription: generative AI, all channels. Credits: variable/project-based usage." },
          { heading: "Adoption Best Practices", body: "AI champions should be business domain experts — not IT staff. Role-specific training beats generic AI awareness. Measure outcomes (time saved, quality) not activity (prompts submitted, logins). 30-day post-launch: intensive monitoring. 90-day review: validate business value vs Phase I criteria." },
          { heading: "Build / Buy / Extend", body: "Buy: M365 Copilot as-is when standard capabilities suffice. Extend: declarative agents, connectors, plugins to close specific gaps. Build: fully custom when requirements are genuinely unique. Extend beats Build for 80%+ of enterprise use cases." }
        ]
      },
      {
        id: "stp-compliance",
        title: "Service Trust Portal & Compliance",
        icon: "🔒",
        keyPoints: [
          { heading: "Service Trust Portal", body: "Microsoft's compliance documentation hub. Contains: ISO 27001, SOC 2, FedRAMP reports. Requires organizational Entra ID + qualifying M365/Azure subscription. Documents available for 18 months after publication. My Download History exportable as CSV." },
          { heading: "Zero Standing Access (ZSA)", body: "Microsoft engineers have no persistent access to customer data. Every access requires just-in-time approval, time-limited scope, least privilege, and full audit logging. Preventive control (vs detective controls like log monitoring)." },
          { heading: "Shared Responsibility Model", body: "Physical security: always Microsoft. Identity management within tenant: always customer. Data governance: always customer. OS/runtime (IaaS only): customer. Application layer (IaaS + PaaS): customer. Everything in SaaS: Microsoft except data governance and identity." },
          { heading: "CPMC Program", body: "Fee-based premium compliance program. Personalized regulatory guidance for enterprise customers with complex requirements. Not free — available to organizations with specific needs beyond self-service STP." },
          { heading: "Compliance Manager", body: "Pre-built control mappings for ISO 27001, NIST SP 800-53, SOC 2. Custom frameworks require manual mapping. Residual risk (after controls) compared to accepted threshold — not inherent risk." }
        ]
      },
      {
        id: "foundry-copilot-studio",
        title: "Foundry & Copilot Studio",
        icon: "⚙️",
        keyPoints: [
          { heading: "Microsoft Foundry", body: "Enterprise AI development platform. 1,900+ models in catalog. Platform access free — billed at model inference level. Instant Models (preview): call models by name without provisioning a deployment. Evaluation metrics: quality = 1-5 scale. Safety = 0-7 scale." },
          { heading: "Copilot Studio Authentication", body: "No authentication: anyone with URL can access — high risk with sensitive knowledge. Authenticate with Microsoft: Entra ID SSO. Required for Work IQ. Manual: OAuth/API key for external users." },
          { heading: "Work IQ", body: "Advanced SharePoint retrieval in Copilot Studio. More precise and higher volume context retrieval. Requires: M365 Copilot license in tenant + Authenticate with Microsoft mode. Not available with No Authentication." },
          { heading: "Knowledge Source Execution Order", body: "1. RAG-based structured data (Dataverse). 2. Document sources (SharePoint, Azure AI Search). 3. LLM generates response. Fixed order — not configurable by maker." },
          { heading: "Generative vs Classic Orchestration", body: "Classic: trigger-phrase matching, deterministic routing. Generative (new experience): AI dynamically selects components using names/descriptions. No migration path between experiences — must rebuild." },
          { heading: "Protection Status", body: "Shows: Authentication, Policies, Content moderation. Each: Protected / Needs review / Unknown. Threat detection active by default for all published agents. 'Needs review' on Policies = DLP violation." }
        ]
      }
    ]
  },
  "cpmai": {
    label: "PMI-CPMAI Certified Professional in Managing AI",
    color: "#f87171",
    examInfo: {
      duration: "160 minutes",
      passing: "Pass / Fail",
      format: "Scenario-based — FIRST / BEST / MOST",
      questions: "120 questions",
      provider: "PMI"
    },
    topTraps: [
      "AI is NOT always the answer — CPMAI explicitly requires evaluating non-AI alternatives first.",
      "Privacy Impact Assessment comes BEFORE masking, encrypting, or restricting data access.",
      "Go/no-go decisions require cross-functional stakeholders — not data scientists alone.",
      "Model card is the closure document for responsible AI handoff — not a technical spec.",
      "Pilot passing functional criteria does NOT equal production ready.",
      "More data is NOT always better — quality, representativeness, and relevance matter more.",
      "Accuracy ≠ adoption. High technical accuracy with low adoption is a change management failure.",
      "Test set must be completely separate — never used during training or algorithm selection.",
      "Data leakage: using information at training time that wouldn't be available at prediction time.",
      "Residual risk (after controls) is compared to accepted threshold — not inherent risk."
    ],
    sections: [
      {
        id: "responsible-ai",
        title: "Domain I: Responsible & Trustworthy AI (15%)",
        icon: "⚖️",
        keyPoints: [
          { heading: "Privacy Impact Assessment", body: "Must be completed BEFORE any data access, masking, encryption, or processing. Identifies privacy risks, regulatory requirements, and misuse potential. First step for any project handling personal data." },
          { heading: "Model Card", body: "The responsible AI closure document. Contains: performance metrics, known limitations, intended use, out-of-scope applications, residual risks. Required at project closure for responsible handoff to operations." },
          { heading: "Bias Testing", body: "Required BEFORE deployment — not after. Must cover relevant demographic and population subgroups. Cannot be skipped for timeline reasons. Vendor certification covers base model only — deployment-specific testing remains the organization's responsibility." },
          { heading: "Explainability", body: "Consequential decisions (credit, hiring, medical) require meaningful explanations for affected parties. Black-box models in regulated contexts need supplementary tools (SHAP, LIME, feature importance). Organizations must be able to explain individual AI decisions when challenged." },
          { heading: "Human Oversight", body: "Required for consequential AI decisions. Human override capability is a governance requirement — not optional. Accountability principle: humans remain responsible for AI-assisted decisions regardless of AI accuracy." },
          { heading: "Proxy Variables", body: "Variables that correlate with protected characteristics (ZIP code → race/ethnicity, name patterns → gender). Must be identified and managed even when explicit protected attributes are excluded from training." }
        ]
      },
      {
        id: "business-needs",
        title: "Domain II: Identify Business Needs & Solutions (26%)",
        icon: "🎯",
        keyPoints: [
          { heading: "Phase I Feasibility Assessment", body: "MANDATORY before committing to AI development. Evaluates: data availability, ethical implications, AI vs non-AI alternatives, success criteria, total cost of ownership. Cannot be skipped to accelerate timeline." },
          { heading: "AI vs Non-AI Decision", body: "If decision rules are well-defined, stable, and fully expressible in explicit logic → rules-based system, not AI. AI is justified when patterns are too complex to encode explicitly or when learning from data is needed. CPMAI explicitly requires honest non-AI alternative evaluation." },
          { heading: "Cognitive vs Non-Cognitive", body: "Cognitive problems: pattern recognition, language understanding, learning from data → AI appropriate. Non-cognitive problems: deterministic logic, explicit rules → no AI needed. The key Phase I distinction." },
          { heading: "Success Criteria", body: "Must be defined BEFORE committing to the project. Must be business outcomes (reduce fraud losses by X%) not technical metrics (achieve 90% accuracy). Without defined success criteria, there is no basis for go/no-go decisions." },
          { heading: "Go/No-Go Decision", body: "Requires cross-functional stakeholders: legal, compliance, risk, business owners, data governance. Not just data scientists. Technical feasibility alone is not sufficient for approval. Ethical high-risk findings require governance escalation." },
          { heading: "Total Cost of Ownership", body: "Includes: development, ongoing retraining, monitoring, change management, governance overhead, support. Sponsors must understand TCO before committing — not just initial development cost." }
        ]
      },
      {
        id: "data-needs",
        title: "Domain III: Identify Data Needs (26%)",
        icon: "🗄️",
        keyPoints: [
          { heading: "Data Readiness Assessment", body: "Phase II gate: volume, quality, access rights, legal consent basis, representativeness, freshness. All must be evaluated before Phase III development begins. Missing consent basis = stop, do not proceed." },
          { heading: "Missing Data", body: "Evaluate WHY data is missing FIRST: MCAR (random), MAR (related to other variables), MNAR (related to missing variable itself). Systematic missingness correlated with demographics = bias risk regardless of imputation method chosen." },
          { heading: "Training-Serving Skew", body: "Features used in training must be available at prediction time. A feature unavailable at scoring time must be removed or replaced with a real-time proxy. Feature transformations must be applied identically in training and production pipelines." },
          { heading: "Data Quality Over Quantity", body: "More data with poor quality amplifies problems. Relevance matters: data older than a certain threshold may reflect obsolete conditions. Representativeness: training data must reflect the deployment population." },
          { heading: "Class Imbalance", body: "Severe imbalance (e.g., 2% positive class) requires explicit strategy: SMOTE oversampling, undersampling, cost-sensitive learning, or adjusted evaluation metrics (precision-recall over accuracy). Must be planned in Phase II, not discovered in Phase III." },
          { heading: "Data Lineage", body: "Record of where data came from, how it was transformed, how it flows through the pipeline. Required for: compliance audits, debugging, reproducing results. Raw data must be retained (not deleted after feature engineering) for the model's operational lifetime." }
        ]
      },
      {
        id: "model-dev",
        title: "Domain IV: Model Development & Evaluation (16%)",
        icon: "🔬",
        keyPoints: [
          { heading: "Train / Validation / Test Split", body: "Training: teaches model weights. Validation: tunes hyperparameters during development. Test: completely held-out, never seen during any development decision — provides unbiased final performance estimate. Contaminating test set invalidates evaluation." },
          { heading: "Overfitting Signal", body: "Training accuracy >> Validation accuracy. Classic example: 98% training, 67% validation = 31-point gap = overfitting. Fix: regularization, model simplification, feature reduction, more diverse training data." },
          { heading: "Data Leakage", body: "Using information in training that wouldn't be available at prediction time. Causes artificially high development metrics that collapse in production. Must rebuild model from scratch with correct data — not fixable post-hoc." },
          { heading: "Evaluation Metrics by Use Case", body: "Fraud detection: prioritize Recall (catch all fraud). Medical screening: prioritize Recall (catch all cases). Precision important when false positives are costly. F1 balances both. Accuracy misleading with class imbalance. Always include fairness metrics across subgroups." },
          { heading: "Model Selection", body: "Not just highest accuracy. Consider: interpretability requirements (regulated decisions need explainable models), operational feasibility, bias across subgroups, stakeholder trust. A slightly less accurate but interpretable model may be the right choice for regulated use cases." },
          { heading: "Go/No-Go for Model", body: "Technical evaluation + compliance review + operations readiness + business stakeholder validation. All required before deployment approval. Missing any one = do not proceed. Exceeding accuracy threshold alone is NOT sufficient." }
        ]
      },
      {
        id: "operationalize",
        title: "Domain V: Operationalize AI Solution (17%)",
        icon: "🚀",
        keyPoints: [
          { heading: "Production Readiness", body: "Pilot passing functional criteria ≠ production ready. Also required: SLOs defined, monitoring infrastructure active, incident response procedures documented, rollback capability confirmed, operations team briefed." },
          { heading: "Deployment Approaches", body: "Shadow deployment: AI runs in background, predictions logged but don't affect outcomes. Parallel run: AI alongside existing process, compare outputs. Staged rollout: pilot unit first, expand based on evidence. Champion-challenger: new model alongside current on live traffic." },
          { heading: "Model Drift", body: "Gradual divergence between real-world input distribution and training distribution. Signature: slow performance decline over weeks/months. Fix: retrain with current representative data. Retrained model must pass same evaluation gates as original before replacing production." },
          { heading: "Incident Response", body: "When AI causes harm: (1) Activate rollback — harm containment first. (2) Investigate root cause. (3) Notify affected parties. (4) Remediate. (5) Re-evaluate before redeployment. Retraining without investigation may reproduce the error." },
          { heading: "Monitoring", body: "Track: prediction volume, confidence scores, business outcome metrics (not just accuracy). Alert fatigue = thresholds set too sensitively. Recalibrate thresholds so alerts fire only for genuinely actionable situations. Annual proactive review even without triggered thresholds." },
          { heading: "Decommissioning", body: "First step: map all downstream system dependencies. Confirm each has a transition plan BEFORE setting shutdown date. Archive (do not delete) model artifacts and documentation. Decommissioning requires cross-functional sign-off same as original deployment." }
        ]
      }
    ]
  }
};

export default STUDY_NOTES;
