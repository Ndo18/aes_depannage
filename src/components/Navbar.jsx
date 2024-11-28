import { useState } from 'react'
import Logo_aes from '../assets/service_aes_depannage_logo_sans_text.png'
import Logo_aes_text from '../assets/service_aes_depannage_logo_text_only.png'
import Logo_aes_desktop from '../assets/service_aes_depannage_logo.png'
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
      <div className="monlogo">
        <NavLink to="/"><img src={Logo_aes} alt="Logo Service AES Dépannage" className='logoaesresponsive'/></NavLink>
        <NavLink to="/"><img src={Logo_aes_text} alt="Text Logo Service AES Dépannage" className='logoaestext'/></NavLink>
        <NavLink to="/"><img src={Logo_aes_desktop} alt="Logo Service AES Dépannage desktop" className='logoaesdesktop'/></NavLink>
      </div>
        <div className="mesinfos">
        <a href="tel:+33612345678" className='iconetel'>
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
              <a href="#Servdiv" onClick={closeMenu}>Nos services</a>
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
            <li>
              <a href="tel:+33612345678" className='numtel'>
                <i className="fa-solid fa-phone"></i><span>0612345678</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Navbar
