# Lab Website

A clean, academic research lab website that runs on **GitHub Pages** with zero build steps.

---

## 🚀 Quick Start: Hosting on GitHub Pages

1. **Create a GitHub repository** named `yourusername.github.io` (for your personal/lab page) OR any name like `lab-website` (for a project page).
2. **Upload all files** from this folder to the repository root.
3. Go to your repository → **Settings → Pages**.
4. Under *Source*, select **Deploy from branch → main → / (root)**.
5. Your site will be live at `https://yourusername.github.io` (or `https://yourusername.github.io/lab-website`).

> **That's it.** No Node.js, no Jekyll, no build step needed.

---

## ✏️ How to Update Your Website

**All content lives in one file: `js/data.js`**

You never need to touch `index.html` or `css/style.css` for routine updates.

### Adding a news post
```js
// In js/data.js, add an entry to the `news` array:
{
  date: "2025-06-01",
  title: "Paper accepted at ICML 2025",
  body: "Congratulations to ..."
},
```

### Adding a team member
```js
// In js/data.js, add an entry to the `team` array:
{
  name: "Dr. New Person",
  role: "Postdoctoral Researcher",
  bio: "Short bio here.",
  photo: "https://link-to-photo.jpg",  // or "" for initials avatar
  email: "person@lab.edu",
  website: "",
  googleScholar: "",
  twitter: "",
  github: "",
  category: "postdoc"  // faculty | postdoc | phd | masters | collaborator
},
```

### Adding a publication
```js
// In js/data.js, add an entry to the `publications` array (most recent first):
{
  title: "My New Paper",
  authors: "Smith, J., Doe, A.",
  venue: "NeurIPS 2025",
  year: 2025,
  type: "conference",  // conference | journal | workshop | preprint
  pdf: "https://arxiv.org/pdf/...",
  code: "https://github.com/...",
  website: "",
  highlight: true  // shows ★ Featured badge
},
```

### Adding a research project
```js
// In js/data.js, add an entry to the `research` array:
{
  title: "Project Title",
  status: "active",   // active | completed
  tags: ["Tag1", "Tag2"],
  description: "What this project is about.",
  funding: "NSF Award #...",
  members: ["Name 1", "Name 2"],
  image: ""
},
```

---

## 📁 File Structure

```
lab-website/
├── index.html        # Page structure (HTML skeleton — rarely needs editing)
├── css/
│   └── style.css     # All styles (edit to change colors/fonts)
├── js/
│   ├── data.js       # ✅ YOUR CONTENT — edit this file
│   └── main.js       # Renderer (do not edit)
└── README.md         # This file
```

---

## 🎨 Customizing Colors and Fonts

Open `css/style.css` and find the `:root` block near the top. Change the CSS variables:

```css
:root {
  --accent:    #2f5bbd;  /* Main blue — change to your color */
  --ink:       #1a1a2e;  /* Dark text color */
  --bg:        #fafaf8;  /* Page background */
  ...
}
```

To change fonts, swap the Google Fonts `@import` URL at the top of `style.css` and update the font variables.

---

## 🖼️ Adding a Custom Lab Logo or Photo

Place the image file in an `assets/` folder and reference it in `index.html` or `data.js` as needed. For team photos, either host them on the web and paste the URL into the `photo` field, or upload them to `assets/photos/` in the repo.

---

## 📬 Custom Domain (Optional)

If you have a domain like `horizonlab.edu`:
1. Add a file named `CNAME` to the repo root containing just your domain: `horizonlab.edu`
2. Update your domain's DNS with a CNAME record pointing to `yourusername.github.io`
3. Enable HTTPS in GitHub Pages settings

---

*Built with plain HTML, CSS, and JavaScript. No frameworks or build tools required.*
