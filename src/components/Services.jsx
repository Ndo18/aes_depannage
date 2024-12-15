import './styles/Services.css'

function Services () {
    return(
        <div id="Servdiv">
            <h1 id="Services">Services</h1>
            <section className='Noservices'>
            <article className='repairart'>
                <span className="repair"><i className="fa-solid fa-screwdriver-wrench"></i></span>
                <h2>Dépannage</h2>
                <img src="public/photodepannageart2.webp" alt="photo de depannage" loading='lazy' />
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta sint natus enim iure saepe quod ipsum provident blanditiis fuga consequuntur.</p>
                <button>En savoir plus</button>
            </article>
            <article className='trucktowart'>
                <span className="trucktow"><i className="fa-solid fa-truck-front"></i></span>
                <h2>Remorquage</h2>
                <img src="public/photoremorquageart.webp" alt="photo remorquage" loading='lazy' />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis sunt, iusto iure vitae recusandae odio delectus autem vel nulla saepe.</p>
                <button>En savoir plus</button>
            </article>
            <article className='transportart'>
                <span className="transport"><i className="fa-solid fa-road"></i></span>
                <h2>Transport</h2>
                <img src="public/phototransport.webp" alt="photo de transport de véhicule" loading="lazy" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil necessitatibus veritatis sed autem? Amet doloremque ullam ipsa praesentium debitis quibusdam!</p>
                <button>En savoir plus</button>
            </article>
            </section>
        </div>
    )
}
export default Services