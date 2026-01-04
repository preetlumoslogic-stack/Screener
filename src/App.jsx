import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './layout/Layout'
import HomePage from './pages/HomePage'
import ScreensPage from './pages/ScreensPage'
import ScreenDetailPage from './pages/ScreenDetailPage'
import CompanyDetailPage from './pages/CompanyDetailPage'
import PremiumPage from './pages/PremiumPage'
import ScreenerAIPage from './pages/ScreenerAIPage'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import AboutUsPage from './pages/AboutUsPage'
import ChangelogPage from './pages/ChangelogPage'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Layout><LoginPage /></Layout>} />
        <Route path="/register" element={<Layout><RegisterPage /></Layout>} />
        <Route path="/" element={<Layout><HomePage /></Layout>} />
        <Route path="/explore" element={<Layout><ScreensPage /></Layout>} />
        <Route path="/screens/:id/:slug" element={<Layout><ScreenDetailPage /></Layout>} />
        <Route path="/company/:symbol" element={<Layout><CompanyDetailPage /></Layout>} />
        <Route path="/premium" element={<Layout><PremiumPage /></Layout>} />
        <Route path="/ai" element={<Layout><ScreenerAIPage /></Layout>} />
        <Route path="/about" element={<Layout><AboutUsPage /></Layout>} />
        <Route path="/changelog" element={<Layout><ChangelogPage /></Layout>} />
      </Routes>
    </Router>
  )
}

export default App

