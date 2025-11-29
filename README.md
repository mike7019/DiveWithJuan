# DiveWithJuan

Bilingual (English/Spanish) diving school website for Cozumel, built with React 19 and Vite.

## Project Overview

DiveWithJuan is a modern, responsive website designed to showcase diving courses and services. It features a seamless bilingual experience, a custom course flipping card system, and a vibrant design inspired by the ocean.

**Live Demo:** [https://mike7019.github.io/DiveWithJuan/](https://mike7019.github.io/DiveWithJuan/)

## Tech Stack

- **Core:** React 19, Vite
- **Routing:** React Router 7
- **Icons:** Iconify, React Icons
- **Styling:** CSS (Component-scoped), Responsive Design
- **Deployment:** GitHub Pages

## Key Features

- **Bilingual Support:** Full English and Spanish support with instant language toggling.
- **Course System:** Interactive flip cards for course details (DSD, Open Water, Advanced, etc.).
- **Responsive Design:** Optimized for mobile and desktop devices.
- **WhatsApp Integration:** Direct floating button for easy communication.

## Installation & Setup

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/lil-a/DiveWithJuan.git
    cd DiveWithJuan
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Run the development server:**
    ```bash
    npm run dev
    ```

4.  **Build for production:**
    ```bash
    npm run build
    ```

## Architecture & Development

### Directory Structure
- `src/pages/`: Full page views (e.g., `CourseDetailPage`, `FAQPage`).
- `src/components/`: Reusable UI components (e.g., `Hero`, `Courses`, `Navbar`).
- `src/translations/`: Contains `translations.js`, the single source of truth for texts.
- `src/context/`: `LanguageContext` for managing global language state.

### Translation System
The project uses a custom translation system.
- **Source of Truth:** `src/translations/translations.js`
- **Usage:** Components import `useLanguage` and `translations` to render text dynamically.
- **Important:** Always maintain structural parity between `en` and `es` objects in `translations.js` to avoid runtime errors.

## Deployment

The project is configured for deployment on GitHub Pages.

```bash
npm run deploy
```

This script builds the project and pushes the `dist` folder to the `gh-pages` branch.

## Contributing

1.  Fork the repository.
2.  Create a feature branch (`git checkout -b feature/AmazingFeature`).
3.  Commit your changes (`git commit -m 'Add some AmazingFeature'`).
4.  Push to the branch (`git push origin feature/AmazingFeature`).
5.  Open a Pull Request.

---
*Developed for DiveWithJuan Cozumel*
