# Krutarth Ashar — AI & Data Science Engineer Portfolio

A premium, highly interactive portfolio website showcasing my work in Artificial Intelligence, Large Language Model alignment, and Data Science. Built with React 19, TypeScript, Tailwind CSS v4, and modern scroll animations (Lenis & GSAP) to deliver a buttery-smooth 60+ FPS glassmorphism experience.

## ✨ Highlights
- **Performance & Animations:** Features hardware-accelerated animations, smooth scrolling via Lenis, and complex staggered reveal effects.
- **Modern Stack:** Bootstrapped with Vite, utilizing React 19's latest functional components and TypeScript for strict type-safety.
- **Responsive Design:** A custom glassmorphic UI system built with Tailwind CSS v4, entirely responsive and tailored for both desktop and mobile experiences.

## 🚀 Live Demo
*(Add your Vercel deployment link here! e.g., https://krutarth-ashar-ai.vercel.app)*

## 🛠️ Run Locally

**Prerequisites:** Node.js (v18+)

1. **Clone the repository:**
   ```bash
   git clone https://github.com/krutarth3238/liquid-glass-portfolio.git
   cd liquid-glass-portfolio
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. **Build for production:**
   ```bash
   npm run build
   ```

## 📂 Architecture
- **`/src/components`**: All modular React UI elements (Hero, Bento Grid, Infinite Marquee).
- **`/src/data/portfolioData.ts`**: The single source of truth driving the content of the site. Updating this file updates the UI instantly.
- **`/public`**: Static assets, including high-res resume PDFs mapped for direct downloading.
