import type { Scenario } from "@/lib/types";

export const ofcomStakeholderScenario: Scenario = {
  id: "ofcom-stakeholder",
  title: "Stakeholder Meeting",
  titleEs: "Reunion con Partes Interesadas",
  titleLocal: "Reunion con Partes Interesadas",
  description:
    "Hold a formal bilateral meeting with an international regulatory counterpart to discuss cooperation and shared challenges.",
  setting: "Bilateral meeting room at an ITU conference in Seville",
  language: "es",
  turns: [
    {
      id: 1,
      avatarLine:
        "Buenos dias. Soy la Directora Adjunta de la Agencia Nacional de Regulacion de Telecomunicaciones. Es un placer reunirnos formalmente.",
      avatarLineEn:
        "Good morning. I'm the Deputy Director of the National Telecommunications Regulatory Agency. It's a pleasure to meet formally.",
      expectedUserPhrase:
        "Buenos dias, Directora. El placer es nuestro. Agradecemos esta oportunidad de dialogar sobre nuestros enfoques regulatorios.",
      expectedUserPhraseEn:
        "Good morning, Director. The pleasure is ours. We appreciate this opportunity to discuss our regulatory approaches.",
      acceptableVariations: [
        "Buenos dias, es un placer. Gracias por recibirnos",
        "El placer es nuestro, agradecemos la oportunidad de reunirnos",
        "Buenos dias, gracias por esta reunion bilateral",
      ],
      vocabulary: [
        { word: "reunion bilateral", translation: "bilateral meeting", pronunciation: "/re.u.ˈnjon bi.la.te.ˈɾal/", partOfSpeech: "noun" },
        { word: "agradecemos", translation: "we appreciate", pronunciation: "/a.ɣɾa.ðe.ˈθe.mos/", partOfSpeech: "verb" },
        { word: "enfoques regulatorios", translation: "regulatory approaches", pronunciation: "/en.ˈfo.kes re.ɣu.la.ˈto.ɾjos/", partOfSpeech: "noun" },
        { word: "dialogar", translation: "to discuss/dialogue", pronunciation: "/dja.lo.ˈɣaɾ/", partOfSpeech: "verb" },
      ],
      grammarNote:
        "'El placer es nuestro' is a formal response to 'es un placer'. In diplomatic settings, possessive pronouns agree with the noun: 'nuestro' (masculine, matching 'placer'). If it were 'la satisfaccion', you'd say 'nuestra'.",
      difficulty: "hard",
    },
    {
      id: 2,
      avatarLine:
        "Nos interesa mucho la experiencia britanica en cooperacion internacional. ¿Pueden explicar como trabaja Ofcom con otros reguladores?",
      avatarLineEn:
        "We're very interested in the British experience in international cooperation. Can you explain how Ofcom works with other regulators?",
      expectedUserPhrase:
        "Ofcom colabora activamente con reguladores internacionales. Participamos en el grupo de los Cinco Ojos para la seguridad de las telecomunicaciones y cooperamos con reguladores de seguridad en linea a nivel mundial.",
      expectedUserPhraseEn:
        "Ofcom actively collaborates with international regulators. We participate in the Five Eyes group for telecoms security and cooperate with online safety regulators worldwide.",
      acceptableVariations: [
        "Trabajamos con reguladores de todo el mundo, incluyendo los Cinco Ojos",
        "Colaboramos con reguladores internacionales en telecomunicaciones y seguridad en linea",
        "Ofcom participa en foros internacionales y coopera con otros reguladores",
      ],
      vocabulary: [
        { word: "colabora activamente", translation: "actively collaborates", pronunciation: "/ko.la.ˈβo.ɾa ak.ti.βa.ˈmen.te/", partOfSpeech: "phrase" },
        { word: "los Cinco Ojos", translation: "Five Eyes", pronunciation: "/los ˈθiŋ.ko ˈo.xos/", partOfSpeech: "proper noun" },
        { word: "a nivel mundial", translation: "worldwide/globally", pronunciation: "/a ni.ˈβel mun.ˈdjal/", partOfSpeech: "phrase" },
        { word: "cooperamos", translation: "we cooperate", pronunciation: "/ko.o.pe.ˈɾa.mos/", partOfSpeech: "verb" },
      ],
      grammarNote:
        "'A nivel mundial' is a formal expression meaning 'at a global level'. Similar constructions: 'a nivel nacional' (nationally), 'a nivel europeo' (at European level), 'a nivel regional' (regionally).",
      difficulty: "hard",
    },
    {
      id: 3,
      avatarLine:
        "Muy bien. ¿Y cual es el enfoque de Ofcom respecto a la responsabilidad de las plataformas?",
      avatarLineEn:
        "Very good. And what is Ofcom's approach to platform accountability?",
      expectedUserPhrase:
        "Nuestro enfoque se basa en sistemas, no en contenido individual. Las plataformas deben tener sistemas efectivos para gestionar los riesgos de sus servicios.",
      expectedUserPhraseEn:
        "Our approach is systems-based, not focused on individual content. Platforms must have effective systems to manage the risks of their services.",
      acceptableVariations: [
        "Nos centramos en los sistemas de las plataformas, no en piezas individuales de contenido",
        "El enfoque es sistematico, las plataformas deben gestionar riesgos",
        "Exigimos que las plataformas tengan sistemas efectivos de gestion de riesgos",
      ],
      vocabulary: [
        { word: "responsabilidad", translation: "accountability", pronunciation: "/res.pon.sa.βi.li.ˈðað/", partOfSpeech: "noun" },
        { word: "se basa en", translation: "is based on", pronunciation: "/se ˈba.sa en/", partOfSpeech: "verb" },
        { word: "gestionar los riesgos", translation: "to manage risks", pronunciation: "/xes.tjo.ˈnaɾ los ˈrjes.ɣos/", partOfSpeech: "verb" },
        { word: "sistemas efectivos", translation: "effective systems", pronunciation: "/sis.ˈte.mas e.fek.ˈti.βos/", partOfSpeech: "noun" },
      ],
      grammarNote:
        "'Se basa en' is a reflexive construction meaning 'is based on'. Common in formal explanations: 'se centra en' (focuses on), 'se aplica a' (applies to), 'se refiere a' (refers to).",
      difficulty: "hard",
    },
    {
      id: 4,
      avatarLine:
        "La verificacion de edad es un tema importante para nosotros tambien. ¿Que tecnologias estan considerando?",
      avatarLineEn:
        "Age verification is an important topic for us too. What technologies are you considering?",
      expectedUserPhrase:
        "Ofcom no prescribe tecnologias especificas, pero la verificacion de edad debe ser altamente efectiva. Hemos publicado orientacion sobre los estandares que la tecnologia debe cumplir.",
      expectedUserPhraseEn:
        "Ofcom doesn't prescribe specific technologies, but age verification must be highly effective. We've published guidance on the standards the technology must meet.",
      acceptableVariations: [
        "No prescribimos tecnologias, pero deben ser altamente efectivas",
        "La verificacion debe cumplir estandares altos, publicamos orientacion sobre esto",
        "Dejamos flexibilidad en la tecnologia, pero exigimos efectividad",
      ],
      vocabulary: [
        { word: "prescribir", translation: "to prescribe", pronunciation: "/pɾes.kɾi.ˈβiɾ/", partOfSpeech: "verb" },
        { word: "estandares", translation: "standards", pronunciation: "/es.ˈtan.da.ɾes/", partOfSpeech: "noun" },
        { word: "orientacion", translation: "guidance", pronunciation: "/o.ɾjen.ta.ˈθjon/", partOfSpeech: "noun" },
        { word: "hemos publicado", translation: "we have published", pronunciation: "/ˈe.mos pu.βli.ˈka.ðo/", partOfSpeech: "verb" },
      ],
      grammarNote:
        "'Hemos publicado' is the present perfect (haber + past participle), used for recent actions with current relevance. Very common in regulatory updates: 'hemos consultado' (we have consulted), 'hemos establecido' (we have established).",
      difficulty: "hard",
    },
    {
      id: 5,
      avatarLine:
        "¿Ven oportunidades para una mayor cooperacion entre nuestras agencias?",
      avatarLineEn:
        "Do you see opportunities for greater cooperation between our agencies?",
      expectedUserPhrase:
        "Absolutamente. Podriamos compartir mejores practicas en verificacion de edad, cooperar en investigaciones transfronterizas y armonizar nuestros enfoques regulatorios.",
      expectedUserPhraseEn:
        "Absolutely. We could share best practices in age verification, cooperate on cross-border investigations and harmonise our regulatory approaches.",
      acceptableVariations: [
        "Si, hay muchas areas donde podemos colaborar",
        "Podriamos cooperar en verificacion de edad y investigaciones",
        "Vemos grandes oportunidades de cooperacion, especialmente en seguridad en linea",
      ],
      vocabulary: [
        { word: "mejores practicas", translation: "best practices", pronunciation: "/me.ˈxo.ɾes ˈpɾak.ti.kas/", partOfSpeech: "noun" },
        { word: "investigaciones transfronterizas", translation: "cross-border investigations", pronunciation: "/in.bes.ti.ɣa.ˈθjo.nes tɾans.fɾon.te.ˈɾi.θas/", partOfSpeech: "noun" },
        { word: "armonizar", translation: "to harmonise", pronunciation: "/aɾ.mo.ni.ˈθaɾ/", partOfSpeech: "verb" },
        { word: "podriamos", translation: "we could", pronunciation: "/po.ˈðɾi.a.mos/", partOfSpeech: "verb" },
      ],
      grammarNote:
        "'Podriamos' is the conditional tense of 'poder', used for diplomatic suggestions. The conditional is essential in formal meetings: 'podriamos considerar' (we could consider), 'seria beneficioso' (it would be beneficial).",
      difficulty: "hard",
    },
    {
      id: 6,
      avatarLine:
        "Excelente. ¿Cuales son los principales desafios que enfrentan en la implementacion?",
      avatarLineEn:
        "Excellent. What are the main challenges you face in the implementation?",
      expectedUserPhrase:
        "Los desafios principales son la velocidad del cambio tecnologico, asegurar que la regulacion sea proporcionada, y mantener el equilibrio entre seguridad e innovacion.",
      expectedUserPhraseEn:
        "The main challenges are the speed of technological change, ensuring regulation is proportionate, and maintaining the balance between safety and innovation.",
      acceptableVariations: [
        "El principal desafio es mantener el equilibrio entre seguridad e innovacion",
        "Los retos son la tecnologia cambiante y la regulacion proporcionada",
        "Enfrentamos desafios como el cambio tecnologico rapido y la proporcionalidad",
      ],
      vocabulary: [
        { word: "desafios", translation: "challenges", pronunciation: "/de.sa.ˈfi.os/", partOfSpeech: "noun" },
        { word: "proporcionada", translation: "proportionate", pronunciation: "/pɾo.poɾ.θjo.ˈna.ða/", partOfSpeech: "adjective" },
        { word: "equilibrio", translation: "balance", pronunciation: "/e.ki.ˈli.βɾjo/", partOfSpeech: "noun" },
        { word: "innovacion", translation: "innovation", pronunciation: "/in.no.βa.ˈθjon/", partOfSpeech: "noun" },
      ],
      grammarNote:
        "'Asegurar que la regulacion sea proporcionada' — 'sea' is the subjunctive of 'ser', required after 'asegurar que'. The subjunctive expresses uncertainty or desired outcomes in formal/regulatory language.",
      difficulty: "hard",
    },
    {
      id: 7,
      avatarLine:
        "Ha sido una reunion muy productiva. Esperamos formalizar esta cooperacion. Le enviaremos una propuesta de memorando de entendimiento.",
      avatarLineEn:
        "It has been a very productive meeting. We look forward to formalising this cooperation. We'll send you a memorandum of understanding proposal.",
      expectedUserPhrase: "",
      expectedUserPhraseEn: "",
      acceptableVariations: [],
      vocabulary: [
        { word: "productiva", translation: "productive", pronunciation: "/pɾo.ðuk.ˈti.βa/", partOfSpeech: "adjective" },
        { word: "memorando de entendimiento", translation: "memorandum of understanding", pronunciation: "/me.mo.ˈɾan.do de en.ten.di.ˈmjen.to/", partOfSpeech: "noun" },
        { word: "formalizar", translation: "to formalise", pronunciation: "/foɾ.ma.li.ˈθaɾ/", partOfSpeech: "verb" },
      ],
      grammarNote:
        "'Le enviaremos' uses the indirect object pronoun 'le' (to you, formal). In diplomatic correspondence, 'le' is used for the formal 'usted': 'le comunicaremos' (we will inform you), 'le haremos llegar' (we will send to you).",
      difficulty: "medium",
    },
  ],
};
