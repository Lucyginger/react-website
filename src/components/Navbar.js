import React, {useState} from 'react';
import { Link } from "react-router-dom";
import './Navbar.css';
import {Button} from './Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope} from '@fortawesome/free-solid-svg-icons';
import {faBars} from '@fortawesome/free-solid-svg-icons';
import {faTimes} from '@fortawesome/free-solid-svg-icons';

function Navbar() {
    const [click, setClick] = useState(false);

    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);

    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if(window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    };

    window.addEventListener('resize', showButton);

    return(
        <>
            <nav className='navbar'>
                <div className='navbar-container'>
                    <Link to='/' className='navbar-logo'>
                        <i className='faEnvelope'>Hello <FontAwesomeIcon icon={faEnvelope} /></i>
                    </Link>
                    <div className='menu-icon' onClick={handleClick}>   
                        {click ? <FontAwesomeIcon className = 'faTimes' icon={faTimes}/> : <FontAwesomeIcon className ='faBars' icon={faBars}/>}
                        {/* <i className={click }> <FontAwesomeIcon icon={faTimes}/> <FontAwesomeIcon icon={faBars}/></i> */}
                        {/* <FontAwesomeIcon className={click? faTimes : faBars }/> */}
                        {/* <i className={click ? {faTimes} : {faBars}><FontAwesomeIcon icon={faBars} /> </i> */}
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        {/* <li className='nav-item'>
                            <Link to='/' className='nav-links'  onClick={closeMobileMenu}> Home </Link> 
                        </li> */}
                        <li className='nav-item'>
                             <Link to='/services' className='nav-links'  onClick={closeMobileMenu}> Services </Link> 
                        </li>
                        <li className='nav-item'>
                            <Link to='/schedule' className='nav-links'  onClick={closeMobileMenu}> Schedule</Link> 
                        </li>
                        <li className='nav-item'>
                            <Link to='/about-us' className='nav-links'  onClick={closeMobileMenu}> About Us</Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/employment' className='nav-links'  onClick={closeMobileMenu}> Employment</Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/contact-us' className='nav-links'  onClick={closeMobileMenu}> Contact Us</Link>
                        </li>
                    </ul>
                    {button && <Button buttonStyle='btn--outline'>SIGN UP</Button>}
                </div>
            </nav>

        </>
    )

}

export default Navbar