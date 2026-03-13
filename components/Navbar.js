'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const links = [
    { href: '/', label: 'Home' },
    { href: '/products', label: 'Products' },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' },
  ]

  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        width: '100%',
        zIndex: 100,
        padding: '0 48px',
        height: scrolled ? '64px' : '80px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        transition: 'all 0.4s ease',
        background: scrolled ? 'rgba(255,251,245,0.95)' : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(200,100,10,0.1)' : 'none',
      }}
    >
      {/* Logo */}
      <Link href="/" style={{ textDecoration: 'none' }}>
        <div style={{ lineHeight: 1.0 }}>
          <div
            style={{
              fontSize: '18px',
              fontWeight: '900',
              fontFamily: 'Georgia, serif',
              color: '#1a0a00',
              letterSpacing: '-0.03em',
            }}
          >
            PEANUT
          </div>

          <div
            style={{
              fontSize: '18px',
              fontWeight: '900',
              fontFamily: 'Georgia, serif',
              background: 'linear-gradient(90deg, #f07010, #e04000)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              letterSpacing: '-0.03em',
              marginTop: '-2px',
            }}
          >
            SHUT™
          </div>
        </div>
      </Link>

      {/* Desktop Links */}
      <div
        style={{
          display: 'flex',
          gap: '40px',
          alignItems: 'center',
        }}
      >
        {links.map(({ href, label }) => {
          const active = pathname === href

          return (
            <Link
              key={href}
              href={href}
              style={{
                textDecoration: 'none',
                color: active ? '#e05010' : '#6b3a1f',
                fontSize: '12px',
                fontWeight: '700',
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                fontFamily: 'Georgia, serif',
                position: 'relative',
                paddingBottom: '6px',
              }}
            >
              {label}

              {/* underline animation */}
              <span
                style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  width: active ? '100%' : '0%',
                  height: '2px',
                  background: '#e05010',
                  transition: 'width 0.3s ease',
                }}
              />
            </Link>
          )
        })}

        {/* CTA Button */}
        <Link
          href="/contact"
          style={{
            textDecoration: 'none',
            padding: '10px 24px',
            background: 'linear-gradient(135deg, #f07010, #e04000)',
            color: '#fff',
            fontSize: '11px',
            fontWeight: '800',
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            fontFamily: 'Georgia, serif',
            borderRadius: '50px',
            boxShadow: '0 4px 20px rgba(224,80,0,0.3)',
            transition: 'transform 0.2s',
          }}
        >
          Get Quote
        </Link>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          style={{
            display: 'none',
            fontSize: '24px',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
          }}
        >
          ☰
        </button>
      </div>
    </nav>
  )
}