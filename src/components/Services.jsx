/* eslint-disable react/no-unescaped-entities */
import './styles/Services.css'

function Services () {
    return(
        <div id="Servdiv">
            <h1 id="Services">Services</h1>
            <section className='Noservices'>
            <article className='repairart'>
                <span className="repair"><i className="fa-solid fa-screwdriver-wrench"></i></span>
                <h2>Dépannage</h2>
                <img src={`${import.meta.env.BASE_URL}/photodepannageart2.webp`} alt="photo de depannage" loading='lazy' />
                <p>Notre service de dépannage de véhicules sur place intervient rapidement pour résoudre vos pannes. Batterie déchargée, pneu crevé, problème moteur ou perte de clés, nos techniciens sont là pour vous dépanner directement sur le lieu de l’incident et vous permettre de reprendre la route rapidement.</p>
                <button>En savoir plus</button>
            </article>
            <article className='trucktowart'>
                <span className="trucktow"><i className="fa-solid fa-truck-front"></i></span>
                <h2>Remorquage</h2>
                <img src={`${import.meta.env.BASE_URL}/photoremorquageart.webp`} alt="Photo remorquage" loading='lazy'/>
                <p>En cas de panne ou d'accident, notre service de remorquage intervient rapidement, que ce soit sur la route, dans un parking ou sur un terrain privé. Disponibles de jour comme de nuit, nos techniciens qualifiés assurent un transport sécurisé de votre véhicule vers le garage de votre choix. Avec nous, gérez la situation en toute sérénité.</p>
                <button>En savoir plus</button>
            </article>
            <article className='transportart'>
                <span className="transport"><i className="fa-solid fa-road"></i></span>
                <h2>Transport</h2>
                <img src={`${import.meta.env.BASE_URL}/phototransport.webp`} alt="photo de transport de véhicule" loading="lazy" />
                <p>Que ce soit pour une voiture neuve ou immobilisée, notre service de transport répond à vos besoins, en France comme à travers l’Europe. Nous intervenons rapidement, quel que soit le point de départ : garage, parking ou tout autre lieu. Votre véhicule est entre de bonnes mains, grâce à un acheminement sûr et sur mesure.</p>
                <button>En savoir plus</button>
            </article>
            </section>
        </div>
    )
}
export default Services