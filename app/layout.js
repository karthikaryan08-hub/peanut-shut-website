import './globals.css'
import Navbar from '../components/Navbar'

export const metadata = {
  title: "Peanut-Shut™ | Shut Up. It's That Good.",
  description: 'California crafted premium peanut products.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  )
}