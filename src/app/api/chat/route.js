export const runtime = "nodejs";
import Groq from 'groq-sdk';
import { NextResponse } from 'next/server';

const SYSTEM_PROMPT = `
You are the friendly AI Sales Assistant for "Stellar Mulberry," a premium plotted development by Stellar Homes.
Your goal is to answer queries politely, concisely, and encourage users to visit or contact sales.

DETAILS ABOUT THE PROJECT:
- **Name:** Stellar Mulberry.
- **Developer:** Stellar Homes Developers.
- **Type:** Premium Plotted Development / Gated Community.
- **Location:** Chikkaballapur, near Nandi Hills and Isha Foundation.
- **Google Maps Link:** https://maps.app.goo.gl/k7TDX27EtKVoRDNk8
- **Key Features:** Tropical green patches, tree-lined paths, landscaped open spaces.
- **Approvals:** DTCP & RERA Approved.
- **Loan Availability:** Up to 90% bank loan available.
- **Nearby Attractions:** Nandi Hills (Sunrise views), Skandagiri Hills (Night treks), Isha Foundation (Spiritual), Kethanahalli Falls.
- **Amenities:** Clubhouse, 24/7 Security, Perimeter Fencing, Internal Roads, Street Lights, Senior Citizen Zones, Pet Parks, Meditation Areas.
- **Investment Potential:** Located in a rapidly growing tourism and spiritual hub near Bengaluru highways.

RULES:
1. Only answer questions related to Stellar Mulberry or real estate.
2. If asked about pricing, say: "Please contact our sales team at 08022330069 for the latest price sheet and offers."
3. Keep answers short (under 3 sentences) unless asked for details.
4. Tone: Professional, warm, and inviting.
`;

const rateLimitMap = new Map();

function rateLimit(ip) {
  const now = Date.now();
  const WINDOW = 60 * 1000;
  const LIMIT = 10;

  if (!rateLimitMap.has(ip)) {
    rateLimitMap.set(ip, []);
  }

  const timestamps = rateLimitMap.get(ip).filter(t => now - t < WINDOW);
  timestamps.push(now);
  rateLimitMap.set(ip, timestamps);

  return timestamps.length <= LIMIT;
}

function isValidMessages(messages) {
  return (
    Array.isArray(messages) &&
    messages.length > 0 &&
    messages.every(
      (msg) =>
        msg.role &&
        typeof msg.content === "string" &&
        msg.content.length > 0 &&
        msg.content.length < 500
    )
  );
}

export async function POST(req) {
  try {
    if (req.headers.get("x-app-key") !== "stellar-secret") {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const ip =
      req.headers.get("x-forwarded-for") ||
      req.headers.get("x-real-ip") ||
      "unknown";

    if (!rateLimit(ip)) {
      return NextResponse.json(
        { error: "Too many requests. Try again later." },
        { status: 429 }
      );
    }

    const { messages } = await req.json();

    if (!isValidMessages(messages)) {
      return NextResponse.json(
        { error: "Invalid message format" },
        { status: 400 }
      );
    }

    const trimmedMessages = messages.slice(-5);

    const groq = new Groq({
      apiKey: process.env.GROQ_API_KEY,
    });

    const response = await groq.chat.completions.create({
      model: "llama-3.1-8b-instant",
      messages: [
        { role: "system", content: SYSTEM_PROMPT },
        ...trimmedMessages,
      ],
      temperature: 0.7,
      max_tokens: 300,
    });

    const rawContent =
      response.choices[0]?.message?.content ||
      "Sorry, I couldn't generate a response.";

    const safeContent = rawContent.replace(/<[^>]*>?/gm, "");

    return NextResponse.json({
      role: "assistant",
      content: safeContent,
    });

  } catch (error) {
    console.error("Error:", error.message);

    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
