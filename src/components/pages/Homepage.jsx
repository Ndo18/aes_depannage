import Slideshow from '../Slideshow'
import Partenaires from '../Partenaires'
import Services from '../Services'
import Window from '../Window'
import ContactForm from '../ContactForm'


function Homepage() {
    return (
        <div>
            <Window />
            <Services />
            <Slideshow />
            <Partenaires />
            <ContactForm />  
        </div>
    )
}
export default Homepage