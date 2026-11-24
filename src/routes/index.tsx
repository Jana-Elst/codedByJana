import { createFileRoute } from '@tanstack/react-router'
import Intro from '#/components/index/Intro'
import SketchList from '#/components/SketchList'

export const Route = createFileRoute('/')({ component: Home })

function Home() {
  return (
    <main>
      <Intro />
      <SketchList />
    </main>
  )
}
