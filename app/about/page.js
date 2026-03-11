export default function About() {
  return (
    <main style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #fff8ee 0%, #fff3e0 100%)',
      paddingTop: '72px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }}>
      <h1 style={{
        fontSize: '64px',
        fontWeight: '900',
        fontFamily: 'Georgia, serif',
        background: 'linear-gradient(135deg, #f07010, #e04000)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
      }}>
        About Us
      </h1>
    </main>
  )
}