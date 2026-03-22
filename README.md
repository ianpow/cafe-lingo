# CafeLingo

A conversational language learning app with a 3D talking avatar tutor. Users practice real-world scenarios (ordering coffee, asking directions, hotel check-in, etc.) by speaking aloud, receiving pronunciation feedback, and having natural conversations powered by Claude AI.

**Live:** [language.lgtm.co.uk](https://language.lgtm.co.uk)

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 16 (App Router, TypeScript) |
| 3D Avatar | [TalkingHead](https://github.com/met4citizen/TalkingHead) via CDN |
| LLM | Claude API (`@anthropic-ai/sdk`) |
| TTS | ElevenLabs (`/v1/text-to-speech/{voiceId}/with-timestamps`) |
| STT | OpenAI Whisper API |
| Pronunciation | Azure Speech Services (REST API) |
| State | Zustand (persisted to localStorage) |
| Styling | Tailwind CSS + Framer Motion |
| Hosting | Vercel |

## Environment Variables

Create `.env.local` in the project root:

```env
ANTHROPIC_API_KEY=sk-ant-...        # Claude API key
ELEVENLABS_API_KEY=...              # ElevenLabs API key
OPENAI_API_KEY=sk-...               # OpenAI API key (for Whisper STT)
AZURE_SPEECH_KEY=...                # Azure Speech Services key
AZURE_SPEECH_REGION=uksouth         # Azure region (e.g. uksouth, eastus)
NEXT_PUBLIC_HAS_AZURE=true          # Set to "true" to use Azure pronunciation scoring
```

If `NEXT_PUBLIC_HAS_AZURE` is not `"true"`, the app falls back to estimating pronunciation scores by comparing the Whisper transcription against the expected phrase.

## Running Locally

```bash
npm install
npm run dev        # Development with Turbopack on http://localhost:3000
npm run build      # Production build
npm start          # Start production server
```

---

## How to Add a New Avatar

CafeLingo uses [Avaturn](https://avaturn.me) avatars exported as GLB files with blend shape support. The TalkingHead library animates them with lip sync, eye contact, blinking, and idle movements.

### Step 1: Create the Avatar

1. Go to [avaturn.me](https://avaturn.me) and create an account
2. Create a new avatar — customise appearance as desired
3. **Important:** Choose a **Type 2** body style (half-body or full-body with arms)

### Step 2: Export the Avatar

1. Click **Export** on your finished avatar
2. Select **GLB** format
3. Under export options, choose:
   - **With animation** (select an idle/talking animation)
   - The model must include **blend shape / morph target** support (this is automatic with Type 2)
4. Download the `.glb` file

### Step 3: Add to the Project

1. Rename the file to something descriptive, e.g.:
   - `avatar-maria-es.glb` (Spanish female tutor)
   - `avatar-pierre-fr.glb` (French male tutor)
   - `avatar-mei-zh.glb` (Chinese female tutor)
2. Place it in the `public/models/` directory
3. The default avatar is loaded from `/models/mpfb.glb`

### Step 4: Configure the Avatar in Code

The avatar is loaded in `src/components/avatar/TalkingHeadAvatar.tsx`. To change the default model or add per-language avatars:

**To change the default avatar**, update the `modelUrl` prop default:

```typescript
// In TalkingHeadAvatar.tsx — find the props interface and component
interface TalkingHeadAvatarProps {
  modelUrl?: string;  // defaults to "/models/mpfb.glb"
}
```

**To use different avatars per language**, pass the URL from the lesson page. In `src/app/lesson/page.tsx`, you could map language to avatar:

```typescript
const AVATAR_MAP: Record<string, string> = {
  es: "/models/avatar-maria-es.glb",
  fr: "/models/avatar-pierre-fr.glb",
  zh: "/models/avatar-mei-zh.glb",
  de: "/models/avatar-hans-de.glb",
};

// Then pass to the component:
<TalkingHeadAvatar
  ref={avatarRef}
  modelUrl={AVATAR_MAP[scenario?.language || "es"]}
/>
```

### Avatar Checklist

- [ ] Type 2 body from Avaturn
- [ ] Exported as GLB with animation
- [ ] Blend shapes / morph targets included (for lip sync)
- [ ] Placed in `public/models/`
- [ ] Referenced in code (either as default or per-language)

---

## How to Add a New Scenario

Scenarios are scripted 7-turn conversations. Each turn has an avatar line (in the target language), an expected user response, acceptable variations, and vocabulary.

### Step 1: Create the Scenario File

Create a new file in `src/lib/prompts/`, following the naming pattern:

```
scenario-{category}.ts           # Level 1 (e.g. scenario-cafe.ts)
scenario-{category}-{n}.ts       # Level 2-3 (e.g. scenario-cafe-2.ts)
scenario-{category}-{lang}.ts    # Other languages (e.g. scenario-cafe-fr.ts)
```

Use an existing scenario as a template. Here's the structure:

```typescript
import type { Scenario } from "@/lib/types/scenario";

export const myNewScenario: Scenario = {
  id: "my-scenario-id",           // Unique ID — used in URLs and progress tracking
  title: "At the Bakery",         // English title
  titleEs: "En la Panaderia",     // Title in target language (field is called titleEs for all languages)
  description: "Buy bread and pastries at a local bakery in Madrid.",
  setting: "Panaderia El Horno, a small bakery in Madrid",
  language: "es",                 // "es" | "fr" | "zh" (add new codes as needed)
  turns: [
    {
      id: 1,
      avatarLine: "Buenos dias! Bienvenido a nuestra panaderia. Que le pongo?",
      avatarLineEn: "Good morning! Welcome to our bakery. What can I get you?",
      expectedUserPhrase: "Buenos dias. Quiero una barra de pan, por favor.",
      expectedUserPhraseEn: "Good morning. I want a loaf of bread, please.",
      pronunciationGuide: "",     // Used for Chinese pinyin, leave empty for others
      acceptableVariations: [
        "Buenos dias, una barra de pan por favor",
        "Quiero pan por favor",
        "Una barra de pan",
      ],
      vocabulary: [
        {
          word: "panaderia",
          translation: "bakery",
          pronunciation: "/pa.na.de.ˈɾi.a/",
          partOfSpeech: "noun",
        },
        {
          word: "barra de pan",
          translation: "loaf of bread",
          pronunciation: "/ˈba.ra de pan/",
          partOfSpeech: "noun",
        },
      ],
      grammarNote: "'Quiero' + noun is the simplest way to say 'I want' something.",
      difficulty: "easy",
    },
    // ... turns 2-6 (more conversation)
    {
      id: 7,
      avatarLine: "Hasta luego! Que disfrute del pan!",
      avatarLineEn: "See you later! Enjoy the bread!",
      expectedUserPhrase: "",        // Empty = lesson complete, auto-advances
      expectedUserPhraseEn: "",
      acceptableVariations: [],
      vocabulary: [],
      difficulty: "easy",
    },
  ],
};
```

**Key rules:**
- Always include 7 turns (the app expects this)
- The last turn (turn 7) should have an empty `expectedUserPhrase` — this signals lesson completion
- Provide 3-5 `acceptableVariations` per turn for flexible scoring
- For Chinese scenarios, add `pronunciationGuide` with pinyin on every user turn

### Step 2: Register the Scenario

Open `src/app/api/scenarios/route.ts` and:

1. Import the scenario at the top:
   ```typescript
   import { myNewScenario } from "@/lib/prompts/scenario-my-new";
   ```

2. Add it to the `scenarios` object:
   ```typescript
   const scenarios: Record<string, Scenario> = {
     // ... existing scenarios
     "my-scenario-id": myNewScenario,
   };
   ```

### Step 3: Add to the Home Page

Open `src/app/page.tsx` and add the scenario to the appropriate language tab's `categories` array.

**To add a new level to an existing category:**
```typescript
{
  icon: "☕",
  title: "At the Cafe",
  levels: [
    { id: "cafe-ordering", level: 1, subtitle: "Basic ordering" },
    { id: "cafe-ordering-2", level: 2, subtitle: "Ordering for two" },
    { id: "cafe-ordering-3", level: 3, subtitle: "Handle mix-ups" },
    // Add your new level here:
    { id: "my-scenario-id", level: 4, subtitle: "Your subtitle" },
  ],
},
```

**To add a new category:**
```typescript
{
  icon: "🥖",          // Pick an emoji
  title: "At the Bakery",
  description: "Buy bread and pastries at a local bakery in Madrid.",
  levels: [
    { id: "bakery-1", level: 1, subtitle: "First visit" },
    { id: "bakery-2", level: 2, subtitle: "Special orders" },
    { id: "bakery-3", level: 3, subtitle: "Busy morning" },
  ],
},
```

Level colours are automatic: Level 1 = green, Level 2 = amber, Level 3 = rose.

---

## How to Add a New Language

Adding a new language (e.g. German) requires changes in **7 files**. Here's the complete checklist using German as an example:

### 1. Update the Scenario Type

**File:** `src/lib/types/scenario.ts`

Add the new language code to the union type:

```typescript
language?: "es" | "fr" | "zh" | "de";   // Add "de"
```

### 2. Add an ElevenLabs Voice

**File:** `src/app/api/tts/route.ts`

Find a suitable voice on [elevenlabs.io/voices](https://elevenlabs.io/voices) (filter by German), copy its Voice ID, and add it:

```typescript
const VOICE_MAP: Record<string, string> = {
  es: "FGY2WhTYpPnrIDTdsKH5", // Laura — Spanish
  fr: "XB0fDUnXU5powFXDhCwa", // Charlotte — French
  zh: "Xb7hH8MSUJpSbSDYk0k2", // Lily — Chinese
  de: "YOUR_VOICE_ID_HERE",   // e.g. Anna — German
};
```

### 3. Add Azure Pronunciation Language

**File:** `src/app/api/pronunciation/route.ts`

```typescript
const AZURE_LANG_MAP: Record<string, string> = {
  es: "es-ES",
  fr: "fr-FR",
  zh: "zh-CN",
  de: "de-DE",   // Add German
};
```

### 4. Add Language to Claude's System Prompt

**File:** `src/lib/prompts/system-prompt.ts`

Update both maps:

```typescript
const LANG_NAMES: Record<string, string> = {
  es: "Spanish",
  fr: "French",
  zh: "Chinese (Mandarin)",
  de: "German",   // Add
};

const LANG_EXAMPLES: Record<string, string> = {
  es: '"Perfecto!", "Muy bien!", "Claro que si!"',
  fr: '"Parfait!", "Tres bien!", "Bien sur!"',
  zh: '"很好！", "太棒了！", "没问题！"',
  de: '"Perfekt!", "Sehr gut!", "Genau!"',   // Add
};
```

### 5. Add Lip Sync Module Mapping

**File:** `src/components/avatar/TalkingHeadAvatar.tsx`

The TalkingHead library has a native German lip sync module (`de`), so this is straightforward:

```typescript
const lipsyncLangMap: Record<string, string> = {
  es: "en",
  fr: "fr",
  zh: "en",
  de: "de",   // German has native support
};
```

The available TalkingHead lipsync modules are: `en`, `fr`, `de`, `fi`, `lt`. Languages without a dedicated module fall back to `en`.

### 6. Create Scenario Files

Create at least one scenario file in `src/lib/prompts/`:

```
scenario-cafe-de.ts       # German cafe scenario
scenario-directions-de.ts # German directions scenario
```

Set `language: "de"` in each scenario. Register them in `src/app/api/scenarios/route.ts`.

### 7. Add Language Tab to Home Page

**File:** `src/app/page.tsx`

Add a new entry to the `languages` array:

```typescript
{
  code: "de",
  label: "German",
  flag: "\uD83C\uDDE9\uD83C\uDDEA",   // Flag emoji for Germany
  subtitle: "Learn German by Speaking",
  categories: [
    {
      icon: "\u2615",
      title: "At the Cafe",
      description: "Order coffee and cake at a cafe in Berlin.",
      levels: [
        { id: "cafe-ordering-de", level: 1, subtitle: "Basic ordering" },
      ],
    },
    // ... more categories
  ],
},
```

### New Language Checklist

- [ ] `src/lib/types/scenario.ts` — add language code to union type
- [ ] `src/app/api/tts/route.ts` — add ElevenLabs voice ID
- [ ] `src/app/api/pronunciation/route.ts` — add Azure language code
- [ ] `src/lib/prompts/system-prompt.ts` — add to LANG_NAMES and LANG_EXAMPLES
- [ ] `src/components/avatar/TalkingHeadAvatar.tsx` — add lipsync module mapping
- [ ] `src/lib/prompts/scenario-*.ts` — create scenario files with `language: "de"`
- [ ] `src/app/api/scenarios/route.ts` — register new scenarios
- [ ] `src/app/page.tsx` — add language tab with categories and levels
- [ ] Test TTS voice sounds natural
- [ ] Test pronunciation scoring returns sensible results
- [ ] Test lip sync animates during speech

---

## How to Connect a Custom Domain (IONOS + Vercel)

### Step 1: Add Domain in Vercel

1. Go to your Vercel project dashboard
2. Click **Settings** > **Domains**
3. Type your subdomain (e.g. `language.lgtm.co.uk`) and click **Add**
4. Vercel will show you the required DNS record — note the **CNAME value** (usually `cname.vercel-dns.com`)

### Step 2: Create DNS Record in IONOS

1. Log in to [ionos.co.uk](https://ionos.co.uk)
2. Go to **Domains & SSL** > click your domain (e.g. `lgtm.co.uk`)
3. Click **DNS** tab
4. Click **Add Record** and choose **CNAME**
5. Fill in:
   - **Host name:** `language` (just the subdomain part, not the full domain)
   - **Points to:** `cname.vercel-dns.com`
   - **TTL:** 1 hour (or default)
6. Save the record

### Step 3: Verify

- DNS propagation can take up to 24 hours but usually works within minutes
- Go back to Vercel's domain settings — it should show a green checkmark once verified
- Vercel automatically provisions an SSL certificate

### Troubleshooting

- If IONOS warns about disabling web hosting features for the subdomain, click **OK** — this is expected when pointing a subdomain elsewhere
- If the domain shows "Invalid Configuration" in Vercel, double-check the CNAME record points to exactly `cname.vercel-dns.com` (no trailing dot in IONOS)
- Clear your browser cache or try incognito if you see an old page

---

## Project Structure

```
cafe-lingo/
  public/
    models/
      mpfb.glb                          — 3D avatar (Avaturn Type 2 GLB)
  src/
    app/
      layout.tsx                         — Root layout
      page.tsx                           — Home page (language tabs + scenario grid)
      globals.css                        — Global styles + card flip utilities
      lesson/page.tsx                    — Main lesson view (avatar + chat)
      vocab/page.tsx                     — Vocabulary review (flip cards)
      api/
        chat/route.ts                    — Claude conversation endpoint
        tts/route.ts                     — ElevenLabs TTS + word-level timestamps
        stt/route.ts                     — Whisper speech-to-text
        pronunciation/route.ts           — Azure pronunciation scoring
        scenarios/route.ts               — Scenario data (registry of all scenarios)
    components/
      avatar/
        TalkingHeadAvatar.tsx            — 3D avatar with lip sync + camera controls
      chat/
        ChatPanel.tsx                    — Conversation history display
        ChatBubble.tsx                   — Individual message bubble
        PromptCard.tsx                   — "Say this:" expected phrase card
      audio/
        RecordButton.tsx                 — Microphone toggle button
      pronunciation/
        PronunciationFeedback.tsx        — Score ring + sub-scores
    lib/
      hooks/
        useConversationFlow.ts           — Core conversation orchestration loop
      audio/
        recorder.ts                      — MediaRecorder wrapper
        audio-utils.ts                   — Base64, WAV conversion, playback
      prompts/
        system-prompt.ts                 — Claude system prompt builder
        scenario-cafe.ts                 — Spanish cafe Level 1
        scenario-cafe-2.ts               — Spanish cafe Level 2
        scenario-cafe-3.ts               — Spanish cafe Level 3
        scenario-cafe-fr.ts              — French cafe
        scenario-cafe-zh.ts              — Chinese cafe
        ... (20 scenario files total)
      store/
        lesson-store.ts                  — Zustand: lesson state, conversation, UI
        progress-store.ts                — Zustand: persistence, XP, vocab, scores
      types/
        scenario.ts                      — Scenario, Turn, VocabItem, Message types
        pronunciation.ts                 — PronunciationResult, WordScore types
```

## Current Scenario Coverage

| Language | Scenarios | Categories |
|---|---|---|
| Spanish | 16 lessons | Cafe (3), Restaurant (3), Directions (3), Hotel (3), Shopping (3), Office (1) |
| French | 2 lessons | Cafe (1), Directions (1) |
| Chinese | 2 lessons | Cafe (1), Directions (1) |

---

## Deploying

The app auto-deploys to Vercel on every push to `main`:

```bash
git add .
git commit -m "Your commit message"
git push
```

Vercel will build and deploy automatically. Check the deployment at [vercel.com/dashboard](https://vercel.com/dashboard).
