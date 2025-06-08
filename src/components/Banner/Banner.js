import banner from '../../imagens/banner.png';
import './Banner.css'

function Banner() {
    return(
        <header className="banner">
            <img src={banner} alt="Imagem banner principal"/>
        </header>
    );
}

export default Banner;