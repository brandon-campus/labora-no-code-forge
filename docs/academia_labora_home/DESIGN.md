---
name: Labora AI Executive
colors:
  surface: '#1f0f10'
  surface-dim: '#1f0f10'
  surface-bright: '#483435'
  surface-container-lowest: '#190a0b'
  surface-container-low: '#281718'
  surface-container: '#2c1b1c'
  surface-container-high: '#382526'
  surface-container-highest: '#443030'
  on-surface: '#fbdbdb'
  on-surface-variant: '#e5bdbe'
  inverse-surface: '#fbdbdb'
  inverse-on-surface: '#3f2b2c'
  outline: '#ac8889'
  outline-variant: '#5c3f40'
  surface-tint: '#ffb3b6'
  primary: '#ffb3b6'
  on-primary: '#68001a'
  primary-container: '#e11d48'
  on-primary-container: '#fffaf9'
  inverse-primary: '#be0037'
  secondary: '#ffb2ba'
  on-secondary: '#670020'
  secondary-container: '#940532'
  on-secondary-container: '#ff9da8'
  tertiary: '#ffb2b9'
  on-tertiary: '#67001f'
  tertiary-container: '#c5485d'
  on-tertiary-container: '#fffaf9'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#ffdada'
  primary-fixed-dim: '#ffb3b6'
  on-primary-fixed: '#40000c'
  on-primary-fixed-variant: '#920028'
  secondary-fixed: '#ffd9dc'
  secondary-fixed-dim: '#ffb2ba'
  on-secondary-fixed: '#400010'
  on-secondary-fixed-variant: '#910130'
  tertiary-fixed: '#ffdadc'
  tertiary-fixed-dim: '#ffb2b9'
  on-tertiary-fixed: '#400010'
  on-tertiary-fixed-variant: '#891933'
  background: '#1f0f10'
  on-background: '#fbdbdb'
  surface-variant: '#443030'
typography:
  display-hero:
    fontFamily: Plus Jakarta Sans
    fontSize: 56px
    fontWeight: '700'
    lineHeight: 64px
    letterSpacing: -0.03em
  display-hero-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 36px
    fontWeight: '700'
    lineHeight: 44px
    letterSpacing: -0.02em
  headline-xl:
    fontFamily: Plus Jakarta Sans
    fontSize: 40px
    fontWeight: '700'
    lineHeight: 48px
    letterSpacing: -0.025em
  headline-xl-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 28px
    fontWeight: '700'
    lineHeight: 36px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 28px
    fontWeight: '600'
    lineHeight: 36px
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 22px
    fontWeight: '600'
    lineHeight: 30px
    letterSpacing: -0.015em
  headline-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 18px
    fontWeight: '600'
    lineHeight: 26px
    letterSpacing: -0.01em
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Inter
    fontSize: 15px
    fontWeight: '400'
    lineHeight: 24px
  body-sm:
    fontFamily: Inter
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 20px
  label-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
    letterSpacing: 0.01em
  label-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.04em
  badge-caps:
    fontFamily: Plus Jakarta Sans
    fontSize: 11px
    fontWeight: '700'
    lineHeight: 14px
    letterSpacing: 0.08em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  gutter: 1.5rem
  gutter-mobile: 1rem
  margin: 2rem
  margin-mobile: 1.25rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2.5rem
---

## Brand & Style

This design system crafts an empowering, precise, and executive-tier learning atmosphere tailored specifically for non-technical founders, operators, product leaders, and creators mastering artificial intelligence. It strips away intimidation and terminal-centric jargon, replacing them with institutional clarity, structured intelligence, and immediate executive agency.

The design movement combines **Modern High-Precision Corporate Minimalism** with subtle **Glassmorphic & Micro-border accents**. Surfaces are clean and intentional, grounded in rich zinc-graphite undertones, crisp surfaces, and a vibrant kinetic crimson-ruby spark drawn from the circular mark. The aesthetic projects serious technical capability without code complexity—communicating mastery, momentum, and refined craftsmanship.

## Colors

The palette is engineered around high visual contrast, energetic precision, and optical clarity:

- **Primary (`#E11D48`):** The signature vibrant ruby rose. Used for primary CTAs, active progression nodes, and focal highlights.
- **Secondary (`#9F1239`):** Deep burgundy crimson used for pressed interactive states, active container borders, and rich gradient endpoints.
- **Tertiary (`#FB7185`):** Soft coral-rose tint used for subtle badge glows, active timeline halos, and pill highlights.
- **Neutral & Surface Hierarchy:**
  - Base canvas: `#090A0F` (deep graphite obsidian).
  - Surface cards & containers: `#11131A` with subtle translucent variants (`rgba(17, 19, 26, 0.75)`).
  - Raised panels & modals: `#181B24`.
  - Border & hairline strokes: `rgba(244, 63, 94, 0.16)` on active elements, and `rgba(255, 255, 255, 0.08)` on quiet boundaries.
  - Text: `#FFFFFF` (pure title high-contrast), `#94A3B8` (slate body), and `#64748B` (muted metadata).

## Typography

Typography pairs the structural confidence of **Plus Jakarta Sans** for headlines and interactive indicators with the immaculate, neutral legibility of **Inter** for instructional content and curricula descriptions.

- All display and section headlines use tight tracking (`-0.015em` to `-0.03em`) to deliver an executive, publication-grade feel.
- Code snippets, prompt templates, or AI API references should selectively adopt monospaced treatments with crisp contrast against dark cards.
- Label and badge levels employ slightly expanded tracking (`0.04em` to `0.08em`) to enforce legibility on micro-surfaces and timeline markers.

## Layout & Spacing

A 12-column fluid grid orchestrates desktop screens, transitioning to 8 columns on tablet devices (breakpoint: `768px`) and 4 columns on mobile (breakpoint: `480px`). The max-width for primary editorial and curriculum views is anchored at `1240px` to maintain optimal line lengths.

Spacing utilizes an intentional 4px/8px rhythm. Generous vertical breathing room between syllabus modules prevents cognitive overload for learners digesting technical workflows.

## Elevation & Depth

Visual depth is achieved through layered dark tone containers paired with luminous micro-hairlines rather than heavy drop shadows:

- **Surface Tier 0 (Base Canvas):** `#090A0F`, non-elevated.
- **Surface Tier 1 (Module & Course Cards):** `#11131A` bounded by a 1px border of `rgba(255, 255, 255, 0.07)`.
- **Surface Tier 2 (Hover & Focus States):** Subtle ambient ruby bloom behind active cards using `box-shadow: 0 12px 32px -8px rgba(225, 29, 72, 0.18)` and an amplified micro-border of `rgba(225, 29, 72, 0.35)`.
- **Glass Overlays (Navbars & Sticky Progress Bars):** `rgba(9, 10, 15, 0.8)` with `backdrop-filter: blur(16px)` and a bottom border of `rgba(255, 255, 255, 0.06)`.

## Shapes

The shape geometry strikes a balance between professional restraint and modern softness:
- Standard UI cards, interactive modules, and inputs leverage a calibrated `0.5rem` (`8px`) corner radius.
- Larger curriculum roadmap blocks and cohort hero wrappers use `1rem` (`16px`) corners.
- Interactive status badges, pill navigation chips, category filters, and primary conversion buttons adopt full pill shapes (`rounded-full` / `9999px`) to echo the circular motif of the brand emblem.

## Components

### Buttons
- **Primary CTA:** Dynamic gradient fill (`linear-gradient(135deg, #E11D48 0%, #BE123C 100%)`) with white text (`label-md`), full pill curvature (`rounded-full`), `space-md` horizontal padding, and an inset top highlight (`box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.25)`). Hover triggers a subtle forward scale and ruby ambient aura.
- **Secondary / Outline:** Background `rgba(255, 255, 255, 0.03)`, 1px border `rgba(255, 255, 255, 0.12)`, text `#FFFFFF`. On hover: border tints to `#E11D48` with text brightening.
- **Ghost Action:** Flat transparent background, text `#94A3B8`, switching to `#FFFFFF` with ruby micro-dot indicator on hover.

### Badges & Pill Chips
- **Curriculum / Status Chips:** Pill-shaped (`rounded-full`), `space-xs` vertical by `space-sm` horizontal padding. Active states feature `rgba(225, 29, 72, 0.12)` background, crimson border `rgba(225, 29, 72, 0.3)`, and text `#FB7185` using `badge-caps`.

### Module & Feature Cards
- Constructed on `#11131A` with a 1px micro-border `rgba(255, 255, 255, 0.07)`.
- Padding set to `space-lg`.
- Top-left corner houses numeric module badges (`01`, `02`) or skill tags with soft crimson backdrops.

### Interactive Timelines & Sprints
- Vertical or horizontal tracks rendered in `rgba(255, 255, 255, 0.08)`.
- Active milestones use a multi-ring ruby pulse: a central `#E11D48` 12px circular dot, encircled by an 8px halo of `rgba(225, 29, 72, 0.25)`.
- Completed stages turn crisp white with ruby check indicators.

### Tabs & Segmented Controls
- Contained within an encased pill pillbox (`#141721`), individual tabs switch smoothly with high-contrast active states (`#1E2230` background, `#FFFFFF` text, subtle 1px border stroke).

### Input Fields
- Deep charcoal fill (`#0D0F15`) with a 1px border `rgba(255, 255, 255, 0.1)`.
- Focused state transitions border to `#E11D48` with a 2px outer ring glow of `rgba(225, 29, 72, 0.2)`. Placeholder text in muted slate (`#64748B`).