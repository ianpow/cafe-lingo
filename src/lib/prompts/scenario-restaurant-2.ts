import type { Scenario } from "@/lib/types";

export const restaurantScenario2: Scenario = {
  id: "restaurant-ordering-2",
  title: "At the Restaurant — Level 2",
  titleEs: "En el Restaurante — Nivel 2",
  description:
    "Return to El Camino for a more adventurous meal. Order specialties, handle dietary needs, and compliment the chef.",
  setting: "Restaurante El Camino, Barcelona — your second visit",
  turns: [
    {
      id: 1,
      avatarLine:
        "Buenas noches! Tiene una reserva?",
      avatarLineEn:
        "Good evening! Do you have a reservation?",
      expectedUserPhrase:
        "Buenas noches. No tengo reserva. Mesa para dos, por favor.",
      expectedUserPhraseEn:
        "Good evening. I don't have a reservation. Table for two, please.",
      acceptableVariations: [
        "No tengo reserva, mesa para dos",
        "No, mesa para dos, por favor",
        "Buenas noches, mesa para dos",
        "No tengo reserva pero somos dos",
      ],
      vocabulary: [
        {
          word: "buenas noches",
          translation: "good evening / good night",
          pronunciation: "/bwe.nas no.tʃes/",
          partOfSpeech: "phrase",
        },
        {
          word: "reserva",
          translation: "reservation",
          pronunciation: "/re.ser.ba/",
          partOfSpeech: "noun",
        },
        {
          word: "tengo",
          translation: "I have",
          pronunciation: "/ten.go/",
          partOfSpeech: "verb",
        },
        {
          word: "dos",
          translation: "two",
          pronunciation: "/dos/",
          partOfSpeech: "number",
        },
      ],
      grammarNote:
        "'No tengo' means 'I don't have'. In Spanish, you negate a verb by placing 'no' before it: 'Tengo reserva' (I have a reservation) becomes 'No tengo reserva' (I don't have a reservation).",
      difficulty: "easy",
    },
    {
      id: 2,
      avatarLine:
        "Perfecto, por aqui. Aqui tiene el menu. Hoy tenemos gazpacho como entrante.",
      avatarLineEn:
        "Perfect, this way. Here is the menu. Today we have gazpacho as a starter.",
      expectedUserPhrase:
        "Que lleva el gazpacho?",
      expectedUserPhraseEn:
        "What is in the gazpacho?",
      acceptableVariations: [
        "Que ingredientes tiene el gazpacho",
        "Que tiene el gazpacho",
        "De que esta hecho el gazpacho",
        "Que lleva",
      ],
      vocabulary: [
        {
          word: "entrante",
          translation: "starter / appetizer",
          pronunciation: "/en.tran.te/",
          partOfSpeech: "noun",
        },
        {
          word: "lleva",
          translation: "it carries / it contains",
          pronunciation: "/ʎe.ba/",
          partOfSpeech: "verb",
        },
        {
          word: "hoy",
          translation: "today",
          pronunciation: "/oi/",
          partOfSpeech: "adverb",
        },
        {
          word: "gazpacho",
          translation: "gazpacho (cold tomato soup)",
          pronunciation: "/gaθ.pa.tʃo/",
          partOfSpeech: "noun",
        },
      ],
      grammarNote:
        "'Que lleva...?' literally means 'What does it carry?' and is the natural way to ask about ingredients in a dish. It's more common than 'Que ingredientes tiene?' in casual dining.",
      difficulty: "medium",
    },
    {
      id: 3,
      avatarLine:
        "Lleva tomate, pepino, pimiento, ajo y aceite de oliva. Tiene alguna alergia o restriccion?",
      avatarLineEn:
        "It has tomato, cucumber, pepper, garlic, and olive oil. Do you have any allergy or restriction?",
      expectedUserPhrase:
        "Soy vegetariano. Tienen platos sin carne?",
      expectedUserPhraseEn:
        "I'm vegetarian. Do you have dishes without meat?",
      acceptableVariations: [
        "Soy vegetariano",
        "No como carne",
        "Soy vegetariana",
        "Tienen opciones vegetarianas",
        "Tienen algo sin carne",
      ],
      vocabulary: [
        {
          word: "vegetariano",
          translation: "vegetarian",
          pronunciation: "/be.xe.ta.rja.no/",
          partOfSpeech: "adjective",
        },
        {
          word: "carne",
          translation: "meat",
          pronunciation: "/kar.ne/",
          partOfSpeech: "noun",
        },
        {
          word: "sin",
          translation: "without",
          pronunciation: "/sin/",
          partOfSpeech: "preposition",
        },
        {
          word: "platos",
          translation: "dishes",
          pronunciation: "/pla.tos/",
          partOfSpeech: "noun",
        },
      ],
      grammarNote:
        "'Soy vegetariano/a' uses 'ser' (to be) for a permanent trait. Change the ending to match your gender: '-o' for masculine, '-a' for feminine. 'Sin' (without) is the opposite of 'con' (with) from Level 1.",
      difficulty: "medium",
    },
    {
      id: 4,
      avatarLine:
        "Claro que si! Tenemos una paella de verduras y ensalada mixta. Que le gustaria?",
      avatarLineEn:
        "Of course! We have a vegetable paella and a mixed salad. What would you like?",
      expectedUserPhrase:
        "Me gustaria la paella de verduras. Y una copa de vino tinto, por favor.",
      expectedUserPhraseEn:
        "I'd like the vegetable paella. And a glass of red wine, please.",
      acceptableVariations: [
        "La paella de verduras, por favor",
        "Quiero la paella de verduras y un vino tinto",
        "Me gustaria la paella de verduras",
        "La paella de verduras y vino tinto",
      ],
      vocabulary: [
        {
          word: "verduras",
          translation: "vegetables",
          pronunciation: "/ber.du.ras/",
          partOfSpeech: "noun",
        },
        {
          word: "me gustaria",
          translation: "I would like",
          pronunciation: "/me gus.ta.ri.a/",
          partOfSpeech: "phrase",
        },
        {
          word: "copa",
          translation: "glass (for wine)",
          pronunciation: "/ko.pa/",
          partOfSpeech: "noun",
        },
        {
          word: "vino tinto",
          translation: "red wine",
          pronunciation: "/bi.no tin.to/",
          partOfSpeech: "noun",
        },
      ],
      grammarNote:
        "'Me gustaria' (I would like) is more polite than 'quiero' (I want) from Level 1. Use 'copa' for a wine glass and 'vaso' for a regular glass. Wine types: 'tinto' (red), 'blanco' (white), 'rosado' (rose).",
      difficulty: "medium",
    },
    {
      id: 5,
      avatarLine:
        "Excelente eleccion! Aqui tiene su paella y su vino. Que aproveche!",
      avatarLineEn:
        "Excellent choice! Here is your paella and your wine. Enjoy your meal!",
      expectedUserPhrase:
        "Esta deliciosa! Mis felicitaciones al chef.",
      expectedUserPhraseEn:
        "It's delicious! My compliments to the chef.",
      acceptableVariations: [
        "Mis felicitaciones al chef",
        "Esta muy rica",
        "Esta muy buena, felicitaciones al chef",
        "Deliciosa, felicite al chef",
        "Que rica esta la paella",
      ],
      vocabulary: [
        {
          word: "deliciosa",
          translation: "delicious",
          pronunciation: "/de.li.θjo.sa/",
          partOfSpeech: "adjective",
        },
        {
          word: "felicitaciones",
          translation: "compliments / congratulations",
          pronunciation: "/fe.li.θi.ta.θjo.nes/",
          partOfSpeech: "noun",
        },
        {
          word: "chef",
          translation: "chef",
          pronunciation: "/tʃef/",
          partOfSpeech: "noun",
        },
        {
          word: "que aproveche",
          translation: "enjoy your meal (bon appetit)",
          pronunciation: "/ke a.pro.be.tʃe/",
          partOfSpeech: "phrase",
        },
      ],
      grammarNote:
        "'Mis felicitaciones al chef' is a polite way to compliment the cooking. 'Deliciosa' agrees with 'paella' (feminine). Remember 'rica' from Level 1 — 'deliciosa' is a more expressive synonym.",
      difficulty: "medium",
    },
    {
      id: 6,
      avatarLine:
        "Gracias! Al chef le encanta escuchar eso. Desean algo mas? La cuenta?",
      avatarLineEn:
        "Thank you! The chef loves hearing that. Would you like anything else? The bill?",
      expectedUserPhrase:
        "La cuenta, por favor. Podemos pagar por separado?",
      expectedUserPhraseEn:
        "The bill, please. Can we pay separately?",
      acceptableVariations: [
        "La cuenta, por favor",
        "Si, la cuenta. Podemos dividir la cuenta?",
        "Queremos pagar por separado",
        "Podemos pagar por separado",
        "Podemos dividir la cuenta",
      ],
      vocabulary: [
        {
          word: "pagar",
          translation: "to pay",
          pronunciation: "/pa.gar/",
          partOfSpeech: "verb",
        },
        {
          word: "por separado",
          translation: "separately",
          pronunciation: "/por se.pa.ra.do/",
          partOfSpeech: "phrase",
        },
        {
          word: "podemos",
          translation: "we can / can we",
          pronunciation: "/po.de.mos/",
          partOfSpeech: "verb",
        },
        {
          word: "la cuenta",
          translation: "the bill / the check",
          pronunciation: "/la kwen.ta/",
          partOfSpeech: "noun",
        },
      ],
      grammarNote:
        "'Podemos...?' means 'Can we...?' and is formed from 'poder' (to be able to). 'Pagar por separado' means to pay separately. You can also say 'dividir la cuenta' (to split the bill).",
      difficulty: "hard",
    },
    {
      id: 7,
      avatarLine:
        "Por supuesto! Son doce euros cada uno. Gracias y vuelvan pronto!",
      avatarLineEn:
        "Of course! It's twelve euros each. Thank you and come back soon!",
      expectedUserPhrase:
        "Gracias, todo estuvo muy rico. Hasta luego!",
      expectedUserPhraseEn:
        "Thank you, everything was very delicious. See you later!",
      acceptableVariations: [
        "Gracias, hasta luego",
        "Todo estuvo muy bueno, gracias",
        "Muchas gracias, hasta luego",
        "Gracias, estuvo delicioso",
        "Hasta luego",
      ],
      vocabulary: [
        {
          word: "todo",
          translation: "everything",
          pronunciation: "/to.do/",
          partOfSpeech: "pronoun",
        },
        {
          word: "estuvo",
          translation: "it was (temporary)",
          pronunciation: "/es.tu.bo/",
          partOfSpeech: "verb",
        },
        {
          word: "hasta luego",
          translation: "see you later",
          pronunciation: "/as.ta lwe.go/",
          partOfSpeech: "phrase",
        },
        {
          word: "cada uno",
          translation: "each one",
          pronunciation: "/ka.da u.no/",
          partOfSpeech: "phrase",
        },
      ],
      grammarNote:
        "'Estuvo' is the past tense of 'estar' (to be — temporary states). Use it for how the food was: 'Estuvo rico' (It was delicious). 'Vuelvan' is the plural formal imperative of 'volver' — compare with 'vuelva' (singular) from Level 1.",
      difficulty: "medium",
    },
  ],
};
