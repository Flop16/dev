import React, { useState } from 'react'
import {Link} from 'react-scroll'
import { FaBars, FaTimes } from 'react-icons/fa'

import './Navbar.css'

const Navbar = () => {

    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)

    const closeMenu = () => setClick(false)

    return (
        <div className='header'>
            <nav className='navbar'>
                <Link to='/' className='home'>FLO</Link>
                <div className='hamburger' onClick={handleClick}>
                    {click ? (<FaTimes size={30} style={{ color: '#ffffff' }} />)
                        : (<FaBars size={30} style={{ color: '#ffffff' }} />)}

                </div>
                <ul className={click ? "nav-menu active" : "nav-menu"}>
                    <li className='nav-item'>
                        <Link to='hero' spy={true} smooth={true} offset={-100} duration={500} onClick={closeMenu}>Inicio</Link>
                    </li>
                    <li className='nav-item'>
                    <Link to='about' spy={true} smooth={true} offset={-100} duration={500} onClick={closeMenu}>Acerca de mí</Link>
                    </li>
                    <li className='nav-item'>
                    <Link to='projects' spy={true} smooth={true} offset={-100} duration={500} onClick={closeMenu}>Proyectos</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar;
