// Home Page — Jackie Padgett Music
// Warm Americana Roadhouse design
// Hero with full-bleed stage photo, featured songs, about teaser, poems teaser

/** Exact-copy page: preserve the live hero composition, section order, Playfair/Lato hierarchy, amber accents, and source motion. */
import { Link } from "wouter";
import { ChevronRight, Music2, BookOpen, User } from "lucide-react";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import SongCard from "@/components/SongCard";
import { uniqueSongs } from "@/lib/songs";

const HERO_BG = "/assets/jackie-hero-bg-N8ZNAqrmwEWFteESJzHbg5.webp";
const JACKIE_PHOTO = "/assets/jackie-photo.png";
const OKLAHOMA_BG = "/assets/jackie-about-bg-BLyktp7yJCvay8T9SndkY6.webp";

const featuredSongs = uniqueSongs.filter(s => s.featured).slice(0, 5);

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col" style={{ background: "oklch(0.18 0.04 40)" }}>
      <NavBar />

      {/* ── HERO ── */}
      <section className="relative min-h-screen flex items-end overflow-hidden">
        {/* Background image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${HERO_BG})` }}
        />
        {/* Gradient overlays */}
        <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, oklch(0.12 0.03 40 / 0.4) 0%, oklch(0.12 0.03 40 / 0.1) 40%, oklch(0.15 0.04 40 / 0.85) 80%, oklch(0.18 0.04 40) 100%)" }} />

        {/* Hero content */}
        <div className="relative container pb-20 pt-32">
          <div className="max-w-2xl">
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
              729+ Original Songs
            </div>

            <h1
              className="text-5xl md:text-7xl font-bold leading-tight mb-4"
              style={{
                fontFamily: "'Playfair Display', serif",
                color: "oklch(0.96 0.02 80)",
                textShadow: "0 2px 20px oklch(0.10 0.03 40 / 0.6)",
              }}
            >
              Jackie
              <br />
              <span style={{ color: "oklch(0.72 0.18 65)", fontStyle: "italic" }}>Padgett</span>
              <br />
              Music
            </h1>

            <p
              className="text-lg md:text-xl leading-relaxed mb-8 max-w-lg"
              style={{
                color: "oklch(0.82 0.02 78)",
                fontFamily: "'Lato', sans-serif",
                textShadow: "0 1px 8px oklch(0.10 0.03 40 / 0.5)",
              }}
            >
              Songs that carry what words alone can't hold. Heartfelt country &amp; americana music — own a song for just $1.29.
            </p>

            <div className="flex flex-wrap gap-3">
              <Link
                href="/music"
                className="inline-flex items-center gap-2 px-6 py-3 rounded font-bold text-sm tracking-wide transition-all duration-150 active:scale-95"
                style={{
                  background: "oklch(0.72 0.18 65)",
                  color: "oklch(0.15 0.03 40)",
                  fontFamily: "'Lato', sans-serif",
                  boxShadow: "0 4px 20px oklch(0.72 0.18 65 / 35%)",
                }}
              >
                Browse All Songs
                <ChevronRight size={16} />
              </Link>
              <a
                href="https://suno.com/@jackiepadgettmusic"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded font-bold text-sm tracking-wide transition-all duration-150 active:scale-95"
                style={{
                  background: "oklch(0.94 0.02 80 / 10%)",
                  border: "1px solid oklch(0.94 0.02 80 / 30%)",
                  color: "oklch(0.94 0.02 80)",
                  fontFamily: "'Lato', sans-serif",
                }}
              >
                Listen Free on Suno
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── FEATURED SONGS ── */}
      <section className="py-20" style={{ background: "oklch(0.18 0.04 40)" }}>
        <div className="container">
          {/* Section header */}
          <div className="flex items-center justify-between mb-10">
            <div>
              <div
                className="text-xs font-bold tracking-widest uppercase mb-2"
                style={{ color: "oklch(0.72 0.18 65)", fontFamily: "'Lato', sans-serif" }}
              >
                ♪ Most Loved
              </div>
              <h2
                className="text-3xl md:text-4xl font-bold"
                style={{ fontFamily: "'Playfair Display', serif", color: "oklch(0.94 0.02 80)" }}
              >
                Featured Songs
              </h2>
            </div>
            <Link
              href="/music"
              className="hidden md:inline-flex items-center gap-1.5 text-sm font-semibold transition-colors"
              style={{ color: "oklch(0.72 0.18 65)", fontFamily: "'Lato', sans-serif" }}
            >
              View All {uniqueSongs.length} Songs
              <ChevronRight size={16} />
            </Link>
          </div>

          {/* Song grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {featuredSongs.map((song, i) => (
              <SongCard key={song.id} song={song} index={i} />
            ))}
          </div>

          <div className="mt-8 text-center md:hidden">
            <Link
              href="/music"
              className="inline-flex items-center gap-1.5 text-sm font-semibold"
              style={{ color: "oklch(0.72 0.18 65)", fontFamily: "'Lato', sans-serif" }}
            >
              View All {uniqueSongs.length} Songs
              <ChevronRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── SONG LYRICS TEASER ── */}
      <section
        className="py-20 relative overflow-hidden"
        style={{ background: "oklch(0.20 0.05 40)" }}
      >
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 40px, oklch(0.72 0.18 65 / 30%) 40px, oklch(0.72 0.18 65 / 30%) 41px)",
          }}
        />
        <div className="container relative">
          <div className="max-w-3xl mx-auto text-center">
            <div
              className="text-xs font-bold tracking-widest uppercase mb-3"
              style={{ color: "oklch(0.72 0.18 65)", fontFamily: "'Lato', sans-serif" }}
            >
              ♪ Song Spotlight
            </div>
            <h2
              className="text-3xl md:text-4xl font-bold mb-2"
              style={{ fontFamily: "'Playfair Display', serif", color: "oklch(0.94 0.02 80)" }}
            >
              "Her Kind of Strength"
            </h2>
            <p
              className="text-sm mb-8"
              style={{ color: "oklch(0.65 0.04 70)", fontFamily: "'Lato', sans-serif" }}
            >
              A song about the women who shaped us
            </p>

            <div
              className="text-left inline-block max-w-xl poem-text text-base"
              style={{ color: "oklch(0.82 0.02 78)" }}
            >
              <p className="mb-2">I see my grandmother in the way I pray</p>
              <p className="mb-2">In the little things I do every day</p>
              <p className="mb-2">Like holding doors and checking in</p>
              <p className="mb-6">Loving people right where they've been</p>
              <p className="mb-2 font-bold not-italic" style={{ color: "oklch(0.72 0.18 65)", fontFamily: "'Playfair Display', serif" }}>
                I wanna shine like the women before me
              </p>
              <p className="mb-2">Strong enough to carry love softly</p>
              <p className="mb-2">With open hands and an honest heart</p>
              <p>Finding beauty in the broken parts…</p>
            </div>

            <div className="mt-10">
              <Link
                href="/music"
                className="inline-flex items-center gap-2 px-6 py-3 rounded font-bold text-sm tracking-wide transition-all duration-150 active:scale-95"
                style={{
                  background: "oklch(0.72 0.18 65)",
                  color: "oklch(0.15 0.03 40)",
                  fontFamily: "'Lato', sans-serif",
                }}
              >
                Own This Song — $1.29
                <ChevronRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── ABOUT TEASER ── */}
      <section className="py-20 relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: `url(${OKLAHOMA_BG})` }}
        />
        <div className="absolute inset-0" style={{ background: "oklch(0.18 0.04 40 / 0.85)" }} />
        <div className="container relative">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Photo */}
            <div className="relative">
              <div
                className="absolute -inset-3 rounded-2xl opacity-30"
                style={{ background: "linear-gradient(135deg, oklch(0.72 0.18 65 / 40%), transparent)" }}
              />
              <img
                src={JACKIE_PHOTO}
                alt="Jackie Padgett in her music studio"
                className="relative rounded-xl w-full object-cover shadow-2xl"
                style={{ maxHeight: "480px", objectPosition: "center top" }}
              />
            </div>

            {/* Text */}
            <div>
              <div
                className="text-xs font-bold tracking-widest uppercase mb-3"
                style={{ color: "oklch(0.72 0.18 65)", fontFamily: "'Lato', sans-serif" }}
              >
                ♪ The Artist
              </div>
              <h2
                className="text-3xl md:text-4xl font-bold mb-5"
                style={{ fontFamily: "'Playfair Display', serif", color: "oklch(0.94 0.02 80)" }}
              >
                Music moves through the heart and mind
              </h2>
              <p
                className="text-base leading-relaxed mb-4"
                style={{ color: "oklch(0.78 0.03 75)", fontFamily: "'Lato', sans-serif" }}
              >
                Jackie Padgett is an Oklahoma-rooted singer-songwriter whose music turns quiet moments into feeling and chaos into rhythm. With over 729 original songs spanning americana, country pop, ballads, and gospel, her catalog is a testament to a life lived fully.
              </p>
              <p
                className="text-base leading-relaxed mb-8"
                style={{ color: "oklch(0.78 0.03 75)", fontFamily: "'Lato', sans-serif" }}
              >
                When she's not writing music, Jackie finds inspiration hiking trails and mountain biking — always chasing the next horizon, always finding something worth singing about.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded font-semibold text-sm tracking-wide transition-all duration-150 active:scale-95"
                  style={{
                    background: "oklch(0.72 0.18 65 / 15%)",
                    border: "1px solid oklch(0.72 0.18 65 / 35%)",
                    color: "oklch(0.72 0.18 65)",
                    fontFamily: "'Lato', sans-serif",
                  }}
                >
                  <User size={14} />
                  Read Her Story
                </Link>
                <Link
                  href="/poems"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded font-semibold text-sm tracking-wide transition-all duration-150 active:scale-95"
                  style={{
                    background: "oklch(0.72 0.18 65 / 15%)",
                    border: "1px solid oklch(0.72 0.18 65 / 35%)",
                    color: "oklch(0.72 0.18 65)",
                    fontFamily: "'Lato', sans-serif",
                  }}
                >
                  <BookOpen size={14} />
                  Read Her Poems
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <section
        className="py-16"
        style={{ background: "oklch(0.72 0.18 65)" }}
      >
        <div className="container text-center">
          <h2
            className="text-3xl md:text-4xl font-bold mb-3"
            style={{ fontFamily: "'Playfair Display', serif", color: "oklch(0.15 0.03 40)" }}
          >
            Own a piece of the music.
          </h2>
          <p
            className="text-base mb-8 opacity-80"
            style={{ color: "oklch(0.20 0.04 40)", fontFamily: "'Lato', sans-serif" }}
          >
            Download any song for $1.29 and listen whenever you want — no streaming required.
          </p>
          <Link
            href="/music"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded font-bold text-sm tracking-wide transition-all duration-150 active:scale-95"
            style={{
              background: "oklch(0.15 0.03 40)",
              color: "oklch(0.94 0.02 80)",
              fontFamily: "'Lato', sans-serif",
            }}
          >
            Browse All {uniqueSongs.length} Songs
            <ChevronRight size={16} />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
