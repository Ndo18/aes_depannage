// import './styles/Description.css'
import './styles/Partenaires.css'
import LogoPartners from '../data/partners.json'

function Partenaires() {
    return(
        <div className='description-container'>
            <h1 className='partner-title'>Ils nous font confiance</h1>
            <div className="mes-partners">
                {LogoPartners.map((partners) => (
                    <figure key={partners.id}>
                        <img src={`${partners.url}`} alt={partners.alt} />
                        <figcaption>{partners.name}</figcaption>
                    </figure>
                ))}
            </div>
        </div>
    )
}
export default Partenaires

//Modifier aussi le css mobile first