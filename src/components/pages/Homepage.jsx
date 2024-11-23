import Slideshow from '../Slideshow'
import Partenaires from '../Partenaires'
import Services from '../Services'
import Window from '../Window'
import GoodToKnow from '../GoodToKnow'
import ContactForm from '../ContactForm'


function Homepage() {
    return (
        <div>
            <Window />
            <Services />
            <Slideshow />
            <GoodToKnow />
            <Partenaires />
            <ContactForm />  
        </div>
    )
}
export default Homepage