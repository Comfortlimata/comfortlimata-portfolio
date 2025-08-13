# 📘 Project Best Practices

## 1. Project Purpose
This project is a modern, visually engaging portfolio website for Comfort Limata, an Information Systems and Technology student. It showcases technical skills, projects, testimonials, and contact information, with a focus on interactive UI/UX and responsive design. The site is built using React and Next.js, leveraging Tailwind CSS for styling and Framer Motion for animations.

## 2. Project Structure
- **Root**: Contains configuration files (`package.json`, `tailwind.config.js`, `postcss.config.js`), and the main `pages/` directory for Next.js routing.
- **/src/components/**: All React UI components (About, Skills, Portfolio, Testimonials, Contact, Header, Footer, Hero) are modularized for reusability and clarity.
- **/src/context/**: Context providers, e.g., `ThemeContext.js` for dark/light mode support.
- **/src/pages/**: Custom Next.js pages and app entry (`_app.js`).
- **/src/styles/**: Global CSS, primarily Tailwind and custom styles.
- **/pages/**: Next.js routing entry points (`index.js`, `_app.js`).
- **/public/** (implied): Static assets like images and icons (referenced in components).

## 3. Test Strategy
- **Current State**: No automated tests are present in the codebase.
- **Recommended**:
  - Use [Jest](https://jestjs.io/) and [React Testing Library](https://testing-library.com/) for unit and integration tests.
  - Place test files alongside components as `ComponentName.test.js` or in a `__tests__/` folder.
  - Mock external dependencies (e.g., emailjs-com) and context providers.
  - Focus on testing UI logic, form handling, and theme toggling.
  - Aim for high coverage on reusable components and critical flows (e.g., contact form submission).

## 4. Code Style
- **Language**: JavaScript (ES6+), React (functional components, hooks).
- **Styling**: Tailwind CSS utility classes, with custom classes in `globals.css`.
- **Naming**:
  - Components: `PascalCase` (e.g., `About.js`)
  - Variables/functions: `camelCase`
  - CSS classes: `kebab-case` (for custom classes)
- **Comments**: Minimal, code is self-explanatory; add JSDoc for complex logic.
- **Error Handling**: Use try/catch for async logic (e.g., form submission); log errors for debugging.
- **Async**: Use React hooks for state/effects; prefer async/await for side effects.

## 5. Common Patterns
- **Componentization**: All UI is broken into small, reusable components.
- **Context API**: Used for theme management (`ThemeContext`).
- **Animation**: Framer Motion for smooth transitions and interactive effects.
- **Responsive Design**: Tailwind's responsive utilities throughout.
- **Dark Mode**: Implemented via Tailwind and context.

## 6. Do's and Don'ts
- ✅ Use functional components and hooks exclusively.
- ✅ Keep components focused and reusable.
- ✅ Use Tailwind utility classes for layout and design.
- ✅ Keep state local unless shared (then use context).
- ✅ Use semantic HTML and accessible attributes.
- ❌ Do not use class components.
- ❌ Avoid inline styles unless necessary.
- ❌ Do not mutate state directly.
- ❌ Avoid large, monolithic components.
- ❌ Do not hardcode sensitive data (e.g., API keys).

## 7. Tools & Dependencies
- **React**: UI library.
- **Next.js**: Framework for SSR, routing, and build tooling.
- **Tailwind CSS**: Utility-first CSS framework.
- **Framer Motion**: Animation library for React.
- **emailjs-com**: For contact form email integration (logic to be implemented).
- **Dev Tools**: Jest, React Testing Library (recommended for future tests).
- **Setup**:
  - `npm install` to install dependencies.
  - `npm run dev` to start the development server.
  - `npm run build` and `npm start` for production.

## 8. Other Notes
- The project expects a `/public/images/` directory for profile and project images.
- Theme toggling is handled via context and Tailwind's `dark` mode.
- Animations are handled with Framer Motion; keep transitions smooth and non-intrusive.
- For new code, follow the established component and styling patterns.
- If adding tests, colocate them with components or in a `__tests__/` directory.
