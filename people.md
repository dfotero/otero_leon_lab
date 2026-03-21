---
title: People
permalink: /people/
---

<section class="page-hero">
  <div class="container">
    <h1>People</h1>
    <p>The site is organized so you can add or edit each person by changing a single file in the <code>_people</code> folder.</p>
  </div>
</section>

{% assign grouped = site.people | sort: "order" | group_by: "category" %}
{% for group in grouped %}
<section class="page-section">
  <div class="container">
    <h2>
      {% case group.name %}
        {% when 'faculty' %}Faculty
        {% when 'phd_students' %}PhD Students
        {% when 'collaborators' %}Collaborators
        {% when 'alumni' %}Alumni
        {% else %}{{ group.name | replace: '_', ' ' | capitalize }}
      {% endcase %}
    </h2>
    <div class="grid-4">
      {% for person in group.items %}
      <div class="card person-card">
        <div class="avatar">{{ person.name | split: ' ' | map: 'first' | join: '' | slice: 0,2 }}</div>
        <h3>{{ person.name }}</h3>
        <div class="role">{{ person.role }}</div>
        <p class="muted">{{ person.content | markdownify | strip_html | truncate: 160 }}</p>
        <p>
          {% if person.email %}<a href="mailto:{{ person.email }}">Email</a>{% endif %}
          {% if person.website %} · <a href="{{ person.website }}">Website</a>{% endif %}
          {% if person.linkedin %} · <a href="{{ person.linkedin }}">LinkedIn</a>{% endif %}
        </p>
      </div>
      {% endfor %}
    </div>
  </div>
</section>
{% endfor %}
