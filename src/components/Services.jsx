import './styles/Services.css'

function Services () {
    return(
        <div className="Servdiv">
            <h1 id="Services">Services</h1>
            <section className='Noservices'>
            <article>
                <span className="repair"><i className="fa-solid fa-screwdriver-wrench"></i></span>
                <h2>Dépannage</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita perspiciatis consequatur molestias illum a corrupti eius ex iste facilis accusantium, architecto ratione, sunt sit aliquam numquam aut laudantium. Magni dolorum fugiat, labore beatae dolorem autem. Vero quaerat odio dolorem ad quas molestiae iste maiores doloribus voluptatem perspiciatis. Repellat, quod vitae!</p>
            </article>
            <article>
                <span className="trucktow"><i className="fa-solid fa-truck-front"></i></span>
                <h2>Remorquage</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita perspiciatis consequatur molestias illum a corrupti eius ex iste facilis accusantium, architecto ratione, sunt sit aliquam numquam aut laudantium. Magni dolorum fugiat, labore beatae dolorem autem. Vero quaerat odio dolorem ad quas molestiae iste maiores doloribus voluptatem perspiciatis. Repellat, quod vitae!</p>
            </article>
            <article>
                <span className="transport"><i className="fa-solid fa-road"></i></span>
                <h2>Transport</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita perspiciatis consequatur molestias illum a corrupti eius ex iste facilis accusantium, architecto ratione, sunt sit aliquam numquam aut laudantium. Magni dolorum fugiat, labore beatae dolorem autem. Vero quaerat odio dolorem ad quas molestiae iste maiores doloribus voluptatem perspiciatis. Repellat, quod vitae!</p>
            </article>
            </section>
        </div>
    )
}
export default Services