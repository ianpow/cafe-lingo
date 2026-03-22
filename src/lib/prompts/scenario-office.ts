import type { Scenario } from "@/lib/types";

export const officeScenario: Scenario = {
  id: "office-workplace",
  title: "Your First Day at Work",
  titleEs: "Tu Primer Dia de Trabajo",
  description:
    "Navigate your first day at a Spanish office. Practice introductions, asking about the workspace, and basic office conversations.",
  setting: "Oficina de Empresa Torres, a modern office in Madrid",
  turns: [
    {
      id: 1,
      avatarLine: "Buenos dias! Tu eres el nuevo empleado? Bienvenido!",
      avatarLineEn: "Good morning! You are the new employee? Welcome!",
      expectedUserPhrase: "Buenos dias! Si, soy nuevo. Mucho gusto.",
      expectedUserPhraseEn: "Good morning! Yes, I am new. Nice to meet you.",
      acceptableVariations: [
        "Buenos dias, si soy nuevo",
        "Buenos dias, mucho gusto",
        "Si, soy el nuevo empleado",
        "Hola, si soy nuevo. Mucho gusto",
        "Buenos dias, soy nuevo",
      ],
      vocabulary: [
        {
          word: "buenos dias",
          translation: "good morning",
          pronunciation: "/bwe.nos di.as/",
          partOfSpeech: "phrase",
        },
        {
          word: "empleado",
          translation: "employee",
          pronunciation: "/em.ple.a.do/",
          partOfSpeech: "noun",
        },
        {
          word: "nuevo",
          translation: "new",
          pronunciation: "/nwe.bo/",
          partOfSpeech: "adjective",
        },
        {
          word: "mucho gusto",
          translation: "nice to meet you",
          pronunciation: "/mu.tSo gus.to/",
          partOfSpeech: "phrase",
        },
      ],
      grammarNote:
        "'Soy' is the first person form of 'ser' (to be) used for identity and characteristics: 'Soy nuevo' (I am new), 'Soy Carlos' (I am Carlos).",
      difficulty: "easy",
    },
    {
      id: 2,
      avatarLine: "Mucho gusto! Me llamo Carlos. Y tu, como te llamas?",
      avatarLineEn: "Nice to meet you! My name is Carlos. And you, what is your name?",
      expectedUserPhrase: "Me llamo [name]. Encantado.",
      expectedUserPhraseEn: "My name is [name]. Pleased to meet you.",
      acceptableVariations: [
        "Me llamo [name]",
        "Soy [name]. Encantado",
        "Soy [name], mucho gusto",
        "Me llamo [name]. Mucho gusto",
        "Encantado, me llamo [name]",
      ],
      vocabulary: [
        {
          word: "me llamo",
          translation: "my name is",
          pronunciation: "/me ja.mo/",
          partOfSpeech: "phrase",
        },
        {
          word: "encantado",
          translation: "pleased to meet you",
          pronunciation: "/en.kan.ta.do/",
          partOfSpeech: "adjective",
        },
        {
          word: "como te llamas",
          translation: "what is your name",
          pronunciation: "/ko.mo te ja.mas/",
          partOfSpeech: "phrase",
        },
        {
          word: "y tu",
          translation: "and you",
          pronunciation: "/i tu/",
          partOfSpeech: "phrase",
        },
      ],
      grammarNote:
        "'Encantado' is said by men, 'encantada' by women. It literally means 'enchanted' and is a common way to say 'pleased to meet you' in formal introductions.",
      difficulty: "easy",
    },
    {
      id: 3,
      avatarLine: "Tu escritorio esta por aqui. Necesitas algo?",
      avatarLineEn: "Your desk is over here. Do you need anything?",
      expectedUserPhrase: "Donde esta el bano, por favor?",
      expectedUserPhraseEn: "Where is the bathroom, please?",
      acceptableVariations: [
        "Donde esta el bano",
        "Donde esta el bano por favor",
        "Podrias decirme donde esta el bano",
        "Disculpa, donde esta el bano",
        "El bano, por favor",
      ],
      vocabulary: [
        {
          word: "escritorio",
          translation: "desk",
          pronunciation: "/es.kri.to.rjo/",
          partOfSpeech: "noun",
        },
        {
          word: "bano",
          translation: "bathroom",
          pronunciation: "/ba.njo/",
          partOfSpeech: "noun",
        },
        {
          word: "donde esta",
          translation: "where is",
          pronunciation: "/don.de es.ta/",
          partOfSpeech: "phrase",
        },
        {
          word: "necesitas",
          translation: "do you need",
          pronunciation: "/ne.θe.si.tas/",
          partOfSpeech: "verb",
        },
      ],
      grammarNote:
        "'Donde esta...?' (Where is...?) is an essential question pattern. Use 'el' before masculine nouns (el bano) and 'la' before feminine nouns (la cocina).",
      difficulty: "easy",
    },
    {
      id: 4,
      avatarLine: "El bano esta al final del pasillo, a la izquierda.",
      avatarLineEn: "The bathroom is at the end of the hallway, on the left.",
      expectedUserPhrase: "Gracias. Y donde puedo tomar cafe?",
      expectedUserPhraseEn: "Thanks. And where can I have coffee?",
      acceptableVariations: [
        "Gracias, donde puedo tomar cafe",
        "Y donde puedo tomar un cafe",
        "Gracias. Donde hay cafe",
        "Gracias. Hay cafe por aqui",
        "Donde esta el cafe",
      ],
      vocabulary: [
        {
          word: "pasillo",
          translation: "hallway",
          pronunciation: "/pa.si.jo/",
          partOfSpeech: "noun",
        },
        {
          word: "izquierda",
          translation: "left",
          pronunciation: "/iθ.kjer.da/",
          partOfSpeech: "noun",
        },
        {
          word: "al final",
          translation: "at the end",
          pronunciation: "/al fi.nal/",
          partOfSpeech: "phrase",
        },
        {
          word: "puedo",
          translation: "I can",
          pronunciation: "/pwe.do/",
          partOfSpeech: "verb",
        },
      ],
      grammarNote:
        "'Puedo' + infinitive verb expresses ability or permission: 'Puedo tomar' (I can have), 'Puedo ir' (I can go). Directions use 'a la' for feminine: 'a la izquierda' (on the left), 'a la derecha' (on the right).",
      difficulty: "medium",
    },
    {
      id: 5,
      avatarLine: "La cocina esta al lado. Tenemos cafe y te.",
      avatarLineEn: "The kitchen is next door. We have coffee and tea.",
      expectedUserPhrase: "Perfecto. A que hora es la reunion?",
      expectedUserPhraseEn: "Perfect. What time is the meeting?",
      acceptableVariations: [
        "A que hora es la reunion",
        "Perfecto, a que hora es la reunion",
        "Gracias. A que hora es la reunion",
        "Cuando es la reunion",
        "Y la reunion, a que hora es",
      ],
      vocabulary: [
        {
          word: "cocina",
          translation: "kitchen",
          pronunciation: "/ko.θi.na/",
          partOfSpeech: "noun",
        },
        {
          word: "al lado",
          translation: "next door/beside",
          pronunciation: "/al la.do/",
          partOfSpeech: "phrase",
        },
        {
          word: "reunion",
          translation: "meeting",
          pronunciation: "/re.u.njon/",
          partOfSpeech: "noun",
        },
        {
          word: "a que hora",
          translation: "at what time",
          pronunciation: "/a ke o.ra/",
          partOfSpeech: "phrase",
        },
      ],
      grammarNote:
        "'A que hora es...?' (At what time is...?) is used to ask about scheduled events. The answer uses 'a las' + time: 'A las diez' (At ten o'clock).",
      difficulty: "medium",
    },
    {
      id: 6,
      avatarLine: "La reunion es a las diez. En la sala de conferencias.",
      avatarLineEn: "The meeting is at ten. In the conference room.",
      expectedUserPhrase: "A las diez. Donde esta la sala?",
      expectedUserPhraseEn: "At ten. Where is the room?",
      acceptableVariations: [
        "Donde esta la sala de conferencias",
        "A las diez, y donde esta la sala",
        "Donde esta la sala",
        "Y donde es la sala de conferencias",
        "Bien. Donde esta la sala de conferencias",
      ],
      vocabulary: [
        {
          word: "sala de conferencias",
          translation: "conference room",
          pronunciation: "/sa.la de kon.fe.ren.θjas/",
          partOfSpeech: "noun",
        },
        {
          word: "diez",
          translation: "ten",
          pronunciation: "/djeθ/",
          partOfSpeech: "number",
        },
        {
          word: "a las",
          translation: "at (time)",
          pronunciation: "/a las/",
          partOfSpeech: "preposition",
        },
        {
          word: "sala",
          translation: "room/hall",
          pronunciation: "/sa.la/",
          partOfSpeech: "noun",
        },
      ],
      grammarNote:
        "For telling time, use 'a la' for one o'clock ('a la una') and 'a las' for all other hours ('a las diez', 'a las tres'). 'Sala de conferencias' is a compound noun — 'de' links the two parts.",
      difficulty: "medium",
    },
    {
      id: 7,
      avatarLine: "Esta en el segundo piso. Yo te acompano. Vamos!",
      avatarLineEn: "It's on the second floor. I'll go with you. Let's go!",
      expectedUserPhrase: "",
      expectedUserPhraseEn: "",
      acceptableVariations: [],
      vocabulary: [
        {
          word: "piso",
          translation: "floor/story",
          pronunciation: "/pi.so/",
          partOfSpeech: "noun",
        },
        {
          word: "segundo",
          translation: "second",
          pronunciation: "/se.gun.do/",
          partOfSpeech: "adjective",
        },
        {
          word: "acompano",
          translation: "I accompany/I'll go with you",
          pronunciation: "/a.kom.pa.njo/",
          partOfSpeech: "verb",
        },
        {
          word: "vamos",
          translation: "let's go",
          pronunciation: "/ba.mos/",
          partOfSpeech: "verb",
        },
      ],
      grammarNote:
        "'Vamos' means 'let's go' and comes from the verb 'ir' (to go). Ordinal numbers agree with the noun's gender: 'segundo piso' (second floor, masculine), 'segunda planta' (second floor, feminine).",
      difficulty: "easy",
    },
  ],
};
