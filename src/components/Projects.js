import React from 'react';
import './Projects.css';

const Projects = () => {
    return (
        <div className='projects' id='projects'>
            <div className='container'>
                <h2>Proyectos</h2>
                <span className='line'></span>
                <div className='content'>
                    <div className='card'>
                        <div className='card-content'>
                            <p><span>Portfolio</span></p>
                            <p>Este portfolio ha sido diseñado y codificado por mí, poniendo en práctica lo aprendido.</p>
                        </div>
                        <div className='button-container'>
                            <button className='button'><a href="https://floueharadev.netlify.app/" target="_blank" rel="noopener noreferrer"><i className="bi bi-window"></i>&nbsp; Ir al sitio</a></button>
                        </div>
                    </div>
                    <div className='card'>
                        <div className='card-content'>
                            <p><span>Control de Gastos </span></p>
                            <p>Proyecto de JS que formó parte del segundo desafío de un evento de programación.</p>
                        </div>
                        <div className='button-container'>
                            <button className='button'><a href="https://expense-control-flo.netlify.app/" target="_blank" rel="noopener noreferrer"><i className="bi bi-window"></i>&nbsp; Ir al sitio</a></button>
                        </div>
                    </div>
                    <div className='card'>
                        <div className='card-content'>
                            <p><span>Generador de Contraseñas</span></p>
                            <p>Proyecto de JS que formó parte del primer desafío de un evento de programación.</p>
                        </div>
                        <div className='button-container'>
                            <button className='button'><a href="https://mypasswordgenerator-flo.netlify.app" target="_blank" rel="noopener noreferrer"><i className="bi bi-window"></i>&nbsp; Ir al sitio</a></button>
                        </div>
                    </div>
                    <div className='card'>
                        <div className='card-content'>
                            <p><span>Sitio Bienestar</span></p>
                            <p>Sitio ficticio realizado en el curso para poner en práctica el uso de ReactJS, uso de API rest, y aplicar lo aprendido en Frontend.</p>
                        </div>
                        <div className='button-container'>
                            <button className='button'><a href="https://masajes-react.netlify.app" target="_blank" rel="noopener noreferrer"><i className="bi bi-window"></i>&nbsp; Ir al sitio</a></button>
                        </div>
                    </div>
                    <div className='card'>
                        <div className='card-content'>
                            <p><span>Sitio Pastelería</span></p>
                            <p>Sitio ficticio realizado en el curso para finalizar desarrollo Frontend, con el uso de HTML, JavaScript, CSS y Bootstrap.</p>
                        </div>
                        <div className='button-container'>
                            <button className='button'><a href="https://pasteleria-front.netlify.app" target="_blank" rel="noopener noreferrer"><i className="bi bi-window"></i>&nbsp; Ir al sitio</a></button>
                        </div>
                    </div>
                    <div className='card'>
                        <div className='card-content'>
                            <p><span>Sitio Prueba</span></p>
                            <p>Sitio base realizado en Qwik, para tener un primer acercamiento con este framework.</p>
                        </div>
                        <div className='button-container'>
                            <button className='button'><a href="https://sitio-pruebaqwik.netlify.app" target="_blank" rel="noopener noreferrer"><i className="bi bi-window"></i>&nbsp; Ir al sitio</a></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects;
