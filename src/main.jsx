import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
// import App from './App.jsx'
import './index.css'
import Navbar from './components/Navbar.jsx'
import Homepage from './components/pages/Homepage.jsx'
import './components/styles/Navbar.css'
import Footer from './components/Footer.jsx'
import Gallery from './components/pages/Gallery.jsx'
import Apropos from './components/pages/Apropos.jsx'
import ScrollToTop from './components/ScrollToTop.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Navbar />
      <ScrollToTop />
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/Galerie' element={<Gallery />} />
        <Route path='/Apropos' element={<Apropos />} />
      </Routes>
      <Footer />
    </Router>
    {/* <App /> */}
  </React.StrictMode>,
)
