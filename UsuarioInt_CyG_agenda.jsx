import react from "react";
import { Link } from 'react-router-dom';
export function UsuarioInt_CyG_agenda() {
    return(
        <>
                 <body>
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
                                    <a href="/UI_Agenda" className="nav-link active" aria-current="page"  id="headertxt">AGENDA</a>
                                </li>
                                <img src="img/line.png" alt="Linea" height="120" id="POSICION_IMG_HEADER"/>
                                <li className="nav-item">
                                     <a className="nav-link" href="/UI_inicio" id="headertxt">USUARIO INTERNO</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
                <hr id="line"/>
                <br/>
            </header>
            <section>
                <article>
                    <a className="nav-link" href="/UI_Examenes" id="headertxt">Crear y gestionar los<br/> tipos de exámenes</a>
                </article>
                <article>
                    <a className="nav-link" href="/UI_Agenda" id="headertxt">Crear y gestionar la <br/>agenda para la toma de muestras</a>        
                </article>   
                <article>
                    <a className="nav-link" href="/UI_ModAgenda" id="headertxt">Cancelar o modificar el <br/>agendamiento</a>        
                </article>
                <article>
                    <a className="nav-link" href="/UI_Resultados" id="headertxt">Ingresar resultados de la<br/> muestra</a>        
                </article>
                <article>
                    <a className="nav-link" href="/UI_Notificar" id="headertxt">Notificar al usuario la <br/>disponibilidad</a>        
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
                                  <label for="id_muestra">ID de la muestra</label>
                              </div>
                              <div className="form-group">
                                <input type="number" className="form-input" name="id_muestra" id="POSITION_UI_FORM_INPUT"  placeholder="ID de la muestra" />
                              </div>
                          </div>
                            <div className="form-row">
                            <div className="form-group">
                              <label for="id_paciente">ID del paciente</label>
                          </div>
                          <div className="form-group">
                            <input type="number" className="form-input" name="id_paciente" id="POSITION_UI_FORM_INPUT"  placeholder="ID del paciente" />
                          </div>
                        </div>
                          <div className="form-row">
                              <div className="form-group">
                                  <label for="name">Nombre del paciente</label>
                              </div>
                              <div className="form-group">
                                <input type="text" className="form-input" name="name" id="POSITION_UI_FORM_INPUT" placeholder="Nombre del paciente"/>
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
                              <label for="numero">Fecha</label>
                          </div>
                          <div className="form-group">
                            <input type="date" name="fecha" id="form-selecto"/>                      
                          </div>
                      </div>
                        <div className="form-row">
                          <div>
                            
                            <input type="button" className="form-submit" data-bs-toggle="modal" data-bs-target="#exampleModal" onclick="listar()" value="MOSTRAR AGENDA" id="MODAL_UI"/>
                            <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                              <div className="modal-dialog">
                                <div className="modal-content">
                                  <div className="modal-header">
                                    <h5 className="modal-title" id="exampleModalLabel">Agenda</h5>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                  </div>
                                  <div className="modal-body">
                                    <table className="table">
                                      <thead>
                                        <tr>
                                          <th> LUNES</th>
                                          <th> MARTES</th>
                                          <th> MIERCOLES</th>
                                          <th> JUEVES</th>
                                          <th> VIERNES</th>                                        
                                          </tr>
                                      </thead>
                                      <tbody id="listado">
                          
                                      </tbody>
                                    </table>
                                  </div>
                                  <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                                  </div>
                                </div>
                              </div>
                            </div> 
                          </div>
                          <div className="form-group">
                            <input type="submit" name="submit" id="submit" className="form-submit" value="REGISTRO" id="BU-registro" />
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
 
         </body>
        </>
    );
}