// NavBar — Warm Americana Roadhouse design
// Sticky top nav that transitions from transparent to dark mahogany on scroll
// Exact-copy rule: preserve the original mark, desktop/mobile navigation, active state, and scroll treatment.

import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";

const LOGO_URL = "/manus-storage/jackie-logo-icon-kRWDYMtJQCydpd4dHudsyw_23347155.webp";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/music", label: "Music" },
  { href: "/poems", label: "Poems" },
  { href: "/about", label: "About" },
];

export default function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close menu on navigation
  useEffect(() => setMenuOpen(false), [location]);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled
          ? "oklch(0.16 0.04 40 / 0.97)"
          : "linear-gradient(to bottom, oklch(0.12 0.03 40 / 0.85), transparent)",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? "1px solid oklch(0.72 0.18 65 / 15%)" : "none",
      }}
    >
      <div className="container flex items-center justify-between h-16">
        {/* Logo + Brand */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <img
            src={LOGO_URL}
            alt="Jackie Padgett Music Logo"
            className="w-9 h-9 object-contain"
          />
          <div className="flex flex-col leading-none">
            <span
              className="font-bold text-base tracking-wide"
              style={{
                fontFamily: "'Playfair Display', serif",
                color: "oklch(0.94 0.02 80)",
              }}
            >
              Jackie Padgett
            </span>
            <span
              className="text-xs tracking-widest uppercase"
              style={{ color: "oklch(0.72 0.18 65)", fontFamily: "'Lato', sans-serif" }}
            >
              Music
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map(({ href, label }) => {
            const active = location === href;
            return (
              <Link
                key={href}
                href={href}
                className="px-4 py-2 rounded text-sm font-semibold tracking-wide transition-all duration-200"
                style={{
                  fontFamily: "'Lato', sans-serif",
                  color: active ? "oklch(0.72 0.18 65)" : "oklch(0.88 0.02 80)",
                  background: active ? "oklch(0.72 0.18 65 / 12%)" : "transparent",
                  letterSpacing: "0.05em",
                }}
              >
                {label}
              </Link>
            );
          })}
          <a
            href="/music"
            className="ml-3 px-5 py-2 rounded text-sm font-bold tracking-wide transition-all duration-200 active:scale-95"
            style={{
              fontFamily: "'Lato', sans-serif",
              background: "oklch(0.72 0.18 65)",
              color: "oklch(0.15 0.03 40)",
              letterSpacing: "0.05em",
            }}
          >
            Buy Songs
          </a>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(v => !v)}
          aria-label="Toggle menu"
        >
          <span
            className="block w-6 h-0.5 transition-all duration-200"
            style={{
              background: "oklch(0.88 0.02 80)",
              transform: menuOpen ? "rotate(45deg) translate(4px, 4px)" : "none",
            }}
          />
          <span
            className="block w-6 h-0.5 transition-all duration-200"
            style={{
              background: "oklch(0.88 0.02 80)",
              opacity: menuOpen ? 0 : 1,
            }}
          />
          <span
            className="block w-6 h-0.5 transition-all duration-200"
            style={{
              background: "oklch(0.88 0.02 80)",
              transform: menuOpen ? "rotate(-45deg) translate(4px, -4px)" : "none",
            }}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div
          className="md:hidden border-t"
          style={{
            background: "oklch(0.16 0.04 40 / 0.98)",
            borderColor: "oklch(0.72 0.18 65 / 20%)",
          }}
        >
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="block px-6 py-3.5 text-sm font-semibold tracking-wide border-b transition-colors"
              style={{
                fontFamily: "'Lato', sans-serif",
                color: location === href ? "oklch(0.72 0.18 65)" : "oklch(0.88 0.02 80)",
                borderColor: "oklch(0.72 0.18 65 / 10%)",
              }}
            >
              {label}
            </Link>
          ))}
          <div className="px-6 py-4">
            <a
              href="/music"
              className="block text-center px-5 py-3 rounded text-sm font-bold tracking-wide"
              style={{
                background: "oklch(0.72 0.18 65)",
                color: "oklch(0.15 0.03 40)",
                fontFamily: "'Lato', sans-serif",
              }}
            >
              Buy Songs — $1.29 each
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
