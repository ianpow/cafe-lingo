import type { Scenario } from "@/lib/types";

export const directionsScenario: Scenario = {
  id: "asking-directions",
  title: "Asking for Directions",
  titleEs: "Pidiendo Direcciones",
  description:
    "Find your way around a Spanish city. Practice asking where places are, understanding directions, and using location words.",
  setting: "A busy street corner in central Seville",
  turns: [
    {
      id: 1,
      avatarLine: "Hola! Necesita ayuda?",
      avatarLineEn: "Hello! Do you need help?",
      expectedUserPhrase: "Si, hola. Donde esta el museo?",
      expectedUserPhraseEn: "Yes, hello. Where is the museum?",
      acceptableVariations: [
        "Hola, donde esta el museo?",
        "Donde esta el museo?",
        "Si, donde esta el museo?",
        "Hola, busco el museo",
      ],
      vocabulary: [
        {
          word: "donde",
          translation: "where",
          pronunciation: "/don.de/",
          partOfSpeech: "adverb",
        },
        {
          word: "esta",
          translation: "is (located)",
          pronunciation: "/es.ta/",
          partOfSpeech: "verb",
        },
        {
          word: "museo",
          translation: "museum",
          pronunciation: "/mu.se.o/",
          partOfSpeech: "noun",
        },
        {
          word: "ayuda",
          translation: "help",
          pronunciation: "/a.ju.da/",
          partOfSpeech: "noun",
        },
      ],
      grammarNote:
        "'Donde esta...?' is the essential phrase for asking where something is located. Use 'el' for masculine nouns (el museo) and 'la' for feminine nouns (la iglesia).",
      difficulty: "easy",
    },
    {
      id: 2,
      avatarLine: "El museo? Esta cerca. Siga todo recto.",
      avatarLineEn: "The museum? It's nearby. Go straight ahead.",
      expectedUserPhrase: "Todo recto? Gracias.",
      expectedUserPhraseEn: "Straight ahead? Thanks.",
      acceptableVariations: [
        "Todo recto, gracias",
        "Recto? Gracias",
        "Sigo todo recto?",
        "Gracias, todo recto",
      ],
      vocabulary: [
        {
          word: "cerca",
          translation: "nearby/close",
          pronunciation: "/θer.ka/",
          partOfSpeech: "adverb",
        },
        {
          word: "siga",
          translation: "go/continue (formal command)",
          pronunciation: "/si.ga/",
          partOfSpeech: "verb",
        },
        {
          word: "todo recto",
          translation: "straight ahead",
          pronunciation: "/to.do rek.to/",
          partOfSpeech: "phrase",
        },
        {
          word: "gracias",
          translation: "thank you",
          pronunciation: "/gra.θjas/",
          partOfSpeech: "noun",
        },
      ],
      grammarNote:
        "'Siga' is the formal command form of 'seguir' (to follow/continue). Use formal commands with strangers: 'siga' (continue), 'gire' (turn), 'cruce' (cross).",
      difficulty: "easy",
    },
    {
      id: 3,
      avatarLine: "Si, y despues gire a la derecha.",
      avatarLineEn: "Yes, and then turn right.",
      expectedUserPhrase: "Gire a la derecha. Entendido.",
      expectedUserPhraseEn: "Turn right. Understood.",
      acceptableVariations: [
        "A la derecha, entendido",
        "Gire a la derecha",
        "A la derecha. Vale",
        "Entendido, a la derecha",
      ],
      vocabulary: [
        {
          word: "gire",
          translation: "turn (formal command)",
          pronunciation: "/xi.re/",
          partOfSpeech: "verb",
        },
        {
          word: "derecha",
          translation: "right",
          pronunciation: "/de.re.tSa/",
          partOfSpeech: "noun",
        },
        {
          word: "despues",
          translation: "then/after",
          pronunciation: "/des.pwes/",
          partOfSpeech: "adverb",
        },
        {
          word: "entendido",
          translation: "understood",
          pronunciation: "/en.ten.di.do/",
          partOfSpeech: "adjective",
        },
      ],
      grammarNote:
        "'A la derecha' (to the right) and 'a la izquierda' (to the left) always use 'a la' before them. 'Despues' (then/after) is useful for sequencing directions.",
      difficulty: "medium",
    },
    {
      id: 4,
      avatarLine: "Esta al lado de la iglesia grande.",
      avatarLineEn: "It's next to the big church.",
      expectedUserPhrase: "Al lado de la iglesia. Gracias.",
      expectedUserPhraseEn: "Next to the church. Thanks.",
      acceptableVariations: [
        "Al lado de la iglesia",
        "Junto a la iglesia, gracias",
        "Al lado de la iglesia, entendido",
        "Cerca de la iglesia, gracias",
      ],
      vocabulary: [
        {
          word: "al lado de",
          translation: "next to",
          pronunciation: "/al la.do de/",
          partOfSpeech: "phrase",
        },
        {
          word: "iglesia",
          translation: "church",
          pronunciation: "/i.gle.sja/",
          partOfSpeech: "noun",
        },
        {
          word: "grande",
          translation: "big/large",
          pronunciation: "/gran.de/",
          partOfSpeech: "adjective",
        },
        {
          word: "la",
          translation: "the (feminine)",
          pronunciation: "/la/",
          partOfSpeech: "article",
        },
      ],
      grammarNote:
        "Location phrases like 'al lado de' (next to), 'enfrente de' (in front of), and 'detras de' (behind) are followed by 'de' + the place. For example: 'al lado de la iglesia'.",
      difficulty: "medium",
    },
    {
      id: 5,
      avatarLine: "Esta a unos cinco minutos caminando.",
      avatarLineEn: "It's about five minutes walking.",
      expectedUserPhrase: "Cinco minutos. Perfecto.",
      expectedUserPhraseEn: "Five minutes. Perfect.",
      acceptableVariations: [
        "Cinco minutos, perfecto",
        "Solo cinco minutos?",
        "Muy bien, cinco minutos",
        "Perfecto, gracias",
      ],
      vocabulary: [
        {
          word: "cinco",
          translation: "five",
          pronunciation: "/θin.ko/",
          partOfSpeech: "number",
        },
        {
          word: "minutos",
          translation: "minutes",
          pronunciation: "/mi.nu.tos/",
          partOfSpeech: "noun",
        },
        {
          word: "caminando",
          translation: "walking",
          pronunciation: "/ka.mi.nan.do/",
          partOfSpeech: "verb",
        },
        {
          word: "unos",
          translation: "about/approximately",
          pronunciation: "/u.nos/",
          partOfSpeech: "adjective",
        },
      ],
      grammarNote:
        "'A unos cinco minutos' uses 'unos' to mean 'about/approximately'. 'Caminando' is the gerund (-ing form) of 'caminar' (to walk), used to describe how you travel.",
      difficulty: "medium",
    },
    {
      id: 6,
      avatarLine: "De nada! Tambien hay un parque bonito cerca.",
      avatarLineEn: "You're welcome! There's also a nice park nearby.",
      expectedUserPhrase: "Donde esta el parque?",
      expectedUserPhraseEn: "Where is the park?",
      acceptableVariations: [
        "Y donde esta el parque?",
        "Donde esta el parque, por favor?",
        "Un parque? Donde esta?",
        "Donde queda el parque?",
      ],
      vocabulary: [
        {
          word: "de nada",
          translation: "you're welcome",
          pronunciation: "/de na.da/",
          partOfSpeech: "phrase",
        },
        {
          word: "hay",
          translation: "there is/there are",
          pronunciation: "/ai/",
          partOfSpeech: "verb",
        },
        {
          word: "parque",
          translation: "park",
          pronunciation: "/par.ke/",
          partOfSpeech: "noun",
        },
        {
          word: "bonito",
          translation: "nice/pretty",
          pronunciation: "/bo.ni.to/",
          partOfSpeech: "adjective",
        },
      ],
      grammarNote:
        "'Hay' means 'there is' or 'there are' and is the same for both singular and plural. 'Hay un parque' (there is a park), 'Hay muchos parques' (there are many parks).",
      difficulty: "easy",
    },
    {
      id: 7,
      avatarLine: "El parque esta detras del museo. Que disfrute!",
      avatarLineEn: "The park is behind the museum. Enjoy!",
      expectedUserPhrase: "",
      expectedUserPhraseEn: "",
      acceptableVariations: [],
      vocabulary: [
        {
          word: "detras de",
          translation: "behind",
          pronunciation: "/de.tras de/",
          partOfSpeech: "phrase",
        },
        {
          word: "del",
          translation: "of the (masculine)",
          pronunciation: "/del/",
          partOfSpeech: "contraction",
        },
        {
          word: "que disfrute",
          translation: "enjoy!",
          pronunciation: "/ke dis.fru.te/",
          partOfSpeech: "phrase",
        },
        {
          word: "parque",
          translation: "park",
          pronunciation: "/par.ke/",
          partOfSpeech: "noun",
        },
      ],
      grammarNote:
        "'Del' is the contraction of 'de' + 'el' (of the). It is mandatory in Spanish — you cannot say 'de el'. 'Que disfrute' uses the subjunctive to express a wish.",
      difficulty: "medium",
    },
  ],
};
