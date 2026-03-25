import type { Scenario } from "@/lib/types";

export const ofcomOsaZhScenario: Scenario = {
  id: "ofcom-osa-zh",
  title: "The Online Safety Act",
  titleEs: "网络安全法案",
  titleLocal: "网络安全法案",
  description:
    "Explain the UK Online Safety Act to a Chinese tech policy researcher during a conference tea break. Practice discussing legislation and regulatory frameworks in Mandarin.",
  setting: "Tea break area at the China Internet Governance Forum in Shanghai",
  language: "zh",
  turns: [
    {
      id: 1,
      avatarLine:
        "您好！我是上海互联网研究院的研究员。听说英国最近通过了一项重要的网络安全法案？",
      avatarLineEn:
        "Hello! I'm a researcher at the Shanghai Internet Research Institute. I heard the UK recently passed an important online safety act?",
      expectedUserPhrase:
        "是的，英国在2023年通过了《网络安全法案》，这是一项重要的立法。",
      expectedUserPhraseEn:
        "Yes, the UK passed the Online Safety Act in 2023. It is an important piece of legislation.",
      pronunciationGuide:
        "Shì de, Yīngguó zài èr líng èr sān nián tōngguò le Wǎngluò Ānquán Fǎ'àn, zhè shì yī xiàng zhòngyào de lìfǎ.",
      acceptableVariations: [
        "对，2023年英国通过了网络安全法案",
        "没错，英国的网络安全法案是2023年通过的",
        "是的，这是英国2023年通过的一项重要法律",
      ],
      vocabulary: [
        {
          word: "研究员",
          translation: "researcher",
          pronunciation: "yán jiū yuán",
          partOfSpeech: "noun",
        },
        {
          word: "通过",
          translation: "to pass (legislation)",
          pronunciation: "tōng guò",
          partOfSpeech: "verb",
        },
        {
          word: "法案",
          translation: "act/bill",
          pronunciation: "fǎ àn",
          partOfSpeech: "noun",
        },
        {
          word: "立法",
          translation: "legislation",
          pronunciation: "lì fǎ",
          partOfSpeech: "noun",
        },
        {
          word: "重要",
          translation: "important",
          pronunciation: "zhòng yào",
          partOfSpeech: "adjective",
        },
      ],
      grammarNote:
        "'在...年' is used to indicate a specific year: '在2023年通过了' (passed in 2023). The particle '了' (le) after the verb indicates completed action, similar to past tense in English.",
      difficulty: "medium",
    },
    {
      id: 2,
      avatarLine: "这个法案的主要内容是什么？对平台有哪些要求？",
      avatarLineEn:
        "What are the main contents of this act? What requirements does it place on platforms?",
      expectedUserPhrase:
        "法案要求平台履行违法内容义务，必须采取措施防止违法内容的传播。",
      expectedUserPhraseEn:
        "The act requires platforms to fulfil illegal content duties. They must take measures to prevent the spread of illegal content.",
      pronunciationGuide:
        "Fǎ'àn yāoqiú píngtái lǚxíng wéifǎ nèiróng yìwù, bìxū cǎiqǔ cuòshī fángzhǐ wéifǎ nèiróng de chuánbō.",
      acceptableVariations: [
        "平台必须采取措施处理违法内容",
        "法案规定平台有义务防止违法内容传播",
        "主要是要求平台处理违法内容，防止其传播",
      ],
      vocabulary: [
        {
          word: "平台",
          translation: "platform",
          pronunciation: "píng tái",
          partOfSpeech: "noun",
        },
        {
          word: "义务",
          translation: "duty/obligation",
          pronunciation: "yì wù",
          partOfSpeech: "noun",
        },
        {
          word: "违法",
          translation: "illegal/unlawful",
          pronunciation: "wéi fǎ",
          partOfSpeech: "adjective",
        },
        {
          word: "措施",
          translation: "measures/steps",
          pronunciation: "cuò shī",
          partOfSpeech: "noun",
        },
        {
          word: "传播",
          translation: "spread/dissemination",
          pronunciation: "chuán bō",
          partOfSpeech: "noun",
        },
      ],
      grammarNote:
        "'要求...履行...义务' is a formal structure meaning 'require someone to fulfil obligations'. '必须' (bìxū) means 'must' and indicates a strong obligation: '必须采取措施' (must take measures).",
      difficulty: "medium",
    },
    {
      id: 3,
      avatarLine: "儿童保护方面呢？法案有什么具体规定？",
      avatarLineEn:
        "What about child protection? What specific provisions does the act have?",
      expectedUserPhrase:
        "法案对儿童安全有专门的义务要求，平台必须保护未成年人免受有害内容的影响。",
      expectedUserPhraseEn:
        "The act has specific duty requirements for children's safety. Platforms must protect minors from exposure to harmful content.",
      pronunciationGuide:
        "Fǎ'àn duì értóng ānquán yǒu zhuānmén de yìwù yāoqiú, píngtái bìxū bǎohù wèi chéngnián rén miǎn shòu yǒuhài nèiróng de yǐngxiǎng.",
      acceptableVariations: [
        "平台必须保护儿童免受有害内容影响",
        "法案要求平台采取措施保护未成年人",
        "在儿童安全方面，平台有专门的保护义务",
      ],
      vocabulary: [
        {
          word: "儿童",
          translation: "children",
          pronunciation: "ér tóng",
          partOfSpeech: "noun",
        },
        {
          word: "未成年人",
          translation: "minors",
          pronunciation: "wèi chéng nián rén",
          partOfSpeech: "noun",
        },
        {
          word: "有害",
          translation: "harmful",
          pronunciation: "yǒu hài",
          partOfSpeech: "adjective",
        },
        {
          word: "保护",
          translation: "to protect",
          pronunciation: "bǎo hù",
          partOfSpeech: "verb",
        },
        {
          word: "免受",
          translation: "to be free from/protected from",
          pronunciation: "miǎn shòu",
          partOfSpeech: "verb",
        },
      ],
      grammarNote:
        "'对...有...' means 'to have something regarding/for': '对儿童安全有专门的义务' (have specific duties regarding children's safety). '免受...影响' means 'free from the influence of...' and is a formal expression.",
      difficulty: "medium",
    },
    {
      id: 4,
      avatarLine: "年龄验证是一个热门话题。英国的法案在这方面有什么规定？",
      avatarLineEn:
        "Age verification is a hot topic. What does the UK act stipulate in this regard?",
      expectedUserPhrase:
        "法案要求平台实施年龄验证措施，确保未成年人无法访问不适当的内容。",
      expectedUserPhraseEn:
        "The act requires platforms to implement age verification measures to ensure minors cannot access inappropriate content.",
      pronunciationGuide:
        "Fǎ'àn yāoqiú píngtái shíshī niánlíng yànzhèng cuòshī, quèbǎo wèi chéngnián rén wúfǎ fǎngwèn bù shìdàng de nèiróng.",
      acceptableVariations: [
        "平台需要实施年龄验证，防止未成年人接触不适当内容",
        "法案规定平台必须验证用户年龄",
        "年龄验证是法案的重要组成部分",
      ],
      vocabulary: [
        {
          word: "年龄验证",
          translation: "age verification",
          pronunciation: "nián líng yàn zhèng",
          partOfSpeech: "noun",
        },
        {
          word: "实施",
          translation: "to implement",
          pronunciation: "shí shī",
          partOfSpeech: "verb",
        },
        {
          word: "确保",
          translation: "to ensure",
          pronunciation: "què bǎo",
          partOfSpeech: "verb",
        },
        {
          word: "访问",
          translation: "to access",
          pronunciation: "fǎng wèn",
          partOfSpeech: "verb",
        },
        {
          word: "不适当",
          translation: "inappropriate",
          pronunciation: "bù shì dàng",
          partOfSpeech: "adjective",
        },
      ],
      grammarNote:
        "'确保' (quèbǎo) means 'to ensure' and is followed by a clause describing the desired outcome: '确保未成年人无法访问' (ensure minors cannot access). '无法' (wúfǎ) means 'unable to' and is more formal than '不能'.",
      difficulty: "medium",
    },
    {
      id: 5,
      avatarLine: "如果平台不遵守法案的规定，会有什么后果？",
      avatarLineEn:
        "What are the consequences if platforms don't comply with the act?",
      expectedUserPhrase:
        "英国通信管理局有权对不合规的平台处以罚款，最高可达其全球营业额的百分之十。",
      expectedUserPhraseEn:
        "Ofcom has the power to impose fines on non-compliant platforms, up to ten percent of their global turnover.",
      pronunciationGuide:
        "Yīngguó Tōngxìn Guǎnlǐ Jú yǒu quán duì bù hé guī de píngtái chù yǐ fákuǎn, zuìgāo kě dá qí quánqiú yíngyè é de bǎi fēn zhī shí.",
      acceptableVariations: [
        "Ofcom可以对违规平台罚款，最高达全球营业额的百分之十",
        "不合规的平台可能面临高额罚款",
        "违规平台可能被处以全球营业额百分之十的罚款",
      ],
      vocabulary: [
        {
          word: "遵守",
          translation: "to comply with",
          pronunciation: "zūn shǒu",
          partOfSpeech: "verb",
        },
        {
          word: "罚款",
          translation: "fine/penalty",
          pronunciation: "fá kuǎn",
          partOfSpeech: "noun",
        },
        {
          word: "合规",
          translation: "compliant/in compliance",
          pronunciation: "hé guī",
          partOfSpeech: "adjective",
        },
        {
          word: "全球营业额",
          translation: "global turnover",
          pronunciation: "quán qiú yíng yè é",
          partOfSpeech: "noun",
        },
        {
          word: "有权",
          translation: "to have the authority/power",
          pronunciation: "yǒu quán",
          partOfSpeech: "verb",
        },
      ],
      grammarNote:
        "'最高可达' (zuìgāo kě dá) means 'can reach a maximum of' and is commonly used in legal and regulatory contexts. '百分之十' is how percentages are expressed in Chinese: '百分之' (percent) + number.",
      difficulty: "hard",
    },
    {
      id: 6,
      avatarLine:
        "这个执法力度很大啊。感谢您的详细介绍，我了解了很多。",
      avatarLineEn:
        "That's strong enforcement. Thank you for the detailed introduction. I've learned a lot.",
      expectedUserPhrase:
        "不客气。如果您想了解更多，欢迎访问我们的网站或联系我。",
      expectedUserPhraseEn:
        "You're welcome. If you'd like to learn more, please visit our website or contact me.",
      pronunciationGuide:
        "Bú kèqì. Rúguǒ nín xiǎng liǎojiě gèng duō, huānyíng fǎngwèn wǒmen de wǎngzhàn huò liánxì wǒ.",
      acceptableVariations: [
        "不客气，欢迎随时联系我",
        "不用谢，我很乐意分享",
        "谢谢您的关注，欢迎进一步交流",
      ],
      vocabulary: [
        {
          word: "执法",
          translation: "enforcement",
          pronunciation: "zhí fǎ",
          partOfSpeech: "noun",
        },
        {
          word: "力度",
          translation: "strength/intensity",
          pronunciation: "lì dù",
          partOfSpeech: "noun",
        },
        {
          word: "了解",
          translation: "to understand/to learn about",
          pronunciation: "liǎo jiě",
          partOfSpeech: "verb",
        },
        {
          word: "网站",
          translation: "website",
          pronunciation: "wǎng zhàn",
          partOfSpeech: "noun",
        },
        {
          word: "联系",
          translation: "to contact",
          pronunciation: "lián xì",
          partOfSpeech: "verb",
        },
      ],
      grammarNote:
        "'如果...欢迎...' is a polite conditional structure: 'If... you are welcome to...'. '欢迎' (huānyíng) literally means 'welcome' and is used to politely invite someone to do something.",
      difficulty: "medium",
    },
    {
      id: 7,
      avatarLine:
        "一定会的！这次交流非常有价值。希望我们保持联系。再见！",
      avatarLineEn:
        "I certainly will! This exchange has been very valuable. I hope we stay in touch. Goodbye!",
      expectedUserPhrase: "",
      expectedUserPhraseEn: "",
      pronunciationGuide: "",
      acceptableVariations: [],
      vocabulary: [
        {
          word: "价值",
          translation: "value",
          pronunciation: "jià zhí",
          partOfSpeech: "noun",
        },
        {
          word: "保持联系",
          translation: "to stay in touch",
          pronunciation: "bǎo chí lián xì",
          partOfSpeech: "phrase",
        },
        {
          word: "一定",
          translation: "certainly/definitely",
          pronunciation: "yī dìng",
          partOfSpeech: "adverb",
        },
      ],
      grammarNote:
        "'保持联系' (bǎochí liánxì) means 'to keep in contact'. '保持' means 'to maintain/keep' and is followed by the thing being maintained. This is a common professional farewell phrase.",
      difficulty: "medium",
    },
  ],
};
