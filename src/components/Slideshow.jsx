import diapophotos from '../data/photosdiapo.json'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import './styles/Slideshow.css'
import { NavLink } from 'react-router-dom';

function Slideshow() {
    return (
        <div>
            <h1 className='gallerytitle'>Galerie</h1>
        <Carousel autoPlay interval={3000} infiniteLoop showThumbs={false} showStatus={false} swipeable={true} showArrows={false}>
            {diapophotos.map((slides, index) => (
                <div key={slides.id} className='slidesimg-container'>
                    {/* Applique la classe darken si c'est la dernière image */}
                    <img 
                        src={slides.url} 
                        alt={slides.alt} 
                        className={`slidesimg ${index === diapophotos.length - 1 ? 'darken' : ''}`} 
                    />
                    {/* Affiche le bouton seulement sur la dernière diapo */}
                    {index === diapophotos.length - 1 && (
                        <NavLink to="/Galerie"><button className="last-slide-button">Voir notre galerie</button></NavLink>
                    )}
                </div>
            ))}
        </Carousel>
        </div>
    )
}
export default Slideshow;
