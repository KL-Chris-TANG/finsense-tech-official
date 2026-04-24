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
    Awards: "獎項",
    Company: "公司",
    Product: "產品",
    Partnership: "合作夥伴",
    Sustainability: "可持續發展",
    Investors: "投資者",
  },
  "zh-Hans": {
    Awards: "奖项",
    Company: "公司",
    Product: "产品",
    Partnership: "合作伙伴",
    Sustainability: "可持续发展",
    Investors: "投资者",
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
      title: "Finsense Technology 榮獲 HKMA x CEFAR GenAI Competition 2025 冠軍",
      date: "香港，2025 年 4 月 22 日",
      category: "Awards",
      excerpt: "Finsense Technology 憑自動化 RM 工作流程並提升核心銀行 CRM 效能的生成式 AI 方案勇奪冠軍。",
      author: "Finsense Technology",
      readTime: "閱讀時間 4 分鐘",
      heroQuote: "推動進步．建立信任．連結機遇。",
      body: [
        "Finsense Technology 很高興宣布，我們的團隊於備受矚目的 HKMA x CEFAR 金融服務 GenAI 應用比賽 2025 中榮獲冠軍。",
        "我們的得獎生成式 AI 方案利用大型語言模型，即時分析客戶交易數據、互動紀錄及行為模式。方案可無縫整合至核心銀行系統，簡化客戶經理工作流程，並以智能自動化與可行洞察顯著提升客戶關係管理。",
        "FINSENSE TECHNOLOGY LIMITED 根據香港法律成立，商業登記號碼為 80186886，專注於 ESG 匯報、保險科技及道路安全的先進 AI 解決方案。我們兩大旗艦平台 Crux ESG 與 RoadTrust，為香港及大灣區帶來智能、具成本效益且符合法規的成果。",
      ],
    },
    {
      slug: "finsense-technology-esg-team-named-awardee-of-cyberport-university-partnership-programme-2025",
      title: "Finsense Technology ESG 團隊獲選 Cyberport University Partnership Programme 2025 Awardee",
      date: "香港，2025 年 8 月",
      category: "Awards",
      excerpt: "以 CoreFlow 旗下 Crux ESG 名義營運的 ESG 團隊，憑簡化中小企 ESG 匯報的 AI 區塊鏈平台獲得肯定。",
      author: "Finsense Technology",
      readTime: "閱讀時間 3 分鐘",
      body: [
        "Finsense Technology 欣然宣布，其 ESG 團隊獲選為由香港數碼港主辦的 Cyberport University Partnership Programme 2025 Awardee。",
        "該團隊以 CoreFlow 旗下 Crux ESG 名義參與，憑其創新的監管科技方案獲得評審青睞。這是一個專為中小企設計、結合 AI 與區塊鏈的自動化 ESG 匯報平台，可簡化可持續發展數據收集、標準化、分析及合規流程，協助香港及大灣區中小企以更快速、更具成本效益且全面合規的方式回應日益增長的 ESG 匯報要求。",
        "FINSENSE TECHNOLOGY LIMITED 根據香港法律成立，商業登記號碼為 80186886，專注於 ESG 匯報、保險科技及道路安全的先進 AI 解決方案。我們的旗艦平台 Crux ESG 與 RoadTrust，為香港及大灣區帶來智能、具成本效益且符合法規的成果。",
      ],
    },
    {
      slug: "finsense-technology-named-awardee-of-hkstp-ideation-programme-2025",
      title: "Finsense Technology 獲選 HKSTP Ideation Programme 2025 Awardee",
      date: "香港，2025 年 11 月",
      category: "Awards",
      excerpt: "Finsense 憑以流動車聯網及按使用量保險為核心的 AI 保險科技平台 RoadTrust 獲得認可。",
      author: "Finsense Technology",
      readTime: "閱讀時間 5 分鐘",
      heroQuote: "這項來自 HKSTP 的肯定，印證了我們將先進 AI 應用於保險業真實挑戰的實力。",
      body: [
        "Finsense Technology 很高興宣布，公司獲選為由香港科技園公司舉辦的 HKSTP Ideation Programme 2025 Awardee。",
        "團隊開發的 RoadTrust 是一項創新的 AI 保險科技方案，利用流動車聯網數據支持按使用量汽車保險。平台提供即時駕駛風險分析、個人化保費計算及先進道路安全洞察，而無需額外硬件。",
        "Finsense Technology 聯合創辦人兼技術主管 Florence T.Y. Li 表示，這項肯定印證了公司將先進 AI 應用於實際保險挑戰的能力，並進一步加強了 RoadTrust 與 Crux ESG 的發展動能。",
        "FINSENSE TECHNOLOGY LIMITED 根據香港法律成立，商業登記號碼為 80186886，專注於 ESG 匯報、保險科技及道路安全的先進 AI 解決方案。我們的旗艦平台 Crux ESG 與 RoadTrust，為香港及大灣區帶來智能、具成本效益且符合法規的成果。",
      ],
    },
    {
      slug: "finsense-technology-wins-first-runner-up-at-hsuhk-inter-university-fintech-innovation-competition",
      title: "Finsense Technology 於 HSUHK 跨大學金融科技創新比賽勇奪亞軍",
      date: "香港，2025 年 5 月",
      category: "Awards",
      excerpt: "Finsense 憑 i-Link 奪得亞軍，該生成式 AI 產品可自動化 RM 工作流程並強化 CRM 洞察。",
      author: "Finsense Technology",
      readTime: "閱讀時間 3 分鐘",
      body: [
        "Finsense Technology 很高興宣布，公司憑創新產品 i-Link，於備受矚目的 HSUHK 跨大學金融科技創新比賽中勇奪亞軍。",
        "i-Link 是一套先進的生成式 AI 解決方案，利用大型語言模型即時分析客戶交易數據、互動紀錄及行為模式。方案可無縫整合至核心銀行系統，簡化客戶經理工作流程，並以智能自動化與可行洞察顯著提升客戶關係管理。",
        "FINSENSE TECHNOLOGY LIMITED 根據香港法律成立，商業登記號碼為 80186886，專注於 ESG 匯報、保險科技及道路安全的先進 AI 解決方案。我們的旗艦平台 Crux ESG、RoadTrust 以及 i-Link，為香港及大灣區帶來智能、具成本效益且符合法規的成果。",
      ],
    },
  ],
  "zh-Hans": [
    {
      slug: "finsense-wins-champion-at-hkma-x-cefar-genai-competition-2025",
      title: "Finsense Technology 荣获 HKMA x CEFAR GenAI Competition 2025 冠军",
      date: "香港，2025 年 4 月 22 日",
      category: "Awards",
      excerpt: "Finsense Technology 凭自动化 RM 工作流程并提升核心银行 CRM 效能的生成式 AI 方案勇夺冠军。",
      author: "Finsense Technology",
      readTime: "阅读时间 4 分钟",
      heroQuote: "推动进步．建立信任．连接机遇。",
      body: [
        "Finsense Technology 很高兴宣布，我们的团队于备受瞩目的 HKMA x CEFAR 金融服务 GenAI 应用比赛 2025 中荣获冠军。",
        "我们的获奖生成式 AI 方案利用大型语言模型，实时分析客户交易数据、互动记录及行为模式。方案可无缝整合至核心银行系统，简化客户经理工作流程，并以智能自动化与可行洞察显著提升客户关系管理。",
        "FINSENSE TECHNOLOGY LIMITED 根据香港法律成立，商业登记号码为 80186886，专注于 ESG 报告、保险科技及道路安全的先进 AI 解决方案。我们两大旗舰平台 Crux ESG 与 RoadTrust，为香港及大湾区带来智能、具成本效益且符合法规的成果。",
      ],
    },
    {
      slug: "finsense-technology-esg-team-named-awardee-of-cyberport-university-partnership-programme-2025",
      title: "Finsense Technology ESG 团队获选 Cyberport University Partnership Programme 2025 Awardee",
      date: "香港，2025 年 8 月",
      category: "Awards",
      excerpt: "以 CoreFlow 旗下 Crux ESG 名义运营的 ESG 团队，凭简化中小企业 ESG 报告的 AI 区块链平台获得肯定。",
      author: "Finsense Technology",
      readTime: "阅读时间 3 分钟",
      body: [
        "Finsense Technology 欣然宣布，其 ESG 团队获选为由香港数码港主办的 Cyberport University Partnership Programme 2025 Awardee。",
        "该团队以 CoreFlow 旗下 Crux ESG 名义参与，凭其创新的监管科技方案获得评审青睐。这是一个专为中小企业设计、结合 AI 与区块链的自动化 ESG 报告平台，可简化可持续发展数据收集、标准化、分析及合规流程，协助香港及大湾区中小企业以更快速、更具成本效益且全面合规的方式回应日益增长的 ESG 报告要求。",
        "FINSENSE TECHNOLOGY LIMITED 根据香港法律成立，商业登记号码为 80186886，专注于 ESG 报告、保险科技及道路安全的先进 AI 解决方案。我们的旗舰平台 Crux ESG 与 RoadTrust，为香港及大湾区带来智能、具成本效益且符合法规的成果。",
      ],
    },
    {
      slug: "finsense-technology-named-awardee-of-hkstp-ideation-programme-2025",
      title: "Finsense Technology 获选 HKSTP Ideation Programme 2025 Awardee",
      date: "香港，2025 年 11 月",
      category: "Awards",
      excerpt: "Finsense 凭以移动车联网及按使用量保险为核心的 AI 保险科技平台 RoadTrust 获得认可。",
      author: "Finsense Technology",
      readTime: "阅读时间 5 分钟",
      heroQuote: "这项来自 HKSTP 的肯定，印证了我们将先进 AI 应用于保险业真实挑战的实力。",
      body: [
        "Finsense Technology 很高兴宣布，公司获选为由香港科技园公司举办的 HKSTP Ideation Programme 2025 Awardee。",
        "团队开发的 RoadTrust 是一项创新的 AI 保险科技方案，利用移动车联网数据支持按使用量汽车保险。平台提供实时驾驶风险分析、个性化保费计算及先进道路安全洞察，而无需额外硬件。",
        "Finsense Technology 联合创办人兼技术主管 Florence T.Y. Li 表示，这项肯定印证了公司将先进 AI 应用于实际保险挑战的能力，并进一步加强了 RoadTrust 与 Crux ESG 的发展动能。",
        "FINSENSE TECHNOLOGY LIMITED 根据香港法律成立，商业登记号码为 80186886，专注于 ESG 报告、保险科技及道路安全的先进 AI 解决方案。我们的旗舰平台 Crux ESG 与 RoadTrust，为香港及大湾区带来智能、具成本效益且符合法规的成果。",
      ],
    },
    {
      slug: "finsense-technology-wins-first-runner-up-at-hsuhk-inter-university-fintech-innovation-competition",
      title: "Finsense Technology 于 HSUHK 跨大学金融科技创新比赛勇夺亚军",
      date: "香港，2025 年 5 月",
      category: "Awards",
      excerpt: "Finsense 凭 i-Link 夺得亚军，该生成式 AI 产品可自动化 RM 工作流程并强化 CRM 洞察。",
      author: "Finsense Technology",
      readTime: "阅读时间 3 分钟",
      body: [
        "Finsense Technology 很高兴宣布，公司凭创新产品 i-Link，于备受瞩目的 HSUHK 跨大学金融科技创新比赛中勇夺亚军。",
        "i-Link 是一套先进的生成式 AI 解决方案，利用大型语言模型实时分析客户交易数据、互动记录及行为模式。方案可无缝整合至核心银行系统，简化客户经理工作流程，并以智能自动化与可行洞察显著提升客户关系管理。",
        "FINSENSE TECHNOLOGY LIMITED 根据香港法律成立，商业登记号码为 80186886，专注于 ESG 报告、保险科技及道路安全的先进 AI 解决方案。我们的旗舰平台 Crux ESG、RoadTrust 以及 i-Link，为香港及大湾区带来智能、具成本效益且符合法规的成果。",
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
      title: "HKMA x CEFAR GenAI 金融服務應用比賽 2025 冠軍",
      description: "因開發可自動化客戶經理工作流程並提升核心銀行 CRM 效能的先進生成式 AI 方案而獲獎。",
      placeholderLabel: "比賽相片位置",
    },
    {
      title: "Cyberport University Partnership Programme 2025 Awardee",
      description: "Crux ESG 因其 AI 區塊鏈 ESG 匯報平台而獲肯定，該平台可簡化中小企可持續發展數據收集與合規流程。",
      placeholderLabel: "CUPP 獎項相片位置",
    },
    {
      title: "HKSTP Ideation Programme 2025 Awardee",
      description: "RoadTrust 因其基於流動車聯網的 AI 保險科技方案獲得認可，可支援按使用量保險、即時駕駛風險分析及個人化保費。",
      placeholderLabel: "HKSTP 獎項相片位置",
    },
    {
      title: "HSUHK 跨大學金融科技創新比賽 2025 亞軍",
      description: "i-Link 這項 AI 金融科技產品因可支援客戶經理工作流程而獲獎。",
      placeholderLabel: "創新比賽相片位置",
    },
  ],
  "zh-Hans": [
    {
      title: "HKMA x CEFAR GenAI 金融服务应用比赛 2025 冠军",
      description: "因开发可自动化客户经理工作流程并提升核心银行 CRM 效能的先进生成式 AI 方案而获奖。",
      placeholderLabel: "比赛照片位置",
    },
    {
      title: "Cyberport University Partnership Programme 2025 Awardee",
      description: "Crux ESG 因其 AI 区块链 ESG 报告平台而获得肯定，该平台可简化中小企业可持续发展数据收集与合规流程。",
      placeholderLabel: "CUPP 奖项照片位置",
    },
    {
      title: "HKSTP Ideation Programme 2025 Awardee",
      description: "RoadTrust 因其基于移动车联网的 AI 保险科技方案获得认可，可支持按使用量保险、实时驾驶风险分析及个性化保费。",
      placeholderLabel: "HKSTP 奖项照片位置",
    },
    {
      title: "HSUHK 跨大学金融科技创新比赛 2025 亚军",
      description: "i-Link 这项 AI 金融科技产品因可支持客户经理工作流程而获奖。",
      placeholderLabel: "创新比赛照片位置",
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
