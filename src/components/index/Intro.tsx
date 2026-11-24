import Clock from './Clock'
import { cva } from "class-variance-authority"
import { cn } from "../../lib/utils"


export default function Intro() {
  return (
    <section
      className={(
        "grid grid-cols-8 gap-8 m-10"
      )}
    >

      {/* Intro text */}
      <div
        className={cn(
          "col-span-5",
          "flex flex-col gap-7",
          "text-[1.75rem] leading-[1.3]",
        )}
      >
        <p>
          Welcome dearest visitor
          <span />,
        </p>
        <p>
          You’ve found a website dedicated to weird code experiments. If you
          like it, send me an{' '}
          <a className="text-inherit" href="mailto:elst.jana@gmail.com">
            email
          </a>{' '}
          or slide into my{' '}
          <a
            className="text-inherit"
            href="https://www.instagram.com/janaelst"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </a>{' '}
          DMs. Depending on my mood, I’ll answer one faster than the other, or I
          might never answer. Sending me a message is a little like betting. But
          I’d still love it if you did. Interested in more projects? Visit my{' '}
          <a
            className="text-inherit"
            href="https://www.janaelst.be"
            target="_blank"
            rel="noopener noreferrer"
          >
            main website
          </a>{' '}
          :-)
        </p>
        <p>Jana &lt;3</p>
      </div>

      {/* Contact information */}
      <aside
        className={cn(
          "col-8",
          "flex flex-col gap-6 text-base",
        )}>

        {/* Contact details */}
        <ul>
          <li>
            <a
              className="text-inherit"
              href="https://www.janaelst.be"
              target="_blank"
              rel="noopener noreferrer"
            >
              www.janaelst.be
            </a>
          </li>
          <li>
            <a
              className="text-inherit"
              href="https://www.instagram.com/janaelst.be"
              target="_blank"
              rel="noopener noreferrer"
            >
              @janaelst
            </a>
          </li>
          <li>
            <a className="text-inherit" href="mailto:elst.jana@gmail.com">
              elst.jana@gmail.com
            </a>
          </li>
        </ul>

        {/* Location & Time */}
        <ul>
          <li>Ghent, Belgium</li>
          <li>
            <Clock timeZone="Europe/Brussels" />
          </li>
        </ul>
      </aside>
    </section>
  )
}
