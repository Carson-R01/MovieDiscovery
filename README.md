# Movie Discovery

A beginner-intermediate Vue portfolio project inspired by Netflix and IMDb.

## Features

- Trending movies from TMDB
- Search
- Ratings
- Local watchlist
- Genre filtering
- Movie detail view

## Setup

1. Install dependencies:

   ```bash
   npm install
   ```

2. Create `.env` from `.env.example` and add your TMDB API key:

   ```bash
   cp .env.example .env
   ```

3. Run the app:

   ```bash
   npm run dev
   ```

If no API key is present, the app uses sample movie data so the UI still works.

## GitHub Pages

This app is configured for a GitHub Pages project site at:

```text
https://YOUR_USERNAME.github.io/MovieDiscovery/
```

Deploy with:

```bash
npm run deploy
```

In the GitHub repo settings, set Pages to deploy from the `gh-pages` branch.
