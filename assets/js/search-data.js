// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications-amp-projects",
          title: "publications &amp; projects",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/pub-projects/";
          },
        },{id: "nav-blog",
          title: "blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "nav-cv",
          title: "cv",
          description: "This is a description of the page. You can modify it in &#39;_pages/cv.md&#39;. You can also change or remove the top pdf download button.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "post-통계학-amp",
        
          title: "통계학 Ⅰ &amp; Ⅱ",
        
        description: "통계학 1, 2 핵심 개념 정리 — 기술통계, 확률, 추론, 분산분석, 회귀분석",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/statistics-12/";
          
        },
      },{id: "post-회귀-분석",
        
          title: "회귀 분석",
        
        description: "단순선형회귀부터 다중선형회귀, 잔차분석, 모형 선택까지 핵심 정리",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/regression/";
          
        },
      },{id: "post-기초확률론",
        
          title: "기초확률론",
        
        description: "기초확률론 핵심 개념 정리 — 집합, 확률공간, 확률변수, 분포, 생성함수",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/probability-and-statistics/";
          
        },
      },{id: "post-probabilistic-ml-reinforcement-learning",
        
          title: "Probabilistic ML: Reinforcement Learning",
        
        description: "PML Chapter 35 — RL 핵심 개념 및 알고리즘 정리",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/pml-rl/";
          
        },
      },{id: "post-probabilistic-ml-mcmc",
        
          title: "Probabilistic ML: MCMC",
        
        description: "PML Chapter 12 — Markov Chain Monte Carlo 핵심 정리",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/pml-mcmc/";
          
        },
      },{id: "post-probabilistic-ml-latent-factor-models",
        
          title: "Probabilistic ML: Latent Factor Models",
        
        description: "PML Chapter 28 — Mixture Models, Factor Analysis, ICA 핵심 정리",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/pml-latent-factor-models/";
          
        },
      },{id: "post-수리통계학-amp",
        
          title: "수리통계학 Ⅰ &amp; Ⅱ",
        
        description: "수리통계학 1, 2 및 연습 핵심 개념 정리",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/mathematical-statistics-summary/";
          
        },
      },{id: "post-impacts-of-innovation-school-system-in-korea-a-latent-space-item-response-model-with-neyman-scott-point-process",
        
          title: "Impacts of Innovation School System in Korea: A Latent Space Item Response Model...",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/neyman-scott-point-process/";
          
        },
      },{id: "post-llm-lasso-a-robust-framework-for-domain-informed-feature-selection-and-regularization",
        
          title: "LLM-Lasso: A Robust Framework for Domain-Informed Feature Selection and Regularization",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/llm-lasso/";
          
        },
      },{id: "news-best-project-award-at-the-2022-ict-mentoring-conference-korea-information-processing-society",
          title: 'Best Project Award at the 2022 ICT Mentoring Conference, Korea Information Processing Society...',
          description: "",
          section: "News",},{id: "news-exchange-student-program-universidad-de-almería-computer-engineering",
          title: 'Exchange Student Program – Universidad de Almería (Computer Engineering)',
          description: "",
          section: "News",},{id: "news-song-mee-maietta-yoon-smith-scholarship",
          title: 'Song-Mee Maietta Yoon-Smith Scholarship',
          description: "",
          section: "News",},{id: "news-1st-placen-at-ceos-19th-demo-day",
          title: '1st Placen at CEOS 19th Demo Day',
          description: "",
          section: "News",},{id: "news-data-analytics-internship-at-altair",
          title: 'Data Analytics Internship at Altair',
          description: "",
          section: "News",},{id: "news-graduated-with-highest-honors-b-s-in-statistics-amp-amp-software-ewha-womans-university",
          title: 'Graduated with Highest Honors, B.S. in Statistics &amp;amp;amp; Software, Ewha Womans University',
          description: "",
          section: "News",},{id: "news-best-student-oral-presentation-award-2024-fall-conference-of-the-korean-society-of-health-informatics-and-statistics",
          title: 'Best Student Oral Presentation Award, 2024 Fall Conference of the Korean Society of...',
          description: "",
          section: "News",},{id: "news-admission-to-the-m-s-program-in-statistics-yonsei-university",
          title: 'Admission to the M.S. Program in Statistics, Yonsei University',
          description: "",
          section: "News",},{id: "projects-cost-efficient-and-domain-adaptive-korean-ai-chatbot-development",
          title: 'Cost-Efficient and Domain-Adaptive Korean AI Chatbot Development',
          description: "한국어 AI 챗봇의 비용 효율화 및 질의 대응 성능 고도화 연구; 실제 서비스 환경에서 비용 효율성과 도메인 적응성을 갖춘 한국어 질의 대응 프레임워크 구축",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project/";
            },},{id: "projects-clustering-for-customer-segmentation-and-identification-of-significant-survey-indicators",
          title: 'Clustering for Customer Segmentation and Identification of Significant Survey Indicators',
          description: "연세데이터사이언스연구소; 고객 군집화 및 설문 문항 선별",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_project/";
            },},{id: "projects-behavioral-log-analysis-of-financial-app-users",
          title: 'Behavioral Log Analysis of Financial App Users',
          description: "금융 어플 사용자 행동 데이터를 이용한 대출 신청 예측 및 고객 군집 분석",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_project/";
            },},{
        id: 'social-cv',
        title: 'CV',
        section: 'Socials',
        handler: () => {
          window.open("/assets/pdf/example_pdf.pdf", "_blank");
        },
      },{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%6A%69%69%69%31%31%31@%79%6F%6E%73%65%69.%61%63.%6B%72", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/Jiwon Choi# your LinkedIn user name", "_blank");
        },
      },{
        id: 'social-rss',
        title: 'RSS Feed',
        section: 'Socials',
        handler: () => {
          window.open("/feed.xml", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
