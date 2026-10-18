---
title: vstrips
summary: A real-time ATC flight-strip board and flight-filing system for GeoFS virtual events.
role: "Solo: product, frontend, backend"
period: Aug 2025 – present
stack: [Next.js, TypeScript, Convex, Clerk, shadcn/ui, Tailwind CSS]
live: https://geofs-vstrips.vercel.app
source: https://github.com/mansoorbarri/geofs-vstrips
order: 2
---

## The problem

Real-world controllers track each flight on a paper or electronic **flight strip**. The GeoFS Events community had nothing like that. Pilots sent flight details in chat, and controllers kept track of them by hand. At busy events, flights got lost.

## What I built

A web app with two sides:

- **For pilots:** a flight-filing form, auto-capitalised and validated, that puts their flight straight onto the right airport's board.
- **For controllers:** a live board per airport (`/board/YSSY`) where strips move through Delivery → Ground → Tower → Control. Controllers can edit strips, assign squawks and switch between airports.

Event admins get **controlled filing slots**: they can open and close filing, lock altitudes and cruise speeds for an event, and filter across all flights.

## How it works

- **Rebuilt for realtime.** The first version used PostgreSQL, Prisma and SWR polling. I migrated it to **Convex**, so every open board updates the moment a strip changes, with no refresh and no polling.
- **Role-based access.** Clerk handles sign-in, and roles (pilot, controller, admin, super-admin) live in Convex. Admin pages and the docs portal are gated on the server. A Clerk `user.deleted` webhook keeps the two systems in sync.
- **Connected to RadarThing.** Each strip shows a live presence indicator taken from [RadarThing's](/hire/radarthing/) SSE stream, so controllers can see whether that aircraft is actually airborne.
- **A public filing API.** Other community tools can file flights programmatically.
- **Human-readable errors.** Raw backend errors are mapped to plain messages, which matters when the people using it are mid-event and under pressure.

## Outcome

vstrips was built for GeoFS community events. It takes the job of tracking flights out of chat threads and puts it on a shared board that updates live.
