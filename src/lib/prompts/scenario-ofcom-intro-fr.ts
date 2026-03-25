import type { Scenario } from "@/lib/types";

export const ofcomIntroFrScenario: Scenario = {
  id: "ofcom-intro-fr",
  title: "Introducing Ofcom",
  titleEs: "Presenter Ofcom",
  titleLocal: "Presenter Ofcom",
  description:
    "Introduce Ofcom and explain its role as the UK's communications regulator at an international conference in Paris.",
  setting: "Reception at an international telecoms conference in Paris",
  language: "fr",
  turns: [
    {
      id: 1,
      avatarLine:
        "Bonjour! Je suis Pierre, delegue de l'ARCEP. De quelle organisation venez-vous?",
      avatarLineEn:
        "Hello! I'm Pierre, a delegate from ARCEP. What organisation are you from?",
      expectedUserPhrase: "Bonjour, enchante. Je travaille pour Ofcom, le regulateur des communications du Royaume-Uni.",
      expectedUserPhraseEn: "Hello, pleased to meet you. I work for Ofcom, the UK's communications regulator.",
      acceptableVariations: [
        "Bonjour, je suis d'Ofcom, le regulateur britannique",
        "Enchante, je travaille chez Ofcom au Royaume-Uni",
        "Bonjour, je viens d'Ofcom",
      ],
      vocabulary: [
        { word: "regulateur", translation: "regulator", pronunciation: "/ʁe.ɡy.la.tœʁ/", partOfSpeech: "noun" },
        { word: "communications", translation: "communications", pronunciation: "/kɔ.my.ni.ka.sjɔ̃/", partOfSpeech: "noun" },
        { word: "Royaume-Uni", translation: "United Kingdom", pronunciation: "/ʁwa.jom y.ni/", partOfSpeech: "proper noun" },
        { word: "enchante", translation: "pleased to meet you", pronunciation: "/ɑ̃.ʃɑ̃.te/", partOfSpeech: "phrase" },
      ],
      grammarNote:
        "'Je travaille pour' means 'I work for' (an organisation). 'Je travaille chez' means 'I work at' (a company/place). Both are acceptable, but 'pour' emphasises the institution.",
      difficulty: "easy",
    },
    {
      id: 2,
      avatarLine:
        "Ofcom! J'en ai entendu parler. Que regulez-vous exactement?",
      avatarLineEn:
        "Ofcom! I've heard of it. What exactly do you regulate?",
      expectedUserPhrase:
        "Ofcom regule les telecommunications, la radiodiffusion, les services postaux et le spectre radioelectrique.",
      expectedUserPhraseEn:
        "Ofcom regulates telecommunications, broadcasting, postal services and the radio spectrum.",
      acceptableVariations: [
        "Nous regulons les telecoms, la radiodiffusion et les services postaux",
        "Ofcom regule les telecoms, les medias et le spectre",
        "Nous sommes le regulateur des telecoms, de la radiodiffusion et du spectre",
      ],
      vocabulary: [
        { word: "telecommunications", translation: "telecommunications", pronunciation: "/te.le.kɔ.my.ni.ka.sjɔ̃/", partOfSpeech: "noun" },
        { word: "radiodiffusion", translation: "broadcasting", pronunciation: "/ʁa.djo.di.fy.zjɔ̃/", partOfSpeech: "noun" },
        { word: "spectre radioelectrique", translation: "radio spectrum", pronunciation: "/spɛktʁ ʁa.djo.e.lɛk.tʁik/", partOfSpeech: "noun" },
        { word: "services postaux", translation: "postal services", pronunciation: "/sɛʁ.vis pɔs.to/", partOfSpeech: "noun" },
      ],
      grammarNote:
        "Definite articles are required before general categories in French: 'les telecommunications' (telecommunications), 'la radiodiffusion' (broadcasting). The article changes for gender and number.",
      difficulty: "easy",
    },
    {
      id: 3,
      avatarLine:
        "Impressionnant. Et vous regulez aussi internet? J'ai lu que le Royaume-Uni a de nouvelles lois sur la securite en ligne.",
      avatarLineEn:
        "Impressive. And do you also regulate the internet? I've read that the UK has new online safety laws.",
      expectedUserPhrase:
        "Oui, nous sommes egalement responsables de la securite en ligne en vertu de la nouvelle loi sur la securite en ligne.",
      expectedUserPhraseEn:
        "Yes, we are also responsible for online safety under the new Online Safety Act.",
      acceptableVariations: [
        "Oui, nous regulons aussi la securite en ligne",
        "Oui, la loi sur la securite en ligne nous donne de nouvelles responsabilites",
        "Effectivement, la securite en ligne fait maintenant partie de nos missions",
      ],
      vocabulary: [
        { word: "securite en ligne", translation: "online safety", pronunciation: "/se.ky.ʁi.te ɑ̃ liɲ/", partOfSpeech: "noun" },
        { word: "en vertu de", translation: "under/by virtue of", pronunciation: "/ɑ̃ vɛʁ.ty də/", partOfSpeech: "preposition" },
        { word: "loi", translation: "law/act", pronunciation: "/lwa/", partOfSpeech: "noun" },
        { word: "responsable", translation: "responsible", pronunciation: "/ʁɛs.pɔ̃.sabl/", partOfSpeech: "adjective" },
      ],
      grammarNote:
        "'En vertu de' is a formal preposition meaning 'under' or 'by virtue of', commonly used in legal/regulatory contexts. Less formal alternatives: 'selon' (according to), 'conformement a' (in accordance with).",
      difficulty: "easy",
    },
    {
      id: 4,
      avatarLine:
        "Tres interessant. Et Ofcom est-il independant du gouvernement?",
      avatarLineEn:
        "Very interesting. And is Ofcom independent from the government?",
      expectedUserPhrase:
        "Oui, Ofcom est un regulateur independant. Nous avons ete crees par la loi sur les communications de deux mille trois.",
      expectedUserPhraseEn:
        "Yes, Ofcom is an independent regulator. We were established by the Communications Act of 2003.",
      acceptableVariations: [
        "Oui, nous sommes independants du gouvernement",
        "Oui, Ofcom est independant, cree par la loi en deux mille trois",
        "Nous sommes un organisme regulateur independant",
      ],
      vocabulary: [
        { word: "independant", translation: "independent", pronunciation: "/ɛ̃.de.pɑ̃.dɑ̃/", partOfSpeech: "adjective" },
        { word: "gouvernement", translation: "government", pronunciation: "/ɡu.vɛʁ.nə.mɑ̃/", partOfSpeech: "noun" },
        { word: "avons ete crees", translation: "were established", pronunciation: "/a.vɔ̃.z‿e.te kʁe.e/", partOfSpeech: "verb" },
        { word: "organisme regulateur", translation: "regulatory body", pronunciation: "/ɔʁ.ɡa.nism ʁe.ɡy.la.tœʁ/", partOfSpeech: "noun" },
      ],
      grammarNote:
        "'Nous avons ete crees' is the passive passe compose (avoir ete + past participle). The participle 'crees' agrees with the masculine plural subject. For a feminine organisation: 'elle a ete creee'.",
      difficulty: "medium",
    },
    {
      id: 5,
      avatarLine:
        "Je comprends. Qu'est-ce qui vous amene a cette conference?",
      avatarLineEn:
        "I see. What brings you to this conference?",
      expectedUserPhrase:
        "Les secteurs que nous regulons sont mondiaux. La collaboration internationale est donc tres importante pour nous.",
      expectedUserPhraseEn:
        "The sectors we regulate are global. International collaboration is therefore very important to us.",
      acceptableVariations: [
        "Nous venons pour collaborer avec des regulateurs internationaux",
        "La cooperation internationale est essentielle pour notre travail",
        "Nous souhaitons partager nos experiences avec d'autres regulateurs",
      ],
      vocabulary: [
        { word: "collaboration internationale", translation: "international collaboration", pronunciation: "/kɔ.la.bɔ.ʁa.sjɔ̃ ɛ̃.tɛʁ.na.sjɔ.nal/", partOfSpeech: "noun" },
        { word: "mondiaux", translation: "global", pronunciation: "/mɔ̃.djo/", partOfSpeech: "adjective" },
        { word: "donc", translation: "therefore", pronunciation: "/dɔ̃k/", partOfSpeech: "conjunction" },
        { word: "secteurs", translation: "sectors", pronunciation: "/sɛk.tœʁ/", partOfSpeech: "noun" },
      ],
      grammarNote:
        "'Donc' (therefore) is a key connector in formal French. It links cause and effect: 'Les secteurs sont mondiaux, donc la collaboration est importante'. Position: usually after the subject or verb.",
      difficulty: "medium",
    },
    {
      id: 6,
      avatarLine:
        "Tout a fait d'accord. Dans quel domaine travaillez-vous au sein d'Ofcom?",
      avatarLineEn:
        "Absolutely agree. What area do you work in within Ofcom?",
      expectedUserPhrase:
        "Je travaille dans le groupe de securite en ligne. Nous nous occupons de la mise en oeuvre de la loi sur la securite en ligne.",
      expectedUserPhraseEn:
        "I work in the online safety group. We handle the implementation of the Online Safety Act.",
      acceptableVariations: [
        "Je suis dans l'equipe de securite en ligne",
        "Je travaille sur la securite en ligne et la mise en oeuvre de la loi",
        "Mon domaine est la securite en ligne",
      ],
      vocabulary: [
        { word: "mise en oeuvre", translation: "implementation", pronunciation: "/miz ɑ̃.n‿œvʁ/", partOfSpeech: "noun" },
        { word: "au sein de", translation: "within", pronunciation: "/o sɛ̃ də/", partOfSpeech: "preposition" },
        { word: "nous nous occupons de", translation: "we handle/deal with", pronunciation: "/nu nu.z‿ɔ.ky.pɔ̃ də/", partOfSpeech: "verb" },
        { word: "domaine", translation: "area/field", pronunciation: "/dɔ.mɛn/", partOfSpeech: "noun" },
      ],
      grammarNote:
        "'Mise en oeuvre' is the standard French term for 'implementation'. It's a feminine noun: 'la mise en oeuvre'. Related expressions: 'mettre en oeuvre' (to implement), 'mise en place' (setting up).",
      difficulty: "medium",
    },
    {
      id: 7,
      avatarLine:
        "Formidable! J'aimerais beaucoup en savoir plus. Voulez-vous prendre un cafe et continuer notre discussion?",
      avatarLineEn:
        "Wonderful! I'd love to know more. Would you like to grab a coffee and continue our discussion?",
      expectedUserPhrase: "",
      expectedUserPhraseEn: "",
      acceptableVariations: [],
      vocabulary: [
        { word: "j'aimerais", translation: "I would like", pronunciation: "/ʒɛ.mə.ʁɛ/", partOfSpeech: "verb" },
        { word: "en savoir plus", translation: "to know more", pronunciation: "/ɑ̃ sa.vwaʁ ply/", partOfSpeech: "phrase" },
        { word: "continuer", translation: "to continue", pronunciation: "/kɔ̃.ti.ny.e/", partOfSpeech: "verb" },
      ],
      grammarNote:
        "'J'aimerais' is the conditional of 'aimer', used for polite requests. It's softer than 'je veux' (I want). Compare: 'j'aimerais savoir' (I'd like to know) vs 'je veux savoir' (I want to know).",
      difficulty: "easy",
    },
  ],
};
