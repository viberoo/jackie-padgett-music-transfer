// Jackie Padgett Music — Song Catalog
// Exact-copy content: preserves archived ordering, duplicate IDs, genre labels, featured flags, $1.29 price, and Suno destinations.
// Cover art is served only from destination-managed assets; no prior-account or third-party image hotlinks remain.

export interface Song {
  id: string;
  title: string;
  cover: string;
  sunoUrl: string;
  genre: string;
  featured?: boolean;
}

export const SONG_PRICE = 1.29;

const COVER_BY_ID: Record<string, string> = {
  "0140198e-547b-4a06-b82b-cc5ac72ccbb7": "/manus-storage/image_0140198e-547b-4a06-b82b-cc5ac72ccbb7_29dafda0.jpeg",
  "0a1858e9-b6fc-43e4-8655-2e6e06c11a27": "/manus-storage/image_0a1858e9-b6fc-43e4-8655-2e6e06c11a27_32a17139.jpeg",
  "0e80d12f-0e1d-4056-878a-85693524a977": "/manus-storage/image_0e80d12f-0e1d-4056-878a-85693524a977_77f1939d.jpeg",
  "39c43e3b-e8d8-43e2-9943-62e351b45d0e": "/manus-storage/image_39c43e3b-e8d8-43e2-9943-62e351b45d0e_b5fb97a5.jpeg",
  "4871b9da-c61a-4c75-bbc5-8fa593118f79": "/manus-storage/image_4871b9da-c61a-4c75-bbc5-8fa593118f79_8e7be181.jpeg",
  "49da6bf5-d034-4e7b-8455-7a36c12b778b": "/manus-storage/image_49da6bf5-d034-4e7b-8455-7a36c12b778b_4456496c.jpeg",
  "4ab57f90-fb54-4405-b2c1-4d9e1ae8256e": "/manus-storage/image_4ab57f90-fb54-4405-b2c1-4d9e1ae8256e_2ee2efdd.jpeg",
  "538d684d-fcdc-4587-8188-9bdce612ba04": "/manus-storage/image_538d684d-fcdc-4587-8188-9bdce612ba04_f23b0e11.jpeg",
  "5d5d69db-aeb3-4e50-804f-2fee78f97ae5": "/manus-storage/image_5d5d69db-aeb3-4e50-804f-2fee78f97ae5_04708158.jpeg",
  "60aad27c-7b2c-4477-9bab-292856a36452": "/manus-storage/image_60aad27c-7b2c-4477-9bab-292856a36452_82c21e49.jpeg",
  "68e680d6-0789-44ba-b04c-a21c0df78dbd": "/manus-storage/image_68e680d6-0789-44ba-b04c-a21c0df78dbd_cd4a6c15.jpeg",
  "6edafbd5-3510-4702-8a69-473fa0ce34a8": "/manus-storage/image_6edafbd5-3510-4702-8a69-473fa0ce34a8_28a2f6f7.jpeg",
  "75040cc0-2804-4e50-93cf-6408d1de3b0c": "/manus-storage/image_75040cc0-2804-4e50-93cf-6408d1de3b0c_949c8450.jpeg",
  "84ca8a3e-9848-4606-88b6-30d9fadd1d20": "/manus-storage/image_84ca8a3e-9848-4606-88b6-30d9fadd1d20_8837bb12.jpeg",
  "8bdbe4db-895c-442a-83af-2cf0e05a136b": "/manus-storage/image_8bdbe4db-895c-442a-83af-2cf0e05a136b_8e202596.jpeg",
  "97a94898-a474-4f84-8b93-2d65d8c0d24c": "/manus-storage/image_97a94898-a474-4f84-8b93-2d65d8c0d24c_1a4ece36.jpeg",
  "9c27c991-2880-401c-8198-8f6ccd8da0b3": "/manus-storage/image_9c27c991-2880-401c-8198-8f6ccd8da0b3_ad0418a8.jpeg",
  "aa430a10-1089-4d31-a7ed-465ba5de3211": "/manus-storage/image_aa430a10-1089-4d31-a7ed-465ba5de3211_0f7c3c9b.jpeg",
  "ace895c6-15e4-44a6-b9ef-c6b55f69b0d5": "/manus-storage/image_ace895c6-15e4-44a6-b9ef-c6b55f69b0d5_b1ba6ce1.jpeg",
  "adbbed26-585a-4255-b630-337c5a28d263": "/manus-storage/image_adbbed26-585a-4255-b630-337c5a28d263_16c4ff3a.jpeg",
  "ae1fed86-85b1-4564-8d8f-3cabda0936f6": "/manus-storage/image_ae1fed86-85b1-4564-8d8f-3cabda0936f6_ee501443.jpeg",
  "ae6aacbd-6e4c-443c-a044-e4d29fe45934": "/manus-storage/image_ae6aacbd-6e4c-443c-a044-e4d29fe45934_fb1c2f00.jpeg",
  "b4cc5815-a0fd-487d-abb9-2d1dad255bb9": "/manus-storage/image_b4cc5815-a0fd-487d-abb9-2d1dad255bb9_c9f913a0.jpeg",
  "bfeac878-5872-4c8e-adc9-83a342a540d6": "/manus-storage/image_bfeac878-5872-4c8e-adc9-83a342a540d6_da73982c.jpeg",
  "c90095c2-c25f-4439-936a-8577335ebadd": "/manus-storage/image_c90095c2-c25f-4439-936a-8577335ebadd_77ee5b69.jpeg",
  "e4def3f4-c943-4e88-9e7a-c33920554b85": "/manus-storage/image_e4def3f4-c943-4e88-9e7a-c33920554b85_b609b6b9.jpeg",
  "e8452ac0-175c-4f5e-bdf2-2238af3db264": "/manus-storage/image_e8452ac0-175c-4f5e-bdf2-2238af3db264_40a5158a.jpeg",
  "e85ac312-efb1-451c-aab5-f70bb07b3cc8": "/manus-storage/image_e85ac312-efb1-451c-aab5-f70bb07b3cc8_d519d007.jpeg",
  "e9f6b4cc-909d-44f8-bd2f-36f2f9409828": "/manus-storage/image_e9f6b4cc-909d-44f8-bd2f-36f2f9409828_6bda790e.jpeg",
  "eb1180bf-8f89-4c3c-831b-d6c7b8f32213": "/manus-storage/image_eb1180bf-8f89-4c3c-831b-d6c7b8f32213_6ea726ef.jpeg",
  "ec670d7c-79b1-49e9-b954-7863eeb87531": "/manus-storage/image_ec670d7c-79b1-49e9-b954-7863eeb87531_3fc17a2c.jpeg",
  "fa65bf9f-80e6-4b64-a68e-5bbcba77e3c8": "/manus-storage/image_fa65bf9f-80e6-4b64-a68e-5bbcba77e3c8_112367f7.jpeg",
};

type CatalogSeed = readonly [id: string, title: string, genre: string, featured?: boolean];

const catalogSeeds: CatalogSeed[] = [
  ["84ca8a3e-9848-4606-88b6-30d9fadd1d20", "Smile While We're Here", "Contemporary Country", true],
  ["aa430a10-1089-4d31-a7ed-465ba5de3211", "Wake Up With a Good Vibe", "Country Pop", true],
  ["6edafbd5-3510-4702-8a69-473fa0ce34a8", "Red Dirt Rhythm", "Americana", true],
  ["0a1858e9-b6fc-43e4-8655-2e6e06c11a27", "Laugh & Live", "Country Pop", true],
  ["ec670d7c-79b1-49e9-b954-7863eeb87531", "You're Leading Me", "Ballad", true],
  ["5d5d69db-aeb3-4e50-804f-2fee78f97ae5", "Choose Your Circle", "Contemporary Country"],
  ["c90095c2-c25f-4439-936a-8577335ebadd", "Choose the Bright Side", "Country Pop"],
  ["4ab57f90-fb54-4405-b2c1-4d9e1ae8256e", "Start It Smiling", "Contemporary Country"],
  ["fa65bf9f-80e6-4b64-a68e-5bbcba77e3c8", "Dream It Into Reality", "Country Pop"],
  ["0140198e-547b-4a06-b82b-cc5ac72ccbb7", "I Leave It With You", "Ballad"],
  ["4871b9da-c61a-4c75-bbc5-8fa593118f79", "Wildflower Heart", "Ballad"],
  ["ace895c6-15e4-44a6-b9ef-c6b55f69b0d5", "Midnight Texts", "Contemporary Country"],
  ["ae1fed86-85b1-4564-8d8f-3cabda0936f6", "Red Dirt Gravel", "Americana"],
  ["e4def3f4-c943-4e88-9e7a-c33920554b85", "Cowgirl Up", "Americana"],
  ["bfeac878-5872-4c8e-adc9-83a342a540d6", "Eight Seconds of Thunder", "Americana"],
  ["e8452ac0-175c-4f5e-bdf2-2238af3db264", "Front Porch Faith", "Country Gospel"],
  ["8bdbe4db-895c-442a-83af-2cf0e05a136b", "Stay Until the Morning", "Contemporary Country"],
  ["68e680d6-0789-44ba-b04c-a21c0df78dbd", "Dance With My Heart", "Country Pop"],
  ["97a94898-a474-4f84-8b93-2d65d8c0d24c", "The Way You Look at Me", "Ballad"],
  ["ae6aacbd-6e4c-443c-a044-e4d29fe45934", "Loved Without Condition", "Ballad"],
  ["0e80d12f-0e1d-4056-878a-85693524a977", "Kiss Me Like Forever", "Country Pop"],
  ["49da6bf5-d034-4e7b-8455-7a36c12b778b", "Only You Tonight", "Contemporary Country"],
  ["9c27c991-2880-401c-8198-8f6ccd8da0b3", "Where My Heart Belongs", "Ballad"],
  ["adbbed26-585a-4255-b630-337c5a28d263", "Love Like the Rain", "Contemporary Country"],
  ["b4cc5815-a0fd-487d-abb9-2d1dad255bb9", "Under the Same Moon", "Ballad"],
  ["75040cc0-2804-4e50-93cf-6408d1de3b0c", "Wings of Tomorrow", "Country Pop"],
  ["e85ac312-efb1-451c-aab5-f70bb07b3cc8", "Where My Heart Lands", "Ballad"],
  ["39c43e3b-e8d8-43e2-9943-62e351b45d0e", "Good in My Soul", "Country Gospel"],
  ["e9f6b4cc-909d-44f8-bd2f-36f2f9409828", "Light in the Windows", "Ballad"],
  ["60aad27c-7b2c-4477-9bab-292856a36452", "Somewhere Along the Way", "Contemporary Country"],
  ["eb1180bf-8f89-4c3c-831b-d6c7b8f32213", "The Life I Got", "Americana"],
  ["538d684d-fcdc-4587-8188-9bdce612ba04", "Feels Like Home", "Contemporary Country"],
  ["39c43e3b-e8d8-43e2-9943-62e351b45d0e", "Her Kind of Strength", "Contemporary Country"],
  ["e4def3f4-c943-4e88-9e7a-c33920554b85", "Country Strong", "Americana"],
  ["4871b9da-c61a-4c75-bbc5-8fa593118f79", "Wildflower Strong", "Contemporary Country"],
  ["bfeac878-5872-4c8e-adc9-83a342a540d6", "No Finish Line", "Country Pop"],
  ["ae1fed86-85b1-4564-8d8f-3cabda0936f6", "She Walks Her Own Line", "Americana"],
  ["ace895c6-15e4-44a6-b9ef-c6b55f69b0d5", "Enough, Right Now", "Ballad"],
  ["fa65bf9f-80e6-4b64-a68e-5bbcba77e3c8", "I Didn't Fold", "Americana"],
  ["0140198e-547b-4a06-b82b-cc5ac72ccbb7", "Carried My Own", "Americana"],
  ["c90095c2-c25f-4439-936a-8577335ebadd", "Sweet in the Simple Things", "Country Pop"],
  ["5d5d69db-aeb3-4e50-804f-2fee78f97ae5", "Chasing a Feeling", "Country Pop"],
  ["ec670d7c-79b1-49e9-b954-7863eeb87531", "Ghost of Me", "Blues Ballad"],
  ["0a1858e9-b6fc-43e4-8655-2e6e06c11a27", "Built My Life on Faith", "Country Gospel"],
  ["84ca8a3e-9848-4606-88b6-30d9fadd1d20", "Where the Red Dirt Meets the Sky", "Americana"],
  ["6edafbd5-3510-4702-8a69-473fa0ce34a8", "Harbor Lights at Dawn", "Ballad"],
  ["4ab57f90-fb54-4405-b2c1-4d9e1ae8256e", "War Paint", "Americana"],
];

export const songs: Song[] = catalogSeeds.map(([id, title, genre, featured]) => ({
  id,
  title,
  genre,
  featured,
  cover: COVER_BY_ID[id],
  sunoUrl: `https://suno.com/song/${id}`,
}));

const seen = new Set<string>();
export const uniqueSongs: Song[] = songs.filter(song => {
  if (seen.has(song.id)) return false;
  seen.add(song.id);
  return true;
});

export const genres = ["All", ...Array.from(new Set(uniqueSongs.map(song => song.genre))).sort()];
