import type { Scenario } from "@/lib/types";

export const hotelScenario: Scenario = {
  id: "hotel-checkin",
  title: "Hotel Check-in",
  titleEs: "En el Hotel",
  description:
    "Check into a hotel in Spain. Practice booking a room, asking about amenities, and making requests.",
  setting: "Hotel Esperanza, a comfortable hotel in Granada",
  turns: [
    {
      id: 1,
      avatarLine: "Buenas noches! Bienvenido al Hotel Esperanza. Tiene reserva?",
      avatarLineEn: "Good evening! Welcome to Hotel Esperanza. Do you have a reservation?",
      expectedUserPhrase: "Buenas noches. Si, tengo una reserva.",
      expectedUserPhraseEn: "Good evening. Yes, I have a reservation.",
      acceptableVariations: [
        "Buenas noches, si tengo una reserva",
        "Si, tengo una reserva",
        "Tengo una reserva",
        "Buenas noches, tengo reserva",
      ],
      vocabulary: [
        {
          word: "buenas noches",
          translation: "good evening/good night",
          pronunciation: "/bwe.nas no.tSes/",
          partOfSpeech: "phrase",
        },
        {
          word: "bienvenido",
          translation: "welcome",
          pronunciation: "/bjen.be.ni.do/",
          partOfSpeech: "adjective",
        },
        {
          word: "reserva",
          translation: "reservation",
          pronunciation: "/re.ser.ba/",
          partOfSpeech: "noun",
        },
        {
          word: "tengo",
          translation: "I have",
          pronunciation: "/ten.go/",
          partOfSpeech: "verb",
        },
      ],
      grammarNote:
        "'Tener' (to have) is irregular: 'tengo' (I have), 'tiene' (you have/he has). 'Tiene reserva?' is a common way to ask 'Do you have a reservation?'",
      difficulty: "easy",
    },
    {
      id: 2,
      avatarLine: "A que nombre?",
      avatarLineEn: "Under what name?",
      expectedUserPhrase: "A nombre de Smith, por favor.",
      expectedUserPhraseEn: "Under the name Smith, please.",
      acceptableVariations: [
        "A nombre de Smith",
        "Smith, por favor",
        "Smith",
        "La reserva esta a nombre de Smith",
      ],
      vocabulary: [
        {
          word: "nombre",
          translation: "name",
          pronunciation: "/nom.bre/",
          partOfSpeech: "noun",
        },
        {
          word: "a nombre de",
          translation: "under the name of",
          pronunciation: "/a nom.bre de/",
          partOfSpeech: "phrase",
        },
        {
          word: "por favor",
          translation: "please",
          pronunciation: "/por fa.bor/",
          partOfSpeech: "phrase",
        },
        {
          word: "esta",
          translation: "is (located)",
          pronunciation: "/es.ta/",
          partOfSpeech: "verb",
        },
      ],
      grammarNote:
        "'A nombre de' is a fixed phrase meaning 'under the name of'. In hotels and restaurants, you'll hear 'A que nombre?' to ask whose name the reservation is under.",
      difficulty: "easy",
    },
    {
      id: 3,
      avatarLine: "Perfecto. Una habitacion doble por dos noches?",
      avatarLineEn: "Perfect. A double room for two nights?",
      expectedUserPhrase: "Si, dos noches, por favor.",
      expectedUserPhraseEn: "Yes, two nights, please.",
      acceptableVariations: [
        "Si, dos noches",
        "Si, correcto",
        "Exacto, dos noches",
        "Si, por favor",
        "Si, dos noches por favor",
      ],
      vocabulary: [
        {
          word: "habitacion",
          translation: "room",
          pronunciation: "/a.bi.ta.θjon/",
          partOfSpeech: "noun",
        },
        {
          word: "doble",
          translation: "double",
          pronunciation: "/do.ble/",
          partOfSpeech: "adjective",
        },
        {
          word: "noches",
          translation: "nights",
          pronunciation: "/no.tSes/",
          partOfSpeech: "noun",
        },
        {
          word: "dos",
          translation: "two",
          pronunciation: "/dos/",
          partOfSpeech: "number",
        },
      ],
      grammarNote:
        "'Por' is used here to mean 'for' a duration of time: 'por dos noches' (for two nights). Room types include 'individual' (single), 'doble' (double), and 'suite'.",
      difficulty: "easy",
    },
    {
      id: 4,
      avatarLine: "La habitacion tiene vista al jardin. Necesita algo mas?",
      avatarLineEn: "The room has a view of the garden. Do you need anything else?",
      expectedUserPhrase: "Tiene wifi?",
      expectedUserPhraseEn: "Do you have wifi?",
      acceptableVariations: [
        "Hay wifi?",
        "Tiene wifi en el hotel?",
        "El hotel tiene wifi?",
        "Tienen wifi?",
      ],
      vocabulary: [
        {
          word: "vista",
          translation: "view",
          pronunciation: "/bis.ta/",
          partOfSpeech: "noun",
        },
        {
          word: "jardin",
          translation: "garden",
          pronunciation: "/xar.din/",
          partOfSpeech: "noun",
        },
        {
          word: "necesita",
          translation: "do you need",
          pronunciation: "/ne.θe.si.ta/",
          partOfSpeech: "verb",
        },
        {
          word: "algo mas",
          translation: "anything else",
          pronunciation: "/al.go mas/",
          partOfSpeech: "phrase",
        },
      ],
      grammarNote:
        "To ask if something is available, use 'Tiene...?' (Do you have...?) or 'Hay...?' (Is there...?). Both are useful at hotels: 'Tiene piscina?' (Do you have a pool?).",
      difficulty: "medium",
    },
    {
      id: 5,
      avatarLine: "Si, el wifi es gratis. La clave esta en la habitacion.",
      avatarLineEn: "Yes, the wifi is free. The password is in the room.",
      expectedUserPhrase: "Perfecto, gracias.",
      expectedUserPhraseEn: "Perfect, thanks.",
      acceptableVariations: [
        "Perfecto",
        "Muy bien, gracias",
        "Genial, gracias",
        "Gracias",
        "Estupendo, gracias",
      ],
      vocabulary: [
        {
          word: "gratis",
          translation: "free (no cost)",
          pronunciation: "/gra.tis/",
          partOfSpeech: "adjective",
        },
        {
          word: "clave",
          translation: "password/key",
          pronunciation: "/kla.be/",
          partOfSpeech: "noun",
        },
        {
          word: "en",
          translation: "in/at",
          pronunciation: "/en/",
          partOfSpeech: "preposition",
        },
        {
          word: "perfecto",
          translation: "perfect",
          pronunciation: "/per.fek.to/",
          partOfSpeech: "adjective",
        },
      ],
      grammarNote:
        "'Gratis' is invariable — it doesn't change for gender or number: 'el wifi es gratis', 'las toallas son gratis'. 'Clave' can mean password or key (code).",
      difficulty: "easy",
    },
    {
      id: 6,
      avatarLine: "El desayuno es de siete a diez. Aqui tiene su llave.",
      avatarLineEn: "Breakfast is from seven to ten. Here is your key.",
      expectedUserPhrase: "A que hora es el desayuno?",
      expectedUserPhraseEn: "What time is breakfast?",
      acceptableVariations: [
        "Gracias por la llave",
        "Gracias",
        "Muchas gracias",
        "A que hora es el desayuno exactamente?",
        "De siete a diez, perfecto",
      ],
      vocabulary: [
        {
          word: "desayuno",
          translation: "breakfast",
          pronunciation: "/de.sa.ju.no/",
          partOfSpeech: "noun",
        },
        {
          word: "llave",
          translation: "key",
          pronunciation: "/ja.be/",
          partOfSpeech: "noun",
        },
        {
          word: "siete",
          translation: "seven",
          pronunciation: "/sje.te/",
          partOfSpeech: "number",
        },
        {
          word: "diez",
          translation: "ten",
          pronunciation: "/djeθ/",
          partOfSpeech: "number",
        },
      ],
      grammarNote:
        "'De... a...' expresses a range of time: 'de siete a diez' (from seven to ten). Use 'A que hora...?' to ask 'At what time...?' — a key phrase for travel.",
      difficulty: "medium",
    },
    {
      id: 7,
      avatarLine: "De siete a diez en el comedor. Que descanse bien!",
      avatarLineEn: "From seven to ten in the dining room. Rest well!",
      expectedUserPhrase: "",
      expectedUserPhraseEn: "",
      acceptableVariations: [],
      vocabulary: [
        {
          word: "comedor",
          translation: "dining room",
          pronunciation: "/ko.me.dor/",
          partOfSpeech: "noun",
        },
        {
          word: "que descanse bien",
          translation: "rest well",
          pronunciation: "/ke des.kan.se bjen/",
          partOfSpeech: "phrase",
        },
      ],
      grammarNote:
        "'Que descanse bien' is a polite farewell meaning 'Rest well'. Like 'Que tenga un buen dia', it uses the subjunctive mood to express a wish for someone.",
      difficulty: "easy",
    },
  ],
};
