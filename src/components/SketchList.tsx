import { Link } from '@tanstack/react-router'
import { formatDate } from '#/lib/format-date'
import { sketches } from '#/lib/sketches'

export default function SketchList() {
  return (
    <ol className="sketch-list">
      {sketches.map((sketch) => (
        <li key={sketch.id}>
          <Link to="/$slug" params={{ slug: sketch.id }}>
            <span className="button-label">[ + ]</span>
            <span>&apos;{sketch.title}&apos;</span>
            <span className="line" aria-hidden="true" />
            <time className="date" dateTime={sketch.pubDate}>
              {formatDate(sketch.pubDate)}
            </time>
          </Link>
        </li>
      ))}
    </ol>
  )
}
