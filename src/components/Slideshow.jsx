import diapophotos from '../data/photosdiapo.json'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import './styles/Slideshow.css'

function Slideshow() {

    return (
        <Carousel autoPlay interval={3000} infiniteLoop showThumbs={false} showStatus={false} swipeable={true}>
            {diapophotos.map(slides => (
                <div key={slides.id}>
                    <img src={slides.url} alt="" />
                </div>
            ))}
        </Carousel>
    )
}

export default Slideshow