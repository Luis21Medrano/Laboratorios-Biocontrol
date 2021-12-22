
import react from "react";
import { Link } from 'react-router-dom';
export function ADMIN_UsuarioInt_CyG_examenes() {
    return(
        <>
        <link rel="stylesheet" href="css/ADMIN-UsuarioInt_inicio.css"/>
        <link rel="stylesheet" href="css/UI_CyG_agenda.css"/>

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
                                    <a href="/A_UI_examenes" className="nav-link active" aria-current="page"  id="headertxt">EXAMENES</a>
                                </li>
                                <img src="img/line.png" alt="Linea" height="120" id="POSICION_IMG_HEADER"/>
                                <div class="dropdown">
                <a class="btn btn-secondary dropdown-toggle" href="/A_inicio" role="button" id="headertxto" data-bs-toggle="dropdown" aria-expanded="false">
                  USUARIO INTERNO
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
                <a class="nav-link" href="/A_UI_examenes" id="headertxt">Crear y gestionar los<br/> tipos de exámenes</a>
        </article>
        <article>
            <a class="nav-link" href=" /A_UI_agenda" id="headertxt">Crear y gestionar la <br/>agenda para la toma de muestras</a>        
        </article>   
        <article>
            <a class="nav-link" href="/A_UI_Modagenda" id="headertxt">Cancelar o modificar el <br/>agendamiento</a>        
        </article>
        <article>
            <a class="nav-link" href="/A_UI_Resultados" id="headertxt">Ingresar resultados de la<br/> muestra</a>        
        </article>
        <article>
            <a class="nav-link" href="/A_UI_Notificaciones" id="headertxt">Notificar al usuario la <br/>disponibilidad</a>        
        </article>                           
     </section>
     <aside>
      <main>
        <div className="main">
          <section className="signup">
              <div className="container">
                  <div className="signup-content">
                      <form method="POST" id="signup-form" className="signup-form-ag">
                        <h2><strong>Examenes existentes</strong></h2>
                        <hr/>
                        <table className="table table-bordered border-primary">
                          <thead>
                            <tr>
                              <th scope="col">Nombre del examen</th>
                              <th scope="col">Descripción</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>Parasitologia</td>
                              <td>...</td>
                              
                            </tr>
                            <tr>
                              <td>Microbiologia</td>
                              <td>...</td>
                            </tr>
                            <tr>
                              <td>Toxicologia</td>
                              <td>...</td>
                            </tr>
                            <tr>
                              <td>Hematologia</td>
                              <td>...</td>
                            </tr>
                            <tr>
                              <td>Inmunologia</td>
                              <td>...</td>
                            </tr>
                            <tr>
                              <td>Inmunologia especial</td>
                              <td>...</td>
                            </tr>
                          </tbody>
                        </table>
                        
                          <div className="form-row">
                              <div className="form-group">
                                  <label for="id_muestra">Nombre del examen</label>
                              </div>
                              <div className="form-group">
                                <input type="number" className="form-input" name="id_muestra" id="POSITION_UI_FORM_INPUT"placeholder="ID de la muestra"/>
                              </div>
                          </div>
                            <div className="form-row">
                            <div className="form-group">
                              <label for="id_paciente">Descripción</label>
                          </div>
                          <div className="form-group">
                            <input type="number" className="form-input" name="id_paciente" id="POSITION_UI_FORM_INPUT" placeholder="ID del paciente"/>
                          </div>
                        </div>
                        <div className="form-row">
                          <div className="form-group">
                            <input type="submit" name="submit" id="BU-REGISTRO_EXAMENES" className="form-submit" value="Guardar"/>
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