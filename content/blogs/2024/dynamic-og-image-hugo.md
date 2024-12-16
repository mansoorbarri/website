---
title: "Dynamic OpenGraph Images on Hugo"
description: "Learn how to dynamically generate OpenGraph images for your Hugo site."
date: "2024-12-16"
url: "/dynamic-og-image-hugo/"
draft: false
categories:
  - OpenGraph
tags:
  - Hugo
  - Web Development
---

Dynamically generated OpenGraph images make your content look professional when shared on social platforms. While working on **pdfthing**, I discovered the [next/og](https://nextjs.org/docs/app/api-reference/file-conventions/metadata/opengraph-image) module, which allows you to create such images in Next.js.  

Unfortunately, this module only works with Next.js, so I started exploring ways to implement the same functionality in Hugo. After some digging, I found a way to dynamically generate OpenGraph images using Hugo's built-in tools.

---

## Steps to Create Dynamic OpenGraph Images

### 1. Create a Partial

First, create a partial called `opengraph.html`. This partial will handle the generation of your OpenGraph image.

### 2. Define Variables

Set variables like `title`, `description`, and `summary` for your image content. Here’s an example:

```html
{{ $title := .Title }}
{{ $description := .Description | default .Summary | truncate 150 }}

3. Generate a Unique Image Name

Create a unique name for each image to ensure proper linkage in the header.

```html
{{ $uniqueName := "" }}
{{ with .File }}
  {{ $uniqueName = printf "og/og-image-%s.svg" .UniqueID }}
{{ else }}
  {{ $uniqueName = "og/og-image-default.svg" }}
{{ end }}
```

### 4. Create the SVG Template

Define the basic structure of your SVG using Hugo's templating syntax.

```html
{{ $svg := printf `
<svg xmlns="http://www.w3.org/2000/svg" width="1900" height="630" viewBox="0 0 1900 630">
  <style>
    @font-face {
      font-family: 'Inter-SemiBold';
      src: url('/fonts/Inter-SemiBold.ttf') format('truetype');
    }
    @font-face {
      font-family: 'Inter-Light';
      src: url('/fonts/Inter-Light.ttf') format('truetype');
    }
    .title {
      font-family: 'Inter-SemiBold', Arial, sans-serif;
      font-size: 64px;
      fill: white;
      text-anchor: middle;
    }
    .description {
      font-family: 'Inter-Light', Arial, sans-serif;
      font-size: 32px;
      fill: white;
      text-anchor: middle;
    }
  </style>
  <rect width="1900" height="630" fill="black" />
  <text x="950" y="280" class="title">%s</text>
  <text x="950" y="400" class="description">%s</text>
</svg>
` $title $description | safeHTML }}
```

### 5. Process the SVG and Add Meta Tags

Generate the SVG using Hugo's `resources` pipeline and include it in your meta tags.

```html
{{ $generatedSVG := resources.FromString $uniqueName $svg | resources.ExecuteAsTemplate $uniqueName . }}

<!-- General Open Graph Meta Tags -->
<meta property="og:title" content="{{ $title }}" />
<meta property="og:description" content="{{ $description }}" />
<meta property="og:image" content="{{ $generatedSVG.Permalink }}" />
<meta property="og:image:type" content="image/svg+xml" />
<meta property="og:image:width" content="1200" />
<meta property="og:image:height" content="630" />
<meta property="og:type" content="website" />
<meta property="og:url" content="{{ .Permalink }}" />

<!-- Twitter Cards -->
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="{{ $title }}" />
<meta name="twitter:description" content="{{ $description }}" />
<meta name="twitter:image" content="{{ $generatedSVG.Permalink }}" />

<!-- Optional Additional Meta Tags -->
<meta name="author" content="{{ .Site.Title }}" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
```

The full code for this partial is available here: [opengraph.html](https://github.com/mansoorbarri/website/blob/main/layouts/partials/opengraph.html)

### 6. Add the Partial to Your Header
```html
{{- partial "opengraph.html" . -}}
```

## Next Steps

This approach gives you a Hugo-compatible method to dynamically generate OpenGraph images. In the future, I plan to create a modular solution for Hugo that works similarly to next/og—making this process even easier.

Have questions or ideas? Let me know!