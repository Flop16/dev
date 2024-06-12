import React from 'react';
import './Contact.css';

const Contact = () => {
    return (
        <div className='contact' id='contact'>
            <div className='container'>
                <h2>Contacto</h2>
                <span className='line'></span>
                <p>Me pueden encontrar por aquí:</p>
                
                <div className='content'>
                    <div className='buttons-container'>
                        <button className='button'><a href="https://www.linkedin.com/in/florenciauehara/" target="_blank" rel="noopener noreferrer"><i className="bi bi-linkedin"></i>&nbsp; LinkedIn</a></button>
                    </div>
                    <div className='buttons-container'>
                        <button className='button'><a href="https://github.com/Flop16" target="_blank" rel="noopener noreferrer"><i className="bi bi-github"></i>&nbsp; GitHub</a></button>
                    </div>
                    <div className='buttons-container'>
                        <button className='button'><a href="mailto:flouehara@gmail.com" target="_blank" rel="noopener noreferrer"><i className="bi bi-envelope-fill"></i>&nbsp; ¡Escríbeme!</a></button>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Contact;


