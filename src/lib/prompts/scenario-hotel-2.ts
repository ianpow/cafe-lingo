import type { Scenario } from "@/lib/types";

export const hotelScenario2: Scenario = {
  id: "hotel-checkin-2",
  title: "Hotel Check-in — Level 2",
  titleEs: "En el Hotel — Nivel 2",
  description:
    "Settle into your hotel room and handle common requests. Ask about room service, report a problem, and extend your stay.",
  setting: "Hotel Esperanza, Granada — settling in",
  turns: [
    {
      id: 1,
      avatarLine: "Hola! Ya esta instalado en su habitacion? Necesita algo?",
      avatarLineEn: "Hello! Are you settled into your room? Do you need anything?",
      expectedUserPhrase: "Si, gracias. Podria traer toallas extra, por favor?",
      expectedUserPhraseEn: "Yes, thanks. Could you bring extra towels, please?",
      acceptableVariations: [
        "Necesito toallas extra, por favor",
        "Podria traerme mas toallas?",
        "Me puede traer toallas extra?",
        "Quiero mas toallas, por favor",
        "Necesito mas toallas",
      ],
      vocabulary: [
        {
          word: "toallas",
          translation: "towels",
          pronunciation: "/to.a.jas/",
          partOfSpeech: "noun",
        },
        {
          word: "extra",
          translation: "extra",
          pronunciation: "/eks.tra/",
          partOfSpeech: "adjective",
        },
        {
          word: "traer",
          translation: "to bring",
          pronunciation: "/tra.er/",
          partOfSpeech: "verb",
        },
        {
          word: "podria",
          translation: "could you",
          pronunciation: "/po.dri.a/",
          partOfSpeech: "verb",
        },
      ],
      grammarNote:
        "'Podria' is the conditional form of 'poder' (to be able to) and is used for polite requests: 'Podria traer...?' (Could you bring...?). This is more polite than 'Puede traer...?' (Can you bring...?).",
      difficulty: "medium",
    },
    {
      id: 2,
      avatarLine: "Claro, se las llevo enseguida. Algo mas?",
      avatarLineEn: "Of course, I'll bring them right away. Anything else?",
      expectedUserPhrase: "Tienen servicio de habitaciones? Me gustaria ver el menu.",
      expectedUserPhraseEn: "Do you have room service? I'd like to see the menu.",
      acceptableVariations: [
        "Hay servicio de habitaciones?",
        "Tienen room service?",
        "Me puede dar el menu del servicio de habitaciones?",
        "Puedo ver el menu del servicio de habitaciones?",
        "Quiero ver el menu de room service",
      ],
      vocabulary: [
        {
          word: "servicio de habitaciones",
          translation: "room service",
          pronunciation: "/ser.bi.θjo de a.bi.ta.θjo.nes/",
          partOfSpeech: "phrase",
        },
        {
          word: "menu",
          translation: "menu",
          pronunciation: "/me.nu/",
          partOfSpeech: "noun",
        },
        {
          word: "me gustaria",
          translation: "I would like",
          pronunciation: "/me gus.ta.ri.a/",
          partOfSpeech: "phrase",
        },
        {
          word: "ver",
          translation: "to see",
          pronunciation: "/ber/",
          partOfSpeech: "verb",
        },
      ],
      grammarNote:
        "'Me gustaria' (I would like) is the conditional of 'gustar' and is very polite. 'Servicio de habitaciones' is literally 'service of rooms'. You can also say 'room service' — many hotels in Spain understand the English term.",
      difficulty: "medium",
    },
    {
      id: 3,
      avatarLine: "Si, aqui tiene el menu. Lo puede pedir por telefono. Algo mas?",
      avatarLineEn: "Yes, here's the menu. You can order by phone. Anything else?",
      expectedUserPhrase: "Si, el aire acondicionado no funciona en mi habitacion.",
      expectedUserPhraseEn: "Yes, the air conditioning isn't working in my room.",
      acceptableVariations: [
        "El aire acondicionado no funciona",
        "No funciona el aire acondicionado",
        "Hay un problema con el aire acondicionado",
        "El aire no funciona en mi habitacion",
        "Tengo un problema, el aire acondicionado no va",
      ],
      vocabulary: [
        {
          word: "aire acondicionado",
          translation: "air conditioning",
          pronunciation: "/ai.re a.kon.di.θjo.na.do/",
          partOfSpeech: "noun",
        },
        {
          word: "no funciona",
          translation: "it doesn't work",
          pronunciation: "/no fun.θjo.na/",
          partOfSpeech: "phrase",
        },
        {
          word: "problema",
          translation: "problem",
          pronunciation: "/pro.ble.ma/",
          partOfSpeech: "noun",
        },
        {
          word: "mi",
          translation: "my",
          pronunciation: "/mi/",
          partOfSpeech: "possessive",
        },
      ],
      grammarNote:
        "'No funciona' (it doesn't work) is essential for reporting problems. Note that 'problema' is masculine despite ending in -a: 'un problema', not 'una problema'. This is a common exception.",
      difficulty: "medium",
    },
    {
      id: 4,
      avatarLine: "Lo siento mucho. Puedo ofrecerle otra habitacion. Le parece bien?",
      avatarLineEn: "I'm very sorry. I can offer you another room. Does that sound good?",
      expectedUserPhrase: "Si, me gustaria cambiar de habitacion, por favor.",
      expectedUserPhraseEn: "Yes, I'd like to change rooms, please.",
      acceptableVariations: [
        "Si, perfecto",
        "Si, me gustaria otra habitacion",
        "Si, quiero cambiar de habitacion",
        "Si, por favor, otra habitacion",
        "Claro, me parece bien",
      ],
      vocabulary: [
        {
          word: "cambiar",
          translation: "to change",
          pronunciation: "/kam.bjar/",
          partOfSpeech: "verb",
        },
        {
          word: "otra",
          translation: "another",
          pronunciation: "/o.tra/",
          partOfSpeech: "adjective",
        },
        {
          word: "ofrecerle",
          translation: "to offer you",
          pronunciation: "/o.fre.θer.le/",
          partOfSpeech: "verb",
        },
        {
          word: "le parece bien",
          translation: "does that sound good to you",
          pronunciation: "/le pa.re.θe bjen/",
          partOfSpeech: "phrase",
        },
      ],
      grammarNote:
        "'Cambiar de habitacion' uses 'de' to indicate what you're changing. 'Le parece bien?' is a polite way to ask if something is acceptable. You can reply 'Me parece bien' (That sounds good to me).",
      difficulty: "medium",
    },
    {
      id: 5,
      avatarLine: "Perfecto, la nueva habitacion es la 305. Desea pedir algo del servicio de habitaciones?",
      avatarLineEn: "Perfect, the new room is 305. Would you like to order something from room service?",
      expectedUserPhrase: "Si, quiero pedir el desayuno para manana a las ocho.",
      expectedUserPhraseEn: "Yes, I'd like to order breakfast for tomorrow at eight.",
      acceptableVariations: [
        "Si, me gustaria desayuno a las ocho",
        "Quiero desayuno manana a las ocho, por favor",
        "Si, desayuno para manana por la manana",
        "Puedo pedir desayuno para las ocho?",
        "Si, el desayuno a las ocho, por favor",
      ],
      vocabulary: [
        {
          word: "pedir",
          translation: "to order/to ask for",
          pronunciation: "/pe.dir/",
          partOfSpeech: "verb",
        },
        {
          word: "manana",
          translation: "tomorrow",
          pronunciation: "/ma.ɲa.na/",
          partOfSpeech: "adverb",
        },
        {
          word: "ocho",
          translation: "eight",
          pronunciation: "/o.tSo/",
          partOfSpeech: "number",
        },
        {
          word: "a las",
          translation: "at (time)",
          pronunciation: "/a las/",
          partOfSpeech: "phrase",
        },
      ],
      grammarNote:
        "'A las ocho' means 'at eight o'clock'. Use 'a la' for one o'clock ('a la una') and 'a las' for all other hours. 'Pedir' means to order (food) or to ask for something — don't confuse it with 'preguntar' (to ask a question).",
      difficulty: "medium",
    },
    {
      id: 6,
      avatarLine: "Muy bien, desayuno a las ocho en la habitacion 305. Su estancia es hasta el jueves, verdad?",
      avatarLineEn: "Very well, breakfast at eight in room 305. Your stay is until Thursday, right?",
      expectedUserPhrase: "A que hora es la salida? Quiero quedarme una noche mas.",
      expectedUserPhraseEn: "What time is checkout? I'd like to stay one more night.",
      acceptableVariations: [
        "A que hora hay que dejar la habitacion?",
        "Puedo quedarme una noche mas?",
        "Quiero extender mi estancia una noche mas",
        "Es posible quedarme una noche mas?",
        "Me gustaria quedarme hasta el viernes",
      ],
      vocabulary: [
        {
          word: "salida",
          translation: "checkout/departure",
          pronunciation: "/sa.li.da/",
          partOfSpeech: "noun",
        },
        {
          word: "quedarme",
          translation: "to stay (myself)",
          pronunciation: "/ke.dar.me/",
          partOfSpeech: "verb",
        },
        {
          word: "noche",
          translation: "night",
          pronunciation: "/no.tSe/",
          partOfSpeech: "noun",
        },
        {
          word: "mas",
          translation: "more",
          pronunciation: "/mas/",
          partOfSpeech: "adverb",
        },
      ],
      grammarNote:
        "'Quedarse' is a reflexive verb meaning 'to stay'. The pronoun changes with the subject: 'me quedo' (I stay), 'se queda' (he/she stays). 'La hora de salida' or simply 'la salida' means checkout time.",
      difficulty: "hard",
    },
    {
      id: 7,
      avatarLine: "Claro, no hay problema! Su estancia se extiende hasta el viernes. La salida es a las doce del mediodia. Que disfrute su estancia!",
      avatarLineEn: "Of course, no problem! Your stay is extended until Friday. Checkout is at noon. Enjoy your stay!",
      expectedUserPhrase: "",
      expectedUserPhraseEn: "",
      acceptableVariations: [],
      vocabulary: [
        {
          word: "estancia",
          translation: "stay",
          pronunciation: "/es.tan.θja/",
          partOfSpeech: "noun",
        },
        {
          word: "se extiende",
          translation: "is extended",
          pronunciation: "/se eks.tjen.de/",
          partOfSpeech: "verb",
        },
        {
          word: "mediodia",
          translation: "noon/midday",
          pronunciation: "/me.djo.di.a/",
          partOfSpeech: "noun",
        },
        {
          word: "que disfrute",
          translation: "enjoy (formal wish)",
          pronunciation: "/ke dis.fru.te/",
          partOfSpeech: "phrase",
        },
      ],
      grammarNote:
        "'Que disfrute su estancia' uses the subjunctive to express a wish, like 'Que descanse bien'. 'Mediodia' literally means 'mid-day' and is used for noon. 'Doce del mediodia' specifies twelve noon (as opposed to midnight).",
      difficulty: "easy",
    },
  ],
};
