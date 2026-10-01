# Design — Boring Portfolio

Paper presence site. Recruiter job to do in under ninety seconds.

## Feel

| Token | Value |
|-------|-------|
| Paper | `#F2EEE8` |
| Ink | `#141210` |
| Warm black | `#191512` |
| Charcoal | `#292623` |
| Amber | `#C9A36A` one hit only |

Type: Boska italic wordmark, Gambetta body, Switzer UI. Self-hosted in `public/fonts/`.

Signature: name, one amber role kicker, one positioning sentence. Everything else quieter. Amber is that kicker only.

CTAs are solid or outline buttons (`ButtonLink`), not underlined hyperlinks. Nav stays text. Buttons use a 10px radius. Color, background, border, and opacity on links and buttons transition in 150ms. The hero positioning sentence and each home section heading fade up 8px over 500ms, once, with ease-out. That settle is off under `prefers-reduced-motion`. Row expand height and chevron rotation stay at `--duration-apple`, 420ms.

Footer: Lucide icon buttons — creative portfolio (`SITE.creative` → desktop.troylazaro.dev, solid), GitHub, LinkedIn, Email. Talk stays in Contact / nav only.

Experience on `/` is a short recruiter list (work + current signal + one campus lead + early internship), not the full LinkedIn org stack.

Refuse: badge walls, numbered section chrome, skill chip arenas, card grids as the product, gallery, Calendly embeds, Inter, near-black default.

## IA

`/` · `/work` · `/work/[slug]` · `/blog` · `/blog/[slug]` · `/talk` · `/resume`

Nav: Work · Blog · Talk · Resume.

Inner pages use `Breadcrumbs` (`Home / Section / Title`). No “Back to” text links.

## Booking

`/talk` is a paper bridge. `NEXT_PUBLIC_BOOKING_URL` opens a Google Calendar Appointment schedule in a new tab. Email fallback always available.

## Work shortlist

Scored on recruiter signal, technical depth, evidence, brand fit, maintenance truth.

Featured: seeking · EditLayer · Pupsync

Include list and exclusions live in `src/lib/work.ts` and the redesign plan trail.
