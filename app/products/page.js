'use client'
import { useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Image from 'next/image'
import Link from 'next/link'

gsap.registerPlugin(ScrollTrigger)

const products = [
  {
    id: 1,
    name: 'Crunchy Peanuts',
    tagline: 'The Original Crunch',
    description: 'Hand-picked California peanuts roasted to perfection. Every bite delivers that satisfying crunch you crave.',
    image: '/Crunchypeanuts.jpg',
    imageAlt: 'Crunchy Peanuts product',
    weight: '500g / 1kg / 2kg',
    price: 'From $8.99',
    badge: '🥜 Best Seller',
    color: '#f07010',
    lightColor: '#fff3e0',
    facts: ['High Protein', 'No Salt Added', 'Dry Roasted'],
  },
  {
    id: 2,
    name: 'Peanut Butter',
    tagline: 'Shut Up. It\'s That Good.',
    description: 'Creamy or crunchy — our peanut butter is made from 100% pure California peanuts. Zero additives, zero compromise.',
    image: '/PeanutButter.png',
    imageAlt: 'Peanut Butter product',
    imageWidth: 220,
    imageHeight: 220,
    imageBoost: true,
    weight: '350g / 510g / 1kg',
    price: 'From $10.99',
    badge: '⭐ Fan Favorite',
    color: '#e04000',
    lightColor: '#fff0e8',
    facts: ['Zero Additives', 'High Protein', 'Natural Oil'],
  },
  {
    id: 3,
    name: 'Peanut Oil',
    tagline: 'Cold Pressed Perfection',
    description: 'Cold-pressed from premium California peanuts. Light, flavorful, and perfect for cooking or dressing.',
    weight: '500ml / 1L',
    price: 'From $12.99',
    badge: '🌿 Cold Pressed',
    color: '#c85a08',
    lightColor: '#fef9f0',
    facts: ['Cold Pressed', 'No Chemicals', 'High Smoke Point'],
  },
]

function ProductCard({ product, index }) {
  const cardRef = useRef()

  useEffect(() => {
    gsap.fromTo(cardRef.current,
      { y: 80, opacity: 0 },
      {
        y: 0, opacity: 1, duration: 0.9,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: cardRef.current,
          start: 'top 85%',
        },
        delay: index * 0.15,
      }
    )
  }, [])

  return (
    <div ref={cardRef} style={{ opacity: 0 }}>
      <div
        style={{
          background: '#fff',
          borderRadius: '24px',
          overflow: 'hidden',
          boxShadow: '0 4px 24px rgba(0,0,0,0.06)',
          border: '1px solid rgba(200,100,10,0.08)',
          transition: 'all 0.4s ease',
          cursor: 'pointer',
          height: '100%',
        }}
        onMouseEnter={e => {
          gsap.to(e.currentTarget, {
            y: -12,
            boxShadow: `0 20px 60px rgba(200,100,10,0.15)`,
            duration: 0.3,
            ease: 'power2.out'
          })
        }}
        onMouseLeave={e => {
          gsap.to(e.currentTarget, {
            y: 0,
            boxShadow: '0 4px 24px rgba(0,0,0,0.06)',
            duration: 0.3,
            ease: 'power2.out'
          })
        }}
      >
        {/* Card top — colored section */}
        <div style={{
          background: product.lightColor,
          padding: '48px 32px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          position: 'relative',
          minHeight: '280px',
          justifyContent: 'center',
        }}>
          {/* Badge */}
          <div style={{
            position: 'absolute',
            top: '20px',
            left: '20px',
            background: '#fff',
            padding: '6px 14px',
            borderRadius: '50px',
            fontSize: '11px',
            fontWeight: '700',
            color: product.color,
            fontFamily: 'Georgia, serif',
            boxShadow: '0 2px 12px rgba(0,0,0,0.08)',
          }}>
            {product.badge}
          </div>

          {/* Product emoji/icon */}
          <div style={{
            marginBottom: '16px',
            filter: 'drop-shadow(0 8px 16px rgba(0,0,0,0.1))',
          }}>
            {product.image ? (
              <Image
                src={product.image}
                alt={product.imageAlt || product.name}
                width={product.imageWidth || 180}
                height={product.imageHeight || 180}
                style={{
                  objectFit: 'contain',
                  borderRadius: '12px',
                  transform: product.imageBoost ? 'scale(1.08)' : 'none',
                  filter: product.imageBoost ? 'contrast(1.1) saturate(1.1)' : 'none',
                }}
                priority={product.id === 1}
              />
            ) : (
              <div style={{ fontSize: '96px', lineHeight: 1 }}>
                {product.id === 1 ? '🥜' : product.id === 2 ? '🫙' : '🫒'}
              </div>
            )}
          </div>

          {/* Weight options */}
          <div style={{
            background: 'rgba(255,255,255,0.7)',
            padding: '6px 16px',
            borderRadius: '50px',
            fontSize: '12px',
            color: '#7a4a2a',
            fontFamily: 'Georgia, serif',
            fontWeight: '600',
          }}>
            {product.weight}
          </div>
        </div>

        {/* Card bottom — content */}
        <div style={{ padding: '32px' }}>
          {/* Product name */}
          <h3 style={{
            fontSize: '24px',
            fontWeight: '900',
            fontFamily: 'Georgia, serif',
            color: '#1a0800',
            marginBottom: '6px',
            letterSpacing: '-0.02em',
          }}>
            {product.name}
          </h3>

          {/* Tagline */}
          <p style={{
            fontSize: '13px',
            color: product.color,
            fontWeight: '700',
            fontFamily: 'Georgia, serif',
            marginBottom: '16px',
            letterSpacing: '0.05em',
          }}>
            {product.tagline}
          </p>

          {/* Description */}
          <p style={{
            fontSize: '14px',
            lineHeight: '1.7',
            color: '#7a4a2a',
            fontFamily: 'Georgia, serif',
            marginBottom: '24px',
          }}>
            {product.description}
          </p>

          {/* Facts */}
          <div style={{
            display: 'flex',
            gap: '8px',
            flexWrap: 'wrap',
            marginBottom: '28px',
          }}>
            {product.facts.map((fact, i) => (
              <span key={i} style={{
                padding: '5px 12px',
                background: product.lightColor,
                color: product.color,
                fontSize: '11px',
                fontWeight: '700',
                borderRadius: '50px',
                fontFamily: 'Georgia, serif',
                letterSpacing: '0.05em',
              }}>
                {fact}
              </span>
            ))}
          </div>

          {/* Price + CTA */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
            <div>
              <div style={{
                fontSize: '11px',
                color: '#a06040',
                textTransform: 'uppercase',
                letterSpacing: '0.15em',
                fontFamily: 'Georgia, serif',
              }}>Starting from</div>
              <div style={{
                fontSize: '22px',
                fontWeight: '900',
                fontFamily: 'Georgia, serif',
                background: `linear-gradient(135deg, ${product.color}, #c85008)`,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}>
                {product.price}
              </div>
            </div>
            <Link href="/contact" style={{
              textDecoration: 'none',
              padding: '12px 24px',
              background: `linear-gradient(135deg, ${product.color}, #c85008)`,
              color: '#fff',
              fontSize: '12px',
              fontWeight: '800',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              borderRadius: '50px',
              fontFamily: 'Georgia, serif',
              boxShadow: `0 4px 20px rgba(200,80,8,0.3)`,
            }}>
              Order Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Products() {
  const headingRef = useRef()
  const subRef = useRef()

  useEffect(() => {
    gsap.fromTo(headingRef.current,
      { y: 40, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.0, ease: 'power3.out', delay: 0.2 }
    )
    gsap.fromTo(subRef.current,
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out', delay: 0.4 }
    )
  }, [])

  return (
    <main style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #fff8ee 0%, #fff3e0 100%)',
      paddingTop: '72px',
    }}>

      {/* Dotted pattern */}
      <div style={{
        position: 'fixed', inset: 0, opacity: 0.4, pointerEvents: 'none',
        backgroundImage: 'radial-gradient(circle, rgba(200,100,10,0.12) 1px, transparent 1px)',
        backgroundSize: '28px 28px',
      }} />

      {/* Hero section */}
      <div style={{
        textAlign: 'center',
        padding: '80px 48px 60px',
        position: 'relative',
      }}>

        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: '8px',
          background: 'rgba(240,130,20,0.12)',
          border: '1px solid rgba(240,130,20,0.3)',
          padding: '7px 18px', borderRadius: '50px',
          marginBottom: '24px',
        }}>
          <div style={{
            width: '6px', height: '6px', borderRadius: '50%',
            background: '#f07010', animation: 'blink 2s infinite'
          }} />
          <span style={{
            fontSize: '11px', fontWeight: '700', color: '#c85a08',
            letterSpacing: '0.2em', textTransform: 'uppercase',
            fontFamily: 'Georgia, serif',
          }}>
            100% Natural · California Made
          </span>
        </div>

        <h1 ref={headingRef} style={{
          fontSize: 'clamp(40px, 6vw, 80px)',
          fontWeight: '900',
          fontFamily: 'Georgia, serif',
          letterSpacing: '-0.03em',
          lineHeight: '1.0',
          marginBottom: '20px',
          color: '#1a0800',
          opacity: 0,
        }}>
          Our{' '}
          <span style={{
            background: 'linear-gradient(135deg, #f07010, #e04000)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}>
            Products
          </span>
        </h1>

        <p ref={subRef} style={{
          fontSize: '18px',
          color: '#7a4a2a',
          fontFamily: 'Georgia, serif',
          maxWidth: '500px',
          margin: '0 auto',
          lineHeight: '1.7',
          opacity: 0,
        }}>
          Three products. One obsession.
          Pure California peanut goodness.
        </p>
      </div>

      {/* Products Grid */}
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 48px 100px',
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '28px',
      }}>
        {products.map((product, index) => (
          <ProductCard key={product.id} product={product} index={index} />
        ))}
      </div>

      {/* Bottom CTA */}
      <div style={{
        textAlign: 'center',
        padding: '60px 48px',
        background: 'linear-gradient(135deg, #1a0800, #2a1000)',
        position: 'relative',
      }}>
        <h2 style={{
          fontSize: 'clamp(28px, 4vw, 48px)',
          fontWeight: '900',
          fontFamily: 'Georgia, serif',
          color: '#fff',
          marginBottom: '16px',
          letterSpacing: '-0.02em',
        }}>
          Ready to order in bulk?
        </h2>
        <p style={{
          color: 'rgba(255,255,255,0.5)',
          fontFamily: 'Georgia, serif',
          fontSize: '16px',
          marginBottom: '32px',
        }}>
          We supply to businesses, restaurants and retailers across California.
        </p>
        <Link href="/contact" style={{
          textDecoration: 'none',
          padding: '16px 48px',
          background: 'linear-gradient(135deg, #f07010, #e04000)',
          color: '#fff',
          fontSize: '13px',
          fontWeight: '800',
          letterSpacing: '0.2em',
          textTransform: 'uppercase',
          borderRadius: '50px',
          fontFamily: 'Georgia, serif',
          boxShadow: '0 8px 30px rgba(240,112,16,0.4)',
        }}>
          Get A Quote →
        </Link>
      </div>

      <style>{`
        @keyframes blink {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.4; transform: scale(1.5); }
        }
      `}</style>
    </main>
  )
}