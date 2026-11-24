import { useEffect, useState } from 'react'

function getTime(timeZone: string) {
  return new Date().toLocaleTimeString('en-GB', {
    timeZone,
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  })
}

export default function Clock({ timeZone }: { timeZone: string }) {
  const [time, setTime] = useState('--:--:--')

  useEffect(() => {
    const updateTime = () => setTime(getTime(timeZone))
    updateTime()
    const intervalId = window.setInterval(updateTime, 1000)

    return () => window.clearInterval(intervalId)
  }, [])

  return <time>{time}</time>
}
