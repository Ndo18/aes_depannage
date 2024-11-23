/* eslint-disable react/no-unescaped-entities */
import { useState, useEffect } from "react"
import './styles/Footer.css'

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
            <div className="infosutiles">
                <h2 className="infosutilestitle">Infos utiles</h2>
                <ul>
                    <li>Mentions légales & Confidentialité</li>
                    <li>Dépannage & remorquage VL</li>
                    <li>Dépannage & remorquage PL</li>
                    <li>Transpot</li>
                    <li>Fourrière</li>
                </ul>
                <h2 className="suiveznoustitle">Suivez-nous</h2>
                <div className="liensreseaux">
                    <a href=""><i className="fa-brands fa-instagram"></i></a>
                    <a href=""><i className="fa-brands fa-linkedin"></i></a>
                    <a href=""><i className="fa-brands fa-facebook"></i></a>
                </div>
                <hr />
            </div>
            <div className="copyright"><p><i className="fa-regular fa-copyright"></i> {currentYear} Le contenu de ce site est protégé par les droits d'auteur et demeure la propriété de Service A.E.S Dépannage, Tous droits réservés.</p></div>
        </footer>
    )
}
export default Footer