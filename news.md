---
title: News
permalink: /news/
---

<section class="page-hero">
  <div class="container">
    <h1>News</h1>
    <p>Use this section for publications, talks, grants, student milestones, media, and lab announcements.</p>
  </div>
</section>

<section class="page-section">
  <div class="container panel tile">
    <ul class="list-clean">
      {% assign items = site.news | sort: "date" | reverse %}
      {% for item in items %}
      <li class="news-item">
        <strong>{{ item.title }}</strong><br>
        <span class="muted">{{ item.date | date: "%B %-d, %Y" }}</span>
        <div>{{ item.content | markdownify }}</div>
      </li>
      {% endfor %}
    </ul>
  </div>
</section>
