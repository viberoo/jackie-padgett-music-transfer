// Poems Page — Jackie Padgett Music
// Warm Americana Roadhouse design — editorial typographic layout
// Exact-copy rule: preserve the approved poem order, dark editorial composition, italic serif type, and shared chrome.

import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { poems } from "@/lib/poems";

const POEMS_BG = "/manus-storage/jackie-poems-bg-3jn8zbJgKVqVhmizDdnWao_129ab597.webp";

export default function Poems() {
  return (
    <div className="min-h-screen flex flex-col" style={{ background: "oklch(0.18 0.04 40)" }}>
      <NavBar />

      {/* ── PAGE HERO ── */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${POEMS_BG})` }}
        />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, oklch(0.14 0.04 38 / 0.75), oklch(0.18 0.04 40))" }} />
        <div className="container relative text-center">
          <div
            className="text-xs font-bold tracking-widest uppercase mb-3"
            style={{ color: "oklch(0.72 0.18 65)", fontFamily: "'Lato', sans-serif" }}
          >
            ✦ Written Words
          </div>
          <h1
            className="text-4xl md:text-6xl font-bold mb-4"
            style={{
              fontFamily: "'Playfair Display', serif",
              color: "oklch(0.94 0.02 80)",
              fontStyle: "italic",
            }}
          >
            Poems
          </h1>
          <p
            className="text-base md:text-lg max-w-xl mx-auto"
            style={{ color: "oklch(0.75 0.03 75)", fontFamily: "'Lato', sans-serif" }}
          >
            Words that grew from the same soil as the music — honest, rooted, and full of light.
          </p>
        </div>
      </section>

      {/* ── POEMS ── */}
      <section className="py-16 flex-1">
        <div className="container">
          <div className="max-w-3xl mx-auto space-y-20">
            {poems.map((poem, idx) => (
              <article key={poem.id}>
                {/* Poem header */}
                <div className="mb-8">
                  <div
                    className="flex items-center gap-3 mb-4"
                  >
                    <span
                      className="text-4xl font-bold opacity-20"
                      style={{ fontFamily: "'Playfair Display', serif", color: "oklch(0.72 0.18 65)" }}
                    >
                      {String(idx + 1).padStart(2, "0")}
                    </span>
                    <div
                      className="flex-1 h-px"
                      style={{ background: "linear-gradient(to right, oklch(0.72 0.18 65 / 40%), transparent)" }}
                    />
                  </div>
                  <h2
                    className="text-2xl md:text-3xl font-bold mb-1"
                    style={{
                      fontFamily: "'Playfair Display', serif",
                      color: "oklch(0.94 0.02 80)",
                      fontStyle: "italic",
                    }}
                  >
                    {poem.title}
                  </h2>
                  <p
                    className="text-xs font-semibold tracking-widest uppercase"
                    style={{ color: "oklch(0.60 0.12 60)", fontFamily: "'Lato', sans-serif" }}
                  >
                    by Jackie Padgett
                  </p>
                </div>

                {/* Poem body */}
                <div
                  className="pl-6 border-l-2"
                  style={{ borderColor: "oklch(0.72 0.18 65 / 30%)" }}
                >
                  {poem.lines.map((line, lineIdx) =>
                    line === "" ? (
                      <div key={lineIdx} className="h-5" />
                    ) : (
                      <p
                        key={lineIdx}
                        className="poem-text text-base md:text-lg"
                        style={{ color: "oklch(0.85 0.02 78)" }}
                      >
                        {line}
                      </p>
                    )
                  )}
                </div>
              </article>
            ))}
          </div>

          {/* Divider */}
          <div className="max-w-3xl mx-auto mt-20 pt-10 border-t text-center" style={{ borderColor: "oklch(0.72 0.18 65 / 15%)" }}>
            <p
              className="poem-text text-lg mb-6"
              style={{ color: "oklch(0.72 0.18 65)" }}
            >
              "Music moves through the heart and mind turning quiet moments into feeling and chaos into rhythm."
            </p>
            <p
              className="text-xs font-semibold tracking-widest uppercase"
              style={{ color: "oklch(0.55 0.04 65)", fontFamily: "'Lato', sans-serif" }}
            >
              — Jackie Padgett
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
