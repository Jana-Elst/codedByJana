import { Link, Outlet, createRootRoute } from '@tanstack/react-router'

import '../styles.css'

export const Route = createRootRoute({
  component: RootComponent,
  notFoundComponent: NotFound,
})

function RootComponent() {
  return <Outlet />
}

function NotFound() {
  return (
    <main className="grid min-h-screen place-content-center gap-4 text-center">
      <h1 className="text-2xl">Page not found</h1>
      <Link className="text-inherit" to="/">
        Back to the sketches
      </Link>
    </main>
  )
}
