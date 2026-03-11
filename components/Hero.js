'use client'
import { useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import Image from 'next/image'

export default function Hero() {
  const leftRef = useRef()
  const rightRef = useRef()
  const jarRef = useRef()
  const badge1Ref = useRef()
  const badge2Ref = useRef()

  useEffect(() => {
    gsap.set(jarRef.current, {
      y: 120,
      scale: 0.6,
      opacity: 0,
      rotation: -8,
    })
    gsap.set([badge1Ref.current, badge2Ref.current], {
      scale: 0,
      opacity: 0,
    })

    const tl = gsap.timeline({ delay: 0.3 })

    tl.fromTo(leftRef.current,
      { x: -80, opacity: 0 },
      { x: 0, opacity: 1, duration: 1.0, ease: 'power3.out' }
    )
    .fromTo(rightRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 0.5, ease: 'power2.out' }, '-=0.6'
    )
    .to(jarRef.current, {
      y: 0,
      scale: 1,
      opacity: 1,
      rotation: 0,
      duration: 1.6,
      ease: 'elastic.out(1, 0.6)',
    }, '-=0.3')
    .to(badge1Ref.current, {
      scale: 1,
      opacity: 1,
      duration: 0.7,
      ease: 'back.out(2.5)',
    }, '-=0.4')
    .to(badge2Ref.current, {
      scale: 1,
      opacity: 1,
      duration: 0.7,
      ease: 'back.out(2.5)',
    }, '-=0.4')

    gsap.to(jarRef.current, {
      y: -22,
      duration: 2.8,
      ease: 'sine.inOut',
      yoyo: true,
      repeat: -1,
      delay: 2.0,
    })

    gsap.to(badge1Ref.current, {
      y: -12,
      rotation: 2,
      duration: 3.0,
      ease: 'sine.inOut',
      yoyo: true,
      repeat: -1,
      delay: 2.2,
    })

    gsap.to(badge2Ref.current, {
      y: -10,
      rotation: -2,
      duration: 2.6,
      ease: 'sine.inOut',
      yoyo: true,
      repeat: -1,
      delay: 2.5,
    })

    const handleMouseMove = (e) => {
      const xPercent = (e.clientX / window.innerWidth - 0.5) * 14
      const yPercent = (e.clientY / window.innerHeight - 0.5) * 8
      gsap.to(jarRef.current, {
        rotationY: xPercent,
        rotationX: -yPercent,
        duration: 1.8,
        ease: 'power2.out',
      })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <section style={{
      width: '100%',
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #fff8ee 0%, #fff3e0 40%, #ffe8c8 100%)',
      display: 'flex',
      alignItems: 'center',
      position: 'relative',
      overflow: 'hidden',
      paddingTop: '72px',
    }}>

      <div style={{
        position: 'absolute',
        inset: 0,
        opacity: 0.5,
        backgroundImage: 'radial-gradient(circle, rgba(200,100,10,0.12) 1px, transparent 1px)',
        backgroundSize: '28px 28px',
        pointerEvents: 'none',
      }} />

      <div style={{
        position: 'absolute',
        right: '8%',
        top: '50%',
        transform: 'translateY(-50%)',
        width: '600px',
        height: '600px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(240,130,20,0.1) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div style={{
        width: '100%',
        maxWidth: '1280px',
        margin: '0 auto',
        padding: '40px 60px',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        alignItems: 'center',
        gap: '20px',
        minHeight: 'calc(100vh - 72px)',
      }}>

        <div ref={leftRef} style={{ opacity: 0 }}>

          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            background: 'rgba(240,130,20,0.12)',
            border: '1px solid rgba(240,130,20,0.3)',
            padding: '7px 18px',
            borderRadius: '50px',
            marginBottom: '32px',
          }}>
            <div style={{
              width: '6px',
              height: '6px',
              borderRadius: '50%',
              background: '#f07010',
              animation: 'blink 2s infinite',
            }} />
            <span style={{
              fontSize: '11px',
              fontWeight: '700',
              color: '#c85a08',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              fontFamily: 'Georgia, serif',
            }}>
              California Crafted · Est. 1995
            </span>
          </div>

          <h1 style={{
            fontSize: 'clamp(44px, 5.5vw, 80px)',
            fontWeight: '900',
            fontFamily: 'Georgia, serif',
            letterSpacing: '-0.03em',
            lineHeight: '1.0',
            marginBottom: '24px',
            color: '#1a0800',
          }}>
            Shut Up.<br />
            <span style={{
              background: 'linear-gradient(135deg, #f07010 0%, #e04000 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>
              It's That
            </span>
            <br />
            Good.
          </h1>

          <p style={{
            fontSize: '16px',
            lineHeight: '1.8',
            color: '#7a4a2a',
            maxWidth: '400px',
            marginBottom: '40px',
            fontFamily: 'Georgia, serif',
          }}>
            Hand-picked California peanuts. Cold-pressed oil.
            Zero additives, zero compromise — pure goodness
            in every single jar.
          </p>

          <div style={{
            display: 'flex',
            gap: '14px',
            marginBottom: '56px',
          }}>
            <a href="/products" style={{
              textDecoration: 'none',
              padding: '16px 36px',
              background: 'linear-gradient(135deg, #f07010, #e04000)',
              color: '#fff',
              fontSize: '13px',
              fontWeight: '800',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              borderRadius: '50px',
              fontFamily: 'Georgia, serif',
              boxShadow: '0 8px 30px rgba(224,80,0,0.3)',
            }}>
              Shop Now →
            </a>
            <a href="/about" style={{
              textDecoration: 'none',
              padding: '16px 36px',
              background: '#fff',
              color: '#c85a08',
              fontSize: '13px',
              fontWeight: '800',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              borderRadius: '50px',
              fontFamily: 'Georgia, serif',
              border: '2px solid rgba(200,90,8,0.15)',
            }}>
              Our Story
            </a>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            borderTop: '1px solid rgba(200,100,10,0.15)',
            paddingTop: '28px',
          }}>
            {[
              ['25+', 'Years'],
              ['3', 'Products'],
              ['10K+', 'Clients'],
            ].map(([n, l], i) => (
              <div key={i} style={{
                borderRight: i < 2 ? '1px solid rgba(200,100,10,0.15)' : 'none',
                paddingRight: i < 2 ? '20px' : '0',
                paddingLeft: i > 0 ? '20px' : '0',
              }}>
                <div style={{
                  fontSize: '30px',
                  fontWeight: '900',
                  fontFamily: 'Georgia, serif',
                  background: 'linear-gradient(135deg, #f07010, #e04000)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  lineHeight: 1,
                  marginBottom: '4px',
                }}>
                  {n}
                </div>
                <div style={{
                  color: '#a06040',
                  fontSize: '10px',
                  letterSpacing: '0.2em',
                  textTransform: 'uppercase',
                  fontFamily: 'Georgia, serif',
                }}>
                  {l}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div ref={rightRef} style={{
          opacity: 0,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
          height: '620px',
          perspective: '1000px',
        }}>

          <div style={{
            position: 'absolute',
            bottom: '60px',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '260px',
            height: '40px',
            background: 'radial-gradient(ellipse, rgba(180,80,0,0.2) 0%, transparent 70%)',
            filter: 'blur(12px)',
            borderRadius: '50%',
            pointerEvents: 'none',
            zIndex: 0,
          }} />

          <div style={{
            position: 'absolute',
            width: '380px',
            height: '380px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(240,160,30,0.2) 0%, transparent 70%)',
            filter: 'blur(24px)',
            pointerEvents: 'none',
            zIndex: 0,
          }} />

          <div ref={jarRef} style={{
            opacity: 0,
            position: 'relative',
            zIndex: 2,
            transformStyle: 'preserve-3d',
          }}>
            <Image
              src="/jar.png"
              alt="Peanut-Shut Peanut Butter Jar"
              width={460}
              height={500}
              style={{
                objectFit: 'contain',
                filter: 'drop-shadow(0 40px 60px rgba(150,60,0,0.3))',
                maxWidth: '100%',
              }}
              priority
            />
          </div>

          <div ref={badge1Ref} style={{
            position: 'absolute',
            top: '80px',
            right: '20px',
            background: '#fff',
            border: '1px solid rgba(240,130,20,0.2)',
            borderRadius: '16px',
            padding: '14px 20px',
            boxShadow: '0 12px 40px rgba(0,0,0,0.08)',
            zIndex: 3,
            opacity: 0,
          }}>
            <div style={{
              fontSize: '9px',
              color: '#a06040',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              marginBottom: '3px',
              fontFamily: 'Georgia, serif',
            }}>
              100% Natural
            </div>
            <div style={{
              fontSize: '17px',
              fontWeight: '900',
              color: '#1a0800',
              fontFamily: 'Georgia, serif',
            }}>
              No Additives 🌿
            </div>
          </div>

          <div ref={badge2Ref} style={{
            position: 'absolute',
            bottom: '100px',
            left: '10px',
            background: '#fff',
            border: '1px solid rgba(240,130,20,0.2)',
            borderRadius: '16px',
            padding: '14px 20px',
            boxShadow: '0 12px 40px rgba(0,0,0,0.08)',
            zIndex: 3,
            opacity: 0,
          }}>
            <div style={{
              fontSize: '9px',
              color: '#a06040',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              marginBottom: '3px',
              fontFamily: 'Georgia, serif',
            }}>
              Cold Pressed
            </div>
            <div style={{
              fontSize: '17px',
              fontWeight: '900',
              color: '#1a0800',
              fontFamily: 'Georgia, serif',
            }}>
              Pure Oil 🥜
            </div>
          </div>

          {[
            { top: '20%', left: '5%', size: 12, delay: '0s' },
            { top: '70%', right: '8%', size: 8, delay: '0.5s' },
            { top: '40%', right: '5%', size: 14, delay: '1s' },
            { top: '15%', right: '25%', size: 10, delay: '1.5s' },
          ].map((dot, i) => (
            <div key={i} style={{
              position: 'absolute',
              top: dot.top,
              left: dot.left,
              right: dot.right,
              width: `${dot.size}px`,
              height: `${dot.size}px`,
              borderRadius: '50%',
              background: 'linear-gradient(135deg, #f07010, #c85008)',
              opacity: 0.4,
              animation: 'floatDot 3s ease-in-out infinite',
              animationDelay: dot.delay,
              zIndex: 1,
            }} />
          ))}
        </div>
      </div>

      <div style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: '3px',
        background: 'linear-gradient(90deg, transparent, #f07010, #e04000, transparent)',
        opacity: 0.4,
      }} />

      <style>{`
        @keyframes blink {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.4; transform: scale(1.5); }
        }
        @keyframes floatDot {
          0%, 100% { transform: translateY(0px) scale(1); }
          50% { transform: translateY(-15px) scale(1.2); }
        }
      `}</style>
    </section>
  )
}