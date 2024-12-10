import Gallerypics from '../data/gallerypics.json';
import './styles/GalleryPictures.css'

function GalleryPictures() {
    return (
        <div className='gallery-container'>
            {Gallerypics.map((picture) => (
                <div key={picture.id} className="gallery-item">
                    <img 
                        src={picture.url}
                        alt={picture.alt} 
                        className="gallery-image" 
                    />
                </div>
            ))}
        </div>
    );
}

export default GalleryPictures;
