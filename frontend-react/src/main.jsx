import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// Import Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css'
// Import Bootstrap Icons CSS
import 'bootstrap-icons/font/bootstrap-icons.css'
// Import global styles with font declarations
import './globals.css'
// Import custom CSS
import './index.css'

// Import Layout and Pages
import Layout from './components/Layout'
import Home from './pages/Home'
import TentangHimasif from './pages/TentangHimasif'
import FilosofiLogo from './pages/FilosofiLogo'
import VisiMisi from './pages/VisiMisi'
import Struktur from './pages/Struktur'
import Merch from './pages/Merch'
import Berita from './pages/Berita'
import Galeri from './pages/Galeri'
import NotFound from './pages/NotFound'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="tentang-himasif" element={<TentangHimasif />} />
          <Route path="filosofi-logo" element={<FilosofiLogo />} />
          <Route path="visi-misi" element={<VisiMisi />} />
          <Route path="struktur" element={<Struktur />} />
          <Route path="merch" element={<Merch />} />
          <Route path="berita" element={<Berita />} />
          <Route path="galeri" element={<Galeri />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
