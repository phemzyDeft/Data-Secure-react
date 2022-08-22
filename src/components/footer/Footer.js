import React from 'react';
import {FaBattleNet} from 'react-icons/fa';
import {BiMailSend} from 'react-icons/bi';
import {TiSocialFacebook, TiSocialTwitter, TiSocialLinkedin} from 'react-icons/ti';
import {FiInstagram} from 'react-icons/fi';
import {IoLogoWhatsapp} from 'react-icons/io';
import {BsFillArrowUpCircleFill} from 'react-icons/bs'
import './Footer.css';
import {Link} from 'react-scroll';
import {Link as Tag} from 'react-router-dom';


function Footer(props) {
    return (
        <div className='footer'>
            <div className="container">
                <div className="top">
                    <div className="logo-footer">
                        <FaBattleNet  className='icon'/>
                        <h2>LOGO</h2>
                    </div>
                    <Link activeClass="active" to="top" spy={true} smooth={true} duration={500}>
                    <BsFillArrowUpCircleFill className='icon-to-top'/></Link>
                    
                </div>

                <div className="col-container">
                    <div className="col">
                        <h3>Navigation</h3>
                        <p><Tag to='/' style={{color: 'black'}}>Home</Tag></p>
                        <p><Tag to='/recovery' style={{color: 'black'}}>Data</Tag></p>
                        <p><Tag to='/cloud' style={{color: 'black'}}>Cloud</Tag></p>
                        <p><Tag to='/contact' style={{color: 'black'}}>Contact</Tag></p>
                    </div>
                    <div className="col">
                        <h3>My Account</h3>
                        <p><Tag to='/' style={{color: 'black'}}>Home</Tag></p>
                        <p><Tag to='/recovery' style={{color: 'black'}}>Data</Tag></p>
                        <p><Tag to='/cloud' style={{color: 'black'}}>Cloud</Tag></p>
                        <p><Tag to='/contact' style={{color: 'black'}}>Contact</Tag></p>
                    </div>
                    <div className="col">
                        <h3>Information</h3>
                        <p><Tag to='/' style={{color: 'black'}}>Home</Tag></p>
                        <p><Tag to='/recovery' style={{color: 'black'}}>Data</Tag></p>
                        <p><Tag to='/cloud' style={{color: 'black'}}>Cloud</Tag></p>
                        <p><Tag to='/contact' style={{color: 'black'}}>Contact</Tag></p>
                    </div>
                    <div className="col">
                        <h3>Legar</h3>
                        <p><Tag to='/' style={{color: 'black'}}>Home</Tag></p>
                        <p><Tag to='/recovery' style={{color: 'black'}}>Data</Tag></p>
                        <p><Tag to='/cloud' style={{color: 'black'}}>Cloud</Tag></p>
                        <p><Tag to='/contact' style={{color: 'black'}}>Contact</Tag></p>
                    </div>

                    <form action="/" autoComplete='off'>
                        <h3>Join Our Team</h3>
                        <input type="email" name="email" id="" placeholder='input email' />
                        <BiMailSend className="mail" />

                        <div className="social-group">
                            <TiSocialTwitter className='social-icon'/>
                            <TiSocialLinkedin className='social-icon'/>
                            <TiSocialFacebook className='social-icon'/>
                            <FiInstagram className='social-icon'/>
                            <IoLogoWhatsapp className='social-icon'/>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Footer;