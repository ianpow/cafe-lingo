import type { Scenario } from "@/lib/types";

export const directionsScenario3: Scenario = {
  id: "asking-directions-3",
  title: "Asking for Directions — Level 3",
  titleEs: "Pidiendo Direcciones — Nivel 3",
  description:
    "You're getting around like a local! Handle unexpected detours, use landmarks, and give directions yourself.",
  setting: "A plaza in Seville — a tourist asks YOU for help",
  turns: [
    {
      id: 1,
      avatarLine: "Perdona, hablas espanol? Estoy perdido.",
      avatarLineEn: "Excuse me, do you speak Spanish? I'm lost.",
      expectedUserPhrase: "Si, hablo un poco. En que puedo ayudarte?",
      expectedUserPhraseEn: "Yes, I speak a little. How can I help you?",
      acceptableVariations: [
        "Si, un poco. Que necesitas?",
        "Si, hablo espanol. Necesitas ayuda?",
        "Claro, en que te puedo ayudar?",
        "Si, como puedo ayudarte?",
      ],
      vocabulary: [
        {
          word: "perdona",
          translation: "excuse me (informal)",
          pronunciation: "/per.do.na/",
          partOfSpeech: "verb",
        },
        {
          word: "perdido",
          translation: "lost",
          pronunciation: "/per.di.do/",
          partOfSpeech: "adjective",
        },
        {
          word: "hablo",
          translation: "I speak",
          pronunciation: "/a.blo/",
          partOfSpeech: "verb",
        },
        {
          word: "ayudarte",
          translation: "to help you (informal)",
          pronunciation: "/a.ju.dar.te/",
          partOfSpeech: "verb",
        },
      ],
      grammarNote:
        "'En que puedo ayudarte?' is a helpful phrase meaning 'How can I help you?' The pronoun 'te' attaches to the infinitive 'ayudar' because it's informal. For formal, use 'ayudarle'.",
      difficulty: "medium",
    },
    {
      id: 2,
      avatarLine: "Busco la catedral. Sabes donde esta?",
      avatarLineEn: "I'm looking for the cathedral. Do you know where it is?",
      expectedUserPhrase: "Si, la catedral esta al final de esta calle.",
      expectedUserPhraseEn: "Yes, the cathedral is at the end of this street.",
      acceptableVariations: [
        "La catedral esta por alli, al final de la calle",
        "Si, sigue esta calle hasta el final",
        "Claro, esta al final de esta calle",
        "Si, camina recto y la ves al final",
      ],
      vocabulary: [
        {
          word: "catedral",
          translation: "cathedral",
          pronunciation: "/ka.te.dral/",
          partOfSpeech: "noun",
        },
        {
          word: "al final de",
          translation: "at the end of",
          pronunciation: "/al fi.nal de/",
          partOfSpeech: "phrase",
        },
        {
          word: "esta calle",
          translation: "this street",
          pronunciation: "/es.ta ka.je/",
          partOfSpeech: "phrase",
        },
        {
          word: "sabes",
          translation: "you know (informal)",
          pronunciation: "/sa.bes/",
          partOfSpeech: "verb",
        },
      ],
      grammarNote:
        "'Al final de' means 'at the end of'. Notice 'esta' without an accent means 'this' (demonstrative), while 'esta' with an accent means 'is located'. Context makes the meaning clear.",
      difficulty: "medium",
    },
    {
      id: 3,
      avatarLine: "Genial! Y como llego? Hay algun punto de referencia?",
      avatarLineEn: "Great! And how do I get there? Is there a landmark?",
      expectedUserPhrase: "Si, vas a ver una fuente grande en la plaza. La catedral esta detras.",
      expectedUserPhraseEn: "Yes, you'll see a big fountain in the plaza. The cathedral is behind it.",
      acceptableVariations: [
        "Hay una fuente grande, la catedral esta detras",
        "Vas a ver una fuente en la plaza, la catedral esta ahi",
        "Camina hasta la fuente grande y la catedral esta detras",
        "Busca la fuente grande, la catedral esta justo detras",
      ],
      vocabulary: [
        {
          word: "fuente",
          translation: "fountain",
          pronunciation: "/fwen.te/",
          partOfSpeech: "noun",
        },
        {
          word: "punto de referencia",
          translation: "landmark/reference point",
          pronunciation: "/pun.to de re.fe.ren.θja/",
          partOfSpeech: "phrase",
        },
        {
          word: "vas a ver",
          translation: "you're going to see",
          pronunciation: "/bas a ber/",
          partOfSpeech: "phrase",
        },
        {
          word: "detras",
          translation: "behind",
          pronunciation: "/de.tras/",
          partOfSpeech: "adverb",
        },
      ],
      grammarNote:
        "'Vas a ver' is the informal future using 'ir + a + infinitive'. This is more natural in spoken Spanish than the simple future 'veras'. Use landmarks to give directions: 'vas a ver una fuente' (you'll see a fountain).",
      difficulty: "hard",
    },
    {
      id: 4,
      avatarLine: "Perfecto. Y para volver, puedo tomar el metro?",
      avatarLineEn: "Perfect. And to get back, can I take the metro?",
      expectedUserPhrase: "Si, toma la linea uno en la estacion de Puerta de Jerez.",
      expectedUserPhraseEn: "Yes, take line one at Puerta de Jerez station.",
      acceptableVariations: [
        "Si, hay una estacion de metro cerca, Puerta de Jerez",
        "Claro, toma la linea uno en Puerta de Jerez",
        "Si, la estacion Puerta de Jerez esta cerca, linea uno",
        "Si, puedes tomar el metro en Puerta de Jerez",
      ],
      vocabulary: [
        {
          word: "toma",
          translation: "take (informal command)",
          pronunciation: "/to.ma/",
          partOfSpeech: "verb",
        },
        {
          word: "linea",
          translation: "line (metro/bus line)",
          pronunciation: "/li.ne.a/",
          partOfSpeech: "noun",
        },
        {
          word: "estacion",
          translation: "station",
          pronunciation: "/es.ta.θjon/",
          partOfSpeech: "noun",
        },
        {
          word: "volver",
          translation: "to return/go back",
          pronunciation: "/bol.ber/",
          partOfSpeech: "verb",
        },
      ],
      grammarNote:
        "'Toma' is the informal command of 'tomar'. Since the tourist used 'tu' forms earlier, we match their register. 'Para volver' means 'in order to return' — 'para' + infinitive expresses purpose.",
      difficulty: "medium",
    },
    {
      id: 5,
      avatarLine: "La linea uno, vale. Necesito hacer transbordo?",
      avatarLineEn: "Line one, okay. Do I need to transfer?",
      expectedUserPhrase: "Si, haz transbordo en la estacion de San Bernardo a la linea dos.",
      expectedUserPhraseEn: "Yes, transfer at San Bernardo station to line two.",
      acceptableVariations: [
        "Si, en San Bernardo cambias a la linea dos",
        "Tienes que hacer transbordo en San Bernardo",
        "Si, cambia en San Bernardo a la linea dos",
        "En San Bernardo haces transbordo a la linea dos",
      ],
      vocabulary: [
        {
          word: "transbordo",
          translation: "transfer (transport)",
          pronunciation: "/trans.bor.do/",
          partOfSpeech: "noun",
        },
        {
          word: "hacer transbordo",
          translation: "to transfer/change lines",
          pronunciation: "/a.θer trans.bor.do/",
          partOfSpeech: "phrase",
        },
        {
          word: "haz",
          translation: "do/make (informal command)",
          pronunciation: "/aθ/",
          partOfSpeech: "verb",
        },
        {
          word: "cambiar",
          translation: "to change",
          pronunciation: "/kam.bjar/",
          partOfSpeech: "verb",
        },
      ],
      grammarNote:
        "'Haz' is the irregular informal command of 'hacer' (to do/make). 'Hacer transbordo' is the standard phrase for transferring between lines. You can also say 'cambiar de linea' (to change lines).",
      difficulty: "hard",
    },
    {
      id: 6,
      avatarLine: "Muchas gracias! Sabes de algun restaurante bueno por aqui?",
      avatarLineEn: "Thank you so much! Do you know of a good restaurant around here?",
      expectedUserPhrase: "Te recomiendo el restaurante en la esquina. Tiene tapas muy buenas.",
      expectedUserPhraseEn: "I recommend the restaurant on the corner. It has very good tapas.",
      acceptableVariations: [
        "Hay un restaurante bueno en la esquina con tapas",
        "Te recomiendo uno en la esquina, tiene buenas tapas",
        "Si, en la esquina hay un restaurante con tapas muy buenas",
        "Prueba el restaurante de la esquina, las tapas son buenas",
      ],
      vocabulary: [
        {
          word: "te recomiendo",
          translation: "I recommend to you",
          pronunciation: "/te re.ko.mjen.do/",
          partOfSpeech: "phrase",
        },
        {
          word: "esquina",
          translation: "corner",
          pronunciation: "/es.ki.na/",
          partOfSpeech: "noun",
        },
        {
          word: "tapas",
          translation: "tapas (small dishes)",
          pronunciation: "/ta.pas/",
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
        "'Te recomiendo' uses the indirect object pronoun 'te' (to you, informal). The verb 'recomendar' is an e>ie stem-changing verb: 'recomiendo'. 'En la esquina' means 'on the corner'.",
      difficulty: "hard",
    },
    {
      id: 7,
      avatarLine: "Eres muy amable! Hasta luego y gracias por todo.",
      avatarLineEn: "You're very kind! See you later and thanks for everything.",
      expectedUserPhrase: "De nada, que disfrutes de Sevilla! Adios!",
      expectedUserPhraseEn: "You're welcome, enjoy Seville! Goodbye!",
      acceptableVariations: [
        "De nada! Pasa un buen dia",
        "No hay de que, disfruta de Sevilla",
        "De nada, adios!",
        "Un placer, que disfrutes! Adios",
      ],
      vocabulary: [
        {
          word: "que disfrutes",
          translation: "enjoy! (informal subjunctive)",
          pronunciation: "/ke dis.fru.tes/",
          partOfSpeech: "phrase",
        },
        {
          word: "amable",
          translation: "kind/nice",
          pronunciation: "/a.ma.ble/",
          partOfSpeech: "adjective",
        },
        {
          word: "por todo",
          translation: "for everything",
          pronunciation: "/por to.do/",
          partOfSpeech: "phrase",
        },
        {
          word: "un placer",
          translation: "a pleasure",
          pronunciation: "/un pla.θer/",
          partOfSpeech: "phrase",
        },
      ],
      grammarNote:
        "'Que disfrutes' uses the informal subjunctive of 'disfrutar' to express a wish. Compare with level 1's 'que disfrute' (formal). The subjunctive is common for well-wishes: 'que te vaya bien' (may it go well for you).",
      difficulty: "medium",
    },
  ],
};
