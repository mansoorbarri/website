---
title: RadarThing
summary: A real-time flight radar and pilot platform for the GeoFS flight simulator, with a paid PRO tier.
role: "Solo: design, frontend, backend, infra, billing"
period: Nov 2025 – present
stack: [Next.js, TypeScript, Convex, Clerk, Stripe, Leaflet, Express, SSE]
live: https://radarthing.com
source: https://github.com/mansoorbarri/RadarThing
order: 1
---

## The problem

I control air traffic for GeoFS pilots, and the official GeoFS map isn't built for it. Speed readouts lag, altitude is shown above ground rather than above sea level, you can't zoom in far enough to see taxiways, and anonymous "Foo" traffic clutters busy airports.

A community-built replacement had fixed most of that, then went offline because of **bandwidth costs** once lots of pilots used it at the same time. Any replacement had to be accurate *and* cheap to run.

## What I built

RadarThing started as a T3-stack fork of that radar and has grown into a full platform over ~1,170 commits:

- **Live radar** with click-to-track, search and filters, multi-aircraft selection, follow mode, a controller-friendly "Radar Mode" and a 3D altitude view.
- **Controller tools:** a heading calculator for vectoring, flight plans with per-waypoint speed and altitude restrictions, waypoint ETAs, and conflict alerts with a review log.
- **Remote autopilot:** pilots can change speed, altitude, heading, squawk and NAV mode from their phone while their simulator runs on another machine.
- **Weather and airport data:** METAR, D-ATIS, NOTAM, AIRMET/SIGMET and precipitation layers, airport charts overlaid on the map, and community chart uploads with moderation.
- **Flight history:** automatic recording, replay, shareable flight cards, a pilot dashboard with stats and streaks, leaderboards, challenges and virtual airline support.
- **RadarThing PRO**: a Stripe subscription that unlocks global charts, NOTAMs and advanced analytics.

## How it works

- **A separate realtime service.** Aircraft positions go to a small Express service (`radar-sse`) that fans them out to every open radar over **Server-Sent Events**. The Next.js app stays stateless, and Convex holds the persistent data: users, flight logs, charts, images, moderation queues.
- **Bandwidth-aware polling.** The in-sim userscript only sends position updates every few seconds *when someone is actually watching the radar*. Otherwise it drops to a cheap check for viewers. This is what keeps hosting affordable, which is exactly where the original project failed.
- **Resilient flight sessions.** If a pilot's Wi-Fi drops mid-flight, a three-minute grace period stops one flight being logged as two. Active sessions are persisted to Convex so a server restart doesn't lose them.
- **A versioned userscript pipeline.** The GeoFS script is built from source into a hosted loader that reads a `latest.json` manifest and falls back to a known-stable bundle. I can ship fixes without asking users to reinstall.
- **Billing done properly.** Stripe checkout plus webhooks keep subscription state in Convex. PRO features are gated on the server, not just hidden in the UI.

## Outcome

RadarThing is live at [radarthing.com](https://radarthing.com) for GeoFS pilots and controllers, and it feeds data to [vstrips](/hire/vstrips/). I've written about how it evolved [here](/radarthing-evolution/) and about the original build [here](/flightradar24-for-geofs/).
