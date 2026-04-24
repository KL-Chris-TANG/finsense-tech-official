import { BrainCircuit, Building2, ShieldCheck } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import cefarLogo from "@/assets/partners/cefar-logo.png";

import cyberportLogo from "@/assets/partners/cyberport-logo.png";
import hkstpLogo from "@/assets/partners/hkstp-logo.png";
import type { Language } from "@/lib/language";

export type CapabilityPillar = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export type ProductHighlight = {
  name: string;
  strap: string;
  description: string;
  href: string;
};

export type StrategicPartner = {
  name: string;
  logo: string;
  href: string;
  summary: string;
};

export type AcceleratorInvestor = {
  name: string;
  logo: string;
  description: string;
};

const content = {
  en: {
    capabilityPillars: [
      {
        title: "AI-native intelligence",
        description:
          "Real-time intelligence, predictive insights, and smart recommendations built directly into finance workflows.",
        icon: BrainCircuit,
      },
      {
        title: "Regulatory-grade automation",
        description:
          "Automated decisioning, compliant output generation, and audit-ready processes that reduce human burden.",
        icon: ShieldCheck,
      },
      {
        title: "Built for Hong Kong & the GBA",
        description:
          "Solutions designed for regional operating realities across finance, sustainability, insurance, and smart city sectors.",
        icon: Building2,
      },
    ],
    companyHighlights: [
      { value: "AI-first", label: "product philosophy" },
      { value: "2", label: "flagship platforms" },
      { value: "Hong Kong", label: "headquartered" },
      { value: "HK / GBA", label: "market focus" },
    ],
    products: [
      {
        name: "Crux ESG",
        strap: "AI-Powered ESG Reporting Platform",
        description:
          "Harnessing AI to simplify ESG reporting for SMEs in Hong Kong and the Greater Bay Area through guided data capture, automated analysis, and compliant narrative generation.",
        href: "#businesses",
      },
      {
        name: "RoadTrust",
        strap: "AI-Powered Mobile Telematics & Insurance Platform",
        description:
          "A secure network for safer roads that rewards every safe mile with telematics intelligence, insurer-ready insights, and frictionless user engagement.",
        href: "#businesses",
      },
    ],
    teamTraits: [
      "Cross-disciplinary expertise in FinTech, AI, insurance, sustainability, and digital infrastructure",
      "Shared mission to solve societal problems and improve financial ecosystems with practical technology",
      "Execution-led culture focused on viable products, measurable impact, and long-term regional relevance",
    ],
    sampleLeadership: [
      {
        role: "Strategy & Partnerships",
        summary:
          "Leads market development, institutional relationships, and ecosystem expansion across Hong Kong and the Greater Bay Area.",
      },
      {
        role: "AI & Product Innovation",
        summary:
          "Shapes core platform intelligence, model design, and user experiences that turn complexity into clear decisions.",
      },
      {
        role: "Risk, Compliance & Delivery",
        summary:
          "Ensures enterprise readiness through implementation discipline, governance frameworks, and scalable operations.",
      },
    ],
    managementTeam: [
      {
        name: "Co Co C. Y. Mak",
        role: "Co-Founder & Director, Commercial Lead",
        photo: "",
        bio: "Hong Kong-qualified FinTech lawyer and Counsel at a FinTech company, with prior experience advising international financial institutions at a leading global law firm. Holds a Master's degree in ESG and is currently pursuing a Master's in Computer Science, bridging legal, commercial, and technical fluency to drive Finsense's market strategy.",
      },
      {
        name: "Ray Y. Liu",
        role: "Co-Founder & Director, Technology Lead",
        photo: "",
        bio: "Full-Stack Developer (Python / Java) specialising in Generative AI and financial modelling. Led an academia-driven telematics system in the United States that achieved a 95% driver-identification accuracy rate, delivered in collaboration with state government authorities. Architects Finsense's AI-native platforms end-to-end.",
      },
    ],
    missionVision: {
      vision:
        "To revolutionise societal ecosystems by incorporating cutting-edge technology to make the world a safer place by ensuring that positive externalities are emphasised and brought to the forefront of our solutions by tackling areas that are longing for effective technological adaptation to reach them.",
      mission:
        "To harness the power of technology, data, and innovation to deliver seamless, secure, and inclusive solutions beneficial to society, driving global transformation while empowering businesses and individuals to thrive in smarter cities and an increasingly digitally-connected world.",
    },
    strategicPartners: [
      {
        name: "Cefar",
        logo: cefarLogo,
        href: "https://cefar.erg.cuhk.edu.hk/",
        summary:
          "Research and academic collaboration supporting innovation across energy, infrastructure, and future-ready urban systems.",
      },
    ],
    acceleratorsInvestors: [
      {
        name: "Cyberport",
        logo: cyberportLogo,
        description:
          "Awardee, Cyberport University Partnership Programme 2025 — Crux ESG selected for its AI-blockchain ESG reporting platform built for SMEs.",
      },
      {
        name: "HKSTP",
        logo: hkstpLogo,
        description:
          "Awardee, HKSTP Ideation Programme 2025 — RoadTrust recognised for its AI-powered mobile telematics InsurTech platform.",
      },
    ],
  },
  "zh-Hant": {
    capabilityPillars: [
      {
        title: "AI 原生智能",
        description: "將即時洞察、預測分析與智能建議直接融入金融工作流程。",
        icon: BrainCircuit,
      },
      {
        title: "監管級自動化",
        description: "自動化決策、合規輸出生成及可審計流程，有效減輕人手負擔。",
        icon: ShieldCheck,
      },
      {
        title: "為香港及大灣區而設",
        description: "針對區域金融、可持續發展、保險及智慧城市場景的實際營運需求而打造。",
        icon: Building2,
      },
    ],
    companyHighlights: [
      { value: "AI-first", label: "產品理念" },
      { value: "2", label: "旗艦平台" },
      { value: "Hong Kong", label: "總部所在" },
      { value: "HK / GBA", label: "市場重點" },
    ],
    products: [
      {
        name: "Crux ESG",
        strap: "AI 驅動 ESG 匯報平台",
        description: "透過引導式數據收集、自動分析及合規敘述生成，簡化香港及大灣區中小企的 ESG 匯報流程。",
        href: "#businesses",
      },
      {
        name: "RoadTrust",
        strap: "AI 驅動流動車聯網與保險平台",
        description: "以車聯網智能、保險洞察及流暢互動機制，為每一段安全里程創造價值。",
        href: "#businesses",
      },
    ],
    teamTraits: [
      "具備金融科技、AI、保險、可持續發展與數碼基建的跨界專業能力",
      "以實用科技解決社會問題、優化金融生態為共同使命",
      "重視執行與成果，以可行產品、可量化影響及長遠區域價值為核心",
    ],
    sampleLeadership: [
      {
        role: "策略與合作夥伴",
        summary: "主導市場拓展、機構合作及香港與大灣區的生態網絡擴展。",
      },
      {
        role: "AI 與產品創新",
        summary: "塑造核心平台智能、模型設計及用戶體驗，將複雜轉化為清晰決策。",
      },
      {
        role: "風險、合規與交付",
        summary: "以落地能力、治理框架與可擴展營運，確保企業級部署準備就緒。",
      },
    ],
    managementTeam: [
      {
        name: "麥宙懿 Co Co C. Y. Mak",
        role: "聯合創辦人兼董事，商務主管",
        photo: "",
        bio: "香港執業金融科技律師，現任金融科技公司法律顧問，曾於國際律師事務所為國際金融機構提供法律服務。持有 ESG 碩士學位，並正修讀電腦科學碩士，融合法律、商務與技術視野，主導 Finsense 的市場策略。",
      },
      {
        name: "劉宇 Ray Y. Liu",
        role: "聯合創辦人兼董事，技術主管",
        photo: "",
        bio: "全端開發人員（Python / Java），專注於生成式 AI 與金融建模。曾領導與美國州政府合作的學術級車聯網項目，駕駛者識別準確率達 95%，並全面負責 Finsense AI 原生平台的架構設計。",
      },
    ],
    missionVision: {
      vision:
        "透過引入尖端科技革新社會生態系統，讓世界更安全，並把正面外部效益置於解決方案核心，回應那些長期需要有效科技落地的領域。",
      mission:
        "運用科技、數據與創新力量，提供無縫、安全、共融並有利社會的解決方案，推動全球轉型，同時協助企業與個人在智慧城市及日益互聯的世界中蓬勃發展。",
    },
    strategicPartners: [
      {
        name: "Cefar",
        logo: cefarLogo,
        href: "https://cefar.erg.cuhk.edu.hk/",
        summary: "透過研究與學術合作，支持能源、基建及未來城市系統的創新發展。",
      },
    ],
    acceleratorsInvestors: [
      {
        name: "Cyberport",
        logo: cyberportLogo,
        description:
          "Cyberport University Partnership Programme 2025 Awardee——Crux ESG 因專為中小企而設的 AI 區塊鏈 ESG 匯報平台獲選。",
      },
      {
        name: "HKSTP",
        logo: hkstpLogo,
        description:
          "HKSTP Ideation Programme 2025 Awardee——RoadTrust 因其 AI 流動車聯網保險科技平台獲得肯定。",
      },
    ],
  },
  "zh-Hans": {
    capabilityPillars: [
      {
        title: "AI 原生智能",
        description: "将实时洞察、预测分析与智能建议直接融入金融工作流程。",
        icon: BrainCircuit,
      },
      {
        title: "监管级自动化",
        description: "自动化决策、合规输出生成及可审计流程，有效减轻人手负担。",
        icon: ShieldCheck,
      },
      {
        title: "为香港及大湾区而设",
        description: "针对区域金融、可持续发展、保险及智慧城市场景的实际运营需求而打造。",
        icon: Building2,
      },
    ],
    companyHighlights: [
      { value: "AI-first", label: "产品理念" },
      { value: "2", label: "旗舰平台" },
      { value: "Hong Kong", label: "总部所在" },
      { value: "HK / GBA", label: "市场重点" },
    ],
    products: [
      {
        name: "Crux ESG",
        strap: "AI 驱动 ESG 报告平台",
        description: "通过引导式数据收集、自动分析及合规叙述生成，简化香港及大湾区中小企业的 ESG 报告流程。",
        href: "#businesses",
      },
      {
        name: "RoadTrust",
        strap: "AI 驱动移动车联网与保险平台",
        description: "以车联网智能、保险洞察及流畅互动机制，为每一段安全里程创造价值。",
        href: "#businesses",
      },
    ],
    teamTraits: [
      "具备金融科技、AI、保险、可持续发展与数字基建的跨界专业能力",
      "以实用科技解决社会问题、优化金融生态为共同使命",
      "重视执行与成果，以可行产品、可量化影响及长期区域价值为核心",
    ],
    sampleLeadership: [
      {
        role: "战略与合作伙伴",
        summary: "主导市场拓展、机构合作及香港与大湾区的生态网络扩展。",
      },
      {
        role: "AI 与产品创新",
        summary: "塑造核心平台智能、模型设计及用户体验，将复杂转化为清晰决策。",
      },
      {
        role: "风险、合规与交付",
        summary: "以落地能力、治理框架与可扩展运营，确保企业级部署准备就绪。",
      },
    ],
    managementTeam: [
      {
        name: "麦宙懿 Co Co C. Y. Mak",
        role: "联合创办人兼董事，商务主管",
        photo: "",
        bio: "香港执业金融科技律师，现任金融科技公司法律顾问，曾于国际律师事务所为国际金融机构提供法律服务。持有 ESG 硕士学位，并正修读计算机科学硕士，融合法律、商务与技术视野，主导 Finsense 的市场策略。",
      },
      {
        name: "刘宇 Ray Y. Liu",
        role: "联合创办人兼董事，技术主管",
        photo: "",
        bio: "全栈开发人员（Python / Java），专注于生成式 AI 与金融建模。曾领导与美国州政府合作的学术级车联网项目，驾驶者识别准确率达 95%，并全面负责 Finsense AI 原生平台的架构设计。",
      },
    ],
    missionVision: {
      vision:
        "通过引入尖端科技革新社会生态系统，让世界更安全，并把正面外部效益置于解决方案核心，回应那些长期需要有效科技落地的领域。",
      mission:
        "运用科技、数据与创新力量，提供无缝、安全、共融并有利社会的解决方案，推动全球转型，同时协助企业与个人在智慧城市及日益互联的世界中蓬勃发展。",
    },
    strategicPartners: [
      {
        name: "Cefar",
        logo: cefarLogo,
        href: "https://cefar.erg.cuhk.edu.hk/",
        summary: "通过研究与学术合作，支持能源、基建及未来城市系统的创新发展。",
      },
    ],
    acceleratorsInvestors: [
      {
        name: "Cyberport",
        logo: cyberportLogo,
        description:
          "Cyberport University Partnership Programme 2025 Awardee——Crux ESG 因专为中小企业而设的 AI 区块链 ESG 报告平台获选。",
      },
      {
        name: "HKSTP",
        logo: hkstpLogo,
        description:
          "HKSTP Ideation Programme 2025 Awardee——RoadTrust 因其 AI 移动车联网保险科技平台获得肯定。",
      },
    ],
  },
} as const;

export const getAboutContent = (language: Language) => content[language];
