import type { Scenario } from "@/lib/types";

export const ofcomStakeholderZhScenario: Scenario = {
  id: "ofcom-stakeholder-zh",
  title: "Stakeholder Meeting",
  titleEs: "利益相关方会议",
  titleLocal: "利益相关方会议",
  description:
    "Conduct a formal bilateral meeting with a senior Chinese official from the Cyberspace Administration of China. Practice high-level diplomatic and regulatory language in Mandarin.",
  setting:
    "Bilateral meeting room at the Cyberspace Administration of China (CAC) headquarters in Beijing",
  language: "zh",
  turns: [
    {
      id: 1,
      avatarLine:
        "欢迎来到国家互联网信息办公室。我是网络安全协调局的副局长。很荣幸接待英国通信管理局的同仁。",
      avatarLineEn:
        "Welcome to the Cyberspace Administration of China. I am the Deputy Director of the Cybersecurity Coordination Bureau. It is an honour to receive our colleagues from Ofcom.",
      expectedUserPhrase:
        "非常感谢您的热情接待。我是英国通信管理局国际合作部的主任，很荣幸能来访问贵机构。",
      expectedUserPhraseEn:
        "Thank you very much for the warm reception. I am the Director of International Cooperation at Ofcom. It is an honour to visit your organisation.",
      pronunciationGuide:
        "Fēicháng gǎnxiè nín de rèqíng jiēdài. Wǒ shì Yīngguó Tōngxìn Guǎnlǐ Jú guójì hézuò bù de zhǔrèn, hěn róngxìng néng lái fǎngwèn guì jīgòu.",
      acceptableVariations: [
        "感谢您的接待，我是Ofcom国际合作部主任",
        "非常荣幸来访问贵机构，感谢热情接待",
        "谢谢您的热情招待，很荣幸来到这里",
      ],
      vocabulary: [
        {
          word: "荣幸",
          translation: "honour/honoured",
          pronunciation: "róng xìng",
          partOfSpeech: "adjective",
        },
        {
          word: "接待",
          translation: "to receive (guests)/reception",
          pronunciation: "jiē dài",
          partOfSpeech: "verb",
        },
        {
          word: "同仁",
          translation: "colleagues (formal)",
          pronunciation: "tóng rén",
          partOfSpeech: "noun",
        },
        {
          word: "贵机构",
          translation: "your esteemed organisation",
          pronunciation: "guì jī gòu",
          partOfSpeech: "noun",
        },
        {
          word: "主任",
          translation: "director/head",
          pronunciation: "zhǔ rèn",
          partOfSpeech: "noun",
        },
      ],
      grammarNote:
        "'贵' (guì) is an honorific prefix meaning 'your esteemed'. It is used in formal contexts: '贵机构' (your esteemed organisation), '贵公司' (your esteemed company). This is essential in diplomatic settings.",
      difficulty: "hard",
    },
    {
      id: 2,
      avatarLine:
        "谢谢。我们对英国通信管理局在国际合作方面的工作很感兴趣。能否介绍一下你们的国际工作重点？",
      avatarLineEn:
        "Thank you. We are very interested in Ofcom's international cooperation work. Could you introduce your international work priorities?",
      expectedUserPhrase:
        "我们积极参与国际组织的工作，包括国际电信联盟和经合组织，推动全球监管标准的协调。",
      expectedUserPhraseEn:
        "We actively participate in the work of international organisations, including the ITU and OECD, promoting the harmonisation of global regulatory standards.",
      pronunciationGuide:
        "Wǒmen jījí cānyù guójì zǔzhī de gōngzuò, bāokuò Guójì Diànxìn Liánméng hé Jīnghé Zǔzhī, tuīdòng quánqiú jiānguǎn biāozhǔn de xiétiáo.",
      acceptableVariations: [
        "我们参与ITU和OECD等国际组织的工作",
        "我们积极推动全球监管合作和标准协调",
        "国际合作是我们的工作重点，包括参与多边组织",
      ],
      vocabulary: [
        {
          word: "积极",
          translation: "actively/proactively",
          pronunciation: "jī jí",
          partOfSpeech: "adverb",
        },
        {
          word: "参与",
          translation: "to participate in",
          pronunciation: "cān yù",
          partOfSpeech: "verb",
        },
        {
          word: "国际电信联盟",
          translation: "International Telecommunication Union (ITU)",
          pronunciation: "guó jì diàn xìn lián méng",
          partOfSpeech: "noun",
        },
        {
          word: "协调",
          translation: "to harmonise/coordinate",
          pronunciation: "xié tiáo",
          partOfSpeech: "verb",
        },
        {
          word: "标准",
          translation: "standards",
          pronunciation: "biāo zhǔn",
          partOfSpeech: "noun",
        },
      ],
      grammarNote:
        "'包括' (bāokuò) means 'including' and introduces specific examples after a general statement. It is placed before the list: '包括国际电信联盟和经合组织' (including the ITU and OECD).",
      difficulty: "hard",
    },
    {
      id: 3,
      avatarLine:
        "非常好。在平台治理方面，你们如何确保大型科技公司履行其责任？",
      avatarLineEn:
        "Very good. Regarding platform governance, how do you ensure large tech companies fulfil their responsibilities?",
      expectedUserPhrase:
        "我们通过法律框架和执法手段确保平台问责制。平台必须评估风险并采取相应的安全措施。",
      expectedUserPhraseEn:
        "We ensure platform accountability through legal frameworks and enforcement measures. Platforms must assess risks and take appropriate safety measures.",
      pronunciationGuide:
        "Wǒmen tōngguò fǎlǜ kuàngjià hé zhífǎ shǒuduàn quèbǎo píngtái wèn zé zhì. Píngtái bìxū pínggū fēngxiǎn bìng cǎiqǔ xiāngyìng de ānquán cuòshī.",
      acceptableVariations: [
        "我们有完善的法律框架来确保平台承担责任",
        "平台必须进行风险评估并采取安全措施",
        "通过法律手段和执法来确保平台问责",
      ],
      vocabulary: [
        {
          word: "平台治理",
          translation: "platform governance",
          pronunciation: "píng tái zhì lǐ",
          partOfSpeech: "noun",
        },
        {
          word: "问责制",
          translation: "accountability",
          pronunciation: "wèn zé zhì",
          partOfSpeech: "noun",
        },
        {
          word: "法律框架",
          translation: "legal framework",
          pronunciation: "fǎ lǜ kuàng jià",
          partOfSpeech: "noun",
        },
        {
          word: "评估",
          translation: "to assess/evaluate",
          pronunciation: "píng gū",
          partOfSpeech: "verb",
        },
        {
          word: "执法手段",
          translation: "enforcement measures",
          pronunciation: "zhí fǎ shǒu duàn",
          partOfSpeech: "noun",
        },
      ],
      grammarNote:
        "'通过' (tōngguò) means 'through/by means of' and introduces the method: '通过法律框架确保' (ensure through legal frameworks). '相应的' (xiāngyìng de) means 'corresponding/appropriate' and is used in formal contexts.",
      difficulty: "hard",
    },
    {
      id: 4,
      avatarLine:
        "年龄验证是我们也在关注的问题。英国在这方面有什么先进经验？",
      avatarLineEn:
        "Age verification is an issue we are also paying attention to. What advanced experience does the UK have in this area?",
      expectedUserPhrase:
        "我们正在制定年龄验证的技术标准，鼓励平台采用多种验证方式，同时保护用户隐私。",
      expectedUserPhraseEn:
        "We are developing technical standards for age verification, encouraging platforms to adopt multiple verification methods while protecting user privacy.",
      pronunciationGuide:
        "Wǒmen zhèngzài zhìdìng niánlíng yànzhèng de jìshù biāozhǔn, gǔlì píngtái cǎiyòng duō zhǒng yànzhèng fāngshì, tóngshí bǎohù yònghù yǐnsī.",
      acceptableVariations: [
        "我们在制定年龄验证标准，同时保护用户隐私",
        "英国鼓励采用多种年龄验证方式",
        "我们的做法是推动技术标准，平衡验证与隐私保护",
      ],
      vocabulary: [
        {
          word: "制定",
          translation: "to formulate/develop",
          pronunciation: "zhì dìng",
          partOfSpeech: "verb",
        },
        {
          word: "技术标准",
          translation: "technical standards",
          pronunciation: "jì shù biāo zhǔn",
          partOfSpeech: "noun",
        },
        {
          word: "鼓励",
          translation: "to encourage",
          pronunciation: "gǔ lì",
          partOfSpeech: "verb",
        },
        {
          word: "隐私",
          translation: "privacy",
          pronunciation: "yǐn sī",
          partOfSpeech: "noun",
        },
        {
          word: "验证方式",
          translation: "verification methods",
          pronunciation: "yàn zhèng fāng shì",
          partOfSpeech: "noun",
        },
      ],
      grammarNote:
        "'正在' (zhèngzài) indicates an ongoing action, similar to English '-ing': '正在制定' (are formulating). '多种' (duō zhǒng) means 'multiple kinds of' and is more formal than '很多种'.",
      difficulty: "hard",
    },
    {
      id: 5,
      avatarLine: "中英两国在网络治理方面有很多可以合作的领域。您觉得呢？",
      avatarLineEn:
        "There are many areas where China and the UK can cooperate on internet governance. What do you think?",
      expectedUserPhrase:
        "完全同意。我们可以在儿童保护、平台治理和技术标准等方面加强双边合作。",
      expectedUserPhraseEn:
        "I completely agree. We can strengthen bilateral cooperation in areas such as child protection, platform governance, and technical standards.",
      pronunciationGuide:
        "Wánquán tóngyì. Wǒmen kěyǐ zài értóng bǎohù, píngtái zhìlǐ hé jìshù biāozhǔn děng fāngmiàn jiāqiáng shuāngbiān hézuò.",
      acceptableVariations: [
        "我完全同意，双方可以在多个领域加强合作",
        "同意，儿童保护和平台治理是重要的合作方向",
        "是的，我们有很多可以合作的领域",
      ],
      vocabulary: [
        {
          word: "双边",
          translation: "bilateral",
          pronunciation: "shuāng biān",
          partOfSpeech: "adjective",
        },
        {
          word: "加强",
          translation: "to strengthen/enhance",
          pronunciation: "jiā qiáng",
          partOfSpeech: "verb",
        },
        {
          word: "合作",
          translation: "cooperation/to cooperate",
          pronunciation: "hé zuò",
          partOfSpeech: "noun",
        },
        {
          word: "等方面",
          translation: "and other aspects/areas such as",
          pronunciation: "děng fāng miàn",
          partOfSpeech: "phrase",
        },
        {
          word: "完全同意",
          translation: "completely agree",
          pronunciation: "wán quán tóng yì",
          partOfSpeech: "phrase",
        },
      ],
      grammarNote:
        "'在...等方面' means 'in areas such as...'. '等' (děng) functions like 'etc.' and indicates the list is not exhaustive: '在儿童保护、平台治理和技术标准等方面' (in areas such as child protection, platform governance, and technical standards).",
      difficulty: "hard",
    },
    {
      id: 6,
      avatarLine:
        "当然，监管工作也面临很多挑战。您认为目前最大的挑战是什么？",
      avatarLineEn:
        "Of course, regulatory work also faces many challenges. What do you think is the biggest challenge at the moment?",
      expectedUserPhrase:
        "最大的挑战是技术的快速发展，特别是人工智能的应用，要求监管机构不断适应新的形势。",
      expectedUserPhraseEn:
        "The biggest challenge is the rapid development of technology, especially the application of artificial intelligence, which requires regulators to constantly adapt to new situations.",
      pronunciationGuide:
        "Zuìdà de tiǎozhàn shì jìshù de kuàisù fāzhǎn, tèbié shì réngōng zhìnéng de yìngyòng, yāoqiú jiānguǎn jīgòu bùduàn shìyìng xīn de xíngshì.",
      acceptableVariations: [
        "技术发展太快是最大的挑战，尤其是人工智能",
        "最大挑战是跟上技术变化的速度，特别是AI方面",
        "人工智能等新技术的快速发展给监管带来很大挑战",
      ],
      vocabulary: [
        {
          word: "挑战",
          translation: "challenge",
          pronunciation: "tiǎo zhàn",
          partOfSpeech: "noun",
        },
        {
          word: "人工智能",
          translation: "artificial intelligence",
          pronunciation: "rén gōng zhì néng",
          partOfSpeech: "noun",
        },
        {
          word: "快速发展",
          translation: "rapid development",
          pronunciation: "kuài sù fā zhǎn",
          partOfSpeech: "noun",
        },
        {
          word: "不断",
          translation: "constantly/continuously",
          pronunciation: "bù duàn",
          partOfSpeech: "adverb",
        },
        {
          word: "适应",
          translation: "to adapt to",
          pronunciation: "shì yìng",
          partOfSpeech: "verb",
        },
      ],
      grammarNote:
        "'特别是' (tèbié shì) means 'especially' and introduces a specific example: '特别是人工智能的应用' (especially the application of AI). '不断' (bùduàn) means 'continuously' and emphasises an ongoing effort.",
      difficulty: "hard",
    },
    {
      id: 7,
      avatarLine:
        "说得很对。感谢您今天的坦诚交流。希望我们能建立长期的合作机制。期待下次会面！",
      avatarLineEn:
        "Well said. Thank you for today's candid exchange. I hope we can establish a long-term cooperation mechanism. Looking forward to our next meeting!",
      expectedUserPhrase: "",
      expectedUserPhraseEn: "",
      pronunciationGuide: "",
      acceptableVariations: [],
      vocabulary: [
        {
          word: "坦诚",
          translation: "candid/frank",
          pronunciation: "tǎn chéng",
          partOfSpeech: "adjective",
        },
        {
          word: "长期",
          translation: "long-term",
          pronunciation: "cháng qī",
          partOfSpeech: "adjective",
        },
        {
          word: "机制",
          translation: "mechanism",
          pronunciation: "jī zhì",
          partOfSpeech: "noun",
        },
      ],
      grammarNote:
        "'建立' (jiànlì) means 'to establish' and is commonly paired with formal nouns like '机制' (mechanism), '关系' (relationship), or '合作' (cooperation). '长期的合作机制' follows the modifier-before-noun pattern.",
      difficulty: "hard",
    },
  ],
};
