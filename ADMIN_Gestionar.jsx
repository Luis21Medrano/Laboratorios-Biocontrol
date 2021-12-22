import react from "react";
import { Link } from 'react-router-dom';

export function ADMIN_Gestionar() {
    return(
        <>
        <link rel="stylesheet" href="css/ADMIN-UsuarioInt_inicio.css"/>
        <link rel="stylesheet" href="css/ADMIN_gestionar.css"/>
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
                                    <a href="/A_inicio" className="nav-link active" aria-current="page"  id="headertxt">INICIO</a>
                                </li>
                                <img src="img/line.png" alt="Linea" height="120" id="POSICION_IMG_HEADER"/>
                                <div class="dropdown">
                <a class="btn btn-secondary dropdown-toggle" href="/A_inicio" role="button" id="headertxto" data-bs-toggle="dropdown" aria-expanded="false">
                  VER COMO
                </a>
              
                <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink" id="headertxt">
                <li><a class="dropdown-item" href="/A_inicio">Inicio</a></li>
                  <li><a class="dropdown-item" href="/A_UI_inicio">Usuario interno</a></li>
                  <li><a class="dropdown-item" href="/A_UE_inicio">Usuario externo</a></li>
                  <li><a class="dropdown-item" href="/A_Gestionar">Gestionar usuarios <br/>internos</a></li>
                </ul>
              </div>
            </ul>
          </div>
        </div>
      </nav>
                <hr id="line"/>
                <br/>
            </header>
            <section>
        <article>
                <a class="nav-link" href="/A_UI_inicio" id="headertxt">Usuario<br/>Interno</a>
        </article>
        <br/>
        <article>
            <a class="nav-link" href="/A_UE_inicio" id="headertxt">Usuario <br/>Externo</a>        
        </article> 
        <br/> 
        <article>
            <a class="nav-link" href="/A_Gestionar" id="headertxt">Gestionar<br/> usuarios internos</a>        
        </article>                          
     </section>
     <aside>
      <main>
        <div className="main">
          <section className="signup">
              <div className="container">
                  <div className="signup-content">
                      <form method="POST" id="signup-form" className="signup-form-ag">
                            <div className="form-row">
                            <div className="form-group">
                              <label for="id_paciente">ID del empleado</label>
                          </div>
                          <div className="form-group">
                            <input type="number" className="form-input" name="id_paciente" id="POSITION_UI_FORM_INPUT"  placeholder="ID del empleado" />
                          </div>
                        </div>
                          <div className="form-row">
                              <div className="form-group">
                                  <label for="name">Nombre del empleado</label>
                              </div>
                              <div className="form-group">
                                <input type="text" className="form-input" name="name" id="POSITION_UI_FORM_INPUT" placeholder="Nombre del empleado"/>
                              </div>
                          </div>
                          <div className="form-row">
                            <div className="form-group">
                              <label for="email">Correo</label>
                          </div>
                            <div className="form-group">
                              <input type="email" className="form-input" name="email" id="POSITION_UI_FORM_INPUT" placeholder="Correo"/>
                          </div>
                        </div>
                        <div className="form-row">
                              <div className="form-group">
                                  <label for="name">Contraseña</label>
                              </div>
                              <div className="form-group">
                                <input type="password" className="form-input" name="password" id="POSITION_UI_FORM_INPUT" placeholder="Ingrese una clave para que ingrese el empleado"/>
                              </div>
                          </div>
                        <div className="form-row">
  
                          <div className="form-group">
                            <input type="submit" name="submit" id="submit" className="form-submit" value="REGISTRAR O GUARDAR" id="BU-registro" />
                        </div>
                        </div>
                      </form>
                  </div>
              </div>
          </section>
      </div>  
      </main>
  
    </aside>
    <br/>
        </>
    );
}