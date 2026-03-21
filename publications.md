---
title: Publications
permalink: /publications/
---

<section class="page-hero">
  <div class="container">
    <h1>Publications</h1>
    <p>The starter list below includes selected public items from your profiles and placeholders you can expand. Edit or add each paper as one file in <code>_publications</code>.</p>
  </div>
</section>

<section class="page-section">
  <div class="container panel tile">
    {% assign pubs = site.publications | sort: "year" | reverse %}
    <ul class="list-clean">
      {% for pub in pubs %}
      <li class="pub-item">
        <strong>{{ pub.title }}</strong><br>
        <span>{{ pub.authors }}</span><br>
        <span class="muted">{{ pub.journal }} · {{ pub.year }}</span>
        {% if pub.doi %}<br><a href="{{ pub.doi }}">DOI / Link</a>{% endif %}
        {% if pub.pdf %} · <a href="{{ pub.pdf }}">PDF</a>{% endif %}
      </li>
      {% endfor %}
    </ul>
  </div>
</section>
