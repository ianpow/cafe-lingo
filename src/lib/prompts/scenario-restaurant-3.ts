import type { Scenario } from "@/lib/types";

export const restaurantScenario3: Scenario = {
  id: "restaurant-ordering-3",
  title: "At the Restaurant — Level 3",
  titleEs: "En el Restaurante — Nivel 3",
  description:
    "You're a confident diner! Handle a special occasion dinner, deal with menu changes, and make special requests.",
  setting: "Restaurante El Camino, Barcelona — a special celebration",
  turns: [
    {
      id: 1,
      avatarLine:
        "Buenas noches! Bienvenidos a El Camino. En que puedo ayudarles?",
      avatarLineEn:
        "Good evening! Welcome to El Camino. How can I help you?",
      expectedUserPhrase:
        "Buenas noches. Tengo una reserva para cuatro a nombre de Garcia. Es un cumpleanos.",
      expectedUserPhraseEn:
        "Good evening. I have a reservation for four under the name Garcia. It's a birthday.",
      acceptableVariations: [
        "Tengo una reserva para cuatro",
        "Reserva a nombre de Garcia para cuatro",
        "Tengo reserva, es un cumpleanos",
        "Si, reserva para cuatro, es un cumpleanos",
      ],
      vocabulary: [
        {
          word: "cumpleanos",
          translation: "birthday",
          pronunciation: "/kum.ple.a.ɲos/",
          partOfSpeech: "noun",
        },
        {
          word: "a nombre de",
          translation: "under the name of",
          pronunciation: "/a nom.bre de/",
          partOfSpeech: "phrase",
        },
        {
          word: "cuatro",
          translation: "four",
          pronunciation: "/kwa.tro/",
          partOfSpeech: "number",
        },
        {
          word: "ayudarles",
          translation: "to help you (formal plural)",
          pronunciation: "/a.ju.dar.les/",
          partOfSpeech: "verb",
        },
      ],
      grammarNote:
        "'A nombre de...' is the standard phrase for giving your name for a reservation. Notice 'tengo una reserva' uses the Level 2 vocabulary. 'Bienvenidos' is the plural of 'bienvenido' from Level 1.",
      difficulty: "medium",
    },
    {
      id: 2,
      avatarLine:
        "Felicidades! Tenemos su mesa lista. Prefieren una mesa en la terraza o dentro?",
      avatarLineEn:
        "Congratulations! We have your table ready. Do you prefer a table on the terrace or inside?",
      expectedUserPhrase:
        "En la terraza, por favor. Podemos sentarnos cerca de la ventana?",
      expectedUserPhraseEn:
        "On the terrace, please. Can we sit near the window?",
      acceptableVariations: [
        "En la terraza, por favor",
        "Prefiero la terraza",
        "La terraza, cerca de la ventana si es posible",
        "Fuera, por favor, cerca de la ventana",
        "En la terraza, si es posible cerca de la ventana",
      ],
      vocabulary: [
        {
          word: "terraza",
          translation: "terrace / patio",
          pronunciation: "/te.ra.θa/",
          partOfSpeech: "noun",
        },
        {
          word: "sentarnos",
          translation: "to sit down (ourselves)",
          pronunciation: "/sen.tar.nos/",
          partOfSpeech: "verb",
        },
        {
          word: "cerca de",
          translation: "near / close to",
          pronunciation: "/θer.ka de/",
          partOfSpeech: "phrase",
        },
        {
          word: "ventana",
          translation: "window",
          pronunciation: "/ben.ta.na/",
          partOfSpeech: "noun",
        },
      ],
      grammarNote:
        "'Podemos sentarnos...?' (Can we sit...?) uses the reflexive verb 'sentarse'. The '-nos' ending means 'ourselves'. 'Cerca de' (near) is useful for requesting specific seating: 'cerca de la ventana' (near the window), 'cerca de la puerta' (near the door).",
      difficulty: "medium",
    },
    {
      id: 3,
      avatarLine:
        "Claro que si! Aqui tienen. Hoy tenemos un menu del dia muy especial: entrante, plato principal, postre y bebida por veinte euros.",
      avatarLineEn:
        "Of course! Here you go. Today we have a very special prix fixe menu: starter, main course, dessert, and drink for twenty euros.",
      expectedUserPhrase:
        "Que incluye el menu del dia? Cual es el plato principal?",
      expectedUserPhraseEn:
        "What does the prix fixe menu include? What is the main course?",
      acceptableVariations: [
        "Que incluye el menu del dia",
        "Cual es el plato principal del menu del dia",
        "Que tiene el menu del dia",
        "Que hay en el menu del dia",
        "Cuenteme sobre el menu del dia",
      ],
      vocabulary: [
        {
          word: "menu del dia",
          translation: "prix fixe menu / menu of the day",
          pronunciation: "/me.nu del di.a/",
          partOfSpeech: "noun",
        },
        {
          word: "plato principal",
          translation: "main course",
          pronunciation: "/pla.to prin.θi.pal/",
          partOfSpeech: "noun",
        },
        {
          word: "incluye",
          translation: "it includes",
          pronunciation: "/in.klu.je/",
          partOfSpeech: "verb",
        },
        {
          word: "especial",
          translation: "special",
          pronunciation: "/es.pe.θjal/",
          partOfSpeech: "adjective",
        },
      ],
      grammarNote:
        "'Menu del dia' is a very common concept in Spain — most restaurants offer a fixed-price lunch with multiple courses. 'Cual' (which/what) is used when choosing from options, while 'que' (what) is more general. Compare: 'Que es esto?' vs 'Cual prefieres?'.",
      difficulty: "medium",
    },
    {
      id: 4,
      avatarLine:
        "El entrante es gazpacho o ensalada. El plato principal es merluza a la plancha o pollo al horno. Tenemos una carta de vinos excelente. Quieren que les recomiende un vino?",
      avatarLineEn:
        "The starter is gazpacho or salad. The main course is grilled hake or roasted chicken. We have an excellent wine list. Would you like me to recommend a wine?",
      expectedUserPhrase:
        "Si, por favor. Que vino va bien con la merluza?",
      expectedUserPhraseEn:
        "Yes, please. Which wine goes well with the hake?",
      acceptableVariations: [
        "Si, que vino recomienda con el pescado",
        "Que vino va bien con la merluza",
        "Recomiendenos un vino, por favor",
        "Si, que nos recomienda",
        "Que vino marida bien con la merluza",
      ],
      vocabulary: [
        {
          word: "merluza",
          translation: "hake (fish)",
          pronunciation: "/mer.lu.θa/",
          partOfSpeech: "noun",
        },
        {
          word: "a la plancha",
          translation: "grilled (on a flat grill)",
          pronunciation: "/a la plan.tʃa/",
          partOfSpeech: "phrase",
        },
        {
          word: "carta de vinos",
          translation: "wine list",
          pronunciation: "/kar.ta de bi.nos/",
          partOfSpeech: "noun",
        },
        {
          word: "va bien con",
          translation: "goes well with",
          pronunciation: "/ba bjen kon/",
          partOfSpeech: "phrase",
        },
      ],
      grammarNote:
        "'Que vino va bien con...?' is the natural way to ask for a wine pairing. Cooking styles are useful vocabulary: 'a la plancha' (grilled), 'al horno' (roasted/baked), 'frito' (fried), 'a la brasa' (chargrilled). Remember 'vino tinto' and 'vino blanco' from Level 2.",
      difficulty: "hard",
    },
    {
      id: 5,
      avatarLine:
        "Con la merluza, les recomiendo un vino blanco Albarino. Es fresco y ligero. Alguien tiene alguna alergia?",
      avatarLineEn:
        "With the hake, I recommend a white Albarino wine. It's fresh and light. Does anyone have any allergies?",
      expectedUserPhrase:
        "Si, mi amiga es alergica a los frutos secos. El postre tiene frutos secos?",
      expectedUserPhraseEn:
        "Yes, my friend is allergic to nuts. Does the dessert have nuts?",
      acceptableVariations: [
        "Mi amiga es alergica a los frutos secos",
        "Hay frutos secos en el postre",
        "Si, alergia a los frutos secos, el postre los tiene",
        "Una persona es alergica a los frutos secos",
        "El postre lleva frutos secos",
      ],
      vocabulary: [
        {
          word: "alergica",
          translation: "allergic (feminine)",
          pronunciation: "/a.ler.xi.ka/",
          partOfSpeech: "adjective",
        },
        {
          word: "frutos secos",
          translation: "nuts / dried fruits",
          pronunciation: "/fru.tos se.kos/",
          partOfSpeech: "noun",
        },
        {
          word: "amiga",
          translation: "friend (feminine)",
          pronunciation: "/a.mi.ga/",
          partOfSpeech: "noun",
        },
        {
          word: "alguien",
          translation: "someone / anyone",
          pronunciation: "/al.gjen/",
          partOfSpeech: "pronoun",
        },
      ],
      grammarNote:
        "'Alergico/a' follows the same gender pattern as 'vegetariano/a' from Level 2. Use 'es alergico/a a...' (is allergic to...) to communicate allergies. Notice 'lleva' from Level 2 reappears: 'El postre lleva frutos secos?' (Does the dessert contain nuts?).",
      difficulty: "hard",
    },
    {
      id: 6,
      avatarLine:
        "No se preocupen! El flan no tiene frutos secos. Tambien tenemos tarta de queso. Todo estuvo bien con la comida?",
      avatarLineEn:
        "Don't worry! The flan has no nuts. We also have cheesecake. Was everything okay with the meal?",
      expectedUserPhrase:
        "Todo estuvo delicioso! La merluza estaba increible. Puedo preguntar por la receta?",
      expectedUserPhraseEn:
        "Everything was delicious! The hake was incredible. Can I ask for the recipe?",
      acceptableVariations: [
        "Todo estuvo delicioso, puedo pedir la receta",
        "La merluza estaba increible, cual es la receta",
        "Estuvo todo muy rico, nos puede dar la receta",
        "Delicioso todo, me puede dar la receta de la merluza",
        "Todo muy bueno, como se prepara la merluza",
      ],
      vocabulary: [
        {
          word: "receta",
          translation: "recipe",
          pronunciation: "/re.θe.ta/",
          partOfSpeech: "noun",
        },
        {
          word: "increible",
          translation: "incredible",
          pronunciation: "/in.kre.i.ble/",
          partOfSpeech: "adjective",
        },
        {
          word: "preguntar",
          translation: "to ask",
          pronunciation: "/pre.gun.tar/",
          partOfSpeech: "verb",
        },
        {
          word: "tarta de queso",
          translation: "cheesecake",
          pronunciation: "/tar.ta de ke.so/",
          partOfSpeech: "noun",
        },
      ],
      grammarNote:
        "'Estaba' (it was — imperfect) describes how things were during the meal, while 'estuvo' (it was — preterite) from Level 2 sums up the overall experience. Both come from 'estar'. 'Puedo preguntar...?' (Can I ask...?) uses 'poder' like 'podemos' from Level 2.",
      difficulty: "hard",
    },
    {
      id: 7,
      avatarLine:
        "Eso es secreto del chef! Pero vuelvan y se la prepararemos siempre. La cuenta son ochenta euros en total. Ha sido un placer!",
      avatarLineEn:
        "That's the chef's secret! But come back and we'll always make it for you. The bill is eighty euros total. It's been a pleasure!",
      expectedUserPhrase:
        "Gracias, ha sido una noche perfecta. Vamos a dejar una resena. Hasta pronto!",
      expectedUserPhraseEn:
        "Thank you, it's been a perfect night. We're going to leave a review. See you soon!",
      acceptableVariations: [
        "Gracias, ha sido una noche increible",
        "Todo perfecto, vamos a dejar una resena",
        "Muchas gracias, hasta pronto",
        "Gracias por todo, dejaremos una buena resena",
        "Ha sido un placer, hasta pronto",
      ],
      vocabulary: [
        {
          word: "resena",
          translation: "review",
          pronunciation: "/re.se.ɲa/",
          partOfSpeech: "noun",
        },
        {
          word: "ha sido",
          translation: "it has been",
          pronunciation: "/a si.do/",
          partOfSpeech: "phrase",
        },
        {
          word: "dejar",
          translation: "to leave",
          pronunciation: "/de.xar/",
          partOfSpeech: "verb",
        },
        {
          word: "hasta pronto",
          translation: "see you soon",
          pronunciation: "/as.ta pron.to/",
          partOfSpeech: "phrase",
        },
      ],
      grammarNote:
        "'Ha sido' (it has been) is the present perfect of 'ser', used to reflect on a completed experience. 'Vamos a + infinitive' means 'we are going to...' — a simple way to express future plans. 'Hasta pronto' echoes 'vuelva pronto' from Level 1 and 'hasta luego' from Level 2.",
      difficulty: "hard",
    },
  ],
};
