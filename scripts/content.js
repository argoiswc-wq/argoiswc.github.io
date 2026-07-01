(() => {
const site = {
  brand: "ARGO 2026",
  conferenceLogo: {
    src: "images/logo.png",
    alt: "ISWC Bari 2026 logo",
  },
  title: "ARGO",
  titleHighlight: "Agentic Retrieval",
  titleSuffix: "& Graph Orchestration",
  eyebrow: "ISWC 2026 Tutorial",
  lede: "A hands-on half-day tutorial for building semantically grounded document knowledge systems with Graph-RAG, provenance-aware retrieval, and agentic tool orchestration.",
  footerTitle: "ARGO: Agentic Retrieval and Graph Orchestration for Document Knowledge Systems",
  footerMeta: "ISWC 2026 Half-day Tutorial",
};

const instituteLogos = [
  {
    src: "images/HES_SO_Logo_RGB_page.webp",
    alt: "HES-SO logo",
  },
  {
    src: "images/unifr_logo.png",
    alt: "University of Fribourg logo",
  },
  {
    src: "images/SCAI_Logo_Claim_rgb_pos.png",
    alt: "SCAI logo",
  },
  {
    src: "images/logo_heia-fr_version_courte.jpg",
    alt: "HEIA-FR logo",
  },
  {
    src: "images/HumanTech_cmjn.jpg",
    alt: "HumanTech Institute logo",
  },
  {
    src: "images/icosys-logo.png",
    alt: "iCoSys logo",
  },
];

const navItems = [
  { label: "About", href: "#about" },
  { label: "Topics", href: "#topics" },
  { label: "Program", href: "#program" },
  { label: "Presenters", href: "#presenters" },
];

const heroMeta = [
  { icon: "&#9635;", label: "October 25-26, 2026" },
  { icon: "&#9719;", label: "Half-day tutorial" },
  { icon: "&#8605;", label: "ISWC 2026" },
];

const heroActions = [
  { label: "View Program", href: "#program", variant: "primary" },
  { label: "Explore Topics", href: "#topics", variant: "secondary" },
];

const workflowNodes = [
  {
    className: "extract",
    title: "Extract",
    text: "Web sources and documents to semantic facts",
  },
  {
    className: "graph",
    title: "Graph",
    text: "Entities, relations, provenance",
  },
  {
    className: "retrieve",
    title: "Retrieve",
    text: "Hybrid graph and vector context",
  },
  {
    className: "agent",
    title: "Orchestrate",
    text: "Agents, tools and answers",
  },
];

const about = {
  id: "about",
  title: "Scope and Motivation",
  lede: "ARGO focuses on practical methods for turning complex document collections into modular, inspectable, and reproducible knowledge systems.",
  paragraphs: [
    "Modern document AI systems increasingly combine language models, retrieval, knowledge graphs, and external tools. ARGO shows how to make these systems more semantic and auditable by explicitly modeling entities, relations, evidence, and orchestration steps.",
    "Participants will learn how agentic workflows can use Graph-RAG as a callable capability, how provenance can be retained across extraction and retrieval, and how tool-based architectures support reliable document question answering.",
  ],
};

const topics = {
  id: "topics",
  title: "Tutorial Topics",
  lede: "The tutorial is designed around concrete building blocks that can be adapted to research prototypes, lab workflows, and applied knowledge systems.",
  items: [
    {
      title: "Semantic Extraction",
      text: "Represent document content as typed entities, relations, chunks, and evidence-bearing statements.",
    },
    {
      title: "Knowledge Graph Construction",
      text: "Organize extracted facts into graph structures that support validation, navigation, and reuse.",
    },
    {
      title: "Graph-RAG",
      text: "Combine graph facts with vector retrieval to produce context that is both relevant and structured.",
    },
    {
      title: "Agentic Orchestration",
      text: "Expose retrieval, graph lookup, document tools, and validation as callable tools in an agent workflow.",
    },
    {
      title: "Provenance and Trust",
      text: "Track sources, evidence, and transformations so answers remain inspectable and grounded.",
    },
    {
      title: "Hands-on Practice",
      text: "Build and evaluate a small end-to-end document knowledge workflow during the session.",
    },
  ],
};

const program = {
  id: "program",
  title: "Half-day Program",
  lede: "ARGO is organized as a two-slot half-day tutorial, moving from foundations and semantic extraction to graph construction, Graph-RAG, tools, and agents.",
  items: [
    {
      label: "Slot 1",
      title: "Foundations and Semantic Extraction",
      parts: [
        {
          title: "Part 01: Foundations",
          text: "LLM basics, agentic application patterns, and a first PydanticAI app.",
        },
        {
          title: "Part 02: Semantic Extraction",
          text: "Extract structured information from documents, websites, images, tables, and mixed-source collections.",
        },
      ],
    },
    {
      label: "Slot 2",
      title: "Graph-RAG, Tools, and Agents",
      parts: [
        {
          title: "Part 03: Graph Construction and Graph-RAG",
          text: "Build a knowledge graph from extracted facts, connect it to retrieval, and use it for grounded document question answering.",
        },
        {
          title: "Part 04: Tools and Agents",
          text: "Expose extraction, graph lookup, retrieval, and validation as tools that agents can select and orchestrate.",
        },
      ],
    },
  ],
};

const outcomes = {
  id: "outcomes",
  title: "Learning Outcomes",
  lede: "By the end of the tutorial, participants should be able to reason about both the conceptual model and the implementation path for agentic Graph-RAG systems.",
  items: [
    "Design a document knowledge pipeline that keeps semantic structure and source evidence explicit.",
    "Explain when graph retrieval, vector retrieval, and hybrid Graph-RAG each add value.",
    "Use tool orchestration patterns to make retrieval and graph operations available to agents.",
    "Identify reliability risks around extraction quality, provenance loss, and ungrounded answers.",
  ],
};

const presenters = {
  id: "presenters",
  title: "Presenters",
  lede: "The tutorial is presented by a team working at the intersection of knowledge graphs, document AI, retrieval, and agentic systems.",
  people: [
    { name: "Ornella Vaccarelli", initials: "OV", role: "Presenter" },
    { name: "Federica Bove", initials: "FB", role: "Presenter" },
    { name: "Olivier D'Ancona", initials: "OD", role: "Presenter" },
    { name: "Anna Scius-Bertrand", initials: "AS", role: "Presenter" },
    { name: "Beat Wolf", initials: "BW", role: "Presenter" },
  ],
};

const cta = {
  title: "Materials coming soon",
  text: "Slides, exercises, and setup instructions will be made available before the ISWC 2026 tutorial days.",
  action: {
    label: "ISWC Tutorial Call",
    href: "https://iswc2026.semanticweb.org/#/calls/tutorials",
  },
};

window.ARGO_CONTENT = {
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
};
})();
