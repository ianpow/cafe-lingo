import type { Scenario } from "@/lib/types";

export const cafeScenario3: Scenario = {
  id: "cafe-ordering-3",
  title: "At the Cafe — Level 3",
  titleEs: "En el Cafe — Nivel 3",
  description:
    "You're a regular at Cafe Sol! Handle a wrong order, ask for recommendations, and chat with the barista.",
  setting: "Cafe Sol, Madrid — you're becoming a regular",
  turns: [
    {
      id: 1,
      avatarLine: "Buenos dias! Ya es usted un cliente habitual! Lo de siempre?",
      avatarLineEn:
        "Good morning! You're already a regular! The usual?",
      expectedUserPhrase: "Buenos dias! No, hoy quiero algo diferente.",
      expectedUserPhraseEn: "Good morning! No, today I want something different.",
      acceptableVariations: [
        "Buenos dias! Hoy quiero algo diferente",
        "No, hoy algo diferente por favor",
        "Buenos dias! No, quiero algo diferente hoy",
        "Hoy no, quiero algo diferente",
        "No, hoy quiero probar algo diferente",
      ],
      vocabulary: [
        {
          word: "cliente habitual",
          translation: "regular customer",
          pronunciation: "/kljen.te a.bi.twal/",
          partOfSpeech: "noun",
        },
        {
          word: "lo de siempre",
          translation: "the usual",
          pronunciation: "/lo de sjem.pre/",
          partOfSpeech: "phrase",
        },
        {
          word: "hoy",
          translation: "today",
          pronunciation: "/oj/",
          partOfSpeech: "adverb",
        },
        {
          word: "diferente",
          translation: "different",
          pronunciation: "/di.fe.ren.te/",
          partOfSpeech: "adjective",
        },
      ],
      grammarNote:
        "'Lo de siempre' literally means 'the thing of always' — a common idiom for 'the usual'. 'Algo' (something) pairs with adjectives: 'algo diferente' (something different), 'algo grande' (something big).",
      difficulty: "medium",
    },
    {
      id: 2,
      avatarLine:
        "Claro! Que le apetece? Tenemos cafe, te, chocolate caliente...",
      avatarLineEn:
        "Of course! What do you feel like? We have coffee, tea, hot chocolate...",
      expectedUserPhrase: "Un chocolate caliente, por favor.",
      expectedUserPhraseEn: "A hot chocolate, please.",
      acceptableVariations: [
        "Chocolate caliente, por favor",
        "Quiero un chocolate caliente",
        "Un chocolate caliente",
        "Me apetece un chocolate caliente",
        "Quiero un chocolate caliente, por favor",
      ],
      vocabulary: [
        {
          word: "que le apetece",
          translation: "what do you feel like",
          pronunciation: "/ke le a.pe.te.θe/",
          partOfSpeech: "phrase",
        },
        {
          word: "chocolate caliente",
          translation: "hot chocolate",
          pronunciation: "/tSo.ko.la.te ka.ljen.te/",
          partOfSpeech: "noun",
        },
        {
          word: "te",
          translation: "tea",
          pronunciation: "/te/",
          partOfSpeech: "noun",
        },
        {
          word: "claro",
          translation: "of course",
          pronunciation: "/kla.ro/",
          partOfSpeech: "adverb",
        },
      ],
      grammarNote:
        "'Apetecer' means 'to feel like / to fancy' and works like 'gustar': 'Me apetece un cafe' (I feel like a coffee). 'Le' is the formal 'you' indirect object pronoun.",
      difficulty: "medium",
    },
    {
      id: 3,
      avatarLine: "Buena eleccion! Con nata o sin nata?",
      avatarLineEn: "Good choice! With cream or without cream?",
      expectedUserPhrase: "Con nata, por favor.",
      expectedUserPhraseEn: "With cream, please.",
      acceptableVariations: [
        "Con nata",
        "Con nata por favor",
        "Si, con nata por favor",
        "Con nata, si",
        "Quiero con nata",
      ],
      vocabulary: [
        {
          word: "buena eleccion",
          translation: "good choice",
          pronunciation: "/bwe.na e.lek.θjon/",
          partOfSpeech: "phrase",
        },
        {
          word: "nata",
          translation: "cream/whipped cream",
          pronunciation: "/na.ta/",
          partOfSpeech: "noun",
        },
        {
          word: "sin",
          translation: "without",
          pronunciation: "/sin/",
          partOfSpeech: "preposition",
        },
        {
          word: "o",
          translation: "or",
          pronunciation: "/o/",
          partOfSpeech: "conjunction",
        },
      ],
      grammarNote:
        "'Con' (with) and 'sin' (without) are opposites you'll use constantly: 'con nata' (with cream), 'sin azucar' (without sugar), 'con leche' (with milk), 'sin gluten' (gluten-free).",
      difficulty: "easy",
    },
    {
      id: 4,
      avatarLine:
        "Aqui tiene su chocolate... Ay, perdone! Este es con leche, no chocolate.",
      avatarLineEn:
        "Here's your chocolate... Oh, sorry! This is with milk, not chocolate.",
      expectedUserPhrase: "Disculpe, esto no es lo que pedi.",
      expectedUserPhraseEn: "Excuse me, this is not what I ordered.",
      acceptableVariations: [
        "Perdone, esto no es lo que pedi",
        "Disculpe, esto no es mi chocolate",
        "Esto no es lo que pedi",
        "Perdone, yo pedi un chocolate",
        "Disculpe, pedi un chocolate caliente",
        "Esto no es mi pedido",
      ],
      vocabulary: [
        {
          word: "disculpe",
          translation: "excuse me (formal)",
          pronunciation: "/dis.kul.pe/",
          partOfSpeech: "verb",
        },
        {
          word: "esto",
          translation: "this",
          pronunciation: "/es.to/",
          partOfSpeech: "pronoun",
        },
        {
          word: "pedi",
          translation: "I ordered",
          pronunciation: "/pe.di/",
          partOfSpeech: "verb",
        },
        {
          word: "lo que",
          translation: "what/that which",
          pronunciation: "/lo ke/",
          partOfSpeech: "phrase",
        },
      ],
      grammarNote:
        "'Pedi' is the past tense (preterite) of 'pedir' (to order/ask for). 'Lo que pedi' means 'what I ordered'. 'Disculpe' and 'perdone' are both polite ways to say 'excuse me' in formal Spanish.",
      difficulty: "hard",
    },
    {
      id: 5,
      avatarLine:
        "Tiene razon! Lo siento mucho. Ahora le traigo el chocolate.",
      avatarLineEn:
        "You're right! I'm very sorry. I'll bring you the chocolate now.",
      expectedUserPhrase: "No se preocupe. No pasa nada.",
      expectedUserPhraseEn: "Don't worry. It's no big deal.",
      acceptableVariations: [
        "No pasa nada",
        "No se preocupe",
        "No se preocupe, no pasa nada",
        "Tranquilo, no pasa nada",
        "Esta bien, no se preocupe",
        "No hay problema",
      ],
      vocabulary: [
        {
          word: "no se preocupe",
          translation: "don't worry (formal)",
          pronunciation: "/no se pre.o.ku.pe/",
          partOfSpeech: "phrase",
        },
        {
          word: "no pasa nada",
          translation: "it's no big deal / no problem",
          pronunciation: "/no pa.sa na.da/",
          partOfSpeech: "phrase",
        },
        {
          word: "lo siento",
          translation: "I'm sorry",
          pronunciation: "/lo sjen.to/",
          partOfSpeech: "phrase",
        },
        {
          word: "tiene razon",
          translation: "you're right",
          pronunciation: "/tje.ne ra.θon/",
          partOfSpeech: "phrase",
        },
      ],
      grammarNote:
        "'No pasa nada' is one of the most common phrases in Spanish — literally 'nothing happens' but used like 'no worries' or 'it's fine'. 'No se preocupe' uses the formal imperative of 'preocuparse' (to worry).",
      difficulty: "medium",
    },
    {
      id: 6,
      avatarLine:
        "Aqui tiene, su chocolate caliente con nata. Le recomiendo las galletas.",
      avatarLineEn:
        "Here you go, your hot chocolate with cream. I recommend the cookies.",
      expectedUserPhrase:
        "Si, quiero unas galletas tambien. Cuanto es todo?",
      expectedUserPhraseEn:
        "Yes, I want some cookies too. How much is everything?",
      acceptableVariations: [
        "Si, unas galletas tambien. Cuanto es?",
        "Quiero galletas tambien. Cuanto es todo?",
        "Si, galletas por favor. Cuanto es todo?",
        "Unas galletas, por favor. Cuanto es?",
        "Si, tambien quiero galletas. Cuanto es todo?",
        "Galletas tambien. Cuanto cuesta todo?",
      ],
      vocabulary: [
        {
          word: "galletas",
          translation: "cookies/biscuits",
          pronunciation: "/ga.je.tas/",
          partOfSpeech: "noun",
        },
        {
          word: "le recomiendo",
          translation: "I recommend (to you)",
          pronunciation: "/le re.ko.mjen.do/",
          partOfSpeech: "phrase",
        },
        {
          word: "cuanto es",
          translation: "how much is it",
          pronunciation: "/kwan.to es/",
          partOfSpeech: "phrase",
        },
        {
          word: "todo",
          translation: "everything/all",
          pronunciation: "/to.do/",
          partOfSpeech: "pronoun",
        },
      ],
      grammarNote:
        "'Cuanto es?' means 'how much is it?' for a total. 'Cuanto cuesta?' means 'how much does it cost?' for a single item. 'Unas' before a plural noun means 'some': 'unas galletas' (some cookies).",
      difficulty: "medium",
    },
    {
      id: 7,
      avatarLine:
        "Son cinco euros con veinte. Gracias por su paciencia! Hasta manana!",
      avatarLineEn:
        "That's five euros and twenty cents. Thanks for your patience! See you tomorrow!",
      expectedUserPhrase: "",
      expectedUserPhraseEn: "",
      acceptableVariations: [],
      vocabulary: [
        {
          word: "cinco",
          translation: "five",
          pronunciation: "/θin.ko/",
          partOfSpeech: "number",
        },
        {
          word: "veinte",
          translation: "twenty",
          pronunciation: "/bejn.te/",
          partOfSpeech: "number",
        },
        {
          word: "paciencia",
          translation: "patience",
          pronunciation: "/pa.θjen.θja/",
          partOfSpeech: "noun",
        },
        {
          word: "hasta manana",
          translation: "see you tomorrow",
          pronunciation: "/as.ta ma.nja.na/",
          partOfSpeech: "phrase",
        },
      ],
      grammarNote:
        "'Hasta manana' (see you tomorrow) implies you're now a regular! Notice how the barista uses 'su' (your, formal) — 'su paciencia' (your patience). Spanish has formal and informal registers throughout.",
      difficulty: "medium",
    },
  ],
};
