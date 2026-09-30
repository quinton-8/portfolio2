# ⚡ Quinton Juma — Developer Portfolio

A developer portfolio for **Quinton Juma**, bridging a degree in **Telecommunications Engineering (Kabarak University)** with peer-driven systems programming and full-stack development at **Zone01 Kisumu**.

---

## 🛠️ Tech Stack

- **Core**: React 18, TypeScript, Vite
- **Styling**: Tailwind CSS (custom dark/light high-tech theme)
- **Icons**: Lucide React
- **Micro-Interactions**: Canvas Confetti, smooth CSS glow & scanlines
- **Architecture**: Zero-runtime bloat, purely static deployable bundle (`dist/`)

---

## 🚀 Key Features

1. **Interactive Zone01 CLI Terminal**: Built-in developer shell (`quinton@zone01:~$`) supporting commands (`help`, `efpitch`, `paykit`, `judysales`, `zone01`, `telecom`, `stack`, `contact`, `clear`) with clickable command chips.
2. **Production Systems Showcase**:
   - [efpitch.com](https://efpitch.com): eFootball mobile tournament platform with Clean Architecture, recursive conflict-free match scheduling, and M-Pesa B2C escrow payouts.
   - [paykit-go](https://github.com/quinton-8/paykit-go): Unified Go SDK for Kenyan payment providers (M-Pesa Daraja, Airtel Money, Pesapal, Flutterwave).
   - [JudySales](https://github.com/quinton-8/judysales): High-performance footwear & apparel e-commerce with Go Chi, Next.js 14, and M-Pesa STK Push.
   - Systems Engines: Concurrent TCP socket server (Net-Cat) and Lem-in graph flow optimizer in Go.
3. **One-Click Communication**:
   - WhatsApp direct chat (`+254 733 425 673`) with custom pre-filled message generator.
   - Direct phone link (`0798621270` / `+254 798 621 270`).
   - One-click email copy & mailto (`jumazquinton.jq@gmail.com`).
   - GitHub (`quinton-8`) and LinkedIn (`quinton-juma`) integration.
4. **Theme Customization**: Dark mode (deep carbon `#0B0F17` with emerald/cyan glow) & Light mode (clean paper contrast) with persistent state.

---

## 💻 Local Development

```bash
# 1. Install dependencies
npm install

# 2. Start development server
npm run dev

# 3. Build for production
npm run build

# 4. Preview production build
npm run preview
```

---

## 🚢 Deployment

The generated `dist/` directory can be deployed directly to:
- **GitHub Pages**: Push `dist/` or setup GitHub Actions
- **Vercel**: Import repository (`Framework Preset: Vite`)
- **Netlify**: Publish directory `dist`, build command `npm run build`
- **Cloudflare Pages**: Framework preset `Vite`
