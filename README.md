# 🚀 SwiftSend

**File transfer doesn't need to be complicated.**

Direct, encrypted file transfers from your computer to anyone, anywhere — no signup, no cloud storage in between. Think of it like AirDrop for everyone.

![SwiftSend Preview](src/assets/hero-illustration.png)

---

## ✨ Features

- 📦 **Transfer Anything** — Send files or folders of any size or format
- 🔒 **Private & Encrypted** — Files go directly to the receiver, never stored online
- ⚡ **Fast Transfers** — Saturate up to 4Gbps connections
- 🚫 **No Accounts** — Open, drop, share. That's it
- 💻 **Cross-Platform** — Windows, macOS, and Linux
- 🔓 **Open Source** — Fully transparent, inspect and verify

---

## 🛠️ Tech Stack

- **React 18** + **TypeScript**
- **Vite** — Lightning-fast dev server & build
- **Tailwind CSS** — Utility-first styling
- **shadcn/ui** — Accessible component library
- **Framer Motion** — Smooth animations
- **React Router** — Client-side routing

---

## 📦 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18+)
- npm or bun

### Clone & Install

```bash
git clone https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
cd YOUR_REPO_NAME
npm install
```

### Run Development Server

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for Production

```bash
npm run build
```

The output will be in the `dist/` folder, ready to deploy anywhere.

---

## 📁 Project Structure

```
src/
├── assets/              # Images and static assets
├── components/
│   ├── ui/              # shadcn/ui components
│   ├── Navbar.tsx        # Navigation bar
│   ├── Hero.tsx          # Hero section
│   ├── HowItWorks.tsx    # 3-step guide
│   ├── Features.tsx      # Feature cards grid
│   ├── Comparison.tsx    # Comparison table
│   ├── FAQ.tsx           # FAQ accordion
│   └── Footer.tsx        # Footer
├── pages/
│   └── Index.tsx         # Main landing page
├── App.tsx               # App router
├── index.css             # Design system & tokens
└── main.tsx              # Entry point
```

---

## 🚀 Deploy

Deploy the `dist/` folder to any static hosting:

- **Lovable** — Click Publish in the editor
- **Vercel** — `npx vercel`
- **Netlify** — Drag & drop `dist/`
- **GitHub Pages** — Use `gh-pages` package

---

## 📄 License

MIT — Free to use, modify, and distribute.

---

Built with ❤️ using [Lovable](https://lovable.dev)
