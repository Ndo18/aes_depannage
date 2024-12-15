/* eslint-disable react/no-unescaped-entities */
import { useState, useEffect } from "react"
import './styles/Footer.css'
import { NavLink } from 'react-router-dom'
import LogoDesktop from '../assets/logo_service_aes_miniature.webp'

function Footer(){
        const [currentYear, setCurrentYear] = useState(new Date().getFullYear())
        useEffect(()=> {
            const intervalId = setInterval(() => {
                setCurrentYear(new Date().getFullYear)
            }, 1000 * 60 * 60 * 24 * 365)

            return () => clearInterval(intervalId)
        },[])

    return(
        <footer className="footer">
        <div className="infos-container">
        <NavLink to="/"><img src={LogoDesktop} alt="Logo Service AES Dépannage desktop" className='logoaesdesktop' loading="lazy"/></NavLink>
            <div className="infos-qui-sn">
                <h2 className="quisn-title">Qui sommes-nous ?</h2>
                    <ul>
                        <li>À propos de nous</li>
                        <li>Nos métiers</li>
                        <li>Nos engagements</li>
                    </ul>
            </div>
            <div className="infosutiles">
                <h2 className="infosutilestitle">Infos utiles</h2>
                    <ul>
                        <li>Mentions légales & Confidentialité</li>
                        <li>Dépannage & remorquage VL</li>
                        <li>Dépannage & remorquage PL</li>
                        <li>Transport</li>
                        <li>Fourrière</li>
                    </ul>
            </div>
            <div className="liensreseaux">
                <h2 className="suiveznoustitle">Suivez-nous</h2>
                    <a href=""><i className="fa-brands fa-instagram"></i></a>
                    <a href=""><i className="fa-brands fa-linkedin"></i></a>
                    <a href=""><i className="fa-brands fa-facebook"></i></a>
            </div>
        </div>
                <hr />
            <div className="copyright"><p><i className="fa-regular fa-copyright"></i> {currentYear} Le contenu de ce site est protégé par les droits d'auteur et demeure la propriété de Service A.E.S Dépannage, Tous droits réservés.</p></div>
        </footer>
    )
}
export default Footer