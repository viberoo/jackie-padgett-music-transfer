// Home Page — Jackie Padgett Music
// Warm Americana Roadhouse design
// Hero with full-bleed stage photo, featured songs, about teaser, poems teaser

/** Exact-copy page: preserve the live hero composition, section order, Playfair/Lato hierarchy, amber accents, and source motion. */
import { Link } from "wouter";
import { ChevronRight, Music2, BookOpen, User, Sparkles } from "lucide-react";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import SongCard from "@/components/SongCard";
import { uniqueSongs } from "@/lib/songs";

const HERO_BG = "/assets/jackie-hero-bg-N8ZNAqrmwEWFteESJzHbg5.webp";
const JACKIE_PHOTO = "/assets/jackie-photo.png";
const OKLAHOMA_BG = "/assets/jackie-about-bg-BLyktp7yJCvay8T9SndkY6.webp";

const featuredSongs = uniqueSongs.filter(s => s.featured).slice(0, 5);

const newAlbums = [
  {
    title: "The Woman I Became",
    description: "A warm, reflective collection about becoming, resilience, and the roads that shape us.",
    image: "/assets/album-the-woman-i-became.jpeg",
    href: "https://suno.com/album/a70f7c24-e4b9-42c9-8fd1-e1985747b784",
  },
  {
    title: "The Roads That Made Me",
    description: "Country stories rooted in open roads, hometown memories, and the heart of the journey.",
    image: "/assets/album-the-roads-that-made-me.jpeg",
    href: "https://suno.com/album/687d75f3-7dcf-4db1-94a6-7edff43f14fe",
  },
  {
    title: "The Years That Made Her",
    description: "A soulful country portrait of quiet strength, hard-earned wisdom, and a life fully lived.",
    image: "/assets/album-the-years-that-made-her.jpeg",
    href: "https://suno.com/album/144382b4-ef60-48aa-b12c-e5ee9aefabb5",
  },
  {
    title: "A Life Worth Living",
    description: "Sunlit songs celebrating gratitude, connection, and the beauty in everyday moments.",
    image: "/assets/album-a-life-worth-living.jpeg",
    href: "https://suno.com/album/80579449-d1a1-4d20-81a7-c940b3af8aac",
  },
  {
    title: "The Things We Don’t Say",
    description: "Tender songs for a simpler heart, where feeling, memory, and honesty have room to breathe.",
    image: "/assets/album-the-things-we-dont-say.jpeg",
    href: "https://suno.com/album/b72f2b3a-fd8a-4b70-82fa-585f1aea70ab",
  },
  {
    title: "Wildflower Strong",
    description: "A heartfelt new release celebrating resilience, growth, and the strength that blooms through every season.",
    image: "/assets/album-wildflower-strong.jpg",
    href: "https://distrokid.com/hyperfollow/jackiepadgettmusic/wildflower-strong?ref=release",
  },
  {
    title: "River Don’t Bend",
    description: "A flowing country release about staying true to your path and carrying on through changing waters.",
    image: "/assets/album-river-dont-bend.jpg",
    href: "https://distrokid.com/hyperfollow/jackiepadgettmusic/river-dont-bend?ref=release",
  },
  {
    title: "Built From the Hills",
    description: "A rootsy country release grounded in home, hard-earned strength, and the landscapes that shape us.",
    image: "/assets/album-built-from-the-hills.jpg",
    href: "https://distrokid.com/hyperfollow/jackiepadgettmusic/built-from-the-hills?ref=release",
  },
  {
    title: "Where the Ancestors Sing",
    description: "A reflective release honoring family, memory, and the voices that continue through generations.",
    image: "/assets/album-where-the-ancestors-sing.jpg",
    href: "https://distrokid.com/hyperfollow/jackiepadgettmusic/where-the-ancestors-sing?ref=release",
  },
  {
    title: "Momma Dragged Me There",
    description: "A story-rich country release shaped by family, perseverance, and the places that leave a mark.",
    image: "/assets/album-momma-dragged-me-there.jpg",
    href: "https://distrokid.com/hyperfollow/jackiepadgettmusic/momma-dragged-me-there?ref=release",
  },
  {
    title: "They Were Somebody Once",
    description: "A thoughtful release about remembrance, dignity, and the lives behind the stories we carry.",
    image: "/assets/album-they-were-somebody-once.jpg",
    href: "https://distrokid.com/hyperfollow/jackiepadgettmusic/they-were-somebody-once?ref=release",
  },
  {
    title: "You Had Your Chance",
    description: "A clear-eyed release about turning the page, finding your voice, and choosing what comes next.",
    image: "/assets/album-you-had-your-chance.jpg",
    href: "https://distrokid.com/hyperfollow/jackiepadgettmusic/you-had-your-chance?ref=release",
  },
  {
    title: "I See Mama in My Hands",
    description: "A tender release about inherited love, family resemblance, and the everyday ways memory lives on.",
    image: "/assets/album-i-see-mama-in-my-hands.jpg",
    href: "https://distrokid.com/hyperfollow/jackiepadgettmusic/i-see-mama-in-my-hands?ref=release",
  },
  {
    title: "She Learned to Stand",
    description: "An empowering new release about finding balance, courage, and strength after difficult seasons.",
    image: "/assets/album-she-learned-to-stand.jpg",
    href: "https://distrokid.com/hyperfollow/jackiepadgettmusic/she-learned-to-stand?ref=release",
  },
  {
    title: "The House That Raised Us",
    description: "A nostalgic release honoring the rooms, people, and small moments that make a place feel like home.",
    image: "/assets/album-the-house-that-raised-us.jpg",
    href: "https://distrokid.com/hyperfollow/jackiepadgettmusic/the-house-that-raised-us?ref=release",
  },
  {
    title: "The Things That Didn’t Break Me",
    description: "A resilient release about surviving hard chapters and discovering what remains strong on the other side.",
    image: "/assets/album-the-things-that-didnt-break-me.jpg",
    href: "https://distrokid.com/hyperfollow/jackiepadgettmusic/the-things-that-didnt-break-me?ref=release",
  },
  {
    title: "The Woman in the Window",
    description: "A cinematic release inviting reflection on distance, memory, and the quiet stories we observe.",
    image: "/assets/album-the-woman-in-the-window.jpg",
    href: "https://distrokid.com/hyperfollow/jackiepadgettmusic/the-woman-in-the-window?ref=release",
  },
  {
    title: "The Roads That Made Me",
    description: "A road-worn country release about open highways, hard lessons, and the journey into who we become.",
    image: "/assets/album-the-roads-that-made-me-distrokid.jpg",
    href: "https://distrokid.com/hyperfollow/jackiepadgettmusic/the-roads-that-made-me?ref=release",
  },
  {
    title: "If I Could Walk Through My Childhood Home One More Time",
    description: "A country ballad reflecting on childhood memories, family, and the longing to revisit a former home one more time.",
    image: "/assets/album-if-i-could-walk-through-my-childhood-home.jpg",
    href: "https://suno.com/s/RgigCejdOdQ9JsND",
  },
  {
    title: "I Wouldn’t Change a Thing",
    description: "A country-soul reflection on life’s hardships, treasured memories, and gratitude for the road behind us.",
    image: "/assets/album-i-wouldnt-change-a-thing.jpg",
    href: "https://suno.com/s/Nwm9nJleSJnj8PeG",
  },
  {
    title: "Tuesday Afternoon in October",
    description: "A warm country ballad capturing the nostalgia and quiet beauty of an ordinary October afternoon.",
    image: "/assets/album-tuesday-afternoon-in-october.jpg",
    href: "https://suno.com/s/pDUrRee511FZkDhE",
  },
  {
    title: "Some Roads Are Worth Getting Lost On",
    description: "A reflective song about an unplanned detour, small-town connection, and the memories waiting along the way home.",
    image: "/assets/album-some-roads-are-worth-getting-lost-on.jpg",
    href: "https://suno.com/s/qRVJzYnj8kT6D2bk",
  },
  {
    title: "A Little Wild, a Little Wise",
    description: "A country-soul release about embracing experience, independence, and a life still full of possibility.",
    image: "/assets/album-a-little-wild-a-little-wise.jpg",
    href: "https://suno.com/s/mxCqOwUst81j6pzL",
  },
  {
    title: "There’s Always Room at My Table",
    description: "A country and gospel song offering a welcoming place to belong for anyone feeling weary or alone.",
    image: "/assets/album-theres-always-room-at-my-table.jpg",
    href: "https://suno.com/s/G6QyaGjd7Fmk55TZ",
  },
  {
    title: "The Women Who Make Me Laugh",
    description: "A warm celebration of enduring friendship, shared memories, and the laughter that carries us through.",
    image: "/assets/album-the-women-who-make-me-laugh.jpg",
    href: "https://suno.com/s/MlT6efFEccNmdKcg",
  },
  {
    title: "Coffee Before the World Wakes Up",
    description: "A quiet country-folk ballad about savoring coffee, stillness, and a slow morning before the world begins.",
    image: "/assets/album-coffee-before-the-world-wakes-up.jpg",
    href: "https://suno.com/s/kfArRuID1waU1dEt",
  },
  {
    title: "I Know More Now, but I Need Less",
    description: "A reflective song about finding peace, gratitude, and contentment in a simpler life.",
    image: "/assets/album-i-know-more-now-but-i-need-less.jpg",
    href: "https://suno.com/s/nLF0d8jijvh2hqlh",
  },
  {
    title: "When You Stand Where I Stand",
    description: "A thoughtful song about growing older, releasing what no longer matters, and finding meaning in everyday life.",
    image: "/assets/album-when-you-stand-where-i-stand.jpg",
    href: "https://suno.com/s/fs8MVlSJ3sKbZ5GG",
  },
  {
    title: "I See My Mother in Me",
    description: "A family-centered song reflecting on a mother’s love, memory, and lessons passed across generations.",
    image: "/assets/album-i-see-my-mother-in-me.jpg",
    href: "https://suno.com/s/DroJuhhtLkAOW7PH",
  },
  {
    title: "The Older I Get, the More I Love the Quiet Things",
    description: "A country ballad about finding contentment in everyday quiet moments, family memories, and the passage of time.",
    image: "/assets/album-the-older-i-get-the-more-i-love-the-quiet-things.jpg",
    href: "https://suno.com/s/CcrnEhkBXQCruGxf",
  },
  {
    title: "The Hands That Built This House",
    description: "A reflective song about building a home by hand and the love and memories that make it meaningful.",
    image: "/assets/album-the-hands-that-built-this-house.jpg",
    href: "https://suno.com/s/Wnq7m8gymYpcSw9B",
  },
];

const amazonSongs = [
  { title: "Wildflower Strong", asin: "B0HBLSHX4Y", image: "/assets/album-wildflower-strong.jpg", href: "https://www.amazon.com/dp/B0HBLSHX4Y" },
  { title: "The Woman in the Window", asin: "B0HMJLX1RV", image: "/assets/album-the-woman-in-the-window.jpg", href: "https://www.amazon.com/dp/B0HMJLX1RV" },
  { title: "They Were Somebody Once", asin: "B0HGYQHVGB", image: "/assets/album-they-were-somebody-once.jpg", href: "https://www.amazon.com/dp/B0HGYQHVGB" },
  { title: "You Had Your Chance", asin: "B0HHRC5K4B", image: "/assets/album-you-had-your-chance.jpg", href: "https://www.amazon.com/dp/B0HHRC5K4B" },
  { title: "She Learned to Stand", asin: "B0HL6NR96J", image: "/assets/album-she-learned-to-stand.jpg", href: "https://www.amazon.com/dp/B0HL6NR96J" },
  { title: "River Don’t Bend", asin: "B0HC7L6QX3", image: "/assets/album-river-dont-bend.jpg", href: "https://www.amazon.com/dp/B0HC7L6QX3" },
  { title: "The House That Raised Us", asin: "B0HLHC2BPB", image: "/assets/album-the-house-that-raised-us.jpg", href: "https://www.amazon.com/dp/B0HLHC2BPB" },
  { title: "I See Mama in My Hands", asin: "B0HL6MQQFF", image: "/assets/album-i-see-mama-in-my-hands.jpg", href: "https://www.amazon.com/dp/B0HL6MQQFF" },
  { title: "The Cowboy He Saw in Me", asin: "B0HMS8WTGL", image: "/assets/album-the-cowboy-he-saw-in-me.jpg", href: "https://www.amazon.com/dp/B0HMS8WTGL" },
];

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
              Songs that carry what words alone can't hold. Heartfelt country &amp; americana music from the heart of Oklahoma.
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
              <a
                href="#new-albums"
                className="inline-flex items-center gap-2 px-6 py-3 rounded font-bold text-sm tracking-wide transition-all duration-150 active:scale-95"
                style={{
                  background: "oklch(0.94 0.02 80 / 10%)",
                  border: "1px solid oklch(0.94 0.02 80 / 30%)",
                  color: "oklch(0.94 0.02 80)",
                  fontFamily: "'Lato', sans-serif",
                }}
              >
                New Albums
                <ChevronRight size={16} />
              </a>
              <a
                href="#songs-on-amazon"
                className="inline-flex items-center gap-2 px-6 py-3 rounded font-bold text-sm tracking-wide transition-all duration-150 active:scale-95"
                style={{
                  background: "oklch(0.94 0.02 80 / 10%)",
                  border: "1px solid oklch(0.94 0.02 80 / 30%)",
                  color: "oklch(0.94 0.02 80)",
                  fontFamily: "'Lato', sans-serif",
                }}
              >
                Songs on Amazon
                <ChevronRight size={16} />
              </a>
              <a
                href="#featured-songs"
                className="inline-flex items-center gap-2 px-6 py-3 rounded font-bold text-sm tracking-wide transition-all duration-150 active:scale-95"
                style={{
                  background: "oklch(0.94 0.02 80 / 10%)",
                  border: "1px solid oklch(0.94 0.02 80 / 30%)",
                  color: "oklch(0.94 0.02 80)",
                  fontFamily: "'Lato', sans-serif",
                }}
              >
                Featured Songs
                <ChevronRight size={16} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── NEW ALBUMS ── */}
      <section id="new-albums" className="py-20 scroll-mt-20" style={{ background: "oklch(0.20 0.05 40)", borderTop: "1px solid oklch(0.72 0.18 65 / 14%)", borderBottom: "1px solid oklch(0.72 0.18 65 / 14%)" }}>
        <div className="container">
          <div className="max-w-2xl mb-10">
            <div
              className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase mb-3"
              style={{ color: "oklch(0.72 0.18 65)", fontFamily: "'Lato', sans-serif" }}
            >
              <Sparkles size={14} />
              Just released
            </div>
            <h2
              className="text-3xl md:text-5xl font-bold mb-4"
              style={{ fontFamily: "'Playfair Display', serif", color: "oklch(0.94 0.02 80)" }}
            >
              New Albums
            </h2>
            <p
              className="text-base md:text-lg leading-relaxed"
              style={{ color: "oklch(0.74 0.03 75)", fontFamily: "'Lato', sans-serif" }}
            >
              Explore the latest albums and releases from Jackie Padgett, filled with country stories, honest reflections, and songs for every season of the heart. Listen across Suno and major streaming services.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-5">
            {newAlbums.map(album => (
              <a
                key={album.title}
                href={album.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group block rounded-xl overflow-hidden transition-all duration-200 hover:-translate-y-1"
                style={{ background: "oklch(0.16 0.04 40)", border: "1px solid oklch(0.72 0.18 65 / 18%)" }}
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={album.image}
                    alt={`${album.title} album artwork`}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-4">
                  <h3
                    className="font-bold leading-tight mb-2"
                    style={{ fontFamily: "'Playfair Display', serif", color: "oklch(0.94 0.02 80)" }}
                  >
                    {album.title}
                  </h3>
                  <p
                    className="text-xs leading-relaxed mb-3"
                    style={{ color: "oklch(0.68 0.04 70)", fontFamily: "'Lato', sans-serif" }}
                  >
                    {album.description}
                  </p>
                  <span
                    className="inline-flex items-center gap-1 text-xs font-bold tracking-wide"
                    style={{ color: "oklch(0.72 0.18 65)", fontFamily: "'Lato', sans-serif" }}
                  >
                    Listen on Suno <ChevronRight size={13} />
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── SONGS ON AMAZON ── */}
      <section id="songs-on-amazon" className="py-20 scroll-mt-20" style={{ background: "oklch(0.18 0.04 40)", borderBottom: "1px solid oklch(0.72 0.18 65 / 14%)" }}>
        <div className="container">
          <div className="max-w-2xl mb-10">
            <div
              className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase mb-3"
              style={{ color: "oklch(0.72 0.18 65)", fontFamily: "'Lato', sans-serif" }}
            >
              <Music2 size={14} />
              Also available on Amazon
            </div>
            <h2
              className="text-3xl md:text-5xl font-bold mb-4"
              style={{ fontFamily: "'Playfair Display', serif", color: "oklch(0.94 0.02 80)" }}
            >
              Songs on Amazon
            </h2>
            <p
              className="text-base md:text-lg leading-relaxed"
              style={{ color: "oklch(0.74 0.03 75)", fontFamily: "'Lato', sans-serif" }}
            >
              Find more Jackie Padgett music on Amazon Music.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-5">
            {amazonSongs.map(song => (
              <a
                key={song.asin}
                href={song.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group block rounded-xl p-5 transition-all duration-200 hover:-translate-y-1"
                style={{ background: "oklch(0.20 0.05 40)", border: "1px solid oklch(0.72 0.18 65 / 18%)" }}
              >
                <div className="flex items-center justify-center aspect-square rounded-lg mb-4 overflow-hidden" style={{ background: "oklch(0.72 0.18 65 / 12%)", color: "oklch(0.72 0.18 65)" }}>
                  {song.image ? (
                    <img src={song.image} alt={`${song.title} album artwork`} className="w-full h-full object-cover" />
                  ) : (
                    <Music2 size={38} strokeWidth={1.5} aria-hidden="true" />
                  )}
                </div>
                <h3
                  className="font-bold leading-tight mb-2"
                  style={{ fontFamily: "'Playfair Display', serif", color: "oklch(0.94 0.02 80)" }}
                >
                  {song.title}
                </h3>
                <p
                  className="text-xs leading-relaxed mb-3"
                  style={{ color: "oklch(0.62 0.04 70)", fontFamily: "'Lato', sans-serif" }}
                >
                  Amazon Music · {song.asin}
                </p>
                <span
                  className="inline-flex items-center gap-1 text-xs font-bold tracking-wide"
                  style={{ color: "oklch(0.72 0.18 65)", fontFamily: "'Lato', sans-serif" }}
                >
                  Listen on Amazon <ChevronRight size={13} />
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── FEATURED SONGS ── */}
      <section id="featured-songs" className="py-20 scroll-mt-20" style={{ background: "oklch(0.18 0.04 40)" }}>
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
                Listen to Song
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
            Listen to the music.
          </h2>
          <p
            className="text-base mb-8 opacity-80"
            style={{ color: "oklch(0.20 0.04 40)", fontFamily: "'Lato', sans-serif" }}
          >
            Listen to any song on Suno and discover music that stays with you.
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
