// SongCard — Warm Americana Roadhouse design
// Displays song cover art, title, genre, and a Buy $1.29 CTA
// Exact-copy rule: preserve source proportions, amber actions, Suno links, hover motion, and toast behavior.

import { useState } from "react";
import { ShoppingCart, Play, ExternalLink } from "lucide-react";
import { toast } from "sonner";
import type { Song } from "@/lib/songs";
import { SONG_PRICE } from "@/lib/songs";

interface SongCardProps {
  song: Song;
  index?: number;
}

export default function SongCard({ song, index = 0 }: SongCardProps) {
  const [imgError, setImgError] = useState(false);

  const handleBuy = (e: React.MouseEvent) => {
    e.preventDefault();
    // Open Suno page for now — in production this would integrate a payment processor
    window.open(song.sunoUrl, "_blank", "noopener,noreferrer");
    toast.success(`Opening "${song.title}" on Suno`, {
      description: "You can listen and download from Suno.",
      duration: 3000,
    });
  };

  return (
    <div
      className="song-card rounded-lg overflow-hidden group"
      style={{
        background: "oklch(0.22 0.05 40)",
        border: "1px solid oklch(0.35 0.05 45 / 40%)",
        animationDelay: `${index * 60}ms`,
        animationFillMode: "both",
      }}
    >
      {/* Cover Art */}
      <div className="relative overflow-hidden aspect-square">
        {!imgError ? (
          <img
            src={song.cover}
            alt={song.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            onError={() => setImgError(true)}
          />
        ) : (
          <div
            className="w-full h-full flex items-center justify-center"
            style={{ background: "oklch(0.26 0.06 40)" }}
          >
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="oklch(0.72 0.18 65)" strokeWidth="1.5">
              <path d="M9 18V5l12-2v13" />
              <circle cx="6" cy="18" r="3" />
              <circle cx="18" cy="16" r="3" />
            </svg>
          </div>
        )}

        {/* Hover overlay with play button */}
        <div
          className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200"
          style={{ background: "oklch(0.12 0.03 40 / 0.65)" }}
        >
          <a
            href={song.sunoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-full flex items-center justify-center transition-transform duration-150 active:scale-95"
            style={{ background: "oklch(0.72 0.18 65)" }}
            onClick={e => e.stopPropagation()}
          >
            <Play size={20} fill="oklch(0.15 0.03 40)" color="oklch(0.15 0.03 40)" />
          </a>
        </div>

        {/* Featured badge */}
        {song.featured && (
          <div
            className="absolute top-2 left-2 px-2 py-0.5 rounded text-xs font-bold tracking-wide"
            style={{
              background: "oklch(0.72 0.18 65)",
              color: "oklch(0.15 0.03 40)",
              fontFamily: "'Lato', sans-serif",
            }}
          >
            Popular
          </div>
        )}
      </div>

      {/* Info */}
      <div className="p-3.5">
        <div
          className="text-xs font-semibold tracking-widest uppercase mb-1"
          style={{ color: "oklch(0.60 0.12 60)", fontFamily: "'Lato', sans-serif" }}
        >
          {song.genre}
        </div>
        <h3
          className="font-semibold text-sm leading-snug mb-3 line-clamp-2"
          style={{
            fontFamily: "'Playfair Display', serif",
            color: "oklch(0.94 0.02 80)",
          }}
        >
          {song.title}
        </h3>

        {/* Actions */}
        <div className="flex items-center gap-2">
          <button
            onClick={handleBuy}
            className="buy-btn flex-1 flex items-center justify-center gap-1.5 py-2 rounded text-xs font-bold tracking-wide transition-all duration-150 active:scale-95"
            style={{
              background: "oklch(0.72 0.18 65)",
              color: "oklch(0.15 0.03 40)",
              fontFamily: "'Lato', sans-serif",
            }}
          >
            <ShoppingCart size={13} />
            Buy ${SONG_PRICE.toFixed(2)}
          </button>
          <a
            href={song.sunoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded transition-colors"
            style={{
              background: "oklch(0.28 0.05 40)",
              color: "oklch(0.72 0.04 70)",
            }}
            title="Listen on Suno"
          >
            <ExternalLink size={13} />
          </a>
        </div>
      </div>
    </div>
  );
}
