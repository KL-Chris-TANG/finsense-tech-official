import { Car, Leaf, type LucideIcon } from "lucide-react";
import roadTrustImage from "@/assets/solutions-roadtrust.jpg";
import cruxEsgImage from "@/assets/solutions-crux-esg.jpg";
import type { Language } from "@/lib/language";

export type Solution = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  icon: LucideIcon;
  image: string;
  heroHeadline: string;
  heroSubcopy: string;
  features: { title: string; description: string }[];
  benefits: { metric: string; label: string }[];
  useCases: { title: string; description: string }[];
  integrations: string[];
  compliance: string[];
  pricing: { tier: string; price: string; perks: string[] }[];
  faqs: { q: string; a: string }[];
};

const localizedSolutions = {
  en: [
    {
      slug: "roadtrust",
      name: "RoadTrust",
      tagline: "AI-powered mobile telematics and insurance intelligence",
      description: "A secure network for safer roads, using mobile telematics, AI risk models, and real-time driving insights.",
      icon: Car,
      image: roadTrustImage,
      heroHeadline: "Reward every safe mile with RoadTrust",
      heroSubcopy:
        "RoadTrust transforms smartphones into AI-powered telematics tools that help insurers, fleets, and drivers price risk more fairly, improve road safety, and turn driving data into better decisions.",
      features: [
        { title: "Mobile-Only Telematics", description: "Capture driving behaviour, route patterns, mileage, and safety events directly from mobile devices without dedicated hardware." },
        { title: "AI Risk Modelling", description: "Build personalised driving risk profiles for dynamic pricing, better underwriting accuracy, and lower fraud exposure." },
        { title: "Driver Score & Coaching", description: "Deliver real-time driving scores, alerts, and actionable behaviour guidance that encourages safer habits." },
        { title: "Fleet Monitoring", description: "Give enterprises and fleet operators visibility into journeys, incidents, and driver performance across vehicles." },
        { title: "Insurer Integration", description: "Connect telematics data to quotation, policy workflows, and digital insurance document generation." },
        { title: "Privacy-First Data Ownership", description: "Support encrypted, transparent data handling with user-centric control and readiness for anonymised data-sharing use cases." },
      ],
      benefits: [
        { metric: "0 hardware", label: "Installation needed" },
        { metric: "Real-time", label: "Risk visibility" },
        { metric: "B2B2C", label: "Ecosystem model" },
        { metric: "HK-focused", label: "Market readiness" },
      ],
      useCases: [
        { title: "Usage-Based Insurance", description: "Enable fairer motor insurance pricing based on actual driving behaviour instead of static demographic assumptions." },
        { title: "Fleet & Enterprise Safety", description: "Monitor high-risk behaviour across commercial fleets and turn operational insight into measurable safety programmes." },
        { title: "Smart City Intelligence", description: "Use anonymised mobility insights to support road safety analysis, traffic planning, and public-sector digitalisation initiatives." },
      ],
      integrations: ["Mobile App SDK", "Insurer Admin Portal", "Policy Systems", "Fleet Dashboards", "OBD-II Connectors", "Smart City Data Layers"],
      compliance: ["Privacy-conscious data design", "Encrypted driver data handling", "Policy workflow auditability", "Insurance-ready document generation"],
      pricing: [
        { tier: "Driver Pilot", price: "Custom", perks: ["Mobile app configuration", "Driving score engine", "Pilot reporting"] },
        { tier: "Insurer Suite", price: "Custom", perks: ["White-label deployment", "Risk profiling", "Policy integration"] },
        { tier: "Smart Mobility", price: "Contact us", perks: ["Data partnerships", "Regional reporting", "Custom implementation"] },
      ],
      faqs: [
        { q: "Does RoadTrust require in-car hardware?", a: "No. RoadTrust is designed as a mobile-first telematics platform, making deployment faster and more scalable." },
        { q: "Who is RoadTrust built for?", a: "The platform is designed for drivers, fleets, insurers, and public-sector stakeholders looking for better road-risk intelligence." },
        { q: "What makes RoadTrust different from traditional motor underwriting?", a: "It uses real-time behavioural signals and AI-driven scoring rather than relying only on static demographic assumptions." },
      ],
    },
    {
      slug: "crux-esg",
      name: "Crux ESG",
      tagline: "AI-powered ESG reporting for Hong Kong and GBA SMEs",
      description: "A reporting platform that helps organisations collect, analyse, and generate compliant ESG outputs with less manual effort.",
      icon: Leaf,
      image: cruxEsgImage,
      heroHeadline: "Simplify ESG reporting with Crux ESG",
      heroSubcopy:
        "Crux ESG helps SMEs across Hong Kong and the Greater Bay Area turn scattered operational data into structured ESG intelligence, benchmarked analysis, and audit-ready reports aligned with local and global frameworks.",
      features: [
        { title: "Guided Data Centre", description: "Upload utility bills, questionnaires, certifications, and internal documents through structured ESG workflows." },
        { title: "AI Knowledge Bank", description: "Use OCR and NLP to extract metrics from unstructured Chinese and English documents with confidence scoring." },
        { title: "Analysis Centre", description: "Visualise environmental, social, and governance performance with trend dashboards and KPI drill-downs." },
        { title: "Report Centre", description: "Generate polished ESG reports aligned to HKEX expectations and globally recognised standards." },
        { title: "Compliance Mapping", description: "Map available data to HK, GBA, IFRS, GRI, SASB, and TCFD-oriented requirements more efficiently." },
        { title: "Secure Enterprise Access", description: "Support dedicated environments, role-based access patterns, and multi-factor authentication for client teams." },
      ],
      benefits: [
        { metric: "Chinese + English", label: "Document support" },
        { metric: "SME-ready", label: "User experience" },
        { metric: "AI-assisted", label: "Report generation" },
        { metric: "HK / GBA", label: "Regional focus" },
      ],
      useCases: [
        { title: "SME ESG Reporting", description: "Help smaller organisations respond to customer, investor, and supply-chain ESG data requests without building large internal teams." },
        { title: "Multi-Year Data Management", description: "Create a central archive for uploaded evidence, historical disclosures, and annual report preparation." },
        { title: "Compliance & Benchmarking", description: "Benchmark ESG progress, identify missing inputs, and prepare cleaner submissions for stakeholders and audits." },
      ],
      integrations: ["Utility bills", "Excel uploads", "Questionnaires", "ERP exports", "Supporting PDFs", "Cloud document storage"],
      compliance: ["HKEX-aligned reporting", "IFRS S1 / S2 readiness", "GRI / SASB mapping support", "Audit-friendly evidence trail"],
      pricing: [
        { tier: "Starter", price: "Custom", perks: ["Core data upload", "Basic analysis dashboards", "Report export"] },
        { tier: "Growth", price: "Custom", perks: ["AI extraction workflows", "Compliance mapping", "Collaboration features"] },
        { tier: "Enterprise", price: "Contact us", perks: ["Dedicated environment", "Advanced security controls", "Custom onboarding"] },
      ],
      faqs: [
        { q: "Who is Crux ESG built for?", a: "It is designed primarily for Hong Kong and GBA SMEs that need a simpler, more guided way to manage ESG data and reporting." },
        { q: "Can Crux ESG work with existing documents?", a: "Yes. The platform is designed to ingest uploaded files and unstructured supporting materials, then organise and analyse them with AI assistance." },
        { q: "What outputs can Crux ESG support?", a: "It supports report drafting, analysis views, and export-ready outputs for stakeholder reporting and compliance workflows." },
      ],
    },
  ],
  "zh-Hant": [
    {
      slug: "roadtrust",
      name: "RoadTrust",
      tagline: "AI 驅動流動車聯網與保險情報",
      description: "結合流動車聯網、AI 風險模型及即時駕駛洞察，為道路安全構建可信網絡。",
      icon: Car,
      image: roadTrustImage,
      heroHeadline: "用 RoadTrust 獎勵每一段安全里程",
      heroSubcopy: "RoadTrust 將智能手機化身為 AI 車聯網工具，協助保險公司、車隊及司機精準評估風險。我們致力提升道路安全，將駕駛數據轉化為具前瞻性的決策依據。",
      features: [
        { title: "純流動端車聯網", description: "無需額外硬件，即可直接透過流動裝置捕捉駕駛行為、路線模式、里程及安全事件。" },
        { title: "AI 風險建模", description: "構建個人化駕駛風險檔案，支援動態定價、提升核保準確度，並降低欺詐風險。" },
        { title: "駕駛評分與教練", description: "提供即時駕駛評分、警示及行為指導，積極培育更安全的駕駛習慣。" },
        { title: "車隊監測方案", description: "為企業及車隊營運商提供跨車輛的行程記錄、事故追蹤及司機表現可視化管理。" },
        { title: "保險系統整合", description: "將車聯網數據無縫對接至報價流程、保單工作流及數碼化保險文件生成。" },
        { title: "私隱優先數據管理", description: "採用端到端加密處理，確保數據透明且由用戶主導，同時為數據去識別化共享作好準備。" },
      ],
      benefits: [
        { metric: "零硬件", label: "安裝成本" },
        { metric: "實時", label: "風險可視化" },
        { metric: "B2B2C", label: "生態圈模式" },
        { metric: "立足香港", label: "市場適應力" },
      ],
      useCases: [
        { title: "UBI 按量計費保險", description: "打破傳統人口統計假設，根據實際駕駛行為提供更公平、更具競爭力的汽車保險定價。" },
        { title: "車隊及企業安全", description: "全面監察商用車隊的高風險行為，將營運數據轉化為具指標性的安全管理計劃。" },
        { title: "智慧城市大數據", description: "利用去識別化的出行數據，支援道路安全分析、交通規劃及公共部門數碼化轉型。" },
      ],
      integrations: ["Mobile App SDK", "保險管理後台", "保單核心系統", "車隊儀表板", "OBD-II 連接器", "智慧城市數據層"],
      compliance: ["遵從 PDPO 私隱設計", "加密駕駛數據處理", "保單流程審計追蹤", "符合保險業標準的文件生成"],
      pricing: [
        { tier: "司機試行版", price: "定制方案", perks: ["流動 App 配置", "駕駛評分引擎", "試點分析報告"] },
        { tier: "保險業全套件", price: "定制方案", perks: ["白標 (White-label) 部署", "風險剖析工具", "保單系統整合"] },
        { tier: "智慧出行合作", price: "聯絡我們", perks: ["數據合作伙伴關係", "區域性數據報告", "定制化實施"] },
      ],
      faqs: [
        { q: "RoadTrust 是否需要安裝車內硬件？", a: "不需要。RoadTrust 採用流動優先 (Mobile-first) 技術，部署速度更快，且具備極高擴展性。" },
        { q: "RoadTrust 的目標受眾是誰？", a: "我們為司機、車隊、保險公司及尋求提升道路安全情報的政府及公共部門提供服務。" },
        { q: "RoadTrust 與傳統汽車核保有何分別？", a: "傳統核保依賴靜態背景資料，RoadTrust 則運用實時駕駛行為訊號及 AI 評分，提供更客觀的風險分析。" },
      ],
    },
    {
      slug: "crux-esg",
      name: "Crux ESG",
      tagline: "專為香港及大灣區中小企打造的 AI ESG 匯報平台",
      description: "一站式匯報平台，協助企業自動化處理數據收集與分析，輕鬆生成符合合規要求的 ESG 報告。",
      icon: Leaf,
      image: cruxEsgImage,
      heroHeadline: "Crux ESG：讓 ESG 匯報由繁化簡",
      heroSubcopy: "Crux ESG 協助香港及大灣區中小企將零散的營運數據轉化為結構化的 ESG 情報。透過基準分析，生成符合本地及國際框架、具備審計效力的專業報告。",
      features: [
        { title: "引導式數據中心", description: "透過結構化工作流上載水電單、問卷、專業認證及內部文件。" },
        { title: "AI 知識庫", description: "利用 OCR 影像辨識與 NLP 自然語言處理，從中英文非結構化文件中精準提取關鍵指標。" },
        { title: "智能分析中心", description: "透過趨勢儀表板與 KPI 深度分析，直觀呈現環境、社會及管治 (ESG) 三方面的表現。" },
        { title: "一鍵報告生成", description: "自動生成符合港交所 (HKEX) 要求及全球主流標準的專業級 ESG 報告。" },
        { title: "合規標準對接", description: "高效將數據映射至香港、大灣區、IFRS、GRI、SASB 及 TCFD 等多元合規要求。" },
        { title: "企業級安全存取", description: "支援獨立環境、角色權限管理 (RBAC) 以及多重強度身份驗證 (MFA)。" },
      ],
      benefits: [
        { metric: "中英雙語", label: "全方位支援" },
        { metric: "SME 首選", label: "用戶體驗" },
        { metric: "AI 賦能", label: "自動生成報告" },
        { metric: "HK / GBA", label: "深耕區域市場" },
      ],
      useCases: [
        { title: "中小企 ESG 自動化", description: "無需建立龐大團隊，即可快速回應客戶、投資者及供應鏈對 ESG 披露的要求。" },
        { title: "年度數據資產管理", description: "為上載證明、過往披露記錄及年度報告準備建立中央數碼檔案庫。" },
        { title: "合規基準與審計", description: "對標 ESG 進度、識別數據缺口，並為持份者與外部審計準備完整、潔淨的數據提交。" },
      ],
      integrations: ["水電煤賬單", "Excel 批量上載", "問卷調查", "ERP 數據導出", "PDF 證明文件", "雲端儲存空間"],
      compliance: ["符合 HKEX 匯報標準", "對接 IFRS S1 / S2", "支援 GRI / SASB 映射", "具備審計路徑的證據鏈"],
      pricing: [
        { tier: "入門版", price: "定制方案", perks: ["核心數據上載", "基礎分析儀表板", "報告導出功能"] },
        { tier: "成長版", price: "定制方案", perks: ["AI 數據擷取流", "合規自動映射", "團隊協作功能"] },
        { tier: "企業版", price: "聯絡我們", perks: ["專署私有環境", "進階安全控制", "專人上線支援"] },
      ],
      faqs: [
        { q: "Crux ESG 為誰而設？", a: "主要鎖定香港及大灣區的中小企，為其提供更直觀、具引導性的 ESG 數據管理及合規匯報方案。" },
        { q: "Crux ESG 是否支援現有的紙本或 PDF 文件？", a: "是的。平台透過 AI 技術讀取非結構化文件，將其整理為可供分析的結構化數據。" },
        { q: "平台可以產出哪些格式或結果？", a: "支援產出報告初稿、多角度分析圖表，以及適用於合規披露及持份者通訊的專業輸出。" },
      ],
    },
  ],
  "zh-Hans": [
    {
      slug: "roadtrust",
      name: "RoadTrust",
      tagline: "AI 驱动的移动车联网与保险智能平台",
      description: "结合移动车联网、AI 风险模型及实时驾驶洞察，为道路安全构建可信网络。",
      icon: Car,
      image: roadTrustImage,
      heroHeadline: "用 RoadTrust 奖励每一段安全里程",
      heroSubcopy: "RoadTrust 将智能手机转化为 AI 车联网工具，协助保险公司、车队及驾驶员精准评估风险。我们致力于提升道路安全，将驾驶数据转化为科学的决策依据。",
      features: [
        { title: "纯移动端车联网", description: "无需额外硬件，即可直接通过移动设备捕捉驾驶行为、路线模式、里程及安全事件。" },
        { title: "AI 风险建模", description: "构建个性化驾驶风险档案，支持动态定价、提升核保准确度，并降低欺诈风险。" },
        { title: "驾驶评分与教练", description: "提供实时驾驶评分、警示及行为指导，积极培养更安全的驾驶习惯。" },
        { title: "车队监测方案", description: "为企业及车队运营商提供跨车辆的行程记录、事故追踪及驾驶员表现可视化管理。" },
        { title: "保险系统集成", description: "将车联网数据无缝对接至报价流程、保单工作流及数字化保险文件生成。" },
        { title: "隐私优先数据管理", description: "采用加密处理，确保数据透明且由用户主导，同时为去标识化数据共享做好准备。" },
      ],
      benefits: [
        { metric: "零硬件", label: "安装需求" },
        { metric: "实时", label: "风险可视化" },
        { metric: "B2B2C", label: "生态圈模式" },
        { metric: "聚焦香港", label: "市场成熟度" },
      ],
      useCases: [
        { title: "UBI 按量计费保险", description: "打破传统人口统计假设，根据实际驾驶行为提供更公平、更具竞争力的汽车保险定价。" },
        { title: "车队及企业安全", description: "全面监控商用车队的高风险行为，将运营洞察转化为可量化的安全管理计划。" },
        { title: "智慧城市大数据", description: "利用去标识化的出行洞察，支持道路安全分析、交通规划及公共部门数字化转型。" },
      ],
      integrations: ["移动 App SDK", "保险管理后台", "保单核心系统", "车队仪表盘", "OBD-II 连接器", "智慧城市数据层"],
      compliance: ["隐私安全设计", "加密驾驶数据处理", "保单流程审计追蹤", "符合保险业标准的文件生成"],
      pricing: [
        { tier: "驾驶试行版", price: "定制方案", perks: ["移动 App 配置", "驾驶评分引擎", "试点分析报告"] },
        { tier: "保险全套件", price: "定制方案", perks: ["白标部署", "风险剖析工具", "保单系统集成"] },
        { tier: "智慧出行合作", price: "联系我们", perks: ["数据合作伙伴关系", "区域数据报告", "定制化实施"] },
      ],
      faqs: [
        { q: "RoadTrust 是否需要安装车内硬件？", a: "不需要。RoadTrust 采用移动优先技术，部署速度更快，且具备极高的扩展性。" },
        { q: "RoadTrust 适合哪些用户？", a: "平台专为驾驶员、车队、保险公司及寻求提升道路安全情报的公共部门设计。" },
        { q: "RoadTrust 与传统汽车核保有何不同？", a: "传统核保依赖静态背景，RoadTrust 则运用实时驾驶行为信号及 AI 评分，提供客观的风险分析。" },
      ],
    },
    {
      slug: "crux-esg",
      name: "Crux ESG",
      tagline: "专为香港及大湾区中小企业打造的 AI ESG 报告平台",
      description: "一站式报告平台，协助企业自动处理数据收集与分析，轻松生成符合合规要求的 ESG 报告。",
      icon: Leaf,
      image: cruxEsgImage,
      heroHeadline: "Crux ESG：让 ESG 报告由繁化简",
      heroSubcopy: "Crux ESG 协助香港及大湾区中小企业将零散的运营数据转化为结构化的 ESG 情报。通过基准分析，生成符合本地及国际框架、具备审计效力的专业报告。",
      features: [
        { title: "引导式数据中心", description: "通过结构化工作流上传水电单、问卷、专业认证及内部文件。" },
        { title: "AI 知识库", description: "利用 OCR 识别与 NLP 技术，从中英文非结构化文件中精准提取关键指标。" },
        { title: "智能分析中心", description: "通过趋势仪表盘与 KPI 深度分析，直观呈现环境、社会及治理 (ESG) 表现。" },
        { title: "一键报告生成", description: "自动生成符合港交所 (HKEX) 要求及全球主流标准的专业级 ESG 报告。" },
        { title: "合规标准对接", description: "高效将数据映射至香港、大湾区、IFRS、GRI、SASB 及 TCFD 等多元合规要求。" },
        { title: "企业级安全访问", description: "支持独立环境、角色权限管理 (RBAC) 以及多重身份验证 (MFA)。" },
      ],
      benefits: [
        { metric: "中英双语", label: "全方位支持" },
        { metric: "SME 首选", label: "用户体验" },
        { metric: "AI 赋能", label: "自动生成报告" },
        { metric: "HK / GBA", label: "深耕区域市场" },
      ],
      useCases: [
        { title: "中小企业 ESG 自动化", description: "无需建立庞大团队，即可快速响应客户、投资者及供应链对 ESG 数据的披露要求。" },
        { title: "年度数据资产管理", description: "为上传凭证、过往披露记录及年度报告准备建立中央数字化档案库。" },
        { title: "合规基准与审计", description: "对标 ESG 进度、识别数据缺口，并为利益相关方与外部审计准备整洁的数据提交。" },
      ],
      integrations: ["水电账单", "Excel 批量上传", "调查问卷", "ERP 数据导出", "PDF 证明文件", "云端存储空间"],
      compliance: ["符合 HKEX 报告标准", "对接 IFRS S1 / S2", "支持 GRI / SASB 映射", "具备审计友好的证据链"],
      pricing: [
        { tier: "入门版", price: "定制方案", perks: ["核心数据上传", "基础分析仪表盘", "报告导出功能"] },
        { tier: "成长版", price: "定制方案", perks: ["AI 数据提取流", "合规自动映射", "团队协作功能"] },
        { tier: "企业版", price: "联系我们", perks: ["专享私有环境", "高级安全控制", "专人上线支持"] },
      ],
      faqs: [
        { q: "Crux ESG 适合谁使用？", a: "主要面向香港及大湾区的中小企业，为其提供直观、具引导性的 ESG 数据管理及合规报告方案。" },
        { q: "Crux ESG 是否支持现有的纸质或 PDF 文件？", a: "是的。平台通过 AI 技术读取非结构化文件，将其整理为可供分析的结构化数据。" },
        { q: "平台可以产出哪些结果？", a: "支持生成报告初稿、多角度分析视图，以及适用于合规披露及利益相关方沟通的专业输出。" },
      ],
    },
  ],
} as const satisfies Record<Language, Solution[]>;

export const getSolutions = (language: Language) => localizedSolutions[language];

export const getSolution = (language: Language, slug: string) =>
  localizedSolutions[language].find((solution) => solution.slug === slug);