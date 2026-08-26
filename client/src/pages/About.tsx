// About Page — Jackie Padgett Music
// Warm Americana Roadhouse design
// Exact-copy rule: preserve the portrait-led biography, source content order, mahogany palette, and amber actions.

import { Link } from "wouter";
import { ChevronRight, Mountain, Bike, Music2 } from "lucide-react";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

const JACKIE_PHOTO = "/manus-storage/jackie-photo_b3d538f9.png";
const OKLAHOMA_BG = "/manus-storage/jackie-about-bg-BLyktp7yJCvay8T9SndkY6_b178f4b4.webp";

const hobbies = [
  {
    icon: Music2,
    title: "Music",
    desc: "Music moves through the heart and mind turning quiet moments into feeling and chaos into rhythm. Jackie has written over 729 original songs spanning americana, country pop, ballads, and gospel.",
  },
  {
    icon: Mountain,
    title: "Hiking",
    desc: "Hiking offers calm and strength as each step clears the mind and rewards patience with quiet views. The trails are where many of Jackie's lyrics are born.",
  },
  {
    icon: Bike,
    title: "Mountain Biking",
    desc: "Mountain biking brings freedom, focus, and joy as trails test grit, reward courage, and leave you smiling. The same spirit shows up in her most energetic songs.",
  },
];

export default function About() {
  return (
    <div className="min-h-screen flex flex-col" style={{ background: "oklch(0.18 0.04 40)" }}>
      <NavBar />

      {/* ── PAGE HERO ── */}
      <section className="relative pt-32 pb-0 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-bottom"
          style={{ backgroundImage: `url(${OKLAHOMA_BG})` }}
        />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, oklch(0.14 0.04 38 / 0.65) 0%, oklch(0.18 0.04 40) 100%)" }} />
        <div className="container relative pb-16 text-center">
          <div
            className="text-xs font-bold tracking-widest uppercase mb-3"
            style={{ color: "oklch(0.72 0.18 65)", fontFamily: "'Lato', sans-serif" }}
          >
            ♪ The Artist
          </div>
          <h1
            className="text-4xl md:text-6xl font-bold mb-4"
            style={{ fontFamily: "'Playfair Display', serif", color: "oklch(0.94 0.02 80)" }}
          >
            About Jackie
          </h1>
          <p
            className="text-base md:text-lg max-w-xl mx-auto"
            style={{ color: "oklch(0.80 0.03 78)", fontFamily: "'Lato', sans-serif" }}
          >
            Oklahoma roots. Heartfelt songs. A life lived with purpose and joy.
          </p>
        </div>
      </section>

      {/* ── MAIN BIO ── */}
      <section className="py-20">
        <div className="container">
          <div className="grid md:grid-cols-5 gap-12 items-start">
            {/* Photo — 2 cols */}
            <div className="md:col-span-2 relative">
              <div
                className="absolute -inset-4 rounded-2xl opacity-20"
                style={{ background: "radial-gradient(circle, oklch(0.72 0.18 65 / 50%), transparent 70%)" }}
              />
              <img
                src={JACKIE_PHOTO}
                alt="Jackie Padgett — Singer-Songwriter"
                className="relative rounded-xl w-full shadow-2xl object-cover"
                style={{ maxHeight: "560px", objectPosition: "center top" }}
              />
              {/* Stat badges */}
              <div
                className="absolute -bottom-4 -right-4 px-4 py-3 rounded-xl text-center"
                style={{
                  background: "oklch(0.72 0.18 65)",
                  color: "oklch(0.15 0.03 40)",
                }}
              >
                <div className="text-2xl font-bold" style={{ fontFamily: "'Playfair Display', serif" }}>729+</div>
                <div className="text-xs font-semibold tracking-wide" style={{ fontFamily: "'Lato', sans-serif" }}>Original Songs</div>
              </div>
            </div>

            {/* Bio text — 3 cols */}
            <div className="md:col-span-3">
              <h2
                className="text-3xl md:text-4xl font-bold mb-6"
                style={{ fontFamily: "'Playfair Display', serif", color: "oklch(0.94 0.02 80)" }}
              >
                Songs that carry what words alone can't hold
              </h2>

              <div className="space-y-4" style={{ color: "oklch(0.78 0.03 75)", fontFamily: "'Lato', sans-serif", lineHeight: "1.8" }}>
                <p>
                  Jackie Padgett is an Oklahoma-rooted singer-songwriter whose music is a direct line to the heart. Her songs span americana, contemporary country, ballads, blues, and gospel — each one crafted with the kind of honesty that only comes from living it first.
                </p>
                <p>
                  With over 729 original songs and 8,300+ plays on Suno, Jackie has built a catalog that reflects a life lived with intention. Whether she's writing about the strength passed down through generations of women, the quiet joy of an ordinary morning, or the red dirt roads of home, her lyrics carry weight and warmth in equal measure.
                </p>
                <p>
                  Jackie's music philosophy is simple: <em style={{ color: "oklch(0.88 0.02 78)", fontFamily: "'Playfair Display', serif" }}>"Music moves through the heart and mind turning quiet moments into feeling and chaos into rhythm."</em>
                </p>
                <p>
                  When she's not writing or recording, Jackie finds inspiration on hiking trails and mountain bike paths — places where the mind goes quiet and the heart speaks louder.
                </p>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/music"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded font-bold text-sm tracking-wide transition-all duration-150 active:scale-95"
                  style={{
                    background: "oklch(0.72 0.18 65)",
                    color: "oklch(0.15 0.03 40)",
                    fontFamily: "'Lato', sans-serif",
                  }}
                >
                  Browse Her Songs
                  <ChevronRight size={16} />
                </Link>
                <a
                  href="https://www.facebook.com/jackie.padgett.58"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded font-semibold text-sm tracking-wide transition-all duration-150 active:scale-95"
                  style={{
                    background: "oklch(0.72 0.18 65 / 12%)",
                    border: "1px solid oklch(0.72 0.18 65 / 30%)",
                    color: "oklch(0.72 0.18 65)",
                    fontFamily: "'Lato', sans-serif",
                  }}
                >
                  Follow on Facebook
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── HOBBIES ── */}
      <section
        className="py-16"
        style={{ background: "oklch(0.20 0.05 40)", borderTop: "1px solid oklch(0.72 0.18 65 / 12%)" }}
      >
        <div className="container">
          <div className="text-center mb-12">
            <div
              className="text-xs font-bold tracking-widest uppercase mb-3"
              style={{ color: "oklch(0.72 0.18 65)", fontFamily: "'Lato', sans-serif" }}
            >
              ♪ Life Beyond the Studio
            </div>
            <h2
              className="text-2xl md:text-3xl font-bold"
              style={{ fontFamily: "'Playfair Display', serif", color: "oklch(0.94 0.02 80)" }}
            >
              What Fuels the Music
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {hobbies.map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="p-6 rounded-xl"
                style={{
                  background: "oklch(0.22 0.05 40)",
                  border: "1px solid oklch(0.35 0.05 45 / 35%)",
                }}
              >
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center mb-4"
                  style={{ background: "oklch(0.72 0.18 65 / 15%)" }}
                >
                  <Icon size={22} style={{ color: "oklch(0.72 0.18 65)" }} />
                </div>
                <h3
                  className="text-xl font-bold mb-3"
                  style={{ fontFamily: "'Playfair Display', serif", color: "oklch(0.94 0.02 80)" }}
                >
                  {title}
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "oklch(0.70 0.04 70)", fontFamily: "'Lato', sans-serif" }}
                >
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── QUOTE ── */}
      <section className="py-20">
        <div className="container max-w-3xl mx-auto text-center">
          <div
            className="text-6xl font-bold mb-4 opacity-30"
            style={{ fontFamily: "'Playfair Display', serif", color: "oklch(0.72 0.18 65)" }}
          >
            "
          </div>
          <blockquote
            className="text-2xl md:text-3xl font-bold leading-relaxed mb-6"
            style={{
              fontFamily: "'Playfair Display', serif",
              fontStyle: "italic",
              color: "oklch(0.88 0.02 80)",
            }}
          >
            I come from women who carried love like sunlight in their hands.
          </blockquote>
          <cite
            className="text-sm font-semibold tracking-wide not-italic"
            style={{ color: "oklch(0.60 0.12 60)", fontFamily: "'Lato', sans-serif" }}
          >
            — Jackie Padgett, "The Women Before Me"
          </cite>
          <div className="mt-8">
            <Link
              href="/poems"
              className="inline-flex items-center gap-2 text-sm font-semibold transition-colors"
              style={{ color: "oklch(0.72 0.18 65)", fontFamily: "'Lato', sans-serif" }}
            >
              Read Her Poems
              <ChevronRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
