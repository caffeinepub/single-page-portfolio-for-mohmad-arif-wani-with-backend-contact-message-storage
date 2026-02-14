# Specification

## Summary
**Goal:** Make the single-page portfolio feel more vibrant and “decorated” while preserving readability, and clearly document the exact file path for replacing the Hero profile photo.

**Planned changes:**
- Update the overall page/section background styling to use subtle, professional multi-color gradient/aurora effects consistently from Hero through Footer while keeping section separation.
- Enhance typographic “decorated text” accents (e.g., gradient headings, highlighted keywords/labels, subtle shadows/outlines where appropriate) with accessible contrast and reduced-motion-friendly behavior.
- Document the exact currently-used Hero profile image source path in the codebase (e.g., via a constant and/or an inline comment near the Hero image) and explicitly state where to place/replace the file in-repo: `/assets/generated/random-profile-photo.dim_800x800.jpg` (located at `frontend/public/assets/generated/random-profile-photo.dim_800x800.jpg`).

**User-visible outcome:** The portfolio has a more colorful yet professional background and more stylized headings/labels without readability regressions, and users can easily find where to replace the Hero profile photo so it shows up immediately.
