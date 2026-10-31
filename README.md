# sodapines.dev

A small personal website for kzen / sodapines, built with [Astro](https://astro.build).

## Running it

- `npm install` - install dependencies
- `npm run dev` - start a local preview at http://localhost:4321
- `npm run build` - build the site into `dist/`

## Writing a post

The easy way: open [Pages CMS](https://app.pagescms.org), pick this repository, and write the post there. Saving commits it to `main`, which deploys the site.

To do it by hand, add a Markdown file to `src/content/blog/`:

```md
---
title: Post title
date: 2026-04-30
---

Post text goes here.
```

The filename becomes the URL, so `my-post.md` lives at `/blog/my-post/`.

## Files

- `src/pages/` - one file per page
- `src/layouts/Base.astro` - shared header, footer, and theme toggle
- `src/components/SodaPines.astro` - the home page illustration
- `src/styles/global.css` - site styling
- `public/` - images and other files served as they are

Pushing to `main` deploys the site through GitHub Actions.
