import { HashRouter, Routes, Route } from 'react-router-dom'
import MainMenu from './pages/MainMenu'
import AboutMe from './pages/AboutMe'
import Experience from './pages/Experience'
import Certifications from './pages/Certifications'
import BlogPosts from './pages/BlogPosts'
import './minecraft.css'

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/"               element={<MainMenu />} />
        <Route path="/about"          element={<AboutMe />} />
        <Route path="/experience"     element={<Experience />} />
        <Route path="/certifications" element={<Certifications />} />
        <Route path="/blog"           element={<BlogPosts />} />
      </Routes>
    </HashRouter>
  )
}
