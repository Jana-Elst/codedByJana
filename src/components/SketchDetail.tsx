import { useState } from 'react'
import type { SketchPost } from '#/lib/sketches'
import P5Sketch from './P5Sketch'

type ActiveTab = 'overview' | 'interactive'

function TabMark({ selected }: { selected: boolean }) {
  return (
    <span className="flex items-center gap-1" aria-hidden="true">
      [
      <svg className="pt-[2.75px]" width="8" height="8" viewBox="0 0 8 8">
        <rect
          className={selected ? 'fill-black' : 'fill-none'}
          width="8"
          height="8"
        />
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
      <div className="min-h-96 border-[0.5px] border-black" id="sketch-panels">
        <section
          className="min-h-96 h-full"
          id="overview-panel"
          role="tabpanel"
          aria-labelledby="overview-tab"
          hidden={activeTab !== 'overview'}
        >
          <div className="m-10 grid grid-cols-8 gap-8 max-[700px]:m-4 max-[700px]:grid-cols-1 max-[700px]:gap-4">
            <div className="col-span-4 flex flex-col gap-6 max-[700px]:col-span-1">
              <div className="flex">
                <p className="text-[2rem]">N°{number}</p>
                <p className="text-[4.5rem] capitalize max-[700px]:text-[2.5rem]">
                  {post.title}
                </p>
              </div>
              <p className="text-2xl">{post.description}</p>
              <div>
                <p>CODE</p>
              </div>
            </div>
            <div>
              <p>PICTURES</p>
            </div>
          </div>
        </section>
        <section
          className="min-h-96 h-full"
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

      <nav className="mb-4" aria-label="Sketch views">
        <ul className="flex flex-row justify-center gap-8 max-[700px]:gap-4">
          <li>
            <button
              className="flex cursor-pointer flex-row items-center gap-2 border-0 bg-transparent p-0 font-[inherit] text-inherit"
              type="button"
              id="overview-tab"
              role="tab"
              aria-controls="overview-panel"
              aria-selected={activeTab === 'overview'}
              onClick={() => setActiveTab('overview')}
            >
              <TabMark selected={activeTab === 'overview'} />
              <span>Overview sketch</span>
            </button>
          </li>
          <li>
            <button
              className="flex cursor-pointer flex-row items-center gap-2 border-0 bg-transparent p-0 font-[inherit] text-inherit"
              type="button"
              id="interactive-tab"
              role="tab"
              aria-controls="interactive-panel"
              aria-selected={activeTab === 'interactive'}
              onClick={() => setActiveTab('interactive')}
            >
              <TabMark selected={activeTab === 'interactive'} />
              <span>Interactive tool</span>
            </button>
          </li>
        </ul>
      </nav>
    </>
  )
}
