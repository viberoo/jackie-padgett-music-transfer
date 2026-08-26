# Jackie Padgett Music — Exact-Copy Design Ground Truth

This project is a **source-faithful transfer**, not a redesign. The live reference at [jackiepadgettmusic.com](https://jackiepadgettmusic.com), the approved public experience, and the attached source archive are the controlling specification. Existing composition, copy, ordering, type, color, imagery, metadata, motion, and responsive behavior must be preserved rather than modernized or reinterpreted.

## Chosen Approach: Archived “Warm Oklahoma Storytelling” Source Design

**Design movement.** Intimate Nashville listening-room editorial design: low-key photographic backgrounds, warm stage lighting, dark mahogany surfaces, parchment body sections, and amber-gold accents.

**Core principles.** Preserve the low-light, storytelling atmosphere; use strong serif display hierarchy against restrained sans-serif utility copy; retain the archived page order and navigation; and keep all interaction behavior identical to the live reference.

**Color philosophy.** Near-black brown and deep mahogany establish the feel of a small listening room. Amber-gold represents stage light and is reserved for active navigation, labels, prices, and primary actions. Warm ivory and parchment prevent the site from feeling digitally cold.

**Layout paradigm.** The homepage begins with a full-viewport photographic hero and left-anchored title, then follows the source’s sequence of featured songs, lyric spotlight, artist profile, call to action, and footer. Catalog cards use the archived responsive grid and filter controls. Poems and biography keep their original editorial composition.

**Signature elements.** A small music-note eyebrow label; warm amber buttons and active states; serif italic emphasis; dark wood/mahogany panels with subtle grain; and the original Jackie Padgett symbol used at a visible size in navigation and footer.

**Interaction philosophy.** Navigation transitions from transparent over the hero to a readable solid state after scrolling. Song cards rise subtly on hover. Buttons compress on activation. The mobile menu uses the archived animated hamburger treatment. Purchase and listening actions retain the source behavior and open the corresponding Suno destination rather than introducing a new checkout flow.

**Animation.** Preserve the source’s short fade/slide entrances, 150–200 ms button and hover feedback, 500 ms song-cover zoom, and reduced-motion accommodations. Do not add new parallax, carousels, or decorative effects.

**Typography system.** Playfair Display is the display face for page titles, lyrical quotations, and major section headings. Lato is the body and interface face for navigation, labels, metadata, filters, card details, and calls to action. Weight, italics, line height, and breakpoint changes follow the archived CSS.

**Brand essence.** Heartfelt Oklahoma country and americana songs for listeners who want to keep a personal copy. Personality: warm, resilient, reflective.

**Brand voice.** Headlines are intimate and lyrical; calls to action are direct and specific. Examples from the approved source include “Songs that carry what words alone can’t hold.” and “Own a piece of the music.”

**Wordmark and logo.** Preserve the original stacked “Jackie Padgett / Music” wordmark relationship and the archived gold-on-dark graphic symbol. Do not substitute a generic music icon as the brand mark.

**Signature brand color.** Warm stage amber, expressed in the archived OKLCH accent near `oklch(0.72 0.18 65)`.

## Reference Observations

At desktop width, the homepage hero fills the initial viewport, with the brand at upper left, navigation at upper right, and the headline anchored in the lower-left quadrant over the original Bluebird Cafe image. The live homepage reports **729+ original songs**, while the public catalog presents **32 songs**. The catalog route preserves a search field and genre filters for All, Americana, Ballad, Contemporary Country, Country Gospel, and Country Pop.

Every implementation decision must answer: **Does this choice reproduce the source, or does it dilute it?** Any unavailable original asset must be reported before substitution.
