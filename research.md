---
title: Research
permalink: /research/
---

<section class="page-hero">
  <div class="container">
    <h1>Research</h1>
    <p>This section is designed for project-style storytelling rather than only listing papers. That helps visitors understand the lab quickly.</p>
  </div>
</section>

<section class="page-section">
  <div class="container">
    <div class="grid-3">
      {% assign items = site.research | sort: "order" %}
      {% for item in items %}
      <div class="card tile">
        <span class="badge">{{ item.area }}</span>
        <h3>{{ item.title }}</h3>
        <p>{{ item.content | markdownify | strip_html | truncate: 210 }}</p>
      </div>
      {% endfor %}
    </div>
  </div>
</section>
