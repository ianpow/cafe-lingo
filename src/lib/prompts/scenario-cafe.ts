import type { Scenario } from "@/lib/types";

export const cafeScenario: Scenario = {
  id: "cafe-ordering",
  title: "At the Cafe",
  titleEs: "En el Cafe",
  description:
    "Order coffee and churros at a cozy cafe in Madrid. Practice greetings, ordering food, and basic numbers.",
  setting: "Cafe Sol, a warm neighborhood cafe in central Madrid",
  turns: [
    {
      id: 1,
      avatarLine: "Hola! Bienvenido a Cafe Sol. Que desea?",
      avatarLineEn: "Hello! Welcome to Cafe Sol. What would you like?",
      expectedUserPhrase: "Hola, quiero un cafe, por favor.",
      expectedUserPhraseEn: "Hello, I want a coffee, please.",
      acceptableVariations: [
        "Hola, un cafe por favor",
        "Quiero un cafe",
        "Un cafe, por favor",
        "Hola, me gustaria un cafe",
      ],
      vocabulary: [
        {
          word: "hola",
          translation: "hello",
          pronunciation: "/o.la/",
          partOfSpeech: "interjection",
        },
        {
          word: "quiero",
          translation: "I want",
          pronunciation: "/kje.ro/",
          partOfSpeech: "verb",
        },
        {
          word: "cafe",
          translation: "coffee",
          pronunciation: "/ka.fe/",
          partOfSpeech: "noun",
        },
        {
          word: "por favor",
          translation: "please",
          pronunciation: "/por fa.bor/",
          partOfSpeech: "phrase",
        },
      ],
      grammarNote:
        "Quiero + noun: Use 'quiero' (I want) followed by what you'd like. Add 'un/una' before the noun.",
      difficulty: "easy",
    },
    {
      id: 2,
      avatarLine: "Muy bien! Grande o pequeno?",
      avatarLineEn: "Very good! Large or small?",
      expectedUserPhrase: "Un cafe grande, por favor.",
      expectedUserPhraseEn: "A large coffee, please.",
      acceptableVariations: [
        "Grande, por favor",
        "Grande",
        "Un grande por favor",
        "Cafe grande",
      ],
      vocabulary: [
        {
          word: "grande",
          translation: "large/big",
          pronunciation: "/gran.de/",
          partOfSpeech: "adjective",
        },
        {
          word: "pequeno",
          translation: "small",
          pronunciation: "/pe.ke.njo/",
          partOfSpeech: "adjective",
        },
        {
          word: "muy bien",
          translation: "very good",
          pronunciation: "/muj bjen/",
          partOfSpeech: "phrase",
        },
      ],
      grammarNote:
        "In Spanish, adjectives usually come AFTER the noun: 'cafe grande' (coffee large), not 'grande cafe'.",
      difficulty: "easy",
    },
    {
      id: 3,
      avatarLine: "Con leche o solo?",
      avatarLineEn: "With milk or black?",
      expectedUserPhrase: "Con leche, por favor.",
      expectedUserPhraseEn: "With milk, please.",
      acceptableVariations: [
        "Con leche",
        "Leche por favor",
        "Con leche por favor",
        "Solo, por favor",
      ],
      vocabulary: [
        {
          word: "con",
          translation: "with",
          pronunciation: "/kon/",
          partOfSpeech: "preposition",
        },
        {
          word: "leche",
          translation: "milk",
          pronunciation: "/le.tSe/",
          partOfSpeech: "noun",
        },
        {
          word: "solo",
          translation: "black (coffee)/alone",
          pronunciation: "/so.lo/",
          partOfSpeech: "adjective",
        },
      ],
      grammarNote:
        "'Con' means 'with' and 'sin' means 'without'. These are essential prepositions: 'con leche' (with milk), 'sin azucar' (without sugar).",
      difficulty: "easy",
    },
    {
      id: 4,
      avatarLine: "Perfecto. Algo mas? Tenemos churros.",
      avatarLineEn: "Perfect. Anything else? We have churros.",
      expectedUserPhrase: "Si, quiero churros tambien.",
      expectedUserPhraseEn: "Yes, I want churros too.",
      acceptableVariations: [
        "Si, churros por favor",
        "Churros tambien",
        "Si, tambien quiero churros",
        "Quiero churros",
        "No, gracias",
      ],
      vocabulary: [
        {
          word: "algo mas",
          translation: "anything else",
          pronunciation: "/al.go mas/",
          partOfSpeech: "phrase",
        },
        {
          word: "tambien",
          translation: "also/too",
          pronunciation: "/tam.bjen/",
          partOfSpeech: "adverb",
        },
        {
          word: "tenemos",
          translation: "we have",
          pronunciation: "/te.ne.mos/",
          partOfSpeech: "verb",
        },
        {
          word: "si",
          translation: "yes",
          pronunciation: "/si/",
          partOfSpeech: "adverb",
        },
      ],
      grammarNote:
        "'Tambien' (also/too) goes at the end of the sentence or after the verb: 'Quiero churros tambien' or 'Tambien quiero churros'.",
      difficulty: "medium",
    },
    {
      id: 5,
      avatarLine: "Son tres euros con cincuenta.",
      avatarLineEn: "That's three euros and fifty cents.",
      expectedUserPhrase: "Aqui tiene. Tres euros con cincuenta.",
      expectedUserPhraseEn: "Here you go. Three euros and fifty cents.",
      acceptableVariations: [
        "Aqui tiene",
        "Tres cincuenta",
        "Tres euros cincuenta",
        "Aqui tiene, tres euros",
      ],
      vocabulary: [
        {
          word: "aqui tiene",
          translation: "here you go",
          pronunciation: "/a.ki tje.ne/",
          partOfSpeech: "phrase",
        },
        {
          word: "tres",
          translation: "three",
          pronunciation: "/tres/",
          partOfSpeech: "number",
        },
        {
          word: "euros",
          translation: "euros",
          pronunciation: "/eu.ros/",
          partOfSpeech: "noun",
        },
        {
          word: "cincuenta",
          translation: "fifty",
          pronunciation: "/θin.kwen.ta/",
          partOfSpeech: "number",
        },
      ],
      grammarNote:
        "Prices in Spanish use 'con' (with) to separate euros and cents: 'tres euros con cincuenta' (3.50). 'Aqui tiene' is a polite way to hand something over.",
      difficulty: "medium",
    },
    {
      id: 6,
      avatarLine: "Gracias! Su cafe y churros. Buen provecho!",
      avatarLineEn: "Thanks! Your coffee and churros. Enjoy your meal!",
      expectedUserPhrase: "Muchas gracias. Hasta luego!",
      expectedUserPhraseEn: "Thank you very much. See you later!",
      acceptableVariations: [
        "Gracias",
        "Muchas gracias",
        "Hasta luego",
        "Gracias, hasta luego",
        "Muchas gracias, adios",
      ],
      vocabulary: [
        {
          word: "muchas gracias",
          translation: "thank you very much",
          pronunciation: "/mu.tSas gra.θjas/",
          partOfSpeech: "phrase",
        },
        {
          word: "hasta luego",
          translation: "see you later",
          pronunciation: "/as.ta lwe.go/",
          partOfSpeech: "phrase",
        },
        {
          word: "buen provecho",
          translation: "enjoy your meal",
          pronunciation: "/bwen pro.be.tSo/",
          partOfSpeech: "phrase",
        },
      ],
      grammarNote:
        "'Hasta' means 'until/see you'. 'Hasta luego' (see you later), 'Hasta manana' (see you tomorrow), 'Hasta pronto' (see you soon).",
      difficulty: "easy",
    },
    {
      id: 7,
      avatarLine: "Hasta luego! Que tenga un buen dia!",
      avatarLineEn: "See you later! Have a nice day!",
      expectedUserPhrase: "",
      expectedUserPhraseEn: "",
      acceptableVariations: [],
      vocabulary: [
        {
          word: "que tenga",
          translation: "may you have",
          pronunciation: "/ke ten.ga/",
          partOfSpeech: "phrase",
        },
        {
          word: "buen dia",
          translation: "good day",
          pronunciation: "/bwen di.a/",
          partOfSpeech: "phrase",
        },
      ],
      grammarNote:
        "'Que tenga un buen dia' is a polite farewell meaning 'Have a nice day'. It uses the subjunctive mood — you'll learn more about this later!",
      difficulty: "easy",
    },
  ],
};
