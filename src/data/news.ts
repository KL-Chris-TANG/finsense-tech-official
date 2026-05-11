import type { Language } from "@/lib/language";

export type NewsCategory = "Awards" | "Company" | "Product" | "Partnership" | "Sustainability" | "Investors";

export interface NewsArticle {
  slug: string;
  title: string;
  date: string;
  category: NewsCategory;
  categoryLabel: string;
  excerpt: string;
  author: string;
  readTime: string;
  heroQuote?: string;
  heroImage?: string;
  linkedInUrl?: string;
  youtubeUrl?: string;
  externalUrl?: string;
  body: string[];
}

export interface AwardRecognition {
  title: string;
  description: string;
  placeholderLabel: string;
}

const categoryLabels: Record<Language, Record<NewsCategory, string>> = {
  en: {
    Awards: "Awards",
    Company: "Company",
    Product: "Product",
    Partnership: "Partnership",
    Sustainability: "Sustainability",
    Investors: "Investors",
  },
  "zh-Hant": {
    Awards: "榮譽獎項",
    Company: "公司動態",
    Product: "產品資訊",
    Partnership: "合作夥伴",
    Sustainability: "永續發展",
    Investors: "投資者關係",
  },
  "zh-Hans": {
    Awards: "荣誉奖项",
    Company: "公司动态",
    Product: "产品资讯",
    Partnership: "合作伙伴",
    Sustainability: "可持续发展",
    Investors: "投资者关系",
  },
};

const articleContent = {
  en: [
    {
      slug: "finsense-wins-champion-at-hkma-x-cefar-genai-competition-2025",
      title: "Finsense Technology Wins Champion at HKMA x CEFAR GenAI Competition 2025",
      date: "Hong Kong, 22 April 2025",
      category: "Awards",
      excerpt:
        "Finsense Technology was awarded Champion for a Generative AI solution that automates RM workflows and enhances CRM in core banking systems.",
      author: "Finsense Technology",
      readTime: "4 min read",
      heroQuote: "Enabling Progress. Building Trust. Bridging Opportunities.",
      body: [
        "Finsense Technology is proud to announce that our team has been awarded the Champion title in the prestigious HKMA x CEFAR GenAI Application in Financial Services Competition 2025.",
        "Our winning Generative AI solution leverages large language models to automatically analyse customer transaction data, interaction history, and behavioural patterns in real time. Designed for seamless integration into core banking systems, it streamlines Relationship Manager workflows and significantly enhances Customer Relationship Management through intelligent automation and actionable insights.",
        "FINSENSE TECHNOLOGY LIMITED, a company incorporated under the laws of Hong Kong with business registration no. 80186886, specialises in advanced AI-powered solutions for ESG reporting, insurance technology, and road safety. Our two flagship platforms — Crux ESG and RoadTrust — deliver intelligent, cost-efficient, and regulatory-compliant solutions across Hong Kong and the Greater Bay Area.",
      ],
    },
    {
      slug: "finsense-technology-esg-team-named-awardee-of-cyberport-university-partnership-programme-2025",
      title: "Finsense Technology ESG Team Named Awardee of Cyberport University Partnership Programme 2025",
      date: "Hong Kong, August 2025",
      category: "Awards",
      excerpt:
        "The ESG team, operating as Crux ESG by CoreFlow, was recognised for an AI-blockchain platform built to simplify ESG reporting for SMEs.",
      author: "Finsense Technology",
      readTime: "3 min read",
      body: [
        "Finsense Technology is proud to announce that its ESG team has been selected as an Awardee of the prestigious Cyberport University Partnership Programme 2025, organised by Hong Kong Cyberport.",
        "The team, operating as Crux ESG by CoreFlow, impressed the judges with its innovative RegTech solution — an AI-blockchain based automated ESG reporting platform designed specifically for SMEs. The platform streamlines sustainability data collection, standardisation, analysis, and regulatory compliance, helping Hong Kong and Greater Bay Area SMEs meet growing ESG reporting requirements in a fast, cost-efficient, and fully compliant manner.",
        "FINSENSE TECHNOLOGY LIMITED, a company incorporated under the laws of Hong Kong with business registration no. 80186886, specialises in advanced AI-powered solutions for ESG reporting, insurance technology, and road safety. Our flagship platforms — Crux ESG and RoadTrust — deliver intelligent, cost-efficient, and regulatory-compliant outcomes across Hong Kong and the Greater Bay Area.",
      ],
    },
    {
      slug: "finsense-technology-named-awardee-of-hkstp-ideation-programme-2025",
      title: "Finsense Technology Named Awardee of HKSTP Ideation Programme 2025",
      date: "Hong Kong, November 2025",
      category: "Awards",
      excerpt:
        "Finsense was recognised for RoadTrust, its AI-powered InsurTech platform built around mobile telematics and usage-based insurance.",
      author: "Finsense Technology",
      readTime: "5 min read",
      heroQuote:
        "This recognition from HKSTP validates our expertise in applying advanced AI to solve real-world challenges in the insurance sector.",
      body: [
        "Finsense Technology is proud to announce that it has been selected as an Awardee of the HKSTP Ideation Programme 2025, organised by the Hong Kong Science and Technology Parks Corporation.",
        "The team developed RoadTrust, an innovative AI-powered InsurTech solution that leverages mobile telematics data to enable usage-based motor insurance. The platform delivers real-time driver risk profiling, personalised premium calculations, and advanced road safety insights — all without the need for additional hardware.",
        "Florence T.Y. Li, Co-Founder and Head of Technology at Finsense Technology, said the recognition validates the company’s expertise in applying advanced AI to solve real-world insurance challenges and reinforces the momentum behind both RoadTrust and Crux ESG.",
        "FINSENSE TECHNOLOGY LIMITED, a company incorporated under the laws of Hong Kong with business registration no. 80186886, specialises in advanced AI-powered solutions for ESG reporting, insurance technology, and road safety. Our flagship platforms — Crux ESG and RoadTrust — deliver intelligent, cost-efficient, and regulatory-compliant outcomes across Hong Kong and the Greater Bay Area.",
      ],
    },
    {
      slug: "finsense-technology-wins-first-runner-up-at-hsuhk-inter-university-fintech-innovation-competition",
      title: "Finsense Technology Wins First Runner-Up at HSUHK Inter-University FinTech Innovation Competition",
      date: "Hong Kong, May 2025",
      category: "Awards",
      excerpt:
        "Finsense won First Runner-Up for i-Link, a Generative AI product designed to automate RM workflows and strengthen CRM insight.",
      author: "Finsense Technology",
      readTime: "3 min read",
      body: [
        "Finsense Technology is proud to announce that it has won First Runner-Up in the prestigious HSUHK Inter-University FinTech Innovation Competition with its innovative product i-Link.",
        "i-Link is an advanced Generative AI solution that leverages large language models to automatically analyse customer transaction data, interaction history, and behavioural patterns in real time. Designed for seamless integration into core banking systems, it streamlines Relationship Manager workflows and significantly enhances Customer Relationship Management through intelligent automation and actionable insights.",
        "FINSENSE TECHNOLOGY LIMITED, a company incorporated under the laws of Hong Kong with business registration no. 80186886, specialises in advanced AI-powered solutions for ESG reporting, insurance technology, and road safety. Our flagship platforms — Crux ESG and RoadTrust — together with i-Link, deliver intelligent, cost-efficient, and regulatory-compliant outcomes across Hong Kong and the Greater Bay Area.",
      ],
    },
  ],
  "zh-Hant": [
    {
      slug: "finsense-wins-champion-at-hkma-x-cefar-genai-competition-2025",
      title: "Finsense Technology 勇奪 HKMA x CEFAR GenAI 2025 金融服務應用比賽冠軍",
      date: "香港，2025 年 4 月 22 日",
      category: "Awards",
      excerpt: "Finsense Technology 憑藉自動化客戶經理（RM）工作流程並優化核心銀行 CRM 系統的生成式 AI 方案，於激烈競爭中脫穎而出摘下桂冠。",
      author: "Finsense Technology",
      readTime: "閱讀時間：4 分鐘",
      heroQuote: "推動進步，建立信任，連結無限機遇。",
      body: [
        "Finsense Technology 榮幸宣布，我們的團隊在業界權威的「HKMA x CEFAR 2025 金融服務生成式 AI（GenAI）應用比賽」中獲頒冠軍殊榮。",
        "得獎的生成式 AI 解決方案善用大型語言模型（LLM），能即時分析客戶交易、互動紀錄及行為模式。此方案設計旨在與核心銀行系統無縫對接，不僅大幅簡化了客戶經理的工作流程，更透過智慧自動化與精準的數據洞察，顯著提昇客戶關係管理（CRM）的效能。",
        "FINSENSE TECHNOLOGY LIMITED 為一家於香港註冊成立的公司（商業登記號碼：80186886），專注研發應用於 ESG 報告、保險科技及道路安全的領先 AI 方案。我們的兩大旗艦平台 —— Crux ESG 舆 RoadTrust，正持續為香港及大灣區市場提供智能、高效且符合監管要求的專業服務。",
      ],
    },
    {
      slug: "finsense-technology-esg-team-named-awardee-of-cyberport-university-partnership-programme-2025",
      title: "Finsense Technology ESG 團隊獲選「數碼港大學合作計劃 2025」得獎隊伍",
      date: "香港，2025 年 8 月",
      category: "Awards",
      excerpt: "ESG 團隊以 Crux ESG by CoreFlow 名義參賽，憑藉為中小企簡化 ESG 報告流程的 AI 區塊鏈平台獲得業界肯定。",
      author: "Finsense Technology",
      readTime: "閱讀時間：3 分鐘",
      body: [
        "Finsense Technology 欣然宣布，我們的 ESG 團隊成功獲選為由香港數碼港主辦的「數碼港大學合作計劃 2025」（Cyberport University Partnership Programme, CUPP）得獎者。",
        "團隊以 Crux ESG by CoreFlow 名義參賽，憑藉創新的監管科技（RegTech）方案贏得評審青睞。這套結合 AI 與區塊鏈技術的自動化 ESG 報告平台專為中小企打造，將可續發展數據的收集、標準化及合規分析流程全面簡化，助力香港及大灣區企業以更高效率、更低成本達成日益嚴格的 ESG 監管要求。",
        "FINSENSE TECHNOLOGY LIMITED 為一家於香港註冊成立的公司（商業登記號碼：80186886），深耕於 ESG 報告、保險科技及道路安全等 AI 領域。我們的旗艦平台 —— Crux ESG 與 RoadTrust，致力為香港及大灣區客戶創造智能、合規且具成本效益的價值。",
      ],
    },
    {
      slug: "finsense-technology-named-awardee-of-hkstp-ideation-programme-2025",
      title: "Finsense Technology 榮幸獲選進入「香港科技園 Ideation 計劃 2025」",
      date: "香港，2025 年 11 月",
      category: "Awards",
      excerpt: "Finsense 研發的 RoadTrust 平台獲頒獎項，該平台利用流動車聯網及 UBI 駕駛行為保險技術推動保險科技革新。",
      author: "Finsense Technology",
      readTime: "閱讀時間：5 分鐘",
      heroQuote: "獲得香港科技園公司的肯定，印證了我們將尖端 AI 技術轉化為解決保險業現實難題方案的卓越能力。",
      body: [
        "Finsense Technology 榮幸宣布公司已獲選為香港科技園公司（HKSTP）「Ideation 計劃 2025」的得獎隊伍。",
        "我們開發的高端保險科技方案 RoadTrust，利用流動車聯網技術採集數據，實現了基於使用量的汽車保險（Usage-Based Insurance, UBI）。該平台無需安裝額外硬體，即可提供即時駕駛風險分析、個人化保費計算及深度道路安全洞察。",
        "Finsense Technology 聯合創辦人兼技術主管 Florence T.Y. Li 指出，此次獲獎不僅肯定了公司在解決保險業痛點上的技術實力，更為 RoadTrust 與 Crux ESG 的未來發展注入了強大動能。",
        "FINSENSE TECHNOLOGY LIMITED 為一家於香港註冊成立的公司（商業登記號碼：80186886），致力研發 ESG、保險科技及道路安全之 AI 應用。旗下的 Crux ESG 與 RoadTrust 平台正活躍於香港與大灣區，提供符合法規的智能解決方案。",
      ],
    },
    {
      slug: "finsense-technology-wins-first-runner-up-at-hsuhk-inter-university-fintech-innovation-competition",
      title: "Finsense Technology 於「香港恒生大學跨大學金融科技創新比賽」榮獲亞軍",
      date: "香港，2025 年 5 月",
      category: "Awards",
      excerpt: "Finsense 旗下的生成式 AI 產品 i-Link 勇奪亞軍，該產品為自動化 RM 工作流與強化 CRM 準確度提供了創新解方。",
      author: "Finsense Technology",
      readTime: "閱讀時間：3 分鐘",
      body: [
        "Finsense Technology 榮幸宣布，公司憑藉創新產品 i-Link，在競爭激烈的「香港恒生大學（HSUHK）跨大學金融科技創新比賽」中奪得亞軍。",
        "i-Link 是一套先進的生成式 AI 解決方案，透過大型語言模型即時解析客戶交易數據、溝通史與行為慣性。此產品能輕易嵌入銀行核心系統，幫助客戶經理自動化日常繁瑣工作，並以 AI 生成的見解轉化為客戶服務的競爭優勢。",
        "FINSENSE TECHNOLOGY LIMITED 為一家於香港註冊成立的公司（商業登記號碼：80186886），專注於 AI 驅動的 ESG、保險科技及交通安全方案。我們的 Crux ESG、RoadTrust 以及 i-Link 產品，持續推動香港及大灣區金融生態圈的數位轉型。",
      ],
    },
  ],
  "zh-Hans": [
    {
      slug: "finsense-wins-champion-at-hkma-x-cefar-genai-competition-2025",
      title: "Finsense Technology 荣膺 HKMA x CEFAR GenAI 2025 金融服务应用比赛冠军",
      date: "香港，2025 年 4 月 22 日",
      category: "Awards",
      excerpt: "Finsense Technology 凭借自动化客户经理（RM）工作流程并优化核心银行 CRM 系统的生成式 AI 方案，摘得桂冠。",
      author: "Finsense Technology",
      readTime: "阅读时间：4 分钟",
      heroQuote: "推动进步，建立信任，连接无限机遇。",
      body: [
        "Finsense Technology 荣幸宣布，我们的团队在业界权威的“HKMA x CEFAR 2025 金融服务生成式 AI（GenAI）应用比赛”中荣获冠军。",
        "获奖的生成式 AI 解决方案利用大型语言模型（LLM），能够实时分析客户交易、互动记录及行为模式。该方案旨在与核心银行系统无缝对接，不仅大幅简化了客户经理的工作流程，更通过智能自动化与精准的数据洞察，显著提升了客户关系管理（CRM）的效能。",
        "FINSENSE TECHNOLOGY LIMITED 是一家根据香港法律注册成立的公司（商业登记号码：80186886），专注于研发应用于 ESG 报告、保险科技及道路安全的领先 AI 方案。我们的两大旗舰平台 —— Crux ESG 与 RoadTrust，正持续为香港及大湾区市场提供智能、高效且符合监管要求的专业服务。",
      ],
    },
    {
      slug: "finsense-technology-esg-team-named-awardee-of-cyberport-university-partnership-programme-2025",
      title: "Finsense Technology ESG 团队获选“数码港大学合作伙伴计划 2025”获奖队伍",
      date: "香港，2025 年 8 月",
      category: "Awards",
      excerpt: "ESG 团队以 Crux ESG by CoreFlow 名义参赛，凭借为中小企业简化 ESG 报告流程的 AI 区块链平台获得业界认可。",
      author: "Finsense Technology",
      readTime: "阅读时间：3 分钟",
      body: [
        "Finsense Technology 欣然宣布，我们的 ESG 团队成功获选为由香港数码港主办的“数码港大学合作伙伴计划 2025”（CUPP）获奖者。",
        "团队以 Crux ESG by CoreFlow 名义参赛，凭借创新的监管科技（RegTech）方案赢得评审青睐。这套结合 AI 与区块链技术的自动化 ESG 报告平台专为中小企业打造，全面简化了可持续发展数据的收集、标准化及合规分析流程，助力香港及大湾区企业以更高效、更低成本达成日益严格的 ESG 监管要求。",
        "FINSENSE TECHNOLOGY LIMITED 是一家根据香港法律注册成立的公司（商业登记号码：80186886），深耕于 ESG 报告、保险科技及道路安全等 AI 领域。我们的旗舰平台 —— Crux ESG 与 RoadTrust，致力于为香港及大湾区客户创造智能、合规且具成本效益的价值。",
      ],
    },
    {
      slug: "finsense-technology-named-awardee-of-hkstp-ideation-programme-2025",
      title: "Finsense Technology 荣幸入选“香港科技园 Ideation 计划 2025”",
      date: "香港，2025 年 11 月",
      category: "Awards",
      excerpt: "Finsense 研发的 RoadTrust 平台获奖，该平台利用移动车联网及 UBI 驾驶行为保险技术推动保险科技创新。",
      author: "Finsense Technology",
      readTime: "阅读时间：5 分钟",
      heroQuote: "获得香港科技园公司的肯定，印证了我们将尖端 AI 技术转化为解决保险业现实难题方案的卓越能力。",
      body: [
        "Finsense Technology 荣幸宣布，公司已获选为香港科技园公司（HKSTP）“Ideation 计划 2025”的获奖队伍。",
        "我们开发的高端保险科技方案 RoadTrust，利用移动车联网技术采集数据，实现了基于使用量的汽车保险（UBI）。该平台无需安装额外硬件，即可提供实时驾驶风险分析、个性化保费计算及深度道路安全洞察。",
        "Finsense Technology 联合创始人兼技术主管 Florence T.Y. Li 表示，此次获奖不仅肯定了公司在解决保险业痛点上的技术实力，更为 RoadTrust 与 Crux ESG 的未来发展注入了强大动力。",
        "FINSENSE TECHNOLOGY LIMITED 是一家根据香港法律注册成立的公司（商业登记号码：80186886），致力于研发 ESG、保险科技及道路安全之 AI 应用。旗下的 Crux ESG 与 RoadTrust 平台正活跃于香港与大湾区，提供符合法规的智能解决方案。",
      ],
    },
    {
      slug: "finsense-technology-wins-first-runner-up-at-hsuhk-inter-university-fintech-innovation-competition",
      title: "Finsense Technology 在“香港恒生大学跨大学金融科技创新比赛”荣获亚军",
      date: "香港，2025 年 5 月",
      category: "Awards",
      excerpt: "Finsense 旗下的生成式 AI 产品 i-Link 勇夺亚军，为自动化 RM 工作流与强化 CRM 洞察提供了创新解法。",
      author: "Finsense Technology",
      readTime: "阅读时间：3 分钟",
      body: [
        "Finsense Technology 荣幸宣布，公司凭借创新产品 i-Link，在竞争激烈的“香港恒生大学（HSUHK）跨大学金融科技创新比赛”中夺得亚军。",
        "i-Link 是一套先进的生成式 AI 解决方案，通过大型语言模型实时解析客户交易数据、沟通史与行为特点。该产品能轻易嵌入银行核心系统，帮助客户经理自动化日常繁琐工作，并将 AI 洞察转化为提升客户服务的核心竞争力。",
        "FINSENSE TECHNOLOGY LIMITED 是一家根据香港法律注册成立的公司（商业登记号码：80186886），专注于 AI 驱动的 ESG、保险科技及交通安全方案。我们的 Crux ESG、RoadTrust 以及 i-Link 产品，持续推动香港及大湾区金融生态的数字化转型。",
      ],
    },
  ],
} as const;

const localizedAwards = {
  en: [
    {
      title: "Champion, HKMA x CEFAR GenAI Application in Financial Services Competition 2025",
      description:
        "Awarded for developing an advanced Generative AI solution that automates Relationship Manager workflows and enhances CRM in core banking systems.",
      placeholderLabel: "Competition photo placeholder",
    },
    {
      title: "Awardee, Cyberport University Partnership Programme 2025",
      description:
        "Recognised for Crux ESG, an AI-blockchain powered ESG reporting platform that streamlines sustainability data collection and regulatory compliance for SMEs.",
      placeholderLabel: "CUPP award photo placeholder",
    },
    {
      title: "Awardee, HKSTP Ideation Programme 2025",
      description:
        "Recognised for RoadTrust, an AI-powered InsurTech solution using mobile telematics for usage-based insurance, real-time driver risk profiling, and personalised premiums.",
      placeholderLabel: "HKSTP award photo placeholder",
    },
    {
      title: "First Runner-Up, HSUHK Inter-University FinTech Innovation Competition 2025",
      description:
        "Awarded for i-Link, an innovative AI-powered FinTech product for Relationship Manager workflows developed by Finsense Technology.",
      placeholderLabel: "Innovation competition photo placeholder",
    },
  ],
  "zh-Hant": [
    {
      title: "HKMA x CEFAR 2025 金融服務 GenAI 應用比賽冠軍",
      description: "憑藉開發尖端生成式 AI 方案，實現客戶經理工作流自動化並提升核心銀行 CRM 系統效能而榮獲殊榮。",
      placeholderLabel: "比賽現場照片預留位置",
    },
    {
      title: "數碼港大學合作計劃 2025 得獎隊伍",
      description: "Crux ESG 平台憑藉結合 AI 與區塊鏈技術，為中小企有效簡化可持續發展數據採集與合規流程而獲得肯定。",
      placeholderLabel: "CUPP 頒獎照片預留位置",
    },
    {
      title: "香港科技園 Ideation 計劃 2025 入選項目",
      description: "RoadTrust 被認定為創新的 AI 保險科技方案，透過流動車聯網實現 UBI 保險、即時風險評估及個性化定價。",
      placeholderLabel: "HKSTP 獎項照片預留位置",
    },
    {
      title: "香港恒生大學跨大學金融科技創新比賽 2025 亞軍",
      description: "Finsense Technology 研發的 i-Link 獲獎，該 AI 金融科技產品專為優化客戶經理日常工作流而設計。",
      placeholderLabel: "創新比賽照片預留位置",
    },
  ],
  "zh-Hans": [
    {
      title: "HKMA x CEFAR 2025 金融服务 GenAI 应用比赛冠军",
      description: "凭借开发尖端生成式 AI 方案，实现客户经理工作流自动化并提升核心银行 CRM 系统效能而获得殊荣。",
      placeholderLabel: "比赛现场照片预留位置",
    },
    {
      title: "数码港大学合作伙伴计划 2025 获奖队伍",
      description: "Crux ESG 平台凭借结合 AI 与区块链技术，为中小企业有效简化可持续发展数据采集与合规流程而获得肯定。",
      placeholderLabel: "CUPP 颁奖照片预留位置",
    },
    {
      title: "香港科技园 Ideation 计划 2025 入选项目",
      description: "RoadTrust 被认定为创新的 AI 保险科技方案，通过移动车联网实现 UBI 保险、实时风险评估及个性化定价。",
      placeholderLabel: "HKSTP 奖项照片预留位置",
    },
    {
      title: "香港恒生大学跨大学金融科技创新比赛 2025 亚军",
      description: "Finsense Technology 研发的 i-Link 获奖，该 AI 金融科技产品专为优化客户经理日常工作流而设计。",
      placeholderLabel: "创新比赛照片预留位置",
    },
  ],
} as const;

export const newsCategories: NewsCategory[] = [
  "Awards",
  "Company",
  "Product",
  "Partnership",
  "Sustainability",
  "Investors",
];

export const getCategoryLabel = (language: Language, category: NewsCategory) => categoryLabels[language][category];

export const getNews = (language: Language): NewsArticle[] =>
  articleContent[language].map((article) => ({
    ...article,
    categoryLabel: getCategoryLabel(language, article.category),
  }));

export const getAwards = (language: Language): AwardRecognition[] => [...localizedAwards[language]];

export const getArticle = (language: Language, slug: string) =>
  getNews(language).find((article) => article.slug === slug);