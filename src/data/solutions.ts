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
      tagline: "AI 驅動流動車聯網與保險智能",
      description: "結合流動車聯網、AI 風險模型及即時駕駛洞察，打造更安全道路的可信網絡。",
      icon: Car,
      image: roadTrustImage,
      heroHeadline: "以 RoadTrust 獎勵每一段安全里程",
      heroSubcopy:
        "RoadTrust 將智能手機轉化為 AI 車聯網工具，協助保險公司、車隊與駕駛者更公平地評估風險、提升道路安全，並把駕駛數據轉化為更佳決策。",
      features: [
        { title: "純流動車聯網", description: "毋須額外硬件，即可直接透過流動裝置捕捉駕駛行為、路線模式、里數及安全事件。" },
        { title: "AI 風險模型", description: "建立個人化駕駛風險檔案，以支援動態定價、更準確核保及降低欺詐風險。" },
        { title: "駕駛評分與指導", description: "提供即時駕駛評分、提示及可行建議，鼓勵更安全的駕駛習慣。" },
        { title: "車隊監察", description: "讓企業及車隊營運方掌握行程、事故及駕駛表現。" },
        { title: "保險整合", description: "把車聯網數據連接至報價、保單流程及數碼保險文件生成。" },
        { title: "私隱優先數據管理", description: "支援加密、透明的資料處理方式，並保留以用戶為中心的控制權及匿名化數據共享準備。" },
      ],
      benefits: [
        { metric: "0 硬件", label: "安裝需求" },
        { metric: "即時", label: "風險可視性" },
        { metric: "B2B2C", label: "生態模式" },
        { metric: "聚焦香港", label: "市場準備" },
      ],
      useCases: [
        { title: "按使用量保險", description: "根據實際駕駛行為而非靜態人口統計資料，提供更公平的汽車保險定價。" },
        { title: "車隊與企業安全", description: "監察商業車隊中的高風險行為，將營運洞察轉化為可量化安全計劃。" },
        { title: "智慧城市智能", description: "以匿名化出行洞察支援道路安全分析、交通規劃及公共部門數碼化。" },
      ],
      integrations: ["流動應用 SDK", "保險管理平台", "保單系統", "車隊儀表板", "OBD-II 連接器", "智慧城市數據層"],
      compliance: ["重視私隱的數據設計", "加密駕駛數據處理", "保單流程可審計性", "保險文件自動生成"],
      pricing: [
        { tier: "駕駛試點", price: "按需定制", perks: ["流動應用配置", "駕駛評分引擎", "試點報告"] },
        { tier: "保險方案", price: "按需定制", perks: ["白標部署", "風險剖析", "保單整合"] },
        { tier: "智慧出行", price: "聯絡我們", perks: ["數據合作", "區域報告", "定制實施"] },
      ],
      faqs: [
        { q: "RoadTrust 是否需要車載硬件？", a: "不需要。RoadTrust 採用流動優先車聯網模式，部署更快且更具擴展性。" },
        { q: "RoadTrust 為哪些用戶而設？", a: "平台為駕駛者、車隊、保險公司及需要更佳道路風險洞察的公共部門而設。" },
        { q: "RoadTrust 與傳統汽車核保有何不同？", a: "它以即時行為訊號及 AI 評分為基礎，而非只依賴靜態人口統計假設。" },
      ],
    },
    {
      slug: "crux-esg",
      name: "Crux ESG",
      tagline: "面向香港及大灣區中小企的 AI ESG 匯報平台",
      description: "協助企業以更少人手收集、分析並生成合規 ESG 輸出的匯報平台。",
      icon: Leaf,
      image: cruxEsgImage,
      heroHeadline: "使用 Crux ESG 簡化 ESG 匯報",
      heroSubcopy:
        "Crux ESG 協助香港及大灣區中小企把分散的營運數據轉化為結構化 ESG 智能、基準分析及符合本地與國際框架的審計級報告。",
      features: [
        { title: "引導式數據中心", description: "透過結構化 ESG 流程上載水電單、問卷、認證及內部文件。" },
        { title: "AI 知識庫", description: "利用 OCR 與 NLP 從中英文非結構化文件中提取指標，並提供可信度評分。" },
        { title: "分析中心", description: "以趨勢儀表板與 KPI 深入分析，可視化環境、社會及管治表現。" },
        { title: "報告中心", description: "生成符合 HKEX 要求及國際標準的專業 ESG 報告。" },
        { title: "合規映射", description: "更高效地把現有數據對應至香港、大灣區、IFRS、GRI、SASB 及 TCFD 等要求。" },
        { title: "企業級安全存取", description: "支援專屬環境、角色式權限及多重驗證。" },
      ],
      benefits: [
        { metric: "中英雙語", label: "文件支援" },
        { metric: "SME-ready", label: "使用體驗" },
        { metric: "AI 協助", label: "報告生成" },
        { metric: "HK / GBA", label: "區域重點" },
      ],
      useCases: [
        { title: "中小企 ESG 匯報", description: "協助中小企回應客戶、投資者及供應鏈對 ESG 資料的要求，無需建立龐大內部團隊。" },
        { title: "多年期數據管理", description: "建立上載證明、歷史披露及年度報告準備的中央檔案庫。" },
        { title: "合規與基準比較", description: "比較 ESG 進度、找出缺失資料，並為持份者與審計準備更完整提交。" },
      ],
      integrations: ["水電單", "Excel 上載", "問卷", "ERP 匯出", "支援 PDF", "雲端文件儲存"],
      compliance: ["符合 HKEX 匯報方向", "IFRS S1 / S2 準備度", "GRI / SASB 映射支援", "審計友善證據鏈"],
      pricing: [
        { tier: "入門版", price: "按需定制", perks: ["核心數據上載", "基礎分析儀表板", "報告匯出"] },
        { tier: "成長版", price: "按需定制", perks: ["AI 擷取流程", "合規映射", "協作功能"] },
        { tier: "企業版", price: "聯絡我們", perks: ["專屬環境", "進階安全控制", "定制上線支援"] },
      ],
      faqs: [
        { q: "Crux ESG 為哪些企業而設？", a: "主要面向香港及大灣區中小企，為其提供更簡單、更具引導性的 ESG 數據及匯報管理方式。" },
        { q: "Crux ESG 能否處理現有文件？", a: "可以。平台可讀取已上載檔案及非結構化輔助資料，再以 AI 協助整理與分析。" },
        { q: "Crux ESG 可支援哪些輸出？", a: "可支援報告草擬、分析視圖及適用於持份者匯報與合規流程的輸出內容。" },
      ],
    },
  ],
  "zh-Hans": [
    {
      slug: "roadtrust",
      name: "RoadTrust",
      tagline: "AI 驱动移动车联网与保险智能",
      description: "结合移动车联网、AI 风险模型及实时驾驶洞察，打造更安全道路的可信网络。",
      icon: Car,
      image: roadTrustImage,
      heroHeadline: "以 RoadTrust 奖励每一段安全里程",
      heroSubcopy:
        "RoadTrust 将智能手机转化为 AI 车联网工具，协助保险公司、车队与驾驶者更公平地评估风险、提升道路安全，并把驾驶数据转化为更佳决策。",
      features: [
        { title: "纯移动车联网", description: "无需额外硬件，即可直接通过移动设备捕捉驾驶行为、路线模式、里程及安全事件。" },
        { title: "AI 风险模型", description: "建立个性化驾驶风险档案，以支持动态定价、更准确核保及降低欺诈风险。" },
        { title: "驾驶评分与指导", description: "提供实时驾驶评分、提示及可行建议，鼓励更安全的驾驶习惯。" },
        { title: "车队监控", description: "让企业及车队运营方掌握行程、事故及驾驶表现。" },
        { title: "保险整合", description: "把车联网数据连接至报价、保单流程及数字保险文件生成。" },
        { title: "隐私优先数据管理", description: "支持加密、透明的数据处理方式，并保留以用户为中心的控制权及匿名化数据共享准备。" },
      ],
      benefits: [
        { metric: "0 硬件", label: "安装需求" },
        { metric: "实时", label: "风险可视性" },
        { metric: "B2B2C", label: "生态模式" },
        { metric: "聚焦香港", label: "市场准备" },
      ],
      useCases: [
        { title: "按使用量保险", description: "根据实际驾驶行为而非静态人口统计资料，提供更公平的汽车保险定价。" },
        { title: "车队与企业安全", description: "监控商业车队中的高风险行为，将运营洞察转化为可量化安全计划。" },
        { title: "智慧城市智能", description: "以匿名化出行洞察支持道路安全分析、交通规划及公共部门数字化。" },
      ],
      integrations: ["移动应用 SDK", "保险管理平台", "保单系统", "车队仪表板", "OBD-II 连接器", "智慧城市数据层"],
      compliance: ["重视隐私的数据设计", "加密驾驶数据处理", "保单流程可审计性", "保险文件自动生成"],
      pricing: [
        { tier: "驾驶试点", price: "按需定制", perks: ["移动应用配置", "驾驶评分引擎", "试点报告"] },
        { tier: "保险方案", price: "按需定制", perks: ["白标部署", "风险剖析", "保单整合"] },
        { tier: "智慧出行", price: "联系我们", perks: ["数据合作", "区域报告", "定制实施"] },
      ],
      faqs: [
        { q: "RoadTrust 是否需要车载硬件？", a: "不需要。RoadTrust 采用移动优先车联网模式，部署更快且更具扩展性。" },
        { q: "RoadTrust 为哪些用户而设？", a: "平台为驾驶者、车队、保险公司及需要更佳道路风险洞察的公共部门而设。" },
        { q: "RoadTrust 与传统汽车核保有何不同？", a: "它以实时行为信号及 AI 评分为基础，而非只依赖静态人口统计假设。" },
      ],
    },
    {
      slug: "crux-esg",
      name: "Crux ESG",
      tagline: "面向香港及大湾区中小企业的 AI ESG 报告平台",
      description: "协助企业以更少人手收集、分析并生成合规 ESG 输出的报告平台。",
      icon: Leaf,
      image: cruxEsgImage,
      heroHeadline: "使用 Crux ESG 简化 ESG 报告",
      heroSubcopy:
        "Crux ESG 协助香港及大湾区中小企业把分散的运营数据转化为结构化 ESG 智能、基准分析及符合本地与国际框架的审计级报告。",
      features: [
        { title: "引导式数据中心", description: "通过结构化 ESG 流程上传水电单、问卷、认证及内部文件。" },
        { title: "AI 知识库", description: "利用 OCR 与 NLP 从中英文非结构化文件中提取指标，并提供可信度评分。" },
        { title: "分析中心", description: "以趋势仪表板与 KPI 深入分析，可视化环境、社会及治理表现。" },
        { title: "报告中心", description: "生成符合 HKEX 要求及国际标准的专业 ESG 报告。" },
        { title: "合规映射", description: "更高效地把现有数据对应至香港、大湾区、IFRS、GRI、SASB 及 TCFD 等要求。" },
        { title: "企业级安全访问", description: "支持专属环境、角色式权限及多重验证。" },
      ],
      benefits: [
        { metric: "中英双语", label: "文件支持" },
        { metric: "SME-ready", label: "使用体验" },
        { metric: "AI 协助", label: "报告生成" },
        { metric: "HK / GBA", label: "区域重点" },
      ],
      useCases: [
        { title: "中小企业 ESG 报告", description: "协助中小企业回应客户、投资者及供应链对 ESG 数据的要求，无需建立庞大内部团队。" },
        { title: "多年期数据管理", description: "建立上传证据、历史披露及年度报告准备的中央档案库。" },
        { title: "合规与基准比较", description: "比较 ESG 进度、找出缺失数据，并为利益相关方与审计准备更完整提交。" },
      ],
      integrations: ["水电单", "Excel 上传", "问卷", "ERP 导出", "支持 PDF", "云端文档存储"],
      compliance: ["符合 HKEX 报告方向", "IFRS S1 / S2 准备度", "GRI / SASB 映射支持", "审计友好证据链"],
      pricing: [
        { tier: "入门版", price: "按需定制", perks: ["核心数据上传", "基础分析仪表板", "报告导出"] },
        { tier: "成长版", price: "按需定制", perks: ["AI 提取流程", "合规映射", "协作功能"] },
        { tier: "企业版", price: "联系我们", perks: ["专属环境", "高级安全控制", "定制上线支持"] },
      ],
      faqs: [
        { q: "Crux ESG 为哪些企业而设？", a: "主要面向香港及大湾区中小企业，为其提供更简单、更具引导性的 ESG 数据及报告管理方式。" },
        { q: "Crux ESG 能否处理现有文件？", a: "可以。平台可读取已上传文件及非结构化辅助资料，再以 AI 协助整理与分析。" },
        { q: "Crux ESG 可支持哪些输出？", a: "可支持报告草拟、分析视图及适用于利益相关方报告与合规流程的输出内容。" },
      ],
    },
  ],
} as const satisfies Record<Language, Solution[]>;

export const getSolutions = (language: Language) => localizedSolutions[language];

export const getSolution = (language: Language, slug: string) =>
  localizedSolutions[language].find((solution) => solution.slug === slug);
