import { Fragment } from 'react';
import './FooterComp1.css';
import InfoFooter from './InfoFooter';
import fb from './asset/icon_facebook.png'
import ig from './asset/icon_instagram.png'
import twt from './asset/icon_twitter.png'
import mail from './asset/icon_mail.png'
import twitch from './asset/icon_twitch.png'
import CarList from '../carlist/Carlist';


function FooterComp1() {
    return (
        <Fragment>
            <footer>
                <div className='wrap-footer-content'>
                    <InfoFooter 
                    class='content-1' 
                    text1='Jalan Suroyo No. 161 Mayangan Kota Probolonggo 672000'
                    text2='binarcarrental@gmail.com'
                    text3='081-233-334-808'>
                    </InfoFooter>

                    <InfoFooter 
                    class='content-2' 
                    text1='Our services'
                    text2='Why Us'
                    text3='Testimonial'
                    text4='FAQ'>
                    </InfoFooter>

                    <div className='medsos'>
                        <p>Connect with us</p>
                        <ul className='content-3'>
                            <li>
                                <img src={fb} alt='icon-fb'></img>
                            </li>
                            <li>
                                <img src={ig} alt='icon-ig'></img>
                            </li>
                            <li>
                                <img src={twt} alt='icon-twit'></img>
                            </li>
                            <li>
                                <img src={mail} alt='icon-mail'></img>
                            </li>
                            <li>
                                <img src={twitch} alt='icon-twitch'></img>
                            </li>
                        </ul>
                    </div>

                <ul className='copyright'>
                    <li>
                        copyright Binar 2022
                    </li>
                </ul>
                </div>
            </footer>
        </Fragment>
    );
}

export default FooterComp1;