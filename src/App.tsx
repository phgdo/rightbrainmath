import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Layout } from './components/Layout'
import { HomeRedirect, ScrollToTop } from './components/Navigation'
import LevelPage from './pages/LevelPage'
import LessonPage from './pages/LessonPage'
import MethodsPage from './pages/MethodsPage'

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<HomeRedirect />} />
          <Route path="/level/:levelId" element={<LevelPage />} />
          <Route path="/lesson/:lessonId" element={<LessonPage />} />
          <Route path="/phuong-phap" element={<MethodsPage />} />
          <Route path="*" element={<HomeRedirect />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}
