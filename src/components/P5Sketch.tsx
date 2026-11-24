import { useEffect, useRef } from 'react'
import type p5 from 'p5'

type Sketch = (instance: p5) => void

const sketchDefinitions: Partial<Record<string, Sketch>> = {
  '20261105-1.js': (instance) => {
    instance.setup = () => {
      const canvas = instance.createCanvas(600, 400)
      canvas.elt.classList.add(
        'block',
        'max-w-full',
        'border-[0.5px]',
        'border-black',
      )
      instance.background(239)
      instance.noLoop()
      instance.ellipse(instance.width / 2, instance.height / 2, 200, 200)
    }
  },
}

export default function P5Sketch({ sketchLink }: { sketchLink: string }) {
  const mountRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const sketch = sketchDefinitions[sketchLink]
    if (!sketch || !mountRef.current) return

    let disposed = false
    let instance: p5 | undefined

    void import('p5')
      .then(({ default: P5 }) => {
        if (!disposed && mountRef.current) {
          instance = new P5(sketch, mountRef.current)
        }
      })
      .catch((error: unknown) => {
        console.error('Failed to load the p5 sketch.', error)
      })

    return () => {
      disposed = true
      instance?.remove()
    }
  }, [sketchLink])

  return (
    <div className="grid min-h-96 place-items-center">
      <div id="sketch-mount" ref={mountRef} aria-label="Interactive sketch" />
    </div>
  )
}
