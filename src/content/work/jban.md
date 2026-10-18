---
title: Jban
summary: A drag-and-drop kanban board for personal to-dos that asks why a task didn't get done.
role: "Solo: product, design, full-stack"
period: May 2026 – present
stack: [Next.js, React 19, TypeScript, Convex, Clerk, dnd-kit, shadcn/ui]
live: https://jban.xyzmani.com
source: https://github.com/mansoorbarri/jban
order: 4
---

## The problem

Most to-do apps let unfinished tasks quietly vanish or pile up forever, so you never learn *why* things slip. I wanted a board that's honest about what didn't get done.

## What I built

A kanban board with four lanes: **To do**, **In progress**, **Completed** and **Did not complete**. Moving a card into the last lane asks for a short reason, and over time that builds a record of what got done, what didn't, and why.

- Drag cards between lanes or reorder them by hand. Filter by tag and status, and sort by priority or due date.
- A **calendar view** (month, week and day) where you reschedule by dragging a task onto a new date.
- Tasks have subtasks, Markdown notes, priorities, due dates and tags. Tasks that are due soon or overdue are highlighted.
- **Read-only share links** for single tasks, plus import and export.
- A **public demo** at `/demo` (a fictional jiu-jitsu gym's board) so people can try it without signing up.

## How it works

- **A swappable backend interface.** The board talks to data through a small `BoardBackend` interface. The real app plugs in Convex, and the demo plugs in an in-memory backend, so the demo runs exactly the same UI with no account and no database.
- **Server-side housekeeping.** A nightly Convex cron job (03:00 UTC) clears out finished and dropped tasks older than a month.
- **Auth that holds up.** Clerk Google OAuth tokens are passed to Convex as JWTs, so every query is authorised on the server. I replaced an earlier auth library when its session handling proved unreliable.
- **Safe Markdown.** Notes render through `react-markdown` with `rehype-sanitize`, so shared tasks can't inject scripts.
- **CI** runs type-checking and linting on every push.

## Outcome

Jban is live at [jban.xyzmani.com](https://jban.xyzmani.com). Try the [demo board](https://jban.xyzmani.com/demo) without an account.
