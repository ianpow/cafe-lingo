import type { Scenario } from "@/lib/types";

export const restaurantScenario: Scenario = {
  id: "restaurant-ordering",
  title: "At the Restaurant",
  titleEs: "En el Restaurante",
  description:
    "Order a meal at a traditional Spanish restaurant. Practice reading the menu, asking for recommendations, and paying the bill.",
  setting: "Restaurante El Camino, a traditional restaurant in Barcelona",
  turns: [
    {
      id: 1,
      avatarLine: "Buenas tardes! Bienvenido a El Camino. Mesa para uno?",
      avatarLineEn: "Good afternoon! Welcome to El Camino. Table for one?",
      expectedUserPhrase: "Buenas tardes. Si, mesa para uno, por favor.",
      expectedUserPhraseEn: "Good afternoon. Yes, table for one, please.",
      acceptableVariations: [
        "Buenas tardes, mesa para uno",
        "Si, mesa para uno",
        "Si, por favor",
        "Mesa para uno, por favor",
      ],
      vocabulary: [
        {
          word: "buenas tardes",
          translation: "good afternoon",
          pronunciation: "/bwe.nas tar.des/",
          partOfSpeech: "phrase",
        },
        {
          word: "bienvenido",
          translation: "welcome",
          pronunciation: "/bjen.be.ni.do/",
          partOfSpeech: "adjective",
        },
        {
          word: "mesa",
          translation: "table",
          pronunciation: "/me.sa/",
          partOfSpeech: "noun",
        },
        {
          word: "para",
          translation: "for",
          pronunciation: "/pa.ra/",
          partOfSpeech: "preposition",
        },
      ],
      grammarNote:
        "'Buenas tardes' is used from around midday until evening. 'Mesa para uno' literally means 'table for one'. Change the number for more people: 'mesa para dos' (table for two).",
      difficulty: "easy",
    },
    {
      id: 2,
      avatarLine: "Aqui tiene el menu. Le recomiendo la paella.",
      avatarLineEn: "Here is the menu. I recommend the paella.",
      expectedUserPhrase: "Que es la paella?",
      expectedUserPhraseEn: "What is paella?",
      acceptableVariations: [
        "Que es paella",
        "Que es la paella?",
        "Que lleva la paella",
        "Me puede decir que es la paella",
      ],
      vocabulary: [
        {
          word: "menu",
          translation: "menu",
          pronunciation: "/me.nu/",
          partOfSpeech: "noun",
        },
        {
          word: "recomiendo",
          translation: "I recommend",
          pronunciation: "/re.ko.mjen.do/",
          partOfSpeech: "verb",
        },
        {
          word: "que es",
          translation: "what is",
          pronunciation: "/ke es/",
          partOfSpeech: "phrase",
        },
        {
          word: "la paella",
          translation: "the paella",
          pronunciation: "/la pa.e.ʎa/",
          partOfSpeech: "noun",
        },
      ],
      grammarNote:
        "'Que es...?' means 'What is...?' and is one of the most useful question structures. Use it to ask about unfamiliar dishes: 'Que es la tortilla?' (What is tortilla?).",
      difficulty: "easy",
    },
    {
      id: 3,
      avatarLine: "Es arroz con mariscos. Esta muy rica!",
      avatarLineEn: "It's rice with seafood. It's very delicious!",
      expectedUserPhrase: "Quiero la paella, por favor.",
      expectedUserPhraseEn: "I want the paella, please.",
      acceptableVariations: [
        "La paella, por favor",
        "Quiero paella",
        "Me gustaria la paella",
        "Voy a pedir la paella",
        "La paella por favor",
      ],
      vocabulary: [
        {
          word: "arroz",
          translation: "rice",
          pronunciation: "/a.roθ/",
          partOfSpeech: "noun",
        },
        {
          word: "mariscos",
          translation: "seafood",
          pronunciation: "/ma.ris.kos/",
          partOfSpeech: "noun",
        },
        {
          word: "rica",
          translation: "delicious/tasty",
          pronunciation: "/ri.ka/",
          partOfSpeech: "adjective",
        },
        {
          word: "quiero",
          translation: "I want",
          pronunciation: "/kje.ro/",
          partOfSpeech: "verb",
        },
      ],
      grammarNote:
        "'Rico/rica' means 'delicious' when talking about food. It changes to match the noun's gender: 'El cafe esta rico' (masc.), 'La paella esta rica' (fem.).",
      difficulty: "easy",
    },
    {
      id: 4,
      avatarLine: "Muy buena eleccion! Y para beber?",
      avatarLineEn: "Very good choice! And to drink?",
      expectedUserPhrase: "Una agua, por favor.",
      expectedUserPhraseEn: "A water, please.",
      acceptableVariations: [
        "Agua, por favor",
        "Agua con gas, por favor",
        "Agua sin gas, por favor",
        "Un vino, por favor",
        "Una cerveza, por favor",
        "Un vino tinto, por favor",
      ],
      vocabulary: [
        {
          word: "beber",
          translation: "to drink",
          pronunciation: "/be.ber/",
          partOfSpeech: "verb",
        },
        {
          word: "agua",
          translation: "water",
          pronunciation: "/a.gwa/",
          partOfSpeech: "noun",
        },
        {
          word: "vino",
          translation: "wine",
          pronunciation: "/bi.no/",
          partOfSpeech: "noun",
        },
        {
          word: "cerveza",
          translation: "beer",
          pronunciation: "/θer.be.θa/",
          partOfSpeech: "noun",
        },
      ],
      grammarNote:
        "'Para beber' means 'to drink' (literally 'for to drink'). You can specify your water preference: 'agua con gas' (sparkling) or 'agua sin gas' (still). 'Con' means with, 'sin' means without.",
      difficulty: "medium",
    },
    {
      id: 5,
      avatarLine: "Algo de postre? Tenemos flan y helado.",
      avatarLineEn: "Something for dessert? We have flan and ice cream.",
      expectedUserPhrase: "Un flan, por favor.",
      expectedUserPhraseEn: "A flan, please.",
      acceptableVariations: [
        "Flan, por favor",
        "Quiero un flan",
        "Si, un flan por favor",
        "Un helado, por favor",
        "No, gracias",
      ],
      vocabulary: [
        {
          word: "postre",
          translation: "dessert",
          pronunciation: "/pos.tre/",
          partOfSpeech: "noun",
        },
        {
          word: "flan",
          translation: "flan (caramel custard)",
          pronunciation: "/flan/",
          partOfSpeech: "noun",
        },
        {
          word: "helado",
          translation: "ice cream",
          pronunciation: "/e.la.do/",
          partOfSpeech: "noun",
        },
        {
          word: "algo",
          translation: "something",
          pronunciation: "/al.go/",
          partOfSpeech: "pronoun",
        },
      ],
      grammarNote:
        "'Algo de...' means 'something of/some...' and is used to offer options politely. 'Algo de postre?' (Something for dessert?), 'Algo de beber?' (Something to drink?).",
      difficulty: "medium",
    },
    {
      id: 6,
      avatarLine: "Aqui tiene. La cuenta son quince euros.",
      avatarLineEn: "Here you go. The bill is fifteen euros.",
      expectedUserPhrase: "Aqui tiene. Quince euros.",
      expectedUserPhraseEn: "Here you go. Fifteen euros.",
      acceptableVariations: [
        "Aqui tiene",
        "Quince euros",
        "Aqui tiene, quince euros",
        "Aqui estan quince euros",
        "Perfecto, aqui tiene",
      ],
      vocabulary: [
        {
          word: "la cuenta",
          translation: "the bill/check",
          pronunciation: "/la kwen.ta/",
          partOfSpeech: "noun",
        },
        {
          word: "quince",
          translation: "fifteen",
          pronunciation: "/kin.θe/",
          partOfSpeech: "number",
        },
        {
          word: "son",
          translation: "they are / it is (plural)",
          pronunciation: "/son/",
          partOfSpeech: "verb",
        },
        {
          word: "euros",
          translation: "euros",
          pronunciation: "/eu.ros/",
          partOfSpeech: "noun",
        },
      ],
      grammarNote:
        "'La cuenta' means 'the bill'. To ask for it, say 'La cuenta, por favor'. 'Son' is the plural form of 'ser' (to be) used with amounts: 'Son quince euros' (It's fifteen euros).",
      difficulty: "medium",
    },
    {
      id: 7,
      avatarLine: "Gracias! Vuelva pronto!",
      avatarLineEn: "Thank you! Come back soon!",
      expectedUserPhrase: "",
      expectedUserPhraseEn: "",
      acceptableVariations: [],
      vocabulary: [
        {
          word: "vuelva",
          translation: "come back (formal)",
          pronunciation: "/bwel.ba/",
          partOfSpeech: "verb",
        },
        {
          word: "pronto",
          translation: "soon",
          pronunciation: "/pron.to/",
          partOfSpeech: "adverb",
        },
        {
          word: "gracias",
          translation: "thank you",
          pronunciation: "/gra.θjas/",
          partOfSpeech: "noun",
        },
        {
          word: "restaurante",
          translation: "restaurant",
          pronunciation: "/res.tau.ran.te/",
          partOfSpeech: "noun",
        },
      ],
      grammarNote:
        "'Vuelva pronto' uses the formal imperative of 'volver' (to return). It's a common farewell in shops and restaurants. The informal version would be 'Vuelve pronto'.",
      difficulty: "easy",
    },
  ],
};
