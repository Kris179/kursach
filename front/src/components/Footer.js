import React from 'react';
import '../styles/globalStyles.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter } from '@fortawesome/free-brands-svg-icons';


const Footer = () => {
    return (
        <footer>
            <div className="footer-logo">
                <img src={require('../img/logo.png')} style={{width:'80px', marginLeft: '70px'}} />
            </div>
            <div className="footer-menu">
                <ul>
                    <li>Для кого</li>
                    <li>Каталог</li>
                    <li>Профиль</li>
                </ul>
            </div>
            <div className="footer-social">
                <a href="https://www.facebook.com">
                    <FontAwesomeIcon icon={faFacebook} />
                </a>
                <a href="https://www.twitter.com">
                    <FontAwesomeIcon icon={faTwitter} />
                </a>
            </div>

        </footer>
    );
};

export default Footer;