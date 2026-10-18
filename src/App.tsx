import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { ConfigHint } from '@/components/ConfigHint'
import { Home } from '@/pages/Home'
import { NotFound } from '@/pages/NotFound'

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-svh bg-canvas text-ink">
        <div className="grain" aria-hidden="true" />
        <ConfigHint />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  )
}
