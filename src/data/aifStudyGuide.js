const AIF_STUDY_GUIDE = {
  label: "AWS Certified AI Practitioner (AIF-C01)",
  color: "#FF9900",
  examInfo: {
    duration: "90 minutes",
    format: "Multiple choice and multiple response",
    questions: "65 questions",
    domains: "5 content domains",
    scoring: "700 / 1000 passing score"
  },
  intro: "This independent study guide is organized around the published AIF-C01 content domains. It explains concepts to study and then links them to original practice activities; it is not an AWS exam or a reproduction of AWS exam questions.",
  domains: [
    {
      id: "domain-1",
      title: "1. Fundamentals of AI and ML",
      weight: "20% of scored content",
      keyPoints: [
        { heading: "Core terminology", body: "Study the distinctions among AI, machine learning, deep learning, neural networks, computer vision, NLP, models, algorithms, training, inference, bias, fairness, LLMs, generative AI, and agentic AI." },
        { heading: "Inference and data", body: "Know the differences among batch, real-time, asynchronous, and serverless inference, and recognize labeled versus unlabeled data plus tabular, time-series, image, text, structured, and unstructured data." },
        { heading: "Learning approaches", body: "Be able to distinguish supervised, unsupervised, and reinforcement learning and select appropriate approaches for common business problems such as classification, regression, and clustering." },
        { heading: "AI/ML lifecycle", body: "Understand the stages of an AI/ML pipeline, model sources, production deployment approaches, MLOps concepts, monitoring, retraining, and model and business metrics such as accuracy, precision, recall, F1 score, cost, feedback, and ROI." }
      ]
    },
    {
      id: "domain-2",
      title: "2. Fundamentals of Generative AI",
      weight: "24% of scored content",
      keyPoints: [
        { heading: "GenAI building blocks", body: "Study tokens, chunking, embeddings, vectors, prompt engineering, transformer-based LLMs, foundation models, multimodal models, and diffusion models." },
        { heading: "Use cases and lifecycle", body: "Recognize suitable GenAI use cases such as summarization, assistants, translation, code generation, search, recommendations, and media generation. Review the foundation-model lifecycle from data and model selection through pre-training, fine-tuning, evaluation, deployment, and feedback." },
        { heading: "Capabilities and limitations", body: "Understand adaptability and conversational capabilities alongside hallucinations, inaccuracy, interpretability limits, and nondeterminism. Model selection should account for capability, latency, compliance, cost, complexity, and performance requirements." },
        { heading: "AWS GenAI infrastructure", body: "Review the AWS services and technologies named in the guide for building GenAI applications, including Amazon Bedrock, Amazon SageMaker AI, SageMaker JumpStart, Amazon Q, Kiro, Strands Agents, and Amazon Bedrock AgentCore, plus relevant cost and infrastructure tradeoffs." }
      ]
    },
    {
      id: "domain-3",
      title: "3. Applications of Foundation Models",
      weight: "28% of scored content",
      keyPoints: [
        { heading: "Foundation-model selection", body: "Compare models using cost, modality, latency, multilingual capability, size, complexity, customization needs, input/output length, and prompt-caching considerations." },
        { heading: "RAG and customization", body: "Understand Retrieval Augmented Generation and its business applications, including the role of Amazon Bedrock Knowledge Bases. Compare RAG, in-context learning, fine-tuning, pre-training, and model distillation from a cost and capability perspective." },
        { heading: "Prompt engineering", body: "Study context, instructions, negative prompts, zero-shot, single-shot, few-shot, chain-of-thought, prompt templates, specificity, concision, experimentation, guardrails, and prompt management. Also understand risks such as prompt exposure, poisoning, hijacking, and jailbreaking." },
        { heading: "Training and evaluation", body: "Review pre-training, fine-tuning, continuous pre-training, distillation, instruction tuning, transfer learning, data curation and governance, labeling, representativeness, RLHF, human evaluation, benchmark datasets, and metrics such as ROUGE, BLEU, BERTScore, and LLM-as-a-judge." },
        { heading: "Agents", body: "Understand the role of AI agents in business applications, including tool usage, memory, workflow orchestration, multi-agent patterns, and connections to external systems." }
      ]
    },
    {
      id: "domain-4",
      title: "4. Guidelines for Responsible AI",
      weight: "14% of scored content",
      keyPoints: [
        { heading: "Responsible development", body: "Study how responsible AI principles affect design, development, deployment, and operation of AI systems. The exam guide specifically includes responsible development as the focus of this domain." },
        { heading: "Bias and fairness", body: "Understand how bias can enter AI systems and why representative data, evaluation, monitoring, and human oversight matter when assessing fairness." },
        { heading: "Transparency and accountability", body: "Review why organizations need understandable AI behavior, appropriate documentation, governance, and clear responsibility for consequential AI-assisted outcomes." }
      ]
    },
    {
      id: "domain-5",
      title: "5. Security, Compliance, and Governance for AI Solutions",
      weight: "14% of scored content",
      keyPoints: [
        { heading: "Security considerations", body: "Study security risks and controls relevant to AI solutions, including protecting data, models, prompts, applications, and access paths." },
        { heading: "Compliance", body: "Understand why regulatory, legal, privacy, and organizational requirements influence AI solution selection and implementation." },
        { heading: "Governance", body: "Review governance practices for responsible deployment, including policies, controls, oversight, risk management, monitoring, and documentation." }
      ]
    }
  ]
};

export default AIF_STUDY_GUIDE;
