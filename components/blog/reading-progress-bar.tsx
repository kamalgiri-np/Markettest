"use client"

import { useEffect, useState } from "react"

export function ReadingProgressBar() {
  const [width, setWidth] = useState(0)

  useEffect(() => {
    const updateProgressBar = () => {
      const scrollTop = window.scrollY
      const scrollHeight = document.documentElement.scrollHeight
      const clientHeight = document.documentElement.clientHeight

      const scrollDistance = scrollHeight - clientHeight
      const progress = scrollTop / scrollDistance

      setWidth(progress * 100)
    }

    window.addEventListener("scroll", updateProgressBar)

    return () => {
      window.removeEventListener("scroll", updateProgressBar)
    }
  }, [])

  return <div className="reading-progress-bar" style={{ width: `${width}%` }} aria-hidden="true" />
}
