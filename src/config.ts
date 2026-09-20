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
    "Gemini Live API",
    "FastAPI",
    "Docker",
    "Qdrant",
    "MongoDB",
    "PySpark",
    "scikit-learn",
    "React / React Native",
    "Git",
  ],

  // Projects are grouped by `category` ("work" | "academic") and listed in the
  // order they appear below. `en` and `ko` project arrays must stay aligned
  // by index. Multi-line descriptions ("\n") render as a lead sentence
  // followed by bullets.
  en: {
    name: "Junyoung Jung",
    title: "AI Engineer",
    description:
      "Portfolio of Junyoung Jung — AI Engineer specializing in LLM evaluation, RAG systems, and SLM fine-tuning",
    aboutMe:
      "AI Engineer with hands-on experience designing and deploying LLM evaluation infrastructure, SLM benchmarking systems, and PEFT-based fine-tuning pipelines. At Claion, I independently led end-to-end ML projects — from requirements definition and system design documentation to Docker-based microservice deployment. Comfortable operating as technical lead (PL) in small, fast-moving teams. Currently building a multimodal AI kiosk at Withmind. Graduated with a B.Sc. in Computing from The Hong Kong Polytechnic University.",
    highlights: [
      { value: "4.7×", label: "Macro F1 gain over baseline (BERT ensemble)", project: "Movie Sentiment Analysis" },
      { value: "0.92", label: "Macro F1 score achieved", project: "Movie Sentiment Analysis" },
      { value: "3", label: "SLMs fine-tuned for tool-calling (LoRA/PEFT)", project: "SLM Fine-Tuning" },
      { value: "4", label: "Task types covered by automated eval pipeline", project: "LLM / SLM Evaluation Benchmark" },
    ],
    projects: [
      {
        category: "work",
        tag: "Withmind · Jun 2026 – Present",
        name: "Voice AI Kiosk — Latency Reduction & Tool Calling",
        metric: "PoC delivered · 2nd phase in progress",
        description:
          "Cut the response latency of a multimodal in-store AI kiosk and designed how the AI operates the backend.\nReplaced a sequential STT → LLM → TTS pipeline with the Gemini Live API, which handles voice input and output in a single streaming session.\nFree-form ordering (adding to the cart, database lookups) runs on LLM tool calling.\nPredictable steps such as option pages and menu utterances are matched against a predefined keyword set and executed directly by the backend — removing tool-call misfires and hallucination risk wherever the answer is already known.\nDesigned the Frontend–Backend–AI interface for conversation-driven screen transitions and delivered the PoC; second-phase work is under way.",
        skills: ["Gemini Live API", "Tool Calling", "LLM Function Calling"],
      },
      {
        category: "work",
        tag: "Claion · Jan 2025 – Jan 2026",
        name: "Asynchronous RAG Evaluation System",
        metric: "Foundation of Claion's commercial product R.E.X.",
        description:
          "Planned and built the initial architecture of Claion's RAG evaluation system; after my departure, Claion extended it into its commercial RAG quality-diagnosis product, R.E.X. (claion.co.kr/solution/rex).\nRedesigned sequential per-system RAG evaluation into a central async microservice architecture.\nSeparated the embedding model as an independent service, applied caching for repeated vectorization, and isolated each RAG system in its own temporary Qdrant collection for independent evaluation.\nIntegrated BLEU/ROUGE and MRR/MAP/NDCG into one unified set of metrics.\nIndependently authored the functional requirements, sequence diagrams, and user flow documentation.",
        skills: ["Python", "FastAPI", "Docker", "Qdrant", "MongoDB"],
      },
      {
        category: "work",
        tag: "Claion · Jan 2025 – Jan 2026",
        name: "LLM / SLM Evaluation Benchmark System",
        metric: "4 task types · data-driven model adoption",
        description:
          "Built a company-wide benchmarking standard to evaluate SLMs for product integration.\nDefined evaluation criteria across Reasoning, Summarization, Instruction-following, and RAG tasks, and automated the pipeline with Python and Hugging Face.\nCompared commercial and open-source models on the same criteria to drive integration decisions.",
        skills: ["Python", "Hugging Face", "LangChain"],
      },
      {
        category: "work",
        tag: "Claion · Jan 2025 – Jan 2026",
        name: "SLM Fine-Tuning for Tool-Calling",
        metric: "3 SLMs · LoRA/PEFT · 300K+ training examples",
        description:
          "Researched and implemented tool-calling capability injection into SLMs without native support.\nApplied LoRA/PEFT fine-tuning via Unsloth on Gemma, Exaone, and HCX DASH using three open-source Hugging Face datasets.\nEngineered model-specific chat templates to activate tool-calling syntax and logic per model architecture.",
        skills: ["PyTorch", "Hugging Face", "LoRA / PEFT", "Unsloth"],
      },
      {
        category: "academic",
        tag: "PolyU Thesis · Sep 2025 – May 2026",
        name: "Complexity-Based RAG Routing (DMA-RAG)",
        metric: "Lower cost & latency, answer quality preserved",
        description:
          "Standard RAG pipelines process every question the same way, wasting tokens and time on simple ones.\nDesigned a Discussion Agent Layer (DAL) that routes each question along a path matched to its complexity.\nKept answer quality on complex questions while cutting average response time and token cost.",
        skills: ["LangChain", "LangGraph", "Multi-Agent Systems"],
      },
      {
        category: "academic",
        tag: "PolyU · 2026",
        name: "Large-Scale Self-Join Optimization",
        metric: "1M+ records · no extra hardware",
        description:
          "Resolved out-of-memory failures during similarity analysis on a news dataset of over 1 million records.\nTraced the cause to a Cartesian-product explosion by analyzing the Spark execution plan.\nImplemented filtering logic with a custom PySpark UDF (least() / greatest()) that removes duplicate comparisons — stabilizing the pipeline without adding hardware.",
        skills: ["PySpark", "SQL"],
      },
      {
        category: "academic",
        tag: "PolyU · 2026",
        name: "Lightweight Hybrid Plant Classification",
        metric: "Built without deep learning",
        description:
          "Built a lightweight alternative to heavy deep-learning models for simple, on-site plant classification.\nCombined HOG and LBP feature extractors with an SVM classifier.\nAchieved classification performance that stays robust under environmental changes, without any deep learning.",
        skills: ["scikit-learn", "HOG", "LBP", "SVM"],
      },
      {
        category: "academic",
        tag: "PolyU COMP4423 · 2026",
        name: "Pet Mischief Detector",
        metric: "27,512 images trained · 56.74% accuracy",
        description:
          "Real-time system detecting spatial relationships between pets and household objects to classify risk level (HIGH/MEDIUM/LOW).\nIntegrated YOLOv11s with Depth Anything V2 to overcome 2D distance limitations.\nIterated the core closeness scoring logic 4 times — additive weighting → multiplicative depth gate → portrait-strip sampling → edge-to-edge gap.\nAlso experimented with a ResNet18 + Graph Attention Network hybrid classifier.\nTrained on 27,512 COCO images, achieving 56.74% accuracy.",
        skills: ["YOLOv11s", "Depth Anything V2", "PyTorch", "PyTorch Geometric"],
      },
      {
        category: "academic",
        tag: "PolyU DSAI4205 · 2026",
        name: "Movie Sentiment Analysis — Classical NLP to BERT",
        metric: "Macro F1 0.9208 · 4.7× over baseline",
        description:
          "Two-notebook iterative pipeline for fine-grained phrase-level sentiment classification on the Rotten Tomatoes dataset.\nSystematically compared 4 classical architectures (Word2Vec+XGBoost, Doc2Vec+MLP, TF-IDF Word2Vec+SVM, BiLSTM) across 3 label schemes and 3 augmentation strategies, expanding the corpus from 1,024 to 11,900+ samples.\nFine-tuned BERT-base-uncased with a 3-fold cross-validation ensemble, achieving Macro F1 0.9208 — a 4.7× improvement over baseline.",
        skills: ["BERT", "Hugging Face", "scikit-learn", "Keras", "Gensim"],
      },
    ],
    experience: [
      {
        company: "Withmind",
        title: "AI Engineer",
        dateRange: "Jun 2026 - Present",
        bullets: [
          "Reduced response latency of a multimodal AI kiosk by adopting the Gemini Live API, which handles voice input and output in a single streaming session.",
          "Split conversation handling by predictability: LLM tool calling for free-form ordering, keyword-matched backend execution for option and menu steps with fixed answers — designed to prevent tool-call misfires.",
          "Designed the Frontend–Backend–AI interface, delivered the PoC, and started second-phase development.",
        ],
      },
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
    ],
    education: [
      {
        school: "The Hong Kong Polytechnic University",
        degree: "B.Sc. in Computing",
        dateRange: "Sep 2019 - Aug 2026",
        achievements: [
          "Thesis (DMA-RAG): Complexity-based RAG routing with a multi-agent Discussion Agent Layer — lower response time and token cost with answer quality preserved",
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

  // Korean copy is written from scratch (not translated line-by-line):
  // noun-ending sentences, outcome first, plain wording.
  ko: {
    name: "정준영",
    title: "AI 엔지니어",
    description:
      "정준영 포트폴리오 — LLM 평가, RAG 시스템, SLM 파인튜닝을 다루는 AI 엔지니어",
    aboutMe:
      "LLM 평가부터 SLM 파인튜닝, 음성 AI 키오스크까지 — 문제 정의에서 설계·배포까지 직접 끌고 가는 AI 엔지니어\n클라이온에서 요구사항 정의, 설계 문서 작성, Docker 기반 마이크로서비스 배포까지 ML 프로젝트 전 과정을 단독 주도\n1~3인 규모 팀에서 기술 리드(PL)로 활동\n현재 Withmind에서 멀티모달 AI 키오스크 개발 중\n홍콩이공대학교 컴퓨팅 학사 졸업",
    highlights: [
      { value: "4.7×", label: "베이스라인 대비 Macro F1 향상 (BERT 앙상블)", project: "영화 리뷰 감성 분석" },
      { value: "0.92", label: "Macro F1 점수 달성", project: "영화 리뷰 감성 분석" },
      { value: "3개", label: "SLM에 Tool-Calling 기능 이식 (LoRA/PEFT)", project: "SLM Tool-Calling 파인튜닝" },
      { value: "4개", label: "업무 유형별 자동 평가 체계 구축", project: "LLM / SLM 평가 벤치마크" },
    ],
    projects: [
      {
        category: "work",
        tag: "Withmind · 2026.06 – 현재",
        name: "음성 AI 키오스크 — 응답 지연 개선",
        metric: "PoC 개발 완료 · 2차 고도화 진행 중",
        description:
          "음성으로 주문하는 매장용 AI 키오스크의 느린 응답을 줄이고, AI가 주문 처리를 직접 수행하는 구조 설계\nSTT → LLM → TTS를 순서대로 호출하던 방식에서 음성 입출력을 한 번에 처리하는 Gemini Live API로 전환해 지연 개선\n장바구니 담기·DB 조회 등 자유로운 발화는 LLM Tool Calling으로 처리\n옵션 선택·메뉴 발화처럼 답이 정해진 구간은 자주 쓰는 키워드를 미리 등록해 두고, 매칭되면 LLM 판단 없이 백엔드가 즉시 실행 — 오작동·환각 가능성 사전 차단\nFrontend·Backend·AI를 잇는 인터페이스를 설계해 대화에 따른 화면 자동 전환 구현",
        skills: ["Gemini Live API", "Tool Calling", "LLM Function Calling"],
      },
      {
        category: "work",
        tag: "클라이온 · 2025.01 – 2026.01",
        name: "비동기 RAG 평가 시스템",
        metric: "클라이온 상용 제품 R.E.X.의 기반 설계",
        description:
          "클라이온 RAG 평가 시스템의 기획과 초기 아키텍처(기초 뼈대) 설계·구축 — 퇴사 후 클라이온이 고도화해 상용 솔루션 R.E.X.(claion.co.kr/solution/rex)로 출시\nRAG 시스템을 하나씩 순서대로 테스트하던 구조를, 여러 시스템을 동시에 평가하는 비동기 마이크로서비스로 재설계\n임베딩 모델을 별도 서비스로 분리하고 캐싱을 적용해 반복 연산 제거, 시스템마다 독립된 Qdrant 컬렉션을 사용해 서로 간섭 없이 평가\nBLEU/ROUGE와 MRR/MAP/NDCG를 하나의 기준으로 통합해 시스템 간 동일한 잣대로 비교\n기능 요구사항, 시퀀스 다이어그램, 사용자 플로우 문서 단독 작성",
        skills: ["Python", "FastAPI", "Docker", "Qdrant", "MongoDB"],
      },
      {
        category: "work",
        tag: "클라이온 · 2025.01 – 2026.01",
        name: "LLM / SLM 평가 벤치마크 시스템",
        metric: "4개 업무 유형 · 데이터 기반 모델 도입 결정",
        description:
          "어떤 SLM을 제품에 넣을지 감으로 정하던 상황을 데이터로 판단할 수 있도록 사내 평가 표준 수립\n추론·요약·지시 이행·RAG 4개 업무 유형별 평가 기준 정의, Python·Hugging Face로 평가 자동화\n상용 모델과 오픈소스 모델을 같은 기준으로 비교해 도입 의사결정에 활용",
        skills: ["Python", "Hugging Face", "LangChain"],
      },
      {
        category: "work",
        tag: "클라이온 · 2025.01 – 2026.01",
        name: "SLM Tool-Calling 파인튜닝",
        metric: "SLM 3종 · LoRA/PEFT · 학습 데이터 30만 건+",
        description:
          "Tool-Calling을 지원하지 않던 소형 언어 모델(SLM)에 해당 기능을 새로 이식\nGPU·비용 제약을 고려해 Full fine-tuning 대신 LoRA/PEFT를 선택, Unsloth로 Gemma·EXAONE·HCX DASH 3종 학습\n공개 Hugging Face 데이터셋 3종을 활용해 학습 데이터를 30만 건 규모로 구성\n모델마다 다른 포맷·추론 방식에 맞춘 Chat Template 직접 설계\nLoRA 기반 튜닝의 기술적 한계를 확인하고, 이후 모델 통합 전략 수립에 반영",
        skills: ["PyTorch", "Hugging Face", "LoRA / PEFT", "Unsloth"],
      },
      {
        category: "academic",
        tag: "PolyU 졸업 논문 · 2025.09 – 2026.05",
        name: "질문 난이도별 RAG 라우팅 (DMA-RAG)",
        metric: "답변 품질 유지 · 응답 시간·비용 절감",
        description:
          "모든 질문을 같은 방식으로 처리해 불필요한 비용과 지연이 생기던 RAG 구조 개선\n질문의 복잡도에 따라 처리 경로를 자동으로 나누는 Discussion Agent Layer(DAL) 설계 — 쉬운 질문은 가볍게, 어려운 질문은 깊게\n복잡한 질문의 답변 품질은 유지하면서 평균 응답 시간과 토큰 비용 절감",
        skills: ["LangChain", "LangGraph", "Multi-Agent Systems"],
      },
      {
        category: "academic",
        tag: "PolyU · 2026",
        name: "대용량 데이터 자기조인 최적화",
        metric: "100만 건+ 데이터 · 추가 하드웨어 없이 해결",
        description:
          "100만 건 이상 뉴스 데이터의 유사도 분석 중 발생한 메모리 부족(OOM) 오류 해결\nSpark 실행 계획을 분석해, 모든 데이터 쌍을 비교하는 Cartesian Product가 원인임을 규명\nleast()·greatest() 기반 커스텀 PySpark UDF로 중복 비교를 걸러내, 서버 증설 없이 파이프라인 안정화",
        skills: ["PySpark", "SQL"],
      },
      {
        category: "academic",
        tag: "PolyU · 2026",
        name: "경량 하이브리드 식물 분류",
        metric: "딥러닝 없이 구현",
        description:
          "현장의 간단한 식물 분류에 무거운 딥러닝 모델을 쓰는 비효율을 줄이기 위한 경량 분류 시스템\n이미지의 형태·질감 패턴을 추출하는 HOG와 LBP를 결합하고 SVM으로 분류\n딥러닝 없이도 환경 변화에 강한 분류 성능 확보",
        skills: ["scikit-learn", "HOG", "LBP", "SVM"],
      },
      {
        category: "academic",
        tag: "PolyU COMP4423 · 2026",
        name: "반려동물 장난 감지기",
        metric: "학습 이미지 27,512장 · 정확도 56.74%",
        description:
          "반려동물이 위험한 물건에 다가가는 상황을 실시간으로 감지해 위험도를 상·중·하 3단계로 분류하는 시스템\n2D 영상만으로는 알기 어려운 실제 거리를 YOLOv11s와 Depth Anything V2(깊이 추정 모델)를 결합해 보완\n근접도 판단 기준을 4차례 개선 — 가중치 합산 → 깊이 값을 곱해 반영 → 세로 띠 샘플링 → 물체 가장자리 간 거리\nResNet18 + Graph Attention Network 하이브리드 분류기 실험\nCOCO 이미지 27,512장으로 학습해 정확도 56.74% 달성",
        skills: ["YOLOv11s", "Depth Anything V2", "PyTorch", "PyTorch Geometric"],
      },
      {
        category: "academic",
        tag: "PolyU DSAI4205 · 2026",
        name: "영화 리뷰 감성 분석 (고전 NLP → BERT)",
        metric: "Macro F1 0.9208 · 베이스라인 대비 4.7배",
        description:
          "Rotten Tomatoes 리뷰를 문구 단위로 세밀하게 분류하는 감성 분석\nWord2Vec+XGBoost, Doc2Vec+MLP, TF-IDF Word2Vec+SVM, BiLSTM 4가지 방식을 3가지 레이블 체계·3가지 증강 전략으로 비교, 데이터를 1,024건에서 11,900건 이상으로 확장\nBERT-base-uncased를 3-Fold 교차검증 앙상블로 파인튜닝해 Macro F1 0.9208 달성 — 베이스라인 대비 4.7배",
        skills: ["BERT", "Hugging Face", "scikit-learn", "Keras", "Gensim"],
      },
    ],
    experience: [
      {
        company: "Withmind",
        title: "AI 엔지니어",
        dateRange: "2026년 6월 - 현재",
        bullets: [
          "멀티모달 AI 키오스크의 응답 지연 개선 — 음성 입출력을 한 번에 처리하는 Gemini Live API 도입",
          "자유 발화는 LLM Tool Calling으로, 답이 정해진 구간은 키워드 매칭 후 백엔드가 직접 처리하도록 나누어 오작동 가능성 차단",
          "Frontend·Backend·AI 연동 구조 설계, PoC 완료 후 2차 고도화 진행",
        ],
      },
      {
        company: "클라이온",
        title: "머신러닝 엔지니어",
        dateRange: "2025년 1월 - 2026년 1월",
        bullets: [
          "추론·요약·지시 이행·RAG 4개 업무 유형의 자동 평가 파이프라인과 사내 SLM 벤치마크 표준 수립",
          "비동기 RAG 평가 마이크로서비스 설계·구축 — 순차 평가를 병렬 처리로 전환하고 임베딩 서비스 분리·캐싱 적용",
          "Gemma·EXAONE·HCX DASH에 LoRA/PEFT(Unsloth) 파인튜닝을 적용하고, 모델별 Chat Template 설계로 Tool-Calling 기능 이식 주도",
          "1~3인 팀에서 PL로 활동하며 주요 시스템의 기능 요구사항·시퀀스 다이어그램·사용자 플로우 문서 작성",
        ],
      },
    ],
    education: [
      {
        school: "홍콩이공대학교",
        degree: "컴퓨팅 학사 (B.Sc.)",
        dateRange: "2019년 9월 - 2026년 8월",
        achievements: [
          "졸업 논문 (DMA-RAG) — 질문 난이도별 RAG 라우팅, 멀티 에이전트 Discussion Agent Layer 설계로 답변 품질은 유지하고 응답 시간·토큰 비용 절감",
          "컴퓨터 비전 — YOLOv11 + Depth Anything V2 기반 실시간 위험 감지 시스템",
          "빅데이터 분석 — 고전 ML부터 BERT까지 NLP 파이프라인 (Macro F1 0.9208)",
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
