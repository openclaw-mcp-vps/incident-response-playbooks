import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Incident Response Playbooks — Interactive Checklists for DevOps & SREs',
  description: 'Interactive, step-by-step incident response playbooks with real-time collaboration and post-mortem templates for DevOps teams and SREs.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="5a24038e-c1cf-4d35-a1fa-b296f5c65524"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] min-h-screen font-sans antialiased">
        {children}
      </body>
    </html>
  )
}
