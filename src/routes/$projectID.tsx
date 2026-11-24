import { createFileRoute, Link, notFound } from '@tanstack/react-router'
import SketchDetail from '#/components/SketchDetail'
import { formatDate } from '#/lib/format-date'
import { sketches } from '#/lib/sketches'

export const Route = createFileRoute('/$projectID')({
  loader: ({ params }) => {
    const index = sketches.findIndex((sketch) => sketch.id === params.projectID)
    if (index === -1) throw notFound()

    return { post: sketches[index], number: index + 1 }
  },
  component: SketchPage,
})

function SketchPage() {
  const { post, number } = Route.useLoaderData()

  return (
    <main className="grid min-h-dvh grid-rows-[max-content_minmax(0,1fr)_max-content] gap-4 px-10 max-[700px]:px-4">
      <header className="mt-4 grid grid-cols-[max-content_max-content_max-content_minmax(0,1fr)_max-content] items-end max-[700px]:grid-cols-[max-content_max-content_minmax(0,1fr)_max-content] max-[700px]:gap-x-2">
        <p className="col-start-1 row-start-1 pr-3">
          <Link className="text-inherit no-underline" to="/">
            [ – ]
          </Link>
        </p>
        <p className="col-start-2 row-start-1">N°{number}</p>
        <p className="col-start-3 row-start-1">&apos;{post.title}&apos;</p>
        <span className="col-start-4 row-start-1 max-[700px]:hidden" />
        <time
          className="col-start-5 row-start-1 text-xs opacity-75 max-[700px]:col-start-4"
          dateTime={post.pubDate}
        >
          {formatDate(post.pubDate)}
        </time>
      </header>
      <SketchDetail post={post} number={number} />
    </main>
  )
}
