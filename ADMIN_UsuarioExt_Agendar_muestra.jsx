import react from "react";
import { Link } from 'react-router-dom';


export function ADMIN_UsuarioExt_Agendar_muestra() {
    return(
        <>
        <link rel="stylesheet" href="css/ADMIN-UsuarioInt_inicio.css"/>
        <link rel="stylesheet" href="css/UE_Agendar.css"/>

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
                                    <a href="/A_UE_Agenda" className="nav-link active" aria-current="page"  id="headertxt">AGENDA</a>
                                </li>
                                <img src="img/line.png" alt="Linea" height="120" id="POSICION_IMG_HEADER"/>
                                <div class="dropdown">
                <a class="btn btn-secondary dropdown-toggle" href="/A_inicio" role="button" id="headertxto" data-bs-toggle="dropdown" aria-expanded="false">
                  USUARIO EXTERNO
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
                <a class="nav-link" href="/A_UE_Agenda" id="headertxt">Agendar toma de<br/>muestras</a>
        </article>
        <br/>
        <article>
            <a class="nav-link" href="/A_UE_Resultados" id="headertxt">Ver resultados de <br/>muestras</a>        
        </article> 
        <br/> 
        <article>
            <a class="nav-link" href="/A_UE_Notificaciones" id="headertxt">Notificaciones<br/> recibidas</a>        
        </article>
        <br/>
        <article>
            <a class="nav-link" href="/A_UE_Cancelar" id="headertxt">Cancelar<br/> agendamiento</a>        
        </article>                           
     </section>
     <aside>
      <main>
        <div class="main">
          <section class="signup">
              <div class="container">
                  <div class="signup-content">
                      <form method="POST" id="signup-form" class="signup-form-ag">
                            <div class="form-row">
                            <div class="form-group">
                              <label for="id_paciente">ID del paciente</label>
                          </div>
                          <div class="form-group">
                            <input type="number" class="form-input" name="id_paciente" id="POSITION_UI_FORM_INPUT" placeholder="ID del paciente"/>
                          </div>
                        </div>
                          <div class="form-row">
                              <div class="form-group">
                                  <label for="name">Nombre del paciente</label>
                              </div>
                              <div class="form-group">
                                <input type="text" class="form-input" name="name" id="POSITION_UI_FORM_INPUT" placeholder="Nombre del paciente" />
                              </div>
                          </div>
                          <div class="form-row">
                            <div class="form-group">
                              <label for="email">Correo</label>
                          </div>
                            <div class="form-group">
                              <input type="email" class="form-input" name="email" id="POSITION_UI_FORM_INPUT" placeholder="Correo"/>
                          </div>
                        </div>
                        <div class="form-row">
                          <div class="form-group">
                              <label for="numero">Numero</label>
                          </div>
                          <div class="form-group">
                            <input type="number" class="form-input" name="numero" id="POSITION_UI_FORM_INPUT" placeholder="Numero de teléfono"/>
                          </div>
                      </div>
                      <div class="form-row">
                        <div class="form-group">
                            <label for="numero">Tipo de examen</label>
                        </div>
                        <div class="form-group">
                          <select class="form-select" aria-label="Default select example" id="form-selecto2">
                            <option selected>Selecione el tipo de examen</option>
                            <option value="1">Parasitologia</option>
                            <option value="2">Microbiologia</option>
                            <option value="3">Toxicologia</option>
                            <option value="4">Hematologia</option>
                            <option value="5">Inmunologia</option>
                            <option value="6">Inmunologia especial</option>                            
                          </select>
                      </div>
                    </div>
                    <div class="form-row">
                      <div class="form-group">
                          <label for="numero">Fecha</label>
                      </div>
                      <div class="form-group">
                        <input type="date" name="fecha" id="form-selecto2"/>                      
                      </div>
                  </div>
                        <div class="form-row">
                          <div class="form-group">
                            <input type="submit" name="submit" id="BU-registro" class="form-submit" value="ENVIAR SOLICITUD"  />
                        </div>
                        </div>
                      </form>
                  </div>
              </div>
          </section>
      </div>  
      </main>
  
    </aside>
        </>
    );
}