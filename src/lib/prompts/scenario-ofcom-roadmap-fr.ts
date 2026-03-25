import type { Scenario } from "@/lib/types";

export const ofcomRoadmapFrScenario: Scenario = {
  id: "ofcom-roadmap-fr",
  title: "Roadmap to Regulation",
  titleEs: "Feuille de Route Reglementaire",
  titleLocal: "Feuille de Route Reglementaire",
  description:
    "Discuss Ofcom's phased implementation of the Online Safety Act with an EU regulator in Brussels.",
  setting: "Panel preparation meeting at an EU digital policy conference in Brussels",
  language: "fr",
  turns: [
    {
      id: 1,
      avatarLine:
        "Bonjour. Je suis Sophie, de la Commission europeenne. Pouvons-nous discuter de votre approche de mise en oeuvre?",
      avatarLineEn:
        "Hello. I'm Sophie, from the European Commission. Can we discuss your implementation approach?",
      expectedUserPhrase:
        "Bonjour Sophie. Oui, bien sur. Je vais vous presenter la feuille de route d'Ofcom pour mettre en oeuvre la loi sur la securite en ligne.",
      expectedUserPhraseEn:
        "Hello Sophie. Yes, of course. I'll present Ofcom's roadmap for implementing the Online Safety Act.",
      acceptableVariations: [
        "Bonjour, je vais presenter notre feuille de route de mise en oeuvre",
        "Oui, je suis la pour parler de notre approche par etapes",
        "Bien sur, je vais expliquer comment nous mettons en oeuvre la loi",
      ],
      vocabulary: [
        { word: "feuille de route", translation: "roadmap", pronunciation: "/fœj də ʁut/", partOfSpeech: "noun" },
        { word: "mettre en oeuvre", translation: "to implement", pronunciation: "/mɛtʁ ɑ̃.n‿œvʁ/", partOfSpeech: "verb" },
        { word: "approche", translation: "approach", pronunciation: "/a.pʁɔʃ/", partOfSpeech: "noun" },
        { word: "presenter", translation: "to present", pronunciation: "/pʁe.zɑ̃.te/", partOfSpeech: "verb" },
      ],
      grammarNote:
        "'Je vais vous presenter' uses the near future (aller + infinitive) with an indirect object pronoun 'vous' placed between 'vais' and 'presenter'. This is the standard word order for pronoun placement with compound verbs.",
      difficulty: "medium",
    },
    {
      id: 2,
      avatarLine:
        "Pouvez-vous expliquer l'approche par etapes que vous utilisez?",
      avatarLineEn:
        "Can you explain the phased approach you're using?",
      expectedUserPhrase:
        "Nous mettons en oeuvre la loi progressivement. D'abord le contenu illegal, ensuite la protection des enfants, puis les obligations supplementaires.",
      expectedUserPhraseEn:
        "We're implementing the law gradually. First illegal content, then child protection, then additional obligations.",
      acceptableVariations: [
        "La mise en oeuvre se fait par etapes, en commencant par le contenu illegal",
        "D'abord les devoirs sur le contenu illegal, puis la protection des mineurs",
        "Nous utilisons une approche progressive, phase par phase",
      ],
      vocabulary: [
        { word: "par etapes", translation: "in phases/stages", pronunciation: "/paʁ e.tap/", partOfSpeech: "phrase" },
        { word: "progressivement", translation: "gradually", pronunciation: "/pʁɔ.ɡʁɛ.siv.mɑ̃/", partOfSpeech: "adverb" },
        { word: "d'abord", translation: "first", pronunciation: "/da.bɔʁ/", partOfSpeech: "adverb" },
        { word: "obligations supplementaires", translation: "additional obligations", pronunciation: "/ɔ.bli.ɡa.sjɔ̃ sy.ple.mɑ̃.tɛʁ/", partOfSpeech: "noun" },
      ],
      grammarNote:
        "Sequencing in French: 'd'abord' (first), 'ensuite' (then/next), 'puis' (then), 'enfin' (finally). These are essential for presenting a timeline: 'D'abord X, ensuite Y, puis Z'.",
      difficulty: "medium",
    },
    {
      id: 3,
      avatarLine:
        "Que sont exactement les codes de conduite?",
      avatarLineEn:
        "What exactly are the codes of practice?",
      expectedUserPhrase:
        "Les codes de conduite sont des orientations detaillees qui indiquent aux services comment se conformer a leurs obligations en vertu de la loi.",
      expectedUserPhraseEn:
        "Codes of practice are detailed guidelines that tell services how to comply with their obligations under the law.",
      acceptableVariations: [
        "Ce sont des documents qui expliquent aux plateformes comment respecter la loi",
        "Les codes de conduite fournissent des orientations sur la conformite",
        "Ce sont des guides qu'Ofcom publie pour aider les plateformes",
      ],
      vocabulary: [
        { word: "codes de conduite", translation: "codes of practice", pronunciation: "/kɔd də kɔ̃.dɥit/", partOfSpeech: "noun" },
        { word: "se conformer a", translation: "to comply with", pronunciation: "/sə kɔ̃.fɔʁ.me a/", partOfSpeech: "verb" },
        { word: "orientations detaillees", translation: "detailed guidelines", pronunciation: "/ɔ.ʁjɑ̃.ta.sjɔ̃ de.ta.je/", partOfSpeech: "noun" },
        { word: "conformite", translation: "compliance", pronunciation: "/kɔ̃.fɔʁ.mi.te/", partOfSpeech: "noun" },
      ],
      grammarNote:
        "'Se conformer a' is a reflexive verb meaning 'to comply with'. In regulatory French: 'se conformer aux exigences' (to comply with requirements), 'se conformer a la reglementation' (to comply with regulations).",
      difficulty: "medium",
    },
    {
      id: 4,
      avatarLine:
        "Comment fonctionne la categorisation des services?",
      avatarLineEn:
        "How does the categorisation of services work?",
      expectedUserPhrase:
        "Ofcom classe les services selon leur taille et leur niveau de risque. Les services categorises, les plus grandes plateformes, ont des obligations renforcees.",
      expectedUserPhraseEn:
        "Ofcom classifies services by their size and risk level. Categorised services, the largest platforms, have enhanced obligations.",
      acceptableVariations: [
        "Les plus grandes plateformes sont classees et ont plus d'obligations",
        "La categorisation determine quelles plateformes ont des devoirs supplementaires",
        "Les grands services ont des exigences plus strictes",
      ],
      vocabulary: [
        { word: "categorisation", translation: "categorisation", pronunciation: "/ka.te.ɡɔ.ʁi.za.sjɔ̃/", partOfSpeech: "noun" },
        { word: "taille et risque", translation: "size and risk", pronunciation: "/taj e ʁisk/", partOfSpeech: "noun" },
        { word: "obligations renforcees", translation: "enhanced obligations", pronunciation: "/ɔ.bli.ɡa.sjɔ̃ ʁɑ̃.fɔʁ.se/", partOfSpeech: "noun" },
        { word: "classer", translation: "to classify", pronunciation: "/kla.se/", partOfSpeech: "verb" },
      ],
      grammarNote:
        "'Selon' (according to/by) is followed directly by a noun without an article: 'selon leur taille' (by their size). 'Selon' is more formal than 'd'apres' or 'en fonction de'.",
      difficulty: "hard",
    },
    {
      id: 5,
      avatarLine:
        "Et la transparence? Quelles informations les plateformes doivent-elles partager?",
      avatarLineEn:
        "And transparency? What information must platforms share?",
      expectedUserPhrase:
        "Les services categorises doivent publier des rapports de transparence annuels. Les premiers rapports sont attendus pour l'ete deux mille vingt-sept.",
      expectedUserPhraseEn:
        "Categorised services must publish annual transparency reports. The first reports are expected by summer 2027.",
      acceptableVariations: [
        "Ils doivent publier des rapports annuels sur leurs mesures de securite",
        "Les premiers rapports de transparence arriveront en deux mille vingt-sept",
        "Les grandes plateformes devront presenter des rapports de transparence",
      ],
      vocabulary: [
        { word: "rapports annuels", translation: "annual reports", pronunciation: "/ʁa.pɔʁ a.ny.ɛl/", partOfSpeech: "noun" },
        { word: "sont attendus", translation: "are expected", pronunciation: "/sɔ̃.t‿a.tɑ̃.dy/", partOfSpeech: "verb" },
        { word: "ete", translation: "summer", pronunciation: "/e.te/", partOfSpeech: "noun" },
        { word: "partager", translation: "to share", pronunciation: "/paʁ.ta.ʒe/", partOfSpeech: "verb" },
      ],
      grammarNote:
        "'Sont attendus' is the passive voice (etre + past participle). The participle 'attendus' agrees with the masculine plural 'rapports'. This passive construction is very common in formal/regulatory French.",
      difficulty: "hard",
    },
    {
      id: 6,
      avatarLine:
        "Quelles sont les etapes cles pour deux mille vingt-six et deux mille vingt-sept?",
      avatarLineEn:
        "What are the key milestones for 2026 and 2027?",
      expectedUserPhrase:
        "En deux mille vingt-six, nous publierons le registre de categorisation et consulterons sur les obligations supplementaires. En deux mille vingt-sept, les premiers rapports de transparence seront dus.",
      expectedUserPhraseEn:
        "In 2026, we'll publish the categorisation register and consult on additional obligations. In 2027, the first transparency reports will be due.",
      acceptableVariations: [
        "En deux mille vingt-six, le registre de categorisation sera publie",
        "Les etapes cles sont la categorisation en deux mille vingt-six et la transparence en deux mille vingt-sept",
        "Nous publierons le registre et ensuite les rapports de transparence",
      ],
      vocabulary: [
        { word: "etapes cles", translation: "key milestones", pronunciation: "/e.tap kle/", partOfSpeech: "noun" },
        { word: "registre de categorisation", translation: "categorisation register", pronunciation: "/ʁə.ʒistʁ də ka.te.ɡɔ.ʁi.za.sjɔ̃/", partOfSpeech: "noun" },
        { word: "consulterons", translation: "we will consult", pronunciation: "/kɔ̃.syl.tə.ʁɔ̃/", partOfSpeech: "verb" },
        { word: "publierons", translation: "we will publish", pronunciation: "/py.bli.ə.ʁɔ̃/", partOfSpeech: "verb" },
      ],
      grammarNote:
        "'Publierons' and 'consulterons' are the simple future (futur simple), formed from the infinitive + -ons ending. This is standard for planned milestones: 'nous implementerons' (we will implement), 'nous evaluerons' (we will evaluate).",
      difficulty: "hard",
    },
    {
      id: 7,
      avatarLine:
        "Excellent. C'est une approche tres structuree. Merci pour ces precisions. Preparons-nous, le panel commence dans dix minutes.",
      avatarLineEn:
        "Excellent. It's a very structured approach. Thank you for these details. Let's get ready, the panel starts in ten minutes.",
      expectedUserPhrase: "",
      expectedUserPhraseEn: "",
      acceptableVariations: [],
      vocabulary: [
        { word: "structuree", translation: "structured", pronunciation: "/stʁyk.ty.ʁe/", partOfSpeech: "adjective" },
        { word: "precisions", translation: "details/specifics", pronunciation: "/pʁe.si.zjɔ̃/", partOfSpeech: "noun" },
        { word: "preparons-nous", translation: "let's get ready", pronunciation: "/pʁe.pa.ʁɔ̃ nu/", partOfSpeech: "verb" },
      ],
      grammarNote:
        "'Preparons-nous' is the imperative of a reflexive verb with 'nous'. The pronoun follows the verb with a hyphen. Compare: 'preparons-nous' (let's get ready) vs 'ne nous preparons pas' (let's not get ready).",
      difficulty: "easy",
    },
  ],
};
