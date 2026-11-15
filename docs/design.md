# Design — Boring Portfolio

Paper presence site. Recruiter job to do in under ninety seconds.

**This pass:** Home is one calling card. Dirty white paper and brand positioning. Three proofs. Short About. Talk is the only conversation door. No Contact block on home. Work rows show one proof link. Body type is Switzer.

## Feel

| Token | Value |
|-------|-------|
| Paper | `#F2EEE8` body background (brand dirty white) |
| Sheet | `#FFFFFF` object surface only (resume frame) |
| Ink | `#141210` |
| Muted | `#6F6A64` |
| Hairline | `#E4DFD8` |

Dirty white `#F2EEE8` is the page. White `#FFFFFF` is only an object plate (the resume frame), never body, nav, footer, or full-bleed. Ink `#141210`. Muted `#6F6A64`. Hairline `#E4DFD8`.

Type: one face. Switzer for the name, role, positioning, UI, and body. Self-hosted in `public/fonts/`: 16px weight 400, line-height 1.65, letter-spacing -0.011em. Headings stay that size with letter-spacing -0.02em. No Boska, Gambetta, or Inter on this outlet.

Signature: name, a quiet muted role line, one positioning sentence from brand SoT (`SITE.positioning`). No location, softener, or CTA row in the hero. Talk lives in nav; Work starts next. No amber.

Actions are underlined text links (`TextLink`), not solid or outline buttons. Nav stays text. Footer is words, not icon buttons. Color and opacity on links transition in 150ms. One settle animation on the home positioning sentence only: fade up 8px over 500ms, once, with ease-out. That settle is off under `prefers-reduced-motion`.

Lists are open. No accordions. Hairlines only between rows.

Refuse: Boska on this outlet, badge walls, numbered section chrome, skill chips, card grids, gallery, Calendly embeds, Inter anywhere, Switzer or Inter on the home hero display lines, near-black default, pill buttons, a second Contact block that repeats Talk and footer links.

## IA

`/` · `/work` · `/work/[slug]` · `/blog` · `/blog/[slug]` · `/talk` · `/resume`

Nav: Work · Blog · Talk · Resume.

Home composition, in order:

1. Hero: name, role, positioning
2. Work: featured three, title + one sentence + one proof link (first `links` entry). Title opens the page. No “Open page.”
3. About: three signal roles only (ASES, ED3N, GDG). Full list lives on Resume / experience data, not home.
4. Writing: latest post only, human-readable date

Talk lives in nav and hero. Footer keeps Creative, GitHub, LinkedIn, Email. Home has no Contact section.

Inner pages use `Breadcrumbs` (`Home / Section / Title`). No “Back to” text links.

## Share

Link previews use the same sheet: dirty white ground, Switzer name, muted role, positioning sentence, and the site host. Generated from `SITE` in `src/lib/share-card.tsx`. The favicon is the TL mark in ink on white.

## Booking

`/book` redirects to `/talk`. `/talk` is a paper bridge. `NEXT_PUBLIC_BOOKING_URL` opens a Google Calendar Appointment schedule in a new tab. Email fallback always available. Page copy stays visitor-facing. No process notes about widgets.

## Work shortlist

Lists are open.

Scored on recruiter signal, technical depth, evidence, brand fit, maintenance truth.

Featured: Pupsync · EditLayer · OpenReach. seeking stays on /work.

Include list and exclusions live in `src/lib/work.ts`.

## Home experience shortlist

ASES Manila · ED3N Ventures · GDG on Campus – PUP Manila

Ordered in `src/lib/experience.ts`. Home passes `limit={3}`.

## Opening

Home only. A vendored Creative `redesign` card door plays once per session: fall, settle, click to flip, scroll to fold with the hatch. After the hold wall, scroll runs the horizontal hop with the push hand. The paper home is the section on the other side of that hand, in the same scroll. The hand leaves the frame. No empty station and no fade. The push hand appears only while hopping away from the card (scaled on narrow viewports), then leaves with the door. The door pane stays clear so the paper home slides in on the far side of the hand — no empty floor and no fade. Door table stays Creative floor `#E4DFD4` so card stock grain reads; portfolio paper `#F2EEE8` is the hop destination. Hatch prefers MP4/WebM with poster and preloads on settle. Lab chrome button styles stay off printed ink (phone stays type on paper, not a chip). `?door=1` replays. `?door=0` skips. `prefers-reduced-motion` starts settled. Snapshot lives in `public/opening/` (`PROVENANCE.txt` names the Creative commit). Creative `redesign` stays the physics source. Do not grow this outlet into the Creative content path.
