import type { Scenario } from "@/lib/types";

export const ofcomPanelScenario: Scenario = {
  id: "ofcom-panel",
  title: "Conference Panel",
  titleEs: "Panel de Conferencia",
  titleLocal: "Panel de Conferencia",
  description:
    "Present Ofcom's work and answer questions from a moderator on a conference panel about online safety regulation.",
  setting: "Main stage at the World Internet Conference in Bilbao",
  language: "es",
  turns: [
    {
      id: 1,
      avatarLine:
        "Bienvenidos al panel sobre regulacion de seguridad en linea. Tenemos representantes de varios reguladores internacionales. Empecemos con nuestro colega del Reino Unido. ¿Cuales son las prioridades actuales de Ofcom?",
      avatarLineEn:
        "Welcome to the panel on online safety regulation. We have representatives from various international regulators. Let's start with our colleague from the UK. What are Ofcom's current priorities?",
      expectedUserPhrase:
        "Gracias. Las prioridades actuales de Ofcom son la proteccion infantil en linea, la responsabilidad de las plataformas y la implementacion efectiva de nuestra Ley de Seguridad en Linea.",
      expectedUserPhraseEn:
        "Thank you. Ofcom's current priorities are child protection online, platform accountability, and the effective implementation of our Online Safety Act.",
      acceptableVariations: [
        "Gracias, nuestras prioridades son proteger a los ninos, responsabilizar a las plataformas e implementar la ley",
        "Nos centramos en la proteccion infantil y la implementacion de la ley",
        "Las prioridades clave son seguridad infantil, responsabilidad de plataformas y la nueva ley",
      ],
      vocabulary: [
        { word: "prioridades actuales", translation: "current priorities", pronunciation: "/pɾjo.ɾi.ˈða.ðes ak.ˈtwa.les/", partOfSpeech: "noun" },
        { word: "proteccion infantil", translation: "child protection", pronunciation: "/pɾo.tek.ˈθjon in.fan.ˈtil/", partOfSpeech: "noun" },
        { word: "responsabilidad de las plataformas", translation: "platform accountability", pronunciation: "/res.pon.sa.βi.li.ˈðað de las pla.ta.ˈfoɾ.mas/", partOfSpeech: "noun" },
        { word: "implementacion efectiva", translation: "effective implementation", pronunciation: "/im.ple.men.ta.ˈθjon e.fek.ˈti.βa/", partOfSpeech: "noun" },
      ],
      grammarNote:
        "When listing priorities, use the structure: 'son X, Y y Z'. For three items, 'y' (and) connects the last two. If using 'e' instead of 'y', it's because the next word starts with 'i-': 'seguridad e innovacion'.",
      difficulty: "hard",
    },
    {
      id: 2,
      avatarLine:
        "¿Puede profundizar en como Ofcom esta protegiendo a los ninos en internet?",
      avatarLineEn:
        "Can you elaborate on how Ofcom is protecting children on the internet?",
      expectedUserPhrase:
        "Hemos publicado codigos de proteccion infantil que exigen verificacion de edad efectiva. Recientemente impusimos una multa importante a una plataforma por no proteger a los menores.",
      expectedUserPhraseEn:
        "We've published child protection codes requiring effective age verification. We recently imposed a significant fine on a platform for failing to protect children.",
      acceptableVariations: [
        "Publicamos codigos de practica para proteccion infantil con verificacion de edad",
        "Exigimos verificacion de edad y hemos sancionado plataformas que no cumplen",
        "Nuestros codigos requieren que las plataformas verifiquen la edad de sus usuarios",
      ],
      vocabulary: [
        { word: "profundizar", translation: "to elaborate/go deeper", pronunciation: "/pɾo.fun.di.ˈθaɾ/", partOfSpeech: "verb" },
        { word: "multa", translation: "fine/penalty", pronunciation: "/ˈmul.ta/", partOfSpeech: "noun" },
        { word: "impusimos", translation: "we imposed", pronunciation: "/im.pu.ˈsi.mos/", partOfSpeech: "verb" },
        { word: "recientemente", translation: "recently", pronunciation: "/re.θjen.te.ˈmen.te/", partOfSpeech: "adverb" },
      ],
      grammarNote:
        "'Impusimos' is the preterite of 'imponer' (to impose) — an irregular verb. Other useful irregular preterites in regulatory language: 'propusimos' (we proposed), 'dispusimos' (we arranged), 'compusimos' (we composed).",
      difficulty: "hard",
    },
    {
      id: 3,
      avatarLine:
        "Es un tema critico. ¿Como equilibra Ofcom la regulacion con la innovacion tecnologica?",
      avatarLineEn:
        "It's a critical issue. How does Ofcom balance regulation with technological innovation?",
      expectedUserPhrase:
        "Creemos en una regulacion proporcionada que proteja a los usuarios sin sofocar la innovacion. Nuestro enfoque es flexible y basado en resultados, no en tecnologias especificas.",
      expectedUserPhraseEn:
        "We believe in proportionate regulation that protects users without stifling innovation. Our approach is flexible and outcomes-based, not focused on specific technologies.",
      acceptableVariations: [
        "Buscamos un equilibrio entre seguridad e innovacion",
        "La regulacion debe ser proporcionada y no debe impedir la innovacion",
        "Nuestro enfoque es proporcionado y basado en resultados",
      ],
      vocabulary: [
        { word: "proporcionada", translation: "proportionate", pronunciation: "/pɾo.poɾ.θjo.ˈna.ða/", partOfSpeech: "adjective" },
        { word: "sofocar", translation: "to stifle", pronunciation: "/so.fo.ˈkaɾ/", partOfSpeech: "verb" },
        { word: "basado en resultados", translation: "outcomes-based", pronunciation: "/ba.ˈsa.ðo en re.sul.ˈta.ðos/", partOfSpeech: "phrase" },
        { word: "equilibrar", translation: "to balance", pronunciation: "/e.ki.li.ˈβɾaɾ/", partOfSpeech: "verb" },
      ],
      grammarNote:
        "'Sin sofocar' uses 'sin + infinitive' meaning 'without doing'. This is a key construction for expressing nuanced positions: 'sin comprometer' (without compromising), 'sin perjudicar' (without harming).",
      difficulty: "hard",
    },
    {
      id: 4,
      avatarLine:
        "¿Y en la practica, como trabajan con las plataformas tecnologicas?",
      avatarLineEn:
        "And in practice, how do you work with tech platforms?",
      expectedUserPhrase:
        "Mantenemos un dialogo constante con la industria. Las plataformas pueden seguir nuestros codigos de practica o demostrar medidas alternativas que cumplan los mismos objetivos.",
      expectedUserPhraseEn:
        "We maintain constant dialogue with industry. Platforms can follow our codes of practice or demonstrate alternative measures that meet the same objectives.",
      acceptableVariations: [
        "Dialogamos regularmente con las plataformas y publicamos codigos de practica",
        "Las plataformas tienen flexibilidad para cumplir, pueden seguir nuestros codigos o proponer alternativas",
        "Trabajamos con la industria a traves de consultas y codigos de practica",
      ],
      vocabulary: [
        { word: "dialogo constante", translation: "constant dialogue", pronunciation: "/ˈdja.lo.ɣo kons.ˈtan.te/", partOfSpeech: "noun" },
        { word: "industria", translation: "industry", pronunciation: "/in.ˈdus.tɾja/", partOfSpeech: "noun" },
        { word: "medidas alternativas", translation: "alternative measures", pronunciation: "/me.ˈði.ðas al.teɾ.na.ˈti.βas/", partOfSpeech: "noun" },
        { word: "demostrar", translation: "to demonstrate", pronunciation: "/de.mos.ˈtɾaɾ/", partOfSpeech: "verb" },
      ],
      grammarNote:
        "'Que cumplan los mismos objetivos' uses the subjunctive 'cumplan' after a relative clause describing something desired or required. The subjunctive signals that the alternative measures must meet — not that they already do meet — the objectives.",
      difficulty: "hard",
    },
    {
      id: 5,
      avatarLine:
        "Mirando hacia el futuro, ¿como ve la evolucion de la regulacion de seguridad en linea?",
      avatarLineEn:
        "Looking to the future, how do you see the evolution of online safety regulation?",
      expectedUserPhrase:
        "Vemos desafios emergentes como el contenido generado por inteligencia artificial y la desinformacion. La cooperacion internacional sera esencial para abordar estas amenazas transfronterizas.",
      expectedUserPhraseEn:
        "We see emerging challenges like AI-generated content and disinformation. International cooperation will be essential to address these cross-border threats.",
      acceptableVariations: [
        "Los nuevos retos incluyen la inteligencia artificial y la desinformacion",
        "La cooperacion internacional sera clave para enfrentar los desafios futuros",
        "Vemos retos con la inteligencia artificial y necesitamos mas cooperacion global",
      ],
      vocabulary: [
        { word: "desafios emergentes", translation: "emerging challenges", pronunciation: "/de.sa.ˈfi.os e.meɾ.ˈxen.tes/", partOfSpeech: "noun" },
        { word: "inteligencia artificial", translation: "artificial intelligence", pronunciation: "/in.te.li.ˈxen.θja aɾ.ti.fi.ˈθjal/", partOfSpeech: "noun" },
        { word: "desinformacion", translation: "disinformation", pronunciation: "/des.in.foɾ.ma.ˈθjon/", partOfSpeech: "noun" },
        { word: "amenazas transfronterizas", translation: "cross-border threats", pronunciation: "/a.me.ˈna.θas tɾans.fɾon.te.ˈɾi.θas/", partOfSpeech: "noun" },
      ],
      grammarNote:
        "'Sera esencial' uses the simple future of 'ser'. The future tense is appropriate for predictions and forward-looking statements: 'sera necesario' (it will be necessary), 'requerira' (it will require).",
      difficulty: "hard",
    },
    {
      id: 6,
      avatarLine:
        "Tenemos una pregunta del publico: ¿Que mensaje les daria a los reguladores que estan empezando a desarrollar marcos de seguridad en linea?",
      avatarLineEn:
        "We have a question from the audience: What message would you give to regulators who are starting to develop online safety frameworks?",
      expectedUserPhrase:
        "Les diria que empiecen con lo basico: comprender los riesgos, consultar con todas las partes interesadas y construir una regulacion proporcionada y basada en evidencia.",
      expectedUserPhraseEn:
        "I would tell them to start with the basics: understand the risks, consult with all stakeholders and build proportionate, evidence-based regulation.",
      acceptableVariations: [
        "Aconsejaria empezar con los riesgos y consultar ampliamente",
        "Les recomendaria un enfoque gradual y basado en evidencia",
        "Lo mas importante es consultar con todas las partes y ser proporcionado",
      ],
      vocabulary: [
        { word: "les diria", translation: "I would tell them", pronunciation: "/les di.ˈɾi.a/", partOfSpeech: "verb" },
        { word: "partes interesadas", translation: "stakeholders", pronunciation: "/ˈpaɾ.tes in.te.ɾe.ˈsa.ðas/", partOfSpeech: "noun" },
        { word: "basada en evidencia", translation: "evidence-based", pronunciation: "/ba.ˈsa.ða en e.βi.ˈðen.θja/", partOfSpeech: "phrase" },
        { word: "construir", translation: "to build", pronunciation: "/kons.tɾu.ˈiɾ/", partOfSpeech: "verb" },
      ],
      grammarNote:
        "'Les diria que empiecen' combines the conditional 'diria' (I would say) with the subjunctive 'empiecen' (they start). After verbs of advice/recommendation in conditional, the subjunctive follows: 'les recomendaria que consideren' (I would recommend they consider).",
      difficulty: "hard",
    },
    {
      id: 7,
      avatarLine:
        "Muchas gracias por sus valiosas aportaciones. Ha sido una sesion muy enriquecedora. Un aplauso para todos nuestros panelistas.",
      avatarLineEn:
        "Thank you very much for your valuable contributions. It has been a very enriching session. A round of applause for all our panellists.",
      expectedUserPhrase: "",
      expectedUserPhraseEn: "",
      acceptableVariations: [],
      vocabulary: [
        { word: "aportaciones", translation: "contributions", pronunciation: "/a.poɾ.ta.ˈθjo.nes/", partOfSpeech: "noun" },
        { word: "enriquecedora", translation: "enriching", pronunciation: "/en.ri.ke.θe.ˈðo.ɾa/", partOfSpeech: "adjective" },
        { word: "panelistas", translation: "panellists", pronunciation: "/pa.ne.ˈlis.tas/", partOfSpeech: "noun" },
        { word: "aplauso", translation: "applause", pronunciation: "/a.ˈplaw.so/", partOfSpeech: "noun" },
      ],
      grammarNote:
        "'Valiosas' agrees with the feminine plural 'aportaciones'. Adjective agreement is crucial in formal Spanish: 'valiosas aportaciones' (valuable contributions), 'enfoques innovadores' (innovative approaches).",
      difficulty: "easy",
    },
  ],
};
