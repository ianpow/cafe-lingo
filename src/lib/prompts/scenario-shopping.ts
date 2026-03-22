import type { Scenario } from "@/lib/types";

export const shoppingScenario: Scenario = {
  id: "shopping",
  title: "Shopping for Souvenirs",
  titleEs: "De Compras",
  description:
    "Buy souvenirs at a shop in Spain. Practice asking prices, sizes, colors, and negotiating politely.",
  setting: "Tienda La Estrella, a souvenir shop near Plaza Mayor in Madrid",
  turns: [
    {
      id: 1,
      avatarLine: "Hola! Bienvenido a La Estrella. Busca algo especial?",
      avatarLineEn: "Hello! Welcome to La Estrella. Looking for something special?",
      expectedUserPhrase: "Hola. Busco un regalo, por favor.",
      expectedUserPhraseEn: "Hello. I'm looking for a gift, please.",
      acceptableVariations: [
        "Hola, busco un regalo",
        "Busco un regalo por favor",
        "Hola, estoy buscando un regalo",
        "Si, busco un regalo",
      ],
      vocabulary: [
        {
          word: "busco",
          translation: "I'm looking for",
          pronunciation: "/bus.ko/",
          partOfSpeech: "verb",
        },
        {
          word: "regalo",
          translation: "gift",
          pronunciation: "/re.ga.lo/",
          partOfSpeech: "noun",
        },
        {
          word: "algo",
          translation: "something",
          pronunciation: "/al.go/",
          partOfSpeech: "pronoun",
        },
        {
          word: "especial",
          translation: "special",
          pronunciation: "/es.pe.θjal/",
          partOfSpeech: "adjective",
        },
      ],
      grammarNote:
        "'Buscar' means 'to look for'. Unlike English, no preposition is needed: 'Busco un regalo' (I look for a gift), not 'Busco para un regalo'.",
      difficulty: "easy",
    },
    {
      id: 2,
      avatarLine: "Tenemos camisetas, imanes y abanicos. Que le gusta?",
      avatarLineEn: "We have t-shirts, magnets, and fans. What do you like?",
      expectedUserPhrase: "Me gustan las camisetas.",
      expectedUserPhraseEn: "I like the t-shirts.",
      acceptableVariations: [
        "Las camisetas, por favor",
        "Me gustan las camisetas, por favor",
        "Quiero ver las camisetas",
        "Las camisetas me gustan",
      ],
      vocabulary: [
        {
          word: "camiseta",
          translation: "t-shirt",
          pronunciation: "/ka.mi.se.ta/",
          partOfSpeech: "noun",
        },
        {
          word: "imanes",
          translation: "magnets",
          pronunciation: "/i.ma.nes/",
          partOfSpeech: "noun",
        },
        {
          word: "abanicos",
          translation: "fans",
          pronunciation: "/a.ba.ni.kos/",
          partOfSpeech: "noun",
        },
        {
          word: "me gustan",
          translation: "I like (plural)",
          pronunciation: "/me gus.tan/",
          partOfSpeech: "verb",
        },
      ],
      grammarNote:
        "'Gustar' works differently from English. The thing you like is the subject: 'Me gusta la camiseta' (singular) vs. 'Me gustan las camisetas' (plural).",
      difficulty: "medium",
    },
    {
      id: 3,
      avatarLine: "Muy bien! De que talla? Pequena, mediana o grande?",
      avatarLineEn: "Very good! What size? Small, medium, or large?",
      expectedUserPhrase: "Talla mediana, por favor.",
      expectedUserPhraseEn: "Medium size, please.",
      acceptableVariations: [
        "Mediana, por favor",
        "Mediana",
        "Una talla mediana",
        "La mediana, por favor",
      ],
      vocabulary: [
        {
          word: "talla",
          translation: "size (clothing)",
          pronunciation: "/ta.ʎa/",
          partOfSpeech: "noun",
        },
        {
          word: "pequena",
          translation: "small (feminine)",
          pronunciation: "/pe.ke.nja/",
          partOfSpeech: "adjective",
        },
        {
          word: "mediana",
          translation: "medium (feminine)",
          pronunciation: "/me.dja.na/",
          partOfSpeech: "adjective",
        },
        {
          word: "grande",
          translation: "large",
          pronunciation: "/gran.de/",
          partOfSpeech: "adjective",
        },
      ],
      grammarNote:
        "Size adjectives must match the noun's gender. 'Camiseta' is feminine, so use 'pequena/mediana'. For masculine nouns like 'jersey', use 'pequeno/mediano'.",
      difficulty: "easy",
    },
    {
      id: 4,
      avatarLine: "Que color prefiere? Rojo, azul o negro?",
      avatarLineEn: "What color do you prefer? Red, blue, or black?",
      expectedUserPhrase: "Rojo, por favor.",
      expectedUserPhraseEn: "Red, please.",
      acceptableVariations: [
        "Rojo",
        "El rojo, por favor",
        "Prefiero el rojo",
        "Quiero la roja",
        "Me gusta el rojo",
      ],
      vocabulary: [
        {
          word: "color",
          translation: "color",
          pronunciation: "/ko.lor/",
          partOfSpeech: "noun",
        },
        {
          word: "rojo",
          translation: "red",
          pronunciation: "/ro.xo/",
          partOfSpeech: "adjective",
        },
        {
          word: "azul",
          translation: "blue",
          pronunciation: "/a.θul/",
          partOfSpeech: "adjective",
        },
        {
          word: "negro",
          translation: "black",
          pronunciation: "/ne.gro/",
          partOfSpeech: "adjective",
        },
      ],
      grammarNote:
        "'Prefiere' is the formal 'usted' form of 'preferir' (to prefer). Shopkeepers often use 'usted' to be polite. Color adjectives agree with the noun: 'camiseta roja' (feminine).",
      difficulty: "easy",
    },
    {
      id: 5,
      avatarLine: "Esta camiseta cuesta doce euros.",
      avatarLineEn: "This t-shirt costs twelve euros.",
      expectedUserPhrase: "Cuanto cuesta?",
      expectedUserPhraseEn: "How much does it cost?",
      acceptableVariations: [
        "Cuanto cuesta la camiseta",
        "Cuanto es",
        "Doce euros, vale",
        "Doce euros, de acuerdo",
        "Esta bien, doce euros",
      ],
      vocabulary: [
        {
          word: "cuanto cuesta",
          translation: "how much does it cost",
          pronunciation: "/kwan.to kwes.ta/",
          partOfSpeech: "phrase",
        },
        {
          word: "cuesta",
          translation: "it costs",
          pronunciation: "/kwes.ta/",
          partOfSpeech: "verb",
        },
        {
          word: "doce",
          translation: "twelve",
          pronunciation: "/do.θe/",
          partOfSpeech: "number",
        },
        {
          word: "euros",
          translation: "euros",
          pronunciation: "/eu.ros/",
          partOfSpeech: "noun",
        },
      ],
      grammarNote:
        "'Cuanto cuesta?' (How much does it cost?) is essential for shopping. For plural items, use 'Cuanto cuestan?' — the verb must match: 'cuesta' (singular) vs. 'cuestan' (plural).",
      difficulty: "medium",
    },
    {
      id: 6,
      avatarLine: "Doce euros. Quiere una bolsa?",
      avatarLineEn: "Twelve euros. Would you like a bag?",
      expectedUserPhrase: "Si, una bolsa por favor.",
      expectedUserPhraseEn: "Yes, a bag please.",
      acceptableVariations: [
        "Si, por favor",
        "Si, una bolsa",
        "Una bolsa, por favor",
        "No, gracias",
        "Si, gracias",
      ],
      vocabulary: [
        {
          word: "bolsa",
          translation: "bag",
          pronunciation: "/bol.sa/",
          partOfSpeech: "noun",
        },
        {
          word: "quiere",
          translation: "do you want (formal)",
          pronunciation: "/kje.re/",
          partOfSpeech: "verb",
        },
        {
          word: "compra",
          translation: "purchase",
          pronunciation: "/kom.pra/",
          partOfSpeech: "noun",
        },
        {
          word: "vale",
          translation: "okay/alright",
          pronunciation: "/ba.le/",
          partOfSpeech: "interjection",
        },
      ],
      grammarNote:
        "'Quiere' is the formal 'usted' form of 'querer' (to want). In shops, you'll hear this polite form. The informal version would be 'Quieres una bolsa?'.",
      difficulty: "easy",
    },
    {
      id: 7,
      avatarLine: "Aqui tiene. Gracias por su compra! Adios!",
      avatarLineEn: "Here you go. Thank you for your purchase! Goodbye!",
      expectedUserPhrase: "",
      expectedUserPhraseEn: "",
      acceptableVariations: [],
      vocabulary: [
        {
          word: "aqui tiene",
          translation: "here you go",
          pronunciation: "/a.ki tje.ne/",
          partOfSpeech: "phrase",
        },
        {
          word: "gracias",
          translation: "thank you",
          pronunciation: "/gra.θjas/",
          partOfSpeech: "noun",
        },
        {
          word: "compra",
          translation: "purchase",
          pronunciation: "/kom.pra/",
          partOfSpeech: "noun",
        },
        {
          word: "adios",
          translation: "goodbye",
          pronunciation: "/a.djos/",
          partOfSpeech: "interjection",
        },
      ],
      grammarNote:
        "'Gracias por' means 'thank you for' and is followed by a noun: 'Gracias por su compra' (Thank you for your purchase). 'Su' is the formal possessive 'your'.",
      difficulty: "easy",
    },
  ],
};
