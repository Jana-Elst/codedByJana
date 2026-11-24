# Coded by Jana

The sketch collection is a React single-page app built with Vite and TanStack
Router. Sketch metadata lives in `src/lib/sketches.ts`; interactive sketches are
registered by filename in `src/components/P5Sketch.tsx`.

## Development

```bash
npm install
npm run dev
```

The app is served under `/codedByJana/` to match its deployment path. Run
`npm run build` to create a production build in `dist/`, then `npm run preview`
to serve that build locally.
