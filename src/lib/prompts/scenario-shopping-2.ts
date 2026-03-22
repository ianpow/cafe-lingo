import type { Scenario } from "@/lib/types";

export const shoppingScenario2: Scenario = {
  id: "shopping-2",
  title: "Shopping for Souvenirs — Level 2",
  titleEs: "De Compras — Nivel 2",
  description:
    "Shop with more confidence! Try on clothes, compare items, and ask about returns.",
  setting: "Tienda La Estrella, Madrid — browsing more",
  turns: [
    {
      id: 1,
      avatarLine: "Buenas tardes! Le puedo ayudar con algo?",
      avatarLineEn: "Good afternoon! Can I help you with something?",
      expectedUserPhrase: "Si, puedo probarme esta camiseta?",
      expectedUserPhraseEn: "Yes, can I try on this t-shirt?",
      acceptableVariations: [
        "Puedo probarme esta camiseta",
        "Quiero probarme esta camiseta",
        "Me puedo probar esta camiseta",
        "Si, quiero probarme esto",
      ],
      vocabulary: [
        {
          word: "probarme",
          translation: "to try on (myself)",
          pronunciation: "/pro.bar.me/",
          partOfSpeech: "verb",
        },
        {
          word: "esta",
          translation: "this (feminine)",
          pronunciation: "/es.ta/",
          partOfSpeech: "determiner",
        },
        {
          word: "puedo",
          translation: "can I / I can",
          pronunciation: "/pwe.do/",
          partOfSpeech: "verb",
        },
        {
          word: "ayudar",
          translation: "to help",
          pronunciation: "/a.ju.dar/",
          partOfSpeech: "verb",
        },
      ],
      grammarNote:
        "'Probarse' is a reflexive verb meaning 'to try on'. The reflexive pronoun 'me' attaches to the infinitive: 'probarme'. You can also place it before the conjugated verb: 'Me puedo probar'.",
      difficulty: "medium",
    },
    {
      id: 2,
      avatarLine: "Claro! El probador esta al fondo a la derecha. Que tal le queda?",
      avatarLineEn: "Of course! The fitting room is at the back on the right. How does it fit?",
      expectedUserPhrase: "No me queda bien. Es demasiado pequena.",
      expectedUserPhraseEn: "It doesn't fit me well. It's too small.",
      acceptableVariations: [
        "Es muy pequena",
        "Me queda pequena",
        "No me queda, es demasiado pequena",
        "Es demasiado pequena para mi",
        "Me queda muy pequena",
      ],
      vocabulary: [
        {
          word: "probador",
          translation: "fitting room",
          pronunciation: "/pro.ba.dor/",
          partOfSpeech: "noun",
        },
        {
          word: "quedar",
          translation: "to fit (clothing)",
          pronunciation: "/ke.dar/",
          partOfSpeech: "verb",
        },
        {
          word: "demasiado",
          translation: "too much / too",
          pronunciation: "/de.ma.sja.do/",
          partOfSpeech: "adverb",
        },
        {
          word: "bien",
          translation: "well",
          pronunciation: "/bjen/",
          partOfSpeech: "adverb",
        },
      ],
      grammarNote:
        "'Quedar' is used for how clothing fits: 'Me queda bien' (It fits me well), 'Me queda grande' (It's too big on me). The subject is the clothing, not the person.",
      difficulty: "medium",
    },
    {
      id: 3,
      avatarLine: "Lo siento. Quiere probar otra talla? Tenemos mediana y grande.",
      avatarLineEn: "I'm sorry. Would you like to try another size? We have medium and large.",
      expectedUserPhrase: "Tiene una talla mas grande?",
      expectedUserPhraseEn: "Do you have a bigger size?",
      acceptableVariations: [
        "La mediana, por favor",
        "Puedo probar la mediana",
        "Una talla mas grande, por favor",
        "Si, la mediana por favor",
        "Quiero probar la mediana",
      ],
      vocabulary: [
        {
          word: "otra",
          translation: "another (feminine)",
          pronunciation: "/o.tra/",
          partOfSpeech: "adjective",
        },
        {
          word: "mas grande",
          translation: "bigger / larger",
          pronunciation: "/mas gran.de/",
          partOfSpeech: "phrase",
        },
        {
          word: "tiene",
          translation: "do you have (formal)",
          pronunciation: "/tje.ne/",
          partOfSpeech: "verb",
        },
        {
          word: "lo siento",
          translation: "I'm sorry",
          pronunciation: "/lo sjen.to/",
          partOfSpeech: "phrase",
        },
      ],
      grammarNote:
        "Comparisons in Spanish use 'mas' + adjective: 'mas grande' (bigger), 'mas pequeno' (smaller). Unlike English, Spanish doesn't add '-er' to adjectives.",
      difficulty: "medium",
    },
    {
      id: 4,
      avatarLine: "Aqui tiene la mediana. Tambien tenemos esta en azul. Cual prefiere?",
      avatarLineEn: "Here's the medium. We also have this one in blue. Which do you prefer?",
      expectedUserPhrase: "Cual es mas bonita? Me gusta la azul, pero la roja tambien es bonita.",
      expectedUserPhraseEn: "Which is prettier? I like the blue one, but the red one is also pretty.",
      acceptableVariations: [
        "Me gusta la azul",
        "Prefiero la azul",
        "La azul es mas bonita",
        "Me gusta mas la azul",
        "La roja, por favor",
        "Prefiero la roja",
      ],
      vocabulary: [
        {
          word: "cual",
          translation: "which",
          pronunciation: "/kwal/",
          partOfSpeech: "pronoun",
        },
        {
          word: "bonita",
          translation: "pretty (feminine)",
          pronunciation: "/bo.ni.ta/",
          partOfSpeech: "adjective",
        },
        {
          word: "pero",
          translation: "but",
          pronunciation: "/pe.ro/",
          partOfSpeech: "conjunction",
        },
        {
          word: "tambien",
          translation: "also / too",
          pronunciation: "/tam.bjen/",
          partOfSpeech: "adverb",
        },
      ],
      grammarNote:
        "'Cual' means 'which' when choosing between options. Use 'cual' before 'es' or a verb: 'Cual prefiere?' (Which do you prefer?). For 'which + noun', use 'que': 'Que camiseta prefiere?'.",
      difficulty: "hard",
    },
    {
      id: 5,
      avatarLine: "Las dos son muy bonitas! La azul cuesta quince euros y la roja catorce. Hay un descuento hoy: diez por ciento.",
      avatarLineEn: "Both are very pretty! The blue one costs fifteen euros and the red one fourteen. There's a discount today: ten percent.",
      expectedUserPhrase: "Hay algun descuento si compro las dos?",
      expectedUserPhraseEn: "Is there any discount if I buy both?",
      acceptableVariations: [
        "Puedo tener un descuento",
        "Hay descuento por las dos",
        "Cuanto cuestan las dos juntas",
        "Cuanto cuestan las dos",
        "Me llevo las dos, hay descuento",
      ],
      vocabulary: [
        {
          word: "descuento",
          translation: "discount",
          pronunciation: "/des.kwen.to/",
          partOfSpeech: "noun",
        },
        {
          word: "compro",
          translation: "I buy",
          pronunciation: "/kom.pro/",
          partOfSpeech: "verb",
        },
        {
          word: "las dos",
          translation: "both (feminine)",
          pronunciation: "/las dos/",
          partOfSpeech: "phrase",
        },
        {
          word: "por ciento",
          translation: "percent",
          pronunciation: "/por θjen.to/",
          partOfSpeech: "phrase",
        },
      ],
      grammarNote:
        "'Si' (without accent) means 'if' and introduces a condition: 'Si compro las dos' (If I buy both). 'Si' (with accent) means 'yes'. This distinction is important in written Spanish.",
      difficulty: "hard",
    },
    {
      id: 6,
      avatarLine: "Si compra las dos, le hago un precio especial: veinticinco euros en total. Puedo hacer una devolucion si no le gustan.",
      avatarLineEn: "If you buy both, I'll give you a special price: twenty-five euros total. I can do a return if you don't like them.",
      expectedUserPhrase: "Puedo devolver o cambiar si no me queda bien?",
      expectedUserPhraseEn: "Can I return or exchange if it doesn't fit me?",
      acceptableVariations: [
        "Se puede devolver",
        "Puedo hacer un cambio",
        "Aceptan devoluciones",
        "Puedo cambiarla si no me queda bien",
        "Cual es la politica de devolucion",
      ],
      vocabulary: [
        {
          word: "devolver",
          translation: "to return (an item)",
          pronunciation: "/de.bol.ber/",
          partOfSpeech: "verb",
        },
        {
          word: "cambiar",
          translation: "to exchange",
          pronunciation: "/kam.bjar/",
          partOfSpeech: "verb",
        },
        {
          word: "devolucion",
          translation: "return (noun)",
          pronunciation: "/de.bo.lu.θjon/",
          partOfSpeech: "noun",
        },
        {
          word: "en total",
          translation: "in total",
          pronunciation: "/en to.tal/",
          partOfSpeech: "phrase",
        },
      ],
      grammarNote:
        "'Devolver' means 'to return (an item)' — don't confuse it with 'volver' (to come back). 'Cambiar' means 'to exchange'. Both are common in shopping: 'Quiero devolver esto' (I want to return this).",
      difficulty: "hard",
    },
    {
      id: 7,
      avatarLine: "Si, tiene quince dias para devoluciones con el recibo. Le cobro veinticinco euros. Gracias por su compra!",
      avatarLineEn: "Yes, you have fifteen days for returns with the receipt. That'll be twenty-five euros. Thank you for your purchase!",
      expectedUserPhrase: "Perfecto, me las llevo. Gracias!",
      expectedUserPhraseEn: "Perfect, I'll take them. Thank you!",
      acceptableVariations: [
        "Me las llevo, gracias",
        "Perfecto, gracias",
        "Vale, me las llevo",
        "Las compro, gracias",
        "Genial, muchas gracias",
      ],
      vocabulary: [
        {
          word: "me las llevo",
          translation: "I'll take them",
          pronunciation: "/me las ʎe.bo/",
          partOfSpeech: "phrase",
        },
        {
          word: "recibo",
          translation: "receipt",
          pronunciation: "/re.θi.bo/",
          partOfSpeech: "noun",
        },
        {
          word: "cobrar",
          translation: "to charge",
          pronunciation: "/ko.brar/",
          partOfSpeech: "verb",
        },
        {
          word: "perfecto",
          translation: "perfect",
          pronunciation: "/per.fek.to/",
          partOfSpeech: "adjective",
        },
      ],
      grammarNote:
        "'Me lo llevo' (I'll take it) is the go-to phrase for deciding to buy. 'Lo' refers to a masculine item, 'la' to feminine, 'los/las' to plurals. Here, 'me las llevo' because 'camisetas' is feminine plural.",
      difficulty: "medium",
    },
  ],
};
