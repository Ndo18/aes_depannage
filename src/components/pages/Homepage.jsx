import Slideshow from '../Slideshow'
// import Description from './components/Description'
import Services from '../Services'
import Window from '../Window'
import GoodToKnow from '../GoodToKnow'
import ContactForm from '../ContactForm'


function Homepage() {
    return (
        <div>
  {/* <Description /> */}
  <Window />
  <Services />
  <Slideshow />
  <GoodToKnow />
  <ContactForm />

  
        </div>
    )
}
export default Homepage