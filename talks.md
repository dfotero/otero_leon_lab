---
title: Talks
permalink: /talks/
---

<section class="page-hero">
  <div class="container">
    <h1>Talks &amp; Media</h1>
    <p>This section can include invited talks, conference presentations, interviews, and media features.</p>
  </div>
</section>

<section class="page-section">
  <div class="container panel tile">
    <ul class="list-clean">
      {% assign items = site.talks | sort: "date" | reverse %}
      {% for item in items %}
      <li class="talk-item">
        <strong>{{ item.title }}</strong><br>
        <span class="muted">{{ item.venue }} · {{ item.date | date: "%Y" }}</span>
        <div>{{ item.content | markdownify }}</div>
        {% if item.link %}<a href="{{ item.link }}">View</a>{% endif %}
      </li>
      {% endfor %}
    </ul>
  </div>
</section>
