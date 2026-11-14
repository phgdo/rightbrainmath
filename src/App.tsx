import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Layout, ScrollToTop } from './components/Layout'
import Home from './pages/Home'
import LevelPage from './pages/LevelPage'
import LessonPage from './pages/LessonPage'

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/level/:levelId" element={<LevelPage />} />
          <Route path="/lesson/:lessonId" element={<LessonPage />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}
