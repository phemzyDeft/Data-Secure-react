import React, { useState } from 'react';
import {FaBattleNet, FaTimes} from 'react-icons/fa';
import {GiHamburgerMenu} from 'react-icons/gi';
import './NavStyle.css';
import {Link} from 'react-router-dom'


function Navbar(props) {

	const [nav, setNav] = useState(false);
	const handleNav = () =>setNav(!nav);

	return (
		<div name='top' className='navbar'>
			<div className="container">
				<Link to='/'>
				<div className="logo">
					<FaBattleNet  className='icon'/>
					<h2>LOGO</h2>
				</div>
				</Link>

				<ul className={nav ? 'nav-menu active' : 'nav-menu'} >
					<li><Link to='/' style={{color:'white'}}>Home</Link></li>
					<li><Link to='/recovery' style={{color:'white'}}>Recovery</Link></li>
					<li><Link to='/cloud' style={{color:'white'}}>Cloud</Link></li>
					<li><Link to='/contact' style={{color:'white'}}>Contact</Link></li>

					<button><Link to='/contact' style={{color: 'white'}}>Sign In</Link></button>
				</ul>

				<div className='amburger' onClick={handleNav}>
					{!nav ? (<GiHamburgerMenu className='icon' />) : (<FaTimes className='icon'/>)}
				</div>
			</div>
		</div>
	);
}

export default Navbar;
