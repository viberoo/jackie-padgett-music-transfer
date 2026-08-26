# Transfer Manifest

## Source Material

| Item | Ground truth | Status |
| --- | --- | --- |
| Source archive | `JackiePadgettMusicWebpageFeaturingSongsforSale.zip` | Integrity verified; 15 files; no traversal or absolute paths; extracted only for passive inspection |
| Live reference | `https://jackiepadgettmusic.com` | Reachable and inspected |
| Archived local image | `musicproduce2.png`, 1122 × 1402 PNG | Original media identified for managed-asset migration |
| Remote source images | Jackie portrait, hero, poems background, about background, logo, and 32 Suno covers | Must be copied into destination-managed assets rather than hotlinked |

## Public Routes

| Route | Source component | Public purpose |
| --- | --- | --- |
| `/` | `Home.tsx` | Full homepage with hero, featured songs, lyric spotlight, artist introduction, call to action, and footer |
| `/music` | `Music.tsx` | Searchable and genre-filterable 32-song catalog |
| `/poems` | `Poems.tsx` | Jackie Padgett poetry collection |
| `/about` | `About.tsx` | Biography, imagery, interests, and links |
| `/404` and fallback | Template `NotFound` page | Unknown-route handling |

## Public Functionality

The archived project is a static React/Wouter website. It contains no form submission, login, map, database, protected route, or native payment integration. Each “Buy $1.29” action opens that song’s Suno page and displays an informational toast; listen links also open Suno. Public outbound links include Jackie Padgett’s Suno profile and public Facebook profile. The catalog supports client-side title search and genre filtering. The navigation includes desktop and mobile states plus scroll-dependent styling.

## Metadata Observed

The approved title is **“Jackie Padgett Music — Original Country & Americana Songs.”** The archived description reads: **“Jackie Padgett is an Oklahoma singer-songwriter with 700+ original country, americana, and ballad songs available for download at $1.29 each.”** The site uses Playfair Display and Lato from Google Fonts.

## Live Route Observations

The `/poems` route opens with the eyebrow “Written Words,” the title “Poems,” and the approved subtitle about words growing from the same soil as the music. It presents four numbered poems in this order: **The Women Before Me**, **Built Country Strong**, **She Holds Her Ground**, and **Sunlight in My Pockets**. The page closes with Jackie’s quotation about music moving through the heart and mind, followed by the shared footer.

The `/about` route opens with “The Artist,” the title “About Jackie,” and the approved Oklahoma-roots subtitle. Its first body section pairs Jackie’s studio portrait and a 729+ badge with the heading “Songs that carry what words alone can’t hold,” two biography paragraphs, Jackie’s music philosophy, a paragraph about hiking and mountain biking, and links to the catalog and Facebook. The next section, “What Fuels the Music,” contains Music, Hiking, and Mountain Biking entries, followed by a quotation from “The Women Before Me” and a link to the poems route.

Across the four primary routes, the same dark, amber-accented navigation and footer are preserved. The desktop homepage hero uses the original low-key Bluebird Cafe photograph with the title anchored at lower left. The music route has a compact centered hero, then a search field, six genre controls, a “Showing 32 songs” counter, and the responsive card grid. The live public site exposes no additional primary route in its header or footer navigation.

## Exclusions

No `.env` files, credentials, secrets, `node_modules`, compiled output, caches, logs, or source `.git` history are copied into the destination project.

## Destination Render Checks

The migrated homepage renders the same approved title, 729+ label, hero copy, primary actions, five featured songs, lyric spotlight, artist portrait section, closing call to action, navigation, footer, and metadata as the live reference. The hero, portrait, logo, section backgrounds, and cover artwork resolve from destination-managed `/manus-storage/` paths.

The destination music route reports 32 original songs and displays the same six genre controls, search field, result counter, ordered song cards, featured badges, $1.29 actions, Suno destinations, how-it-works section, and footer as the live reference. A source audit confirms no runtime image reference remains to the previous account CDN or Suno cover host.

Catalog search was exercised in the rendered destination: entering “Smile” reduced the result set to the single approved card **Smile While We’re Here** and updated the count copy to “Showing 1 song matching ‘Smile’”; clearing the field restored all 32 cards. This matches the archived client-side interaction.

The Americana genre control reduced the destination catalog to the same five first-occurrence records retained by the archived ID deduplication logic. The first filtered “Buy $1.29” action opened the expected public Suno route for **Red Dirt Rhythm** (`https://suno.com/song/6edafbd5-3510-4702-8a69-473fa0ce34a8`), confirming that the source’s handoff behavior is preserved and that no native checkout was introduced.

Full-page destination screenshots were reviewed for `/`, `/music`, `/poems`, and `/about` at **1280 × 720** and **375 × 812**. The desktop captures retain the source’s hero proportions, section ordering, six-column catalog maximum, editorial poem width, portrait-led biography, and shared footer. The mobile captures retain the hamburger header, two-column song cards, stacked homepage sections, legible poem measure, stacked hobby cards, full-width portrait treatment, and source footer flow without clipping or horizontal overflow.

## Final Validation Status

TypeScript validation and the production build complete successfully. The final build emits only Vite’s advisory about the size of the single client bundle; it reports no type, dependency, stylesheet, or compilation failure. All 37 original visual assets uploaded successfully to destination-managed storage, and the public experience requires no missing file, credential, or third-party configuration to reproduce the archived site’s current behavior.

The destination is ready for a new GitHub connection from the project interface. The source account’s `.git` history was intentionally not copied.
