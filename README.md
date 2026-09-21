# SKAIZ.WORLD

Portfolio site for Kaiya "Skaiz" Lang, live at [skaiz.world](https://skaiz.world).

Static single-page app: React 19, Vite 7, Tailwind 4, React Router 7. No backend.

## Run locally

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # production build into dist/
npm run preview    # serve the production build
npm run lint
```

## Deploy

Pushing to `main` runs `.github/workflows/deploy.yml`, which builds the site and
publishes `dist/` to GitHub Pages. The custom domain is set in `public/CNAME`.
`public/404.html` redirects deep links back to the app so client-side routes work.

## Structure

```
src/
  App.jsx               routes (lazy-loaded pages)
  components/
    Navbar.jsx          top nav, hidden on the landing page
    LazyImage.jsx       skeleton placeholder + fade-in for gallery images
  pages/
    Landing.jsx         home collage, one tile per section
    Editorial.jsx       masonry gallery
    Art.jsx             scattered collage
    Light.jsx           lighting credits with links
    Memories.jsx        masonry gallery of film scans
    Video.jsx           music videos (YouTube thumbnails + one local clip)
    World.jsx           travel sections
    Outside.jsx         event photography
public/                 everything here is served as-is at the site root
  *_document.webp       handwritten section headings used in nav and page headers
  *_tile.mp4            short muted loops for landing tiles
  editorial/, Memories/, outside/, art/, light/, world/, video/
assets/                 original source files (not used by the build)
```

## Adding photos

1. Convert to WebP, longest side 1600px, quality about 82. Pillow works:
   `Image.open(p).convert("RGB").thumbnail((1600, 1600)); im.save(out, "WEBP", quality=82)`
2. Drop the files in the right folder under `public/`.
3. Add the paths to the image list at the top of the page component.
   Galleries are ordered newest first, so new sets go at the top of the list.

Adding a section means a new page in `src/pages/`, a route in `App.jsx`, a nav
entry in `Navbar.jsx`, a tile in `Landing.jsx`, and a heading image in `public/`.
