(() => {
const {
  about,
  cta,
  heroActions,
  heroMeta,
  instituteLogos,
  navItems,
  outcomes,
  presenters,
  program,
  site,
  topics,
  workflowNodes,
} = window.ARGO_CONTENT;

const {
  About,
  CallToAction,
  Footer,
  Header,
  Hero,
  Outcomes,
  Presenters,
  Program,
  Topics,
} = window.ARGO_COMPONENTS;

const App = () => `
  <div class="page">
    ${Header({ site, navItems })}
    <main>
      ${Hero({ site, meta: heroMeta, actions: heroActions, workflowNodes })}
      ${About({ about })}
      ${Topics({ topics })}
      ${Program({ program })}
      ${Outcomes({ outcomes })}
      ${Presenters({ presenters })}
      ${CallToAction({ cta })}
    </main>
    ${Footer({ site, logos: instituteLogos })}
  </div>
`;

const root = document.querySelector("#root");

if (root) {
  root.innerHTML = App();
}
})();
