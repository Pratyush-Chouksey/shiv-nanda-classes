# Shiva Nanda Kathak Classes — Official Web Application

> Dedicated to the Cosmic Dancer · Classical Kathak Training in Andheri West, Mumbai · Jaipur Gharana · Founded by Samidha Karanjekar (Alankaar, M.A. Kathak)

A classical, high-performance, mobile-first web platform for **Shiva Nanda Kathak Classes**, featuring traditional Indian temple aesthetics, rich animations (Prabhamandala ring of fire, Nataraja Tandava silhouette, Teen Taal rhythmic wheel, interactive hasta mudras), and production-grade SEO and accessibility.

---

## Table of Contents
1. [Tech Stack](#tech-stack)
2. [Project Architecture](#project-architecture)
3. [Quick Start & Local Development](#quick-start--local-development)
4. [How to Edit Site Content (`content.js`)](#how-to-edit-site-content-contentjs)
5. [How to Add Real Gallery Photos](#how-to-add-real-gallery-photos)
6. [Deployment Guide (Vercel & Netlify)](#deployment-guide-vercel--netlify)
7. [Client Content Checklist (TODOs)](#client-content-checklist-todos)
8. [Performance & Accessibility Standards](#performance--accessibility-standards)

---

## Tech Stack

- **Framework**: React 18 + Vite 8
- **Styling**: Tailwind CSS + Custom CSS Design System (Midnight, Deep Violet, Temple Gold, Vermilion, Saffron)
- **Typography**: Self-hosted Cinzel, Cormorant Garamond, Poppins, and Noto Serif Devanagari (`font-display: swap`)
- **Animations**: CSS Transforms & Keyframes, Lightweight 2D HTML5 Canvas Embers, Smooth Lenis Scrolling, Device Orientation & Haptics
- **SEO & Social**: `react-helmet-async`, Open Graph & Twitter Cards, JSON-LD Structured Data (`DanceSchool`, `LocalBusiness`), XML Sitemap, Robots.txt, Web App Manifest
- **Icons**: Lucide React + Original Custom SVGs (Prabhamandala, Nataraja Tandava, Lotus, Diya, Hasta Mudras)

---

## Quick Start & Local Development

### Prerequisites
- Node.js `v18.0.0` or higher (Node v20+ recommended)
- npm `v9.0.0` or higher

### Installation & Commands

```bash
# 1. Clone the repository
git clone <repo-url>
cd "Shiv Nanda Classes"

# 2. Install dependencies
npm install

# 3. Start local development server (with HMR)
npm run dev
# -> Opens at http://localhost:5173/

# 4. Create production build
npm run build
# -> Outputs minified bundle to dist/

# 5. Preview production build locally
npm run preview
# -> Runs production preview at http://localhost:4173/
```

---

## How to Edit Site Content (`content.js`)

**Every single piece of text, contact detail, course description, and schedule is centralized in ONE file**:
📁 [`src/data/content.js`](./src/data/content.js)

You do **NOT** need to edit JSX code or touch component files to update content. Simply edit the variables in `content.js`:

### 1. Contact & Academy Info (`siteConfig`)
```javascript
export const siteConfig = {
  academyName: "Shiva Nanda Kathak Classes",
  teacherName: "Samidha Karanjekar",
  phone: "99207 64766",
  whatsappNumber: "919920764766",
  email: "samidhakathak111@gmail.com",
  address: "Society 33, D3, MHADA Colony, SVP Nagar...",
  social: {
    instagram: "https://www.instagram.com/samidha.kathak",
    facebook: "https://www.facebook.com/share/1CMuwVCfva/",
    youtube: "https://youtube.com/@samidhakaranjekar",
  },
  // ...
};
```

### 2. Teacher Bio & Lineage (`aboutTeacher`)
- Change Guru names, bio paragraphs, and teaching credentials under `aboutTeacher`.
- Update the second Guru name when confirmed by the client:
  ```javascript
  secondGuru: "Guru Smt. [Second Guru Name]",
  ```

### 3. Courses (`coursesContent`)
- To update course titles, descriptions, levels, or age groups, modify items inside `coursesContent.courses`:
  ```javascript
  {
    id: "prarambhik",
    name: "Prarambhik & Praveshika (Foundation)",
    level: "Beginner",
    fees: "Contact for fee structure & batch availability",
    // ...
  }
  ```

### 4. Schedule & Batches (`scheduleContent`)
- Modify batch days, times, and age cohorts under `scheduleContent.batches`.

### 5. Events & Workshops (`eventsContent`)
- Add or update upcoming events inside `eventsContent.events`.
- If there are no upcoming events, the site automatically displays an elegant *"Next showcase announcing soon"* state.

### 6. Testimonials (`testimonialsContent`)
- Replace the student/parent quote objects in `testimonialsContent.testimonials`.

### 7. FAQs (`faqContent`)
- Update question and answer strings in `faqContent.faqs`.

---

## How to Add Real Gallery Photos

The gallery is built to automatically use real images when you place them in the assets folder:

1. Save your photos in the gallery folder:
   📁 `src/assets/gallery/`
   
   Suggested filenames matching `content.js`:
   - `performance-solo.jpg`
   - `annual-show-ensemble.jpg`
   - `studio-tatkar.jpg`
   - `abhinaya-stage.jpg`
   - `ghungroo-pooja.jpg`
   - `adult-batch.jpg`
   - `tarana-finale.jpg`
   - `junior-mudras.jpg`

2. For teacher portrait, place high-res photo at:
   📁 `src/assets/guru/samidha-karanjekar.jpg`

3. If an image file is not found, the gallery automatically falls back to an artistic classical vector preview with gold accents—so the site **never breaks or shows broken image icons**.

4. To update YouTube video thumbnails and IDs:
   In `src/data/content.js`, update `galleryVideos`:
   ```javascript
   export const galleryVideos = [
     {
       youtubeId: "REAL_VIDEO_ID_HERE", // e.g. from youtube.com/watch?v=REAL_VIDEO_ID
       title: "Jaipur Gharana Kathak Solo - Samidha Karanjekar",
       duration: "4:32",
     },
   ];
   ```

---

## Deployment Guide (Vercel & Netlify)

This project is a static Single Page Application (SPA) that can be deployed to any modern CDN or hosting platform in under 2 minutes.

### Deploying on Vercel

1. Push your repository to GitHub / GitLab / Bitbucket.
2. In the [Vercel Dashboard](https://vercel.com/new), click **Add New Project** and import the repository.
3. Configure build settings:
   - **Framework Preset**: `Vite`
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
   - **Install Command**: `npm install`
4. Add a `vercel.json` file in the root if you need client-side routing rewrites:
   ```json
   {
     "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }]
   }
   ```
5. Click **Deploy**.

---

### Deploying on Netlify

1. In the [Netlify Dashboard](https://app.netlify.com/), click **Add new site** > **Import an existing project**.
2. Select your repository.
3. Configure build settings:
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
4. Add a `public/_redirects` file for SPA routing:
   ```text
   /*    /index.html   200
   ```
5. Click **Deploy site**.

---

## Client Content Checklist (TODOs)

Before final launch, review the following items with Guru Samidha Karanjekar:

- [ ] **Second Guru's Name**: Confirm the exact name of the second Jaipur Gharana Guru to replace `Guru Smt. [TODO: Add Second Guru Name]` in `src/data/content.js`.
- [ ] **Teacher Portrait**: Provide a high-resolution photo of Samidha ji for the About section arch frame (`src/assets/guru/samidha-karanjekar.jpg`).
- [ ] **Fee Structure**: Confirm whether fees should remain "Contact for fee structure & batch availability" (recommended to route inquiries through WhatsApp) or if specific fees should be listed.
- [ ] **Batch Schedule**: Review the class schedule (Tue/Thu/Sat/Sun slots) in `scheduleContent`.
- [ ] **Upcoming Events & Annual Show**: Confirm dates, auditorium venue, and details for the upcoming showcase or intensive workshops.
- [ ] **Real Gallery Photos**: Drop 6–12 performance, classroom riyaz, and ghungroo pooja photos into `src/assets/gallery/`.
- [ ] **YouTube Recital IDs**: Replace the 3 placeholder video IDs in `galleryVideos` with video IDs from the [@samidhakaranjekar](https://youtube.com/@samidhakaranjekar) channel.
- [ ] **Student Testimonials**: Replace the placeholder quotes in `testimonialsContent` with authentic student and parent feedback.
- [ ] **Exact GPS Coordinates**: Confirm Google Maps pin latitude/longitude (`19.1417, 72.8258`) for Society 33, D3, MHADA Colony, SVP Nagar.

---

## Performance & Accessibility Standards

- **Mobile First**: Fluid clamp typography (`clamp(2.35rem, 6.5vw + 1rem, 5.25rem)`), responsive grids, touch-friendly targets ($\ge 44\text{px}$).
- **Accessibility (WCAG 2.1 AA)**:
  - Universal high-contrast gold focus rings (`:focus-visible`).
  - Screen reader accessible names aligned with visible text (`aria-label`).
  - Strict sequential heading hierarchy (`h1` $\rightarrow$ `h2` $\rightarrow$ `h3`).
  - Native `prefers-reduced-motion` compliance.
- **Next-Gen Performance**:
  - Zero render-blocking external font CSS.
  - Self-hosted WOFF2 fonts with `font-display: swap` and preloading.
  - Code-split routes and lazy-loaded below-the-fold sections via `React.lazy` and `IntersectionObserver`.
  - Responsive image width variants (`srcset`, `sizes`) and native `loading="lazy"`.
  - Total Blocking Time (TBT) optimized for mobile devices.
