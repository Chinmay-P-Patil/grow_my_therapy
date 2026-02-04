"use client"

import { useEffect, useRef, useState } from "react"

export default function RevealObserver({
  children,
  animation = "fade-up",
}) {
  const ref = useRef(null)
  const [show, setShow] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShow(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1 }
    )

    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={show ? animation : "opacity-0"}
    >
      {children}
    </div>
  )
}
