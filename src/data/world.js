// World locations, newest trip first. The World index and each location page
// both read this order, so adding a trip in the right slot is all it takes.
//
// Dates come from each trip's handwritten document scan, which is what the page
// actually shows — three of these trips are May 2025, so their relative order
// is a judgement call rather than a sort.
//
// `cover` is the 1COVER file from each folder in the shared drive — the shot
// Kaiya picked to stand for the trip.
const numbered = (dir, prefix, numbers, label) =>
  numbers.map((n) => ({
    id: n,
    src: `/world/${dir}/${prefix}-${n}.webp`,
    alt: `${label} ${n}`,
  }))

const range = (n) => Array.from({ length: n }, (_, i) => i + 1)

export const LOCATIONS = [
  {
    id: 'paris',
    title: 'Paris, France',
    subtitle: 'September 2025',
    headerImage: '/world/ParisDocument_SkaizWorld.webp',
    cover: '/world/PARIS 2025/cover.webp',
    images: numbered('PARIS 2025', 'parisFilm', range(20), 'Paris'),
  },
  {
    id: 'dyptychs',
    title: 'San Sebastian, Spain',
    subtitle: 'May 2025',
    headerImage: '/world/Dyptychs de san sebastian, 2025/dyptchsdesansebDOCUMENT.webp',
    cover: '/world/Dyptychs de san sebastian, 2025/cover.webp',
    large: true,
    images: [
      { id: 1, src: '/world/Dyptychs de san sebastian, 2025/SanSebastian_skaizworld.webp', alt: 'San Sebastian 1' },
      { id: 2, src: '/world/Dyptychs de san sebastian, 2025/sansebastian_2.webp', alt: 'San Sebastian 2' },
      { id: 3, src: '/world/Dyptychs de san sebastian, 2025/sansebastian_3.webp', alt: 'San Sebastian 3' },
      { id: 4, src: '/world/Dyptychs de san sebastian, 2025/sansebastian_4.webp', alt: 'San Sebastian 4' },
      { id: 5, src: '/world/Dyptychs de san sebastian, 2025/sansebastian_5.webp', alt: 'San Sebastian 5' },
      { id: 6, src: '/world/Dyptychs de san sebastian, 2025/sansebastian6.webp', alt: 'San Sebastian 6' },
      { id: 7, src: '/world/Dyptychs de san sebastian, 2025/beach2.webp', alt: 'Beach 2' },
      { id: 8, src: '/world/Dyptychs de san sebastian, 2025/beach3.webp', alt: 'Beach 3' },
      { id: 9, src: '/world/Dyptychs de san sebastian, 2025/shereen_ss_skaiz02.webp', alt: 'Shereen' },
    ],
  },
  {
    id: 'montanas',
    title: 'Aventuras de las montañas',
    subtitle: 'May 2025',
    headerImage: '/world/aventuras de las montañas vascas, 2025/montanas_document.webp',
    cover: '/world/aventuras de las montañas vascas, 2025/cover.webp',
    images: numbered(
      'aventuras de las montañas vascas, 2025',
      'SanSebastianHike_Skaiz',
      range(34),
      'Aventuras de las montañas'
    ),
  },
  {
    id: 'madiera',
    title: 'Madeira, Portugal',
    subtitle: 'May 2025',
    headerImage: '/world/Madiera2025_document.webp',
    cover: '/world/Madiera 2025/cover.webp',
    images: numbered(
      'Madiera 2025',
      'Madiera2025',
      [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 16, 17, 18, 19, 20, 21, 24],
      'Madiera'
    ),
  },
  {
    id: 'puertorico',
    title: 'Puerto Rico',
    subtitle: 'January 2025',
    headerImage: '/world/Puerto Rico 2025/PeurtoRico2025_document.webp',
    cover: '/world/Puerto Rico 2025/cover.webp',
    images: numbered(
      'Puerto Rico 2025',
      'PuertoRico25-film',
      [1, 2, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27],
      'Puerto Rico'
    ),
  },
]

export const findLocation = (id) => LOCATIONS.find((location) => location.id === id)
