import { useState } from 'react'
import type { SketchPost } from '#/lib/sketches'
import P5Sketch from './P5Sketch'

type ActiveTab = 'overview' | 'interactive'

function TabMark() {
  return (
    <span aria-hidden="true">
      [
      <svg width="8" height="8" viewBox="0 0 8 8">
        <rect width="8" height="8" />
      </svg>
      ]
    </span>
  )
}

export default function SketchDetail({
  post,
  number,
}: {
  post: SketchPost
  number: number
}) {
  const [activeTab, setActiveTab] = useState<ActiveTab>('overview')

  return (
    <>
      <div className="sketch-content" id="sketch-panels">
        <section
          className="sketch-panel"
          id="overview-panel"
          role="tabpanel"
          aria-labelledby="overview-tab"
          hidden={activeTab !== 'overview'}
        >
          <div className="sketch-overview">
            <div className="sketch-info">
              <div className="sketch-info__header">
                <p className="number">N°{number}</p>
                <p className="title">{post.title}</p>
              </div>
              <p className="description">{post.description}</p>
              <div className="sketch-code">
                <p>CODE</p>
              </div>
            </div>
            <div className="sketch-pictures">
              <p>PICTURES</p>
            </div>
          </div>
        </section>
        <section
          className="sketch-panel"
          id="interactive-panel"
          role="tabpanel"
          aria-labelledby="interactive-tab"
          hidden={activeTab !== 'interactive'}
        >
          {activeTab === 'interactive' && (
            <P5Sketch sketchLink={post.sketchLink} />
          )}
        </section>
      </div>

      <nav aria-label="Sketch views">
        <ul className="nav">
          <li>
            <button
              type="button"
              id="overview-tab"
              role="tab"
              aria-controls="overview-panel"
              aria-selected={activeTab === 'overview'}
              onClick={() => setActiveTab('overview')}
            >
              <TabMark />
              <span>Overview sketch</span>
            </button>
          </li>
          <li>
            <button
              type="button"
              id="interactive-tab"
              role="tab"
              aria-controls="interactive-panel"
              aria-selected={activeTab === 'interactive'}
              onClick={() => setActiveTab('interactive')}
            >
              <TabMark />
              <span>Interactive tool</span>
            </button>
          </li>
        </ul>
      </nav>
    </>
  )
}
