import type { Scenario } from "@/lib/types";

export const hotelScenario3: Scenario = {
  id: "hotel-checkin-3",
  title: "Hotel Check-in — Level 3",
  titleEs: "En el Hotel — Nivel 3",
  description:
    "Check out like a pro! Handle the bill, arrange transport, and leave a review.",
  setting: "Hotel Esperanza, Granada — checking out",
  turns: [
    {
      id: 1,
      avatarLine: "Buenos dias! Viene a hacer el check-out? Le preparo la cuenta.",
      avatarLineEn: "Good morning! Are you here to check out? I'll prepare your bill.",
      expectedUserPhrase: "Si, buenos dias. Puedo ver la cuenta, por favor?",
      expectedUserPhraseEn: "Yes, good morning. Can I see the bill, please?",
      acceptableVariations: [
        "Si, quiero hacer el check-out",
        "Buenos dias, me gustaria la cuenta",
        "Si, la cuenta por favor",
        "Buenos dias, quiero ver la cuenta",
        "Si, me puede dar la cuenta?",
      ],
      vocabulary: [
        {
          word: "cuenta",
          translation: "bill/account",
          pronunciation: "/kwen.ta/",
          partOfSpeech: "noun",
        },
        {
          word: "check-out",
          translation: "check-out",
          pronunciation: "/tSek.aut/",
          partOfSpeech: "noun",
        },
        {
          word: "preparar",
          translation: "to prepare",
          pronunciation: "/pre.pa.rar/",
          partOfSpeech: "verb",
        },
        {
          word: "puedo",
          translation: "can I",
          pronunciation: "/pwe.do/",
          partOfSpeech: "verb",
        },
      ],
      grammarNote:
        "'La cuenta' is used for the bill at hotels and restaurants. 'Puedo ver...?' (Can I see...?) is a direct way to ask. For more politeness, use 'Podria ver...?' (Could I see...?).",
      difficulty: "easy",
    },
    {
      id: 2,
      avatarLine: "Aqui tiene. El total es doscientos cuarenta euros, incluyendo el minibar y el servicio de habitaciones.",
      avatarLineEn: "Here you go. The total is two hundred and forty euros, including the minibar and room service.",
      expectedUserPhrase: "Perdon, que es este cargo del minibar? No lo he usado.",
      expectedUserPhraseEn: "Excuse me, what is this minibar charge? I didn't use it.",
      acceptableVariations: [
        "No he usado el minibar",
        "Creo que hay un error, no use el minibar",
        "Este cargo del minibar no es mio",
        "Perdone, no he utilizado el minibar",
        "Hay un error en la cuenta, no use el minibar",
      ],
      vocabulary: [
        {
          word: "cargo",
          translation: "charge",
          pronunciation: "/kar.go/",
          partOfSpeech: "noun",
        },
        {
          word: "minibar",
          translation: "minibar",
          pronunciation: "/mi.ni.bar/",
          partOfSpeech: "noun",
        },
        {
          word: "no he usado",
          translation: "I haven't used",
          pronunciation: "/no e u.sa.do/",
          partOfSpeech: "phrase",
        },
        {
          word: "perdon",
          translation: "excuse me/sorry",
          pronunciation: "/per.don/",
          partOfSpeech: "interjection",
        },
      ],
      grammarNote:
        "'No lo he usado' uses the present perfect tense (haber + past participle). 'Lo' refers to the minibar. The present perfect in Spanish is formed with 'he/has/ha' + past participle: 'he usado' (I have used), 'he comido' (I have eaten).",
      difficulty: "hard",
    },
    {
      id: 3,
      avatarLine: "Disculpe, tiene razon. Quito ese cargo. El nuevo total es doscientos diez euros. Como desea pagar?",
      avatarLineEn: "I'm sorry, you're right. I'll remove that charge. The new total is two hundred and ten euros. How would you like to pay?",
      expectedUserPhrase: "Con tarjeta, por favor. Pueden pedir un taxi al aeropuerto?",
      expectedUserPhraseEn: "By card, please. Can you call a taxi to the airport?",
      acceptableVariations: [
        "Pago con tarjeta. Me pueden pedir un taxi?",
        "Con tarjeta. Necesito un taxi al aeropuerto",
        "Tarjeta, por favor. Pueden llamar un taxi?",
        "Con tarjeta de credito. Me puede pedir un taxi al aeropuerto?",
        "Con tarjeta. Podrian pedirme un taxi al aeropuerto?",
      ],
      vocabulary: [
        {
          word: "tarjeta",
          translation: "card",
          pronunciation: "/tar.xe.ta/",
          partOfSpeech: "noun",
        },
        {
          word: "taxi",
          translation: "taxi",
          pronunciation: "/tak.si/",
          partOfSpeech: "noun",
        },
        {
          word: "aeropuerto",
          translation: "airport",
          pronunciation: "/a.e.ro.pwer.to/",
          partOfSpeech: "noun",
        },
        {
          word: "pedir",
          translation: "to call/to request",
          pronunciation: "/pe.dir/",
          partOfSpeech: "verb",
        },
      ],
      grammarNote:
        "'Con tarjeta' (by card) and 'en efectivo' (in cash) are the two main payment methods. 'Pedir un taxi' means to call/request a taxi. You can also say 'llamar un taxi' (to call a taxi).",
      difficulty: "medium",
    },
    {
      id: 4,
      avatarLine: "Por supuesto, le pido un taxi. A que hora sale su vuelo?",
      avatarLineEn: "Of course, I'll call you a taxi. What time does your flight leave?",
      expectedUserPhrase: "A las tres. Puedo dejar las maletas aqui hasta que llegue el taxi?",
      expectedUserPhraseEn: "At three. Can I leave my luggage here until the taxi arrives?",
      acceptableVariations: [
        "A las tres. Puedo dejar mi equipaje aqui?",
        "Mi vuelo es a las tres. Hay consigna de equipaje?",
        "A las tres. Pueden guardar mis maletas?",
        "El vuelo sale a las tres. Puedo dejar las maletas?",
        "A las tres. Donde puedo dejar las maletas?",
      ],
      vocabulary: [
        {
          word: "maletas",
          translation: "suitcases/luggage",
          pronunciation: "/ma.le.tas/",
          partOfSpeech: "noun",
        },
        {
          word: "dejar",
          translation: "to leave (behind)",
          pronunciation: "/de.xar/",
          partOfSpeech: "verb",
        },
        {
          word: "vuelo",
          translation: "flight",
          pronunciation: "/bwe.lo/",
          partOfSpeech: "noun",
        },
        {
          word: "hasta que",
          translation: "until",
          pronunciation: "/as.ta ke/",
          partOfSpeech: "conjunction",
        },
      ],
      grammarNote:
        "'Dejar' means to leave something behind: 'dejar las maletas' (to leave the luggage). 'Hasta que' (until) triggers the subjunctive: 'hasta que llegue el taxi' (until the taxi arrives). 'Equipaje' is a synonym for luggage.",
      difficulty: "hard",
    },
    {
      id: 5,
      avatarLine: "Claro, puede dejarlas en recepcion. Le guardamos las maletas. Necesita un recibo?",
      avatarLineEn: "Sure, you can leave them at reception. We'll keep your luggage. Do you need a receipt?",
      expectedUserPhrase: "Si, necesito un recibo por favor. Es para el trabajo.",
      expectedUserPhraseEn: "Yes, I need a receipt please. It's for work.",
      acceptableVariations: [
        "Si, un recibo por favor",
        "Si, me puede dar un recibo?",
        "Si, necesito el recibo para mi empresa",
        "Si, por favor, con factura",
        "Si, me da un recibo?",
      ],
      vocabulary: [
        {
          word: "recibo",
          translation: "receipt",
          pronunciation: "/re.θi.bo/",
          partOfSpeech: "noun",
        },
        {
          word: "trabajo",
          translation: "work/job",
          pronunciation: "/tra.ba.xo/",
          partOfSpeech: "noun",
        },
        {
          word: "recepcion",
          translation: "reception/front desk",
          pronunciation: "/re.θep.θjon/",
          partOfSpeech: "noun",
        },
        {
          word: "guardar",
          translation: "to keep/to store",
          pronunciation: "/gwar.dar/",
          partOfSpeech: "verb",
        },
      ],
      grammarNote:
        "'Recibo' is a simple receipt. For a formal invoice (for business expenses), ask for a 'factura'. 'Es para el trabajo' (It's for work) explains why you need it. 'Para' indicates purpose here.",
      difficulty: "medium",
    },
    {
      id: 6,
      avatarLine: "Aqui tiene su recibo. Ha disfrutado de su estancia en Granada?",
      avatarLineEn: "Here's your receipt. Did you enjoy your stay in Granada?",
      expectedUserPhrase: "Si, mucho! El hotel es muy bonito y el personal es muy amable.",
      expectedUserPhraseEn: "Yes, very much! The hotel is very nice and the staff is very kind.",
      acceptableVariations: [
        "Si, mucho, me ha encantado",
        "Si, todo ha sido perfecto",
        "Si, me ha gustado mucho el hotel",
        "Si, la estancia ha sido estupenda",
        "Si, ha sido una estancia muy agradable",
      ],
      vocabulary: [
        {
          word: "bonito",
          translation: "nice/pretty",
          pronunciation: "/bo.ni.to/",
          partOfSpeech: "adjective",
        },
        {
          word: "personal",
          translation: "staff",
          pronunciation: "/per.so.nal/",
          partOfSpeech: "noun",
        },
        {
          word: "amable",
          translation: "kind/friendly",
          pronunciation: "/a.ma.ble/",
          partOfSpeech: "adjective",
        },
        {
          word: "disfrutar",
          translation: "to enjoy",
          pronunciation: "/dis.fru.tar/",
          partOfSpeech: "verb",
        },
      ],
      grammarNote:
        "'Muy' (very) goes before adjectives: 'muy bonito', 'muy amable'. To give positive feedback, useful phrases include 'Me ha encantado' (I loved it) and 'Todo ha sido perfecto' (Everything was perfect). 'Personal' as a noun means staff.",
      difficulty: "medium",
    },
    {
      id: 7,
      avatarLine: "Muchas gracias, eso nos alegra mucho! Esperamos verle de nuevo. Buen viaje!",
      avatarLineEn: "Thank you so much, that makes us very happy! We hope to see you again. Have a good trip!",
      expectedUserPhrase: "Gracias por todo. Ha sido una estancia maravillosa. Hasta pronto!",
      expectedUserPhraseEn: "Thanks for everything. It's been a wonderful stay. See you soon!",
      acceptableVariations: [
        "Muchas gracias por todo, hasta pronto!",
        "Gracias, hasta la proxima!",
        "Ha sido un placer, hasta pronto!",
        "Muchas gracias, adios!",
        "Gracias por todo, buen dia!",
      ],
      vocabulary: [
        {
          word: "maravillosa",
          translation: "wonderful",
          pronunciation: "/ma.ra.bi.jo.sa/",
          partOfSpeech: "adjective",
        },
        {
          word: "hasta pronto",
          translation: "see you soon",
          pronunciation: "/as.ta pron.to/",
          partOfSpeech: "phrase",
        },
        {
          word: "buen viaje",
          translation: "have a good trip",
          pronunciation: "/bwen bja.xe/",
          partOfSpeech: "phrase",
        },
        {
          word: "por todo",
          translation: "for everything",
          pronunciation: "/por to.do/",
          partOfSpeech: "phrase",
        },
      ],
      grammarNote:
        "'Hasta pronto' (see you soon) is warmer than 'adios'. Other warm farewells: 'Hasta la proxima' (until next time), 'Ha sido un placer' (It's been a pleasure). 'Buen viaje' drops the 'o' from 'bueno' before a masculine noun.",
      difficulty: "easy",
    },
  ],
};
