# 🚀 Developer Portfolio

Inspired by Usman Asif's layout + Kavita's dev-specific sections.
**Dark theme · Cormorant Garamond serif · Tailwind CSS classnames only**

---

## 📁 Structure

```
src/
├── data/
│   └── portfolio.js   ← ✏️  EDIT THIS to update ALL content + images
├── components/
│   ├── Navbar.jsx
│   ├── Hero.jsx          (Usman: dark bg, B&W photo, huge serif title, stats strip)
│   ├── Vision.jsx        (Usman: white split section, text left, color photo right)
│   ├── Services.jsx      (Kavita: 3×2 service cards)
│   ├── Projects.jsx      (Kavita: filter tabs + FEATURED ribbon cards)
│   ├── Testimonials.jsx  (Usman: dark textured bg, white quote cards)
│   ├── Contact.jsx       (Usman: pure black, form + social icons)
│   └── Footer.jsx
├── App.jsx
├── index.jsx
└── index.css
```

---

## ✏️ How to update content

Open **`src/data/portfolio.js`** — every piece of content is there:

| Export | What it controls |
|---|---|
| `personal` | Name, hero title lines, tagline, **your photo**, location, email, social links, CV link |
| `stats` | The 3 big numbers below the hero |
| `vision` | "My Vision" heading, paragraphs, CTA button, **right-side photo** |
| `skillTags` | Pill tags shown in the hero |
| `services` | 6 service cards (icon, title, description) |
| `projects` | Project cards (**thumbnail image**, title, type, tags, live/github links, featured flag) |
| `testimonials` | Quote, name, role, **headshot photo** |
| `contactInfo` | Address, email, phone |
| `sectionTitles` | All section headings and subtitles |
| `footerData` | Copyright text, stack credit |

### Replace a photo
```js
// In personal:
photo: "/my-photo.jpg",          // put file in /public folder

// In vision:
photo: "https://cdn.../img.jpg", // or any URL
```

---

## ⚙️ Setup

```bash
npm install
npm start        # → http://localhost:3000
npm run build    # production build
```

## 🌐 Deploy to Vercel
1. Push to GitHub
2. Import at vercel.com
3. Done — live in 60 seconds
