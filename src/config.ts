export const siteConfig = {
  accentColor: "#1d4ed8",
  social: {
    email: "jjy714@gmail.com",
    github: "https://github.com/jjy714",
  },
  // Technical skill names are universal — no translation needed
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

  en: {
    name: "Junyoung Jung",
    title: "AI Engineer",
    description:
      "Portfolio of Junyoung Jung — AI Engineer specializing in LLM evaluation, RAG systems, and SLM fine-tuning",
    aboutMe:
      "AI Engineer with hands-on experience designing and deploying LLM evaluation infrastructure, SLM benchmarking systems, and PEFT-based fine-tuning pipelines. At Claion, I independently led end-to-end ML projects — from requirements definition and system design documentation to Docker-based microservice deployment. Comfortable operating as technical lead (PL) in small, fast-moving teams. Currently completing a B.Eng. in Computer Science at The Hong Kong Polytechnic University.",
    projects: [
      {
        name: "Asynchronous RAG Evaluation System",
        description:
          "Redesigned sequential per-system RAG evaluation into a central async microservice architecture. Separated the embedding model as an independent service, applied caching for repeated vectorization, and isolated each RAG system into a temporary Qdrant collection for independent evaluation. Integrated BLEU/ROUGE + MRR/MAP/NDCG unified metrics. Authored formal functional requirements, sequence diagrams, and user flow documentation independently.",
        link: "https://github.com/jjy714/RAG-Evaluation",
        skills: ["Python", "FastAPI", "Docker", "Qdrant", "MongoDB"],
      },
      {
        name: "SLM Fine-Tuning for Tool-Calling",
        description:
          "Researched and implemented tool-calling capability injection into SLMs without native support. Applied LoRA/PEFT fine-tuning via Unsloth on Gemma, Exaone, and HCX DASH using three open-source Hugging Face datasets. Engineered model-specific chat templates to activate tool-calling syntax and logic per model architecture.",
        link: "https://github.com/jjy714/Fine-Tuning",
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
        link: "https://github.com/jjy714/The-Pet-Mischief-Detector",
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
  },

  ko: {
    name: "정준영",
    title: "AI 엔지니어",
    description:
      "정준영 포트폴리오 — LLM 평가, RAG 시스템, SLM 파인튜닝 전문 AI 엔지니어",
    aboutMe:
      "LLM 평가 인프라, SLM 벤치마킹 시스템, PEFT 기반 파인튜닝 파이프라인 설계 및 배포 경험을 보유한 AI 엔지니어입니다. 클라이언에서 요구사항 정의와 시스템 설계 문서 작성부터 Docker 기반 마이크로서비스 배포까지 엔드투엔드 ML 프로젝트를 독립적으로 주도했습니다. 1~3인 규모의 소규모 팀에서 기술 리드(PL)로 활동한 경험이 있으며, 현재 홍콩이공대학교 컴퓨터공학과 공학사 학위 취득을 앞두고 있습니다.",
    projects: [
      {
        name: "비동기 RAG 평가 시스템",
        description:
          "순차 실행 방식의 RAG 평가를 중앙화된 비동기 마이크로서비스 아키텍처로 재설계했습니다. 임베딩 모델을 독립 서비스로 분리하고 반복 벡터화에 캐싱을 적용하며, 각 RAG 시스템을 독립 평가를 위한 임시 Qdrant 컬렉션으로 격리했습니다. BLEU/ROUGE와 MRR/MAP/NDCG를 통합한 통합 평가 지표를 구축했습니다. 기능 요구사항, 시퀀스 다이어그램, 사용자 흐름 문서를 독립적으로 작성했습니다.",
        link: "https://github.com/jjy714/RAG-Evaluation",
        skills: ["Python", "FastAPI", "Docker", "Qdrant", "MongoDB"],
      },
      {
        name: "Tool-Calling을 위한 SLM 파인튜닝",
        description:
          "기본 지원 없는 SLM에 Tool-Calling 기능을 주입하는 방법을 연구하고 구현했습니다. Unsloth를 통해 Gemma, Exaone, HCX DASH 모델에 LoRA/PEFT 파인튜닝을 적용했으며, 세 가지 공개 Hugging Face 데이터셋을 활용했습니다. 모델 아키텍처별로 Tool-Calling 문법과 로직을 활성화하는 모델 특화 채팅 템플릿을 엔지니어링했습니다.",
        link: "https://github.com/jjy714/Fine-Tuning",
        skills: ["PyTorch", "Hugging Face", "LoRA / PEFT", "Unsloth"],
      },
      {
        name: "LLM / SLM 평가 벤치마크 시스템",
        description:
          "제품 통합을 위한 SLM 평가에 사용할 사내 벤치마킹 표준을 구축했습니다. 추론, 요약, 지시 따르기, RAG 작업에 걸친 평가 기준을 정의했습니다. Python과 Hugging Face를 활용해 파이프라인을 자동화하고, 상용 모델과 오픈소스 모델을 비교하여 통합 의사결정에 활용했습니다.",
        link: "https://github.com/jjy714",
        skills: ["Python", "Hugging Face", "LangChain"],
      },
      {
        name: "반려동물 장난 감지기",
        description:
          "반려동물과 가정용 물건 사이의 공간적 관계를 실시간으로 감지해 위험 수준(HIGH/MEDIUM/LOW)을 분류하는 시스템입니다. 2D 거리의 한계를 극복하기 위해 YOLOv11s와 Depth Anything V2를 결합했습니다. 근접 점수 산정 로직을 4회 반복 개선했습니다(가산 가중치 → 승법 깊이 게이트 → 세로 띠 샘플링 → 엣지 간 간격). ResNet18과 Graph Attention Network 하이브리드 분류기도 실험했습니다. COCO 이미지 27,512장으로 학습하여 정확도 56.74% 달성.",
        link: "https://github.com/jjy714/The-Pet-Mischief-Detector",
        skills: ["YOLOv11s", "Depth Anything V2", "PyTorch", "PyTorch Geometric"],
      },
      {
        name: "영화 감성 분석 — 고전 NLP에서 BERT까지",
        description:
          "Rotten Tomatoes 데이터셋을 활용한 세밀한 구문 단위 감성 분류 2단계 반복 파이프라인입니다. 3가지 레이블 체계와 3가지 증강 전략을 적용해 4가지 고전 아키텍처(Word2Vec+XGBoost, Doc2Vec+MLP, TF-IDF Word2Vec+SVM, BiLSTM)를 체계적으로 비교했으며, 코퍼스를 1,024건에서 11,900건 이상으로 확장했습니다. BERT-base-uncased를 3-Fold 교차검증 앙상블로 파인튜닝하여 Macro F1 0.9208 달성 — 베이스라인 대비 4.7배 향상.",
        link: "https://github.com/jjy714",
        skills: ["BERT", "Hugging Face", "scikit-learn", "Keras", "Gensim"],
      },
    ],
    experience: [
      {
        company: "클라이언",
        title: "머신러닝 엔지니어",
        dateRange: "2025년 1월 - 2026년 1월",
        bullets: [
          "추론, 요약, 지시 따르기, RAG 작업 전반에 걸친 자동화 평가 파이프라인을 포함하는 사내 SLM 벤치마킹 표준을 설계했습니다.",
          "비동기 RAG 평가 마이크로서비스를 아키텍처 설계 및 구축했습니다 — 순차 평가를 비동기 병렬 처리로 재설계하고 임베딩 서비스 격리 및 캐싱을 적용했습니다.",
          "Gemma, Exaone, HCX DASH에 대한 SLM 파인튜닝 연구(Unsloth를 통한 LoRA/PEFT)를 주도하고, Tool-Calling 기능 주입을 위한 모델 특화 채팅 템플릿을 엔지니어링했습니다.",
          "1~3인 팀에서 PL로 활동하며 모든 주요 시스템의 기능 요구사항, 시스템 시퀀스 다이어그램, 사용자 흐름 문서를 작성했습니다.",
        ],
      },
      {
        company: "코텍",
        title: "글로벌 프로젝트 리드",
        dateRange: "2019년 1월 - 2019년 7월",
        bullets: [
          "한국 클라이언트와 해외 제조사 간의 국제 조율을 주도했습니다.",
          "클라이언트 요구사항에 맞춘 시각적 부품 설계도를 작성했습니다.",
        ],
      },
    ],
    education: [
      {
        school: "홍콩이공대학교",
        degree: "컴퓨터공학 공학사 (우등)",
        dateRange: "2019년 9월 - 2026년 8월 (예정)",
        achievements: [
          "컴퓨터 비전: YOLOv11 + Depth Anything V2를 활용한 실시간 객체 위험 감지 시스템",
          "빅데이터 분석: 고전 ML에서 BERT 트랜스포머까지의 NLP 파이프라인 (Macro F1 0.9208)",
        ],
      },
      {
        school: "한양대학교 (교환학생)",
        degree: "컴퓨터공학",
        dateRange: "2023년 9월 - 2024년 7월",
        achievements: [
          "머신러닝, 인간-컴퓨터 상호작용, 소프트웨어 공학 수강",
        ],
      },
    ],
  },
};
