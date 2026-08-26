// Footer — Warm Americana Roadhouse design
// Exact-copy rule: preserve the original mark, approved labels, public links, pricing copy, and copyright treatment.

import { Link } from "wouter";
import { Music2 } from "lucide-react";

const LOGO_URL = "/manus-storage/jackie-logo-icon-kRWDYMtJQCydpd4dHudsyw_23347155.webp";

export default function Footer() {
  return (
    <footer
      className="relative border-t"
      style={{
        background: "oklch(0.14 0.04 38)",
        borderColor: "oklch(0.72 0.18 65 / 15%)",
      }}
    >
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <img src={LOGO_URL} alt="Logo" className="w-8 h-8 object-contain" />
              <div>
                <div
                  className="font-bold text-base"
                  style={{ fontFamily: "'Playfair Display', serif", color: "oklch(0.94 0.02 80)" }}
                >
                  Jackie Padgett
                </div>
                <div
                  className="text-xs tracking-widest uppercase"
                  style={{ color: "oklch(0.72 0.18 65)", fontFamily: "'Lato', sans-serif" }}
                >
                  Music
                </div>
              </div>
            </div>
            <p
              className="text-sm leading-relaxed"
              style={{ color: "oklch(0.65 0.04 70)", fontFamily: "'Lato', sans-serif" }}
            >
              Songs that carry what words alone can't hold. Heartfelt country &amp; americana music from the heart of Oklahoma.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4
              className="text-xs font-bold tracking-widest uppercase mb-4"
              style={{ color: "oklch(0.72 0.18 65)", fontFamily: "'Lato', sans-serif" }}
            >
              Navigate
            </h4>
            <ul className="space-y-2">
              {[
                { href: "/", label: "Home" },
                { href: "/music", label: "Music & Songs" },
                { href: "/poems", label: "Poems" },
                { href: "/about", label: "About Jackie" },
              ].map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-sm transition-colors hover:text-amber-400"
                    style={{ color: "oklch(0.72 0.04 70)", fontFamily: "'Lato', sans-serif" }}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Listen & Connect */}
          <div>
            <h4
              className="text-xs font-bold tracking-widest uppercase mb-4"
              style={{ color: "oklch(0.72 0.18 65)", fontFamily: "'Lato', sans-serif" }}
            >
              Listen & Connect
            </h4>
            <a
              href="https://suno.com/@jackiepadgettmusic"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm mb-3 transition-colors"
              style={{ color: "oklch(0.72 0.04 70)", fontFamily: "'Lato', sans-serif" }}
            >
              <Music2 size={14} style={{ color: "oklch(0.72 0.18 65)" }} />
              Listen on Suno
            </a>
            <br />
            <a
              href="https://www.facebook.com/jackie.padgett.58"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm transition-colors"
              style={{ color: "oklch(0.72 0.04 70)", fontFamily: "'Lato', sans-serif" }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="oklch(0.72 0.18 65)">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
              </svg>
              Facebook
            </a>
            <p
              className="mt-4 text-xs leading-relaxed"
              style={{ color: "oklch(0.55 0.03 65)", fontFamily: "'Lato', sans-serif" }}
            >
              Songs available for download at $1.29 each. Own the music, play it whenever you want.
            </p>
          </div>
        </div>

        <div
          className="mt-10 pt-6 border-t text-center text-xs"
          style={{
            borderColor: "oklch(0.72 0.18 65 / 10%)",
            color: "oklch(0.50 0.03 65)",
            fontFamily: "'Lato', sans-serif",
          }}
        >
          © {new Date().getFullYear()} Jackie Padgett Music. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
