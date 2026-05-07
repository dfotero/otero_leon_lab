// ============================================================
//  OTERO-LEON LAB — RENDERER
// ============================================================

document.addEventListener('DOMContentLoaded', () => {
  const D = LAB_DATA;
  const $ = (sel, ctx = document) => ctx.querySelector(sel);
  const set = (sel, html) => { const el=$(sel); if(el) el.innerHTML=html; };
  const setText = (sel, txt) => { const el=$(sel); if(el) el.textContent=txt; };
  const initials = name => name.split(' ').filter(w=>w&&!/^(Prof\.|Dr\.)$/i.test(w)).map(w=>w[0]).join('').slice(0,2).toUpperCase();
  const formatDate = str => { const d=new Date(str+'T00:00:00'); return { month:d.toLocaleDateString('en-US',{month:'short'}), year:d.getFullYear() }; };

  // ── Site-wide ──────────────────────────────────────────────
  document.title = `${D.site.labName} — ${D.site.institution}`;
  setText('#header-lab-name', D.site.labName);
  setText('#header-institution', D.site.institution);
  setText('#footer-lab-name', D.site.labName);
  setText('#footer-institution', `${D.site.department} · ${D.site.institution}`);
  setText('#footer-copy', `© ${new Date().getFullYear()} ${D.site.labName} · ${D.site.institution}. All rights reserved.`);

  const fl = [];
  if(D.site.github)        fl.push(`<a href="${D.site.github}" target="_blank">GitHub</a>`);
  if(D.site.twitter)       fl.push(`<a href="${D.site.twitter}" target="_blank">Twitter</a>`);
  if(D.site.googleScholar) fl.push(`<a href="${D.site.googleScholar}" target="_blank">Scholar</a>`);
  if(D.site.email)         fl.push(`<a href="mailto:${D.site.email}">Email</a>`);
  $('#footer-links').innerHTML = fl.join('');

  // ── Tab switching ──────────────────────────────────────────
  const tabBtns = [...document.querySelectorAll('.tab-btn')];
  const tabPanels = [...document.querySelectorAll('.tab-panel')];

  window.switchTab = function(tabId) {
    tabBtns.forEach(b => b.classList.toggle('active', b.dataset.tab === tabId));
    tabPanels.forEach(p => p.classList.toggle('active', p.id === 'tab-' + tabId));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  tabBtns.forEach(btn => btn.addEventListener('click', () => switchTab(btn.dataset.tab)));

  // Buttons with data-goto
  document.querySelectorAll('[data-goto]').forEach(btn => {
    btn.addEventListener('click', () => switchTab(btn.dataset.goto));
  });

  // ── Home ──────────────────────────────────────────────────
  set('#hero-eyebrow', D.site.institution);
  set('#hero-title', D.home.heroHeadline);
  set('#hero-sub',   D.home.heroSubtext);

  $('#research-areas').innerHTML = D.home.researchAreas.map(a => `
    <div class="area-card">
      <div class="area-icon">${a.icon}</div>
      <h3>${a.title}</h3>
      <p>${a.description}</p>
    </div>`).join('');

  // ── Team ──────────────────────────────────────────────────
  const catOrder  = ['faculty','postdoc','phd','masters','alumni','collaborator'];
  const catLabels = { faculty:'Faculty', postdoc:'Postdoctoral Researchers', phd:'PhD Students', masters:"Master's Students", alumni:'Alumni', collaborator:'Collaborators' };
  const grouped = {};
  D.team.forEach(m => { if(!grouped[m.category]) grouped[m.category]=[]; grouped[m.category].push(m); });

  const teamEl = $('#team-container');
  if(teamEl) {
    teamEl.innerHTML = catOrder.filter(c=>grouped[c]).map(cat => `
      <div class="team-category">
        <div class="team-cat-label">${catLabels[cat]||cat}</div>
        <div class="team-grid">${grouped[cat].map(m => {
          const links=[];
          if(m.email)         links.push(`<a class="team-link" href="mailto:${m.email}">Email</a>`);
          if(m.website)       links.push(`<a class="team-link" href="${m.website}" target="_blank">Web</a>`);
          if(m.googleScholar) links.push(`<a class="team-link" href="${m.googleScholar}" target="_blank">Scholar</a>`);
          if(m.github)        links.push(`<a class="team-link" href="${m.github}" target="_blank">GitHub</a>`);
          if(m.linkedin)      links.push(`<a class="team-link" href="${m.linkedin}" target="_blank">LinkedIn</a>`);
          return `<div class="team-card">
            ${m.photo ? `<img class="team-photo" src="${m.photo}" alt="${m.name}" loading="lazy">` : `<div class="team-avatar">${initials(m.name)}</div>`}
            <div class="team-info">
              <div class="team-name">${m.name}</div>
              <div class="team-role">${m.role}</div>
              <div class="team-bio">${m.bio}</div>
              ${links.length?`<div class="team-links">${links.join('')}</div>`:''}
            </div></div>`;
        }).join('')}</div></div>`).join('');
  }

  // ── Research ──────────────────────────────────────────────
  const researchEl = $('#research-container');
  if(researchEl) {
    researchEl.innerHTML = D.research.map(p => `
      <div class="research-card">
        <div class="research-img-placeholder">🔬</div>
        <div class="research-body">
          <span class="research-status status-${p.status}">${p.status==='active'?'Active':'Completed'}</span>
          <h3>${p.title}</h3>
          <p>${p.summary || p.description}</p>
          <div class="research-tags">${p.tags.map(t=>`<span class="tag">${t}</span>`).join('')}</div>
          ${(p.papers&&p.papers.length)?`<div class="research-members">📄 ${p.papers.length} paper${p.papers.length>1?'s':''}</div>`:''}
        </div></div>`).join('');
    window.attachProjectCardHandlers && window.attachProjectCardHandlers();
  }

  // ── Publications ──────────────────────────────────────────
  const pubEl = $('#publications-container');
  const filterBtns = [...document.querySelectorAll('.pub-filter-btn')];
  let activeFilter = 'all';

  function renderPubs(filter) {
    if(!D.publications.length) {
      pubEl.innerHTML = '<p class="pub-empty">Publications will appear here soon. Check Google Scholar for the most current list.</p>';
      return;
    }
    const filtered = filter==='all' ? D.publications : D.publications.filter(p=>p.type===filter);
    if(!filtered.length) { pubEl.innerHTML='<p class="pub-empty">No publications in this category yet.</p>'; return; }
    const byYear={};
    filtered.forEach(p=>{ if(!byYear[p.year]) byYear[p.year]=[]; byYear[p.year].push(p); });
    const years = Object.keys(byYear).sort((a,b)=>b-a);
    pubEl.innerHTML = years.map(yr=>`
      <div class="pub-year-group">
        <div class="pub-year-heading">${yr}</div>
        ${byYear[yr].map(p=>{
          const links=[];
          if(p.pdf)  links.push(`<a class="pub-link" href="${p.pdf}" target="_blank">📄 PDF</a>`);
          if(p.code) links.push(`<a class="pub-link" href="${p.code}" target="_blank">💻 Code</a>`);
          if(p.doi)  links.push(`<a class="pub-link" href="${p.doi}" target="_blank">🔗 DOI</a>`);
          if(p.website) links.push(`<a class="pub-link" href="${p.website}" target="_blank">🌐 Site</a>`);
          return `<div class="pub-item ${p.highlight?'highlight':''}">
            <div class="pub-dot"></div>
            <div class="pub-content">
              <div class="pub-title">${p.title}${p.highlight?'<span class="pub-star">★ Featured</span>':''}</div>
              <div class="pub-authors">${p.authors}</div>
              <div class="pub-venue">${p.venue}<span class="pub-type-badge type-${p.type}">${p.type}</span></div>
              ${links.length?`<div class="pub-links">${links.join('')}</div>`:''}
            </div></div>`;
        }).join('')}
      </div>`).join('');
  }

  if(pubEl) {
    renderPubs('all');
    filterBtns.forEach(btn=>btn.addEventListener('click',()=>{
      activeFilter=btn.dataset.filter;
      filterBtns.forEach(b=>b.classList.toggle('active',b.dataset.filter===activeFilter));
      renderPubs(activeFilter);
    }));
  }

  // ── News ──────────────────────────────────────────────────
  const newsEl  = $('#news-container');
  const newsEmpty = $('#news-empty');
  if(newsEl) {
    if(!D.news.length) {
      if(newsEmpty) newsEmpty.style.display='block';
    } else {
      newsEl.innerHTML = D.news.map(n=>{ const d=formatDate(n.date); return `
        <div class="news-item">
          <div class="news-date"><span class="news-date-month">${d.month}</span><span class="news-date-year">${d.year}</span></div>
          <div><div class="news-title">${n.title}</div><div class="news-body">${n.body}</div></div>
        </div>`; }).join('');
    }
  }

  // ── Teaching ──────────────────────────────────────────────
  const teachEl = $('#teaching-container');
  if(teachEl) {
    if(!D.teaching.length) {
      teachEl.innerHTML='<p style="color:var(--ink-muted);font-style:italic">Courses will be listed here soon.</p>';
    } else {
      teachEl.innerHTML = `<div class="teaching-list">${D.teaching.map(c=>`
        <div class="teaching-card">
          <div class="teaching-meta">
            <span class="teaching-code">${c.code}</span>
            <span class="teaching-level">${c.level}</span>
            <span class="teaching-semester">${c.semester}</span>
          </div>
          <div class="teaching-title">${c.title}</div>
          <div class="teaching-desc">${c.description}</div>
          ${c.materials?`<div class="teaching-materials"><a href="${c.materials}" target="_blank">📁 Course Materials →</a></div>`:''}
        </div>`).join('')}</div>`;
    }
  }

  // ── Talks ──────────────────────────────────────────────────
  const talksEl = $('#talks-container');
  const talksEmpty = $('#talks-empty');
  if(talksEl) {
    if(!D.talks.length) {
      if(talksEmpty) talksEmpty.style.display='block';
    } else {
      talksEl.innerHTML = `<div class="talks-list">${D.talks.map(t=>{ const d=formatDate(t.date); return `
        <div class="talk-item">
          <div class="talk-date-col"><span class="talk-date-month">${d.month}</span><span class="talk-date-year">${d.year}</span></div>
          <div>
            <span class="talk-type talk-type-${t.type}">${t.type}</span>
            <div class="talk-title">${t.title}</div>
            <div class="talk-event">${t.event}</div>
            <div class="talk-location">${t.location}</div>
            ${(t.slides||t.video)?`<div class="talk-links">${t.slides?`<a class="talk-link" href="${t.slides}" target="_blank">📊 Slides</a>`:''}${t.video?`<a class="talk-link" href="${t.video}" target="_blank">🎥 Video</a>`:''}</div>`:''}
          </div></div>`; }).join('')}</div>`;
    }
  }

  // ── Join Us ───────────────────────────────────────────────
  set('#joinus-intro', D.joinUs.intro);
  const openingsEl = $('#openings-container');
  if(openingsEl) {
    openingsEl.innerHTML = D.joinUs.openings.map(o=>`
      <div class="opening-card">
        <div class="opening-title">${o.title}</div>
        <div class="opening-desc">${o.description}</div>
        ${o.applyLink?`<a class="opening-apply" href="${o.applyLink}" target="_blank">Apply →</a>`:''}
      </div>`).join('');
  }
  set('#phd-note', D.joinUs.forProspectivePhD);
  set('#undergrad-note', D.joinUs.forUndergrads);

  // ── Contact ───────────────────────────────────────────────
  set('#contact-email-link', `<a href="mailto:${D.site.email}">${D.site.email}</a>`);
  set('#contact-address', D.site.address);
  set('#contact-dept', `${D.site.department}<br>${D.site.institution}`);
});

// ============================================================
//  RESEARCH PROJECT DETAIL PANEL
// ============================================================
(function() {
  const overlay   = document.getElementById('project-overlay');
  const panel     = document.getElementById('project-panel');
  const closeBtn  = document.getElementById('panel-close');

  function openProject(p) {
    // Hero
    const heroMeta = document.getElementById('panel-hero-meta');
    document.getElementById('panel-hero-emoji').textContent = p.tags && p.tags.length ? '🔬' : '🔬';
    heroMeta.innerHTML =
      `<span class="panel-status panel-status-${p.status}">${p.status === 'active' ? 'Active' : 'Completed'}</span>` +
      (p.tags || []).map(t => `<span class="panel-tag">${t}</span>`).join('');

    // If project has a header image, show it
    const heroEl = document.getElementById('panel-hero');
    const existingImg = heroEl.querySelector('img');
    if(existingImg) existingImg.remove();
    if(p.image) {
      const img = document.createElement('img');
      img.src = p.image;
      img.alt = p.title;
      heroEl.insertBefore(img, heroEl.firstChild);
    }

    // Title
    document.getElementById('panel-title').textContent = p.title;

    // Description
    document.getElementById('panel-description').textContent = p.description || p.summary || '';

    // Members
    const membersEl = document.getElementById('panel-members');
    membersEl.innerHTML = (p.members || []).length
      ? p.members.map(m => `<span class="panel-member">👤 ${m}</span>`).join('')
      : '<span class="panel-empty">To be listed.</span>';

    // Funding
    const fundingSection = document.getElementById('panel-section-funding');
    if(p.funding) {
      document.getElementById('panel-funding').textContent = p.funding;
      fundingSection.style.display = 'block';
    } else {
      fundingSection.style.display = 'none';
    }

    // Papers
    const papersEl = document.getElementById('panel-papers');
    if(!p.papers || !p.papers.length) {
      papersEl.innerHTML = '<p class="panel-empty">No papers linked to this project yet.</p>';
    } else {
      papersEl.innerHTML = p.papers.map(pub => {
        const links = [];
        if(pub.pdf)  links.push(`<a class="panel-paper-link" href="${pub.pdf}" target="_blank">📄 PDF</a>`);
        if(pub.doi)  links.push(`<a class="panel-paper-link" href="${pub.doi}" target="_blank">🔗 DOI</a>`);
        if(pub.code) links.push(`<a class="panel-paper-link" href="${pub.code}" target="_blank">💻 Code</a>`);
        return `<div class="panel-paper">
          <div class="panel-paper-title">
            ${pub.title}
            <span class="panel-paper-badge badge-${pub.type}">${pub.type}</span>
          </div>
          <div class="panel-paper-authors">${pub.authors}</div>
          <div class="panel-paper-venue">${pub.venue} · ${pub.year}</div>
          ${links.length ? `<div class="panel-paper-links">${links.join('')}</div>` : ''}
        </div>`;
      }).join('');
    }

    // Tools
    const toolsEl = document.getElementById('panel-tools');
    if(!p.tools || !p.tools.length) {
      toolsEl.innerHTML = '<p class="panel-empty">No tools or datasets listed yet.</p>';
    } else {
      toolsEl.innerHTML = p.tools.map(t => `
        <div class="panel-tool">
          <div class="panel-tool-info">
            <div class="panel-tool-name">${t.name}</div>
            <div class="panel-tool-desc">${t.description}</div>
            ${t.link ? `<a class="panel-tool-link" href="${t.link}" target="_blank">View →</a>` : ''}
          </div>
          <span class="panel-tool-type">${t.type}</span>
        </div>`).join('');
    }

    // Extra links
    const linksEl = document.getElementById('panel-links');
    if(!p.links || !p.links.length) {
      linksEl.innerHTML = '<p class="panel-empty">No additional links yet.</p>';
    } else {
      linksEl.innerHTML = p.links.map(l => `
        <a class="panel-extra-link" href="${l.url}" target="_blank">
          <span class="panel-extra-link-icon">${l.icon || '🔗'}</span>
          <span class="panel-extra-link-label">${l.label}</span>
        </a>`).join('');
    }

    // Open
    overlay.classList.add('open');
    panel.classList.add('open');
    document.body.style.overflow = 'hidden';
    panel.scrollTop = 0;
  }

  function closeProject() {
    overlay.classList.remove('open');
    panel.classList.remove('open');
    document.body.style.overflow = '';
  }

  closeBtn.addEventListener('click', closeProject);
  overlay.addEventListener('click', closeProject);
  document.addEventListener('keydown', e => { if(e.key === 'Escape') closeProject(); });

  // Attach click handlers to research cards (called after cards are rendered)
  window.attachProjectCardHandlers = function() {
    document.querySelectorAll('.research-card').forEach((card, i) => {
      card.addEventListener('click', () => openProject(LAB_DATA.research[i]));
    });
  };
})();
