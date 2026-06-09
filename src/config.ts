export const siteConfig = {
  name: "Junyoung Jung",
  title: "AI Engineer",
  description: "Portfolio of Junyoung Jung — AI Engineer specializing in LLM evaluation, RAG systems, and SLM fine-tuning",
  accentColor: "#1d4ed8",
  social: {
    email: "jjy714@gmail.com",
    github: "https://github.com/jjy714",
  },
  aboutMe:
    "AI Engineer with hands-on experience designing and deploying LLM evaluation infrastructure, SLM benchmarking systems, and PEFT-based fine-tuning pipelines. At Claion, I independently led end-to-end ML projects — from requirements definition and system design documentation to Docker-based microservice deployment. Comfortable operating as technical lead (PL) in small, fast-moving teams. Currently completing a B.Eng. in Computer Science at The Hong Kong Polytechnic University.",
  skills: [
    "Python",
    "PyTorch",
    "Hugging Face Transformers",
    "LangChain",
    "LangGraph",
    "FastAPI",
    "Docker",
    "Qdrant",
    "MongoDB",
    "scikit-learn",
    "React / React Native",
    "Git",
  ],
  projects: [
    {
      name: "Asynchronous RAG Evaluation System",
      description:
        "Redesigned sequential per-system RAG evaluation into a central async microservice architecture. Separated the embedding model as an independent service, applied caching for repeated vectorization, and isolated each RAG system into a temporary Qdrant collection for independent evaluation. Integrated BLEU/ROUGE + MRR/MAP/NDCG unified metrics. Authored formal functional requirements, sequence diagrams, and user flow documentation independently.",
      link: "https://github.com/jjy714",
      skills: ["Python", "FastAPI", "Docker", "Qdrant", "MongoDB"],
    },
    {
      name: "SLM Fine-Tuning for Tool-Calling",
      description:
        "Researched and implemented tool-calling capability injection into SLMs without native support. Applied LoRA/PEFT fine-tuning via Unsloth on Gemma, Exaone, and HCX DASH using three open-source Hugging Face datasets. Engineered model-specific chat templates to activate tool-calling syntax and logic per model architecture.",
      link: "https://github.com/jjy714",
      skills: ["PyTorch", "Hugging Face", "LoRA / PEFT", "Unsloth"],
    },
    {
      name: "LLM / SLM Evaluation Benchmark System",
      description:
        "Built a company-wide benchmarking standard to evaluate SLMs for product integration. Defined evaluation criteria across Reasoning, Summarization, Instruction-following, and RAG tasks. Automated the pipeline using Python and Hugging Face; compared commercial vs. open-source models to drive integration decisions.",
      link: "https://github.com/jjy714",
      skills: ["Python", "Hugging Face", "LangChain"],
    },
    {
      name: "Pet Mischief Detector",
      description:
        "Real-time system detecting spatial relationships between pets and household objects to classify risk level (HIGH/MEDIUM/LOW). Integrated YOLOv11s with Depth Anything V2 to overcome 2D distance limitations. Iterated the core closeness scoring logic 4 times — additive weighting → multiplicative depth gate → portrait-strip sampling → edge-to-edge gap. Also experimented with ResNet18 + Graph Attention Network hybrid classifier. Trained on 27,512 COCO images, achieving 56.74% accuracy.",
      link: "https://github.com/jjy714",
      skills: ["YOLOv11s", "Depth Anything V2", "PyTorch", "PyTorch Geometric"],
    },
    {
      name: "Movie Sentiment Analysis — Classical NLP to BERT",
      description:
        "Two-notebook iterative pipeline for fine-grained phrase-level sentiment classification on the Rotten Tomatoes dataset. Systematically compared 4 classical architectures (Word2Vec+XGBoost, Doc2Vec+MLP, TF-IDF Word2Vec+SVM, BiLSTM) across 3 label schemes and 3 augmentation strategies, expanding the corpus from 1,024 to 11,900+ samples. Fine-tuned BERT-base-uncased with a 3-fold cross-validation ensemble, achieving Macro F1 0.9208 — a 4.7× improvement over baseline.",
      link: "https://github.com/jjy714",
      skills: ["BERT", "Hugging Face", "scikit-learn", "Keras", "Gensim"],
    },
  ],
  experience: [
    {
      company: "Claion",
      title: "Machine Learning Engineer",
      dateRange: "Jan 2025 - Jan 2026",
      bullets: [
        "Designed company-wide SLM benchmarking standard with automated evaluation pipeline across Reasoning, Summarization, Instruction-following, and RAG tasks.",
        "Architected and built an asynchronous RAG evaluation microservice — redesigned sequential evaluation to async parallel processing with embedding service isolation and caching.",
        "Led SLM fine-tuning research (LoRA/PEFT via Unsloth) on Gemma, Exaone, and HCX DASH; engineered model-specific chat templates to inject tool-calling capabilities.",
        "Operated as PL in teams of 1–3; authored formal functional requirements, system sequence diagrams, and user flow documentation for all major systems.",
      ],
    },
    {
      company: "Cortech",
      title: "Global Project Lead",
      dateRange: "Jan 2019 - Jul 2019",
      bullets: [
        "Led international coordination between Korean clients and overseas manufacturers.",
        "Designed visual component blueprints tailored to client specifications.",
      ],
    },
  ],
  education: [
    {
      school: "The Hong Kong Polytechnic University",
      degree: "B.Eng. Computer Science (Honors)",
      dateRange: "Sep 2019 - Aug 2026 (Expected)",
      achievements: [
        "Computer Vision: Real-time object risk detection system using YOLOv11 + Depth Anything V2",
        "Big Data Analytics: NLP pipeline from classical ML to BERT transformer (Macro F1 0.9208)",
      ],
    },
    {
      school: "Hanyang University (Visiting Student)",
      degree: "Computer Science",
      dateRange: "Sep 2023 - Jul 2024",
      achievements: [
        "Coursework in Machine Learning, Human-Computer Interaction, and Software Engineering",
      ],
    },
  ],
};