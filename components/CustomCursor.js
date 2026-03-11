'use client'
import { useEffect, useRef } from 'react'

export default function CustomCursor() {
  const dotRef = useRef()
  const ringRef = useRef()

  useEffect(() => {
    let mx = 0, my = 0, rx = 0, ry = 0
    const move = (e) => {
      mx = e.clientX; my = e.clientY
      dotRef.current.style.transform = `translate(${mx - 4}px, ${my - 4}px)`
    }
    const tick = () => {
      rx += (mx - rx) * 0.1
      ry += (my - ry) * 0.1
      ringRef.current.style.transform = `translate(${rx - 20}px, ${ry - 20}px)`
      requestAnimationFrame(tick)
    }
    window.addEventListener('mousemove', move)
    requestAnimationFrame(tick)
    return () => window.removeEventListener('mousemove', move)
  }, [])

  return (
    <>
      <div ref={dotRef} style={{
        position: 'fixed', width: '8px', height: '8px',
        background: '#f0a020', borderRadius: '50%',
        pointerEvents: 'none', zIndex: 9999, top: 0, left: 0,
      }} />
      <div ref={ringRef} style={{
        position: 'fixed', width: '40px', height: '40px',
        border: '1px solid rgba(240,160,32,0.4)', borderRadius: '50%',
        pointerEvents: 'none', zIndex: 9998, top: 0, left: 0,
        transition: 'width 0.3s, height 0.3s',
      }} />
    </>
  )
}