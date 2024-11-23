import './styles/Services.css'

function Services () {
    return(
        <div id="Servdiv">
            <h1 id="Services">Services</h1>
            <section className='Noservices'>
            <article>
                <span className="repair"><i className="fa-solid fa-screwdriver-wrench"></i></span>
                <h2>Dépannage</h2>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta sint natus enim iure saepe quod ipsum provident blanditiis fuga consequuntur.</p>
            </article>
            <article>
                <span className="trucktow"><i className="fa-solid fa-truck-front"></i></span>
                <h2>Remorquage</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis sunt, iusto iure vitae recusandae odio delectus autem vel nulla saepe.</p>
            </article>
            <article>
                <span className="transport"><i className="fa-solid fa-road"></i></span>
                <h2>Transport</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil necessitatibus veritatis sed autem? Amet doloremque ullam ipsa praesentium debitis quibusdam!</p>
            </article>
            </section>
        </div>
    )
}
export default Services