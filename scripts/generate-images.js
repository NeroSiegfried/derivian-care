#!/usr/bin/env node
/**
 * Generates all site images using the Stability AI API (stable-diffusion-3).
 *
 * Usage:
 *   STABILITY_API_KEY=sk-xxx node scripts/generate-images.js
 *
 * Sign up free at https://platform.stability.ai — 25 free credits on sign-up,
 * each SD3 image costs ~6.5 credits (so ~3-4 images free, then $0.065/image).
 * The cheaper "core" model costs ~3 credits each and is used here instead.
 *
 * To skip images that already look correct, comment them out of IMAGES below.
 */

import { writeFile } from "fs/promises"
import { join, dirname } from "path"
import { fileURLToPath } from "url"

const __dirname = dirname(fileURLToPath(import.meta.url))
const OUTPUT_DIR = join(__dirname, "../public/images")

const API_KEY = process.env.STABILITY_API_KEY
if (!API_KEY) {
  console.error("Error: set STABILITY_API_KEY environment variable")
  console.error("  STABILITY_API_KEY=sk-xxx node scripts/generate-images.js")
  process.exit(1)
}

// Shared negative prompt applied to every image
const NEGATIVE =
  "text, watermark, logo, blurry, low quality, cartoon, illustration, clinical, hospital, care home, institutional, white walls, uniform, nurse, doctor, wheelchair ramp signage, stock photo, fake smile, over-staged"

// Each image: file name, aspect ratio (Stability AI format), and prompt.
// Images 1–9 already exist. Comment out any you want to skip.
const IMAGES = [
  // ── Site section images ──────────────────────────────────────────────────
  {
    file: "1.jpg",
    ratio: "16:9",
    prompt:
      "A young adult with a learning disability relaxing comfortably in their own home, making a cup of tea in a warm lived-in kitchen, candid documentary photography, natural window light, real home décor with plants and personal items, the person is the sole focus — no carer in frame, photorealistic, diverse ethnicity, warm tones",
  },
  {
    file: "2.jpg",
    ratio: "4:3",
    prompt:
      "A supported living resident in their own home independently doing a daily domestic task — putting away groceries or tidying the kitchen — a support worker visible in the soft background but not the centre of the frame, warm natural light, photorealistic documentary style, real home décor, diverse",
  },
  {
    file: "3.jpg",
    ratio: "4:3",
    prompt:
      "Two professionals — a supported living support coordinator and a colleague — sitting together at a desk reviewing a support plan on a laptop, focused and collegial, warm office light, photorealistic, diverse ethnicities, business casual clothing",
  },
  {
    file: "4.jpg",
    ratio: "4:3",
    prompt:
      "A support worker and a resident with a learning disability sitting side by side at a kitchen table working through a practical life skill together — a budget spreadsheet or a simple recipe — equal and empowering body language, warm domestic setting, photorealistic, natural light, diverse",
  },
  {
    file: "5.jpg",
    ratio: "4:3",
    prompt:
      "A resident and a support worker walking together through a busy outdoor London market or park on a sunny day, candid street photography style, genuine and natural, diverse London community visible in background, the resident leads, social inclusion, photorealistic",
  },
  {
    file: "6.jpg",
    ratio: "4:3",
    prompt:
      "A support worker calmly helping a resident review a weekly pill organiser at a kitchen table, careful and organised, domestic home environment, warm lighting, reassuring and matter-of-fact, not clinical or alarming, photorealistic",
  },
  {
    file: "7.jpg",
    ratio: "3:2",
    prompt:
      "Two people — a supported living resident and a support worker — having a warm relaxed conversation on a sofa in a cosy home living room, natural daylight, genuinely candid and unposed, diverse, photorealistic",
  },
  {
    file: "8.jpg",
    ratio: "3:2",
    prompt:
      "A person using a tablet in a relaxed home setting, reviewing a digital care schedule or form with a support worker sitting nearby pointing at the screen, collaborative and calm, bright natural light, photorealistic",
  },
  {
    file: "9.jpg",
    ratio: "3:2",
    prompt:
      "A resident and support worker sitting side by side on a sofa going through a printed support plan or notebook together, co-production atmosphere, warm home setting, equal and collaborative body language, photorealistic, natural light",
  },
  {
    file: "10.jpg",
    ratio: "4:3",
    prompt:
      "A support worker helping a resident with personal grooming in a calm dignified way at a bathroom mirror, sensitive and gentle, private and trusting atmosphere, no clinical equipment, warm home bathroom setting, photorealistic, focus on the relationship not the task",
  },
  {
    file: "11.jpg",
    ratio: "4:3",
    prompt:
      "A support worker sitting attentively with a resident in a structured calm home environment, working through a visual daily schedule or structured activity board together, well-organised space, steady and focused body language, suggests autism or mental health support context, warm domestic setting, photorealistic",
  },
  {
    file: "12.jpg",
    ratio: "2:1",
    prompt:
      "A welcoming exterior of a modern supported living property in south London — a tidy residential house with a well-kept front garden on a leafy street, warm afternoon light, a support coordinator at the door greeting someone, professional and homely, photorealistic",
  },
  {
    file: "13.jpg",
    ratio: "2:1",
    prompt:
      "A confident capable supported living resident at home — sitting at a desk writing in a notebook or using a laptop, or tending a window box of plants, natural window light, aspirational and independent mood, the person looks purposeful and in charge of their own life, photorealistic, diverse ethnicity",
  },

  // ── Blog post thumbnails ─────────────────────────────────────────────────
  {
    file: "14.jpg",
    ratio: "3:2",
    prompt:
      "A cheerful outdoor summer gathering — families and supported living residents at a community event in a garden or park, people of diverse ages and ethnicities sharing food and laughing, warm sunshine, casual and real, conveys belonging and family connection, photorealistic",
  },
  {
    file: "15.jpg",
    ratio: "3:2",
    prompt:
      "A supported living resident preparing a fresh colourful meal in their own kitchen — chopping vegetables or plating food, the kitchen looks lived-in and personal, a recipe shown on a nearby tablet, conveys healthy independent living and the pleasure of cooking for yourself, photorealistic, warm light",
  },
  {
    file: "16.jpg",
    ratio: "3:2",
    prompt:
      "A small family group — a parent and an adult sibling of a supported living resident — sitting in a home living room having a thoughtful open conversation with a support coordinator, warm and reassuring, serious but not clinical, conveys informed family decision-making, photorealistic, diverse",
  },
  {
    file: "17.jpg",
    ratio: "3:2",
    prompt:
      "A family member and a support worker reviewing medication information together at a kitchen table — looking at a pill organiser and printed notes, calm and cooperative, centres the family relationship, warm domestic setting, not clinical, photorealistic",
  },
  {
    file: "18.jpg",
    ratio: "3:2",
    prompt:
      "A support manager at a tidy office desk reviewing a thick folder of care documentation or a compliance checklist on screen, organised and professional, binders and stationery visible, conveys governance and thorough preparedness, photorealistic, warm lighting",
  },
  {
    file: "19.jpg",
    ratio: "3:2",
    prompt:
      "A relaxed indoor community coffee morning — a circle of people including residents and volunteers chatting warmly over mugs of tea and biscuits, long table set informally, warm lighting, generous and community-spirited atmosphere, photorealistic, diverse group",
  },
  {
    file: "20.jpg",
    ratio: "3:2",
    prompt:
      "A person sitting at a kitchen table reading a financial leaflet or reviewing information on a laptop with a notepad and pen beside them, thoughtful and calm — not stressed, conveys taking ownership of funding information and planning confidently, photorealistic, natural light",
  },
  {
    file: "21.jpg",
    ratio: "3:2",
    prompt:
      "A bright well-organised home hallway or bathroom with clear floor space, good lighting and subtle grab rails, a support worker and resident reviewing the space together, safe and practical without looking clinical, conveys proactive home safety, photorealistic, warm residential feel",
  },
  {
    file: "22.jpg",
    ratio: "3:2",
    prompt:
      "A small diverse team of supported living support workers smiling together outside a residential house or in a communal room, casual clothes, genuine warmth and team pride, a celebration image conveying care and community spirit, photorealistic",
  },
  {
    file: "23.jpg",
    ratio: "3:2",
    prompt:
      "A support worker sitting across from a supported living resident at home, the worker leaning slightly forward and listening attentively while the resident speaks with open hands and engaged posture, the resident is clearly directing the conversation, eye contact, warm home setting, conveys active listening and empowerment, photorealistic",
  },
  {
    file: "24.jpg",
    ratio: "16:9",
    prompt:
      "A supported living resident at a community café with friends or at a local community centre attending a class or social activity, active and natural, candid street or interior photography, diverse London community, warm daylight, conveys social inclusion and community belonging, photorealistic — distinct from an outdoor market or park scene",
  },
]

async function generateImage({ file, ratio, prompt }) {
  console.log(`Generating ${file} (${ratio})…`)

  const form = new FormData()
  form.append("prompt", prompt)
  form.append("negative_prompt", NEGATIVE)
  form.append("aspect_ratio", ratio)
  form.append("output_format", "jpeg")
  // "core" model: better quality-per-credit than sd3 lite, ~3 credits each
  // Switch to "sd3" or "sd3-turbo" if you want different quality/speed tradeoff

  const res = await fetch("https://api.stability.ai/v2beta/stable-image/generate/core", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${API_KEY}`,
      Accept: "image/*",
    },
    body: form,
  })

  if (!res.ok) {
    const text = await res.text()
    throw new Error(`Stability AI error for ${file}: ${res.status} ${text}`)
  }

  const buffer = Buffer.from(await res.arrayBuffer())
  const outputPath = join(OUTPUT_DIR, file)
  await writeFile(outputPath, buffer)
  console.log(`  ✓ Saved ${outputPath}`)
}

async function main() {
  console.log(`Generating ${IMAGES.length} images → ${OUTPUT_DIR}\n`)

  for (const image of IMAGES) {
    try {
      await generateImage(image)
      // Small delay to be polite to the API rate limiter
      await new Promise((r) => setTimeout(r, 800))
    } catch (err) {
      console.error(`  ✗ Failed: ${err.message}`)
    }
  }

  console.log("\nDone.")
}

main()
