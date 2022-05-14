import { Fragment } from 'react';
import './InfoFooterFake';
import InfoFooter from './InfoFooterFake';
import fb from '../Footer/asset/icon_facebook.png'
import ig from '../Footer/asset/icon_instagram.png'
import twt from '../Footer/asset/icon_twitter.png'
import mail from '../Footer/asset/icon_mail.png'
import twitch from '../Footer/asset/icon_twitch.png'


function FooterFake() {
    return (
        <Fragment>
            <footer>
                <div className='wrap-footer-content11'>
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

export default FooterFake;