import './Footer.css';
import faaebook from '../../imagens/fb.png';
import twitter from '../../imagens/tw.png';
import instagram from '../../imagens/ig.png';
import logo from '../../imagens/logo.png';



const Footer = () => {
    return(
        <div className='footer'>
            <div className='container'>
                <div className='medias'>
                    <img src={faaebook} alt='facebook' />
                    <img src={twitter} alt='twitter' />
                    <img src={instagram} alt='instagram' />
                </div>
                <img className='logo' src={logo} alt='logo' />
                <span className='text'> Desenvolvido por mim </span>
            </div>
        </div>
    )
}

export default Footer;