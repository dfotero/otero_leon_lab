---
title: Home
---

<section class="hero">
  <div class="container hero-grid">
    <div>
      <span class="eyebrow">University of Virginia · Systems &amp; Information Engineering</span>
      <h1>Designing data-driven decision models to improve healthcare systems and patient outcomes</h1>
      <p class="lead">The Otero-Leon Lab develops operations research, systems engineering, and machine learning methods for better decisions in healthcare. We study disease prevention, healthcare operations, and decision-making under uncertainty with a focus on practical impact.</p>
      <div class="hero-actions">
        <a class="btn primary" href="{{ '/publications/' | relative_url }}">Publications</a>
        <a class="btn secondary" href="{{ '/research/' | relative_url }}">Research</a>
      </div>
    </div>
    <div class="card hero-visual" aria-hidden="true">
      <div class="visual-chip one">Disease prevention</div>
      <div class="visual-chip two">Healthcare operations</div>
      <div class="visual-chip three">Uncertainty modeling</div>
      <div class="visual-chart">
        <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M5 75C20 70 24 32 40 34C55 36 58 64 72 58C83 53 87 28 95 18" stroke="white" stroke-width="4" stroke-linecap="round"/>
          <circle cx="40" cy="34" r="4" fill="#F84C1E"/>
          <circle cx="72" cy="58" r="4" fill="#F84C1E"/>
          <circle cx="95" cy="18" r="4" fill="#F84C1E"/>
        </svg>
      </div>
    </div>
  </div>
</section>

<section class="section">
  <div class="container two-col">
    <div class="panel tile">
      <p class="kicker">About the lab</p>
      <h2>A lab built for research visibility and real-world impact</h2>
      <p>The lab centers on rigorous modeling with real healthcare relevance. Current work spans youth substance use and mental health, cardiovascular disease prevention, cancer management, and healthcare operations. The broader goal is to create decision frameworks that are both scientifically strong and useful to clinicians, health systems, and policy makers.</p>
    </div>
    <div class="panel tile">
      <p class="kicker">What visitors should find quickly</p>
      <ul>
        <li>Clear research areas and recent publications</li>
        <li>Current students and collaborators</li>
        <li>Speaking, teaching, and lab updates</li>
        <li>Ways to collaborate or join the lab</li>
      </ul>
    </div>
  </div>
</section>

<section class="section">
  <div class="container">
    <h2>Research themes</h2>
    <p class="section-intro">The homepage highlights the three themes you selected. Each card is easy to edit later.</p>
    <div class="grid-3">
      <div class="card tile">
        <span class="badge">Theme 1</span>
        <h3>Decision-making under uncertainty</h3>
        <p>Developing stochastic models, dynamic decision frameworks, and risk-aware tools for complex systems with uncertain outcomes.</p>
      </div>
      <div class="card tile">
        <span class="badge">Theme 2</span>
        <h3>Disease prevention</h3>
        <p>Designing policies and predictive frameworks for prevention, adherence, early intervention, and personalized care.</p>
      </div>
      <div class="card tile">
        <span class="badge">Theme 3</span>
        <h3>Healthcare operations and logistics</h3>
        <p>Improving scheduling, patient flow, coordination, and care delivery using systems engineering and optimization.</p>
      </div>
    </div>
  </div>
</section>

<section class="section">
  <div class="container cards">
    <div class="card tile">
      <p class="kicker">Featured publications</p>
      <ul class="list-clean">
        {% assign featured_pubs = site.publications | where: "featured", true | sort: "year" | reverse %}
        {% for pub in featured_pubs limit:3 %}
          <li class="pub-item">
            <strong>{{ pub.title }}</strong><br>
            <span class="muted">{{ pub.authors }}</span><br>
            <span class="muted">{{ pub.journal }}, {{ pub.year }}</span>
          </li>
        {% endfor %}
      </ul>
      <p><a href="{{ '/publications/' | relative_url }}">View all publications →</a></p>
    </div>
    <div class="card tile">
      <p class="kicker">Latest news</p>
      <ul class="list-clean">
        {% assign recent_news = site.news | sort: "date" | reverse %}
        {% for item in recent_news limit:3 %}
          <li class="news-item">
            <strong>{{ item.title }}</strong><br>
            <span class="muted">{{ item.date | date: "%B %Y" }}</span><br>
            <span>{{ item.content | markdownify | strip_html | truncate: 120 }}</span>
          </li>
        {% endfor %}
      </ul>
      <p><a href="{{ '/news/' | relative_url }}">See all news →</a></p>
    </div>
  </div>
</section>

<section class="section">
  <div class="container">
    <h2>People</h2>
    <p class="section-intro">Featuring students early on supports both lab visibility and student visibility.</p>
    <div class="grid-4">
      {% assign showcase = site.people | sort: "order" %}
      {% for person in showcase limit:4 %}
      <div class="card person-card">
        <div class="avatar">{{ person.name | split: ' ' | map: 'first' | join: '' | slice: 0,2 }}</div>
        <h3>{{ person.name }}</h3>
        <div class="role">{{ person.role }}</div>
        <p class="muted">{{ person.excerpt | strip_html | truncate: 90 }}</p>
      </div>
      {% endfor %}
    </div>
    <p style="margin-top:1rem"><a href="{{ '/people/' | relative_url }}">Meet the lab →</a></p>
  </div>
</section>
