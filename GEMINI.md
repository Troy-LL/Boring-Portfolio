# Boring Portfolio (TLPortfolio)

A modern, high-performance portfolio website for **Troy Lauren T. Lazaro**, built with Next.js 14, React, and TypeScript. The project focuses on a clean, professional dark aesthetic with smooth animations and a focus on AI/ML research and full-stack development.

## Project Overview

- **Purpose:** Showcase professional background, projects, AI/ML research, and community involvement.
- **Core Stack:** 
    - **Framework:** Next.js 14 (App Router)
    - **Language:** TypeScript
    - **Styling:** Tailwind CSS + Vanilla CSS (for custom scrollbars and base layers)
    - **Animations:** AOS (Animate On Scroll)
    - **Icons:** Lucide React
    - **Utility:** Luxon (for date handling)

## Architecture

- **`src/app/`**: Contains the main application routes and layouts.
    - `page.tsx`: The primary landing page (Hero, Experience, TechStack, Projects, Contact).
    - `gallery/`: Dedicated gallery page for visual assets.
- **`src/components/`**: Reusable UI components.
    - `Navbar.tsx`: Responsive navigation with active section tracking.
    - `Experience.tsx`, `Projects.tsx`, `TechStack.tsx`: Data-driven sections.
    - `AOSProvider.tsx`: Client-side wrapper for AOS initialization.
- **`src/lib/`**:
    - `data.ts`: **Central source of truth** for all portfolio content (Experience, Projects, Tech Stack).
    - `utils.ts`: Tailwind merge and class name utilities.
- **`public/`**: Static assets, including `resume.pdf` and image/video gallery content.

## Building and Running

| Task | Command |
| :--- | :--- |
| **Development** | `npm run dev` |
| **Production Build** | `npm run build` |
| **Production Start** | `npm run start` |
| **Linting** | `npm run lint` |

## Development Conventions

- **Data-First Approach:** Always update `src/lib/data.ts` to add or modify portfolio content.
- **Client Components:** Use the `'use client';` directive only for components requiring hooks or browser-only APIs (e.g., `Navbar`, `AOSProvider`).
- **Styling:** Prefer Tailwind utility classes. For complex global styles, use `src/app/globals.css`.
- **Typing:** Maintain strict TypeScript interfaces for all data structures in `src/lib/data.ts`.
- **Animations:** Use `data-aos` attributes for scroll animations. Configure behavior in `src/components/AOSProvider.tsx`.

## Special Documentation

- **`Spec.md`**: Describes an alternative retro-modern concept (SQL Terminal + macOS Desktop). Note that the current Next.js implementation follows a different design language but shares the same data goals.
- **`Secure.md`**: (Internal) Review for sensitive data handling before deployment.
