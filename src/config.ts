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
    "vLLM",
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
      "AI Engineer with hands-on experience designing and deploying LLM evaluation infrastructure, SLM benchmarking systems, and PEFT-based fine-tuning pipelines. At Claion, I independently led end-to-end ML projects — from requirements definition and system design documentation to Docker-based microservice deployment. Comfortable operating as technical lead (PL) in small, fast-moving teams. Currently building a multimodal AI kiosk at Withmind. Graduated in Computer Science from The Hong Kong Polytechnic University.",
    highlights: [
      { value: "0.35 → 0.70", label: "TriviaQA EM vs. MA-RAG (gpt-oss-20b, 20 questions)", project: "Complexity-Based RAG Routing" },
      { value: "0.663 → 0.205", label: "False-positive score in one dog–person example after the depth gate (single example)", project: "Pet Mischief Detector" },
      { value: "3", label: "SLMs in tool-calling fine-tuning experiments (LoRA/PEFT)", project: "SLM Fine-Tuning" },
      { value: "4", label: "Evaluation axes: qualitative, quantitative, LLM-as-a-Judge, performance", project: "LLM / SLM Evaluation Benchmark" },
    ],
    projects: [
      {
        category: "work",
        tag: "Withmind · Jun 2026 – Present",
        name: "Voice AI Kiosk — Gemini Live Agent & Tool Calling",
        metric: "PoC delivered · 2nd phase in progress",
        description:
          "Developed the backend and AI side of a multimodal in-store voice ordering kiosk (backend and AI developed solo; the production frontend is built by a separate developer).\nBuilt the agent on the Gemini Live API, which handles voice input and output in a single streaming session.\nFree-form ordering (adding to the cart, database lookups) runs on LLM tool calling.\nWhen the model skips a tool call for confirmations, cancellations, recommendations or payment intent, a predefined keyword set lets the backend step in deterministically at the end of the turn; touch input is handled by the backend directly (not yet measured quantitatively).\nDesigned the Frontend–Backend WebSocket contract (OpenAPI) and built a test harness; delivered the PoC, and second-phase work is under way.",
        skills: ["Gemini Live API", "Tool Calling", "LLM Function Calling"],
      },
      {
        category: "work",
        tag: "Claion · Jul 2025 – Sep 2025",
        name: "RAG Evaluation Server",
        metric: "Foundation of Claion's commercial product R.E.X.",
        description:
          "Planned and built the initial architecture of Claion's RAG evaluation system; after my departure, Claion extended it into its commercial RAG quality-diagnosis product, R.E.X. (claion.co.kr/solution/rex).\nBuilt the evaluation server as a FastAPI service whose LangGraph graphs run the metric nodes in parallel, integrating krag- and ragas-based metrics: retrieval (MRR, MAP, NDCG, F1, precision, recall, context relevance) and generation (ROUGE, BLEU, LLM-based faithfulness).\nBuilt a FastAPI data service backed by MongoDB for benchmark data, cached sessions in Redis, and packaged the services with docker compose.\nI drafted the client library that collects a target RAG system's outputs and a teammate extended it; it connects to the server through its API.\nIndependently authored the functional requirements, sequence diagrams, and user flow documentation.",
        skills: ["Python", "FastAPI", "LangGraph", "MongoDB", "Redis"],
      },
      {
        category: "work",
        tag: "Claion · Jan 2025 – Aug 2025",
        name: "LLM / SLM Evaluation Benchmark System",
        metric: "4 evaluation axes · comparison of candidate models",
        description:
          "Set up a scripted benchmark environment to compare candidate SLMs for product integration.\nCovered four axes — qualitative (document report, QnA, RAG), quantitative (lm-evaluation-harness), LLM-as-a-Judge (LogicKor with a GPT-4 judge) and performance (etalon TTFT/TBT) — and compared HCX, EXAONE, Qwen3 and Gemma.\nThe quantitative, judge and performance tooling is open source; automatic report generation was not implemented.",
        skills: ["Python", "Hugging Face"],
      },
      {
        category: "work",
        tag: "Claion · Jan 2025 – Aug 2025",
        name: "SLM Fine-Tuning for Tool-Calling",
        metric: "3 SLMs · LoRA/PEFT · ~11K–15K examples per model",
        description:
          "Ran experiments on injecting tool-calling capability into SLMs without native support.\nApplied LoRA/PEFT fine-tuning via Unsloth on Gemma, Exaone, and HCX DASH, training on open-source Hugging Face datasets that I preprocessed beforehand (about 11K–15K examples per model; a run on the full 551,285-example BitAgent set was also attempted but only reached an intermediate checkpoint). The fine-tuned models were not benchmarked.\nExperimented with modifying the chat templates of models that lack tool-calling support to get tool calling working.",
        skills: ["PyTorch", "Hugging Face", "LoRA / PEFT", "Unsloth"],
      },
      {
        category: "academic",
        tag: "PolyU Capstone · Sep 2025 – May 2026",
        name: "Complexity-Based RAG Routing (DMA-RAG)",
        metric: "TriviaQA EM 0.35 → 0.70 · lower latency on 3 of 4 datasets",
        description:
          "MA-RAG runs the same full multi-step pipeline for every question, so simple questions pay the same cost as hard ones.\nThe MA-RAG baseline is a shared team codebase. I designed a Discussion Agent Layer that every question passes through first: three advocate agents vote on whether it is easy, medium or complex, and a moderator picks the route by majority vote.\nCompared it with MA-RAG on 20 questions × 4 datasets (NQ, TriviaQA, HotpotQA, FEVER) using gpt-oss-20b: TriviaQA EM 0.35 → 0.70, HotpotQA 0.05 → 0.20, lower latency on 3 of 4 datasets (FEVER 28.0 s → 7.6 s).\nCaveats found when re-computing the results: the MA-RAG baseline failed on 38 of 80 questions (output-length limit), so on questions both systems answered the gain holds for TriviaQA (0.50 → 0.71) but not for NQ or FEVER; and the Discussion Agent Layer routed every question to the easy or medium path, so the complex path was never chosen. All 20 TriviaQA questions took the easy (direct-answer) path, so the gain cannot be attributed to routing. Only 20 questions per dataset were evaluated.\nFixed a vLLM infinite-loop failure on small models by setting max_model_len to 32,768 and max_tokens to 4,096 per request.",
        skills: ["LangChain", "LangGraph", "Multi-Agent Systems"],
      },
      {
        category: "academic",
        tag: "PolyU COMP4432 Machine Learning · Team of 2 · 2024",
        name: "Unsupervised Learning on 1M News Headlines",
        metric: "Silhouette ≈ 0.19, yet topic-coherent clusters",
        description:
          "Team project (2 members): grouping one million news headlines into topics with unsupervised learning.\nPreprocessed the headlines (lowercasing, de-duplication, stop-word removal, stemming, TF-IDF) and compared K-means, LSA, LDA (grid search) and an autoencoder.\nMy part: training the K-means and LSA models and writing the report.\nThe silhouette score stayed near 0.19, yet the clusters were coherent (sports, politics, finance), which showed why qualitative inspection is needed alongside distance-based scores.\nThe autoencoder ran out of memory at 5% of the data (about 50,000 headlines), so it was trained on 1–3% subsets.",
        skills: ["K-means", "LSA / LDA", "Autoencoder"],
      },
      {
        category: "academic",
        tag: "PolyU Computer Vision · 2026",
        name: "Lightweight Hybrid Plant Classification",
        metric: "CV 0.76 vs. external test 0.17 diagnosed → redesigned, CV ≈ 0.70",
        description:
          "Computer-vision assignment: classify eight campus plants with traditional machine learning only, no deep learning.\nBuilt the dataset by photographing plants on campus (about 60 images per class).\nExtracted about 1,783 features (HOG, LBP, colour moments) and iterated through four model stages. A stacking model scored 0.76 in cross-validation but only 0.17 on a separate test set collected from the web — an overfitting and distribution gap I diagnosed — so I redesigned it around a SelectKBest(100) → PCA(30) bottleneck, reaching about 0.70 cross-validated accuracy.\nKnown limits: strong sunlight, camera angle and cluttered backgrounds still caused misclassifications.",
        skills: ["scikit-learn", "HOG", "LBP", "SVM"],
      },
      {
        category: "academic",
        tag: "PolyU COMP4423 · Team of 3 · 2026",
        name: "Pet Mischief Detector",
        metric: "Depth gate: false-positive score 0.663 → 0.205 in one example · 3-class accuracy 0.54–0.57 (141 clips)",
        description:
          "Team project (3 members) that rates, from a still image, how risky a pet's position relative to household objects is (HIGH / MEDIUM / LOW).\n2D box proximity alone flags objects that are adjacent in the image but far apart in depth, so the team combined a pretrained YOLO detector with Depth Anything V2 depth estimates. In one dog–person example the depth gate cut a false-positive score from 0.663 to 0.205 (a single example, not a dataset metric).\nMy part: the risk-scoring logic, iterated four times — additive weighting → multiplicative depth gate → portrait-strip depth sampling → edge-to-edge gap. Three-class accuracy on 141 relabelled clips is 0.54 (yolo26s) and 0.57 (yolo11n). The earlier 0.25 was measured on a different label distribution, and re-scoring the old logic on the new labels gives a higher number, so I do not claim an accuracy improvement.\nAlso built a ResNet18 + Graph Attention Network classifier and the heuristic evaluation script. The classifier did not beat the heuristic — about 120 training samples were too few. Detector fine-tuning (done by a teammate) did not converge, so a pretrained detector was used (mAP@0.5 0.635 on 2,752 test images).\nLimitation: the labelled clips are imbalanced (95 high, 44 low, 2 medium), so the result is best read through the failure analysis rather than as an absolute accuracy.",
        skills: ["YOLO (pretrained)", "Depth Anything V2", "PyTorch", "PyTorch Geometric"],
      },
      {
        category: "academic",
        tag: "PolyU DSAI4205 · Team of 6 · 2026",
        name: "Movie Sentiment Analysis — Classical NLP to BERT",
        metric: "Team of 6 · staged hand-offs from data to models",
        description:
          "Team project (6 members): fine-grained phrase-level sentiment classification on the Rotten Tomatoes dataset, from classical NLP baselines to BERT.\nThe team split the work into data expansion, classical models and BERT training, and passed each stage's results to the next as the basis for design decisions.\nMy part: compared the original, synthetic, external and hybrid augmentation variants across models and built the F1 visualisations, giving the team the evidence for choosing the dataset used to train the BERT models.",
        skills: ["BERT", "Hugging Face", "scikit-learn", "Keras", "Gensim"],
      },
    ],
    experience: [
      {
        company: "Withmind",
        title: "Machine Learning Engineer · Manager",
        dateRange: "Jun 2026 - Present",
        bullets: [
          "Built a multimodal voice-ordering agent on the Gemini Live API, which handles voice input and output in a single streaming session (backend and AI developed solo).",
          "LLM tool calling for free-form ordering, with a keyword-based deterministic backend fallback when the model skips a tool call; touch input is handled by the backend directly.",
          "Designed the Frontend–Backend WebSocket contract (OpenAPI), delivered the PoC, and started second-phase development.",
        ],
      },
      {
        company: "Claion",
        title: "AI Engineer",
        dateRange: "Jan 2025 - Jan 2026",
        bullets: [
          "Set up a scripted SLM evaluation environment scored on qualitative, quantitative (lm-evaluation-harness), LLM-as-a-Judge and performance criteria to compare candidate models.",
          "Planned and built the initial architecture of a RAG evaluation server — async FastAPI with LangGraph metric graphs, a MongoDB data service and a Redis cache. The project was paused and later resumed; Claion productized it as R.E.X.",
          "Ran SLM fine-tuning experiments (LoRA/PEFT via Unsloth) on Gemma, Exaone, and HCX DASH, using preprocessed open-source datasets and chat-template modification experiments for tool calling.",
          "Operated as PL in teams of 1–3; authored functional requirements, sequence diagrams, and user flow documentation for the RAG evaluation system.",
        ],
      },
    ],
    education: [
      {
        school: "The Hong Kong Polytechnic University",
        degree: "Computer Science",
        dateRange: "Sep 2019 - Aug 2026",
        achievements: [
          "Work-Integrated Education (WIE): Claion employment credited by the university; capstone project run in parallel",
          "Capstone (DMA-RAG): Complexity-based RAG routing with a multi-agent Discussion Agent Layer, benchmarked against MA-RAG on four QA datasets",
          "Computer Vision: Pet–object risk assessment pipeline using a pretrained YOLO + Depth Anything V2 (team project)",
          "Big Data Analytics: team project (6 members) on sentiment analysis from classical ML to BERT",
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
      "LLM 평가부터 SLM 파인튜닝, 음성 AI 키오스크까지 — 문제 정의에서 설계·배포까지 직접 끌고 가는 AI 엔지니어\n클라이온에서 요구사항 정의, 설계 문서 작성, Docker 기반 마이크로서비스 배포까지 ML 프로젝트 전 과정을 단독 주도\n1~3인 규모 팀에서 기술 리드(PL)로 활동\n현재 Withmind에서 멀티모달 AI 키오스크 개발 중\n홍콩이공대학교 컴퓨터공학과 졸업",
    highlights: [
      { value: "0.35 → 0.70", label: "MA-RAG 대비 TriviaQA EM (gpt-oss-20b, 20문항)", project: "질문 난이도별 RAG 라우팅" },
      { value: "0.663 → 0.205", label: "깊이 게이트 적용 후 개–사람 쌍 예시의 오탐 점수 (예시 1건)", project: "반려동물 장난 감지기" },
      { value: "3개", label: "Tool-Calling 파인튜닝 실험 대상 SLM (LoRA/PEFT)", project: "SLM Tool-Calling 파인튜닝" },
      { value: "4개", label: "평가 기준: 정성·정량·LLM as a Judge·성능", project: "LLM / SLM 평가 벤치마크" },
    ],
    projects: [
      {
        category: "work",
        tag: "Withmind · 2026.06 – 현재",
        name: "음성 AI 키오스크 — Gemini Live 에이전트",
        metric: "PoC 개발 완료 · 2차 고도화 진행 중",
        description:
          "음성으로 주문하는 매장용 AI 키오스크의 Backend·AI 개발 (Backend·AI 단독, 실제 프론트엔드는 별도 개발자)\n음성 입출력을 한 번에 처리하는 Gemini Live API 기반으로 에이전트 구현\n장바구니 담기·DB 조회 등 자유로운 발화는 LLM Tool Calling으로 처리\n모델이 도구를 호출하지 않은 확인·취소·추천·결제 의도는 사전 정의한 키워드로 백엔드가 턴 종료 시점에 보정하고, 터치 입력은 백엔드가 직접 처리 (정량 측정은 아직 못 함)\nFrontend–Backend WebSocket 계약(OpenAPI)을 설계하고 테스트용 하네스를 제작해 PoC 완료",
        skills: ["Gemini Live API", "Tool Calling", "LLM Function Calling"],
      },
      {
        category: "work",
        tag: "클라이온 · 2025.07 – 2025.09",
        name: "RAG 평가 서버",
        metric: "클라이온 상용 제품 R.E.X.의 기반 설계",
        description:
          "클라이온 RAG 평가 시스템의 기획과 초기 아키텍처(기초 뼈대) 설계·구축 — 퇴사 후 클라이온이 고도화해 상용 솔루션 R.E.X.(claion.co.kr/solution/rex)로 출시\nFastAPI 평가 서버에서 LangGraph 그래프가 krag·ragas 기반 지표 노드를 병렬로 실행 — 검색(MRR·MAP·NDCG·F1·precision·recall·context relevance)과 생성(ROUGE·BLEU·LLM 기반 faithfulness)\nFastAPI 데이터 서비스와 MongoDB로 벤치마크 데이터를 다루고, 세션은 Redis로 캐싱, 서비스들은 docker compose로 구성\n대상 RAG의 출력을 수집하는 클라이언트 라이브러리는 초안을 작성하고 팀원이 확장해 평가 서버와 API로 연동\n기능 요구사항, 시퀀스 다이어그램, 사용자 플로우 문서 단독 작성",
        skills: ["Python", "FastAPI", "LangGraph", "MongoDB", "Redis"],
      },
      {
        category: "work",
        tag: "클라이온 · 2025.01 – 2025.08",
        name: "LLM / SLM 평가 벤치마크 시스템",
        metric: "4개 평가 기준 · 후보 모델 비교",
        description:
          "어떤 SLM을 제품에 넣을지 데이터로 비교할 수 있도록 스크립트화된 평가 환경 구성\n정성(문서 보고서·QnA·RAG), 정량(lm-evaluation-harness), LLM as a Judge(LogicKor, GPT-4 judge), 성능(etalon TTFT/TBT) 4가지 기준으로 HCX·EXAONE·Qwen3·Gemma를 비교 평가\n정량·Judge·성능 도구는 오픈소스를 활용했고, 보고서 자동 생성은 미구현",
        skills: ["Python", "Hugging Face"],
      },
      {
        category: "work",
        tag: "클라이온 · 2025.01 – 2025.08",
        name: "SLM Tool-Calling 파인튜닝",
        metric: "SLM 3종 · LoRA/PEFT · 모델별 약 1.1만~1.5만 건",
        description:
          "Tool-Calling을 지원하지 않던 소형 언어 모델(SLM)에 해당 기능을 이식하는 실험 진행\nGPU·비용 제약을 고려해 Full fine-tuning 대신 LoRA/PEFT를 선택, Unsloth로 Gemma·EXAONE·HCX DASH 3종에 적용\nHugging Face 오픈소스 Tool-Calling 데이터(BitAgent·ToolACE·xLAM·Glaive)를 학습 전에 전처리해 모델별 약 1.1만~1.5만 건 규모로 사용했고 BitAgent 전량 551,285건으로도 학습을 시도했으나 중도 체크포인트까지만 진행. 파인튜닝한 모델은 벤치마크하지 않음\nTool-Calling을 지원하지 않는 모델의 Chat Template을 수정하며 동작 여부를 검증하는 실험 진행",
        skills: ["PyTorch", "Hugging Face", "LoRA / PEFT", "Unsloth"],
      },
      {
        category: "academic",
        tag: "PolyU 캡스톤 · 2025.09 – 2026.05",
        name: "질문 난이도별 RAG 라우팅 (DMA-RAG)",
        metric: "TriviaQA EM 0.35 → 0.70 · 4개 중 3개 데이터셋에서 지연 감소",
        description:
          "MA-RAG는 모든 질문에 같은 다단계 파이프라인을 돌려서, 쉬운 질문도 어려운 질문과 같은 비용을 치르는 구조\n기준선 MA-RAG는 팀 공동 코드. 모든 질문이 먼저 통과하는 Discussion Agent Layer를 설계 — 옹호 에이전트 3개가 쉬움·보통·복잡에 투표하고 중재자가 다수결로 경로를 선택\nMA-RAG와 4개 데이터셋(NQ, TriviaQA, HotpotQA, FEVER, 각 20문항)에서 비교 — gpt-oss-20b 기준 TriviaQA EM 0.35 → 0.70, HotpotQA 0.05 → 0.20, 4개 중 3개 데이터셋에서 지연 감소 (FEVER 28.0초 → 7.6초)\n결과를 다시 계산하며 확인한 한계: MA-RAG 기준선이 80문항 중 38문항에서 출력 길이 제한으로 응답에 실패해, 두 시스템이 모두 답한 문항만 보면 TriviaQA(0.50 → 0.71)는 개선이 유지되지만 NQ와 FEVER는 그렇지 않음. DAL이 모든 문항을 easy·medium으로 판정해 복잡 경로는 한 번도 선택되지 않았고, TriviaQA 20문항은 모두 easy(직접 답변) 경로라 향상을 라우팅 효과로 단정할 수 없음. 평가 문항은 데이터셋당 20개\n소형 모델에서 vLLM이 같은 토큰을 무한 반복하는 문제를 max_model_len 32,768, 요청당 max_tokens 4,096으로 설정해 해결",
        skills: ["LangChain", "LangGraph", "Multi-Agent Systems"],
      },
      {
        category: "academic",
        tag: "PolyU COMP4432 머신러닝 · 2인 팀 · 2024",
        name: "뉴스 헤드라인 100만 건 비지도 학습",
        metric: "실루엣 약 0.19, 그러나 주제별로 일관된 군집",
        description:
          "2인 팀 프로젝트 — 뉴스 헤드라인 100만 건을 비지도 학습으로 주제별 군집화\n소문자화·중복 제거·불용어 제거·어간 추출·TF-IDF로 전처리하고 K-means, LSA, LDA(그리드 서치), 오토인코더를 비교\n담당: K-means·LSA 학습과 보고서 작성\n실루엣 점수는 약 0.19로 낮았지만 군집 내용은 스포츠·정치·금융 등으로 일관되어, 거리 기반 점수와 함께 정성 검토가 필요한 이유를 확인\n오토인코더는 전체의 5%(약 5만 건)에서 메모리가 부족해 1~3% 부분집합으로 학습",
        skills: ["K-means", "LSA / LDA", "Autoencoder"],
      },
      {
        category: "academic",
        tag: "PolyU 컴퓨터 비전 · 2026",
        name: "경량 하이브리드 식물 분류",
        metric: "교차검증 0.76 vs 외부 테스트 0.17 진단 → 재설계 후 CV 약 0.70",
        description:
          "컴퓨터 비전 과제 — 딥러닝 없이 전통 머신러닝만으로 교내 식물 8종을 분류\n교내 식물을 직접 촬영해 클래스당 약 60장의 데이터셋 구축\nHOG·LBP·색상 모멘트 등 약 1,783개 특징으로 4단계 모델을 실험 — 스태킹 모델이 교차검증 0.76이었지만 웹에서 수집한 별도 테스트셋에서는 0.17로 무너지는 과적합·분포 차이를 진단하고, SelectKBest(100) → PCA(30) 병목 구조로 재설계해 교차검증 약 0.70 확보\n한계: 강한 햇빛, 촬영 각도, 복잡한 배경에서는 여전히 오분류가 발생",
        skills: ["scikit-learn", "HOG", "LBP", "SVM"],
      },
      {
        category: "academic",
        tag: "PolyU COMP4423 · 3인 팀 · 2026",
        name: "반려동물 장난 감지기",
        metric: "깊이 게이트: 예시 1건에서 오탐 점수 0.663 → 0.205 · 3단계 정확도 0.54~0.57 (141개 클립)",
        description:
          "3인 팀 프로젝트 — 정지 이미지에서 반려동물과 주변 물건의 위치 관계를 보고 사고 위험도를 상·중·하 3단계로 판정하는 시스템\n2D 박스 거리만 보면 화면에서는 붙어 있지만 실제로는 멀리 떨어진 물건까지 위험으로 판단해서, 팀이 사전학습 YOLO에 Depth Anything V2(깊이 추정 모델)를 결합 — 개–사람 쌍 예시 1건에서 깊이 게이트가 오탐 점수를 0.663에서 0.205로 낮춤 (데이터셋 지표가 아님)\n담당: 위험도 점수 로직을 4차례 개선 — 가중치 합산 → 깊이 값을 곱해 반영 → 세로 띠 샘플링 → 물체 가장자리 간 거리. 라벨 재정비 후 141개 클립 3단계 정확도는 0.54(yolo26s)·0.57(yolo11n). 이전 0.25는 라벨 분포가 달라 같은 기준이 아니고, 같은 라벨로 이전 로직을 재채점하면 더 높게 나와 정확도 향상은 주장하지 않음\nResNet18 + Graph Attention Network 분류기와 휴리스틱 평가 스크립트도 구현. 분류기는 학습 샘플이 약 120개로 적어 규칙 기반을 넘지 못했고, 팀원이 진행한 검출기 파인튜닝도 수렴하지 않아 사전학습 모델을 사용 (테스트 2,752장 mAP@0.5 0.635)\n한계: 라벨 클립이 high 95 · low 44 · medium 2로 치우쳐 있어, 절대 정확도보다 실패 원인 분석이 핵심",
        skills: ["YOLO(사전학습)", "Depth Anything V2", "PyTorch", "PyTorch Geometric"],
      },
      {
        category: "academic",
        tag: "PolyU DSAI4205 · 6인 팀 · 2026",
        name: "영화 리뷰 감성 분석 (고전 NLP → BERT)",
        metric: "6인 팀 · 단계별 결과 인계로 협업",
        description:
          "6인 팀 프로젝트 — Rotten Tomatoes 리뷰를 문구 단위로 세밀하게 분류하는 감성 분석 (고전 NLP에서 BERT까지)\n데이터 확장, 고전 모델, BERT 학습을 팀원이 나눠 맡고, 앞 단계의 실험 결과를 다음 단계 설계의 근거로 넘기며 협업\n담당: 원본·합성·외부·하이브리드 증강 변형을 모델별로 비교 평가하고 F1 시각화를 제작, 팀이 BERT 학습용 데이터셋을 정하는 근거 제공",
        skills: ["BERT", "Hugging Face", "scikit-learn", "Keras", "Gensim"],
      },
    ],
    experience: [
      {
        company: "Withmind",
        title: "머신러닝 엔지니어 · 매니저",
        dateRange: "2026년 6월 - 현재",
        bullets: [
          "멀티모달 음성 주문 에이전트 개발 — 음성 입출력을 한 번에 처리하는 Gemini Live API 기반 (Backend·AI 단독)",
          "자유 발화는 LLM Tool Calling으로 처리하고, 모델이 도구 호출을 놓친 의도는 키워드 기반으로 백엔드가 보정, 터치 입력은 백엔드가 직접 처리",
          "Frontend–Backend WebSocket 계약(OpenAPI) 설계, PoC 완료 후 2차 고도화 진행",
        ],
      },
      {
        company: "클라이온",
        title: "AI 엔지니어",
        dateRange: "2025년 1월 - 2026년 1월",
        bullets: [
          "정성·정량(lm-evaluation-harness)·LLM as a Judge·성능 4개 기준으로 후보 SLM을 비교하는 스크립트화된 평가 환경 구성",
          "RAG 평가 서버의 기획과 초기 아키텍처 설계·구축 — FastAPI·LangGraph 지표 그래프·MongoDB 데이터 서비스·Redis 캐시 (보류 후 재개되어 클라이온이 R.E.X.로 상용화)",
          "Gemma·EXAONE·HCX DASH에 LoRA/PEFT(Unsloth) 파인튜닝을 적용하고, 오픈소스 데이터 전처리와 Chat Template 수정 실험으로 Tool-Calling 동작을 검증",
          "1~3인 팀에서 PL로 활동하며 RAG 평가 시스템의 기능 요구사항·시퀀스 다이어그램·사용자 플로우 문서 작성",
        ],
      },
    ],
    education: [
      {
        school: "홍콩이공대학교",
        degree: "컴퓨터공학",
        dateRange: "2019년 9월 - 2026년 8월",
        achievements: [
          "WIE(Work-Integrated Education) 프로그램 — 클라이온 근무 시간을 학교에서 인정받아 캡스톤 프로젝트와 병행",
          "캡스톤 프로젝트 (DMA-RAG) — 질문 난이도별 RAG 라우팅과 멀티 에이전트 Discussion Agent Layer, 4개 QA 데이터셋에서 MA-RAG와 비교 평가",
          "컴퓨터 비전 — 사전학습 YOLO + Depth Anything V2 기반 반려동물 위험도 판정 파이프라인 (팀 프로젝트)",
          "빅데이터 분석 — 고전 ML부터 BERT까지 감성 분석 6인 팀 프로젝트",
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
