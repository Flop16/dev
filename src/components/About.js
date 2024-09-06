import React from 'react'
import './About.css'
import profilePicture from './images/profilephoto.png';

const About = () => {
    return (
        <div className='about' id='about'>
            <div className='container'>
                <div className='col-2'>
                    <h2>Acerca de mí</h2>
                    <span className='line'></span>
                    <img src={profilePicture} alt='Profile' className='profile-picture' />
                    <p>Soy Florencia Uehara, una nueva desarrolladora frontend con ganas de crear experiencias web increíbles. Anteriormente estuve en laboratorios relacionados con la química y microbiología, pero decidí que era momento de entrar al mundo de la programación que tanto me daba curiosidad, ¡y la verdad es que me viene gustando mucho!</p>
                    <p>Cuento con certificado del curso de Desarrollo Frontend, en donde aprendí <b>HTML</b>, <b>CSS</b>, <b>Bootstrap</b>, <b>JavaScript</b>. Además, cuento con certificados en <b>ReactJS</b>, Bases de datos y <b>SQL</b> con PostgreSQL, y <b>Python</b>, mientras realizo el curso del Backend, desarrollando con <b>Django</b>. También tengo conocimiento básico del framework <b>Qwik</b>.</p>
                </div>
            </div>
        </div>
    )
}

export default About
