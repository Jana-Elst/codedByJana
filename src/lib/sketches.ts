export type SketchPost = {
  id: string
  title: string
  description: string
  pubDate: string
  sketchLink: string
}

export const sketches: SketchPost[] = [
  {
    id: '20261105-1',
    title: 'a circle',
    description:
      'I want to start again with P5.JS. So starting with some simple functions. Color experiments will get me help to totally get into it again.',
    pubDate: 'Nov 5 2026',
    sketchLink: '20261105-1.js',
  },
  {
    id: '20261105-2',
    title: 'a square',
    description: '3, 2, 1 ... START!',
    pubDate: 'Nov 5 2026',
    sketchLink: '20261105-2.js',
  },
  {
    id: '20261105-3',
    title: 'a triangle',
    description: '3, 2, 1 ... START!',
    pubDate: 'Nov 5 2026',
    sketchLink: '20261105-3.js',
  },
]
