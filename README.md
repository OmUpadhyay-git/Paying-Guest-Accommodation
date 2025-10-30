# PG Accommodation — Starter Site

This folder contains a small static starter site scaffold for a PG accommodation website.

Structure created:

- index.html, about.html, rooms.html, gallery.html, contact.html
- css/: style.css, lightbox.css, responsive.css
- js/: main.js, navigation.js, lightbox.js, form.js, animations.js
- assets/data.json (sample room data)
- images/: placeholders for images

How to view locally

1. Open `pg-accommodation/index.html` in a browser (double-click the file or use a simple static server).
2. Optionally run a local server (python) to avoid CORS issues:

   ```powershell
   # from the pg-accommodation directory
   python -m http.server 8000
   ```

Notes

- Images are placeholders — replace the files in `images/` with real images to improve appearance.
- JS and CSS are minimal starter code; extend as needed.
