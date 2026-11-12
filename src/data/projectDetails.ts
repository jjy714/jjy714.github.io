// Detail-page content for selected projects. Every claim here mirrors what is
// already on the main page (config.ts) and in the submitted reports — do not
// add numbers that are not traceable to a report or to verified code.
type Bi = { en: string; ko: string };
export interface Chart {
  title: Bi;
  labels: string[];
  series: { name: string; values: number[] }[];
  max: number;
  digits?: number;
  note?: Bi;
}
export interface Section {
  heading: Bi;
  paragraphs?: Bi[];
  bullets?: Bi[];
  chartIndex?: number;
}
export interface ProjectDetail {
  slug: string;
  title: Bi;
  tag: Bi;
  summary: Bi;
  skills: string[];
  sections: Section[];
  charts: Chart[];
}

export const projectDetails: ProjectDetail[] = [
  // ---------------------------------------------------------------- plant
  {
    slug: "plant-classification",
    title: {
      en: "Lightweight Hybrid Plant Classification",
      ko: "경량 하이브리드 식물 분류",
    },
    tag: {
      en: "PolyU Computer Vision (COMP4423) · Individual assignment · 2026",
      ko: "PolyU 컴퓨터 비전(COMP4423) · 개인 과제 · 2026",
    },
    summary: {
      en: "Classifying campus plants with traditional machine learning only — no deep learning — and diagnosing why a high cross-validation score collapsed on a separate test set.",
      ko: "딥러닝 없이 전통 머신러닝만으로 교내 식물을 분류하고, 높게 나온 교차검증 점수가 별도 테스트셋에서 무너지는 이유를 진단한 과제입니다.",
    },
    skills: ["scikit-learn", "OpenCV", "HOG", "LBP", "SVM", "Random Forest"],
    charts: [
      {
        title: { en: "Accuracy by stage", ko: "단계별 정확도" },
        labels: ["V3 CV", "V3 external test", "V4 CV"],
        series: [{ name: "Accuracy", values: [0.76, 0.17, 0.707] }],
        max: 1,
        digits: 2,
        note: {
          en: "V3 looked strong in cross-validation but not on the separate test set; V4 was redesigned around a feature bottleneck.",
          ko: "V3는 교차검증에서는 높았지만 별도 테스트셋에서는 무너졌고, V4는 특징 병목 구조로 재설계했습니다.",
        },
      },
    ],
    sections: [
      {
        heading: { en: "Problem", ko: "문제" },
        paragraphs: [
          {
            en: "Classify campus plants using hand-crafted features and classical models only. The constraint is the point: features and model choices have to be justified, not outsourced to a pretrained network.",
            ko: "손으로 설계한 특징과 전통 모델만으로 교내 식물을 분류하는 과제입니다. 제약 자체가 핵심이라, 사전학습 네트워크에 맡기지 않고 특징과 모델 선택의 근거를 직접 세워야 했습니다.",
          },
        ],
      },
      {
        heading: { en: "Data", ko: "데이터" },
        bullets: [
          {
            en: "Photographed the plants on campus myself — about 60 images per class, roughly 536 images in the train/validation set.",
            ko: "교내 식물을 직접 촬영해 클래스당 약 60장, train/validation 약 536장 규모로 구성했습니다.",
          },
          {
            en: "The separate test set was collected from the web, so it differs from the training photos in lighting and background.",
            ko: "별도 테스트셋은 웹에서 수집해, 학습 사진과 조명·배경 조건이 다릅니다.",
          },
          {
            en: "About 1,783 features per image: HOG, LBP and colour moments.",
            ko: "이미지당 약 1,783개 특징을 추출했습니다 — HOG, LBP, 색상 모멘트.",
          },
        ],
      },
      {
        heading: { en: "Four stages of experiments", ko: "4단계 실험" },
        bullets: [
          {
            en: "V1 — vanilla Random Forest: 1,700+ features against about 50 samples per class, severe overfitting.",
            ko: "V1 — 기본 Random Forest: 특징 1,700+개 대비 클래스당 샘플 약 50개로 심한 과적합.",
          },
          {
            en: "V2 — model comparison: HistGradientBoosting about 64%, SVM about 68%.",
            ko: "V2 — 모델 비교: HistGradientBoosting 약 64%, SVM 약 68%.",
          },
          {
            en: "V3 — stacking ensemble: about 76% cross-validated, but about 17% on the separate test set.",
            ko: "V3 — 스태킹 앙상블: 교차검증 약 76%, 별도 테스트셋 약 17%.",
          },
          {
            en: "V4 — feature bottleneck: SelectKBest(100) → PCA(30) with an SVM, about 70% cross-validated.",
            ko: "V4 — 특징 병목: SelectKBest(100) → PCA(30) + SVM, 교차검증 약 70%.",
          },
        ],
        chartIndex: 0,
      },
      {
        heading: { en: "What I took from it", ko: "얻은 것" },
        paragraphs: [
          {
            en: "A cross-validation score is only as good as the split behind it. I diagnosed the overfitting and the gap to the external test, and cut the feature dimension instead of adding more model capacity.",
            ko: "교차검증 점수는 그 뒤의 분할만큼만 믿을 수 있다는 점을 확인했습니다. 과적합과 외부 테스트와의 격차를 진단하고, 모델 용량을 늘리는 대신 특징 차원을 줄이는 방향으로 재설계했습니다.",
          },
          {
            en: "Remaining failures: strong sunlight changes colour moments, camera angle hurts HOG, and cluttered backgrounds leak into the features.",
            ko: "남은 오분류 원인은 강한 햇빛으로 인한 색 모멘트 변화, 촬영 각도에 민감한 HOG, 배경 혼입입니다.",
          },
        ],
      },
    ],
  },
  // ------------------------------------------------------------------ DMA
  {
    slug: "dma-rag",
    title: {
      en: "Complexity-Based RAG Routing (DMA-RAG)",
      ko: "질문 난이도별 RAG 라우팅 (DMA-RAG)",
    },
    tag: {
      en: "PolyU Capstone · Solo project · Sep 2025 – May 2026",
      ko: "PolyU 캡스톤 · 개인 프로젝트 · 2025.09 – 2026.05",
    },
    summary: {
      en: "A Discussion Agent Layer in which three advocate agents vote on how hard a question is, so easy questions skip the full multi-step RAG pipeline.",
      ko: "advocate 에이전트 3명이 질문 난이도에 투표해, 쉬운 질문은 다단계 RAG 파이프라인을 건너뛰도록 한 Discussion Agent Layer입니다.",
    },
    skills: ["LangChain", "LangGraph", "vLLM", "gpt-oss-20b", "Multi-Agent Systems"],
    charts: [
      {
        title: { en: "Accuracy (EM; FEVER = label accuracy)", ko: "정확도 (EM, FEVER는 라벨 정확도)" },
        labels: ["NQ", "TriviaQA", "HotpotQA", "FEVER"],
        series: [
          { name: "MA-RAG", values: [0.15, 0.35, 0.05, 0.15] },
          { name: "DMA-RAG", values: [0, 0.7, 0.2, 0.1] },
        ],
        max: 1,
        digits: 2,
        note: {
          en: "gpt-oss-20b, 20 questions per dataset, single seed.",
          ko: "gpt-oss-20b, 데이터셋당 20문항, 단일 시드.",
        },
      },
      {
        title: { en: "Latency (seconds per question)", ko: "응답 지연 (초 / 질문)" },
        labels: ["NQ", "TriviaQA", "HotpotQA", "FEVER"],
        series: [
          { name: "MA-RAG", values: [15.0, 12.9, 25.6, 28.0] },
          { name: "DMA-RAG", values: [15.2, 6.5, 21.4, 7.6] },
        ],
        max: 32,
        digits: 1,
        note: {
          en: "Lower on 3 of 4 datasets; TriviaQA −50%, FEVER −73%.",
          ko: "4개 중 3개 데이터셋에서 감소 — TriviaQA −50%, FEVER −73%.",
        },
      },
    ],
    sections: [
      {
        heading: { en: "Problem", ko: "문제" },
        paragraphs: [
          {
            en: "MA-RAG runs the same full multi-step pipeline for every question, so an easy question pays the same cost as a hard one.",
            ko: "MA-RAG는 모든 질문에 같은 다단계 파이프라인을 돌려서, 쉬운 질문도 어려운 질문과 같은 비용을 치릅니다.",
          },
        ],
      },
      {
        heading: { en: "Design", ko: "설계" },
        bullets: [
          {
            en: "Every question passes through the Discussion Agent Layer first: Direct Responder, Contextual Analyst and Deep Researcher each give a view, and a moderator picks the route by majority.",
            ko: "모든 질문이 먼저 Discussion Agent Layer를 통과합니다 — Direct Responder, Contextual Analyst, Deep Researcher가 각자 판단하고 중재자가 다수결로 경로를 정합니다.",
          },
          {
            en: "Easy → direct answer. Medium → single retrieval plus context analysis. Complex → the full MA-RAG pipeline.",
            ko: "쉬움 → 직접 답변, 보통 → 단일 검색 + 문맥 분석, 복잡 → 전체 MA-RAG 파이프라인.",
          },
          {
            en: "The baseline reproduces the original MA-RAG paper's code; the layer's design, implementation and evaluation are my own.",
            ko: "기준선은 원 논문 MA-RAG 코드를 재현해 사용했고, DAL의 설계·구현·평가는 단독으로 수행했습니다.",
          },
        ],
      },
      {
        heading: { en: "Evaluation setup", ko: "평가 환경" },
        bullets: [
          {
            en: "gpt-oss-20b served with vLLM on one A100; Qwen-embedding-0.6B for retrieval.",
            ko: "gpt-oss-20b를 A100 1장에서 vLLM으로 서빙, 검색 임베딩은 Qwen-embedding-0.6B.",
          },
          {
            en: "Four datasets (NQ, TriviaQA, HotpotQA, FEVER), 20 questions each. Cross-checked with Gemini 2.5 Flash-Lite and Qwen3-8B.",
            ko: "NQ, TriviaQA, HotpotQA, FEVER 4개 데이터셋 각 20문항. Gemini 2.5 Flash-Lite, Qwen3-8B로 교차 확인.",
          },
        ],
        chartIndex: 0,
      },
      {
        heading: { en: "Results", ko: "결과" },
        paragraphs: [
          {
            en: "TriviaQA EM rose from 0.35 to 0.70 and HotpotQA from 0.05 to 0.20, with lower latency on three of four datasets.",
            ko: "TriviaQA EM은 0.35에서 0.70으로, HotpotQA는 0.05에서 0.20으로 올랐고 4개 중 3개 데이터셋에서 지연이 줄었습니다.",
          },
        ],
        chartIndex: 1,
      },
      {
        heading: { en: "Caveats I documented", ko: "함께 기록한 한계" },
        bullets: [
          {
            en: "The MA-RAG baseline failed to produce a parsable answer on 38 of 80 questions (output-length limit). On questions both systems answered, TriviaQA improves 0.50 → 0.71 but NQ and FEVER do not.",
            ko: "MA-RAG 기준선이 80문항 중 38문항에서 출력 길이 제한으로 응답 파싱에 실패했습니다. 두 시스템이 모두 답한 문항만 보면 TriviaQA는 0.50 → 0.71로 개선이 유지되지만 NQ와 FEVER는 그렇지 않습니다.",
          },
          {
            en: "The Complex path was never selected, and the TriviaQA gain is specific to gpt-oss-20b, so it should not be read as a general routing win.",
            ko: "복잡 경로는 한 번도 선택되지 않았고, TriviaQA 향상은 gpt-oss-20b에 특이적이라 일반적인 라우팅 효과로 읽으면 안 됩니다.",
          },
          {
            en: "Latency is where the gain is clearest; token usage was higher, so I make no cost-saving claim.",
            ko: "가장 분명한 이득은 지연이며, 토큰 사용은 더 많았기 때문에 비용 절감은 주장하지 않습니다.",
          },
        ],
      },
      {
        heading: { en: "A production-style fix", ko: "운영 중 해결한 문제" },
        paragraphs: [
          {
            en: "On small models vLLM sometimes looped on the same token. Capping max_model_len at 32,768 and max_tokens at 4,096 per request kept inference stable across all four datasets.",
            ko: "소형 모델에서 vLLM이 같은 토큰을 무한 반복하는 문제가 있어, max_model_len 32,768과 요청당 max_tokens 4,096으로 제한해 4개 데이터셋 전체에서 안정적으로 추론했습니다.",
          },
        ],
      },
    ],
  },
  // ------------------------------------------------------------------ Pet
  {
    slug: "pet-mischief",
    title: { en: "Pet Mischief Detector", ko: "반려동물 장난 감지기" },
    tag: {
      en: "PolyU COMP4423 · Team of 3 · Apr 2026",
      ko: "PolyU COMP4423 · 3인 팀 · 2026.04",
    },
    summary: {
      en: "Rates how risky a pet's position relative to household objects is from a still image, using object detection plus monocular depth.",
      ko: "정지 이미지에서 반려동물과 주변 물건의 위치 관계로 사고 위험도를 판정하는 시스템입니다. 객체 검출과 단안 깊이 추정을 결합했습니다.",
    },
    skills: ["YOLOv11s", "Depth Anything V2", "PyTorch", "PyTorch Geometric"],
    charts: [
      {
        title: { en: "Depth gate on one dog–person example", ko: "깊이 게이트 적용 (개–사람 예시 1건)" },
        labels: ["2D only", "With depth gate"],
        series: [{ name: "Risk score", values: [0.663, 0.205] }],
        max: 0.8,
        digits: 3,
        note: {
          en: "A single illustrative image, not a dataset metric.",
          ko: "설명용 이미지 1장이며 데이터셋 지표가 아닙니다.",
        },
      },
      {
        title: { en: "Pretrained detector AP@0.5 by class (2,752 test images)", ko: "사전학습 검출기 클래스별 AP@0.5 (테스트 2,752장)" },
        labels: ["cat", "dog", "laptop", "cup", "vase", "keyboard", "plant", "remote"],
        series: [{ name: "AP@0.5", values: [0.813, 0.81, 0.797, 0.603, 0.598, 0.534, 0.501, 0.428] }],
        max: 1,
        digits: 2,
      },
    ],
    sections: [
      {
        heading: { en: "Problem", ko: "문제" },
        paragraphs: [
          {
            en: "Judging by 2D box proximity alone flags objects that touch in the image but are far apart in depth.",
            ko: "2D 박스 근접도만 보면 화면에서는 붙어 있지만 실제로는 멀리 떨어진 물건까지 위험으로 판단합니다.",
          },
        ],
      },
      {
        heading: { en: "My part: the scoring logic", ko: "담당: 점수 로직" },
        bullets: [
          {
            en: "closeness = (0.5 · proximity + 0.2 · contact) × depth_similarity; risk = closeness × a pair-specific multiplier; thresholds 0.30 / 0.65 map to low / medium / high.",
            ko: "closeness = (0.5·근접도 + 0.2·접촉) × 깊이 유사도, risk = closeness × 쌍별 배수, 임계값 0.30 / 0.65로 low · medium · high 판정.",
          },
          {
            en: "Four iterations: additive weights → multiplicative depth gate → vertical-strip depth sampling → edge-to-edge distance.",
            ko: "4단계로 개선했습니다 — 가중치 합산 → 곱셈 깊이 게이트 → 세로 띠 깊이 샘플링 → 가장자리 간 거리.",
          },
          {
            en: "Three-class accuracy on 141 relabelled clips: 0.54 (YOLOv11s) and 0.57 (YOLOv11n).",
            ko: "라벨 재정비 후 141개 클립 3단계 정확도는 YOLOv11s 0.54, YOLOv11n 0.57입니다.",
          },
        ],
        chartIndex: 0,
      },
      {
        heading: { en: "Detector", ko: "검출기" },
        paragraphs: [
          {
            en: "Detector fine-tuning attempts did not converge (mAP@0.5 near zero), so the COCO-pretrained YOLOv11s was used as is — 0.635 mAP@0.5 on 2,752 test images.",
            ko: "검출기 파인튜닝은 수렴하지 않아(mAP@0.5가 0 근처) COCO 사전학습 YOLOv11s를 그대로 사용했고, 테스트 2,752장에서 mAP@0.5 0.635입니다.",
          },
        ],
        chartIndex: 1,
      },
      {
        heading: { en: "A learned alternative", ko: "학습형 대안" },
        paragraphs: [
          {
            en: "I also built a ResNet18 + Graph Attention Network classifier and a heuristic evaluation script. With about 120 training clips it did not beat the rule-based score; I wrote up the cause (data size, label noise) alongside the result.",
            ko: "ResNet18 + Graph Attention Network 분류기와 휴리스틱 평가 스크립트도 구현했습니다. 학습 클립이 약 120개라 규칙 기반 점수를 넘지 못했고, 원인(데이터 규모, 라벨 노이즈)을 결과와 함께 기록했습니다.",
          },
          {
            en: "The labelled clips are imbalanced (95 high, 44 low, 2 medium), so the failure analysis matters more than the absolute accuracy.",
            ko: "라벨 클립이 high 95 · low 44 · medium 2로 치우쳐 있어, 절대 정확도보다 실패 원인 분석이 핵심입니다.",
          },
        ],
      },
    ],
  },
  // ---------------------------------------------------------------- Movie
  {
    slug: "movie-sentiment",
    title: {
      en: "Movie Sentiment Analysis — Classical NLP to BERT",
      ko: "영화 리뷰 감성 분석 (고전 NLP → BERT)",
    },
    tag: {
      en: "PolyU DSAI4205 Big Data Analytics · Team of 6 · 2026",
      ko: "PolyU DSAI4205 빅데이터 분석 · 6인 팀 · 2026",
    },
    summary: {
      en: "Phrase-level sentiment classification on Rotten Tomatoes, built as a relay: each stage's results fed the next stage's design.",
      ko: "Rotten Tomatoes 구문 단위 감성 분류를 단계별로 이어받는 방식으로 진행한 팀 프로젝트입니다. 앞 단계의 결과가 다음 단계 설계의 근거가 됩니다.",
    },
    skills: ["BERT", "Hugging Face", "scikit-learn", "Keras", "Gensim", "XGBoost"],
    charts: [
      {
        title: { en: "Training rows per dataset variant", ko: "데이터 변형별 학습 행 수" },
        labels: ["original", "synthetic", "external", "hybrid"],
        series: [{ name: "Rows", values: [1023, 1400, 11523, 11900] }],
        max: 12000,
        digits: 0,
        note: {
          en: "From the team report: a 1,024-record phrase dataset expanded to 11,900 rows in the hybrid variant.",
          ko: "팀 보고서 기준: 1,024건 구문 데이터를 하이브리드 변형에서 11,900행으로 확장했습니다.",
        },
      },
    ],
    sections: [
      {
        heading: { en: "Problem", ko: "문제" },
        paragraphs: [
          {
            en: "The source data is only 1,024 phrase-level records derived from the Stanford Sentiment Treebank, too small to push model quality far on its own.",
            ko: "원본 데이터는 Stanford Sentiment Treebank에서 나온 구문 단위 1,024건뿐이라, 그대로는 모델 성능을 끌어올리기 어렵습니다.",
          },
        ],
      },
      {
        heading: { en: "How the team worked", ko: "팀 협업 방식" },
        bullets: [
          {
            en: "Six members split the work into data expansion, classical models and BERT training, handing results forward stage by stage.",
            ko: "6명이 데이터 확장, 고전 모델, BERT 학습으로 단계를 나눠 맡고 결과를 다음 단계로 넘겼습니다.",
          },
          {
            en: "Classical models: Skip-gram Word2Vec + XGBoost, Doc2Vec + MLP, TF-IDF-weighted Word2Vec + SVM, Keras BiLSTM.",
            ko: "고전 모델: Skip-gram Word2Vec + XGBoost, Doc2Vec + MLP, TF-IDF 가중 Word2Vec + SVM, Keras BiLSTM.",
          },
        ],
      },
      {
        heading: { en: "My part", ko: "담당" },
        bullets: [
          {
            en: "Compared the original, synthetic, external and hybrid augmentation variants across models and built the F1 visualisation (Fig 6).",
            ko: "원본·합성·외부·하이브리드 증강 변형을 모델별로 비교 평가하고 F1 시각화(Fig 6)를 만들었습니다.",
          },
          {
            en: "That comparison gave the team the evidence for choosing the hybrid dataset used to train the BERT models.",
            ko: "이 비교가 팀이 BERT 학습용 하이브리드 데이터셋을 정하는 근거가 되었습니다.",
          },
        ],
        chartIndex: 0,
      },
    ],
  },
];
