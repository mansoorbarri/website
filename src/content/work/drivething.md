---
title: DriveThing
summary: Simple shared file storage for families. One person organises, everyone finds what's meant for them.
role: "Solo: product, design, full-stack"
period: Jan 2026 – present
stack: [Next.js, React 19, TypeScript, Convex, Clerk, UploadThing, Tailwind CSS, PWA]
live: https://drive.xyzmani.com
source: https://github.com/mansoorbarri/DriveThing
order: 3
---

## The problem

Families have important documents scattered across phones, inboxes and drawers: passports, school reports, bills, medical letters. General-purpose cloud drives are too complicated for most family members, and sharing the right file with the right person turns into a chore.

## What I built

A file store designed around **one organiser and many viewers**:

- The **owner** uploads files or whole folders (keeping the folder structure), organises them, and decides who sees each file: one person, a few people, or the whole family.
- **Members** join with an invite code, sign in and see only what's been shared with them. There's no file manager to learn.
- **Previews** of images, PDFs and spreadsheets open in the app. Anything else downloads in one click.
- **Bulk actions** with shift-click range selection let you download, move, assign or delete many files at once.
- It **installs like an app** on phones and desktops (PWA with an offline fallback).

## How it works

- **Live permissions.** Convex queries filter files by role and assignment, so when the owner shares something, it appears on the member's screen straight away.
- **Inherited access.** Sub-folders inherit their parent's assignees, so sharing a folder shares everything in it.
- **Lighter uploads.** Photos are compressed in the browser before upload, which saves storage and makes uploads on mobile data faster. Uploads go to UploadThing, with limits of 50 files per batch and 64 MB per file.
- **Spreadsheet previews in the browser** with `xlsx`, so you don't need to download a file just to check what's in it.

## Outcome

DriveThing is live at [drive.xyzmani.com](https://drive.xyzmani.com). The biggest design choice was narrowing the audience: one person organises, everyone else just finds things.
