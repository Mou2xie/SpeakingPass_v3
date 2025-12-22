# SpeakingPass V3 (sp3)

> **Your Strategic Partner for IELTS Speaking Success.**

## 📖 Introduction

**SpeakingPass** is a specialized web application designed to help IELTS candidates navigate the complex and ever-changing landscape of the Speaking test.

**The Problem:** IELTS Speaking topics change seasonally (every 4 months), causing significant anxiety for students who fear encountering unknown questions. Existing resources are often scattered, outdated, or lack high-quality model answers.

**The Solution:** SpeakingPass V3 addresses this by providing a centralized, meticulously organized database of **current** and **past** speaking topics. It offers a structured preparation path with Band 8+ sample answers, ensuring candidates spend less time searching and more time practicing.

**Product Philosophy:**
*   **Relevance First:** Topics are strictly categorized by season (e.g., "Sep - Nov") so users know exactly what to study.
*   **Accessibility:** A clean, mobile-first design ensures study on the go.
*   **Performance:** Fast load times and SEO optimization ensure the content is discoverable and accessible instantly.

## 🚀 Core Features

*   **Comprehensive Question Bank:** Complete coverage of Part 1, Part 2, and Part 3 topics.
*   **Smart Categorization:**
    *   **Current Season:** The latest questions currently being asked in exams.
    *   **Must-Test:** High-probability topics that frequently recur.
    *   **Past Archive:** A vast library of historical questions for extensive practice.
*   **Band 8+ Sample Answers:** Expertly crafted responses to demonstrate vocabulary, structure, and fluency.
*   **Ad-Supported Free Access:** Integrated with Google AdSense to sustain free access for students.
*   **High-Performance UX:** SEO-optimized pages with instant page transitions and optimized font loading.

## 🛠 Tech Stack

Built with a focus on performance, scalability, and modern web standards.

*   **Framework:** [Next.js 15](https://nextjs.org/) (App Router) - Utilizing React Server Components for superior performance and SEO.
*   **Language:** [TypeScript](https://www.typescriptlang.org/) - Ensuring type safety and code robustness.
*   **UI Library:** [React 19](https://react.dev/)
*   **Styling:** [Tailwind CSS v4](https://tailwindcss.com/) & [DaisyUI v5](https://daisyui.com/) - For rapid, utility-first, and consistent UI development.
*   **Backend/Database:** [Supabase](https://supabase.com/) - Providing a scalable PostgreSQL database for dynamic content management.
*   **Icons:** [Remix Icon](https://remixicon.com/)
*   **Analytics:** Google Analytics 4 (GA4)

## ⚡️ Getting Started

Follow these steps to set up the project locally.

### Prerequisites
*   Node.js (v20+ recommended)
*   Supabase Project Credentials

### Installation

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/Mou2xie/SpeakingPass_v3.git
    cd sp3
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Configure Environment:**
    Create a `.env.local` file in the root directory and add your Supabase keys:
    ```env
    SUPABASE_URL=your_project_url
    SUPABASE_KEY=your_anon_key
    ```

4.  **Run Development Server:**
    ```bash
    npm run dev
    ```
    Open [http://localhost:3000](http://localhost:3000) to view the application.

## 💡 Highlights & Engineering Insights

### 1. Modern Architecture (Next.js App Router)
Transitioned to the **App Router** to leverage **React Server Components (RSC)**. This allows us to fetch data directly on the server (e.g., in `page.tsx` via `getAllPart1Categories`), reducing the client-side bundle size and significantly improving **First Contentful Paint (FCP)**.

### 2. SEO & Performance Optimization
*   **Dynamic Metadata:** Each topic page generates unique titles and descriptions for optimal search engine indexing.
*   **Font Optimization:** Using `next/font` to self-host and preload Google Fonts (PT Serif, Bree Serif, Oswald), eliminating layout shifts (CLS).
*   **Sitemap Generation:** Automated sitemap creation (`next-sitemap`) ensures new topics are indexed immediately upon publication.

### 3. Scalable Data Management
Integration with **Supabase** allows for real-time updates to the question bank without redeploying the application. The content structure allows for easy "season rotations," updating the `CURRENT_MONTH` constant to instantly reflect the new exam cycle across the entire site.

## 🔮 Future Roadmap

*   **User Accounts:** Personal dashboards to track practiced topics and bookmark difficult questions.
*   **AI Coach:** Integration of Speech-to-Text and LLMs to provide instant feedback on pronunciation and grammar.
*   **Premium Tier:** Ad-free experience with exclusive "Band 9" strategy videos.