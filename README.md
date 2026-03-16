# Neural Pathway Atlas

A large-scale interactive brain network explorer — region maps, signal simulation, connectivity graphs, neurotransmitter profiles, and biological vs. AI comparison.

## Features

- **6 clickable brain regions** with stats, functions, and connection chips
- **Signal route simulator** — propagate signals between any two regions with animated pathway tracing
- **5-tab detail panel** — Overview, Pathways, Neurotransmitters, Signal Lab, Facts
- **Live connectivity graph** — force-directed canvas network (draggable nodes)
- **Regional activity chart** & synaptic throughput bars
- **Action potential lab** — animated membrane voltage waveform
- **Brain vs. AI comparison** table
- **Neuroscience timeline** scroll
- **Guided pathway tour** through all regions
- **Animated neural starfield** background
- Zero dependencies — vanilla HTML, CSS, JavaScript

## Run locally

```bash
python3 -m http.server 8080
```

Open `http://localhost:8080`.

## Interaction

1. Click brain regions or use the sticky nav pills
2. Set origin/destination and hit **Propagate** to simulate signal routing
3. Open **Pathways** tab to highlight white-matter tracts
4. Try **Launch Pathway Tour** for a guided walkthrough
5. Explore the connectivity graph and comparison section below
