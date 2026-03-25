import type { Scenario } from "@/lib/types";

export const ofcomRoadmapZhScenario: Scenario = {
  id: "ofcom-roadmap-zh",
  title: "Roadmap to Regulation",
  titleEs: "监管路线图",
  titleLocal: "监管路线图",
  description:
    "Discuss Ofcom's phased implementation roadmap for the Online Safety Act with a Chinese regulator. Practice explaining regulatory timelines and processes in Mandarin.",
  setting:
    "Side meeting room at the ITU Plenipotentiary Conference in Shenzhen",
  language: "zh",
  turns: [
    {
      id: 1,
      avatarLine:
        "您好！我是中国工信部的代表。听说您在今天的专题讨论中会谈到英国的网络安全监管路线图？",
      avatarLineEn:
        "Hello! I'm a representative from China's Ministry of Industry and Information Technology. I heard you'll be talking about the UK's online safety regulatory roadmap in today's panel?",
      expectedUserPhrase:
        "是的，我会介绍英国通信管理局的分阶段实施计划。",
      expectedUserPhraseEn:
        "Yes, I will present Ofcom's phased implementation plan.",
      pronunciationGuide:
        "Shì de, wǒ huì jièshào Yīngguó Tōngxìn Guǎnlǐ Jú de fēn jiēduàn shíshī jìhuà.",
      acceptableVariations: [
        "对，我会讲解我们的分阶段实施方案",
        "没错，今天我会介绍Ofcom的监管路线图",
        "是的，我将分享英国的分阶段监管计划",
      ],
      vocabulary: [
        {
          word: "专题讨论",
          translation: "panel discussion/symposium",
          pronunciation: "zhuān tí tǎo lùn",
          partOfSpeech: "noun",
        },
        {
          word: "路线图",
          translation: "roadmap",
          pronunciation: "lù xiàn tú",
          partOfSpeech: "noun",
        },
        {
          word: "分阶段",
          translation: "phased/in stages",
          pronunciation: "fēn jiē duàn",
          partOfSpeech: "adjective",
        },
        {
          word: "实施",
          translation: "to implement/implementation",
          pronunciation: "shí shī",
          partOfSpeech: "verb",
        },
        {
          word: "计划",
          translation: "plan",
          pronunciation: "jì huà",
          partOfSpeech: "noun",
        },
      ],
      grammarNote:
        "'会' (huì) indicates a future action or intention: '我会介绍' (I will present). It is less formal than '将' (jiāng), which can also be used in professional settings for future actions.",
      difficulty: "medium",
    },
    {
      id: 2,
      avatarLine: "为什么选择分阶段实施？能否简要说明一下？",
      avatarLineEn:
        "Why did you choose phased implementation? Could you briefly explain?",
      expectedUserPhrase:
        "分阶段实施可以让平台有足够的时间做好准备，同时确保监管的有效性。",
      expectedUserPhraseEn:
        "Phased implementation allows platforms sufficient time to prepare while ensuring the effectiveness of regulation.",
      pronunciationGuide:
        "Fēn jiēduàn shíshī kěyǐ ràng píngtái yǒu zúgòu de shíjiān zuò hǎo zhǔnbèi, tóngshí quèbǎo jiānguǎn de yǒuxiào xìng.",
      acceptableVariations: [
        "这样平台有时间做好准备，监管也能更有效",
        "分阶段可以确保平台和监管机构都做好准备",
        "分阶段实施让行业有时间适应新的监管要求",
      ],
      vocabulary: [
        {
          word: "足够",
          translation: "sufficient/enough",
          pronunciation: "zú gòu",
          partOfSpeech: "adjective",
        },
        {
          word: "准备",
          translation: "to prepare/preparation",
          pronunciation: "zhǔn bèi",
          partOfSpeech: "verb",
        },
        {
          word: "同时",
          translation: "at the same time/meanwhile",
          pronunciation: "tóng shí",
          partOfSpeech: "adverb",
        },
        {
          word: "有效性",
          translation: "effectiveness",
          pronunciation: "yǒu xiào xìng",
          partOfSpeech: "noun",
        },
        {
          word: "确保",
          translation: "to ensure",
          pronunciation: "què bǎo",
          partOfSpeech: "verb",
        },
      ],
      grammarNote:
        "'让' (ràng) is a causative verb meaning 'to let/allow/make'. The structure is '让 + someone + verb': '让平台有足够的时间' (let platforms have sufficient time). '同时' connects two simultaneous actions or conditions.",
      difficulty: "medium",
    },
    {
      id: 3,
      avatarLine: "我听说你们发布了行为准则。这些准则的作用是什么？",
      avatarLineEn:
        "I heard you've published codes of practice. What is the purpose of these codes?",
      expectedUserPhrase:
        "行为准则为平台提供了具体的指导，帮助它们履行法律义务。",
      expectedUserPhraseEn:
        "The codes of practice provide platforms with specific guidance to help them fulfil their legal obligations.",
      pronunciationGuide:
        "Xíngwéi zhǔnzé wèi píngtái tígōng le jùtǐ de zhǐdǎo, bāngzhù tāmen lǚxíng fǎlǜ yìwù.",
      acceptableVariations: [
        "准则为平台提供了合规的具体指导",
        "行为准则帮助平台了解如何履行义务",
        "这些准则指导平台如何遵守法律要求",
      ],
      vocabulary: [
        {
          word: "行为准则",
          translation: "codes of practice",
          pronunciation: "xíng wéi zhǔn zé",
          partOfSpeech: "noun",
        },
        {
          word: "提供",
          translation: "to provide",
          pronunciation: "tí gōng",
          partOfSpeech: "verb",
        },
        {
          word: "指导",
          translation: "guidance/to guide",
          pronunciation: "zhǐ dǎo",
          partOfSpeech: "noun",
        },
        {
          word: "履行",
          translation: "to fulfil/to carry out",
          pronunciation: "lǚ xíng",
          partOfSpeech: "verb",
        },
        {
          word: "法律义务",
          translation: "legal obligations",
          pronunciation: "fǎ lǜ yì wù",
          partOfSpeech: "noun",
        },
      ],
      grammarNote:
        "'为...提供...' (wèi...tígōng...) means 'to provide something for someone'. '为' is a preposition indicating the beneficiary: '为平台提供指导' (provide guidance for platforms). This is a very common formal structure.",
      difficulty: "medium",
    },
    {
      id: 4,
      avatarLine: "你们是如何对平台进行分类的？",
      avatarLineEn: "How do you categorise the platforms?",
      expectedUserPhrase:
        "我们根据用户规模和风险程度将服务分为不同的类别，大型平台承担更多的义务。",
      expectedUserPhraseEn:
        "We categorise services into different categories based on user numbers and risk level. Larger platforms bear more obligations.",
      pronunciationGuide:
        "Wǒmen gēnjù yònghù guīmó hé fēngxiǎn chéngdù jiāng fúwù fēn wéi bùtóng de lèibié, dàxíng píngtái chéngdān gèng duō de yìwù.",
      acceptableVariations: [
        "平台按规模和风险分类，大平台承担更多义务",
        "我们根据用户数量和风险对平台进行分类",
        "服务按照规模和风险程度分为不同类别",
      ],
      vocabulary: [
        {
          word: "分类",
          translation: "to categorise/classification",
          pronunciation: "fēn lèi",
          partOfSpeech: "verb",
        },
        {
          word: "用户规模",
          translation: "user base/user numbers",
          pronunciation: "yòng hù guī mó",
          partOfSpeech: "noun",
        },
        {
          word: "风险程度",
          translation: "risk level",
          pronunciation: "fēng xiǎn chéng dù",
          partOfSpeech: "noun",
        },
        {
          word: "类别",
          translation: "category",
          pronunciation: "lèi bié",
          partOfSpeech: "noun",
        },
        {
          word: "承担",
          translation: "to bear/to undertake",
          pronunciation: "chéng dān",
          partOfSpeech: "verb",
        },
      ],
      grammarNote:
        "'根据' (gēnjù) means 'based on/according to' and introduces the criteria: '根据用户规模和风险程度' (based on user numbers and risk level). '将...分为...' means 'to divide...into...' and is a common classification structure.",
      difficulty: "hard",
    },
    {
      id: 5,
      avatarLine: "透明度报告方面有什么要求？",
      avatarLineEn:
        "What are the requirements regarding transparency reporting?",
      expectedUserPhrase:
        "大型平台需要定期发布透明度报告，公开其内容审核的数据和措施。",
      expectedUserPhraseEn:
        "Large platforms need to publish transparency reports regularly, disclosing their content moderation data and measures.",
      pronunciationGuide:
        "Dàxíng píngtái xūyào dìngqī fābù tòumíngdù bàogào, gōngkāi qí nèiróng shěnhé de shùjù hé cuòshī.",
      acceptableVariations: [
        "透明度报告要求平台公开内容审核数据",
        "大型平台必须定期报告其内容审核情况",
        "平台需要公开透明度数据和内容审核措施",
      ],
      vocabulary: [
        {
          word: "透明度",
          translation: "transparency",
          pronunciation: "tòu míng dù",
          partOfSpeech: "noun",
        },
        {
          word: "报告",
          translation: "report",
          pronunciation: "bào gào",
          partOfSpeech: "noun",
        },
        {
          word: "定期",
          translation: "regularly/periodically",
          pronunciation: "dìng qī",
          partOfSpeech: "adverb",
        },
        {
          word: "内容审核",
          translation: "content moderation",
          pronunciation: "nèi róng shěn hé",
          partOfSpeech: "noun",
        },
        {
          word: "公开",
          translation: "to disclose/make public",
          pronunciation: "gōng kāi",
          partOfSpeech: "verb",
        },
      ],
      grammarNote:
        "'其' (qí) is a formal pronoun meaning 'its/their', often used in written and professional Chinese instead of '他们的' or '它的': '公开其内容审核的数据' (disclose their content moderation data).",
      difficulty: "medium",
    },
    {
      id: 6,
      avatarLine: "最后一个问题：2026年到2027年有哪些重要的里程碑？",
      avatarLineEn:
        "One last question: what are the important milestones for 2026 to 2027?",
      expectedUserPhrase:
        "2026年至2027年，我们将完成儿童安全义务的全面实施，并开始对大型平台进行透明度审查。",
      expectedUserPhraseEn:
        "From 2026 to 2027, we will complete the full implementation of children's safety duties and begin transparency reviews for large platforms.",
      pronunciationGuide:
        "Èr líng èr liù nián zhì èr líng èr qī nián, wǒmen jiāng wánchéng értóng ānquán yìwù de quánmiàn shíshī, bìng kāishǐ duì dàxíng píngtái jìnxíng tòumíngdù shěnchá.",
      acceptableVariations: [
        "2026到2027年将全面实施儿童安全义务，并进行透明度审查",
        "我们计划在这两年完成儿童保护措施并启动透明度审查",
        "主要里程碑包括儿童安全义务的实施和透明度审查的开始",
      ],
      vocabulary: [
        {
          word: "里程碑",
          translation: "milestone",
          pronunciation: "lǐ chéng bēi",
          partOfSpeech: "noun",
        },
        {
          word: "全面",
          translation: "comprehensive/full",
          pronunciation: "quán miàn",
          partOfSpeech: "adjective",
        },
        {
          word: "完成",
          translation: "to complete",
          pronunciation: "wán chéng",
          partOfSpeech: "verb",
        },
        {
          word: "审查",
          translation: "review/audit",
          pronunciation: "shěn chá",
          partOfSpeech: "noun",
        },
        {
          word: "开始",
          translation: "to begin/start",
          pronunciation: "kāi shǐ",
          partOfSpeech: "verb",
        },
      ],
      grammarNote:
        "'将' (jiāng) is a formal marker for future tense, equivalent to '会' but more appropriate in official contexts: '我们将完成' (we will complete). '并' (bìng) means 'and also' and connects two parallel actions in formal writing.",
      difficulty: "hard",
    },
    {
      id: 7,
      avatarLine:
        "非常感谢您的详细介绍！这对我们了解英国的监管经验很有帮助。祝您演讲顺利！",
      avatarLineEn:
        "Thank you very much for the detailed briefing! This is very helpful for understanding the UK's regulatory experience. Wish you a successful presentation!",
      expectedUserPhrase: "",
      expectedUserPhraseEn: "",
      pronunciationGuide: "",
      acceptableVariations: [],
      vocabulary: [
        {
          word: "详细",
          translation: "detailed",
          pronunciation: "xiáng xì",
          partOfSpeech: "adjective",
        },
        {
          word: "演讲",
          translation: "presentation/speech",
          pronunciation: "yǎn jiǎng",
          partOfSpeech: "noun",
        },
        {
          word: "帮助",
          translation: "help/assistance",
          pronunciation: "bāng zhù",
          partOfSpeech: "noun",
        },
      ],
      grammarNote:
        "'对...很有帮助' (duì...hěn yǒu bāngzhù) means 'very helpful for...' and is a common way to express that something is beneficial. '祝您...顺利' is a formal well-wishing structure meaning 'wish you a smooth...'.",
      difficulty: "medium",
    },
  ],
};
