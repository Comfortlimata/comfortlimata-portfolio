# Images placement

Recommended for runtime/static images:
- Put project images here: `/public/images/projects`
- Structure:
  ```
  public/
    images/
      projects/
        project-1/
          profile.webp
          profile.jpg        # optional fallback
          cover.webp
          gallery-1.webp
          gallery-2.webp
  ```

Usage in React (no import needed, survives rebuilds):
```jsx
<img
  src="/images/projects/project-1/profile.webp"
  alt="Project 1 profile"
  loading="lazy"
/>
```

Alternative (bundled with the app):
- Put images in: `/src/assets/projects/project-1`
- Usage:
```jsx
import profile from '../assets/projects/project-1/profile.webp';
<img src={profile} alt="Project 1 profile" loading="lazy" />
```

## PNG quick steps for Project 1
1. Create the folder (if it doesn't exist):
   - `/public/images/projects/project-1`
2. Save your file as:
   - `profile.png` (or `cover.png`, `gallery-1.png`, etc.)
3. (Optional) Also add a WebP for performance:
   - `profile.webp`
   - Keep the PNG as the fallback.

Usage (PNG only):
```jsx
<img
  src="/images/projects/project-1/profile.png"
  alt="Project 1 profile"
  loading="lazy"
/>
```

Usage (WebP with PNG fallback):
```html
<picture>
  <source srcset="/images/projects/project-1/profile.webp" type="image/webp" />
  <img src="/images/projects/project-1/profile.png" alt="Project 1 profile" loading="lazy" />
</picture>
```

## Quick usage: project1.png
1. Place the file here:
   - `/public/images/projects/project-1/project1.png`
2. Usage (PNG only):
```jsx
<img
  src="/images/projects/project-1/project1.png"
  alt="Project 1 image"
  loading="lazy"
/>
```
3. Usage (WebP with PNG fallback):
```html
<picture>
  <source srcset="/images/projects/project-1/project1.webp" type="image/webp" />
  <img src="/images/projects/project-1/project1.png" alt="Project 1 image" loading="lazy" />
</picture>
```

Note: You can keep `project1.png` as-is, or rename to `profile.png` for consistency with other examples.

Notes:
- Prefer `.webp`, keep a `.jpg`/`.png` fallback if needed.
- Use descriptive names: `profile`, `cover`, `gallery-1`.
- Keep sizes reasonable and use `loading="lazy"`.
- Keep names lowercase with hyphens: `profile.png`, `cover.png`, `gallery-1.png`.
- Optimize PNGs (tinypng.com or Squoosh). Consider WebP for smaller size.
