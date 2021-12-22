import react from "react";
import { Link } from 'react-router-dom';

export function UsuarioExt_Notificaciones() {
    return(
        <>
          <link rel="stylesheet" href="css/UE_notificaciones.css"/>
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
                                    <a href="/UE_Notificaciones" className="nav-link active" aria-current="page"  id="headertxt">NOTIFICACIONES</a>
                                </li>
                                <img src="img/line.png" alt="Linea" height="120" id="POSICION_IMG_HEADER"/>
                                <li className="nav-item">
                                     <a className="nav-link" href="/UE_inicio" id="headertxt">USUARIO EXTERNO</a>
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
                <a class="nav-link" href="/UE_Agendar" id="headertxt">Agendar toma de<br/>muestras</a>
        </article>
        <br/>
        <article>
            <a class="nav-link" href="/UE_Resultados" id="headertxt">Ver resultados de <br/>muestras</a>        
        </article> 
        <br/> 
        <article>
            <a class="nav-link" href="UE_Notificaciones" id="headertxt">Notificaciones<br/> recibidas</a>        
        </article>
        <br/>
        <article>
            <a class="nav-link" href="/UE_Cancelar" id="headertxt">Cancelar<br/> agendamiento</a>        
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
                          <h2><strong>Notificaciones</strong></h2>

                      </div>
                      <div class="form-row">
                        <hr/>
                        <br/>
                        <table class="table">
                          <thead>
                            <tr>
                              <th> ID</th>
                              <th> FECHA</th>
                              <th> TIPO DE EXAMEN</th>
                            </tr>
                          </thead>
                          <tbody id="listado">
              
                          </tbody>
                        </table>
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