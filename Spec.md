# TLPortfolio Specification

## Project Overview
TLPortfolio is an interactive, retro-modern portfolio website that combines a **SQL-styled terminal interface** with a **macOS-inspired desktop environment**. It is designed to showcase the professional background, projects, and contact information of Troy Lauren T. Lazaro.

## Core Concept
The application provides two layers of interaction:
1.  **The Monitor Layer**: A CRT-style bezel overlay with scanlines, flicker, and vignette effects, housing the main interface.
2.  **The Desktop Layer**: A macOS Ventura-style desktop with a menubar, interactive icons, draggable windows, and a functional dock.
3.  **The Terminal Layer**: An interactive SQL-like command-line interface (CLI) for querying the portfolio's "database" (JSON data).

---

## Technology Stack

### Frontend Core
- **HTML5**: Semantic structure for the desktop, terminal, and window components.
- **Vanilla CSS**: Custom styling with a heavy focus on glassmorphism, CRT effects, and responsive layouts.
- **Vanilla JavaScript (ES6+)**: Core logic, command processing, and DOM manipulation.

### Libraries & Frameworks
- **GSAP (GreenSock Animation Platform)**: Handles all UI animations, including window transitions and terminal focus.
- **GSAP TextPlugin**: Powering the character-by-character "typing" effect in the terminal responses.
- **GSAP Draggable**: Enables smooth dragging of desktop windows.
- **Lenis**: Provides high-performance smooth scrolling for terminal output and window content.

### Fonts
- **VT323 (Google Fonts)**: Used to achieve the pixelated, retro-computing aesthetic of the terminal.
- **System Fonts**: Standard sans-serif stack for the macOS-style desktop UI.

---

## File Structure

```text
/
├── index.html              # Main entry point and HTML structure
├── Spec.md                 # Project documentation (this file)
├── assets/
│   ├── css/
│   │   ├── base.css        # Global CSS, variables, and themes
│   │   ├── desktop.css     # macOS desktop, dock, and window styles
│   │   ├── monitor.css     # CRT screen and monitor bezel effects
│   │   └── terminal.css    # SQL terminal interface styling
│   ├── js/
│   │   ├── globals.js      # Global state and utility functions
│   │   ├── data.js         # Portfolio content (Resume, Projects data)
│   │   ├── terminal.js     # Command processing and CLI logic
│   │   ├── desktop.js      # Window management and dock interactions
│   │   └── main.js         # Application initialization
│   ├── img/                # UI icons, wallpapers, and project assets
│   └── projects/           # (Reserved for project-specific files)
└── skills/                 # Custom skill definitions for AI/Dev workflows
```

---

## Features & Components

### 1. The Monitor Bezel
- **CRT Effect**: Simulated scanlines, vintage flicker, and corner vignette.
- **Hardware Simulation**: Title bar controls (close/minimize/maximize) that mimic monitor power/state management.

### 2. SQL Terminal
- **Interactive Input**: Users can type SQL-like commands to "query" the resume.
- **Commands**:
  - `SELECT * FROM about`: Displays bio and status.
  - `SELECT * FROM experience`: Lists leadership roles.
  - `SELECT * FROM education`: Shows academic history.
  - `SELECT * FROM skills`: Lists core competencies.
  - `SELECT * FROM projects`: Lists campaigns and events.
  - `SELECT * FROM contact`: Displays contact details.
  - `HELP`: Displays available commands.
  - `CLEAR`: Flushes the terminal output.

### 3. macOS Desktop Environment
- **Window Management**: Logic to handle multiple open windows (About, Finder, Contacts) with drag-and-drop support.
- **Finder**: A file explorer for browsing folders (Resume, Projects, Commissions) with back/forward navigation.
- **Control Center**: Ventura-style menu for toggling Dark Mode, Animations, and System Accent Colors.
- **Dynamic Dock**: Animated icons with status indicators (dots) for running "apps."
- **Desktop Icons**: Clickable shortcuts for quick access to folders and files.

### 4. Data Layer (`data.js`)
- Structured JSON object containing all portfolio information, formatted for both terminal display (ASCII art tables) and dynamic desktop window injection (as HTML).

---

## Design Principles
- **Retro-Modern Fusion**: Combining 80s/90s terminal vibes with modern fluid UI interactions.
- **Aesthetic Excellence**: Heavy use of CSS variables for system colors, glassmorphism (backdrop-filter), and sophisticated GSAP transitions.
- **High Interaction**: Every element (icons, buttons, windows) is designed with hover states and micro-animations to feel "alive."

---

## Deployment & Setup
- **Hosting**: Static file hosting (GitHub Pages, Vercel, Netlify).
- **Native Experience**: Optimized for modern browsers with ESM support.
