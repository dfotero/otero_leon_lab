---
title: Teaching
permalink: /teaching/
---

<section class="page-hero">
  <div class="container">
    <h1>Teaching</h1>
    <p>This page can mix current courses, mentoring philosophy, and links to educational materials.</p>
  </div>
</section>

<section class="page-section">
  <div class="container panel tile">
    <ul class="list-clean">
      {% assign items = site.teaching | sort: "order" %}
      {% for item in items %}
      <li class="teach-item">
        <strong>{{ item.title }}</strong><br>
        <span class="muted">{{ item.term }}</span>
        <div>{{ item.content | markdownify }}</div>
      </li>
      {% endfor %}
    </ul>
  </div>
</section>
