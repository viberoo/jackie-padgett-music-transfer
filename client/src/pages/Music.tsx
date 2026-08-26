// Music Page — Jackie Padgett Music
// Full song catalog with genre filtering and search
// Warm Americana Roadhouse design
// Exact-copy rule: preserve the compact catalog hero, source controls, 32-song grid, and Suno behavior.

import { useState, useMemo } from "react";
import { Search, Music2 } from "lucide-react";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import SongCard from "@/components/SongCard";
import { uniqueSongs, genres, SONG_PRICE } from "@/lib/songs";

const HERO_BG = "/manus-storage/jackie-hero-bg-N8ZNAqrmwEWFteESJzHbg5_03ec5d58.webp";

export default function Music() {
  const [activeGenre, setActiveGenre] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filtered = useMemo(() => {
    let list = uniqueSongs;
    if (activeGenre !== "All") {
      list = list.filter(s => s.genre === activeGenre);
    }
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      list = list.filter(s =>
        s.title.toLowerCase().includes(q) ||
        s.genre.toLowerCase().includes(q)
      );
    }
    return list;
  }, [activeGenre, searchQuery]);

  return (
    <div className="min-h-screen flex flex-col" style={{ background: "oklch(0.18 0.04 40)" }}>
      <NavBar />

      {/* ── PAGE HERO ── */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-25"
          style={{ backgroundImage: `url(${HERO_BG})` }}
        />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, oklch(0.14 0.04 38 / 0.7), oklch(0.18 0.04 40))" }} />
        <div className="container relative text-center">
          <div
            className="inline-flex items-center gap-2 mb-4 px-3 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase"
            style={{
              background: "oklch(0.72 0.18 65 / 15%)",
              border: "1px solid oklch(0.72 0.18 65 / 30%)",
              color: "oklch(0.72 0.18 65)",
              fontFamily: "'Lato', sans-serif",
            }}
          >
            <Music2 size={12} />
            {uniqueSongs.length} Original Songs
          </div>
          <h1
            className="text-4xl md:text-6xl font-bold mb-4"
            style={{ fontFamily: "'Playfair Display', serif", color: "oklch(0.94 0.02 80)" }}
          >
            The Music
          </h1>
          <p
            className="text-base md:text-lg max-w-xl mx-auto"
            style={{ color: "oklch(0.75 0.03 75)", fontFamily: "'Lato', sans-serif" }}
          >
            Every song available for download at <strong style={{ color: "oklch(0.72 0.18 65)" }}>${SONG_PRICE.toFixed(2)}</strong>. Listen on Suno, then own it forever.
          </p>
        </div>
      </section>

      {/* ── FILTERS ── */}
      <section className="sticky top-16 z-40 py-4" style={{ background: "oklch(0.18 0.04 40 / 0.97)", backdropFilter: "blur(12px)", borderBottom: "1px solid oklch(0.72 0.18 65 / 12%)" }}>
        <div className="container">
          <div className="flex flex-col sm:flex-row gap-3 items-start sm:items-center">
            {/* Search */}
            <div className="relative flex-1 max-w-xs">
              <Search
                size={14}
                className="absolute left-3 top-1/2 -translate-y-1/2"
                style={{ color: "oklch(0.60 0.04 65)" }}
              />
              <input
                type="text"
                placeholder="Search songs…"
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                className="w-full pl-8 pr-3 py-2 rounded text-sm outline-none"
                style={{
                  background: "oklch(0.24 0.05 40)",
                  border: "1px solid oklch(0.35 0.05 45 / 40%)",
                  color: "oklch(0.94 0.02 80)",
                  fontFamily: "'Lato', sans-serif",
                }}
              />
            </div>

            {/* Genre pills */}
            <div className="flex flex-wrap gap-2">
              {genres.map(genre => (
                <button
                  key={genre}
                  onClick={() => setActiveGenre(genre)}
                  className="px-3 py-1.5 rounded-full text-xs font-semibold tracking-wide transition-all duration-150 active:scale-95"
                  style={{
                    background: activeGenre === genre ? "oklch(0.72 0.18 65)" : "oklch(0.24 0.05 40)",
                    color: activeGenre === genre ? "oklch(0.15 0.03 40)" : "oklch(0.72 0.04 70)",
                    border: activeGenre === genre ? "1px solid transparent" : "1px solid oklch(0.35 0.05 45 / 40%)",
                    fontFamily: "'Lato', sans-serif",
                  }}
                >
                  {genre}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── SONG GRID ── */}
      <section className="py-12 flex-1">
        <div className="container">
          {/* Result count */}
          <p
            className="text-xs mb-6"
            style={{ color: "oklch(0.60 0.04 65)", fontFamily: "'Lato', sans-serif" }}
          >
            Showing {filtered.length} song{filtered.length !== 1 ? "s" : ""}
            {activeGenre !== "All" ? ` in ${activeGenre}` : ""}
            {searchQuery ? ` matching "${searchQuery}"` : ""}
          </p>

          {filtered.length === 0 ? (
            <div className="text-center py-20">
              <Music2 size={40} className="mx-auto mb-4" style={{ color: "oklch(0.45 0.04 60)" }} />
              <p style={{ color: "oklch(0.60 0.04 65)", fontFamily: "'Lato', sans-serif" }}>
                No songs found. Try a different search or genre.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
              {filtered.map((song, i) => (
                <SongCard key={`${song.id}-${i}`} song={song} index={i} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section
        className="py-16"
        style={{ background: "oklch(0.20 0.05 40)", borderTop: "1px solid oklch(0.72 0.18 65 / 12%)" }}
      >
        <div className="container">
          <h2
            className="text-2xl md:text-3xl font-bold text-center mb-10"
            style={{ fontFamily: "'Playfair Display', serif", color: "oklch(0.94 0.02 80)" }}
          >
            How to Get Your Song
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            {[
              { step: "1", title: "Find Your Song", desc: "Browse the catalog above and click any song you love." },
              { step: "2", title: "Listen on Suno", desc: "Preview the full song for free on Suno before you buy." },
              { step: "3", title: "Download for $1.29", desc: "Purchase the download directly on Suno and own it forever." },
            ].map(({ step, title, desc }) => (
              <div key={step} className="text-center">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-lg font-bold"
                  style={{
                    background: "oklch(0.72 0.18 65 / 15%)",
                    border: "2px solid oklch(0.72 0.18 65 / 40%)",
                    color: "oklch(0.72 0.18 65)",
                    fontFamily: "'Playfair Display', serif",
                  }}
                >
                  {step}
                </div>
                <h3
                  className="font-bold mb-2"
                  style={{ fontFamily: "'Playfair Display', serif", color: "oklch(0.94 0.02 80)" }}
                >
                  {title}
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "oklch(0.68 0.04 70)", fontFamily: "'Lato', sans-serif" }}
                >
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
