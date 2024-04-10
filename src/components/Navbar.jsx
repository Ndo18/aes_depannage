import Logo_aes from '../assets/logo_service_aes_miniature.webp'
import './styles/Navbar.css'

function Navbar () {
    return(
        <header className='Header'>
            <img src={Logo_aes} alt="Logo Service AES Dépannage" />
            <div className="mesinfos">
               <a href="tel:+33695150779">
                <i className="fa-solid fa-phone"></i>
               </a>
               <a href="mailto:">
                <i className="fa-solid fa-envelope"></i>
               </a>
            </div>
        </header>
    )
}
export default Navbar