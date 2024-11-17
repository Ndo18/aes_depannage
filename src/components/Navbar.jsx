import { useState } from 'react'
import Logo_aes from '../assets/service_aes_depannage_logo_sans_text.png'
import Logo_aes_text from '../assets/service_aes_depannage_logo_text_only.png'
import './styles/Navbar.css'
import { NavLink } from 'react-router-dom'

function Navbar () {
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  const closeMenu = () => {
    setMenuOpen(false)
  }

  return (
    <header className='Header'>
      <NavLink to="/"><img src={Logo_aes} alt="Logo Service AES Dépannage" /></NavLink>
      <NavLink to="/"><img src={Logo_aes_text} alt="Text Logo Service AES Dépannage" /></NavLink>
      <div className="mesinfos">
        <a href="tel:+33695150779">
          <i className="fa-solid fa-phone"></i>
        </a>
        <nav className="navbar">
          <div 
            className={`menuburger ${menuOpen ? 'open' : ''}`} 
            onClick={toggleMenu}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
          <ul className={menuOpen ? "open" : ""}>
            <li>
              <NavLink to="/" onClick={closeMenu}>Accueil</NavLink>
            </li>
            <li>
              <a href="#Services" onClick={closeMenu}>Nos services</a>
            </li>
            <li>
              <NavLink to="/Galerie" onClick={closeMenu}>Galerie</NavLink>
            </li>
            <li>
              <NavLink to="/Apropos" onClick={closeMenu}>À propos de nous</NavLink>
            </li>
            <li>
              <a href="#Contact" onClick={closeMenu}>Contact</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Navbar
