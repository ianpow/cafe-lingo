import type { Scenario } from "@/lib/types";

export const cafeScenario2: Scenario = {
  id: "cafe-ordering-2",
  title: "At the Cafe — Level 2",
  titleEs: "En el Cafe — Nivel 2",
  description:
    "Return to Cafe Sol with more confidence. Order for a friend, customize your drink, and handle a small problem.",
  setting: "Cafe Sol, Madrid — your second visit",
  turns: [
    {
      id: 1,
      avatarLine: "Hola de nuevo! Que tal? Que le pongo hoy?",
      avatarLineEn: "Hello again! How are you? What can I get you today?",
      expectedUserPhrase: "Hola! Muy bien, gracias. Quiero dos cafes, por favor.",
      expectedUserPhraseEn:
        "Hello! Very well, thanks. I want two coffees, please.",
      acceptableVariations: [
        "Hola, muy bien. Dos cafes, por favor",
        "Muy bien, gracias. Quiero dos cafes",
        "Hola! Bien, gracias. Dos cafes, por favor",
        "Quiero dos cafes, por favor",
        "Hola, dos cafes por favor",
      ],
      vocabulary: [
        {
          word: "de nuevo",
          translation: "again",
          pronunciation: "/de nwe.bo/",
          partOfSpeech: "phrase",
        },
        {
          word: "que tal",
          translation: "how are you / how's it going",
          pronunciation: "/ke tal/",
          partOfSpeech: "phrase",
        },
        {
          word: "dos",
          translation: "two",
          pronunciation: "/dos/",
          partOfSpeech: "number",
        },
        {
          word: "hoy",
          translation: "today",
          pronunciation: "/oj/",
          partOfSpeech: "adverb",
        },
      ],
      grammarNote:
        "'Que tal?' is a casual greeting meaning 'How are you?' or 'How's it going?' You can answer with 'Muy bien' (very well), 'Bien' (well), or 'Regular' (so-so).",
      difficulty: "easy",
    },
    {
      id: 2,
      avatarLine: "Dos cafes! Grandes o pequenos?",
      avatarLineEn: "Two coffees! Large or small?",
      expectedUserPhrase: "Uno grande y uno pequeno.",
      expectedUserPhraseEn: "One large and one small.",
      acceptableVariations: [
        "Un grande y un pequeno",
        "Uno grande, uno pequeno",
        "Un cafe grande y uno pequeno",
        "Un grande y un pequeno, por favor",
        "Uno grande y otro pequeno",
      ],
      vocabulary: [
        {
          word: "uno",
          translation: "one",
          pronunciation: "/u.no/",
          partOfSpeech: "number",
        },
        {
          word: "y",
          translation: "and",
          pronunciation: "/i/",
          partOfSpeech: "conjunction",
        },
        {
          word: "grandes",
          translation: "large (plural)",
          pronunciation: "/gran.des/",
          partOfSpeech: "adjective",
        },
        {
          word: "pequenos",
          translation: "small (plural)",
          pronunciation: "/pe.ke.njos/",
          partOfSpeech: "adjective",
        },
      ],
      grammarNote:
        "When specifying different items, use 'uno... y uno...' (one... and one...). 'Uno' shortens to 'un' before a masculine noun: 'un cafe grande'.",
      difficulty: "medium",
    },
    {
      id: 3,
      avatarLine: "Y como los quiere? Con leche, solo, con azucar?",
      avatarLineEn: "And how do you want them? With milk, black, with sugar?",
      expectedUserPhrase: "El grande con leche y azucar. El pequeno solo.",
      expectedUserPhraseEn:
        "The large one with milk and sugar. The small one black.",
      acceptableVariations: [
        "El grande con leche y azucar, el pequeno solo",
        "Uno con leche y azucar, y uno solo",
        "El grande con leche y con azucar. El pequeno solo",
        "Con leche y azucar el grande. Solo el pequeno",
        "El grande con leche y azucar, y el pequeno solo",
      ],
      vocabulary: [
        {
          word: "como",
          translation: "how",
          pronunciation: "/ko.mo/",
          partOfSpeech: "adverb",
        },
        {
          word: "azucar",
          translation: "sugar",
          pronunciation: "/a.θu.kar/",
          partOfSpeech: "noun",
        },
        {
          word: "el",
          translation: "the (masculine)",
          pronunciation: "/el/",
          partOfSpeech: "article",
        },
        {
          word: "los",
          translation: "them / the (masculine plural)",
          pronunciation: "/los/",
          partOfSpeech: "pronoun",
        },
      ],
      grammarNote:
        "'El' is the masculine singular article ('the'). Use it to refer back to specific items: 'el grande' (the large one). 'Los' is the plural form: 'los cafes' (the coffees).",
      difficulty: "medium",
    },
    {
      id: 4,
      avatarLine:
        "Perfecto. Quiere algo para comer? Hoy tenemos tostadas y tortilla.",
      avatarLineEn:
        "Perfect. Would you like something to eat? Today we have toast and tortilla.",
      expectedUserPhrase: "Que es la tortilla?",
      expectedUserPhraseEn: "What is the tortilla?",
      acceptableVariations: [
        "Que es tortilla",
        "Que es una tortilla",
        "La tortilla, que es",
        "Que es la tortilla, por favor",
      ],
      vocabulary: [
        {
          word: "para comer",
          translation: "to eat",
          pronunciation: "/pa.ra ko.mer/",
          partOfSpeech: "phrase",
        },
        {
          word: "tostadas",
          translation: "toast",
          pronunciation: "/tos.ta.das/",
          partOfSpeech: "noun",
        },
        {
          word: "tortilla",
          translation: "tortilla (Spanish omelette)",
          pronunciation: "/tor.ti.ʎa/",
          partOfSpeech: "noun",
        },
        {
          word: "que es",
          translation: "what is",
          pronunciation: "/ke es/",
          partOfSpeech: "phrase",
        },
      ],
      grammarNote:
        "'Que es...?' means 'What is...?' — an essential question for learners. Asking about unfamiliar items is a great strategy. 'Para comer' literally means 'for eating' (para + infinitive).",
      difficulty: "medium",
    },
    {
      id: 5,
      avatarLine: "Es una tortilla de patatas. Esta muy buena!",
      avatarLineEn: "It's a potato omelette. It's very good!",
      expectedUserPhrase:
        "Quiero una tortilla y dos tostadas, por favor.",
      expectedUserPhraseEn:
        "I want a tortilla and two pieces of toast, please.",
      acceptableVariations: [
        "Una tortilla y dos tostadas, por favor",
        "Quiero una tortilla y tostadas",
        "Si, una tortilla y dos tostadas",
        "Una tortilla y dos tostadas",
        "Quiero tortilla y dos tostadas, por favor",
      ],
      vocabulary: [
        {
          word: "patatas",
          translation: "potatoes",
          pronunciation: "/pa.ta.tas/",
          partOfSpeech: "noun",
        },
        {
          word: "una",
          translation: "a / one (feminine)",
          pronunciation: "/u.na/",
          partOfSpeech: "article",
        },
        {
          word: "buena",
          translation: "good (feminine)",
          pronunciation: "/bwe.na/",
          partOfSpeech: "adjective",
        },
        {
          word: "de",
          translation: "of / from",
          pronunciation: "/de/",
          partOfSpeech: "preposition",
        },
      ],
      grammarNote:
        "'Un' is used before masculine nouns ('un cafe') and 'una' before feminine nouns ('una tortilla'). 'Bueno/buena' changes to match the gender of the noun: 'buena tortilla', 'buen cafe'.",
      difficulty: "medium",
    },
    {
      id: 6,
      avatarLine: "Son ocho euros con setenta y cinco.",
      avatarLineEn: "That's eight euros and seventy-five cents.",
      expectedUserPhrase: "Puedo pagar con tarjeta?",
      expectedUserPhraseEn: "Can I pay by card?",
      acceptableVariations: [
        "Puedo pagar con tarjeta, por favor",
        "Con tarjeta, por favor",
        "Se puede pagar con tarjeta",
        "Tarjeta, por favor",
        "Pago con tarjeta",
        "Acepta tarjeta",
      ],
      vocabulary: [
        {
          word: "puedo",
          translation: "can I / I can",
          pronunciation: "/pwe.do/",
          partOfSpeech: "verb",
        },
        {
          word: "pagar",
          translation: "to pay",
          pronunciation: "/pa.gar/",
          partOfSpeech: "verb",
        },
        {
          word: "tarjeta",
          translation: "card",
          pronunciation: "/tar.xe.ta/",
          partOfSpeech: "noun",
        },
        {
          word: "ocho",
          translation: "eight",
          pronunciation: "/o.tSo/",
          partOfSpeech: "number",
        },
      ],
      grammarNote:
        "'Puedo + infinitive' means 'Can I + verb': 'Puedo pagar' (Can I pay), 'Puedo tener' (Can I have). 'Con tarjeta' (by card) vs 'en efectivo' (in cash).",
      difficulty: "medium",
    },
    {
      id: 7,
      avatarLine: "Si, claro! Aqui tiene el datafono. Buen provecho!",
      avatarLineEn:
        "Yes, of course! Here's the card reader. Enjoy your meal!",
      expectedUserPhrase: "",
      expectedUserPhraseEn: "",
      acceptableVariations: [],
      vocabulary: [
        {
          word: "claro",
          translation: "of course / sure",
          pronunciation: "/kla.ro/",
          partOfSpeech: "adverb",
        },
        {
          word: "datafono",
          translation: "card reader / card terminal",
          pronunciation: "/da.ta.fo.no/",
          partOfSpeech: "noun",
        },
        {
          word: "buen provecho",
          translation: "enjoy your meal",
          pronunciation: "/bwen pro.be.tSo/",
          partOfSpeech: "phrase",
        },
        {
          word: "setenta y cinco",
          translation: "seventy-five",
          pronunciation: "/se.ten.ta i θin.ko/",
          partOfSpeech: "number",
        },
      ],
      grammarNote:
        "'Claro' means 'of course' and is very common in casual Spanish. 'Datafono' is the word used in Spain for a card payment terminal — in Latin America you might hear 'terminal' instead.",
      difficulty: "easy",
    },
  ],
};
