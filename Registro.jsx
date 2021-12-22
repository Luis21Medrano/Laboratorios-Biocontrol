import React from "react";
import { Link } from 'react-router-dom';
export function Registro() {

    return(
        <>
        <body>
            <header>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <div className="container-fluid">
                        <Link className="navbar-brand" to="/"><img src="img/logo.jpg" className="img-fluid" alt="LOGO"/></Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="POSICION_DIV_HEADER">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0" id="headertxt">
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="#" id="headertxt">INCIO</a>
                                </li>
                                <img src="img/line.png" alt="Linea" height="120" id="POSICION_IMG_HEADER"/>
                                <li className="nav-item">
                                     <a className="nav-link" href="#" id="headertxt">REGISTRO</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
                <hr id="line"/>
                <br/>
            </header>
            {/* <!--CUERPO --> */}
            <main>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <div className="container-fluid" id="register" >
                        <h1 id="title">REGISTRO</h1>
                        <div className="collapse navbar-collapse" id="POSITION_TITLE-TEXT">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0" id="headertxt">
                                <li className="nav-item">
                                    <p>¡Únete, crea tu cuenta y <br/>
                                    obtén el mejor servicio!</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
                <br/>
                <br/>
                <div className="main">
        <section className="signup">
            <div className="container">
                <div className="signup-content">
                    <form method="POST" id="signup-form" className="signup-form">
                        <div className="form-row">
                            <div className="form-group">
                                <label for="first_name">Nombre</label>
                                <input type="text" className="form-input" name="first_name" id="first_name" placeholder="Nombre"/>
                            </div>
                            <div className="form-group">
                                <label for="last_name">Apellidos</label>
                                <input type="text" className="form-input" name="last_name" id="last_name" placeholder="Apellido" />
                            </div>
                        </div>
                        <div className="form-row">
                          <div className="form-group form-icon">
                            <label for="birth_date">Fecha de nacimiento</label>
                            <input type="text" className="form-input" name="birth_date" id="birth_date" placeholder="MM-DD-AAAA" />
                        </div>
                            <div className="form-radio">
                                <label for="gender">Genero</label>
                                <div className="form-flex">
                                    <input type="radio" name="gender" value="male" id="male" checked="checked" />
                                    <label for="male">Masculino</label>
    
                                    <input type="radio" name="gender" value="female" id="female" />
                                    <label for="female">Femenino</label>
                                </div>
                            </div>
                        </div>
                        <div className="form-row">
                          <div className="form-group">
                            <label for="email">Correo</label>
                            <input type="email" className="form-input" name="email" id="email" placeholder="Correo"/>
                        </div>
                          <div className="form-group">
                            <label for="phone_number">Número de telefono</label>
                            <input type="number" className="form-input" name="phone_number" id="phone_number" placeholder="Número de telefono"/>                            
                        </div>
                      </div>
                        <div className="form-row">
                            <div className="form-group">
                                <label for="password">Contraseña</label>
                                <input type="password" className="form-input" name="password" id="password" placeholder="Contraseña"/>
                            </div>
                            <div className="form-group">
                                <label for="re_password">Repetir contraseña</label>
                                <input type="password" className="form-input" name="re_password" id="re_password" placeholder="Repetir contraseña"/>
                            </div>
                        </div>
                        <div className="form-group">
                            <input type="submit" name="submit" id="submit" className="form-submit" value="REGISTRO"/>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    </div> 
            </main>
           </body>

        </>
        

    );
    
}