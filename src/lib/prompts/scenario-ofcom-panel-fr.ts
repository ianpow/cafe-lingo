import type { Scenario } from "@/lib/types";

export const ofcomPanelFrScenario: Scenario = {
  id: "ofcom-panel-fr",
  title: "Conference Panel",
  titleEs: "Table Ronde",
  titleLocal: "Table Ronde",
  description:
    "Present Ofcom's work and answer questions from a moderator on a conference panel about online safety.",
  setting: "Main stage at FIC (Forum International de la Cybersecurite) in Lille",
  language: "fr",
  turns: [
    {
      id: 1,
      avatarLine:
        "Bienvenue a notre table ronde sur la regulation de la securite en ligne. Commençons avec notre collegue du Royaume-Uni. Quelles sont les priorites actuelles d'Ofcom?",
      avatarLineEn:
        "Welcome to our panel on online safety regulation. Let's start with our colleague from the UK. What are Ofcom's current priorities?",
      expectedUserPhrase:
        "Merci. Les priorites actuelles d'Ofcom sont la protection des enfants en ligne, la responsabilite des plateformes et la mise en oeuvre effective de notre loi sur la securite en ligne.",
      expectedUserPhraseEn:
        "Thank you. Ofcom's current priorities are child protection online, platform accountability, and the effective implementation of our Online Safety Act.",
      acceptableVariations: [
        "Merci, nos priorites sont proteger les enfants, responsabiliser les plateformes et mettre en oeuvre la loi",
        "Nous nous concentrons sur la protection des enfants et la mise en oeuvre de la loi",
        "Les priorites cles sont la securite des enfants et la responsabilite des plateformes",
      ],
      vocabulary: [
        { word: "table ronde", translation: "panel/roundtable", pronunciation: "/tabl ʁɔ̃d/", partOfSpeech: "noun" },
        { word: "priorites actuelles", translation: "current priorities", pronunciation: "/pʁi.jɔ.ʁi.te ak.ty.ɛl/", partOfSpeech: "noun" },
        { word: "protection des enfants", translation: "child protection", pronunciation: "/pʁɔ.tɛk.sjɔ̃ de.z‿ɑ̃.fɑ̃/", partOfSpeech: "noun" },
        { word: "mise en oeuvre effective", translation: "effective implementation", pronunciation: "/miz ɑ̃.n‿œvʁ e.fɛk.tiv/", partOfSpeech: "noun" },
      ],
      grammarNote:
        "'Table ronde' literally means 'round table' and is the standard French term for a panel discussion. Unlike English 'panel', the French term evokes equality among participants: everyone is at the same round table.",
      difficulty: "hard",
    },
    {
      id: 2,
      avatarLine:
        "Pouvez-vous approfondir la maniere dont Ofcom protege les enfants sur internet?",
      avatarLineEn:
        "Can you elaborate on how Ofcom is protecting children on the internet?",
      expectedUserPhrase:
        "Nous avons publie des codes de protection des enfants qui exigent une verification d'age efficace. Recemment, nous avons inflige une amende importante a une plateforme pour non-protection des mineurs.",
      expectedUserPhraseEn:
        "We've published child protection codes requiring effective age verification. Recently, we imposed a significant fine on a platform for failing to protect children.",
      acceptableVariations: [
        "Nous avons publie des codes de conduite avec verification d'age obligatoire",
        "Nous exigeons la verification d'age et avons sanctionne des plateformes non conformes",
        "Nos codes exigent que les plateformes verifient l'age de leurs utilisateurs",
      ],
      vocabulary: [
        { word: "approfondir", translation: "to elaborate/deepen", pronunciation: "/a.pʁɔ.fɔ̃.diʁ/", partOfSpeech: "verb" },
        { word: "amende", translation: "fine/penalty", pronunciation: "/a.mɑ̃d/", partOfSpeech: "noun" },
        { word: "avons inflige", translation: "we imposed", pronunciation: "/a.vɔ̃.z‿ɛ̃.fli.ʒe/", partOfSpeech: "verb" },
        { word: "recemment", translation: "recently", pronunciation: "/ʁe.sa.mɑ̃/", partOfSpeech: "adverb" },
      ],
      grammarNote:
        "'Infliger une amende' (to impose a fine) is the formal regulatory term. 'Infliger' is used for penalties and sanctions: 'infliger une sanction' (to impose a sanction). Past participle: 'inflige' (doesn't agree with 'avoir').",
      difficulty: "hard",
    },
    {
      id: 3,
      avatarLine:
        "Comment Ofcom concilie-t-il regulation et innovation technologique?",
      avatarLineEn:
        "How does Ofcom balance regulation and technological innovation?",
      expectedUserPhrase:
        "Nous croyons en une regulation proportionnee qui protege les utilisateurs sans etouffer l'innovation. Notre approche est flexible et axee sur les resultats, pas sur des technologies specifiques.",
      expectedUserPhraseEn:
        "We believe in proportionate regulation that protects users without stifling innovation. Our approach is flexible and outcomes-based, not focused on specific technologies.",
      acceptableVariations: [
        "Nous cherchons un equilibre entre securite et innovation",
        "La regulation doit etre proportionnee et ne pas empecher l'innovation",
        "Notre approche est proportionnee et basee sur les resultats",
      ],
      vocabulary: [
        { word: "proportionnee", translation: "proportionate", pronunciation: "/pʁɔ.pɔʁ.sjɔ.ne/", partOfSpeech: "adjective" },
        { word: "etouffer", translation: "to stifle", pronunciation: "/e.tu.fe/", partOfSpeech: "verb" },
        { word: "axee sur les resultats", translation: "outcomes-based", pronunciation: "/ak.se syʁ le ʁe.zyl.ta/", partOfSpeech: "phrase" },
        { word: "concilier", translation: "to balance/reconcile", pronunciation: "/kɔ̃.si.lje/", partOfSpeech: "verb" },
      ],
      grammarNote:
        "'Sans etouffer' uses 'sans + infinitive' meaning 'without stifling'. This construction is essential for nuanced positions: 'sans compromettre' (without compromising), 'sans nuire a' (without harming).",
      difficulty: "hard",
    },
    {
      id: 4,
      avatarLine:
        "En pratique, comment travaillez-vous avec les entreprises technologiques?",
      avatarLineEn:
        "In practice, how do you work with tech companies?",
      expectedUserPhrase:
        "Nous maintenons un dialogue permanent avec l'industrie. Les plateformes peuvent suivre nos codes de conduite ou demontrer des mesures alternatives qui atteignent les memes objectifs.",
      expectedUserPhraseEn:
        "We maintain constant dialogue with industry. Platforms can follow our codes of practice or demonstrate alternative measures that achieve the same objectives.",
      acceptableVariations: [
        "Nous dialoguons regulierement avec les plateformes",
        "Les plateformes ont la flexibilite de suivre nos codes ou de proposer des alternatives",
        "Nous travaillons avec l'industrie par le biais de consultations et de codes",
      ],
      vocabulary: [
        { word: "dialogue permanent", translation: "constant dialogue", pronunciation: "/dja.lɔɡ pɛʁ.ma.nɑ̃/", partOfSpeech: "noun" },
        { word: "industrie", translation: "industry", pronunciation: "/ɛ̃.dys.tʁi/", partOfSpeech: "noun" },
        { word: "mesures alternatives", translation: "alternative measures", pronunciation: "/mə.zyʁ al.tɛʁ.na.tiv/", partOfSpeech: "noun" },
        { word: "demontrer", translation: "to demonstrate", pronunciation: "/de.mɔ̃.tʁe/", partOfSpeech: "verb" },
      ],
      grammarNote:
        "'Qui atteignent les memes objectifs' uses the indicative 'atteignent' (not subjunctive) because the relative clause describes a factual characteristic. The subjunctive would be needed with 'qui puissent atteindre' (that may achieve).",
      difficulty: "hard",
    },
    {
      id: 5,
      avatarLine:
        "En regardant vers l'avenir, comment voyez-vous l'evolution de la regulation de la securite en ligne?",
      avatarLineEn:
        "Looking to the future, how do you see the evolution of online safety regulation?",
      expectedUserPhrase:
        "Nous voyons des defis emergents comme les contenus generes par l'intelligence artificielle et la desinformation. La cooperation internationale sera essentielle pour faire face a ces menaces transfrontalieres.",
      expectedUserPhraseEn:
        "We see emerging challenges like AI-generated content and disinformation. International cooperation will be essential to address these cross-border threats.",
      acceptableVariations: [
        "Les nouveaux defis incluent l'intelligence artificielle et la desinformation",
        "La cooperation internationale sera cle pour affronter les defis futurs",
        "Nous voyons des defis avec l'IA et nous avons besoin de plus de cooperation",
      ],
      vocabulary: [
        { word: "defis emergents", translation: "emerging challenges", pronunciation: "/de.fi e.mɛʁ.ʒɑ̃/", partOfSpeech: "noun" },
        { word: "intelligence artificielle", translation: "artificial intelligence", pronunciation: "/ɛ̃.tɛ.li.ʒɑ̃s aʁ.ti.fi.sjɛl/", partOfSpeech: "noun" },
        { word: "desinformation", translation: "disinformation", pronunciation: "/de.zɛ̃.fɔʁ.ma.sjɔ̃/", partOfSpeech: "noun" },
        { word: "menaces transfrontalieres", translation: "cross-border threats", pronunciation: "/mə.nas tʁɑ̃s.fʁɔ̃.ta.ljɛʁ/", partOfSpeech: "noun" },
      ],
      grammarNote:
        "'Faire face a' means 'to face/address'. It's followed by the preposition 'a': 'faire face a ces menaces' (to face these threats). Synonym: 'affronter' (to confront), which takes a direct object without 'a'.",
      difficulty: "hard",
    },
    {
      id: 6,
      avatarLine:
        "Nous avons une question du public: quel conseil donneriez-vous aux regulateurs qui commencent a elaborer des cadres de securite en ligne?",
      avatarLineEn:
        "We have a question from the audience: what advice would you give to regulators starting to develop online safety frameworks?",
      expectedUserPhrase:
        "Je leur conseillerais de commencer par les bases: comprendre les risques, consulter toutes les parties prenantes et construire une regulation proportionnee et fondee sur les preuves.",
      expectedUserPhraseEn:
        "I would advise them to start with the basics: understand the risks, consult all stakeholders and build proportionate, evidence-based regulation.",
      acceptableVariations: [
        "Je conseillerais de commencer par les risques et de consulter largement",
        "Je recommanderais une approche progressive et fondee sur les preuves",
        "Le plus important est de consulter toutes les parties et d'etre proportionne",
      ],
      vocabulary: [
        { word: "conseillerais", translation: "would advise", pronunciation: "/kɔ̃.sɛ.jə.ʁɛ/", partOfSpeech: "verb" },
        { word: "parties prenantes", translation: "stakeholders", pronunciation: "/paʁ.ti pʁə.nɑ̃t/", partOfSpeech: "noun" },
        { word: "fondee sur les preuves", translation: "evidence-based", pronunciation: "/fɔ̃.de syʁ le pʁœv/", partOfSpeech: "phrase" },
        { word: "cadres", translation: "frameworks", pronunciation: "/kadʁ/", partOfSpeech: "noun" },
      ],
      grammarNote:
        "'Je leur conseillerais de' combines the conditional with an indirect pronoun 'leur' (to them). After 'conseiller', use 'de + infinitive': 'conseiller de commencer' (to advise to start). 'Leur' replaces 'aux regulateurs'.",
      difficulty: "hard",
    },
    {
      id: 7,
      avatarLine:
        "Merci infiniment pour vos contributions precieuses. Cette session a ete tres enrichissante. Un grand applaudissement pour tous nos panelistes.",
      avatarLineEn:
        "Thank you so much for your valuable contributions. This session has been very enriching. A big round of applause for all our panellists.",
      expectedUserPhrase: "",
      expectedUserPhraseEn: "",
      acceptableVariations: [],
      vocabulary: [
        { word: "contributions precieuses", translation: "valuable contributions", pronunciation: "/kɔ̃.tʁi.by.sjɔ̃ pʁe.sjøz/", partOfSpeech: "noun" },
        { word: "enrichissante", translation: "enriching", pronunciation: "/ɑ̃.ʁi.ʃi.sɑ̃t/", partOfSpeech: "adjective" },
        { word: "panelistes", translation: "panellists", pronunciation: "/pa.ne.list/", partOfSpeech: "noun" },
      ],
      grammarNote:
        "'Merci infiniment' is a very formal way to say thank you. Ranking from casual to formal: 'merci' → 'merci beaucoup' → 'merci infiniment' → 'je vous remercie vivement'.",
      difficulty: "easy",
    },
  ],
};
