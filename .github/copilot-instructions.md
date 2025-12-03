# TX Ticketing Landing Page - AI Coding Guide

## Project Overview
React 18 + Vite landing page for a Web 3.0 blockchain ticketing platform. Single-page application with smooth scrolling sections, neon-green dark theme, and Framer Motion animations.

## Architecture & Component Structure

### App Layout Pattern
- **Single-page layout**: `App.jsx` renders 9 section components in fixed order (Header → Hero → WhyWeDoIt → WhatWeStandFor → HowWeDoIt → FAQs → Team → Contact → Footer)
- **No routing**: Navigation uses anchor links (`#why`, `#what`, etc.) with `scroll-behavior: smooth` in CSS
- **Component isolation**: Each section is self-contained with its own animations and state

### Animation Pattern
All sections except Header/Hero use the **`useInView` hook pattern**:
```jsx
import { useInView } from '../hooks/useInView';
const [ref, isInView] = useInView({ threshold: 0.2 });
```
- Attach `ref` to section wrapper
- Trigger Framer Motion animations when `isInView` becomes true
- Example: `animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 30 }}`

## Critical Design System

### Color Palette (Tailwind Config)
- **Primary green**: `primary-500` (#00ff00) - neon green for accents, CTAs, and hover states
- **Dark backgrounds**: `dark-900` (#0a0a0a), `dark-800` (#141414), `dark-700` (#1a1a1a)
- **Never** use blue, purple, or other accent colors - green is the only brand accent

### Component Classes (index.css)
- `.btn-primary`: Neon green pill button with glow shadow (`shadow-primary-500/50`)
- `.btn-secondary`: Outlined green button that fills on hover
- `.container-custom`: Max-width container with responsive padding
- `.section-heading`: 4xl/5xl bold headings
- All sections use dark backgrounds with white/gray text

### Typography & Spacing
- Font: Inter (imported from Google Fonts in `index.css`)
- Section IDs match navigation anchors: `id="why"`, `id="what"`, `id="how"`, etc.
- Consistent section padding: `py-20 md:py-32`

## Development Workflow

### Local Development
```bash
npm run dev          # Starts Vite dev server on port 3000 (0.0.0.0)
npm run build        # Production build
npm run preview      # Preview production build locally
```

### Deployment Configuration
- **Base path**: `/landing-page/` configured in `vite.config.js` for GitHub Pages deployment
- Server configured for dev container: `host: '0.0.0.0', usePolling: true`

### Key Dependencies
- **framer-motion** ^11.0.3: All section animations (not just for contact form)
- **react-icons** ^5.0.1: Icon library (Fa* imports)
- Icons must be imported individually: `import { FaTicketAlt, FaShieldAlt } from 'react-icons/fa'`

## Component-Specific Patterns

### Header Component
- Fixed positioning with scroll-based background: Changes from transparent to `bg-dark-900/95` when scrolled
- Mobile menu state: `isMobileMenuOpen` toggles hamburger menu
- Desktop navigation hidden below md breakpoint

### FAQs Accordion
Uses `AnimatePresence` from Framer Motion for expand/collapse:
```jsx
import { motion, AnimatePresence } from 'framer-motion';
// Wrap answer in <AnimatePresence> with conditional render
```
- State: `openIndex` tracks which FAQ is open (only one at a time)

### Contact Form
- Form state managed with `useState` for each field (name, email, company, message)
- Submit handler prevents default and shows success message
- No backend integration - form is placeholder for now

## Content Management Pattern

### Data Structure Convention
Content should be extracted from components into arrays/objects for easier updates:

**Good pattern** (used in `Team.jsx`, `FAQs.jsx`, `WhatWeStandFor.jsx`):
```jsx
const teamMembers = [
  { name: 'Laurent Koehler', role: 'CEO', image: '...', linkedin: '#' },
  // More members...
];
```

**What to refactor**: Move hard-coded content into data arrays at the top of each component
- Team member profiles in `Team.jsx` - already uses `teamMembers` array ✅
- FAQ items in `FAQs.jsx` - already uses `faqs` array ✅
- Feature cards in `WhatWeStandFor.jsx` - already uses `features` array ✅

### Team Images
- **Current**: External CDN URLs (Bubble.io CDN)
- **Local storage**: Add images to `public/images/team/` directory
- **Naming convention**: Use kebab-case: `laurent-koehler.jpg`, `michael-tse.jpg`
- **Update path**: Change `image: '/images/team/laurent-koehler.jpg'` in `teamMembers` array
- **Size**: Optimize to 192x192px (matching current display size)

## Common Modifications

### Adding New Sections
1. Create component in `src/components/[SectionName].jsx`
2. Use `useInView` hook pattern with Framer Motion
3. Add navigation link to `Header.jsx` `navItems` array
4. Import and render in `App.jsx` in desired order
5. Use dark background (`bg-dark-900/800/700`) and green accents

### Styling New Elements
- **Buttons**: Use `.btn-primary` or `.btn-secondary` classes (avoid inline styles)
- **Cards**: Dark background (`bg-dark-700/800`) with `border border-gray-800` and `hover:border-primary-500`
- **Icons**: Wrap in green circle: `bg-primary-500/10 p-4 rounded-full`, icon in `text-primary-500`

### Updating Content
- **Team members**: Edit `teamMembers` array in `Team.jsx` (name, role, image path, linkedin URL)
- **FAQ items**: Edit `faqs` array in `FAQs.jsx` (question, answer)
- **Feature cards**: Edit `features` array in `WhatWeStandFor.jsx` (icon, title, description)
- **Hero text**: Edit JSX directly in `Hero.jsx` (heading, subheading, CTA text)
- All content uses arrays/objects at component top for easy management

## Testing & Quality Checks
- Run `npm run lint` before committing
- Test mobile menu behavior at `<768px` viewport
- Verify smooth scrolling works on all navigation links
- Check animations trigger correctly when scrolling into view (use browser DevTools)
