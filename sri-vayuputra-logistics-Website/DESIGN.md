# Design Brief — Sri Vayuputra Logistics

## Direction
Refined Corporate Trust — professional B2B logistics brand. Deep navy primary authority. Light mode. Structured zones, animated counters, hero imagery.

## Tone
Enterprise, trustworthy, confident. Stripe + Linear clarity — measured restraint with strong depth hierarchy.

## Differentiation
Animated stat counters on deep-navy stat strip + hero imagery with gradient overlay — creates immediate visual credibility for B2B logistics audiences.

## Palette

| Token | OKLCH | Purpose |
|-------|-------|---------|
| Primary | 0.28 0.095 248 | Deep navy (#003366) — CTAs, accents |
| Background | 0.98 0.005 230 | Cool off-white canvas |
| Foreground | 0.18 0.025 240 | Near-black text |
| Card | 1.0 0.002 230 | Pure card surfaces |
| Muted | 0.93 0.008 230 | Slate grey section fills |
| Accent | 0.45 0.14 248 | Brighter navy for secondary CTAs |

## Typography
**Display:** Space Grotesk — H1, H2, hero, nav  
**Body:** Satoshi — paragraphs, labels, tables  
**Mono:** Geist Mono — data, code  
Scale: hero 5xl–7xl/bold/tight, section 3xl–4xl/bold, label sm/semibold/widest uppercase

## Elevation & Depth
Three-tier: `shadow-subtle` cards, `shadow-elevated` floating, flat on muted sections.

## Structural Zones

| Zone | Background | Border | Notes |
|------|------------|--------|-------|
| Header | `bg-card` | `border-b shadow-subtle` | Sticky nav |
| Hero | `gradient-hero` | — | Navy gradient over image |
| Content | `bg-background` | — | Alternates with `bg-muted/30` |
| Footer | `bg-card` | `border-t` | Bottom bar `bg-muted/40` |

## Spacing & Rhythm
Section `py-16 lg:py-20`, card `p-6`, group `gap-3–gap-6`. Spacious corporate density.

## Component Patterns
Buttons: `rounded-md`, primary navy fill, hover `bg-primary/90`, transition-smooth  
Cards: `rounded-lg border-border shadow-subtle hover-lift`  
Badges: secondary neutral or `bg-primary/10 text-primary`

## Motion
Entrance: `whileInView opacity/y`, stagger `i*0.08`, once. Hover: `hover-lift` translateY(-3px). Stats: IntersectionObserver counter animation.

## Constraints
- No raw color classes — semantic tokens only
- gradient-hero only for section hero backgrounds
- Space Grotesk display, Satoshi body — never mixed within same element

## Signature Detail
Animated counters (₹9.74 Cr, 9+ Years, 5 States, 20+ Clients) on deep-navy stat strip — the numbers count up on scroll creating immediate authority and trust.
