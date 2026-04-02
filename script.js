const HEX_R = 68;

const REGIONS = {
  frontal: {
    name: "Frontal Lobe",
    role: "Executive control & planning",
    color: "#0d6e6e",
    center: { x: 400, y: 148 },
    stats: [
      { label: "Volume share", value: "~41%" },
      { label: "Key cells", value: "Pyramidal neurons" },
      { label: "Myelination", value: "Late (into 20s)" },
      { label: "Synapses", value: "~40T est." },
    ],
    functions: ["Decision making", "Working memory", "Motor planning", "Speech (Broca's)"],
    connections: ["parietal", "temporal", "brainstem"],
  },
  parietal: {
    name: "Parietal Lobe",
    role: "Spatial processing",
    color: "#3a8fb7",
    center: { x: 590, y: 268 },
    stats: [
      { label: "Volume share", value: "~19%" },
      { label: "Specialization", value: "Somatosensory cortex" },
      { label: "Hemispheres", value: "L: language · R: spatial" },
      { label: "Synapses", value: "~18T est." },
    ],
    functions: ["Touch & proprioception", "Spatial awareness", "Number processing", "Attention shifting"],
    connections: ["frontal", "occipital", "temporal"],
  },
  occipital: {
    name: "Occipital Lobe",
    role: "Visual processing",
    color: "#c49a3c",
    center: { x: 210, y: 268 },
    stats: [
      { label: "Volume share", value: "~12%" },
      { label: "Primary area", value: "V1 visual cortex" },
      { label: "Speed to V1", value: "~13 ms" },
      { label: "Synapses", value: "~10T est." },
    ],
    functions: ["Edge & color detection", "Motion processing", "Depth perception", "Object recognition"],
    connections: ["parietal", "temporal"],
  },
  temporal: {
    name: "Temporal Lobe",
    role: "Memory & language",
    color: "#e85d4c",
    center: { x: 210, y: 448 },
    stats: [
      { label: "Volume share", value: "~22%" },
      { label: "Key structure", value: "Hippocampus" },
      { label: "Processing", value: "Auditory + memory" },
      { label: "Synapses", value: "~22T est." },
    ],
    functions: ["Long-term memory", "Language (Wernicke's)", "Face recognition", "Emotion (amygdala)"],
    connections: ["frontal", "parietal", "brainstem"],
  },
  cerebellum: {
    name: "Cerebellum",
    role: "Motor coordination",
    color: "#5a9a6e",
    center: { x: 400, y: 448 },
    stats: [
      { label: "Neurons", value: "~69 billion" },
      { label: "Brain volume", value: "~10%" },
      { label: "Input ratio", value: "40:1 in vs. out" },
      { label: "Synapses", value: "~150T est." },
    ],
    functions: ["Balance & posture", "Motor learning", "Timing & precision", "Prediction"],
    connections: ["brainstem", "frontal"],
  },
  brainstem: {
    name: "Brainstem",
    role: "Autonomic relay",
    color: "#8b5a7a",
    center: { x: 590, y: 448 },
    stats: [
      { label: "Structures", value: "Midbrain, pons, medulla" },
      { label: "Autonomic", value: "Heart rate, breathing" },
      { label: "Arousal", value: "Sleep/wake cycles" },
      { label: "Synapses", value: "~8T est." },
    ],
    functions: ["Breathing & heart rate", "Sleep regulation", "Consciousness arousal", "Cranial nerve relay"],
    connections: ["frontal", "temporal", "cerebellum"],
  },
};

const PATHWAYS = [
  { id: "arcuate", name: "Arcuate Fasciculus", from: "frontal", to: "temporal", color: "#0d6e6e", desc: "Links Broca's and Wernicke's areas for speech." },
  { id: "corpus", name: "Corpus Callosum", from: "frontal", to: "parietal", color: "#3a8fb7", desc: "Bridge between left and right hemispheres." },
  { id: "optic", name: "Optic Radiation", from: "occipital", to: "parietal", color: "#c49a3c", desc: "Visual information to integration areas." },
  { id: "corticospinal", name: "Corticospinal Tract", from: "frontal", to: "brainstem", color: "#e85d4c", desc: "Motor commands to the spinal cord." },
  { id: "cerebello", name: "Cerebello-thalamic", from: "cerebellum", to: "frontal", color: "#5a9a6e", desc: "Fine-tunes motor output." },
  { id: "limbic", name: "Limbic Pathway", from: "temporal", to: "frontal", color: "#8b5a7a", desc: "Emotional memory to executive areas." },
];

const NEUROTRANSMITTERS = [
  { name: "Glutamate", color: "#3a8fb7", effect: "Primary excitatory signal" },
  { name: "GABA", color: "#0d6e6e", effect: "Primary inhibitory brake" },
  { name: "Dopamine", color: "#c49a3c", effect: "Reward, motivation, movement" },
  { name: "Serotonin", color: "#5a9a6e", effect: "Mood, sleep, appetite" },
  { name: "Acetylcholine", color: "#e85d4c", effect: "Attention & learning" },
  { name: "Norepinephrine", color: "#8b5a7a", effect: "Alertness & stress response" },
];

const HERO_METRICS = [
  { value: "86B", label: "Neurons" },
  { value: "100T+", label: "Synapses" },
  { value: "268 mph", label: "Signal speed" },
  { value: "20W", label: "Power" },
  { value: "1,400g", label: "Mass" },
  { value: "60%", label: "Fat" },
];

const FACTS = [
  { title: "Cerebellum density", text: "The cerebellum holds ~69 billion neurons — most of the brain's total count." },
  { title: "White matter wiring", text: "Myelinated axons form tracts that transmit signals up to 268 mph." },
  { title: "Neuroplasticity", text: "Learning physically rewires synaptic connections throughout life." },
  { title: "Split-brain research", text: "Corpus callosum studies revealed independent hemisphere processing." },
  { title: "Energy efficiency", text: "The brain runs on ~20 watts — far less than large AI training runs." },
  { title: "Default mode network", text: "Resting brains show active connectivity across frontal and temporal hubs." },
];

const TIMELINE = [
  { year: "1906", title: "Neuron doctrine", text: "Cajal shows the brain is made of individual cells." },
  { year: "1952", title: "Action potential", text: "Hodgkin & Huxley model the neural spike mathematically." },
  { year: "1973", title: "LTP discovered", text: "A cellular mechanism for learning and memory." },
  { year: "1990s", title: "fMRI era", text: "Watch living brains process tasks in real time." },
  { year: "2013", title: "BRAIN Initiative", text: "Global push to map neural connections." },
  { year: "2020s", title: "Connectomics + AI", text: "Brain maps meet artificial network design." },
];

const COMPARE = {
  bio: { tag: "bio", title: "Biological Brain", rows: [
    ["Architecture", "Spiking, analog, parallel"],
    ["Learning", "Continuous, efficient"],
    ["Connections", "~100 trillion synapses"],
    ["Speed", "Chemical + electrical"],
    ["Fault tolerance", "High — compensates after injury"],
    ["Power", "~20 watts"],
  ]},
  ai: { tag: "ai", title: "Artificial Neural Net", rows: [
    ["Architecture", "Matrix ops, digital, layered"],
    ["Learning", "Batch gradient descent"],
    ["Connections", "Millions–trillions of weights"],
    ["Speed", "Digital clock (ns–μs)"],
    ["Fault tolerance", "Low — needs redundancy"],
    ["Power", "Watts to megawatts"],
  ]},
};

const TOUR = [
  { region: "frontal", msg: "Frontal lobe — planning, decisions, and working memory." },
  { region: "parietal", msg: "Parietal lobe — maps your body in space." },
  { region: "occipital", msg: "Occipital lobe — builds your visual world." },
  { region: "temporal", msg: "Temporal lobe — memory and language comprehension." },
  { region: "cerebellum", msg: "Cerebellum — 69 billion neurons for motor precision." },
  { region: "brainstem", msg: "Brainstem — autopilot for breathing and heartbeat." },
];

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

function hexPoints(cx, cy, r) {
  return Array.from({ length: 6 }, (_, i) => {
    const rad = (Math.PI / 180) * (60 * i - 30);
    return `${cx + r * Math.cos(rad)},${cy + r * Math.sin(rad)}`;
  }).join(" ");
}

function initHero() {
  $("#heroMetrics").innerHTML = HERO_METRICS.map(
    (m) => `<div class="metric-inline"><span class="metric-inline__val">${m.value}</span><span class="metric-inline__lbl">${m.label}</span></div>`
  ).join("");
}

function initNav() {
  $("#regionNav").innerHTML = Object.entries(REGIONS).map(
    ([k, r]) => `<button class="region-card" data-region="${k}" type="button"><span class="region-card__swatch" style="background:${r.color}"></span><span><span class="region-card__name">${r.name}</span><span class="region-card__role">${r.role}</span></span></button>`
  ).join("");
  $$(".region-card").forEach((b) => b.addEventListener("click", () => selectRegion(b.dataset.region)));
}

function initHexMap() {
  const hexG = $("#hexRegions");
  const labelsG = $("#regionLabels");

  Object.entries(REGIONS).forEach(([key, r]) => {
    const g = document.createElementNS("http://www.w3.org/2000/svg", "g");
    g.setAttribute("class", "hex-cell");
    g.setAttribute("data-region", key);
    g.setAttribute("tabindex", "0");
    g.setAttribute("role", "button");
    g.setAttribute("aria-label", r.name);

    const poly = document.createElementNS("http://www.w3.org/2000/svg", "polygon");
    poly.setAttribute("points", hexPoints(r.center.x, r.center.y, HEX_R));
    poly.setAttribute("fill", r.color);
    poly.setAttribute("fill-opacity", "0.88");
    g.appendChild(poly);

    const text = document.createElementNS("http://www.w3.org/2000/svg", "text");
    text.setAttribute("class", "region-tag");
    text.setAttribute("data-for", key);
    text.setAttribute("x", r.center.x);
    text.setAttribute("y", r.center.y - 6);
    text.setAttribute("text-anchor", "middle");
    text.setAttribute("font-size", "11");
    text.textContent = r.name.split(" ")[0];

    const sub = document.createElementNS("http://www.w3.org/2000/svg", "text");
    sub.setAttribute("class", "region-tag");
    sub.setAttribute("data-for", key);
    sub.setAttribute("x", r.center.x);
    sub.setAttribute("y", r.center.y + 10);
    sub.setAttribute("text-anchor", "middle");
    sub.setAttribute("font-size", "9");
    sub.setAttribute("fill", "#fff");
    sub.textContent = "Lobe";

    hexG.appendChild(g);
    labelsG.appendChild(text);
    labelsG.appendChild(sub);
  });

  const linesG = $("#pathwayLines");
  PATHWAYS.forEach((p) => {
    const a = REGIONS[p.from].center;
    const b = REGIONS[p.to].center;
    const line = document.createElementNS("http://www.w3.org/2000/svg", "line");
    line.setAttribute("x1", a.x);
    line.setAttribute("y1", a.y);
    line.setAttribute("x2", b.x);
    line.setAttribute("y2", b.y);
    line.setAttribute("stroke", p.color);
    line.setAttribute("class", "pathway-line");
    line.setAttribute("data-pathway", p.id);
    linesG.appendChild(line);
  });

  hexG.querySelectorAll(".hex-cell").forEach((el) => {
    el.addEventListener("click", (e) => { e.stopPropagation(); stopTour(); selectRegion(el.dataset.region); });
    el.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") { e.preventDefault(); selectRegion(el.dataset.region); }
    });
  });
}

function initSignalControls() {
  const opts = Object.entries(REGIONS).map(([k, r]) => `<option value="${k}">${r.name}</option>`).join("");
  $("#signalFrom").innerHTML = opts;
  $("#signalTo").innerHTML = opts;
  $("#signalFrom").value = "occipital";
  $("#signalTo").value = "frontal";
  $("#signalTrack").innerHTML = Array.from({ length: 10 }, () => `<div class="track-seg"></div>`).join("");
}

function initPathwayList() {
  $("#pathwayList").innerHTML = PATHWAYS.map(
    (p) => `<div class="pathway-item" data-pathway="${p.id}"><div class="pathway-item__name">${p.name}</div><div class="pathway-item__route">${REGIONS[p.from].name} → ${REGIONS[p.to].name}</div><div class="pathway-item__route">${p.desc}</div></div>`
  ).join("");
  $$(".pathway-item").forEach((el) => el.addEventListener("click", () => highlightPathway(el.dataset.pathway)));
}

function initNeuro() {
  $("#neuroGrid").innerHTML = NEUROTRANSMITTERS.map(
    (n) => `<div class="neuro-card"><div class="neuro-card__swatch" style="background:${n.color}"></div><div><div class="neuro-card__name">${n.name}</div><div class="neuro-card__effect">${n.effect}</div></div></div>`
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
      <div class="compare-card__tag compare-card__tag--${c.tag}">${c.tag === "bio" ? "Biological" : "Artificial"}</div>
      <div class="compare-card__title">${c.title}</div>
      <table class="compare-table">${c.rows.map(([k, v]) => `<tr><td>${k}</td><td>${v}</td></tr>`).join("")}</table>
    </div>`).join("");
}

function initSynapseChart() {
  const data = Object.entries(REGIONS).map(([k, r]) => {
    const syn = r.stats.find((s) => s.label === "Synapses" || s.label.includes("Synapse"));
    const val = syn ? parseFloat(syn.value.replace(/[^\d.]/g, "")) : 10;
    return { key: k, name: r.name.split(" ")[0], val, color: r.color };
  });
  const max = Math.max(...data.map((d) => d.val));
  $("#synapseChart").innerHTML = data.map(
    (d) => `<div class="synapse-row"><span class="synapse-row__label">${d.name}</span><div class="synapse-row__track"><div class="synapse-row__fill" data-pct="${(d.val / max) * 100}" style="background:${d.color}"></div></div><span class="synapse-row__val">${d.val}T</span></div>`
  ).join("");
  requestAnimationFrame(() => $$(".synapse-row__fill").forEach((b) => { b.style.width = `${b.dataset.pct}%`; }));
}

function selectRegion(key) {
  if (!REGIONS[key]) return;
  activeRegion = key;
  const r = REGIONS[key];

  $$(".hex-cell").forEach((el) => {
    el.classList.toggle("is-active", el.dataset.region === key);
    el.classList.toggle("is-dimmed", el.dataset.region !== key);
  });
  $$(".region-card").forEach((el) => el.classList.toggle("is-active", el.dataset.region === key));

  $("#regionBadge").textContent = "Active";
  $("#regionTitle").textContent = r.name;
  $("#regionRole").textContent = r.role;
  $("#regionDescription").textContent = `${r.name} is a major hub routing signals across the brain via white-matter tracts and local synaptic networks.`;
  $("#regionStats").innerHTML = r.stats.map(
    (s) => `<div class="stat-cell"><span class="stat-cell__label">${s.label}</span><span class="stat-cell__value">${s.value}</span></div>`
  ).join("");
  $("#connectionChips").innerHTML = r.connections.map(
    (c) => `<button class="chip" data-region="${c}" type="button">${REGIONS[c].name}</button>`
  ).join("");
  $("#connectionChips").querySelectorAll(".chip").forEach((c) => c.addEventListener("click", () => selectRegion(c.dataset.region)));
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
  $$(".hex-cell").forEach((el) => el.classList.remove("is-active", "is-dimmed"));
  $$(".region-card").forEach((el) => el.classList.remove("is-active"));
  $$(".pathway-line").forEach((l) => l.classList.remove("is-highlight"));
  $$(".pathway-item").forEach((el) => el.classList.remove("is-active"));
  $$(".track-seg").forEach((s) => s.classList.remove("is-lit"));
  $("#signalPulse").innerHTML = "";
  $("#regionBadge").textContent = "No region selected";
  $("#regionTitle").textContent = "The Living Network";
  $("#regionRole").textContent = "";
  $("#regionDescription").textContent = "The brain routes information through specialized regions linked by white-matter highways. Select a region to inspect its role in the network.";
  $("#regionStats").innerHTML = "";
  $("#connectionBlock").hidden = true;
  $("#functionsBlock").hidden = true;
  $("#signalReadout").textContent = "Select origin and destination";
}

function propagateSignal(fromKey, toKey) {
  const from = REGIONS[fromKey]?.center;
  const to = REGIONS[toKey]?.center;
  if (!from || !to) return;

  stopTour();
  selectRegion(fromKey);
  $("#signalReadout").textContent = `${REGIONS[fromKey].name.split(" ")[0]} → ${REGIONS[toKey].name.split(" ")[0]}`;

  const pathway = PATHWAYS.find((p) =>
    (p.from === fromKey && p.to === toKey) || (p.from === toKey && p.to === fromKey)
  );
  if (pathway) highlightPathway(pathway.id);

  const pulseG = $("#signalPulse");
  pulseG.innerHTML = "";
  const dot = document.createElementNS("http://www.w3.org/2000/svg", "circle");
  dot.setAttribute("r", "9");
  dot.setAttribute("class", "signal-dot");
  pulseG.appendChild(dot);

  let t = 0;
  const segs = $$(".track-seg");

  (function animate() {
    t += 0.03;
    if (t > 1) t = 1;
    dot.setAttribute("cx", from.x + (to.x - from.x) * t);
    dot.setAttribute("cy", from.y + (to.y - from.y) * t);
    segs.forEach((s, i) => s.classList.toggle("is-lit", i / segs.length <= t));
    if (t < 1) requestAnimationFrame(animate);
    else {
      selectRegion(toKey);
      $("#signalReadout").textContent = `Arrived · ${REGIONS[toKey].name.split(" ")[0]}`;
    }
  })();
}

function drawActivityChart() {
  const canvas = $("#activityChart");
  const dpr = devicePixelRatio || 1;
  const w = canvas.parentElement.clientWidth - 40;
  canvas.width = w * dpr;
  canvas.height = 240 * dpr;
  canvas.style.width = `${w}px`;
  canvas.style.height = "240px";
  const ctx = canvas.getContext("2d");
  ctx.scale(dpr, dpr);
  ctx.clearRect(0, 0, w, 240);

  const keys = Object.keys(REGIONS);
  const barW = Math.min(48, (w - 60) / keys.length - 10);
  const maxH = 160;

  keys.forEach((k, i) => {
    const base = k === "cerebellum" ? 0.92 : k === activeRegion ? 0.82 : 0.3 + (i * 0.08);
    const h = base * maxH;
    const x = 30 + i * (barW + 10);
    ctx.fillStyle = REGIONS[k].color;
    ctx.globalAlpha = k === activeRegion ? 1 : 0.5;
    ctx.fillRect(x, 200 - h, barW, h);
    ctx.globalAlpha = 1;
    ctx.fillStyle = "#7a7a92";
    ctx.font = "10px IBM Plex Sans";
    ctx.textAlign = "center";
    ctx.fillText(REGIONS[k].name.split(" ")[0], x + barW / 2, 220);
  });
}

function drawNetworkGraph() {
  const canvas = $("#networkCanvas");
  const dpr = devicePixelRatio || 1;
  const w = canvas.parentElement.clientWidth - 32;
  canvas.width = w * dpr;
  canvas.height = 520 * dpr;
  canvas.style.width = `${w}px`;
  canvas.style.height = "520px";

  if (!networkNodes.length) {
    networkNodes = Object.entries(REGIONS).map(([k, r]) => ({
      key: k,
      x: r.center.x * (w / 800),
      y: r.center.y * (520 / 720),
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
    ctx.fillStyle = "#faf8f5";
    ctx.fillRect(0, 0, w, 520);

    PATHWAYS.forEach((p) => {
      const a = networkNodes.find((n) => n.key === p.from);
      const b = networkNodes.find((n) => n.key === p.to);
      if (!a || !b) return;
      const on = activeRegion === p.from || activeRegion === p.to || activePathway === p.id;
      ctx.strokeStyle = on ? p.color : "#ddd6cc";
      ctx.lineWidth = on ? 2.5 : 1;
      ctx.globalAlpha = on ? 0.9 : 0.4;
      ctx.beginPath();
      ctx.moveTo(a.x, a.y);
      ctx.lineTo(b.x, b.y);
      ctx.stroke();
      ctx.globalAlpha = 1;
    });

    networkNodes.forEach((n) => {
      if (activeRegion) {
        const anchor = networkNodes.find((x) => x.key === activeRegion);
        if (anchor && n.key !== activeRegion) {
          n.vx += (anchor.x - n.x) * 0.0004;
          n.vy += (anchor.y - n.y) * 0.0004;
        }
      }
      n.vx *= 0.9;
      n.vy *= 0.9;
      n.x = Math.max(40, Math.min(w - 40, n.x + n.vx));
      n.y = Math.max(40, Math.min(480, n.y + n.vy));

      const r = n.key === activeRegion ? 28 : 22;
      ctx.fillStyle = n.color;
      ctx.beginPath();
      ctx.arc(n.x, n.y, r, 0, Math.PI * 2);
      ctx.fill();
      if (n.key === activeRegion) {
        ctx.strokeStyle = "#1a1a2e";
        ctx.lineWidth = 2.5;
        ctx.stroke();
      }
      ctx.fillStyle = n.key === activeRegion ? "#fff" : "#1a1a2e";
      ctx.font = `bold ${n.key === activeRegion ? 12 : 10}px IBM Plex Sans`;
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillText(n.label, n.x, n.y);
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
    ctx.fillStyle = "#f7f3ee";
    ctx.fillRect(0, 0, w, h);
    ctx.strokeStyle = "#ddd6cc";
    ctx.beginPath();
    ctx.moveTo(20, h / 2);
    ctx.lineTo(w - 20, h / 2);
    ctx.stroke();

    ctx.beginPath();
    ctx.strokeStyle = "#0d6e6e";
    ctx.lineWidth = 2;
    for (let x = 0; x <= w - 40; x++) {
      const phase = (x / (w - 40) + t) % 1;
      let mv = -70;
      if (phase > 0.15 && phase < 0.22) mv = -70 + ((phase - 0.15) / 0.07) * 110;
      else if (phase >= 0.22 && phase < 0.32) mv = 40 - ((phase - 0.22) / 0.1) * 100;
      else if (phase >= 0.32 && phase < 0.42) mv = -60 + ((phase - 0.32) / 0.1) * 25;
      const y = h / 2 - (mv + 70) * 1.1;
      if (x === 0) ctx.moveTo(20 + x, y);
      else ctx.lineTo(20 + x, y);
    }
    ctx.stroke();

    const phaseNow = t % 1;
    let mvNow = -70;
    if (phaseNow > 0.15 && phaseNow < 0.22) mvNow = -70 + ((phaseNow - 0.15) / 0.07) * 110;
    else if (phaseNow >= 0.22 && phaseNow < 0.32) mvNow = 40 - ((phaseNow - 0.22) / 0.1) * 100;
    else if (phaseNow >= 0.32 && phaseNow < 0.42) mvNow = -60 + ((phaseNow - 0.32) / 0.1) * 25;
    $("#apReadout").textContent = `Membrane: ${Math.round(mvNow)} mV`;

    t += 0.005;
    if (t > 1 && !apAuto) return;
    if (t > 1) t = 0;
    apFrame = requestAnimationFrame(draw);
  })();
}

function switchTab(name) {
  $$(".inspector__tab").forEach((t) => t.classList.toggle("inspector__tab--active", t.dataset.tab === name));
  ["overview", "pathways", "neuro", "signal", "facts"].forEach((n) => {
    $(`#pane${n.charAt(0).toUpperCase() + n.slice(1)}`).classList.toggle("inspector__body--hidden", n !== name);
  });
  if (name === "signal") startActionPotential();
}

function switchMapView(view) {
  $$(".map-tab").forEach((t) => t.classList.toggle("map-tab--active", t.dataset.view === view));
  $("#viewHex").classList.toggle("map-view--active", view === "hex");
  $("#viewNetwork").classList.toggle("map-view--active", view === "network");
  if (view === "network") drawNetworkGraph();
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
  if (tourStep < TOUR.length) tourTimer = setTimeout(runTourStep, 2800);
  else tourTimer = setTimeout(() => { $("#tourToast").hidden = true; }, 2800);
}

function stopTour() {
  if (tourTimer) clearTimeout(tourTimer);
  tourTimer = null;
  $("#tourToast").hidden = true;
}

function bindEvents() {
  $$(".inspector__tab").forEach((t) => t.addEventListener("click", () => switchTab(t.dataset.tab)));
  $$(".map-tab").forEach((t) => t.addEventListener("click", () => switchMapView(t.dataset.view)));
  $("#runSignal").addEventListener("click", () => propagateSignal($("#signalFrom").value, $("#signalTo").value));
  $("#fireSignal").addEventListener("click", () => propagateSignal("occipital", "frontal"));
  $("#startTour").addEventListener("click", startTour);
  $("#resetAtlas").addEventListener("click", resetAtlas);
  $("#replayAP").addEventListener("click", () => { apAuto = false; startActionPotential(); });
  $("#autoAP").addEventListener("change", (e) => { apAuto = e.target.checked; if (apAuto) startActionPotential(); });
  $("#togglePathways").addEventListener("change", (e) => { $("#pathwayLines").style.opacity = e.target.checked ? "1" : "0"; });
  $("#toggleLabels").addEventListener("change", (e) => { $("#regionLabels").style.opacity = e.target.checked ? "1" : "0"; });
  addEventListener("resize", () => { drawActivityChart(); if ($("#viewNetwork").classList.contains("map-view--active")) drawNetworkGraph(); });
}

function init() {
  initHero();
  initNav();
  initHexMap();
  initSignalControls();
  initPathwayList();
  initNeuro();
  initFacts();
  initTimeline();
  initCompare();
  initSynapseChart();
  bindEvents();
  drawActivityChart();
  setTimeout(() => selectRegion("frontal"), 600);
}

init();
