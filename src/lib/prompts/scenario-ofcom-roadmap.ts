import type { Scenario } from "@/lib/types";

export const ofcomRoadmapScenario: Scenario = {
  id: "ofcom-roadmap",
  title: "Roadmap to Regulation",
  titleEs: "Hoja de Ruta Regulatoria",
  titleLocal: "Hoja de Ruta Regulatoria",
  description:
    "Discuss Ofcom's phased approach to implementing the Online Safety Act with a fellow panelist.",
  setting: "Panel preparation meeting at a regulatory conference in Valencia",
  language: "es",
  turns: [
    {
      id: 1,
      avatarLine:
        "Buenas tardes. Soy Carlos, del panel sobre regulacion digital. ¿Podemos repasar los temas que vamos a discutir?",
      avatarLineEn:
        "Good afternoon. I'm Carlos, from the digital regulation panel. Can we go over the topics we're going to discuss?",
      expectedUserPhrase:
        "Buenas tardes, Carlos. Si, claro. Voy a hablar sobre la hoja de ruta de Ofcom para implementar la Ley de Seguridad en Linea.",
      expectedUserPhraseEn:
        "Good afternoon, Carlos. Yes, of course. I'm going to talk about Ofcom's roadmap for implementing the Online Safety Act.",
      acceptableVariations: [
        "Buenas tardes, voy a presentar la hoja de ruta de implementacion de Ofcom",
        "Si, voy a hablar de como estamos implementando la ley",
        "Claro, mi tema es la implementacion gradual de la ley",
      ],
      vocabulary: [
        { word: "hoja de ruta", translation: "roadmap", pronunciation: "/ˈo.xa de ˈru.ta/", partOfSpeech: "noun" },
        { word: "implementar", translation: "to implement", pronunciation: "/im.ple.men.ˈtaɾ/", partOfSpeech: "verb" },
        { word: "repasar", translation: "to go over/review", pronunciation: "/re.pa.ˈsaɾ/", partOfSpeech: "verb" },
        { word: "temas", translation: "topics", pronunciation: "/ˈte.mas/", partOfSpeech: "noun" },
      ],
      grammarNote:
        "'Voy a hablar' uses the near future tense (ir + a + infinitive), which is more common in spoken Spanish than the simple future. 'Hablare' (I will talk) is more formal.",
      difficulty: "medium",
    },
    {
      id: 2,
      avatarLine:
        "Perfecto. ¿Pueden explicar el enfoque por fases que estan usando?",
      avatarLineEn:
        "Perfect. Can you explain the phased approach you're using?",
      expectedUserPhrase:
        "Estamos implementando la ley de forma gradual. Primero abordamos el contenido ilegal, luego la proteccion infantil, y despues las obligaciones adicionales.",
      expectedUserPhraseEn:
        "We're implementing the law gradually. First we addressed illegal content, then child protection, and then additional obligations.",
      acceptableVariations: [
        "La implementacion es por fases, empezando con contenido ilegal",
        "Primero los deberes de contenido ilegal, despues la proteccion de menores",
        "Usamos un enfoque gradual, fase por fase",
      ],
      vocabulary: [
        { word: "enfoque por fases", translation: "phased approach", pronunciation: "/en.ˈfo.ke poɾ ˈfa.ses/", partOfSpeech: "noun" },
        { word: "de forma gradual", translation: "gradually", pronunciation: "/de ˈfoɾ.ma ɡɾa.ˈðwal/", partOfSpeech: "phrase" },
        { word: "abordamos", translation: "we addressed/tackled", pronunciation: "/a.βoɾ.ˈða.mos/", partOfSpeech: "verb" },
        { word: "obligaciones adicionales", translation: "additional obligations", pronunciation: "/o.βli.ɣa.ˈθjo.nes a.ði.θjo.ˈna.les/", partOfSpeech: "noun" },
      ],
      grammarNote:
        "Sequencing words: 'primero' (first), 'luego' (then), 'despues' (after that), 'finalmente' (finally). These are essential for presenting a timeline or roadmap in a structured way.",
      difficulty: "medium",
    },
    {
      id: 3,
      avatarLine:
        "¿Y que son exactamente los codigos de practica?",
      avatarLineEn:
        "And what exactly are the codes of practice?",
      expectedUserPhrase:
        "Los codigos de practica son guias detalladas que indican a los servicios como cumplir con sus obligaciones bajo la ley.",
      expectedUserPhraseEn:
        "Codes of practice are detailed guidelines that tell services how to comply with their obligations under the law.",
      acceptableVariations: [
        "Son documentos que explican a las plataformas como cumplir la ley",
        "Los codigos de practica dan orientacion sobre el cumplimiento",
        "Son guias que Ofcom publica para ayudar a las plataformas a cumplir",
      ],
      vocabulary: [
        { word: "codigos de practica", translation: "codes of practice", pronunciation: "/ˈko.ði.ɣos de ˈpɾak.ti.ka/", partOfSpeech: "noun" },
        { word: "cumplir con", translation: "to comply with", pronunciation: "/kum.ˈpliɾ kon/", partOfSpeech: "verb" },
        { word: "guias detalladas", translation: "detailed guidelines", pronunciation: "/ˈɡi.as de.ta.ˈʎa.ðas/", partOfSpeech: "noun" },
        { word: "orientacion", translation: "guidance", pronunciation: "/o.ɾjen.ta.ˈθjon/", partOfSpeech: "noun" },
      ],
      grammarNote:
        "'Indican a los servicios como cumplir' — note the structure 'indicar a alguien como hacer algo' (to tell someone how to do something). The preposition 'a' introduces the indirect object.",
      difficulty: "medium",
    },
    {
      id: 4,
      avatarLine:
        "He oido sobre la categorizacion de servicios. ¿Que significa eso?",
      avatarLineEn:
        "I've heard about categorisation of services. What does that mean?",
      expectedUserPhrase:
        "Ofcom clasifica los servicios segun su tamano y riesgo. Los servicios categorizados, las plataformas mas grandes, tienen obligaciones adicionales como publicidad fraudulenta y empoderamiento del usuario.",
      expectedUserPhraseEn:
        "Ofcom classifies services by their size and risk. Categorised services, the largest platforms, have additional obligations like fraudulent advertising and user empowerment.",
      acceptableVariations: [
        "Las plataformas mas grandes se clasifican y tienen mas obligaciones",
        "La categorizacion determina que plataformas tienen deberes adicionales",
        "Los servicios grandes tienen mas requisitos que los pequenos",
      ],
      vocabulary: [
        { word: "categorizacion", translation: "categorisation", pronunciation: "/ka.te.ɣo.ɾi.θa.ˈθjon/", partOfSpeech: "noun" },
        { word: "tamano y riesgo", translation: "size and risk", pronunciation: "/ta.ˈma.ɲo i ˈrjes.ɣo/", partOfSpeech: "noun" },
        { word: "publicidad fraudulenta", translation: "fraudulent advertising", pronunciation: "/pu.βli.θi.ˈðað fɾaw.ðu.ˈlen.ta/", partOfSpeech: "noun" },
        { word: "empoderamiento del usuario", translation: "user empowerment", pronunciation: "/em.po.ðe.ɾa.ˈmjen.to del u.ˈswa.ɾjo/", partOfSpeech: "noun" },
      ],
      grammarNote:
        "'Segun' means 'according to' or 'by' and is followed directly by a noun: 'segun su tamano' (according to their size). No article is needed between 'segun' and the noun.",
      difficulty: "hard",
    },
    {
      id: 5,
      avatarLine:
        "¿Y la transparencia? ¿Que informacion deben compartir las plataformas?",
      avatarLineEn:
        "And transparency? What information must platforms share?",
      expectedUserPhrase:
        "Los servicios categorizados deben publicar informes de transparencia anuales. Los primeros informes se esperan para el verano de dos mil veintisiete.",
      expectedUserPhraseEn:
        "Categorised services must publish annual transparency reports. The first reports are expected by summer 2027.",
      acceptableVariations: [
        "Deben publicar informes anuales sobre sus medidas de seguridad",
        "Las plataformas grandes tendran que presentar informes de transparencia en dos mil veintisiete",
        "Los primeros informes de transparencia llegaran en verano de dos mil veintisiete",
      ],
      vocabulary: [
        { word: "informes anuales", translation: "annual reports", pronunciation: "/in.ˈfoɾ.mes a.ˈnwa.les/", partOfSpeech: "noun" },
        { word: "se esperan", translation: "are expected", pronunciation: "/se es.ˈpe.ɾan/", partOfSpeech: "verb" },
        { word: "verano", translation: "summer", pronunciation: "/be.ˈɾa.no/", partOfSpeech: "noun" },
        { word: "compartir", translation: "to share", pronunciation: "/kom.paɾ.ˈtiɾ/", partOfSpeech: "verb" },
      ],
      grammarNote:
        "'Se esperan' is the passive 'se' construction — very common in formal Spanish. 'Se esperan los informes' (The reports are expected) is equivalent to 'Los informes son esperados' but more natural.",
      difficulty: "hard",
    },
    {
      id: 6,
      avatarLine:
        "¿Cuales son los hitos mas importantes para dos mil veintiseis y dos mil veintisiete?",
      avatarLineEn:
        "What are the most important milestones for 2026 and 2027?",
      expectedUserPhrase:
        "En dos mil veintiseis publicaremos el registro de categorizacion y consultaremos sobre obligaciones adicionales. En dos mil veintisiete llegarán los primeros informes de transparencia.",
      expectedUserPhraseEn:
        "In 2026 we'll publish the categorisation register and consult on additional obligations. In 2027 the first transparency reports will arrive.",
      acceptableVariations: [
        "En dos mil veintiseis sale el registro de categorizacion",
        "Los hitos clave son la categorizacion en dos mil veintiseis y transparencia en dos mil veintisiete",
        "Publicaremos el registro y luego los informes de transparencia",
      ],
      vocabulary: [
        { word: "hitos", translation: "milestones", pronunciation: "/ˈi.tos/", partOfSpeech: "noun" },
        { word: "registro de categorizacion", translation: "categorisation register", pronunciation: "/re.ˈxis.tɾo de ka.te.ɣo.ɾi.θa.ˈθjon/", partOfSpeech: "noun" },
        { word: "consultaremos", translation: "we will consult", pronunciation: "/kon.sul.ta.ˈɾe.mos/", partOfSpeech: "verb" },
        { word: "publicaremos", translation: "we will publish", pronunciation: "/pu.βli.ka.ˈɾe.mos/", partOfSpeech: "verb" },
      ],
      grammarNote:
        "'Publicaremos' and 'consultaremos' use the simple future tense (infinitive + -emos). This is appropriate for planned milestones: 'publicaremos' (we will publish), 'implementaremos' (we will implement).",
      difficulty: "hard",
    },
    {
      id: 7,
      avatarLine:
        "Excelente. Creo que esto sera muy util para el panel. Vamos a prepararnos, empieza en diez minutos.",
      avatarLineEn:
        "Excellent. I think this will be very useful for the panel. Let's get ready, it starts in ten minutes.",
      expectedUserPhrase: "",
      expectedUserPhraseEn: "",
      acceptableVariations: [],
      vocabulary: [
        { word: "util", translation: "useful", pronunciation: "/ˈu.til/", partOfSpeech: "adjective" },
        { word: "prepararnos", translation: "to get ready", pronunciation: "/pɾe.pa.ˈɾaɾ.nos/", partOfSpeech: "verb" },
        { word: "empieza", translation: "it starts", pronunciation: "/em.ˈpje.θa/", partOfSpeech: "verb" },
      ],
      grammarNote:
        "'Vamos a prepararnos' combines 'ir + a + infinitive' with a reflexive pronoun attached to the infinitive. The pronoun can also precede the conjugated verb: 'nos vamos a preparar'.",
      difficulty: "easy",
    },
  ],
};
