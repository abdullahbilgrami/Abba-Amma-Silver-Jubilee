# 25th Wedding Anniversary — Amma & Abba 🤍

A premium, personal Silver Jubilee anniversary website — a digital gift from a child to their parents. Built with plain HTML, CSS and JavaScript, ready to host for free on GitHub Pages.

---

## 1. Folder structure

```
parents-25th-anniversary/
│
├── index.html
├── style.css
├── script.js
├── README.md
│
├── images/
│   ├── parents-01.jpg   → Hero
│   ├── parents-02.jpg   → Anniversary message section
│   ├── parents-03.jpg   → Gallery — featured
│   ├── parents-04.jpg   → Gallery
│   ├── parents-05.jpg   → Gallery
│   └── parents-06.jpg   → Closing section
│
├── music/
│   └── (add anniversary-song.mp3 here yourself — see Part 9)
│
└── assets/
    └── favicon.png   (optional — add your own small square image)
```

## 2. Image placement — why each photo went where

| File | Used for | Why |
|---|---|---|
| `parents-01.jpg` | **Hero** | The golden-hour embrace — warm light, genuine smile, closest and most emotionally intimate photo of the set. A split hero (photo on one side, text on the other) was used specifically so the text never sits over either face. |
| `parents-02.jpg` | **Anniversary message section** | Wide shot with a lot of open sky/negative space and calm framing, which pairs well next to a long block of Urdu text. |
| `parents-03.jpg` | **Gallery — featured (large)** | Strong, clear two-person portrait, good detail and lighting for a large frame. |
| `parents-04.jpg` | **Gallery** | Formal, dignified portrait — nice supporting image in the smaller grid. |
| `parents-05.jpg` | **Gallery** | The older, cherished photograph (photographed off a screen). Kept smaller in the grid rather than the hero, since its resolution is lower than the others — but it's treated as sentimentally important. |
| `parents-06.jpg` | **Closing section** | The flowers moment — soft, joyful, hopeful — pairs naturally with the "Forever To Go" closing line. It sits behind a dark overlay so the closing text stays fully readable. |

You uploaded 6 photographs in total (not 5) — all 6 were used. Nothing was AI-generated, face-swapped, or altered beyond standard web presentation effects (overlay darkening, cropping for layout, CSS brightness/contrast).

## 3. About the music file — important

`music/anniversary-song.mp3` is now included — a romantic piano track. Its filename pattern (`paulyudin-...`) matches royalty-free tracks distributed on sites like Pixabay, which are generally free to use, including on personal sites like this one. Before you make the site public, it's worth doing a quick check of the exact license terms of the source you downloaded it from (some royalty-free platforms ask for attribution, which you could add in the footer if required) — this way you can be confident it's fine to publish.

If you'd prefer a different song later — for example the original Bollywood track you mentioned earlier — please note that a commercially released song is copyrighted, so publicly hosting it on a public GitHub Pages site without a license wouldn't be permitted. If you want to swap tracks, use another royalty-free/licensed piece, or a recording you made yourself, and follow **Part 9** below.

## 4. How to add / replace photographs

1. Prepare your photo (JPG or PNG, ideally under 500KB — compress with [squoosh.app](https://squoosh.app) if needed).
2. Rename it to match one of: `parents-01.jpg` through `parents-06.jpg`.
3. Replace the corresponding file inside the `images/` folder.
4. Keep the same filename so `index.html` doesn't need to change. If you use a different filename, update the matching `src="images/..."` in `index.html`.

## 5. How to add the music (Part 9)

1. Get an MP3 you have the right to use.
2. Rename it exactly to: `anniversary-song.mp3`
3. Place it inside the `music/` folder, so the path is:
   ```
   music/anniversary-song.mp3
   ```
4. That's it — the floating music player will automatically play/pause this file. No code changes needed.

## 6. How to change names, date, and text

- Open `index.html` in any text editor.
- Search for **"Amma & Abba"** — replace with the names you'd like used, or leave as-is.
- Search for **"12 August"** — replace with a different date if needed.
- The Urdu message, dua, and gratitude text are all directly inside `index.html` inside clearly grouped `<section>` blocks (`id="message"`, `id="dua"`, `id="gratitude"`) — edit the text between the `<p>` tags directly.

## 7. How to customize colors

All colors live at the top of `style.css` inside `:root { ... }`:

```css
--burgundy-deep: #3d0f1c;
--burgundy:      #5c1a2b;
--charcoal:      #1c1512;
--ivory:         #f7f0e4;
--gold:          #c9a15a;
--gold-bright:   #e2c17e;
--rose-gold:     #cf9f8e;
```

Change any of these hex values and the whole site updates consistently.

## 8. Deploying to GitHub Pages (beginner-friendly)

**Step 1 — Create a GitHub account** (if you don't have one) at [github.com](https://github.com).

**Step 2 — Create a new repository**
- Click the **+** icon (top right) → **New repository**.
- Name it `parents-25th-anniversary` (or anything you like).
- Set it to **Public**.
- Click **Create repository**.

**Step 3 — Upload the files**
- On the new repository page, click **uploading an existing file**.
- Drag in: `index.html`, `style.css`, `script.js`, `README.md`, and the whole `images/`, `music/`, and `assets/` folders.
- Make sure `index.html` ends up in the **root** of the repository (not inside a subfolder).
- Click **Commit changes**.

**Step 4 — Turn on GitHub Pages**
- Go to **Settings → Pages** (left sidebar).
- Under **Build and deployment → Source**, choose **Deploy from a branch**.
- Under **Branch**, choose **main** and folder **/ (root)**.
- Click **Save**.

**Step 5 — Find your live link**
- Wait about 1–2 minutes, then refresh the **Settings → Pages** screen.
- Your live URL will appear, usually in this format:
  ```
  https://<your-username>.github.io/parents-25th-anniversary/
  ```
- Open it — that's your website, live for anyone with the link.

**Step 6 — Updating later**
- To change a photo or the music file, go to the file in GitHub, click the pencil (or trash + re-upload for images), and commit again. The live site updates automatically within a minute or two.

## 9. Troubleshooting

| Problem | Likely cause / fix |
|---|---|
| Page shows 404 | `index.html` isn't in the repository root, or Pages hasn't finished deploying yet (wait a minute and refresh). |
| Images don't show | Check the filename matches **exactly**, including case — `Parents-01.jpg` ≠ `parents-01.jpg` on GitHub Pages (Linux servers are case-sensitive). |
| Music doesn't play | Make sure the file is named exactly `anniversary-song.mp3` and sits inside `music/`. Also note some browsers block autoplay — the floating player still lets visitors press play manually. |
| Styling looks broken | Confirm `style.css` was uploaded and sits in the same folder as `index.html`. |
| Buttons/menu don't work | Confirm `script.js` was uploaded in the same folder as `index.html`. |
| Urdu text looks like boxes/garbled | Check your internet connection when loading the page — the Nastaliq font loads from Google Fonts and needs an active connection the first time. |
| Wrong image in a section | Double check the numbered file (`parents-01.jpg` etc.) matches the table in Part 2 above. |

## 10. Customization checklist

- [ ] Replace `images/parents-01.jpg` → `parents-06.jpg` with final chosen photos (or keep as-is).
- [ ] Add your own `music/anniversary-song.mp3` (a track you have rights to use).
- [ ] Update names if "Amma & Abba" should be replaced with actual names.
- [ ] Confirm the date "12 August" is correct.
- [ ] Optionally add a small square image as `assets/favicon.png` for the browser tab icon.
- [ ] Proofread the Urdu message and dua for anything you'd like to personalize further.
- [ ] Deploy to GitHub Pages and share the link with family.

---

Made with love, for Amma & Abba. ❤️
**Happy 25th Wedding Anniversary — 12 August.**
