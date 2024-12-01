/* eslint-disable react/no-unescaped-entities */
import './styles/Window.css'

function Window() {

    const numero = "0607080910"

    return(
        <div className="windowopen">
            <div className="windowinfo">
                <p>Professionnel du dépannage, remorquage et transport
                    des véhicules légers et poids lourds</p> <br />
                <p className='schedules'><i className="fa-regular fa-clock"></i><br /><strong>24H/24 & 7J/7</strong></p> <br />
                <p className='appelnous'>Appelez-nous <br /> <strong>{numero}</strong></p>
            </div>
        </div>
    )
}
export default Window