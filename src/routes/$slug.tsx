import { createFileRoute, Link, notFound } from '@tanstack/react-router'
import SketchDetail from '#/components/SketchDetail'
import { formatDate } from '#/lib/format-date'
import { sketches } from '#/lib/sketches'

export const Route = createFileRoute('/$slug')({
  loader: ({ params }) => {
    const index = sketches.findIndex((sketch) => sketch.id === params.slug)
    if (index === -1) throw notFound()

    return { post: sketches[index], number: index + 1 }
  },
  component: SketchPage,
})

function SketchPage() {
  const { post, number } = Route.useLoaderData()

  return (
    <main className="detail-page">
      <header className="sketch-header">
        <p className="button-label">
          <Link to="/">[ – ]</Link>
        </p>
        <p>N°{number}</p>
        <p>&apos;{post.title}&apos;</p>
        <span />
        <time className="date" dateTime={post.pubDate}>
          {formatDate(post.pubDate)}
        </time>
      </header>
      <SketchDetail post={post} number={number} />
    </main>
  )
}
