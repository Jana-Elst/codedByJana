import BelgiumClock from './BelgiumClock'

export default function Intro() {
  return (
    <section className="intro">
      <div className="intro-text">
        <p>
          Welcome dearest visitor
          <span className="visitor-location" />,
        </p>
        <p>
          You’ve found a website dedicated to weird code experiments. If you
          like it, send me an <a href="mailto:elst.jana@gmail.com">email</a> or
          slide into my{' '}
          <a
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
      <aside className="intro-contact">
        <ul>
          <li>
            <a
              href="https://www.janaelst.be"
              target="_blank"
              rel="noopener noreferrer"
            >
              www.janaelst.be
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/janaelst.be"
              target="_blank"
              rel="noopener noreferrer"
            >
              @janaelst
            </a>
          </li>
          <li>
            <a href="mailto:elst.jana@gmail.com">elst.jana@gmail.com</a>
          </li>
        </ul>
        <ul className="intro-contact__locationTime">
          <li>Ghent, Belgium</li>
          <li>
            <BelgiumClock />
          </li>
        </ul>
      </aside>
    </section>
  )
}
