import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
// import App from './App.jsx'
import './index.css'
import Navbar from './components/Navbar.jsx'
import Homepage from './components/pages/Homepage.jsx'
import './components/styles/Navbar.css'
import Footer from './components/Footer.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Homepage />} />
      </Routes>
      <Footer />
    </Router>
    {/* <App /> */}
  </React.StrictMode>,
)
