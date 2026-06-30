(() => {
const html = String.raw;

const renderNavItem = (item) => html`
  <a href="${item.href}">${item.label}</a>
`;

const renderButton = (action) => html`
  <a class="btn ${action.variant || "secondary"}" href="${action.href}">${action.label}</a>
`;

const renderSectionHeading = ({ title, lede }) => html`
  <div class="section-heading">
    <h2>${title}</h2>
    <p>${lede}</p>
  </div>
`;

const Header = ({ site, navItems }) => html`
  <header>
    <nav class="container nav" aria-label="Primary navigation">
      <a class="brand" href="#">${site.brand}</a>
      <div class="nav-links">
        ${navItems.map(renderNavItem).join("")}
      </div>
    </nav>
  </header>
`;

const WorkflowCard = ({ workflowNodes }) => html`
  <div class="hero-card" aria-label="ARGO workflow illustration">
    <div class="edition">Half-day<small>tutorial</small></div>
    <div class="workflow">
      <div class="line one"></div>
      <div class="line two"></div>
      <div class="line three"></div>
      ${workflowNodes.map((node) => html`
        <div class="node ${node.className}">${node.title}<span>${node.text}</span></div>
      `).join("")}
    </div>
    <div class="floating-label">ARGO</div>
  </div>
`;

const Hero = ({ site, meta, actions, workflowNodes }) => html`
  <section class="hero">
    <div class="container hero-grid">
      <div>
        <div class="eyebrow">${site.eyebrow}</div>
        <h1>${site.title} <span class="gradient-text">${site.titleHighlight}</span> ${site.titleSuffix}</h1>
        <p class="hero-lede">${site.lede}</p>
        <div class="hero-meta" aria-label="Tutorial facts">
          ${meta.map((item) => html`
            <div class="meta-chip"><span class="chip-icon">${item.icon}</span> ${item.label}</div>
          `).join("")}
        </div>
        <div class="actions">
          ${actions.map(renderButton).join("")}
        </div>
      </div>
      ${WorkflowCard({ workflowNodes })}
    </div>
  </section>
`;

const About = ({ about }) => html`
  <section id="${about.id}">
    <div class="container split">
      ${renderSectionHeading(about)}
      <div class="panel copy-panel">
        ${about.paragraphs.map((paragraph) => html`<p>${paragraph}</p>`).join("")}
      </div>
    </div>
  </section>
`;

const Topics = ({ topics }) => html`
  <section id="${topics.id}">
    <div class="container">
      ${renderSectionHeading(topics)}
      <div class="topics-grid">
        ${topics.items.map((topic) => html`
          <article class="topic-card">
            <h3>${topic.title}</h3>
            <p>${topic.text}</p>
          </article>
        `).join("")}
      </div>
    </div>
  </section>
`;

const Program = ({ program }) => html`
  <section id="${program.id}">
    <div class="container">
      ${renderSectionHeading(program)}
      <div class="schedule">
        ${program.items.map((item) => html`
          <article class="schedule-item">
            <span class="time">${item.label}</span>
            <h3>${item.title}</h3>
            <p>${item.text}</p>
          </article>
        `).join("")}
      </div>
    </div>
  </section>
`;

const Outcomes = ({ outcomes }) => html`
  <section id="${outcomes.id}">
    <div class="container split">
      ${renderSectionHeading(outcomes)}
      <ul class="highlight-list">
        ${outcomes.items.map((item, index) => html`
          <li><span class="mark">${index + 1}</span><span>${item}</span></li>
        `).join("")}
      </ul>
    </div>
  </section>
`;

const Presenters = ({ presenters }) => html`
  <section id="${presenters.id}">
    <div class="container">
      ${renderSectionHeading(presenters)}
      <div class="people">
        ${presenters.people.map((person) => html`
          <article class="person">
            <div class="avatar">${person.initials}</div>
            <h3>${person.name}</h3>
            <p>${person.role}</p>
          </article>
        `).join("")}
      </div>
    </div>
  </section>
`;

const CallToAction = ({ cta }) => html`
  <section>
    <div class="container">
      <div class="cta">
        <div>
          <h2>${cta.title}</h2>
          <p>${cta.text}</p>
        </div>
        <a class="btn secondary" href="${cta.action.href}">${cta.action.label}</a>
      </div>
    </div>
  </section>
`;

const Footer = ({ site }) => html`
  <footer>
    <div class="container">
      <span>${site.footerTitle}</span>
      <span>${site.footerMeta}</span>
    </div>
  </footer>
`;

window.ARGO_COMPONENTS = {
  About,
  CallToAction,
  Footer,
  Header,
  Hero,
  Outcomes,
  Presenters,
  Program,
  Topics,
};
})();
