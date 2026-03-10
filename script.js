const REGIONS = {
  frontal: {
    name: "Frontal Lobe",
    role: "Executive control & planning",
    color: "#a78bfa",
    path: "M 280 180 C 320 120 420 100 520 130 C 580 150 620 210 610 280 C 600 340 540 360 470 350 C 380 335 300 290 280 180 Z",
    label: { x: 420, y: 220 },
    stats: [
      { label: "Volume share", value: "~41%" },
      { label: "Key cells", value: "Pyramidal neurons" },
      { label: "Myelination", value: "Late (into 20s)" },
      { label: "Synapses", value: "~40T estimated" },
    ],
    functions: ["Decision making", "Working memory", "Motor planning", "Speech production (Broca's)"],
    connections: ["parietal", "temporal", "brainstem"],
  },
  parietal: {
    name: "Parietal Lobe",
    role: "Spatial processing & integration",
    color: "#67e8f9",
    path: "M 470 350 C 540 360 620 340 670 380 C 710 420 720 480 690 530 C 650 580 580 590 520 560 C 480 520 460 420 470 350 Z",
    label: { x: 590, y: 470 },
    stats: [
      { label: "Volume share", value: "~19%" },
      { label: "Specialization", value: "Somatosensory cortex" },
      { label: "Hemisphere split", value: "Left: language · Right: spatial" },
      { label: "Synapses", value: "~18T estimated" },
    ],
    functions: ["Touch & proprioception", "Spatial awareness", "Number processing", "Attention shifting"],
    connections: ["frontal", "occipital", "temporal"],
  },
  temporal: {
    name: "Temporal Lobe",
    role: "Memory, hearing & language",
    color: "#fb7185",
    path: "M 300 380 C 340 420 380 500 400 560 C 420 610 380 640 320 630 C 250 615 210 560 220 490 C 230 430 260 390 300 380 Z",
    label: { x: 300, y: 530 },
    stats: [
      { label: "Volume share", value: "~22%" },
      { label: "Key structure", value: "Hippocampus" },
      { label: "Processing", value: "Auditory + semantic memory" },
      { label: "Synapses", value: "~22T estimated" },
    ],
    functions: ["Long-term memory encoding", "Language comprehension (Wernicke's)", "Face recognition", "Emotion (amygdala)"],
    connections: ["frontal", "parietal", "brainstem"],
  },
  occipital: {
    name: "Occipital Lobe",
    role: "Visual processing",
    color: "#fcd34d",
    path: "M 180 280 C 220 220 280 200 340 230 C 380 250 400 300 380 350 C 360 400 300 420 240 390 C 190 360 170 320 180 280 Z",
    label: { x: 270, y: 300 },
    stats: [
      { label: "Volume share", value: "~12%" },
      { label: "Primary area", value: "V1 visual cortex" },
      { label: "Processing speed", value: "~13 ms to V1" },
      { label: "Synapses", value: "~10T estimated" },
    ],
    functions: ["Edge & color detection", "Motion processing", "Depth perception", "Visual object recognition"],
    connections: ["parietal", "temporal"],
  },
  cerebellum: {
    name: "Cerebellum",
    role: "Motor coordination & balance",
    color: "#4ade80",
    path: "M 200 560 C 240 590 320 620 400 630 C 480 635 540 610 560 570 C 520 640 420 670 310 660 C 240 650 200 610 200 560 Z",
    label: { x: 380, y: 655 },
    stats: [
      { label: "Neuron count", value: "~69 billion (69%)" },
      { label: "Size vs. brain", value: "~10% of volume" },
      { label: "Input ratio", value: "40:1 in vs. out" },
      { label: "Synapses", value: "~150T estimated" },
    ],
    functions: ["Balance & posture", "Motor learning", "Timing & precision", "Cognitive prediction"],
    connections: ["brainstem", "frontal"],
  },
  brainstem: {
    name: "Brainstem",
    role: "Autonomic relay & arousal",
    color: "#f97316",
    path: "M 320 630 C 350 640 380 650 400 660 C 420 670 410 690 380 695 C 350 698 320 690 300 670 C 290 655 300 640 320 630 Z",
    label: { x: 350, y: 688 },
    stats: [
      { label: "Structures", value: "Midbrain, pons, medulla" },
      { label: "Functions", value: "Heart rate, breathing" },
      { label: "Reticular formation", value: "Sleep/wake cycles" },
      { label: "Synapses", value: "~8T estimated" },
    ],
    functions: ["Breathing & heart rate", "Sleep regulation", "Consciousness arousal", "Cranial nerve relay"],
    connections: ["frontal", "temporal", "cerebellum"],
  },
};

const PATHWAYS = [
  { id: "arcuate", name: "Arcuate Fasciculus", from: "frontal", to: "temporal", color: "#a78bfa", desc: "Links Broca's and Wernicke's areas for speech." },
  { id: "corpus", name: "Corpus Callosum", from: "frontal", to: "parietal", color: "#67e8f9", desc: "Major bridge between left and right hemispheres." },
  { id: "optic", name: "Optic Radiation", from: "occipital", to: "parietal", color: "#fcd34d", desc: "Carries visual information to integration areas." },
  { id: "corticospinal", name: "Corticospinal Tract", from: "frontal", to: "brainstem", color: "#fb7185", desc: "Primary motor commands to the spinal cord." },
  { id: "cerebello", name: "Cerebello-thalamic", from: "cerebellum", to: "frontal", color: "#4ade80", desc: "Fine-tunes motor output from the cerebellum." },
  { id: "limbic", name: "Limbic Pathway", from: "temporal", to: "frontal", color: "#f97316", desc: "Emotional memory routes to executive areas." },
];

const NEUROTRANSMITTERS = [
  { name: "Glutamate", color: "#67e8f9", effect: "Primary excitatory signal", regions: "Cortex-wide" },
  { name: "GABA", color: "#a78bfa", effect: "Primary inhibitory brake", regions: "Interneurons" },
  { name: "Dopamine", color: "#fcd34d", effect: "Reward, motivation, movement", regions: "Frontal, striatum" },
  { name: "Serotonin", color: "#4ade80", effect: "Mood, sleep, appetite", regions: "Brainstem → cortex" },
  { name: "Acetylcholine", color: "#fb7185", effect: "Attention & learning", regions: "Frontal, hippocampus" },
  { name: "Norepinephrine", color: "#f97316", effect: "Alertness & stress response", regions: "Locus coeruleus" },
];

const HERO_METRICS = [
  { value: "86B", label: "Neurons" },
  { value: "100T+", label: "Synapses" },
  { value: "268 mph", label: "Max signal speed" },
  { value: "20W", label: "Power usage" },
  { value: "1,400g", label: "Average mass" },
  { value: "60%", label: "Fat composition" },
];

const FACTS = [
  { title: "Most neurons in the cerebellum", text: "The cerebellum holds ~69 billion of the brain's 86 billion neurons despite being only ~10% of volume." },
  { title: "White matter is wiring", text: "Myelinated axons form white matter tracts — the brain's gigabit ethernet between regions." },
  { title: "Neuroplasticity never stops", text: "Synapses strengthen and prune throughout life — learning physically rewires pathways." },
  { title: "Split-brain experiments", text: "Cutting the corpus callosum revealed how independently the hemispheres can operate." },
  { title: "AI vs. brain efficiency", text: "The brain runs on ~20 watts. Training a large AI model can consume megawatt-hours." },
  { title: "Default mode network", text: "When resting, a network including frontal and temporal regions stays surprisingly active." },
];

const TIMELINE = [
  { year: "1906", title: "Neuron doctrine", text: "Santiago Ramón y Cajal shows the brain is made of individual cells." },
  { year: "1952", title: "Action potential", text: "Hodgkin & Huxley model the math of the neural spike." },
  { year: "1973", title: "LTP discovered", text: "Bliss & Lømo find long-term potentiation — a cellular basis for learning." },
  { year: "1990s", title: "fMRI revolution", text: "Functional MRI lets us watch living brains process tasks in real time." },
  { year: "2013", title: "BRAIN Initiative", text: "Large-scale effort to map every neuron and connection in the brain." },
  { year: "2020s", title: "Connectomics + AI", text: "AI models and brain mapping converge — comparing biological and artificial networks." },
];

const COMPARE = {
  bio: {
    tag: "bio",
    title: "Biological Brain",
    rows: [
      ["Architecture", "Spiking, analog, massively parallel"],
      ["Learning", "Continuous, energy-efficient"],
      ["Connections", "~100 trillion synapses"],
      ["Speed", "Chemical + electrical (~268 mph)"],
      ["Fault tolerance", "High — compensates after injury"],
      ["Power", "~20 watts"],
    ],
  },
  ai: {
    tag: "ai",
    title: "Artificial Neural Network",
    rows: [
      ["Architecture", "Matrix ops, digital, layered"],
      ["Learning", "Batch gradient descent (backprop)"],
      ["Connections", "Millions–trillions of weights"],
      ["Speed", "Digital clock (ns–μs per op)"],
      ["Fault tolerance", "Low — depends on redundancy"],
      ["Power", "Watts to megawatts (training)"],
    ],
  },
};

const TOUR = [
  { region: "frontal", msg: "Frontal lobe — where plans form and decisions emerge." },
  { region: "parietal", msg: "Parietal lobe — maps your body in space." },
  { region: "temporal", msg: "Temporal lobe — stores memories and parses language." },
  { region: "occipital", msg: "Occipital lobe — your visual world is built here." },
  { region: "cerebellum", msg: "Cerebellum — 69 billion neurons fine-tuning every movement." },
  { region: "brainstem", msg: "Brainstem — the autopilot for breathing and heartbeat." },
];

const REGION_CENTroids = {
  frontal: { x: 450, y: 240 },
  parietal: { x: 590, y: 460 },
  temporal: { x: 310, y: 510 },
  occipital: { x: 280, y: 310 },
  cerebellum: { x: 380, y: 620 },
  brainstem: { x: 360, y: 675 },
};

let activeRegion = null;
let activePathway = null;
let tourTimer = null;
let tourStep = 0;
let apFrame = null;
let apAuto = true;
let networkNodes = [];
let networkAnim = null;

const $ = (s) => document.querySelector(s);
const $$ = (s) => document.querySelectorAll(s);

function initBg() {
  const c = $("#bgCanvas");
  const ctx = c.getContext("2d");
  const nodes = Array.from({ length: 90 }, () => ({
    x: Math.random(), y: Math.random(),
    vx: (Math.random() - 0.5) * 0.0004,
    vy: (Math.random() - 0.5) * 0.0004,
  }));

  function resize() {
    c.width = innerWidth;
    c.height = innerHeight;
  }
  resize();
  addEventListener("resize", resize);

  (function loop() {
    ctx.clearRect(0, 0, c.width, c.height);
    nodes.forEach((n) => {
      n.x += n.vx; n.y += n.vy;
      if (n.x < 0 || n.x > 1) n.vx *= -1;
      if (n.y < 0 || n.y > 1) n.vy *= -1;
    });
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const dx = (nodes[i].x - nodes[j].x) * c.width;
        const dy = (nodes[i].y - nodes[j].y) * c.height;
        const d = Math.hypot(dx, dy);
        if (d < 120) {
          ctx.strokeStyle = `rgba(167,139,250,${0.12 * (1 - d / 120)})`;
          ctx.beginPath();
          ctx.moveTo(nodes[i].x * c.width, nodes[i].y * c.height);
          ctx.lineTo(nodes[j].x * c.width, nodes[j].y * c.height);
          ctx.stroke();
        }
      }
    }
    nodes.forEach((n) => {
      ctx.fillStyle = "rgba(103,232,249,0.35)";
      ctx.beginPath();
      ctx.arc(n.x * c.width, n.y * c.height, 1.5, 0, Math.PI * 2);
      ctx.fill();
    });
    requestAnimationFrame(loop);
  })();
}

function initHero() {
  $("#heroMetrics").innerHTML = HERO_METRICS.map(
    (m) => `<div class="metric-card"><div class="metric-card__value">${m.value}</div><div class="metric-card__label">${m.label}</div></div>`
  ).join("");
}

function initNav() {
  const nav = $("#regionNav");
  nav.innerHTML = Object.entries(REGIONS).map(
    ([k, r]) => `<button class="region-pill" data-region="${k}" type="button">${r.name}</button>`
  ).join("");
  nav.querySelectorAll(".region-pill").forEach((b) =>
    b.addEventListener("click", () => selectRegion(b.dataset.region))
  );
}

function initBrainSvg() {
  const regionsG = $("#brainRegions");
  const labelsG = $("#regionLabels");

  Object.entries(REGIONS).forEach(([key, r]) => {
    const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path.setAttribute("d", r.path);
    path.setAttribute("fill", r.color);
    path.setAttribute("fill-opacity", "0.72");
    path.setAttribute("stroke", r.color);
    path.setAttribute("stroke-width", "2");
    path.setAttribute("class", "brain-region");
    path.setAttribute("data-region", key);
    path.setAttribute("tabindex", "0");
    path.setAttribute("role", "button");
    path.setAttribute("aria-label", r.name);
    regionsG.appendChild(path);

    const text = document.createElementNS("http://www.w3.org/2000/svg", "text");
    text.setAttribute("class", "region-label");
    text.setAttribute("data-for", key);
    text.setAttribute("x", r.label.x);
    text.setAttribute("y", r.label.y);
    text.setAttribute("text-anchor", "middle");
    text.textContent = r.name.split(" ")[0];
    labelsG.appendChild(text);
  });

  const linesG = $("#pathwayLines");
  PATHWAYS.forEach((p) => {
    const a = REGION_CENTroids[p.from];
    const b = REGION_CENTroids[p.to];
    const line = document.createElementNS("http://www.w3.org/2000/svg", "path");
    const mx = (a.x + b.x) / 2;
    const my = (a.y + b.y) / 2 - 40;
    line.setAttribute("d", `M ${a.x} ${a.y} Q ${mx} ${my} ${b.x} ${b.y}`);
    line.setAttribute("stroke", p.color);
    line.setAttribute("class", "pathway-line");
    line.setAttribute("data-pathway", p.id);
    linesG.appendChild(line);
  });

  regionsG.querySelectorAll(".brain-region").forEach((el) => {
    el.addEventListener("click", (e) => { e.stopPropagation(); stopTour(); selectRegion(el.dataset.region); });
    el.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") { e.preventDefault(); selectRegion(el.dataset.region); }
    });
  });
}

function initSignalControls() {
  const from = $("#signalFrom");
  const to = $("#signalTo");
  from.innerHTML = to.innerHTML = Object.entries(REGIONS).map(
    ([k, r]) => `<option value="${k}">${r.name}</option>`
  ).join("");
  from.value = "occipital";
  to.value = "frontal";

  $("#signalTrack").innerHTML = Array.from({ length: 12 }, () => `<div class="track-seg"></div>`).join("");
}

function initPathwayList() {
  $("#pathwayList").innerHTML = PATHWAYS.map(
    (p) => `<div class="pathway-item" data-pathway="${p.id}"><div class="pathway-item__name">${p.name}</div><div class="pathway-item__route">${REGIONS[p.from].name} → ${REGIONS[p.to].name}</div><div class="pathway-item__route">${p.desc}</div></div>`
  ).join("");
  $$(".pathway-item").forEach((el) =>
    el.addEventListener("click", () => highlightPathway(el.dataset.pathway))
  );
}

function initNeuro() {
  $("#neuroGrid").innerHTML = NEUROTRANSMITTERS.map(
    (n) => `<div class="neuro-card"><div class="neuro-card__swatch" style="background:${n.color}"></div><div><div class="neuro-card__name">${n.name}</div><div class="neuro-card__effect">${n.effect}</div></div><div class="neuro-card__regions">${n.regions}</div></div>`
  ).join("");
}

function initFacts() {
  $("#factList").innerHTML = FACTS.map((f) => `<li><strong>${f.title}</strong>${f.text}</li>`).join("");
}

function initTimeline() {
  $("#timeline").innerHTML = TIMELINE.map(
    (t) => `<article class="timeline-card"><div class="timeline-card__year">${t.year}</div><div class="timeline-card__title">${t.title}</div><p class="timeline-card__text">${t.text}</p></article>`
  ).join("");
}

function initCompare() {
  $("#compareGrid").innerHTML = Object.values(COMPARE).map((c) => `
    <div class="compare-card">
      <span class="compare-card__tag compare-card__tag--${c.tag}">${c.tag === "bio" ? "Biological" : "Artificial"}</span>
      <div class="compare-card__title">${c.title}</div>
      <table class="compare-table">${c.rows.map(([k, v]) => `<tr><td>${k}</td><td>${v}</td></tr>`).join("")}</table>
    </div>`).join("");
}

function initSynapseChart() {
  const data = Object.entries(REGIONS).map(([k, r]) => {
    const syn = r.stats.find((s) => s.label === "Synapses");
    const val = syn ? parseFloat(syn.value.replace(/[^\d.]/g, "")) : 10;
    return { key: k, name: r.name.split(" ")[0], val, color: r.color };
  });
  const max = Math.max(...data.map((d) => d.val));
  $("#synapseChart").innerHTML = data.map(
    (d) => `<div class="synapse-row"><span class="synapse-row__label">${d.name}</span><div class="synapse-row__track"><div class="synapse-row__fill" data-pct="${(d.val / max) * 100}" style="background:${d.color}"></div></div><span class="synapse-row__val">${d.val}T</span></div>`
  ).join("");
  requestAnimationFrame(() => {
    $$(".synapse-row__fill").forEach((b) => { b.style.width = `${b.dataset.pct}%`; });
  });
}

function selectRegion(key) {
  if (!REGIONS[key]) return;
  activeRegion = key;
  const r = REGIONS[key];

  $$(".brain-region").forEach((el) => {
    el.classList.toggle("is-active", el.dataset.region === key);
    el.classList.toggle("is-dimmed", el.dataset.region !== key);
  });
  $$(".region-label").forEach((el) => el.classList.toggle("is-visible", el.dataset.for === key));
  $$(".region-pill").forEach((el) => el.classList.toggle("is-active", el.dataset.region === key));

  $("#regionBadge").textContent = "Active region";
  $("#regionTitle").textContent = r.name;
  $("#regionRole").textContent = r.role;
  $("#regionDescription").textContent = `${r.name} is a major hub in the brain's distributed network. It communicates through white-matter tracts and coordinates with distant regions in milliseconds.`;
  $("#regionStats").innerHTML = r.stats.map(
    (s) => `<div class="stat-cell"><span class="stat-cell__label">${s.label}</span><span class="stat-cell__value">${s.value}</span></div>`
  ).join("");
  $("#connectionChips").innerHTML = r.connections.map(
    (c) => `<button class="chip" data-region="${c}" type="button">${REGIONS[c].name}</button>`
  ).join("");
  $("#connectionChips").querySelectorAll(".chip").forEach((c) =>
    c.addEventListener("click", () => selectRegion(c.dataset.region))
  );
  $("#functionList").innerHTML = r.functions.map((f) => `<li>${f}</li>`).join("");
  $("#connectionBlock").hidden = false;
  $("#functionsBlock").hidden = false;

  drawActivityChart();
  drawNetworkGraph();
}

function highlightPathway(id) {
  activePathway = id;
  $$(".pathway-line").forEach((l) => l.classList.toggle("is-highlight", l.dataset.pathway === id));
  $$(".pathway-item").forEach((el) => el.classList.toggle("is-active", el.dataset.pathway === id));
  const p = PATHWAYS.find((x) => x.id === id);
  if (p) {
    selectRegion(p.from);
    $("#signalFrom").value = p.from;
    $("#signalTo").value = p.to;
  }
}

function resetAtlas() {
  stopTour();
  activeRegion = null;
  activePathway = null;
  $$(".brain-region").forEach((el) => el.classList.remove("is-active", "is-dimmed"));
  $$(".region-label").forEach((el) => el.classList.remove("is-visible"));
  $$(".region-pill").forEach((el) => el.classList.remove("is-active"));
  $$(".pathway-line").forEach((l) => l.classList.remove("is-highlight", "is-signal"));
  $$(".pathway-item").forEach((el) => el.classList.remove("is-active"));
  $$(".track-seg").forEach((s) => s.classList.remove("is-lit"));
  $("#signalPulse").innerHTML = "";
  $("#regionBadge").textContent = "Select a region";
  $("#regionTitle").textContent = "The Living Network";
  $("#regionRole").textContent = "";
  $("#regionDescription").textContent = "The brain is the most complex network known — trillions of synapses route electrochemical signals that produce thought, memory, emotion, and movement.";
  $("#regionStats").innerHTML = "";
  $("#connectionBlock").hidden = true;
  $("#functionsBlock").hidden = true;
  $("#signalReadout").textContent = "Ready — select origin & destination";
}

function propagateSignal(fromKey, toKey) {
  const from = REGION_CENTroids[fromKey];
  const to = REGION_CENTroids[toKey];
  if (!from || !to) return;

  stopTour();
  selectRegion(fromKey);
  $("#signalReadout").textContent = `Routing: ${REGIONS[fromKey].name} → ${REGIONS[toKey].name}`;

  const pathway = PATHWAYS.find((p) =>
    (p.from === fromKey && p.to === toKey) || (p.from === toKey && p.to === fromKey)
  );
  if (pathway) highlightPathway(pathway.id);

  const pulseG = $("#signalPulse");
  pulseG.innerHTML = "";
  const dot = document.createElementNS("http://www.w3.org/2000/svg", "circle");
  dot.setAttribute("r", "8");
  dot.setAttribute("class", "signal-dot");
  pulseG.appendChild(dot);

  const mx = (from.x + to.x) / 2;
  const my = (from.y + to.y) / 2 - 40;
  let t = 0;
  const segs = $$(".track-seg");

  (function animate() {
    t += 0.025;
    if (t > 1) t = 1;
    const u = 1 - t;
    const x = u * u * from.x + 2 * u * t * mx + t * t * to.x;
    const y = u * u * from.y + 2 * u * t * my + t * t * to.y;
    dot.setAttribute("cx", x);
    dot.setAttribute("cy", y);
    segs.forEach((s, i) => s.classList.toggle("is-lit", i / segs.length <= t));
    if (t < 1) requestAnimationFrame(animate);
    else {
      selectRegion(toKey);
      $("#signalReadout").textContent = `Signal arrived · ${REGIONS[toKey].name} activated`;
    }
  })();
}

function drawActivityChart() {
  const canvas = $("#activityChart");
  const dpr = devicePixelRatio || 1;
  const w = canvas.parentElement.clientWidth - 48;
  canvas.width = w * dpr;
  canvas.height = 320 * dpr;
  canvas.style.width = `${w}px`;
  canvas.style.height = "320px";
  const ctx = canvas.getContext("2d");
  ctx.scale(dpr, dpr);

  const keys = Object.keys(REGIONS);
  const barW = (w - 60) / keys.length - 8;
  const maxH = 220;

  ctx.clearRect(0, 0, w, 320);
  keys.forEach((k, i) => {
    const base = k === "cerebellum" ? 0.95 : k === activeRegion ? 0.85 : 0.35 + Math.random() * 0.3;
    const h = base * maxH;
    const x = 40 + i * (barW + 8);
    const y = 260 - h;
    ctx.fillStyle = REGIONS[k].color;
    ctx.globalAlpha = k === activeRegion ? 1 : 0.55;
    ctx.beginPath();
    ctx.roundRect(x, y, barW, h, 4);
    ctx.fill();
    ctx.globalAlpha = 1;
    ctx.fillStyle = "#8892a8";
    ctx.font = "10px DM Sans";
    ctx.textAlign = "center";
    ctx.fillText(REGIONS[k].name.split(" ")[0], x + barW / 2, 280);
  });
}

function drawNetworkGraph() {
  const canvas = $("#networkCanvas");
  const dpr = devicePixelRatio || 1;
  const w = canvas.parentElement.clientWidth - 48;
  canvas.width = w * dpr;
  canvas.height = 480 * dpr;
  canvas.style.width = `${w}px`;
  canvas.style.height = "480px";

  if (!networkNodes.length) {
    networkNodes = Object.entries(REGIONS).map(([k, r]) => ({
      key: k,
      x: REGION_CENTroids[k].x * (w / 900),
      y: REGION_CENTroids[k].y * (480 / 700),
      vx: 0, vy: 0,
      color: r.color,
      label: r.name.split(" ")[0],
    }));
  }

  if (networkAnim) cancelAnimationFrame(networkAnim);
  const ctx = canvas.getContext("2d");

  (function sim() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.save();
    ctx.scale(dpr, dpr);

    PATHWAYS.forEach((p) => {
      const a = networkNodes.find((n) => n.key === p.from);
      const b = networkNodes.find((n) => n.key === p.to);
      if (!a || !b) return;
      const on = activeRegion === p.from || activeRegion === p.to || activePathway === p.id;
      ctx.strokeStyle = on ? p.color : "rgba(255,255,255,0.08)";
      ctx.lineWidth = on ? 2.5 : 1;
      ctx.globalAlpha = on ? 0.9 : 0.35;
      ctx.beginPath();
      ctx.moveTo(a.x, a.y);
      ctx.lineTo(b.x, b.y);
      ctx.stroke();
      ctx.globalAlpha = 1;
    });

    networkNodes.forEach((n) => {
      if (activeRegion && n.key !== activeRegion) {
        const anchor = networkNodes.find((x) => x.key === activeRegion);
        if (anchor) {
          n.vx += (anchor.x - n.x) * 0.0003;
          n.vy += (anchor.y - n.y) * 0.0003;
        }
      }
      n.vx *= 0.92;
      n.vy *= 0.92;
      n.x += n.vx;
      n.y += n.vy;
      n.x = Math.max(30, Math.min(w - 30, n.x));
      n.y = Math.max(30, Math.min(450, n.y));

      const r = n.key === activeRegion ? 22 : 16;
      ctx.fillStyle = n.color;
      ctx.beginPath();
      ctx.arc(n.x, n.y, r, 0, Math.PI * 2);
      ctx.fill();
      if (n.key === activeRegion) {
        ctx.strokeStyle = "#fff";
        ctx.lineWidth = 2;
        ctx.stroke();
      }
      ctx.fillStyle = "#eef1f8";
      ctx.font = "bold 11px DM Sans";
      ctx.textAlign = "center";
      ctx.fillText(n.label, n.x, n.y + 4);
    });

    ctx.restore();
    networkAnim = requestAnimationFrame(sim);
  })();
}

function startActionPotential() {
  if (apFrame) cancelAnimationFrame(apFrame);
  const canvas = $("#actionPotentialCanvas");
  const ctx = canvas.getContext("2d");
  const w = canvas.width;
  const h = canvas.height;
  let t = 0;

  (function draw() {
    ctx.clearRect(0, 0, w, h);
    ctx.fillStyle = "rgba(255,255,255,0.04)";
    ctx.fillRect(40, 40, w - 80, h - 80);

    ctx.strokeStyle = "rgba(255,255,255,0.1)";
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(40, h / 2);
    ctx.lineTo(w - 40, h / 2);
    ctx.stroke();

    ctx.beginPath();
    ctx.strokeStyle = "#67e8f9";
    ctx.lineWidth = 2.5;
    for (let x = 0; x <= w - 80; x++) {
      const phase = (x / (w - 80) + t) % 1;
      let mv = -70;
      if (phase > 0.15 && phase < 0.22) mv = -70 + ((phase - 0.15) / 0.07) * 110;
      else if (phase >= 0.22 && phase < 0.32) mv = 40 - ((phase - 0.22) / 0.1) * 100;
      else if (phase >= 0.32 && phase < 0.42) mv = -60 + ((phase - 0.32) / 0.1) * 25;
      else if (phase >= 0.42) mv = -70;
      const y = h / 2 - (mv + 70) * 1.4;
      if (x === 0) ctx.moveTo(40 + x, y);
      else ctx.lineTo(40 + x, y);
    }
    ctx.stroke();

    const phaseNow = t % 1;
    let mvNow = -70;
    if (phaseNow > 0.15 && phaseNow < 0.22) mvNow = -70 + ((phaseNow - 0.15) / 0.07) * 110;
    else if (phaseNow >= 0.22 && phaseNow < 0.32) mvNow = 40 - ((phaseNow - 0.22) / 0.1) * 100;
    else if (phaseNow >= 0.32 && phaseNow < 0.42) mvNow = -60 + ((phaseNow - 0.32) / 0.1) * 25;
    $("#apReadout").textContent = `Membrane potential: ${Math.round(mvNow)} mV`;

    t += 0.004;
    if (t > 1 && !apAuto) return;
    if (t > 1) t = 0;
    apFrame = requestAnimationFrame(draw);
  })();
}

function switchTab(name) {
  $$(".detail-panel__tab").forEach((t) => {
    t.classList.toggle("detail-panel__tab--active", t.dataset.tab === name);
  });
  ["overview", "pathways", "neuro", "signal", "facts"].forEach((n) => {
    $(`#pane${n.charAt(0).toUpperCase() + n.slice(1)}`).classList.toggle("detail-panel__pane--hidden", n !== name);
  });
  if (name === "signal") startActionPotential();
}

function startTour() {
  stopTour();
  tourStep = 0;
  runTourStep();
}

function runTourStep() {
  const step = TOUR[tourStep];
  $("#tourToast").hidden = false;
  $("#tourToast").textContent = step.msg;
  selectRegion(step.region);
  tourStep++;
  if (tourStep < TOUR.length) tourTimer = setTimeout(runTourStep, 3000);
  else tourTimer = setTimeout(() => { $("#tourToast").hidden = true; }, 3000);
}

function stopTour() {
  if (tourTimer) clearTimeout(tourTimer);
  tourTimer = null;
  $("#tourToast").hidden = true;
}

function bindEvents() {
  $$(".detail-panel__tab").forEach((t) => t.addEventListener("click", () => switchTab(t.dataset.tab)));
  $("#runSignal").addEventListener("click", () => propagateSignal($("#signalFrom").value, $("#signalTo").value));
  $("#fireSignal").addEventListener("click", () => propagateSignal("occipital", "frontal"));
  $("#startTour").addEventListener("click", startTour);
  $("#resetAtlas").addEventListener("click", resetAtlas);
  $("#replayAP").addEventListener("click", () => { apAuto = false; startActionPotential(); });
  $("#autoAP").addEventListener("change", (e) => { apAuto = e.target.checked; if (apAuto) startActionPotential(); });
  $("#togglePathways").addEventListener("change", (e) => { $("#pathwayLines").style.opacity = e.target.checked ? "1" : "0"; });
  $("#toggleActivity").addEventListener("change", (e) => { $("#signalPulse").style.opacity = e.target.checked ? "1" : "0"; });
  $("#toggleLabels").addEventListener("change", (e) => { $("#regionLabels").style.opacity = e.target.checked ? "1" : "0"; });
  addEventListener("resize", () => { drawActivityChart(); drawNetworkGraph(); });
}

function init() {
  initBg();
  initHero();
  initNav();
  initBrainSvg();
  initSignalControls();
  initPathwayList();
  initNeuro();
  initFacts();
  initTimeline();
  initCompare();
  initSynapseChart();
  bindEvents();
  drawActivityChart();
  drawNetworkGraph();
  setTimeout(() => selectRegion("frontal"), 700);
}

init();
