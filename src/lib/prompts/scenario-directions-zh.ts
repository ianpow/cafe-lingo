import type { Scenario } from "@/lib/types";

export const directionsZhScenario: Scenario = {
  id: "asking-directions-zh",
  title: "Asking for Directions",
  titleEs: "问路",
  description:
    "Find your way around Beijing. Practice asking for and understanding directions in Mandarin.",
  setting: "Near Tiananmen Square, central Beijing",
  language: "zh",
  turns: [
    {
      id: 1,
      avatarLine: "你好！你看起来迷路了。需要帮助吗？",
      avatarLineEn: "Hello! You look lost. Do you need help?",
      expectedUserPhrase: "你好。请问天安门怎么走？",
      expectedUserPhraseEn: "Hello. How do I get to Tiananmen?",
      pronunciationGuide: "Nǐ hǎo. Qǐng wèn Tiān'ān mén zěn me zǒu?",
      acceptableVariations: [
        "你好，天安门怎么走？",
        "请问天安门怎么走？",
        "你好，请问去天安门怎么走？",
        "天安门在哪里？",
      ],
      vocabulary: [
        {
          word: "请问",
          translation: "excuse me / may I ask",
          pronunciation: "qǐng wèn",
          partOfSpeech: "phrase",
        },
        {
          word: "怎么走",
          translation: "how to get there",
          pronunciation: "zěn me zǒu",
          partOfSpeech: "phrase",
        },
        {
          word: "迷路",
          translation: "lost (one's way)",
          pronunciation: "mí lù",
          partOfSpeech: "verb",
        },
        {
          word: "帮助",
          translation: "help",
          pronunciation: "bāng zhù",
          partOfSpeech: "noun",
        },
      ],
      grammarNote:
        "'怎么走？' (zěn me zǒu) is the standard way to ask for directions to a place. '请问' (qǐng wèn) is a polite opener meaning 'may I ask', used before questions to strangers.",
      difficulty: "easy",
    },
    {
      id: 2,
      avatarLine: "天安门？一直往前走，然后左转。",
      avatarLineEn: "Tiananmen? Go straight ahead, then turn left.",
      expectedUserPhrase: "一直走，然后左转。谢谢。",
      expectedUserPhraseEn: "Go straight, then turn left. Thank you.",
      pronunciationGuide: "Yì zhí zǒu, rán hòu zuǒ zhuǎn. Xiè xiè.",
      acceptableVariations: [
        "一直走，左转。谢谢",
        "一直往前走，然后左转",
        "好的，一直走然后左转",
        "左转，谢谢",
      ],
      vocabulary: [
        {
          word: "一直",
          translation: "straight / continuously",
          pronunciation: "yì zhí",
          partOfSpeech: "adverb",
        },
        {
          word: "往前走",
          translation: "go forward",
          pronunciation: "wǎng qián zǒu",
          partOfSpeech: "phrase",
        },
        {
          word: "然后",
          translation: "then / after that",
          pronunciation: "rán hòu",
          partOfSpeech: "conjunction",
        },
        {
          word: "左转",
          translation: "turn left",
          pronunciation: "zuǒ zhuǎn",
          partOfSpeech: "verb",
        },
      ],
      grammarNote:
        "'往' (wǎng) is a directional preposition meaning 'toward'. It combines with direction words: '往前' (forward), '往左' (to the left), '往右' (to the right). '然后' (rán hòu) sequences actions like 'then' in English.",
      difficulty: "easy",
    },
    {
      id: 3,
      avatarLine: "大概走五分钟就到了。",
      avatarLineEn: "It's about a five-minute walk.",
      expectedUserPhrase: "离这里远吗？",
      expectedUserPhraseEn: "Is it far from here?",
      pronunciationGuide: "Lí zhè lǐ yuǎn ma?",
      acceptableVariations: [
        "远吗？",
        "离这里远不远？",
        "这里远吗？",
        "走路远吗？",
      ],
      vocabulary: [
        {
          word: "大概",
          translation: "about / approximately",
          pronunciation: "dà gài",
          partOfSpeech: "adverb",
        },
        {
          word: "分钟",
          translation: "minute(s)",
          pronunciation: "fēn zhōng",
          partOfSpeech: "noun",
        },
        {
          word: "离",
          translation: "from (distance)",
          pronunciation: "lí",
          partOfSpeech: "preposition",
        },
        {
          word: "远",
          translation: "far",
          pronunciation: "yuǎn",
          partOfSpeech: "adjective",
        },
      ],
      grammarNote:
        "'离' (lí) expresses distance between two points: '离这里远吗？' (Is it far from here?). The pattern is: Place A + 离 + Place B + 远/近. '就' before a verb indicates something happens quickly or easily: '走五分钟就到了' (just walk five minutes and you'll arrive).",
      difficulty: "medium",
    },
    {
      id: 4,
      avatarLine: "不远！很近的。你会看到城门。",
      avatarLineEn: "Not far! Very close. You'll see the city gate.",
      expectedUserPhrase: "最近的地铁站在哪里？",
      expectedUserPhraseEn: "Where is the nearest subway station?",
      pronunciationGuide: "Zuì jìn de dì tiě zhàn zài nǎ lǐ?",
      acceptableVariations: [
        "地铁站在哪里？",
        "附近有地铁站吗？",
        "最近的地铁站在哪？",
        "请问地铁站怎么走？",
      ],
      vocabulary: [
        {
          word: "最近的",
          translation: "nearest / closest",
          pronunciation: "zuì jìn de",
          partOfSpeech: "adjective",
        },
        {
          word: "地铁站",
          translation: "subway station",
          pronunciation: "dì tiě zhàn",
          partOfSpeech: "noun",
        },
        {
          word: "在哪里",
          translation: "where (is it)",
          pronunciation: "zài nǎ lǐ",
          partOfSpeech: "phrase",
        },
        {
          word: "城门",
          translation: "city gate",
          pronunciation: "chéng mén",
          partOfSpeech: "noun",
        },
      ],
      grammarNote:
        "'在哪里？' (zài nǎ lǐ) asks 'where is something?' and follows the subject: '地铁站在哪里？'. '最' (zuì) is the superlative marker: '最近的' means 'the nearest'. The particle '的' turns adjectives into modifiers: '最近的地铁站' (the nearest subway station).",
      difficulty: "medium",
    },
    {
      id: 5,
      avatarLine: "地铁站就在那边，往右走。",
      avatarLineEn: "The subway station is right over there, go right.",
      expectedUserPhrase: "坐几号线？",
      expectedUserPhraseEn: "Which line do I take?",
      pronunciationGuide: "Zuò jǐ hào xiàn?",
      acceptableVariations: [
        "坐几号线去？",
        "我应该坐几号线？",
        "要坐几号线？",
        "坐哪条线？",
      ],
      vocabulary: [
        {
          word: "坐",
          translation: "to take (transport)",
          pronunciation: "zuò",
          partOfSpeech: "verb",
        },
        {
          word: "几号线",
          translation: "which line number",
          pronunciation: "jǐ hào xiàn",
          partOfSpeech: "phrase",
        },
        {
          word: "那边",
          translation: "over there",
          pronunciation: "nà biān",
          partOfSpeech: "pronoun",
        },
        {
          word: "往右走",
          translation: "go right",
          pronunciation: "wǎng yòu zǒu",
          partOfSpeech: "phrase",
        },
      ],
      grammarNote:
        "'几' (jǐ) is a question word for 'which number' or 'how many' (for small quantities). '号' (hào) means 'number' and is used with '线' (xiàn, line) to ask about transit lines: '几号线？' (which line number?). This is a measure word construction common in Chinese.",
      difficulty: "medium",
    },
    {
      id: 6,
      avatarLine: "坐一号线，往东方向。",
      avatarLineEn: "Take Line 1, going east.",
      expectedUserPhrase: "非常感谢！你真好！",
      expectedUserPhraseEn: "Thank you so much! You're so kind!",
      pronunciationGuide: "Fēi cháng gǎn xiè! Nǐ zhēn hǎo!",
      acceptableVariations: [
        "非常感谢！",
        "太感谢了！",
        "谢谢你！你真好！",
        "非常感谢你的帮助！",
      ],
      vocabulary: [
        {
          word: "非常",
          translation: "very / extremely",
          pronunciation: "fēi cháng",
          partOfSpeech: "adverb",
        },
        {
          word: "感谢",
          translation: "to thank / grateful",
          pronunciation: "gǎn xiè",
          partOfSpeech: "verb",
        },
        {
          word: "真",
          translation: "really / truly",
          pronunciation: "zhēn",
          partOfSpeech: "adverb",
        },
        {
          word: "方向",
          translation: "direction",
          pronunciation: "fāng xiàng",
          partOfSpeech: "noun",
        },
      ],
      grammarNote:
        "'非常' (fēi cháng) is a stronger intensifier than '很' (hěn, very). '真' (zhēn) means 'really/truly' and adds emphasis: '你真好' (you're really kind). '感谢' is more formal than '谢谢' and is used for expressing deeper gratitude.",
      difficulty: "easy",
    },
    {
      id: 7,
      avatarLine: "不客气！祝你在北京玩得开心！",
      avatarLineEn: "You're welcome! Wish you a great time in Beijing!",
      expectedUserPhrase: "",
      expectedUserPhraseEn: "",
      acceptableVariations: [],
      vocabulary: [
        {
          word: "不客气",
          translation: "you're welcome",
          pronunciation: "bú kè qì",
          partOfSpeech: "phrase",
        },
        {
          word: "祝",
          translation: "to wish",
          pronunciation: "zhù",
          partOfSpeech: "verb",
        },
        {
          word: "玩得开心",
          translation: "have a good time",
          pronunciation: "wán de kāi xīn",
          partOfSpeech: "phrase",
        },
        {
          word: "北京",
          translation: "Beijing",
          pronunciation: "Běi jīng",
          partOfSpeech: "noun",
        },
      ],
      grammarNote:
        "'玩得开心' uses the complement of degree structure: Verb + 得 + Result. '得' (de) links the verb '玩' (to play/have fun) with the result '开心' (happy). This pattern describes how well an action is performed: '说得很好' (speak very well), '走得很快' (walk very fast).",
      difficulty: "medium",
    },
  ],
};
