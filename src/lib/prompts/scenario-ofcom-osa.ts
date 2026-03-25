import type { Scenario } from "@/lib/types";

export const ofcomOsaScenario: Scenario = {
  id: "ofcom-osa",
  title: "The Online Safety Act",
  titleEs: "La Ley de Seguridad en Linea",
  titleLocal: "La Ley de Seguridad en Linea",
  description:
    "Explain the UK's Online Safety Act and its key provisions to an international colleague at a summit.",
  setting: "Coffee break at an Online Safety Summit in Barcelona",
  language: "es",
  turns: [
    {
      id: 1,
      avatarLine:
        "Hola, he visto que usted es de Ofcom. Me interesa mucho la nueva legislacion britanica sobre seguridad en linea. ¿Puede contarme sobre ella?",
      avatarLineEn:
        "Hello, I saw you're from Ofcom. I'm very interested in the new British legislation on online safety. Can you tell me about it?",
      expectedUserPhrase:
        "Por supuesto. La Ley de Seguridad en Linea fue aprobada en dos mil veintitres. Impone obligaciones a las plataformas para proteger a los usuarios.",
      expectedUserPhraseEn:
        "Of course. The Online Safety Act was passed in 2023. It places duties on platforms to protect users.",
      acceptableVariations: [
        "Claro, la Ley de Seguridad en Linea de dos mil veintitres establece obligaciones para las plataformas",
        "Si, nuestra ley impone deberes a las plataformas en linea",
        "Con gusto. La ley obliga a las plataformas a proteger a sus usuarios",
      ],
      vocabulary: [
        { word: "legislacion", translation: "legislation", pronunciation: "/le.xis.la.ˈθjon/", partOfSpeech: "noun" },
        { word: "fue aprobada", translation: "was passed/approved", pronunciation: "/fwe a.pɾo.ˈβa.ða/", partOfSpeech: "verb" },
        { word: "obligaciones", translation: "duties/obligations", pronunciation: "/o.βli.ɣa.ˈθjo.nes/", partOfSpeech: "noun" },
        { word: "plataformas", translation: "platforms", pronunciation: "/pla.ta.ˈfoɾ.mas/", partOfSpeech: "noun" },
      ],
      grammarNote:
        "'Fue aprobada' uses the feminine form because 'ley' (law) is feminine. In passive constructions, the participle agrees with the subject: 'la ley fue aprobada' but 'el proyecto fue aprobado'.",
      difficulty: "medium",
    },
    {
      id: 2,
      avatarLine:
        "Interesante. ¿Que tipos de obligaciones tienen las plataformas?",
      avatarLineEn:
        "Interesting. What types of duties do platforms have?",
      expectedUserPhrase:
        "Hay dos tipos principales: obligaciones sobre contenido ilegal y obligaciones de proteccion de menores.",
      expectedUserPhraseEn:
        "There are two main types: illegal content duties and children's protection duties.",
      acceptableVariations: [
        "Tienen deberes sobre contenido ilegal y deberes de proteccion infantil",
        "Las principales son las obligaciones de contenido ilegal y la seguridad de los ninos",
        "Hay obligaciones contra contenido ilegal y para proteger a los menores",
      ],
      vocabulary: [
        { word: "contenido ilegal", translation: "illegal content", pronunciation: "/kon.te.ˈni.ðo i.le.ˈɣal/", partOfSpeech: "noun" },
        { word: "proteccion de menores", translation: "children's protection", pronunciation: "/pɾo.tek.ˈθjon de me.ˈno.ɾes/", partOfSpeech: "noun" },
        { word: "principales", translation: "main/primary", pronunciation: "/pɾin.θi.ˈpa.les/", partOfSpeech: "adjective" },
        { word: "deberes", translation: "duties", pronunciation: "/de.ˈβe.ɾes/", partOfSpeech: "noun" },
      ],
      grammarNote:
        "'Menores' means 'minors/children' in a legal context. It's more formal than 'ninos' (children). In regulatory language, 'menores' is preferred: 'proteccion de menores' (child protection).",
      difficulty: "medium",
    },
    {
      id: 3,
      avatarLine:
        "¿Que tipo de contenido ilegal cubre la ley?",
      avatarLineEn:
        "What type of illegal content does the law cover?",
      expectedUserPhrase:
        "La ley aborda delitos prioritarios como el terrorismo, la explotacion sexual infantil y el contenido de autolesion.",
      expectedUserPhraseEn:
        "The law addresses priority offences such as terrorism, child sexual exploitation and self-harm content.",
      acceptableVariations: [
        "Cubre terrorismo, explotacion infantil y contenido de autolesion",
        "Los delitos prioritarios incluyen terrorismo y abuso sexual infantil",
        "La ley se centra en terrorismo, abuso infantil y autolesion",
      ],
      vocabulary: [
        { word: "delitos prioritarios", translation: "priority offences", pronunciation: "/de.ˈli.tos pɾjo.ɾi.ˈta.ɾjos/", partOfSpeech: "noun" },
        { word: "terrorismo", translation: "terrorism", pronunciation: "/te.ro.ˈɾis.mo/", partOfSpeech: "noun" },
        { word: "explotacion sexual infantil", translation: "child sexual exploitation", pronunciation: "/eks.plo.ta.ˈθjon sek.ˈswal in.fan.ˈtil/", partOfSpeech: "noun" },
        { word: "autolesion", translation: "self-harm", pronunciation: "/aw.to.le.ˈsjon/", partOfSpeech: "noun" },
      ],
      grammarNote:
        "'Aborda' comes from 'abordar' meaning 'to address/tackle'. In formal contexts: 'La ley aborda el problema' (The law addresses the problem). Similar formal verbs: 'contempla' (envisages), 'establece' (establishes).",
      difficulty: "medium",
    },
    {
      id: 4,
      avatarLine:
        "¿Y como protege la ley a los ninos especificamente?",
      avatarLineEn:
        "And how does the law protect children specifically?",
      expectedUserPhrase:
        "Las plataformas deben implementar verificacion de edad altamente efectiva y evitar que los algoritmos amplifiquen contenido danino para los menores.",
      expectedUserPhraseEn:
        "Platforms must implement highly effective age verification and prevent algorithms from amplifying harmful content to children.",
      acceptableVariations: [
        "Deben verificar la edad de los usuarios y proteger a los ninos del contenido danino",
        "Las plataformas necesitan verificacion de edad y deben proteger a los menores",
        "Tienen que usar verificacion de edad efectiva y controlar los algoritmos",
      ],
      vocabulary: [
        { word: "verificacion de edad", translation: "age verification", pronunciation: "/be.ɾi.fi.ka.ˈθjon de e.ˈðað/", partOfSpeech: "noun" },
        { word: "altamente efectiva", translation: "highly effective", pronunciation: "/al.ta.ˈmen.te e.fek.ˈti.βa/", partOfSpeech: "phrase" },
        { word: "algoritmos", translation: "algorithms", pronunciation: "/al.ɣo.ˈɾit.mos/", partOfSpeech: "noun" },
        { word: "contenido danino", translation: "harmful content", pronunciation: "/kon.te.ˈni.ðo da.ˈɲi.no/", partOfSpeech: "noun" },
      ],
      grammarNote:
        "'Deben implementar' uses 'deber + infinitive' to express obligation. This is the most common way to state legal requirements: 'deben cumplir' (must comply), 'deben informar' (must report).",
      difficulty: "hard",
    },
    {
      id: 5,
      avatarLine:
        "¿Tienen poderes de ejecucion si las plataformas no cumplen?",
      avatarLineEn:
        "Do you have enforcement powers if platforms don't comply?",
      expectedUserPhrase:
        "Si, Ofcom puede imponer sanciones economicas y emitir avisos tecnologicos que exijan el uso de tecnologia para detectar contenido ilegal.",
      expectedUserPhraseEn:
        "Yes, Ofcom can impose financial penalties and issue technology notices requiring the use of technology to detect illegal content.",
      acceptableVariations: [
        "Si, podemos imponer multas y exigir el uso de tecnologia de deteccion",
        "Tenemos poder para sancionar economicamente a las plataformas",
        "Si, Ofcom tiene poderes de sancion y puede emitir avisos tecnologicos",
      ],
      vocabulary: [
        { word: "sanciones economicas", translation: "financial penalties", pronunciation: "/san.ˈθjo.nes e.ko.ˈno.mi.kas/", partOfSpeech: "noun" },
        { word: "avisos tecnologicos", translation: "technology notices", pronunciation: "/a.ˈβi.sos tek.no.ˈlo.xi.kos/", partOfSpeech: "noun" },
        { word: "poderes de ejecucion", translation: "enforcement powers", pronunciation: "/po.ˈðe.ɾes de e.xe.ku.ˈθjon/", partOfSpeech: "noun" },
        { word: "detectar", translation: "to detect", pronunciation: "/de.tek.ˈtaɾ/", partOfSpeech: "verb" },
      ],
      grammarNote:
        "'Puede imponer' (can impose) and 'puede emitir' (can issue) use 'poder + infinitive' for capability/authority. In regulatory contexts, this construction states what the regulator has the power to do.",
      difficulty: "hard",
    },
    {
      id: 6,
      avatarLine:
        "Eso es un marco regulatorio muy completo. ¿Las plataformas tambien deben ser transparentes sobre sus acciones?",
      avatarLineEn:
        "That's a very comprehensive regulatory framework. Must platforms also be transparent about their actions?",
      expectedUserPhrase:
        "Si, los servicios categorizados deben publicar informes de transparencia anuales sobre sus medidas de seguridad.",
      expectedUserPhraseEn:
        "Yes, categorised services must publish annual transparency reports on their safety measures.",
      acceptableVariations: [
        "Si, las plataformas grandes deben publicar informes de transparencia",
        "Los servicios categorizados tienen que informar sobre sus medidas",
        "Si, hay requisitos de transparencia para las plataformas mas grandes",
      ],
      vocabulary: [
        { word: "servicios categorizados", translation: "categorised services", pronunciation: "/seɾ.ˈβi.θjos ka.te.ɣo.ɾi.ˈθa.ðos/", partOfSpeech: "noun" },
        { word: "informes de transparencia", translation: "transparency reports", pronunciation: "/in.ˈfoɾ.mes de tɾans.pa.ˈɾen.θja/", partOfSpeech: "noun" },
        { word: "marco regulatorio", translation: "regulatory framework", pronunciation: "/ˈmaɾ.ko re.ɣu.la.ˈto.ɾjo/", partOfSpeech: "noun" },
        { word: "medidas de seguridad", translation: "safety measures", pronunciation: "/me.ˈði.ðas de se.ɣu.ɾi.ˈðað/", partOfSpeech: "noun" },
      ],
      grammarNote:
        "'Deben publicar' is another example of obligation with 'deber'. 'Servicios categorizados' refers to platforms that meet certain size/risk thresholds — a key concept in the Online Safety Act framework.",
      difficulty: "hard",
    },
    {
      id: 7,
      avatarLine:
        "Muchas gracias por la explicacion. Es un modelo muy interesante. Espero que podamos seguir intercambiando ideas durante la conferencia.",
      avatarLineEn:
        "Thank you very much for the explanation. It's a very interesting model. I hope we can continue exchanging ideas during the conference.",
      expectedUserPhrase: "",
      expectedUserPhraseEn: "",
      acceptableVariations: [],
      vocabulary: [
        { word: "intercambiando ideas", translation: "exchanging ideas", pronunciation: "/in.teɾ.kam.ˈbjan.do i.ˈðe.as/", partOfSpeech: "phrase" },
        { word: "modelo", translation: "model", pronunciation: "/mo.ˈðe.lo/", partOfSpeech: "noun" },
        { word: "explicacion", translation: "explanation", pronunciation: "/eks.pli.ka.ˈθjon/", partOfSpeech: "noun" },
      ],
      grammarNote:
        "'Espero que podamos' uses the subjunctive after 'esperar que' (to hope that). The subjunctive is required after verbs expressing wishes, hopes, or desires: 'espero que podamos' (I hope we can).",
      difficulty: "easy",
    },
  ],
};
