import type { Scenario } from "@/lib/types";

export const directionsScenario2: Scenario = {
  id: "asking-directions-2",
  title: "Asking for Directions — Level 2",
  titleEs: "Pidiendo Direcciones — Nivel 2",
  description:
    "Navigate the city with more confidence. Use public transport, find specific addresses, and understand more complex directions.",
  setting: "Near a bus stop in central Seville",
  turns: [
    {
      id: 1,
      avatarLine: "Buenos dias! La parada de autobus esta aqui.",
      avatarLineEn: "Good morning! The bus stop is right here.",
      expectedUserPhrase: "Hola, buenos dias. Busco la parada del autobus.",
      expectedUserPhraseEn: "Hello, good morning. I'm looking for the bus stop.",
      acceptableVariations: [
        "Buenos dias, busco la parada",
        "Hola, donde esta la parada del autobus?",
        "Busco la parada de autobus",
        "Buenos dias, es esta la parada?",
      ],
      vocabulary: [
        {
          word: "parada",
          translation: "stop (bus stop)",
          pronunciation: "/pa.ra.da/",
          partOfSpeech: "noun",
        },
        {
          word: "autobus",
          translation: "bus",
          pronunciation: "/au.to.bus/",
          partOfSpeech: "noun",
        },
        {
          word: "busco",
          translation: "I'm looking for",
          pronunciation: "/bus.ko/",
          partOfSpeech: "verb",
        },
        {
          word: "aqui",
          translation: "here",
          pronunciation: "/a.ki/",
          partOfSpeech: "adverb",
        },
      ],
      grammarNote:
        "'Buscar' (to look for) already includes the meaning of 'for', so you say 'busco la parada' — not 'busco para la parada'. 'Parada' is feminine, so it uses 'la'.",
      difficulty: "easy",
    },
    {
      id: 2,
      avatarLine: "Si, esta es la parada. Adonde va?",
      avatarLineEn: "Yes, this is the stop. Where are you going?",
      expectedUserPhrase: "Que autobus va al centro?",
      expectedUserPhraseEn: "Which bus goes to the center?",
      acceptableVariations: [
        "Cual autobus va al centro?",
        "Que autobus necesito para ir al centro?",
        "Quiero ir al centro, que autobus tomo?",
        "Necesito ir al centro",
      ],
      vocabulary: [
        {
          word: "que",
          translation: "which/what",
          pronunciation: "/ke/",
          partOfSpeech: "pronoun",
        },
        {
          word: "va",
          translation: "goes",
          pronunciation: "/ba/",
          partOfSpeech: "verb",
        },
        {
          word: "centro",
          translation: "center/downtown",
          pronunciation: "/θen.tro/",
          partOfSpeech: "noun",
        },
        {
          word: "adonde",
          translation: "to where",
          pronunciation: "/a.don.de/",
          partOfSpeech: "adverb",
        },
      ],
      grammarNote:
        "'Que autobus...?' (which bus?) is a common way to ask about transport options. 'Al' is the contraction of 'a' + 'el', so 'al centro' means 'to the center'.",
      difficulty: "easy",
    },
    {
      id: 3,
      avatarLine: "Puede tomar el autobus numero 5. Pasa cada diez minutos.",
      avatarLineEn: "You can take bus number 5. It comes every ten minutes.",
      expectedUserPhrase: "Donde puedo comprar el billete?",
      expectedUserPhraseEn: "Where can I buy the ticket?",
      acceptableVariations: [
        "Donde compro el billete?",
        "Donde se compra el billete?",
        "Puedo comprar el billete aqui?",
        "Necesito un billete, donde lo compro?",
      ],
      vocabulary: [
        {
          word: "billete",
          translation: "ticket",
          pronunciation: "/bi.je.te/",
          partOfSpeech: "noun",
        },
        {
          word: "comprar",
          translation: "to buy",
          pronunciation: "/kom.prar/",
          partOfSpeech: "verb",
        },
        {
          word: "puedo",
          translation: "I can",
          pronunciation: "/pwe.do/",
          partOfSpeech: "verb",
        },
        {
          word: "cada",
          translation: "every/each",
          pronunciation: "/ka.da/",
          partOfSpeech: "adjective",
        },
      ],
      grammarNote:
        "'Donde puedo...?' (where can I...?) combines the question word 'donde' with 'poder' (to be able to). 'Puedo' is the first person form: 'puedo comprar' (I can buy).",
      difficulty: "medium",
    },
    {
      id: 4,
      avatarLine: "Puede comprar el billete en el autobus. Cuesta un euro con cuarenta.",
      avatarLineEn: "You can buy the ticket on the bus. It costs one euro forty.",
      expectedUserPhrase: "Cuantas paradas son hasta el centro?",
      expectedUserPhraseEn: "How many stops is it to the center?",
      acceptableVariations: [
        "Cuantas paradas hay hasta el centro?",
        "Cuantas paradas son?",
        "Son muchas paradas hasta el centro?",
        "Esta lejos el centro?",
      ],
      vocabulary: [
        {
          word: "cuantas",
          translation: "how many (feminine)",
          pronunciation: "/kwan.tas/",
          partOfSpeech: "pronoun",
        },
        {
          word: "paradas",
          translation: "stops (plural)",
          pronunciation: "/pa.ra.das/",
          partOfSpeech: "noun",
        },
        {
          word: "hasta",
          translation: "until/to",
          pronunciation: "/as.ta/",
          partOfSpeech: "preposition",
        },
        {
          word: "cuesta",
          translation: "it costs",
          pronunciation: "/kwes.ta/",
          partOfSpeech: "verb",
        },
      ],
      grammarNote:
        "'Cuantas' is the feminine plural of 'cuanto' because 'paradas' is feminine. Use 'cuantos' for masculine nouns: 'cuantos minutos?' (how many minutes?).",
      difficulty: "medium",
    },
    {
      id: 5,
      avatarLine: "Son cuatro paradas. Baje en la Plaza Nueva.",
      avatarLineEn: "It's four stops. Get off at Plaza Nueva.",
      expectedUserPhrase: "Hay una farmacia cerca de la plaza?",
      expectedUserPhraseEn: "Is there a pharmacy near the plaza?",
      acceptableVariations: [
        "Hay una farmacia por ahi?",
        "Sabe si hay una farmacia cerca?",
        "Hay alguna farmacia cerca de la plaza?",
        "Donde hay una farmacia?",
      ],
      vocabulary: [
        {
          word: "farmacia",
          translation: "pharmacy",
          pronunciation: "/far.ma.θja/",
          partOfSpeech: "noun",
        },
        {
          word: "plaza",
          translation: "plaza/square",
          pronunciation: "/pla.θa/",
          partOfSpeech: "noun",
        },
        {
          word: "baje",
          translation: "get off (formal command)",
          pronunciation: "/ba.xe/",
          partOfSpeech: "verb",
        },
        {
          word: "cerca de",
          translation: "near/close to",
          pronunciation: "/θer.ka de/",
          partOfSpeech: "phrase",
        },
      ],
      grammarNote:
        "'Baje' is the formal command of 'bajar' (to get off/go down). On public transport: 'suba' (get on) and 'baje' (get off). 'Hay una farmacia?' uses 'hay' to ask if something exists.",
      difficulty: "medium",
    },
    {
      id: 6,
      avatarLine: "Si, hay una farmacia en la calle Sierpes. Esta a dos minutos de la plaza.",
      avatarLineEn: "Yes, there's a pharmacy on Sierpes street. It's two minutes from the plaza.",
      expectedUserPhrase: "Esta lejos de aqui?",
      expectedUserPhraseEn: "Is it far from here?",
      acceptableVariations: [
        "Queda lejos?",
        "Esta muy lejos?",
        "Es lejos de aqui?",
        "Dos minutos no es lejos",
      ],
      vocabulary: [
        {
          word: "lejos",
          translation: "far",
          pronunciation: "/le.xos/",
          partOfSpeech: "adverb",
        },
        {
          word: "calle",
          translation: "street",
          pronunciation: "/ka.je/",
          partOfSpeech: "noun",
        },
        {
          word: "de aqui",
          translation: "from here",
          pronunciation: "/de a.ki/",
          partOfSpeech: "phrase",
        },
        {
          word: "dos",
          translation: "two",
          pronunciation: "/dos/",
          partOfSpeech: "number",
        },
      ],
      grammarNote:
        "'Lejos' (far) is the opposite of 'cerca' (near). Both can be followed by 'de': 'lejos de aqui' (far from here), 'cerca de la plaza' (near the plaza).",
      difficulty: "easy",
    },
    {
      id: 7,
      avatarLine: "No, esta muy cerca! Que tenga un buen dia.",
      avatarLineEn: "No, it's very close! Have a nice day.",
      expectedUserPhrase: "Muchas gracias por su ayuda. Hasta luego!",
      expectedUserPhraseEn: "Thank you very much for your help. See you later!",
      acceptableVariations: [
        "Muchas gracias, hasta luego",
        "Gracias por todo, adios",
        "Muy amable, hasta luego",
        "Gracias por su ayuda",
      ],
      vocabulary: [
        {
          word: "muchas gracias",
          translation: "thank you very much",
          pronunciation: "/mu.tSas gra.θjas/",
          partOfSpeech: "phrase",
        },
        {
          word: "por su ayuda",
          translation: "for your help",
          pronunciation: "/por su a.ju.da/",
          partOfSpeech: "phrase",
        },
        {
          word: "hasta luego",
          translation: "see you later",
          pronunciation: "/as.ta lwe.go/",
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
        "'Por su ayuda' uses 'por' (for) + 'su' (your, formal). 'Hasta luego' literally means 'until later' and is a common farewell. 'Que tenga un buen dia' uses the subjunctive to express a wish.",
      difficulty: "easy",
    },
  ],
};
