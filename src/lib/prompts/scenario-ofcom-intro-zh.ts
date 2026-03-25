import type { Scenario } from "@/lib/types";

export const ofcomIntroZhScenario: Scenario = {
  id: "ofcom-intro-zh",
  title: "Introducing Ofcom",
  titleEs: "介绍英国通信管理局",
  titleLocal: "介绍英国通信管理局",
  description:
    "Introduce yourself and explain Ofcom's role to a Chinese delegate at an international conference. Practice basic professional Mandarin for regulatory discussions.",
  setting: "Reception area at the World Internet Conference in Beijing",
  language: "zh",
  turns: [
    {
      id: 1,
      avatarLine: "你好！欢迎来到世界互联网大会。请问您是哪个机构的？",
      avatarLineEn:
        "Hello! Welcome to the World Internet Conference. Which organisation are you from?",
      expectedUserPhrase: "你好！我是英国通信管理局的代表。",
      expectedUserPhraseEn: "Hello! I am a representative from Ofcom, the UK communications regulator.",
      pronunciationGuide: "Nǐ hǎo! Wǒ shì Yīngguó Tōngxìn Guǎnlǐ Jú de dàibiǎo.",
      acceptableVariations: [
        "你好，我来自英国通信管理局",
        "你好！我是Ofcom的代表",
        "你好，我代表英国通信管理局",
      ],
      vocabulary: [
        {
          word: "世界互联网大会",
          translation: "World Internet Conference",
          pronunciation: "shì jiè hù lián wǎng dà huì",
          partOfSpeech: "noun",
        },
        {
          word: "机构",
          translation: "organisation/institution",
          pronunciation: "jī gòu",
          partOfSpeech: "noun",
        },
        {
          word: "英国通信管理局",
          translation: "Ofcom (UK communications regulator)",
          pronunciation: "Yīngguó Tōngxìn Guǎnlǐ Jú",
          partOfSpeech: "noun",
        },
        {
          word: "代表",
          translation: "representative/delegate",
          pronunciation: "dài biǎo",
          partOfSpeech: "noun",
        },
      ],
      grammarNote:
        "'是...的' is a common structure to emphasise a fact. '我是英国通信管理局的代表' literally means 'I am Ofcom's representative'. The particle '的' (de) shows possession or belonging.",
      difficulty: "easy",
    },
    {
      id: 2,
      avatarLine: "英国通信管理局？请问你们的职责是什么？",
      avatarLineEn: "Ofcom? What are your responsibilities?",
      expectedUserPhrase: "我们是英国的通信监管机构，负责监管通信行业。",
      expectedUserPhraseEn:
        "We are the UK's communications regulatory body, responsible for regulating the communications industry.",
      pronunciationGuide:
        "Wǒmen shì Yīngguó de tōngxìn jiānguǎn jīgòu, fùzé jiānguǎn tōngxìn hángyè.",
      acceptableVariations: [
        "我们负责监管英国的通信行业",
        "我们是英国通信行业的监管者",
        "英国通信管理局负责监管通信领域",
      ],
      vocabulary: [
        {
          word: "职责",
          translation: "responsibilities/duties",
          pronunciation: "zhí zé",
          partOfSpeech: "noun",
        },
        {
          word: "监管",
          translation: "to regulate/supervise",
          pronunciation: "jiān guǎn",
          partOfSpeech: "verb",
        },
        {
          word: "通信",
          translation: "communications",
          pronunciation: "tōng xìn",
          partOfSpeech: "noun",
        },
        {
          word: "负责",
          translation: "to be responsible for",
          pronunciation: "fù zé",
          partOfSpeech: "verb",
        },
        {
          word: "行业",
          translation: "industry/sector",
          pronunciation: "háng yè",
          partOfSpeech: "noun",
        },
      ],
      grammarNote:
        "'负责' (fùzé) means 'to be responsible for' and is followed directly by the thing one is responsible for: '负责监管通信行业' (responsible for regulating the communications industry). No preposition is needed.",
      difficulty: "easy",
    },
    {
      id: 3,
      avatarLine: "明白了。你们具体监管哪些领域？",
      avatarLineEn: "I see. Which specific areas do you regulate?",
      expectedUserPhrase: "我们监管电信、广播、邮政、频谱和网络安全。",
      expectedUserPhraseEn:
        "We regulate telecoms, broadcasting, postal services, spectrum, and online safety.",
      pronunciationGuide:
        "Wǒmen jiānguǎn diànxìn, guǎngbō, yóuzhèng, pínpǔ hé wǎngluò ānquán.",
      acceptableVariations: [
        "我们的监管范围包括电信、广播、邮政和网络安全",
        "电信、广播、邮政、频谱管理和网络安全都是我们的职责",
        "我们负责电信、广播、邮政、频谱和网络安全方面的监管",
      ],
      vocabulary: [
        {
          word: "电信",
          translation: "telecommunications",
          pronunciation: "diàn xìn",
          partOfSpeech: "noun",
        },
        {
          word: "广播",
          translation: "broadcasting",
          pronunciation: "guǎng bō",
          partOfSpeech: "noun",
        },
        {
          word: "邮政",
          translation: "postal services",
          pronunciation: "yóu zhèng",
          partOfSpeech: "noun",
        },
        {
          word: "频谱",
          translation: "spectrum",
          pronunciation: "pín pǔ",
          partOfSpeech: "noun",
        },
        {
          word: "网络安全",
          translation: "online safety",
          pronunciation: "wǎng luò ān quán",
          partOfSpeech: "noun",
        },
      ],
      grammarNote:
        "When listing items in Chinese, use the Chinese comma '、' (dùn hào) between items in a series, and '和' (hé, meaning 'and') before the last item. This is similar to the Oxford comma convention in English.",
      difficulty: "easy",
    },
    {
      id: 4,
      avatarLine: "范围很广啊！您这次来参加大会有什么目的？",
      avatarLineEn:
        "That's a wide scope! What is your purpose in attending this conference?",
      expectedUserPhrase: "我们希望与各国监管机构交流经验，讨论国际合作。",
      expectedUserPhraseEn:
        "We hope to exchange experiences with regulators from various countries and discuss international cooperation.",
      pronunciationGuide:
        "Wǒmen xīwàng yǔ gè guó jiānguǎn jīgòu jiāoliú jīngyàn, tǎolùn guójì hézuò.",
      acceptableVariations: [
        "我来交流监管经验，探讨国际合作",
        "我们想和其他国家的监管机构交流",
        "主要是来交流经验和讨论合作",
      ],
      vocabulary: [
        {
          word: "希望",
          translation: "to hope/wish",
          pronunciation: "xī wàng",
          partOfSpeech: "verb",
        },
        {
          word: "交流",
          translation: "to exchange/communicate",
          pronunciation: "jiāo liú",
          partOfSpeech: "verb",
        },
        {
          word: "经验",
          translation: "experience",
          pronunciation: "jīng yàn",
          partOfSpeech: "noun",
        },
        {
          word: "国际合作",
          translation: "international cooperation",
          pronunciation: "guó jì hé zuò",
          partOfSpeech: "noun",
        },
        {
          word: "各国",
          translation: "various countries",
          pronunciation: "gè guó",
          partOfSpeech: "noun",
        },
      ],
      grammarNote:
        "'与' (yǔ) is a formal equivalent of '和' (hé), meaning 'with'. It is preferred in professional and written contexts: '与各国监管机构交流' (exchange with regulators from various countries).",
      difficulty: "medium",
    },
    {
      id: 5,
      avatarLine: "非常好！请问您在英国通信管理局担任什么职务？",
      avatarLineEn: "Excellent! What position do you hold at Ofcom?",
      expectedUserPhrase: "我是网络安全部门的政策顾问。",
      expectedUserPhraseEn: "I am a policy adviser in the online safety division.",
      pronunciationGuide: "Wǒ shì wǎngluò ānquán bùmén de zhèngcè gùwèn.",
      acceptableVariations: [
        "我在网络安全部门工作，是政策顾问",
        "我担任网络安全方面的政策顾问",
        "我负责网络安全政策方面的工作",
      ],
      vocabulary: [
        {
          word: "担任",
          translation: "to hold (a position)/to serve as",
          pronunciation: "dān rèn",
          partOfSpeech: "verb",
        },
        {
          word: "职务",
          translation: "position/role",
          pronunciation: "zhí wù",
          partOfSpeech: "noun",
        },
        {
          word: "部门",
          translation: "department/division",
          pronunciation: "bù mén",
          partOfSpeech: "noun",
        },
        {
          word: "政策",
          translation: "policy",
          pronunciation: "zhèng cè",
          partOfSpeech: "noun",
        },
        {
          word: "顾问",
          translation: "adviser/consultant",
          pronunciation: "gù wèn",
          partOfSpeech: "noun",
        },
      ],
      grammarNote:
        "In Chinese, the modifier always comes before the noun it modifies: '网络安全部门的政策顾问' (online safety department's policy adviser). Multiple modifiers stack from left to right, each connected by '的'.",
      difficulty: "easy",
    },
    {
      id: 6,
      avatarLine:
        "太好了！我对英国的网络安全监管很感兴趣。希望之后有机会深入交流。",
      avatarLineEn:
        "Wonderful! I'm very interested in the UK's online safety regulation. I hope we'll have a chance to discuss it further later.",
      expectedUserPhrase: "当然！非常期待。这是我的名片。",
      expectedUserPhraseEn:
        "Of course! I look forward to it. Here is my business card.",
      pronunciationGuide: "Dāngrán! Fēicháng qīdài. Zhè shì wǒ de míngpiàn.",
      acceptableVariations: [
        "好的，非常期待，这是我的名片",
        "当然可以，这是我的名片",
        "我也很期待，请收下我的名片",
        "非常期待进一步交流",
      ],
      vocabulary: [
        {
          word: "感兴趣",
          translation: "to be interested in",
          pronunciation: "gǎn xìng qù",
          partOfSpeech: "verb",
        },
        {
          word: "期待",
          translation: "to look forward to",
          pronunciation: "qī dài",
          partOfSpeech: "verb",
        },
        {
          word: "名片",
          translation: "business card",
          pronunciation: "míng piàn",
          partOfSpeech: "noun",
        },
        {
          word: "深入",
          translation: "in-depth/thorough",
          pronunciation: "shēn rù",
          partOfSpeech: "adjective",
        },
      ],
      grammarNote:
        "'非常' (fēicháng) is an intensifier meaning 'very/extremely'. It comes before the adjective or verb: '非常期待' (very much look forward to). '这是...' (zhè shì) means 'this is...' and is used when presenting something.",
      difficulty: "easy",
    },
    {
      id: 7,
      avatarLine: "谢谢！很高兴认识您。祝您大会顺利！再见！",
      avatarLineEn:
        "Thank you! Nice to meet you. Wish you a successful conference! Goodbye!",
      expectedUserPhrase: "",
      expectedUserPhraseEn: "",
      pronunciationGuide: "",
      acceptableVariations: [],
      vocabulary: [
        {
          word: "认识",
          translation: "to get to know/to meet",
          pronunciation: "rèn shí",
          partOfSpeech: "verb",
        },
        {
          word: "顺利",
          translation: "smooth/successful",
          pronunciation: "shùn lì",
          partOfSpeech: "adjective",
        },
        {
          word: "再见",
          translation: "goodbye",
          pronunciation: "zài jiàn",
          partOfSpeech: "interjection",
        },
      ],
      grammarNote:
        "'很高兴认识您' (hěn gāoxìng rènshí nín) is a formal way to say 'Nice to meet you'. '您' (nín) is the polite form of '你' (nǐ), used in professional and formal settings to show respect.",
      difficulty: "easy",
    },
  ],
};
