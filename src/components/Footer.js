import React from 'react'
import './Footer.css'

const Footer = () => {
    return (
        <div className='footer'>
            <div className='container'>
                <ul>
                    <li className='nav-item'>
                        <a href='/'>Inicio</a>
                    </li>
                    <li className='nav-item'>
                        <a href='#about'>Acerca de mí</a>
                    </li>
                    <li className='nav-item'>
                        <a href='#projects'>Proyectos</a>
                    </li>
                </ul>
                <div className='bottom'>
                    <span className='line'></span>
                    <p>2024 &nbsp; | &nbsp; Florencia Uehara</p>
                </div>
            </div>
        </div>
    )
}

export default Footer
