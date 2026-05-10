[README (4).md](https://github.com/user-attachments/files/27574898/README.4.md)
# 🕸 CCE — Conspiracy Connection Engine
### *The truth doesn't disappear. It just gets harder to find.*

> **Built for the Solana Frontier Hackathon 2026**  
> Censorship-resistant research. AI-powered connection mapping. Truth stored on-chain — forever.

---

## What is CCE?

Every major event in history has a surface story and a deeper one.

CCE is a **desktop research engine** that lets you input any combination of names, places, events, and organizations — and uses AI to map the hidden connections between them that mainstream search engines don't surface, can't surface, or *won't* surface.

It pulls from **uncensored, alternative search sources** — no Google, no algorithmic suppression, no corporate editorial control. Every result comes raw, unfiltered, and ranked by relevance to *your* investigation — not by what an advertiser wants you to see.

And when you find something worth preserving? You write it to **Solana** — permanently, immutably, forever. No government can delete it. No platform can suppress it. No corporation can make it disappear.

**The truth belongs on-chain.**

---

## The Problem

Modern search is broken — not by accident, but by design.

Google's PageRank was revolutionary in 1998. In 2026, it's a tool for surfacing what powerful interests want you to find. Algorithms bury inconvenient connections. Platforms delist researchers. Accounts get suspended for asking the wrong questions.

The result: a generation of curious people who *know* something doesn't add up, but can't find the threads to pull — because the threads keep getting cut.

CCE doesn't accept that. Neither should you.

---

## How It Works

```
You enter terms → CCE searches uncensored sources → 
AI maps hidden connections → You save truth on Solana
```

### 1. Multi-Source Alternative Search
CCE simultaneously queries sources that don't answer to Silicon Valley:

| Source | Why It Matters |
|--------|---------------|
| 🦆 **DuckDuckGo** | No tracking, no personalization bubble |
| 📖 **Wikipedia** | Raw encyclopedic data, unfiltered |
| 🏛 **Internet Archive** | The memory of the web — pages that got deleted |
| 🌿 **Marginalia** | Independent index of the non-commercial web |

### 2. AI Connection Mapping
Every result feeds into Claude AI, which synthesizes connections across your terms that no single source would reveal. Three analysis modes:

- **Analytical** — documented facts, clearly labeled speculation
- **Conspiratorial** — follow the mystery, trust no coincidence  
- **Journalistic** — follow the money, name the names

Three depth levels:
- **Surface** — documented, verifiable links
- **Deep Dive** — lesser-known ties, shared associates, timeline overlaps
- **Rabbit Hole** — financial trails, geographic overlaps, declassified documents, the full picture

### 3. Visual Connection Graph
Every investigation renders as a **glowing node graph** — each term a node, each connection a weighted edge. The stronger the link, the brighter the line. See the web before you read the analysis.

### 4. Save to Solana
When you find something worth preserving, one click writes your investigation to the **Solana blockchain** as an immutable memo transaction:

- Timestamped proof of your research
- Linked to your Phantom wallet
- Permanently verifiable on Solana Explorer
- Immune to deletion, editing, or suppression

**Your investigation becomes part of the permanent record of human inquiry.**

---

## Why Solana?

Because the blockchain is the only ledger no single entity controls.

When a researcher saves their work to Solana through CCE:
- It cannot be deleted by a government
- It cannot be suppressed by a platform
- It cannot be altered by anyone
- It exists as long as Solana exists — which is designed to be forever

In a world where search results get buried, accounts get suspended, and whole bodies of research disappear overnight — **Solana is the archive that can't be burned.**

---

## Demo

> *"What connects Nikola Tesla, the Moon's dark side, quantum portals, Earth's magnetic grid, and Pink Floyd?"*

CCE doesn't just return links. It builds a map:

```
Tesla ──[resonance codes]──► Magnetic Grid
Magnetic Grid ──[portal infrastructure]──► Quantum Portals  
Quantum Portals ──[lunar command]──► Moon's Dark Side
Moon's Dark Side ──[cultural programming]──► Pink Floyd
Pink Floyd ──[suppressed knowledge]──► Tesla
```

**Deep Synthesis:**
*"The data reveals a vast electromagnetic conspiracy spanning from Tesla's suppressed inventions to lunar installations. Tesla didn't just discover alternating current — he unlocked the fundamental resonance codes of reality itself..."*

One click. Permanently on Solana. Try to delete that.

---

## Getting Started

### Prerequisites
- [Node.js](https://nodejs.org) v18+
- An [Anthropic API key](https://console.anthropic.com) (powers the AI engine)
- [Phantom wallet](https://phantom.app) (for saving investigations on-chain)

### Install & Run
```bash
git clone https://github.com/YOUR_USERNAME/cce-browser
cd cce-browser
npm install
npm start
```

The CCE window launches. Enter your API key via the `⚿ API KEY` button. Connect your Phantom wallet. Start investigating.

### Usage
1. **Add terms** — type any name, place, event, or organization and press Enter
2. **Select sources** — toggle which alternative search engines to query
3. **Choose depth & tone** — surface facts or full rabbit hole
4. **Hit Connect the Dots** — watch the AI map the connections
5. **Save to Solana** — click `◎ SAVE INVESTIGATION ON-CHAIN` to immortalize your findings

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Desktop Shell | Electron |
| AI Engine | Claude (Anthropic) via API |
| Search Sources | DuckDuckGo, Wikipedia, Internet Archive, Marginalia |
| Blockchain | Solana (Memo Program) |
| Wallet | Phantom |
| Frontend | Vanilla JS, SVG graph rendering |
| On-chain Storage | Solana Memo Program — immutable transaction records |

---

## Architecture

```
┌─────────────────────────────────────────────────────┐
│                  CCE Desktop App                     │
│                                                      │
│  ┌─────────────────────┐  ┌─────────────────────┐   │
│  │   Research UI       │  │   Electron Shell    │   │
│  │                     │  │                     │   │
│  │  • Term input       │  │  • Native window    │   │
│  │  • Source toggles   │  │  • Header stripping │   │
│  │  • Connection graph │  │  • No CORS limits   │   │
│  │  • AI analysis      │  │  • Cross-platform   │   │
│  └──────────┬──────────┘  └─────────────────────┘   │
│             │                                        │
│  ┌──────────▼──────────────────────────────────┐    │
│  │            Data Layer                        │    │
│  │                                              │    │
│  │  DuckDuckGo API  ──┐                        │    │
│  │  Wikipedia API   ──┤──► AI Synthesis        │    │
│  │  Archive.org API ──┤    (Claude)            │    │
│  │  Marginalia API  ──┘         │              │    │
│  │                              ▼              │    │
│  │                    Solana Blockchain        │    │
│  │                    (Memo Program)           │    │
│  └─────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────┘
```

---

## Roadmap

- [ ] **Yacy integration** — peer-to-peer search, no central server
- [ ] **Tor/I2P proxy** — access .onion sources for the deepest digs  
- [ ] **Local LLM mode** — run Ollama locally, fully offline and air-gapped
- [ ] **Investigation NFTs** — mint your connection maps as visual artifacts
- [ ] **Shared investigations** — collaborate on-chain with other researchers
- [ ] **Timeline view** — arrange connections chronologically
- [ ] **Export to PDF** — generate printable investigation reports
- [ ] **Token incentives** — reward researchers who surface verified connections
- [ ] **Decentralized search nodes** — incentivize running CCE search infrastructure

---

## The Vision

CCE is not a conspiracy theory generator.

It's a **research tool for people who believe the full picture is always worth finding** — whether you're investigating historical cover-ups, corporate malfeasance, government programs, or just trying to understand how the world actually connects beneath its surface.

The mainstream internet is increasingly curated, filtered, and shaped by entities with interests that don't align with yours. CCE is the counter-tool — built on the premise that **free inquiry is a human right**, and that the blockchain is the only archive that can't be quietly edited in the night.

We built CCE because we believe:
- Information wants to be free
- Connections want to be mapped  
- Truth wants to be permanent
- And Solana is the infrastructure that makes permanence possible

**Start investigating. Save what you find. The chain remembers.**

---

## License

MIT — free to use, fork, and build upon. The truth belongs to everyone.

---

## Built With

❤️ + ☕ + a lot of late nights following threads that probably shouldn't be followed

*"The most dangerous phrase in any language is: we've always done it this way."*

---

<div align="center">

**🕸 CCE — Because the dots don't connect themselves 🕸**

[Launch App](#getting-started) · [Solana Explorer](https://explorer.solana.com) · [Phantom Wallet](https://phantom.app)

*Built for the Solana Frontier Hackathon 2026*

</div>
