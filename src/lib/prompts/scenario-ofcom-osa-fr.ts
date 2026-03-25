import type { Scenario } from "@/lib/types";

export const ofcomOsaFrScenario: Scenario = {
  id: "ofcom-osa-fr",
  title: "The Online Safety Act",
  titleEs: "La Loi sur la Securite en Ligne",
  titleLocal: "La Loi sur la Securite en Ligne",
  description:
    "Explain the UK's Online Safety Act and its key provisions to a French tech policy expert.",
  setting: "Coffee break at the Forum de la Gouvernance Numerique in Lyon",
  language: "fr",
  turns: [
    {
      id: 1,
      avatarLine:
        "Bonjour, je suis specialiste en politique numerique. La legislation britannique sur la securite en ligne m'interesse beaucoup. Pouvez-vous m'en parler?",
      avatarLineEn:
        "Hello, I'm a digital policy specialist. I'm very interested in British online safety legislation. Can you tell me about it?",
      expectedUserPhrase:
        "Bien sur. La loi sur la securite en ligne a ete adoptee en deux mille vingt-trois. Elle impose des obligations aux plateformes pour proteger les utilisateurs.",
      expectedUserPhraseEn:
        "Of course. The Online Safety Act was passed in 2023. It places duties on platforms to protect users.",
      acceptableVariations: [
        "Oui, notre loi de deux mille vingt-trois impose des obligations aux plateformes",
        "La loi oblige les plateformes a proteger leurs utilisateurs",
        "Avec plaisir, la loi impose des devoirs aux services en ligne",
      ],
      vocabulary: [
        { word: "legislation", translation: "legislation", pronunciation: "/le.ʒis.la.sjɔ̃/", partOfSpeech: "noun" },
        { word: "a ete adoptee", translation: "was passed/adopted", pronunciation: "/a e.te a.dɔp.te/", partOfSpeech: "verb" },
        { word: "obligations", translation: "duties/obligations", pronunciation: "/ɔ.bli.ɡa.sjɔ̃/", partOfSpeech: "noun" },
        { word: "plateformes", translation: "platforms", pronunciation: "/plat.fɔʁm/", partOfSpeech: "noun" },
      ],
      grammarNote:
        "'A ete adoptee' — the past participle 'adoptee' agrees with 'la loi' (feminine singular). In French passive constructions, the participle always agrees with the subject in gender and number.",
      difficulty: "medium",
    },
    {
      id: 2,
      avatarLine:
        "Quels types d'obligations ont les plateformes?",
      avatarLineEn:
        "What types of obligations do platforms have?",
      expectedUserPhrase:
        "Il y a deux types principaux: les obligations relatives au contenu illegal et les obligations de protection des enfants.",
      expectedUserPhraseEn:
        "There are two main types: illegal content duties and children's protection duties.",
      acceptableVariations: [
        "Les plateformes ont des devoirs sur le contenu illegal et la protection des enfants",
        "Il y a les obligations sur le contenu illegal et celles sur la protection des mineurs",
        "Deux categories: contenu illegal et securite des enfants",
      ],
      vocabulary: [
        { word: "contenu illegal", translation: "illegal content", pronunciation: "/kɔ̃.tə.ny i.le.ɡal/", partOfSpeech: "noun" },
        { word: "protection des enfants", translation: "children's protection", pronunciation: "/pʁɔ.tɛk.sjɔ̃ de.z‿ɑ̃.fɑ̃/", partOfSpeech: "noun" },
        { word: "principaux", translation: "main/primary", pronunciation: "/pʁɛ̃.si.po/", partOfSpeech: "adjective" },
        { word: "relatives a", translation: "relating to", pronunciation: "/ʁə.la.tiv a/", partOfSpeech: "adjective" },
      ],
      grammarNote:
        "'Relatives au contenu' — 'au' is the contraction of 'a + le'. Key contractions: 'au' (a + le), 'aux' (a + les), 'du' (de + le), 'des' (de + les). These are mandatory in French.",
      difficulty: "medium",
    },
    {
      id: 3,
      avatarLine:
        "Quel type de contenu illegal est couvert par la loi?",
      avatarLineEn:
        "What type of illegal content is covered by the law?",
      expectedUserPhrase:
        "La loi traite des infractions prioritaires comme le terrorisme, l'exploitation sexuelle des enfants et les contenus d'automutilation.",
      expectedUserPhraseEn:
        "The law addresses priority offences such as terrorism, child sexual exploitation and self-harm content.",
      acceptableVariations: [
        "Elle couvre le terrorisme, l'exploitation des enfants et l'automutilation",
        "Les infractions prioritaires comprennent le terrorisme et l'abus sexuel des enfants",
        "La loi cible le terrorisme, l'exploitation infantile et l'automutilation",
      ],
      vocabulary: [
        { word: "infractions prioritaires", translation: "priority offences", pronunciation: "/ɛ̃.fʁak.sjɔ̃ pʁi.jɔ.ʁi.tɛʁ/", partOfSpeech: "noun" },
        { word: "terrorisme", translation: "terrorism", pronunciation: "/tɛ.ʁɔ.ʁism/", partOfSpeech: "noun" },
        { word: "exploitation sexuelle", translation: "sexual exploitation", pronunciation: "/ɛks.plwa.ta.sjɔ̃ sɛk.sy.ɛl/", partOfSpeech: "noun" },
        { word: "automutilation", translation: "self-harm", pronunciation: "/o.to.my.ti.la.sjɔ̃/", partOfSpeech: "noun" },
      ],
      grammarNote:
        "'La loi traite de' means 'the law addresses/deals with'. 'Traiter de' is followed by the preposition 'de': 'traiter des infractions' (to address offences). The 'des' is the contraction of 'de + les'.",
      difficulty: "medium",
    },
    {
      id: 4,
      avatarLine:
        "Et comment la loi protege-t-elle les enfants specifiquement?",
      avatarLineEn:
        "And how does the law protect children specifically?",
      expectedUserPhrase:
        "Les plateformes doivent mettre en place une verification d'age hautement efficace et empecher les algorithmes d'amplifier les contenus nocifs pour les mineurs.",
      expectedUserPhraseEn:
        "Platforms must implement highly effective age verification and prevent algorithms from amplifying harmful content to children.",
      acceptableVariations: [
        "Elles doivent verifier l'age des utilisateurs et proteger les enfants du contenu nocif",
        "Les plateformes doivent utiliser une verification d'age efficace",
        "La verification d'age est obligatoire et les algorithmes doivent etre controles",
      ],
      vocabulary: [
        { word: "verification d'age", translation: "age verification", pronunciation: "/ve.ʁi.fi.ka.sjɔ̃ daʒ/", partOfSpeech: "noun" },
        { word: "hautement efficace", translation: "highly effective", pronunciation: "/ot.mɑ̃ e.fi.kas/", partOfSpeech: "phrase" },
        { word: "algorithmes", translation: "algorithms", pronunciation: "/al.ɡɔ.ʁitm/", partOfSpeech: "noun" },
        { word: "contenus nocifs", translation: "harmful content", pronunciation: "/kɔ̃.tə.ny nɔ.sif/", partOfSpeech: "noun" },
      ],
      grammarNote:
        "'Doivent mettre en place' — 'devoir + infinitive' expresses legal obligation. 'Mettre en place' (to put in place/implement) is a key phrase in regulatory French: 'mettre en oeuvre' (to implement) is a close synonym.",
      difficulty: "hard",
    },
    {
      id: 5,
      avatarLine:
        "Avez-vous des pouvoirs de sanction si les plateformes ne respectent pas la loi?",
      avatarLineEn:
        "Do you have enforcement powers if platforms don't comply with the law?",
      expectedUserPhrase:
        "Oui, Ofcom peut imposer des sanctions financieres et emettre des avis technologiques exigeant l'utilisation de technologies pour detecter le contenu illegal.",
      expectedUserPhraseEn:
        "Yes, Ofcom can impose financial penalties and issue technology notices requiring the use of technology to detect illegal content.",
      acceptableVariations: [
        "Oui, nous pouvons imposer des amendes et exiger des technologies de detection",
        "Nous avons le pouvoir de sanctionner les plateformes",
        "Oui, Ofcom a des pouvoirs de sanction et peut emettre des avis technologiques",
      ],
      vocabulary: [
        { word: "sanctions financieres", translation: "financial penalties", pronunciation: "/sɑ̃k.sjɔ̃ fi.nɑ̃.sjɛʁ/", partOfSpeech: "noun" },
        { word: "avis technologiques", translation: "technology notices", pronunciation: "/a.vi tɛk.nɔ.lɔ.ʒik/", partOfSpeech: "noun" },
        { word: "pouvoirs de sanction", translation: "enforcement powers", pronunciation: "/pu.vwaʁ də sɑ̃k.sjɔ̃/", partOfSpeech: "noun" },
        { word: "detecter", translation: "to detect", pronunciation: "/de.tɛk.te/", partOfSpeech: "verb" },
      ],
      grammarNote:
        "'Peut imposer' (can impose) and 'peut emettre' (can issue) use 'pouvoir + infinitive'. In regulatory French, this states what the authority has the power to do. 'Emettre' is used for notices, guidelines, and recommendations.",
      difficulty: "hard",
    },
    {
      id: 6,
      avatarLine:
        "Les plateformes doivent-elles etre transparentes sur leurs actions?",
      avatarLineEn:
        "Must platforms be transparent about their actions?",
      expectedUserPhrase:
        "Oui, les services categorises doivent publier des rapports de transparence annuels sur leurs mesures de securite.",
      expectedUserPhraseEn:
        "Yes, categorised services must publish annual transparency reports on their safety measures.",
      acceptableVariations: [
        "Oui, les grandes plateformes doivent publier des rapports de transparence",
        "Les services categorises ont l'obligation de rendre des comptes annuellement",
        "Oui, il y a des exigences de transparence pour les plus grandes plateformes",
      ],
      vocabulary: [
        { word: "services categorises", translation: "categorised services", pronunciation: "/sɛʁ.vis ka.te.ɡɔ.ʁi.ze/", partOfSpeech: "noun" },
        { word: "rapports de transparence", translation: "transparency reports", pronunciation: "/ʁa.pɔʁ də tʁɑ̃s.pa.ʁɑ̃s/", partOfSpeech: "noun" },
        { word: "annuels", translation: "annual", pronunciation: "/a.ny.ɛl/", partOfSpeech: "adjective" },
        { word: "mesures de securite", translation: "safety measures", pronunciation: "/mə.zyʁ də se.ky.ʁi.te/", partOfSpeech: "noun" },
      ],
      grammarNote:
        "Inversion for formal questions: 'Les plateformes doivent-elles' inverts 'elles' and adds a hyphen. This is more formal than 'Est-ce que les plateformes doivent'. Use inversion in professional settings.",
      difficulty: "hard",
    },
    {
      id: 7,
      avatarLine:
        "Merci beaucoup pour ces explications. C'est un modele tres interessant. J'espere que nous pourrons continuer a echanger pendant la conference.",
      avatarLineEn:
        "Thank you very much for these explanations. It's a very interesting model. I hope we can continue exchanging ideas during the conference.",
      expectedUserPhrase: "",
      expectedUserPhraseEn: "",
      acceptableVariations: [],
      vocabulary: [
        { word: "echanger", translation: "to exchange", pronunciation: "/e.ʃɑ̃.ʒe/", partOfSpeech: "verb" },
        { word: "modele", translation: "model", pronunciation: "/mɔ.dɛl/", partOfSpeech: "noun" },
        { word: "explications", translation: "explanations", pronunciation: "/ɛks.pli.ka.sjɔ̃/", partOfSpeech: "noun" },
      ],
      grammarNote:
        "'J'espere que nous pourrons' — after 'esperer que', French uses the indicative (not subjunctive), unlike most verbs of wishing. 'Pourrons' is future tense of 'pouvoir': 'I hope we will be able to'.",
      difficulty: "easy",
    },
  ],
};
