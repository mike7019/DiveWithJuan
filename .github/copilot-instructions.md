# DiveWithJuan - AI Agent Instructions

## Project Overview

React 19 + Vite bilingual (English/Spanish) diving school website for Cozumel, deployed to GitHub Pages at `/DiveWithJuan/` base path.

## Architecture Pattern

### Component Structure

- **Page Components**: `src/pages/` - Full page views (CourseDetailPage, FAQPage)
- **Section Components**: `src/components/` - Homepage sections (Hero, About, Courses, etc.)
- **Shared Components**: Navigation, Footer, WhatsAppButton persist across pages
- **Each component**: `.jsx` + dedicated `.css` file (no CSS modules, no styled-components)

### Data Flow Architecture

```yaml
translations.js (single source of truth)
    
LanguageContext (global state: language, changeLanguage)
    
Components access via: translations[language].section.property
```

**Critical Pattern**: Components must import both:

```javascript
import { useLanguage } from '../context/useLanguage';
import { translations } from '../translations/translations';
const { language } = useLanguage();
const t = translations[language].sectionName;
```

### Translation Structure Requirements

Every translatable text must exist in BOTH `translations.en` and `translations.es` with identical nested structure.

**Common Error**: Adding property to English without Spanish causes black screen. Always update both languages simultaneously.

## Critical Developer Workflows

### Build & Deploy

```bash
npm run dev           # Development server
npm run build         # Production build to dist/
npm run deploy        # Build + deploy to gh-pages branch
```

__Asset Path Pattern__: Use `import.meta.env.BASE_URL` for all public assets.

### Styling Conventions

- **Backgrounds**: All section backgrounds use `linear-gradient(135deg, ...)` with 3+ color stops
- **Colors**: Primary blue gradients: `#e3f2fd  #bbdefb  #90caf9`
- **Dark backgrounds**: `#1e3a5f  #2c5282  #3b6fa6`
- **Text on dark**: `#ffffff` with opacity variants
- **Responsive**: Mobile breakpoint `@media (max-width: 768px)`

## Course System Architecture

### Course Data Structure (6 courses)

Order matters - displayed as: DSD, Open Water, Advanced, Fun Dive, Rescue, Refresher

**Flip Card System**:

1. Front: `title` + `shortDescription` + `flipButtonText`
2. Back: `title` + `description` + More Information button
3. Detail Page: All properties including arrays

### WhatsApp Integration

Phone: `5219842772929`

## Common Pitfalls

1. **Black Screen**: Missing translation property in Spanish when switching languages
2. __Asset 404s__: Forgetting `import.meta.env.BASE_URL` prefix
3. **Grid Layout**: Footer has 2 columns, not 3 (newsletter section removed)
4. **Icon Size**: Navbar icon is 90px height (both normal and scrolled states)
5. **Course Order**: Must match: DSD, Open Water, Advanced, Fun Dive, Rescue, Refresher

## When Adding New Content

1. Add to `translations.en` first
2. Immediately add Spanish equivalent to `translations.es` with matching structure
3. Test language toggle before committing
4. Use `flipButtonText` for course cards (not generic Click Me)
5. Maintain consistent gradient backgrounds across sections
