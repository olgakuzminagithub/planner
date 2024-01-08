import type { Metadata } from 'next'
import 'bootstrap/dist/css/bootstrap.min.css';
import './globals.css'
import Nav from '@/components/Nav';


export const metadata: Metadata = {
  title: 'Planner',
  description: 'Create you scehedule',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <div className="container">
          <header>
            <Nav/>
          </header>
          {children}
        </div>
      </body>   
    </html>
  )
}
