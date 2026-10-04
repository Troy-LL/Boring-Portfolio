# Design — Boring Portfolio

Paper presence site. Recruiter job to do in under ninety seconds.

## Feel

| Token | Value |
|-------|-------|
| Paper | `#FFFFFF` body background |
| Beige | `#F2EEE8` object surface only |
| Ink | `#1A1816` |
| Muted | `#6F6A64` |
| Hairline | `#ECEAE6` |

White sheet `#FFFFFF`, ink `#1A1816`, muted `#6F6A64`, hairline `#ECEAE6`. Beige `#F2EEE8` is only an object plate (the resume frame), never body, nav, footer, or full-bleed.

Type: Boska italic wordmark, Gambetta body, Switzer UI. Self-hosted in `public/fonts/`.

Signature: name, a quiet muted role line, one positioning sentence. Everything else quieter. No amber.

Actions are underlined text links (`TextLink`), not solid or outline buttons. Nav stays text. Footer is words, not icon buttons. Color and opacity on links transition in 150ms. One settle animation on the home positioning sentence only: fade up 8px over 500ms, once, with ease-out. That settle is off under `prefers-reduced-motion`.

Lists are open. No accordions. Hairlines only between rows.

Refuse: beige page, badge walls, numbered section chrome, skill chips, card grids, gallery, Calendly embeds, Inter, near-black default, pill buttons.

## IA

`/` · `/work` · `/work/[slug]` · `/blog` · `/blog/[slug]` · `/talk` · `/resume`

Nav: Work · Blog · Talk · Resume.

Inner pages use `Breadcrumbs` (`Home / Section / Title`). No “Back to” text links.

## Booking

`/talk` is a paper bridge. `NEXT_PUBLIC_BOOKING_URL` opens a Google Calendar Appointment schedule in a new tab. Email fallback always available.

## Work shortlist

Lists are open.

Scored on recruiter signal, technical depth, evidence, brand fit, maintenance truth.

Featured: seeking · EditLayer · Pupsync

Include list and exclusions live in `src/lib/work.ts` and the redesign plan trail.
