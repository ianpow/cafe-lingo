import type { Scenario } from "@/lib/types";

export const directionsFrScenario: Scenario = {
  id: "asking-directions-fr",
  title: "Asking for Directions",
  titleEs: "Demander son Chemin",
  description:
    "Find your way around Paris. Practice asking for and understanding directions in French.",
  setting: "Near the Louvre, central Paris",
  language: "fr",
  turns: [
    {
      id: 1,
      avatarLine: "Bonjour! Vous avez l'air perdu. Je peux vous aider?",
      avatarLineEn: "Hello! You look lost. Can I help you?",
      expectedUserPhrase: "Bonjour. Ou est le Louvre, s'il vous plait?",
      expectedUserPhraseEn: "Hello. Where is the Louvre, please?",
      acceptableVariations: [
        "Bonjour, ou est le Louvre?",
        "Ou est le Louvre, s'il vous plait?",
        "Ou est le Louvre?",
        "Bonjour, je cherche le Louvre",
      ],
      vocabulary: [
        {
          word: "bonjour",
          translation: "hello/good day",
          pronunciation: "/bɔ̃.ʒuʁ/",
          partOfSpeech: "interjection",
        },
        {
          word: "ou",
          translation: "where",
          pronunciation: "/u/",
          partOfSpeech: "adverb",
        },
        {
          word: "s'il vous plait",
          translation: "please (formal)",
          pronunciation: "/sil vu plɛ/",
          partOfSpeech: "phrase",
        },
        {
          word: "aider",
          translation: "to help",
          pronunciation: "/e.de/",
          partOfSpeech: "verb",
        },
      ],
      grammarNote:
        "'Ou est...?' is the essential phrase for asking where something is located. 'S'il vous plait' is the formal way to say 'please' — use 's'il te plait' with friends.",
      difficulty: "easy",
    },
    {
      id: 2,
      avatarLine: "Le Louvre? C'est tout droit, puis tournez a gauche.",
      avatarLineEn: "The Louvre? It's straight ahead, then turn left.",
      expectedUserPhrase: "Tout droit, puis a gauche. Merci.",
      expectedUserPhraseEn: "Straight ahead, then left. Thanks.",
      acceptableVariations: [
        "Tout droit, puis a gauche",
        "Tout droit et a gauche, merci",
        "D'accord, tout droit puis a gauche",
        "Merci, tout droit et a gauche",
      ],
      vocabulary: [
        {
          word: "tout droit",
          translation: "straight ahead",
          pronunciation: "/tu dʁwa/",
          partOfSpeech: "phrase",
        },
        {
          word: "puis",
          translation: "then",
          pronunciation: "/pɥi/",
          partOfSpeech: "adverb",
        },
        {
          word: "tournez",
          translation: "turn (formal command)",
          pronunciation: "/tuʁ.ne/",
          partOfSpeech: "verb",
        },
        {
          word: "gauche",
          translation: "left",
          pronunciation: "/ɡoʃ/",
          partOfSpeech: "noun",
        },
      ],
      grammarNote:
        "'Tournez' is the formal imperative of 'tourner' (to turn). Use 'tournez a gauche' (turn left) and 'tournez a droite' (turn right). 'Puis' connects sequential directions.",
      difficulty: "easy",
    },
    {
      id: 3,
      avatarLine: "C'est a cinq minutes a pied environ.",
      avatarLineEn: "It's about five minutes on foot.",
      expectedUserPhrase: "C'est loin d'ici?",
      expectedUserPhraseEn: "Is it far from here?",
      acceptableVariations: [
        "C'est loin?",
        "C'est loin d'ici?",
        "Est-ce que c'est loin?",
        "C'est pres d'ici?",
      ],
      vocabulary: [
        {
          word: "a pied",
          translation: "on foot",
          pronunciation: "/a pje/",
          partOfSpeech: "phrase",
        },
        {
          word: "environ",
          translation: "about/approximately",
          pronunciation: "/ɑ̃.vi.ʁɔ̃/",
          partOfSpeech: "adverb",
        },
        {
          word: "loin",
          translation: "far",
          pronunciation: "/lwɛ̃/",
          partOfSpeech: "adverb",
        },
        {
          word: "ici",
          translation: "here",
          pronunciation: "/i.si/",
          partOfSpeech: "adverb",
        },
      ],
      grammarNote:
        "'C'est loin d'ici?' (Is it far from here?) is a common question when getting directions. 'D'ici' contracts 'de' + 'ici'. 'A pied' literally means 'by foot' and is used for walking distances.",
      difficulty: "medium",
    },
    {
      id: 4,
      avatarLine: "Non, c'est tres pres! Vous verrez la pyramide.",
      avatarLineEn: "No, it's very close! You will see the pyramid.",
      expectedUserPhrase: "Et ou est le metro le plus proche?",
      expectedUserPhraseEn: "And where is the nearest metro?",
      acceptableVariations: [
        "Ou est le metro le plus proche?",
        "Ou est la station de metro?",
        "Et le metro, il est ou?",
        "Ou se trouve le metro le plus proche?",
      ],
      vocabulary: [
        {
          word: "pres",
          translation: "close/near",
          pronunciation: "/pʁɛ/",
          partOfSpeech: "adverb",
        },
        {
          word: "verrez",
          translation: "will see",
          pronunciation: "/vɛ.ʁe/",
          partOfSpeech: "verb",
        },
        {
          word: "metro",
          translation: "metro/subway",
          pronunciation: "/me.tʁo/",
          partOfSpeech: "noun",
        },
        {
          word: "le plus proche",
          translation: "the nearest",
          pronunciation: "/lə ply pʁɔʃ/",
          partOfSpeech: "phrase",
        },
      ],
      grammarNote:
        "'Le plus proche' is the superlative of 'proche' (near). French superlatives use 'le/la plus' + adjective. 'Vous verrez' is the future tense of 'voir' (to see) — irregular but very common.",
      difficulty: "medium",
    },
    {
      id: 5,
      avatarLine: "La station de metro est juste la-bas, a droite.",
      avatarLineEn: "The metro station is just over there, on the right.",
      expectedUserPhrase: "Quelle ligne je dois prendre?",
      expectedUserPhraseEn: "Which line do I need to take?",
      acceptableVariations: [
        "Quelle ligne je dois prendre?",
        "Quelle ligne est-ce que je dois prendre?",
        "Je dois prendre quelle ligne?",
        "C'est quelle ligne?",
      ],
      vocabulary: [
        {
          word: "la-bas",
          translation: "over there",
          pronunciation: "/la.ba/",
          partOfSpeech: "adverb",
        },
        {
          word: "droite",
          translation: "right",
          pronunciation: "/dʁwat/",
          partOfSpeech: "noun",
        },
        {
          word: "quelle",
          translation: "which (feminine)",
          pronunciation: "/kɛl/",
          partOfSpeech: "adjective",
        },
        {
          word: "prendre",
          translation: "to take",
          pronunciation: "/pʁɑ̃dʁ/",
          partOfSpeech: "verb",
        },
      ],
      grammarNote:
        "'Je dois' + infinitive means 'I must/need to'. 'Quelle' agrees with the feminine noun 'ligne'. Use 'quel' for masculine nouns: 'quel train?' (which train?).",
      difficulty: "medium",
    },
    {
      id: 6,
      avatarLine: "Prenez la ligne un, direction La Defense.",
      avatarLineEn: "Take line one, direction La Defense.",
      expectedUserPhrase: "Merci beaucoup! Vous etes tres aimable.",
      expectedUserPhraseEn: "Thank you very much! You are very kind.",
      acceptableVariations: [
        "Merci beaucoup!",
        "Merci beaucoup, vous etes tres aimable",
        "Merci, vous etes tres gentil",
        "Merci beaucoup, c'est tres aimable",
      ],
      vocabulary: [
        {
          word: "prenez",
          translation: "take (formal command)",
          pronunciation: "/pʁə.ne/",
          partOfSpeech: "verb",
        },
        {
          word: "ligne",
          translation: "line",
          pronunciation: "/liɲ/",
          partOfSpeech: "noun",
        },
        {
          word: "beaucoup",
          translation: "a lot/very much",
          pronunciation: "/bo.ku/",
          partOfSpeech: "adverb",
        },
        {
          word: "aimable",
          translation: "kind/nice",
          pronunciation: "/ɛ.mabl/",
          partOfSpeech: "adjective",
        },
      ],
      grammarNote:
        "'Prenez' is the formal imperative of 'prendre' (to take). 'Vous etes tres aimable' is a polite way to thank someone — 'aimable' (kind) does not change form for gender.",
      difficulty: "easy",
    },
    {
      id: 7,
      avatarLine: "De rien! Bonne visite a Paris!",
      avatarLineEn: "You're welcome! Enjoy your visit to Paris!",
      expectedUserPhrase: "",
      expectedUserPhraseEn: "",
      acceptableVariations: [],
      vocabulary: [
        {
          word: "de rien",
          translation: "you're welcome",
          pronunciation: "/də ʁjɛ̃/",
          partOfSpeech: "phrase",
        },
        {
          word: "bonne",
          translation: "good (feminine)",
          pronunciation: "/bɔn/",
          partOfSpeech: "adjective",
        },
        {
          word: "visite",
          translation: "visit",
          pronunciation: "/vi.zit/",
          partOfSpeech: "noun",
        },
        {
          word: "Paris",
          translation: "Paris",
          pronunciation: "/pa.ʁi/",
          partOfSpeech: "noun",
        },
      ],
      grammarNote:
        "'De rien' literally means 'of nothing' and is the most common way to say 'you're welcome'. 'Bonne' is the feminine form of 'bon' (good), matching the feminine noun 'visite'.",
      difficulty: "easy",
    },
  ],
};
