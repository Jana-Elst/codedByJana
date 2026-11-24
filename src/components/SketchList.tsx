import { Link } from '@tanstack/react-router'
import { formatDate } from '#/lib/format-date'
import { sketches } from '#/lib/sketches'

export default function SketchList() {
  return (
    <ol className="flex flex-col gap-4">
      {sketches.map((sketch, index) => (
        <li
          key={sketch.id}
          className="mx-10 grid grid-cols-[max-content_max-content_max-content_minmax(0,1fr)_max-content] items-end max-[700px]:mx-4 max-[700px]:grid-cols-[max-content_max-content_minmax(0,1fr)_max-content]"
        >
          <Link
            className="contents text-inherit no-underline"
            to="/$projectID"
            params={{ projectID: sketch.id }}
          >
            <span className="col-start-1 row-start-1 pr-3">[ + ]</span>
            <span className="col-start-2 max-[700px]:hidden">
              N°{index + 1}
            </span>
            <span className="col-start-3 max-[700px]:col-start-2">
              &apos;{sketch.title}&apos;
            </span>
            <span
              className="col-start-4 border-b-[0.5px] border-black max-[700px]:col-start-3 max-[700px]:mx-2"
              aria-hidden="true"
            />
            <time
              className="col-start-5 text-xs opacity-75 max-[700px]:col-start-4"
              dateTime={sketch.pubDate}
            >
              {formatDate(sketch.pubDate)}
            </time>
          </Link>
        </li>
      ))}
    </ol>
  )
}
