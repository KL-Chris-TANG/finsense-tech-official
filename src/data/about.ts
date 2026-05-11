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
        description: "將即時情報、預測性洞察及智能建議直接融入金融工作流程。",
        icon: BrainCircuit,
      },
      {
        title: "監管級自動化",
        description: "自動化決策、生成合規報告及可審核流程，大幅減輕人力負擔。",
        icon: ShieldCheck,
      },
      {
        title: "立足香港，深耕大灣區",
        description: "針對區域內金融、可持續發展、保險及智慧城市行業的營運現實而設計的解決方案。",
        icon: Building2,
      },
    ],
    companyHighlights: [
      { value: "AI-first", label: "產品理念" },
      { value: "2", label: "旗艦平台" },
      { value: "Hong Kong", label: "總部地點" },
      { value: "HK / GBA", label: "市場重心" },
    ],
    products: [
      {
        name: "Crux ESG",
        strap: "AI 驅動 ESG 報告平台",
        description: "利用 AI 技術，透過引導式數據採集、自動化分析及合規論述生成，簡化香港及大灣區中小企業的 ESG 報告流程。",
        href: "#businesses",
      },
      {
        name: "RoadTrust",
        strap: "AI 驅動流動車聯網與保險平台",
        description: "構建安全道路網絡，以車聯網智能、保險級洞察及流暢的用戶互動，為每一公里的安全駕駛提供獎勵。",
        href: "#businesses",
      },
    ],
    teamTraits: [
      "擁有金融科技、AI、保險、可持續發展及數碼基建的跨領域專業知識",
      "以實用科技解決社會難題並優化金融生態系統為共同使命",
      "以執行為導向的企業文化，專注於具生命力的產品、可量化的影響力及長遠的區域相關性",
    ],
    sampleLeadership: [
      {
        role: "策略與合作夥伴",
        summary: "領導香港及大灣區的市場開發、機構關係維護及生態系統擴張。",
      },
      {
        role: "AI 與產品創新",
        summary: "塑造核心平台智能、模型設計及用戶體驗，將複雜資訊轉化為明確決策。",
      },
      {
        role: "風險、合規與交付",
        summary: "透過嚴謹的執行紀律、治理框架及可擴展的營運模式，確保企業級部署準備就緒。",
      },
    ],
    managementTeam: [
      {
        name: "麥宙懿 Co Co C. Y. Mak",
        role: "共同創辦人及董事，商務主管",
        photo: "",
        bio: "香港執業金融科技律師，現任某金融科技公司法律顧問，曾於國際領先律師事務所為國際金融機構提供顧問服務。持有 ESG 碩士學位並正修讀電腦科學碩士，憑藉法律、商務與技術的跨界視野，驅動 Finsense 的市場策略。",
      },
      {
        name: "劉宇 Ray Y. Liu",
        role: "共同創辦人及董事，技術主管",
        photo: "",
        bio: "全端開發工程師（Python / Java），專精於生成式 AI 及金融建模。曾於美國領導學術驅動的車聯網系統項目，與州政府部門合作並實現 95% 的駕駛者辨識準確率。全面負責 Finsense AI 原生平台的架構設計。",
      },
    ],
    missionVision: {
      vision:
        "透過引入頂尖科技革新社會生態系統，將正面外部性置於解決方案的核心，解決那些渴求有效技術轉型領域的難題，使世界變得更安全。",
      mission:
        "利用科技、數據與創新的力量，提供無縫、安全且具包容性的解決方案，在推動全球轉型的同時，賦能企業與個人在智慧城市及日益數碼化的世界中蓬勃發展。",
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
          "數碼港大學合作夥伴計劃 2025 得獎者 —— Crux ESG 憑藉其專為中小企打造的 AI 區塊鏈 ESG 報告平台脫穎而出。",
      },
      {
        name: "HKSTP",
        logo: hkstpLogo,
        description:
          "香港科技園公司 Ideation 計劃 2025 得獎者 —— RoadTrust 其 AI 驅動流動車聯網保險科技平台獲得業界認可。",
      },
    ],
  },
  "zh-Hans": {
    capabilityPillars: [
      {
        title: "AI 原生智能",
        description: "将实时情报、预测性洞察和智能建议直接融入金融工作流程。",
        icon: BrainCircuit,
      },
      {
        title: "监管级自动化",
        description: "自动化决策、生成合规报告及可审计流程，大幅减轻人力负担。",
        icon: ShieldCheck,
      },
      {
        title: "立足香港，深耕大湾区",
        description: "针对区域内金融、可持续发展、保险及智慧城市行业的运营实际而设计的解决方案。",
        icon: Building2,
      },
    ],
    companyHighlights: [
      { value: "AI-first", label: "产品理念" },
      { value: "2", label: "旗舰平台" },
      { value: "Hong Kong", label: "总部地点" },
      { value: "HK / GBA", label: "市场重心" },
    ],
    products: [
      {
        name: "Crux ESG",
        strap: "AI 驱动 ESG 报告平台",
        description: "利用 AI 技术，通过引导式数据采集、自动化分析和合规叙述生成，简化香港及大湾区中小企业的 ESG 报告流程。",
        href: "#businesses",
      },
      {
        name: "RoadTrust",
        strap: "AI 驱动移动车联网与保险平台",
        description: "构建安全道路网络，以车联网智能、保险级洞察和流畅的用户交互，为每一公里的安全驾驶提供奖励。",
        href: "#businesses",
      },
    ],
    teamTraits: [
      "拥有金融科技、AI、保险、可持续发展及数字基建的跨领域专业知识",
      "以实用科技解决社会难题并优化金融生态系统为共同使命",
      "以执行为导向的企业文化，专注于具生命力的产品、可量化的影响力及长期的区域相关性",
    ],
    sampleLeadership: [
      {
        role: "战略与合作伙伴",
        summary: "领导香港及大湾区的市场开发、机构关系维护及生态系统扩张。",
      },
      {
        role: "AI 与产品创新",
        summary: "塑造核心平台智能、模型设计和用户体验，将复杂信息转化为明确决策。",
      },
      {
        role: "风险、合规与交付",
        summary: "通过严谨的执行纪律、治理框架和可扩展的运营模式，确保企业级部署准备就绪。",
      },
    ],
    managementTeam: [
      {
        name: "麦宙懿 Co Co C. Y. Mak",
        role: "共同创始人及董事，商务主管",
        photo: "",
        bio: "香港执业金融科技律师，现任某金融科技公司法律顾问，曾于国际领先律师事务所为国际金融机构提供顾问服务。持有 ESG 硕士学位并正修读计算机科学硕士，凭借法律、商务与技术的跨界视野，驱动 Finsense 的市场战略。",
      },
      {
        name: "刘宇 Ray Y. Liu",
        role: "共同创始人及董事，技术主管",
        photo: "",
        bio: "全栈开发工程师（Python / Java），专精于生成式 AI 及金融建模。曾在美国领导学术驱动的车联网系统项目，与州政府部门合作并实现 95% 的驾驶者辨识准确率。全面负责 Finsense AI 原生平台的架构设计。",
      },
    ],
    missionVision: {
      vision:
        "通过引入顶尖科技革新社会生态系统，将正面外部性置于解决方案的核心，解决那些渴望有效技术转型领域的难题，使世界变得更安全。",
      mission:
        "利用科技、数据与创新的力量，提供无缝、安全且具包容性的解决方案，在推动全球转型的同时，赋能企业与个人在智慧城市及日益数字化世界中蓬勃发展。",
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
          "数码港大学合作伙伴计划 2025 得奖者 —— Crux ESG 凭借其专为中小企打造的 AI 区块链 ESG 报告平台脱颖而出。",
      },
      {
        name: "HKSTP",
        logo: hkstpLogo,
        description:
          "香港科技园公司 Ideation 计划 2025 得奖者 —— RoadTrust 其 AI 驱动移动车联网保险科技平台获得业界认可。",
      },
    ],
  },
} as const;

export const getAboutContent = (language: Language) => content[language];