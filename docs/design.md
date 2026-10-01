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

Signature: name on paper + positioning sentence. Everything else quieter.

Refuse: badge walls, numbered section chrome, skill chip arenas, card grids as the product, gallery, Calendly embeds, Inter, near-black default.

## IA

`/` · `/work` · `/work/[slug]` · `/blog` · `/blog/[slug]` · `/talk` · `/resume`

Nav: Work · Blog · Talk · Resume.

## Booking

`/talk` is a paper bridge. `NEXT_PUBLIC_BOOKING_URL` opens a Google Calendar Appointment schedule in a new tab. Email fallback always available.

## Work shortlist

Scored on recruiter signal, technical depth, evidence, brand fit, maintenance truth.

Featured: seeking · EditLayer · Pupsync

Include list and exclusions live in `src/lib/work.ts` and the redesign plan trail.
