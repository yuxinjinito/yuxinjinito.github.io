# Yuxin Jin — Personal Site

Personal academic homepage and gallery, hosted on GitHub Pages.  
**Based on** the [academic personal website template](https://github.com/JerryYin777/JerryYin777.github.io) by Jerry Yin (Markdown-driven content, Bootstrap).

- **Home**: Bootstrap-based site with sections (Home, Publications, Awards, Service). Content is loaded from Markdown and `contents/config.yml`.
- **Gallery**: [midjourney.html](midjourney.html) — AI artworks (Midjourney). EN/中文, light/dark theme; default: English, light. Thumbnails live in `static/assets/midjourney/thumbs/`.

## Structure

```
.
├── index.html              # Homepage
├── midjourney.html         # Gallery page
├── contents/
│   ├── config.yml         # Site title, copyright, etc. (keys match HTML element ids)
│   ├── home.md            # Home section (Markdown)
│   ├── publications.md
│   ├── awards.md
│   └── service.md
├── static/
│   ├── assets/
│   │   ├── img/           # Homepage images (e.g. background, photo)
│   │   └── midjourney/    # Gallery images; thumbs in midjourney/thumbs/
│   ├── css/
│   └── js/
└── scripts/
    └── generate-thumbs.sh # Regenerate gallery thumbnails (macOS sips; 600/650/800px by source size)
```

## Editing content

1. **Homepage text**: Edit `contents/home.md`, `contents/publications.md`, etc. (Markdown).
2. **Title & footer**: Edit `contents/config.yml` (keys like `title`, `copyright-text`).
3. **Homepage assets**: Replace images in `static/assets/img/`.
4. **Gallery**: Add images under `static/assets/midjourney/` and extend `static/js/midjourney.js` (artwork data + i18n). Then run:
   ```bash
   ./scripts/generate-thumbs.sh
   ```
   to refresh thumbnails.

## Run locally

Open `index.html` and `midjourney.html` via a local server (e.g. `python3 -m http.server`) so Markdown/config fetch works.

## License

This project is under the MIT License. The original template and its license are from [Jerry Yin](https://github.com/JerryYin777/JerryYin777.github.io); attribution is preserved in `contents/config.yml` (footer) and here.
