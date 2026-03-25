import type { Scenario } from "@/lib/types";

export const ofcomPanelZhScenario: Scenario = {
  id: "ofcom-panel-zh",
  title: "Conference Panel",
  titleEs: "大会论坛发言",
  titleLocal: "大会论坛发言",
  description:
    "Participate as a panellist at the World Internet Conference, answering a moderator's questions on online safety regulation. Practice presenting complex regulatory ideas in formal Mandarin.",
  setting: "Main forum stage at the World Internet Conference in Wuzhen",
  language: "zh",
  turns: [
    {
      id: 1,
      avatarLine:
        "各位嘉宾、各位代表，欢迎参加本次论坛。首先请英国通信管理局的代表做自我介绍。",
      avatarLineEn:
        "Distinguished guests and delegates, welcome to this forum. First, may I ask the representative from Ofcom to introduce yourself.",
      expectedUserPhrase:
        "谢谢主持人。各位好，我是英国通信管理局的代表，负责网络安全监管政策。很荣幸参加今天的论坛。",
      expectedUserPhraseEn:
        "Thank you, moderator. Hello everyone, I am the representative from Ofcom, responsible for online safety regulatory policy. It is an honour to participate in today's forum.",
      pronunciationGuide:
        "Xièxiè zhǔchí rén. Gè wèi hǎo, wǒ shì Yīngguó Tōngxìn Guǎnlǐ Jú de dàibiǎo, fùzé wǎngluò ānquán jiānguǎn zhèngcè. Hěn róngxìng cānjiā jīntiān de lùntán.",
      acceptableVariations: [
        "感谢主持人，大家好，我来自英国通信管理局",
        "谢谢，各位嘉宾好，我代表英国通信管理局",
        "谢谢主持人，很荣幸来到这里，我负责Ofcom的网络安全政策",
      ],
      vocabulary: [
        {
          word: "嘉宾",
          translation: "distinguished guest",
          pronunciation: "jiā bīn",
          partOfSpeech: "noun",
        },
        {
          word: "主持人",
          translation: "moderator/host",
          pronunciation: "zhǔ chí rén",
          partOfSpeech: "noun",
        },
        {
          word: "论坛",
          translation: "forum",
          pronunciation: "lùn tán",
          partOfSpeech: "noun",
        },
        {
          word: "自我介绍",
          translation: "self-introduction",
          pronunciation: "zì wǒ jiè shào",
          partOfSpeech: "noun",
        },
        {
          word: "各位",
          translation: "everyone (formal)",
          pronunciation: "gè wèi",
          partOfSpeech: "pronoun",
        },
      ],
      grammarNote:
        "'各位' (gè wèi) is a formal way to address an audience, more respectful than '大家' (dàjiā). '各位嘉宾' (distinguished guests) and '各位代表' (delegates) are common conference openings.",
      difficulty: "hard",
    },
    {
      id: 2,
      avatarLine:
        "谢谢。请问英国通信管理局在网络安全监管方面的首要任务是什么？",
      avatarLineEn:
        "Thank you. What are Ofcom's top priorities in online safety regulation?",
      expectedUserPhrase:
        "我们的首要任务是保护用户安全，特别是儿童安全，同时促进创新和言论自由之间的平衡。",
      expectedUserPhraseEn:
        "Our top priority is protecting user safety, especially children's safety, while promoting a balance between innovation and freedom of expression.",
      pronunciationGuide:
        "Wǒmen de shǒuyào rènwù shì bǎohù yònghù ānquán, tèbié shì értóng ānquán, tóngshí cùjìn chuàngxīn hé yánlùn zìyóu zhījiān de pínghéng.",
      acceptableVariations: [
        "保护用户尤其是儿童的安全是我们的首要任务",
        "我们最重要的任务是保护儿童安全，同时平衡创新",
        "首要任务是用户安全和创新之间的平衡",
      ],
      vocabulary: [
        {
          word: "首要任务",
          translation: "top priority",
          pronunciation: "shǒu yào rèn wù",
          partOfSpeech: "noun",
        },
        {
          word: "促进",
          translation: "to promote/facilitate",
          pronunciation: "cù jìn",
          partOfSpeech: "verb",
        },
        {
          word: "创新",
          translation: "innovation",
          pronunciation: "chuàng xīn",
          partOfSpeech: "noun",
        },
        {
          word: "言论自由",
          translation: "freedom of expression",
          pronunciation: "yán lùn zì yóu",
          partOfSpeech: "noun",
        },
        {
          word: "平衡",
          translation: "balance",
          pronunciation: "píng héng",
          partOfSpeech: "noun",
        },
      ],
      grammarNote:
        "'...之间的平衡' (zhījiān de pínghéng) means 'the balance between...'. '之间' means 'between' and connects two or more nouns: '创新和言论自由之间' (between innovation and freedom of expression).",
      difficulty: "hard",
    },
    {
      id: 3,
      avatarLine: "儿童保护确实是全球关注的焦点。英国在这方面有哪些具体举措？",
      avatarLineEn:
        "Child protection is indeed a global focus. What specific measures has the UK taken in this area?",
      expectedUserPhrase:
        "《网络安全法案》要求平台进行儿童风险评估，实施年龄验证，并限制儿童接触有害内容。",
      expectedUserPhraseEn:
        "The Online Safety Act requires platforms to conduct children's risk assessments, implement age verification, and restrict children's exposure to harmful content.",
      pronunciationGuide:
        "Wǎngluò Ānquán Fǎ'àn yāoqiú píngtái jìnxíng értóng fēngxiǎn pínggū, shíshī niánlíng yànzhèng, bìng xiànzhì értóng jiēchù yǒuhài nèiróng.",
      acceptableVariations: [
        "法案要求平台评估儿童风险，验证年龄，限制有害内容",
        "我们要求平台做儿童风险评估和年龄验证",
        "具体措施包括风险评估、年龄验证和内容限制",
      ],
      vocabulary: [
        {
          word: "风险评估",
          translation: "risk assessment",
          pronunciation: "fēng xiǎn píng gū",
          partOfSpeech: "noun",
        },
        {
          word: "限制",
          translation: "to restrict/limit",
          pronunciation: "xiàn zhì",
          partOfSpeech: "verb",
        },
        {
          word: "接触",
          translation: "to be exposed to/come into contact with",
          pronunciation: "jiē chù",
          partOfSpeech: "verb",
        },
        {
          word: "举措",
          translation: "measures/initiatives",
          pronunciation: "jǔ cuò",
          partOfSpeech: "noun",
        },
        {
          word: "焦点",
          translation: "focus/focal point",
          pronunciation: "jiāo diǎn",
          partOfSpeech: "noun",
        },
      ],
      grammarNote:
        "When listing a series of required actions, use '并' (bìng) to connect the last item: '进行评估，实施验证，并限制接触' (conduct assessments, implement verification, and restrict exposure). This creates a formal parallel structure.",
      difficulty: "hard",
    },
    {
      id: 4,
      avatarLine:
        "有人认为严格的监管会阻碍创新。您如何看待监管与创新之间的关系？",
      avatarLineEn:
        "Some argue that strict regulation hinders innovation. How do you view the relationship between regulation and innovation?",
      expectedUserPhrase:
        "我们认为良好的监管不会阻碍创新，反而可以为创新提供一个安全、可信赖的环境，增强用户信心。",
      expectedUserPhraseEn:
        "We believe good regulation does not hinder innovation. On the contrary, it can provide a safe, trustworthy environment for innovation and enhance user confidence.",
      pronunciationGuide:
        "Wǒmen rènwéi liánghǎo de jiānguǎn bù huì zǔ'ài chuàngxīn, fǎn'ér kěyǐ wèi chuàngxīn tígōng yī gè ānquán, kě xìnlài de huánjìng, zēngqiáng yònghù xìnxīn.",
      acceptableVariations: [
        "好的监管不会阻碍创新，反而能促进创新",
        "监管和创新不矛盾，好的监管能增强用户信心",
        "我们相信监管可以为创新提供安全的环境",
      ],
      vocabulary: [
        {
          word: "阻碍",
          translation: "to hinder/obstruct",
          pronunciation: "zǔ ài",
          partOfSpeech: "verb",
        },
        {
          word: "反而",
          translation: "on the contrary/instead",
          pronunciation: "fǎn ér",
          partOfSpeech: "adverb",
        },
        {
          word: "可信赖",
          translation: "trustworthy/reliable",
          pronunciation: "kě xìn lài",
          partOfSpeech: "adjective",
        },
        {
          word: "环境",
          translation: "environment",
          pronunciation: "huán jìng",
          partOfSpeech: "noun",
        },
        {
          word: "信心",
          translation: "confidence",
          pronunciation: "xìn xīn",
          partOfSpeech: "noun",
        },
      ],
      grammarNote:
        "'不会...反而...' is a powerful rhetorical structure meaning 'will not... on the contrary...'. It is used to counter an argument: '不会阻碍创新，反而可以提供安全环境' (will not hinder innovation; on the contrary, can provide a safe environment).",
      difficulty: "hard",
    },
    {
      id: 5,
      avatarLine: "在与平台的合作方面，英国通信管理局有哪些成功的经验？",
      avatarLineEn:
        "What successful experience does Ofcom have in working with platforms?",
      expectedUserPhrase:
        "我们通过公开咨询和行业对话制定行为准则，鼓励平台积极参与监管框架的设计。",
      expectedUserPhraseEn:
        "We develop codes of practice through public consultations and industry dialogue, encouraging platforms to actively participate in designing the regulatory framework.",
      pronunciationGuide:
        "Wǒmen tōngguò gōngkāi zīxún hé hángyè duìhuà zhìdìng xíngwéi zhǔnzé, gǔlì píngtái jījí cānyù jiānguǎn kuàngjià de shèjì.",
      acceptableVariations: [
        "我们通过公开咨询来制定准则，让平台参与设计",
        "行业对话和公开咨询是我们与平台合作的方式",
        "我们鼓励平台参与监管框架的制定过程",
      ],
      vocabulary: [
        {
          word: "公开咨询",
          translation: "public consultation",
          pronunciation: "gōng kāi zī xún",
          partOfSpeech: "noun",
        },
        {
          word: "对话",
          translation: "dialogue",
          pronunciation: "duì huà",
          partOfSpeech: "noun",
        },
        {
          word: "设计",
          translation: "to design/design",
          pronunciation: "shè jì",
          partOfSpeech: "verb",
        },
        {
          word: "框架",
          translation: "framework",
          pronunciation: "kuàng jià",
          partOfSpeech: "noun",
        },
        {
          word: "咨询",
          translation: "consultation",
          pronunciation: "zī xún",
          partOfSpeech: "noun",
        },
      ],
      grammarNote:
        "'通过...制定...' means 'to formulate/develop through...'. The method comes first after '通过', then the result: '通过公开咨询制定行为准则' (develop codes of practice through public consultations).",
      difficulty: "hard",
    },
    {
      id: 6,
      avatarLine:
        "最后一个问题：展望未来，您认为网络安全监管的发展方向是什么？",
      avatarLineEn:
        "One final question: looking ahead, what do you think is the future direction of online safety regulation?",
      expectedUserPhrase:
        "未来的方向是加强国际合作，建立全球性的监管标准，同时利用人工智能等技术提升监管效率。",
      expectedUserPhraseEn:
        "The future direction is to strengthen international cooperation, establish global regulatory standards, and leverage technologies such as artificial intelligence to improve regulatory efficiency.",
      pronunciationGuide:
        "Wèilái de fāngxiàng shì jiāqiáng guójì hézuò, jiànlì quánqiú xìng de jiānguǎn biāozhǔn, tóngshí lìyòng réngōng zhìnéng děng jìshù tíshēng jiānguǎn xiàolǜ.",
      acceptableVariations: [
        "我认为未来要加强国际合作和全球标准建设",
        "方向是国际合作、全球标准和利用AI提升效率",
        "加强合作、建立标准和应用新技术是未来的重点",
      ],
      vocabulary: [
        {
          word: "展望",
          translation: "to look ahead/outlook",
          pronunciation: "zhǎn wàng",
          partOfSpeech: "verb",
        },
        {
          word: "方向",
          translation: "direction",
          pronunciation: "fāng xiàng",
          partOfSpeech: "noun",
        },
        {
          word: "全球性",
          translation: "global (in nature)",
          pronunciation: "quán qiú xìng",
          partOfSpeech: "adjective",
        },
        {
          word: "利用",
          translation: "to leverage/utilise",
          pronunciation: "lì yòng",
          partOfSpeech: "verb",
        },
        {
          word: "效率",
          translation: "efficiency",
          pronunciation: "xiào lǜ",
          partOfSpeech: "noun",
        },
      ],
      grammarNote:
        "'建立' (jiànlì) means 'to establish/build' and is commonly used with abstract concepts: '建立标准' (establish standards), '建立机制' (establish a mechanism). '利用...提升...' means 'leverage... to improve...'.",
      difficulty: "hard",
    },
    {
      id: 7,
      avatarLine:
        "非常精彩的发言！感谢英国通信管理局代表的分享。让我们以热烈的掌声感谢所有嘉宾！",
      avatarLineEn:
        "Brilliant remarks! Thank you for the contribution from the Ofcom representative. Let's give a warm round of applause to thank all our panellists!",
      expectedUserPhrase: "",
      expectedUserPhraseEn: "",
      pronunciationGuide: "",
      acceptableVariations: [],
      vocabulary: [
        {
          word: "精彩",
          translation: "brilliant/wonderful",
          pronunciation: "jīng cǎi",
          partOfSpeech: "adjective",
        },
        {
          word: "发言",
          translation: "remarks/speech",
          pronunciation: "fā yán",
          partOfSpeech: "noun",
        },
        {
          word: "掌声",
          translation: "applause",
          pronunciation: "zhǎng shēng",
          partOfSpeech: "noun",
        },
      ],
      grammarNote:
        "'让我们' (ràng wǒmen) means 'let us' and is used to invite collective action: '让我们以热烈的掌声感谢' (let us thank with warm applause). '热烈' (rèliè) means 'warm/enthusiastic' and is commonly paired with '掌声'.",
      difficulty: "hard",
    },
  ],
};
