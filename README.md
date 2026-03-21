# Otero-Leon Lab Website

A GitHub Pages-ready Jekyll website for the Otero-Leon Lab.

## Quick start

### Option 1: Edit directly on GitHub
1. Create a new public repository, e.g. `otero-leon-lab`.
2. Upload all files from this folder.
3. Go to **Settings > Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**.
5. Select **main** and **/(root)**.
6. Save. GitHub will publish the site at a GitHub Pages URL.

### Option 2: Edit locally with VS Code
1. Install Ruby + Bundler + Jekyll.
2. Open this folder in VS Code.
3. Run:
   ```bash
   bundle install
   bundle exec jekyll serve
   ```
4. Open the local URL shown in the terminal.
5. Commit and push changes to GitHub.

## Easy edits
- Lab title and tagline: `_config.yml`
- Homepage text: `index.md`
- Navigation: `_includes/header.html`
- Colors and styling: `assets/css/main.css`
- People: add a new file in `_people/`
- Publications: add a new file in `_publications/`
- Research projects: add a new file in `_research/`
- News: add a new file in `_news/`
- Talks/media: add a new file in `_talks/`
- Teaching: edit `teaching.md` and `_teaching/`
- Replace hero graphic or add real photos in `images/`

## File templates
Duplicate one of the existing collection files and change the front matter fields.

### Person template
```md
---
name: Full Name
role: PhD Student
category: phd_students
image: /images/people-placeholder.svg
email: person@virginia.edu
website: https://example.com
linkedin: https://linkedin.com/in/example
scholar: https://scholar.google.com/...
researchgate: https://researchgate.net/profile/...
order: 3
---
Short bio here.
```

### Publication template
```md
---
title: "Paper title"
authors: "Author 1, Author 2, Author 3"
journal: "Journal Name"
year: 2026
doi: "https://doi.org/..."
pdf: ""
category: "Selected"
featured: false
---
Optional short summary.
```

## Notes
- The current starter content mixes information from public profiles and placeholders.
- Replace any missing or approximate text with your preferred wording.
- GitHub Pages supports Jekyll natively, so you can host this without a custom server.
