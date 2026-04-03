# John Doe — .NET Full Stack Developer Portfolio

A clean, professional portfolio website built with pure HTML, CSS, and JavaScript.
No frameworks, no dependencies, no build step — just open and edit.

---

## 📁 Project Structure

```
portfolio/
├── index.html            ← Home page (hero, about strip, skills, featured projects)
├── about.html            ← Full about page (bio, experience timeline, values)
├── projects.html         ← Projects listing with filter bar
├── project-detail.html   ← Case study template (copy this for each project)
├── skills.html           ← Full skills breakdown with animated bars
├── contact.html          ← Contact form + FAQ
├── css/
│   └── global.css        ← All shared styles, CSS variables, nav, footer
├── js/
│   └── main.js           ← Shared JS (animations, mobile menu, form submit)
└── assets/               ← Create this folder for your images
    └── photo.jpg         ← Add your profile photo here
```

---

## ✏️ How to Personalise

Search for `<!-- TODO` in every file — each one marks something you need to replace.

### 1. Your Name & Initials
- Replace `John Doe` with your real name everywhere
- Replace `JD.` (nav logo) with your own initials
- Files: all `.html` files

### 2. Your Photo
- Create an `assets/` folder inside the project
- Add your photo as `assets/photo.jpg`
- In `index.html` and `about.html`, find the placeholder `<div>` and replace with:
  ```html
  <img src="assets/photo.jpg" alt="Your Name"/>
  ```

### 3. Your Bio & Story
- `about.html` → Rewrite the paragraphs under "From curiosity to craft"
- `index.html` → Update the hero description paragraph

### 4. Experience Timeline
- `about.html` → Replace the 3 timeline items with your real job history
- Update: role title, company name, date range, responsibilities, tech stack

### 5. Projects
- `projects.html` → Replace 4 project rows with your real projects
- `project-detail.html` → Duplicate this file for each project (e.g. `project-1.html`, `project-2.html`)
- Fill in: title, description, your contributions, tech stack, metrics, challenges

### 6. Skills
- `skills.html` → Adjust skill bar percentages to honestly reflect your level
- `skills.html` → Update the "Currently Learning" section

### 7. Contact Details
- `contact.html` → Replace email, LinkedIn URL, GitHub URL
- All footer sections → Update LinkedIn and GitHub `href="#"` links

### 8. Stats (Hero)
- `index.html` → Update "5+", "12+", "8+" to your real numbers

### 9. Footer Project Links
- All files → Update the footer "Projects" column with real project names + links

---

## 🚀 Deployment (Free Options)

### Option A: GitHub Pages (Recommended)
1. Create a new GitHub repo named `yourusername.github.io`
2. Upload all files to the root of the repo
3. Go to Settings → Pages → Source: Deploy from main branch
4. Your site goes live at `https://yourusername.github.io`

### Option B: Netlify
1. Go to [netlify.com](https://netlify.com) and sign up free
2. Drag and drop your portfolio folder into the Netlify deploy area
3. You get a live URL instantly (e.g. `yourname.netlify.app`)
4. You can set a custom domain later

### Option C: Vercel
1. Go to [vercel.com](https://vercel.com) and sign up free
2. Import from GitHub or drag and drop
3. Instant deployment with a Vercel URL

---

## 🔧 Adding More Projects

1. Copy `project-detail.html` → rename to e.g. `project-fintech-platform.html`
2. Fill in all the `<!-- TODO` sections with real content
3. Update `projects.html` to link to the new file
4. Update footer "Projects" columns across all pages

---

## 📝 Notes

- **No build required** — open `index.html` directly in a browser to preview
- **Mobile responsive** — works on all screen sizes
- **Navy & gold theme** — CSS variables in `css/global.css` if you want to tweak colours
- **Fonts** — Playfair Display (headings) + DM Sans (body) via Google Fonts

---

## 🎨 Colour Customisation

Edit the CSS variables at the top of `css/global.css`:

```css
:root {
  --navy:       #0d1b2a;   /* Main dark colour */
  --gold:       #c9a84c;   /* Accent colour */
  --cream:      #f5f0e8;   /* Background */
}
```

Change `--gold` to any accent colour — e.g. `#3b82f6` for blue, `#10b981` for green.
