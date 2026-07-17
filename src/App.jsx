import { Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import BackToTop from "./components/BackToTop"
import ScrollToTop from "./components/ScrollToTop"
import Home from "./pages/Home"
import CursoPage from "./pages/CursoPage"
import DepoimentoPage from "./pages/DepoimentoPage"
import EmBreve from "./pages/EmBreve"
import MbaPage from "./pages/MbaPage"
import NewsletterPage from "./pages/NewsletterPage"
import BlogPage from "./pages/BlogPage"
import "./App.css"

function App() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cursos/:slug" element={<CursoPage />} />
        <Route path="/depoimentos/:slug" element={<DepoimentoPage />} />
        <Route path="/mba" element={<MbaPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/newsletter" element={<NewsletterPage />} />
        <Route path="/login" element={<EmBreve titulo="Login" />} />
      </Routes>
      <Footer />
      <BackToTop />
    </>
  )
}

export default App
