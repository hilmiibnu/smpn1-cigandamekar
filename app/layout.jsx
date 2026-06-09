import './globals.css'

export const metadata = {
  title: 'SMPN 1 Cigandamekar',
  description: 'Sistem Absensi dan Nilai'
}

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  )
}