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

  const workflow = root.querySelector(".workflow");
  const workflowSvg = workflow ? workflow.querySelector(".workflow-lines") : null;
  const workflowNodesMap = workflow
    ? new Map(
        Array.from(workflow.querySelectorAll(".node[data-node]")).map((node) => [
          node.dataset.node,
          node,
        ]),
      )
    : null;

  const getAnchorPoint = (fromRect, toRect) => {
    const fromCenterX = fromRect.left + fromRect.width / 2;
    const fromCenterY = fromRect.top + fromRect.height / 2;
    const toCenterX = toRect.left + toRect.width / 2;
    const toCenterY = toRect.top + toRect.height / 2;
    const deltaX = toCenterX - fromCenterX;
    const deltaY = toCenterY - fromCenterY;

    if (Math.abs(deltaX) >= Math.abs(deltaY)) {
      return {
        x: deltaX >= 0 ? fromRect.right : fromRect.left,
        y: fromCenterY,
      };
    }

    return {
      x: fromCenterX,
      y: deltaY >= 0 ? fromRect.bottom : fromRect.top,
    };
  };

  const updateWorkflowConnections = () => {
    if (!workflow || !workflowSvg || !workflowNodesMap) {
      return;
    }

    const workflowRect = workflow.getBoundingClientRect();
    const width = Math.max(Math.round(workflowRect.width), 1);
    const height = Math.max(Math.round(workflowRect.height), 1);
    const nodeRects = new Map(
      Array.from(workflowNodesMap.entries()).map(([name, node]) => [name, node.getBoundingClientRect()]),
    );
    const connections = [
      ["extract-graph", "extract", "graph"],
      ["graph-retrieve", "graph", "retrieve"],
      ["retrieve-agent", "retrieve", "agent"],
    ];

    workflowSvg.setAttribute("viewBox", `0 0 ${width} ${height}`);
    workflowSvg.setAttribute("preserveAspectRatio", "none");

    connections.forEach(([connectionName, fromName, toName]) => {
      const line = workflowSvg.querySelector(`[data-connection="${connectionName}"]`);
      const fromRect = nodeRects.get(fromName);
      const toRect = nodeRects.get(toName);

      if (!line || !fromRect || !toRect) {
        return;
      }

      const start = getAnchorPoint(fromRect, toRect);
      const end = getAnchorPoint(toRect, fromRect);

      line.setAttribute("x1", `${start.x - workflowRect.left}`);
      line.setAttribute("y1", `${start.y - workflowRect.top}`);
      line.setAttribute("x2", `${end.x - workflowRect.left}`);
      line.setAttribute("y2", `${end.y - workflowRect.top}`);
    });
  };

  let resizeFrame = 0;
  const scheduleWorkflowUpdate = () => {
    window.cancelAnimationFrame(resizeFrame);
    resizeFrame = window.requestAnimationFrame(updateWorkflowConnections);
  };

  scheduleWorkflowUpdate();

  if (document.fonts && document.fonts.ready) {
    document.fonts.ready.then(scheduleWorkflowUpdate).catch(() => {});
  }

  window.addEventListener("load", scheduleWorkflowUpdate, { once: true });

  if (workflow && "ResizeObserver" in window) {
    const observer = new ResizeObserver(scheduleWorkflowUpdate);
    [workflow, ...workflowNodesMap.values()].forEach((element) => observer.observe(element));
    window.addEventListener("beforeunload", () => observer.disconnect(), { once: true });
  } else {
    window.addEventListener("resize", scheduleWorkflowUpdate);
  }
}
})();
