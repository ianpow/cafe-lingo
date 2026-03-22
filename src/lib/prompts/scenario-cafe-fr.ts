import type { Scenario } from "@/lib/types";

export const cafeScenarioFr: Scenario = {
  id: "cafe-ordering-fr",
  title: "At the Cafe",
  titleEs: "Au Cafe",
  description:
    "Order coffee and pastries at a Parisian café. Practice basic French greetings and ordering.",
  setting: "Cafe de Flore, a classic café in Paris",
  language: "fr",
  turns: [
    {
      id: 1,
      avatarLine: "Bonjour! Bienvenue au Cafe de Flore. Qu'est-ce que vous desirez?",
      avatarLineEn: "Hello! Welcome to Cafe de Flore. What would you like?",
      expectedUserPhrase: "Bonjour. Un cafe, s'il vous plait.",
      expectedUserPhraseEn: "Hello. A coffee, please.",
      acceptableVariations: [
        "Bonjour, un cafe s'il vous plait",
        "Un cafe, s'il vous plait",
        "Je voudrais un cafe",
        "Bonjour, je voudrais un cafe s'il vous plait",
      ],
      vocabulary: [
        {
          word: "bonjour",
          translation: "hello/good day",
          pronunciation: "/bɔ̃.ʒuʁ/",
          partOfSpeech: "interjection",
        },
        {
          word: "bienvenue",
          translation: "welcome",
          pronunciation: "/bjɛ̃.və.ny/",
          partOfSpeech: "noun",
        },
        {
          word: "cafe",
          translation: "coffee",
          pronunciation: "/ka.fe/",
          partOfSpeech: "noun",
        },
        {
          word: "s'il vous plait",
          translation: "please",
          pronunciation: "/sil vu plɛ/",
          partOfSpeech: "phrase",
        },
      ],
      grammarNote:
        "'S'il vous plait' literally means 'if it pleases you' and is the formal way to say 'please'. Use 's'il te plait' with friends and family.",
      difficulty: "easy",
    },
    {
      id: 2,
      avatarLine: "Tres bien! Un grand ou un petit?",
      avatarLineEn: "Very good! A large or a small?",
      expectedUserPhrase: "Un grand cafe, s'il vous plait.",
      expectedUserPhraseEn: "A large coffee, please.",
      acceptableVariations: [
        "Un grand, s'il vous plait",
        "Grand, s'il vous plait",
        "Un grand cafe",
        "Je voudrais un grand cafe",
      ],
      vocabulary: [
        {
          word: "tres bien",
          translation: "very good",
          pronunciation: "/tʁɛ bjɛ̃/",
          partOfSpeech: "phrase",
        },
        {
          word: "grand",
          translation: "large/big",
          pronunciation: "/ɡʁɑ̃/",
          partOfSpeech: "adjective",
        },
        {
          word: "petit",
          translation: "small",
          pronunciation: "/pə.ti/",
          partOfSpeech: "adjective",
        },
        {
          word: "ou",
          translation: "or",
          pronunciation: "/u/",
          partOfSpeech: "conjunction",
        },
      ],
      grammarNote:
        "In French, adjectives like 'grand' and 'petit' come BEFORE the noun: 'un grand cafe' (a large coffee), not 'un cafe grand'. This is the opposite of most French adjectives.",
      difficulty: "easy",
    },
    {
      id: 3,
      avatarLine: "Avec du lait ou noir?",
      avatarLineEn: "With milk or black?",
      expectedUserPhrase: "Avec du lait, s'il vous plait.",
      expectedUserPhraseEn: "With milk, please.",
      acceptableVariations: [
        "Avec du lait",
        "Du lait, s'il vous plait",
        "Avec du lait s'il vous plait",
        "Noir, s'il vous plait",
      ],
      vocabulary: [
        {
          word: "avec",
          translation: "with",
          pronunciation: "/a.vɛk/",
          partOfSpeech: "preposition",
        },
        {
          word: "lait",
          translation: "milk",
          pronunciation: "/lɛ/",
          partOfSpeech: "noun",
        },
        {
          word: "noir",
          translation: "black",
          pronunciation: "/nwaʁ/",
          partOfSpeech: "adjective",
        },
        {
          word: "du",
          translation: "some/of the",
          pronunciation: "/dy/",
          partOfSpeech: "article",
        },
      ],
      grammarNote:
        "'Du' is a partitive article meaning 'some' and is used before uncountable nouns: 'du lait' (some milk), 'du sucre' (some sugar). It contracts from 'de le'.",
      difficulty: "easy",
    },
    {
      id: 4,
      avatarLine: "Parfait. Autre chose? Nous avons des croissants et des pains au chocolat.",
      avatarLineEn: "Perfect. Anything else? We have croissants and chocolate pastries.",
      expectedUserPhrase: "Un croissant, s'il vous plait.",
      expectedUserPhraseEn: "A croissant, please.",
      acceptableVariations: [
        "Oui, un croissant s'il vous plait",
        "Un croissant",
        "Je voudrais un croissant",
        "Un pain au chocolat, s'il vous plait",
        "Non, merci",
      ],
      vocabulary: [
        {
          word: "autre chose",
          translation: "anything else",
          pronunciation: "/otʁ ʃoz/",
          partOfSpeech: "phrase",
        },
        {
          word: "croissant",
          translation: "croissant",
          pronunciation: "/kʁwa.sɑ̃/",
          partOfSpeech: "noun",
        },
        {
          word: "pain au chocolat",
          translation: "chocolate pastry",
          pronunciation: "/pɛ̃ o ʃɔ.kɔ.la/",
          partOfSpeech: "noun",
        },
        {
          word: "nous avons",
          translation: "we have",
          pronunciation: "/nu.z‿a.vɔ̃/",
          partOfSpeech: "verb",
        },
      ],
      grammarNote:
        "'Des' is the plural partitive article meaning 'some': 'des croissants' (some croissants). Use 'un/une' for singular and 'des' for plural indefinite nouns.",
      difficulty: "medium",
    },
    {
      id: 5,
      avatarLine: "Excellent choix! Pour manger ici ou a emporter?",
      avatarLineEn: "Excellent choice! To eat here or to take away?",
      expectedUserPhrase: "Pour manger ici.",
      expectedUserPhraseEn: "To eat here.",
      acceptableVariations: [
        "Ici, s'il vous plait",
        "Pour manger ici, s'il vous plait",
        "Sur place",
        "Ici",
        "A emporter, s'il vous plait",
      ],
      vocabulary: [
        {
          word: "manger",
          translation: "to eat",
          pronunciation: "/mɑ̃.ʒe/",
          partOfSpeech: "verb",
        },
        {
          word: "ici",
          translation: "here",
          pronunciation: "/i.si/",
          partOfSpeech: "adverb",
        },
        {
          word: "a emporter",
          translation: "to take away",
          pronunciation: "/a ɑ̃.pɔʁ.te/",
          partOfSpeech: "phrase",
        },
        {
          word: "choix",
          translation: "choice",
          pronunciation: "/ʃwa/",
          partOfSpeech: "noun",
        },
      ],
      grammarNote:
        "'Pour' followed by an infinitive verb means 'in order to': 'pour manger' (to eat), 'pour boire' (to drink). 'Sur place' is another common way to say 'to eat here'.",
      difficulty: "medium",
    },
    {
      id: 6,
      avatarLine: "Voila! Ca fait quatre euros cinquante.",
      avatarLineEn: "Here you are! That comes to four euros fifty.",
      expectedUserPhrase: "Voila. Merci beaucoup!",
      expectedUserPhraseEn: "Here you go. Thank you very much!",
      acceptableVariations: [
        "Merci beaucoup",
        "Voila, merci",
        "Merci",
        "Voila, merci beaucoup",
      ],
      vocabulary: [
        {
          word: "voila",
          translation: "here you are/there it is",
          pronunciation: "/vwa.la/",
          partOfSpeech: "interjection",
        },
        {
          word: "merci beaucoup",
          translation: "thank you very much",
          pronunciation: "/mɛʁ.si bo.ku/",
          partOfSpeech: "phrase",
        },
        {
          word: "quatre",
          translation: "four",
          pronunciation: "/katʁ/",
          partOfSpeech: "number",
        },
        {
          word: "cinquante",
          translation: "fifty",
          pronunciation: "/sɛ̃.kɑ̃t/",
          partOfSpeech: "number",
        },
      ],
      grammarNote:
        "'Ca fait' literally means 'that makes' and is used to state prices: 'Ca fait quatre euros cinquante' (That comes to 4.50). Unlike Spanish, French does not use a word between euros and cents.",
      difficulty: "medium",
    },
    {
      id: 7,
      avatarLine: "Merci a vous! Bonne journee!",
      avatarLineEn: "Thank you! Have a nice day!",
      expectedUserPhrase: "",
      expectedUserPhraseEn: "",
      acceptableVariations: [],
      vocabulary: [
        {
          word: "merci a vous",
          translation: "thank you (back to you)",
          pronunciation: "/mɛʁ.si a vu/",
          partOfSpeech: "phrase",
        },
        {
          word: "bonne journee",
          translation: "have a nice day",
          pronunciation: "/bɔn ʒuʁ.ne/",
          partOfSpeech: "phrase",
        },
        {
          word: "bonne",
          translation: "good (feminine)",
          pronunciation: "/bɔn/",
          partOfSpeech: "adjective",
        },
        {
          word: "journee",
          translation: "day (duration)",
          pronunciation: "/ʒuʁ.ne/",
          partOfSpeech: "noun",
        },
      ],
      grammarNote:
        "'Bonne journee' uses the feminine form 'bonne' because 'journee' is feminine. French distinguishes between 'jour' (a day as a unit) and 'journee' (the duration of a day). Similarly: 'soir' vs 'soiree'.",
      difficulty: "easy",
    },
  ],
};
