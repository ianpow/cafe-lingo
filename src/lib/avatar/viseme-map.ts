// Maps characters to Oculus/ARKit viseme morph target names
// Reference: https://developer.oculus.com/documentation/unity/audio-ovrlipsync-viseme-reference/

const CHAR_TO_VISEME: Record<string, string> = {
  // Vowels
  a: "viseme_aa",
  e: "viseme_E",
  i: "viseme_I",
  o: "viseme_O",
  u: "viseme_U",

  // Spanish-specific vowel sounds
  "\u00e1": "viseme_aa", // á
  "\u00e9": "viseme_E",  // é
  "\u00ed": "viseme_I",  // í
  "\u00f3": "viseme_O",  // ó
  "\u00fa": "viseme_U",  // ú
  "\u00fc": "viseme_U",  // ü

  // Bilabials (lips together)
  p: "viseme_PP",
  b: "viseme_PP",
  m: "viseme_PP",

  // Labiodentals (lip + teeth)
  f: "viseme_FF",
  v: "viseme_FF",

  // Dentals / Alveolars
  t: "viseme_DD",
  d: "viseme_DD",
  n: "viseme_nn",
  l: "viseme_nn",
  r: "viseme_RR",

  // Interdental (th)
  z: "viseme_TH", // Spanish 'z' has /θ/ in Castilian
  c: "viseme_kk", // context-dependent but default to velar

  // Sibilants
  s: "viseme_SS",
  x: "viseme_SS",

  // Velars / Palatals
  k: "viseme_kk",
  g: "viseme_kk",
  q: "viseme_kk",
  j: "viseme_CH", // Spanish 'j' is /x/ or /h/

  // Affricates
  y: "viseme_CH",

  // Other
  h: "viseme_sil", // silent in Spanish
  w: "viseme_U",

  // Special
  "\u00f1": "viseme_nn", // ñ

  // Punctuation / spaces -> silence
  " ": "viseme_sil",
  ".": "viseme_sil",
  ",": "viseme_sil",
  "!": "viseme_sil",
  "?": "viseme_sil",
  "\u00a1": "viseme_sil", // ¡
  "\u00bf": "viseme_sil", // ¿
};

// All Oculus viseme morph target names
export const VISEME_NAMES = [
  "viseme_sil",
  "viseme_PP",
  "viseme_FF",
  "viseme_TH",
  "viseme_DD",
  "viseme_kk",
  "viseme_CH",
  "viseme_SS",
  "viseme_nn",
  "viseme_RR",
  "viseme_aa",
  "viseme_E",
  "viseme_I",
  "viseme_O",
  "viseme_U",
] as const;

export type VisemeName = (typeof VISEME_NAMES)[number];

export function charToViseme(char: string): VisemeName {
  return (CHAR_TO_VISEME[char.toLowerCase()] as VisemeName) ?? "viseme_sil";
}
