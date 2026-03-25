import type { Scenario } from "@/lib/types";

export const ofcomIntroScenario: Scenario = {
  id: "ofcom-intro",
  title: "Introducing Ofcom",
  titleEs: "Presentando Ofcom",
  titleLocal: "Presentando Ofcom",
  description:
    "Introduce Ofcom and explain its role as the UK's communications regulator at an international conference.",
  setting: "Reception area at an international telecoms conference in Madrid",
  language: "es",
  turns: [
    {
      id: 1,
      avatarLine:
        "Hola, bienvenido a la conferencia. Soy Maria, delegada de la CNMC. ¿De que organizacion viene usted?",
      avatarLineEn:
        "Hello, welcome to the conference. I'm Maria, a delegate from the CNMC. What organisation are you from?",
      expectedUserPhrase: "Hola, mucho gusto. Trabajo para Ofcom, el regulador de comunicaciones del Reino Unido.",
      expectedUserPhraseEn: "Hello, nice to meet you. I work for Ofcom, the UK's communications regulator.",
      acceptableVariations: [
        "Hola, trabajo para Ofcom",
        "Soy de Ofcom, el regulador del Reino Unido",
        "Mucho gusto, vengo de Ofcom",
        "Trabajo en Ofcom del Reino Unido",
      ],
      vocabulary: [
        { word: "regulador", translation: "regulator", pronunciation: "/re.ɡu.la.ˈðoɾ/", partOfSpeech: "noun" },
        { word: "comunicaciones", translation: "communications", pronunciation: "/ko.mu.ni.ka.ˈθjo.nes/", partOfSpeech: "noun" },
        { word: "Reino Unido", translation: "United Kingdom", pronunciation: "/ˈrei.no u.ˈni.ðo/", partOfSpeech: "proper noun" },
        { word: "mucho gusto", translation: "nice to meet you", pronunciation: "/ˈmu.tʃo ˈɡus.to/", partOfSpeech: "phrase" },
      ],
      grammarNote:
        "'Trabajo para' means 'I work for' (an organisation). Use 'trabajo en' for 'I work in/at' (a place). Both are correct here but 'para' emphasises the organisation.",
      difficulty: "easy",
    },
    {
      id: 2,
      avatarLine:
        "¡Ofcom! He oido hablar de ustedes. ¿Que es exactamente lo que regula Ofcom?",
      avatarLineEn:
        "Ofcom! I've heard of you. What exactly does Ofcom regulate?",
      expectedUserPhrase:
        "Ofcom regula las telecomunicaciones, la radiodifusion, los servicios postales y el espectro radioelectrico.",
      expectedUserPhraseEn:
        "Ofcom regulates telecommunications, broadcasting, postal services and the radio spectrum.",
      acceptableVariations: [
        "Regulamos las telecomunicaciones y la radiodifusion",
        "Ofcom regula telecomunicaciones, radio y television, y servicios postales",
        "Somos el regulador de telecomunicaciones, medios y espectro",
      ],
      vocabulary: [
        { word: "telecomunicaciones", translation: "telecommunications", pronunciation: "/te.le.ko.mu.ni.ka.ˈθjo.nes/", partOfSpeech: "noun" },
        { word: "radiodifusion", translation: "broadcasting", pronunciation: "/ra.ðjo.ði.fu.ˈsjon/", partOfSpeech: "noun" },
        { word: "espectro radioelectrico", translation: "radio spectrum", pronunciation: "/es.ˈpek.tɾo ra.ðjo.e.ˈlek.tɾi.ko/", partOfSpeech: "noun" },
        { word: "servicios postales", translation: "postal services", pronunciation: "/seɾ.ˈβi.θjos pos.ˈta.les/", partOfSpeech: "noun" },
      ],
      grammarNote:
        "In Spanish, definite articles ('las', 'los', 'el') are used before general categories: 'las telecomunicaciones' (telecommunications in general). English often omits these articles.",
      difficulty: "easy",
    },
    {
      id: 3,
      avatarLine:
        "Impresionante. ¿Y tambien regulan internet? He leido que el Reino Unido tiene nuevas leyes de seguridad en linea.",
      avatarLineEn:
        "Impressive. And do you also regulate the internet? I've read that the UK has new online safety laws.",
      expectedUserPhrase:
        "Si, tambien somos responsables de la seguridad en linea bajo la nueva Ley de Seguridad en Linea.",
      expectedUserPhraseEn:
        "Yes, we are also responsible for online safety under the new Online Safety Act.",
      acceptableVariations: [
        "Si, ahora tambien regulamos la seguridad en linea",
        "Correcto, tenemos nuevas responsabilidades de seguridad en internet",
        "Si, la Ley de Seguridad en Linea nos da nuevas funciones",
      ],
      vocabulary: [
        { word: "seguridad en linea", translation: "online safety", pronunciation: "/se.ɣu.ɾi.ˈðað en ˈli.ne.a/", partOfSpeech: "noun" },
        { word: "ley", translation: "law/act", pronunciation: "/lei/", partOfSpeech: "noun" },
        { word: "responsable", translation: "responsible", pronunciation: "/res.pon.ˈsa.ble/", partOfSpeech: "adjective" },
        { word: "bajo", translation: "under (in the context of)", pronunciation: "/ˈba.xo/", partOfSpeech: "preposition" },
      ],
      grammarNote:
        "'Somos responsables de' means 'we are responsible for'. The adjective 'responsable' doesn't change for gender but does for number: 'responsable' (singular) → 'responsables' (plural).",
      difficulty: "easy",
    },
    {
      id: 4,
      avatarLine:
        "Muy interesante. ¿Y Ofcom es independiente del gobierno?",
      avatarLineEn:
        "Very interesting. And is Ofcom independent from the government?",
      expectedUserPhrase:
        "Si, Ofcom es un regulador independiente. Fuimos creados por la Ley de Comunicaciones de dos mil tres.",
      expectedUserPhraseEn:
        "Yes, Ofcom is an independent regulator. We were established by the Communications Act of 2003.",
      acceptableVariations: [
        "Si, somos independientes del gobierno",
        "Si, Ofcom es independiente, establecido por ley en dos mil tres",
        "Somos un organismo regulador independiente",
      ],
      vocabulary: [
        { word: "independiente", translation: "independent", pronunciation: "/in.de.pen.ˈdjen.te/", partOfSpeech: "adjective" },
        { word: "gobierno", translation: "government", pronunciation: "/ɡo.ˈβjeɾ.no/", partOfSpeech: "noun" },
        { word: "fuimos creados", translation: "we were established", pronunciation: "/ˈfwi.mos kɾe.ˈa.ðos/", partOfSpeech: "verb" },
        { word: "organismo regulador", translation: "regulatory body", pronunciation: "/oɾ.ɣa.ˈnis.mo re.ɡu.la.ˈðoɾ/", partOfSpeech: "noun" },
      ],
      grammarNote:
        "'Fuimos creados' is the passive voice in the preterite tense (ser + past participle). In formal/institutional language, passive voice is common: 'fue establecido' (was established), 'fueron aprobados' (were approved).",
      difficulty: "medium",
    },
    {
      id: 5,
      avatarLine:
        "Entiendo. ¿Y que le trae a esta conferencia en particular?",
      avatarLineEn:
        "I see. And what brings you to this particular conference?",
      expectedUserPhrase:
        "Los sectores que regulamos son globales, asi que la colaboracion internacional es muy importante para nosotros.",
      expectedUserPhraseEn:
        "The sectors we regulate are global, so international collaboration is very important to us.",
      acceptableVariations: [
        "Venimos a colaborar con reguladores internacionales",
        "La cooperacion internacional es esencial para nuestro trabajo",
        "Queremos compartir experiencias con otros reguladores",
      ],
      vocabulary: [
        { word: "colaboracion", translation: "collaboration", pronunciation: "/ko.la.βo.ɾa.ˈθjon/", partOfSpeech: "noun" },
        { word: "internacional", translation: "international", pronunciation: "/in.teɾ.na.θjo.ˈnal/", partOfSpeech: "adjective" },
        { word: "sectores", translation: "sectors", pronunciation: "/sek.ˈto.ɾes/", partOfSpeech: "noun" },
        { word: "asi que", translation: "so/therefore", pronunciation: "/a.ˈsi ke/", partOfSpeech: "conjunction" },
      ],
      grammarNote:
        "'Asi que' is a common connector meaning 'so' or 'therefore'. It links a cause with a result: 'Los sectores son globales, asi que la colaboracion es importante' (The sectors are global, so collaboration is important).",
      difficulty: "medium",
    },
    {
      id: 6,
      avatarLine:
        "Completamente de acuerdo. ¿En que area trabaja usted dentro de Ofcom?",
      avatarLineEn:
        "Completely agree. What area do you work in within Ofcom?",
      expectedUserPhrase:
        "Trabajo en el grupo de seguridad en linea. Nos ocupamos de la implementacion de la Ley de Seguridad en Linea.",
      expectedUserPhraseEn:
        "I work in the online safety group. We handle the implementation of the Online Safety Act.",
      acceptableVariations: [
        "Estoy en el equipo de seguridad en linea",
        "Trabajo en seguridad en linea, implementando la nueva ley",
        "Mi area es la seguridad en internet",
        "Trabajo en el area de politica de telecomunicaciones",
      ],
      vocabulary: [
        { word: "grupo", translation: "group/team", pronunciation: "/ˈɡɾu.po/", partOfSpeech: "noun" },
        { word: "implementacion", translation: "implementation", pronunciation: "/im.ple.men.ta.ˈθjon/", partOfSpeech: "noun" },
        { word: "nos ocupamos de", translation: "we handle/deal with", pronunciation: "/nos o.ku.ˈpa.mos de/", partOfSpeech: "verb" },
        { word: "area", translation: "area/department", pronunciation: "/ˈa.ɾe.a/", partOfSpeech: "noun" },
      ],
      grammarNote:
        "'Nos ocupamos de' is a reflexive verb construction meaning 'we deal with' or 'we handle'. The reflexive pronoun changes with the subject: 'me ocupo de' (I handle), 'se ocupa de' (he/she handles).",
      difficulty: "medium",
    },
    {
      id: 7,
      avatarLine:
        "Fantastico. Me encantaria saber mas sobre eso. ¿Le gustaria tomar un cafe y seguir hablando?",
      avatarLineEn:
        "Fantastic. I'd love to know more about that. Would you like to grab a coffee and keep talking?",
      expectedUserPhrase: "",
      expectedUserPhraseEn: "",
      acceptableVariations: [],
      vocabulary: [
        { word: "me encantaria", translation: "I would love to", pronunciation: "/me en.kan.ta.ˈɾi.a/", partOfSpeech: "verb" },
        { word: "tomar un cafe", translation: "to grab a coffee", pronunciation: "/to.ˈmaɾ un ka.ˈfe/", partOfSpeech: "phrase" },
        { word: "seguir hablando", translation: "to keep talking", pronunciation: "/se.ˈɣiɾ a.ˈβlan.do/", partOfSpeech: "verb" },
      ],
      grammarNote:
        "'Me encantaria' is the conditional tense of 'encantar', used for polite wishes. 'Seguir + gerund' means 'to keep/continue doing something': 'seguir hablando' (keep talking), 'seguir trabajando' (keep working).",
      difficulty: "easy",
    },
  ],
};
