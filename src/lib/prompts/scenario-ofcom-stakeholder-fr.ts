import type { Scenario } from "@/lib/types";

export const ofcomStakeholderFrScenario: Scenario = {
  id: "ofcom-stakeholder-fr",
  title: "Stakeholder Meeting",
  titleEs: "Reunion Bilaterale",
  titleLocal: "Reunion Bilaterale",
  description:
    "Hold a formal bilateral meeting with a senior French regulator to discuss cooperation on online safety.",
  setting: "Bilateral meeting at ARCEP headquarters in Paris",
  language: "fr",
  turns: [
    {
      id: 1,
      avatarLine:
        "Bonjour. Je suis la Directrice adjointe de l'ARCEP. C'est un plaisir de vous accueillir formellement.",
      avatarLineEn:
        "Hello. I'm the Deputy Director of ARCEP. It's a pleasure to welcome you formally.",
      expectedUserPhrase:
        "Bonjour, Madame la Directrice. Le plaisir est partage. Nous vous remercions de cette opportunite de dialoguer sur nos approches reglementaires.",
      expectedUserPhraseEn:
        "Hello, Director. The pleasure is shared. We thank you for this opportunity to discuss our regulatory approaches.",
      acceptableVariations: [
        "Bonjour, merci de nous recevoir. C'est un plaisir",
        "Le plaisir est partage, merci pour cette opportunite de reunion",
        "Bonjour, nous sommes ravis de cette reunion bilaterale",
      ],
      vocabulary: [
        { word: "reunion bilaterale", translation: "bilateral meeting", pronunciation: "/ʁe.y.njɔ̃ bi.la.te.ʁal/", partOfSpeech: "noun" },
        { word: "nous vous remercions", translation: "we thank you", pronunciation: "/nu vu ʁə.mɛʁ.sjɔ̃/", partOfSpeech: "verb" },
        { word: "approches reglementaires", translation: "regulatory approaches", pronunciation: "/a.pʁɔʃ ʁe.ɡlə.mɑ̃.tɛʁ/", partOfSpeech: "noun" },
        { word: "dialoguer", translation: "to discuss/dialogue", pronunciation: "/dja.lɔ.ɡe/", partOfSpeech: "verb" },
      ],
      grammarNote:
        "'Madame la Directrice' is the formal way to address a female director in French. Titles are feminised: 'Monsieur le Directeur' / 'Madame la Directrice'. Using the title shows respect in formal settings.",
      difficulty: "hard",
    },
    {
      id: 2,
      avatarLine:
        "L'experience britannique en matiere de cooperation internationale nous interesse beaucoup. Comment Ofcom travaille-t-il avec d'autres regulateurs?",
      avatarLineEn:
        "We're very interested in the British experience in international cooperation. How does Ofcom work with other regulators?",
      expectedUserPhrase:
        "Ofcom collabore activement avec des regulateurs internationaux. Nous participons au groupe des Cinq Yeux pour la securite des telecoms et cooperons avec des regulateurs de securite en ligne dans le monde entier.",
      expectedUserPhraseEn:
        "Ofcom actively collaborates with international regulators. We participate in the Five Eyes group for telecoms security and cooperate with online safety regulators worldwide.",
      acceptableVariations: [
        "Nous travaillons avec des regulateurs du monde entier, y compris les Cinq Yeux",
        "Nous collaborons avec des regulateurs internationaux sur les telecoms et la securite en ligne",
        "Ofcom participe a des forums internationaux et coopere avec d'autres regulateurs",
      ],
      vocabulary: [
        { word: "collabore activement", translation: "actively collaborates", pronunciation: "/kɔ.la.bɔʁ ak.tiv.mɑ̃/", partOfSpeech: "phrase" },
        { word: "les Cinq Yeux", translation: "Five Eyes", pronunciation: "/le sɛ̃k jø/", partOfSpeech: "proper noun" },
        { word: "dans le monde entier", translation: "worldwide", pronunciation: "/dɑ̃ lə mɔ̃.d‿ɑ̃.tje/", partOfSpeech: "phrase" },
        { word: "cooperons", translation: "we cooperate", pronunciation: "/ko.o.pe.ʁɔ̃/", partOfSpeech: "verb" },
      ],
      grammarNote:
        "'En matiere de' is a formal expression meaning 'in the field of' or 'regarding'. It's more elevated than 'concernant' or 'a propos de': 'en matiere de regulation' (in the field of regulation).",
      difficulty: "hard",
    },
    {
      id: 3,
      avatarLine:
        "Quelle est l'approche d'Ofcom en matiere de responsabilite des plateformes?",
      avatarLineEn:
        "What is Ofcom's approach to platform accountability?",
      expectedUserPhrase:
        "Notre approche est systemique, pas axee sur le contenu individuel. Les plateformes doivent disposer de systemes efficaces pour gerer les risques de leurs services.",
      expectedUserPhraseEn:
        "Our approach is systems-based, not focused on individual content. Platforms must have effective systems to manage the risks of their services.",
      acceptableVariations: [
        "Nous nous concentrons sur les systemes, pas sur les contenus individuels",
        "L'approche est fondee sur les systemes de gestion des risques",
        "Nous exigeons que les plateformes aient des systemes de gestion des risques efficaces",
      ],
      vocabulary: [
        { word: "responsabilite", translation: "accountability", pronunciation: "/ʁɛs.pɔ̃.sa.bi.li.te/", partOfSpeech: "noun" },
        { word: "systemique", translation: "systems-based", pronunciation: "/sis.te.mik/", partOfSpeech: "adjective" },
        { word: "gerer les risques", translation: "to manage risks", pronunciation: "/ʒe.ʁe le ʁisk/", partOfSpeech: "verb" },
        { word: "disposer de", translation: "to have/possess", pronunciation: "/dis.po.ze də/", partOfSpeech: "verb" },
      ],
      grammarNote:
        "'Disposer de' is more formal than 'avoir' (to have) in regulatory contexts: 'disposer de systemes efficaces' (to have effective systems). 'Axee sur' means 'focused on': 'une approche axee sur les resultats' (a results-focused approach).",
      difficulty: "hard",
    },
    {
      id: 4,
      avatarLine:
        "La verification d'age est aussi un sujet important pour nous. Quelles technologies envisagez-vous?",
      avatarLineEn:
        "Age verification is also an important topic for us. What technologies are you considering?",
      expectedUserPhrase:
        "Ofcom ne prescrit pas de technologies specifiques, mais la verification d'age doit etre hautement efficace. Nous avons publie des orientations sur les normes que la technologie doit respecter.",
      expectedUserPhraseEn:
        "Ofcom doesn't prescribe specific technologies, but age verification must be highly effective. We've published guidance on the standards the technology must meet.",
      acceptableVariations: [
        "Nous ne prescrivons pas de technologies mais elles doivent etre efficaces",
        "La verification doit respecter des normes elevees que nous avons publiees",
        "Nous laissons de la flexibilite mais exigeons l'efficacite",
      ],
      vocabulary: [
        { word: "prescrire", translation: "to prescribe", pronunciation: "/pʁɛs.kʁiʁ/", partOfSpeech: "verb" },
        { word: "normes", translation: "standards", pronunciation: "/nɔʁm/", partOfSpeech: "noun" },
        { word: "orientations", translation: "guidance", pronunciation: "/ɔ.ʁjɑ̃.ta.sjɔ̃/", partOfSpeech: "noun" },
        { word: "avons publie", translation: "we have published", pronunciation: "/a.vɔ̃ py.bli.e/", partOfSpeech: "verb" },
      ],
      grammarNote:
        "'Nous avons publie' is the passe compose, used for completed actions with present relevance. 'Publie' doesn't agree here because 'avoir' is the auxiliary. With 'etre': 'les orientations ont ete publiees' (the guidance was published).",
      difficulty: "hard",
    },
    {
      id: 5,
      avatarLine:
        "Voyez-vous des possibilites de renforcer la cooperation entre nos agences?",
      avatarLineEn:
        "Do you see opportunities to strengthen cooperation between our agencies?",
      expectedUserPhrase:
        "Absolument. Nous pourrions partager les bonnes pratiques en matiere de verification d'age, cooperer sur les enquetes transfrontalieres et harmoniser nos approches reglementaires.",
      expectedUserPhraseEn:
        "Absolutely. We could share best practices in age verification, cooperate on cross-border investigations and harmonise our regulatory approaches.",
      acceptableVariations: [
        "Oui, il y a beaucoup de domaines ou nous pouvons collaborer",
        "Nous pourrions cooperer sur la verification d'age et les enquetes",
        "Nous voyons de grandes opportunites de cooperation en securite en ligne",
      ],
      vocabulary: [
        { word: "bonnes pratiques", translation: "best practices", pronunciation: "/bɔn pʁa.tik/", partOfSpeech: "noun" },
        { word: "enquetes transfrontalieres", translation: "cross-border investigations", pronunciation: "/ɑ̃.kɛt tʁɑ̃s.fʁɔ̃.ta.ljɛʁ/", partOfSpeech: "noun" },
        { word: "harmoniser", translation: "to harmonise", pronunciation: "/aʁ.mɔ.ni.ze/", partOfSpeech: "verb" },
        { word: "pourrions", translation: "we could", pronunciation: "/pu.ʁjɔ̃/", partOfSpeech: "verb" },
      ],
      grammarNote:
        "'Pourrions' is the conditional of 'pouvoir', essential for diplomatic suggestions. 'Nous pourrions envisager' (we could consider), 'il serait souhaitable' (it would be desirable). The conditional softens proposals.",
      difficulty: "hard",
    },
    {
      id: 6,
      avatarLine:
        "Quels sont les principaux defis auxquels vous etes confrontes dans la mise en oeuvre?",
      avatarLineEn:
        "What are the main challenges you face in implementation?",
      expectedUserPhrase:
        "Les principaux defis sont la rapidite du changement technologique, veiller a ce que la regulation soit proportionnee, et maintenir l'equilibre entre securite et innovation.",
      expectedUserPhraseEn:
        "The main challenges are the speed of technological change, ensuring regulation is proportionate, and maintaining the balance between safety and innovation.",
      acceptableVariations: [
        "Le principal defi est l'equilibre entre securite et innovation",
        "Les defis sont l'evolution technologique rapide et la proportionnalite",
        "Nous sommes confrontes au changement technologique rapide et a la proportionnalite",
      ],
      vocabulary: [
        { word: "defis", translation: "challenges", pronunciation: "/de.fi/", partOfSpeech: "noun" },
        { word: "proportionnee", translation: "proportionate", pronunciation: "/pʁɔ.pɔʁ.sjɔ.ne/", partOfSpeech: "adjective" },
        { word: "equilibre", translation: "balance", pronunciation: "/e.ki.libʁ/", partOfSpeech: "noun" },
        { word: "veiller a ce que", translation: "to ensure that", pronunciation: "/vɛ.je a sə kə/", partOfSpeech: "phrase" },
      ],
      grammarNote:
        "'Veiller a ce que' + subjunctive is a formal way to say 'to ensure that': 'veiller a ce que la regulation soit proportionnee' (to ensure regulation is proportionate). 'Soit' is the subjunctive of 'etre'.",
      difficulty: "hard",
    },
    {
      id: 7,
      avatarLine:
        "Cette reunion a ete tres productive. Nous esperons formaliser cette cooperation. Nous vous enverrons une proposition de protocole d'accord.",
      avatarLineEn:
        "This meeting has been very productive. We hope to formalise this cooperation. We'll send you a memorandum of understanding proposal.",
      expectedUserPhrase: "",
      expectedUserPhraseEn: "",
      acceptableVariations: [],
      vocabulary: [
        { word: "productive", translation: "productive", pronunciation: "/pʁɔ.dyk.tiv/", partOfSpeech: "adjective" },
        { word: "protocole d'accord", translation: "memorandum of understanding", pronunciation: "/pʁɔ.tɔ.kɔl da.kɔʁ/", partOfSpeech: "noun" },
        { word: "formaliser", translation: "to formalise", pronunciation: "/fɔʁ.ma.li.ze/", partOfSpeech: "verb" },
      ],
      grammarNote:
        "'Protocole d'accord' is the French equivalent of 'memorandum of understanding' (MOU). In diplomatic French, 'accord' can mean agreement, and 'protocole' carries a sense of formal procedure.",
      difficulty: "medium",
    },
  ],
};
