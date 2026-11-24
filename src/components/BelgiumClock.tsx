import { useEffect, useState } from 'react'

function getBelgiumTime() {
  return new Date().toLocaleTimeString('en-GB', {
    timeZone: 'Europe/Brussels',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  })
}

export default function BelgiumClock() {
  const [time, setTime] = useState('--:--:--')

  useEffect(() => {
    const updateTime = () => setTime(getBelgiumTime())
    updateTime()
    const intervalId = window.setInterval(updateTime, 1000)

    return () => window.clearInterval(intervalId)
  }, [])

  return <time>{time}</time>
}
