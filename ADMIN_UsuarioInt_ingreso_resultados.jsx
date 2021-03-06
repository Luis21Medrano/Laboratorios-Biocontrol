import react from "react";
import { Link } from 'react-router-dom';

export function ADMIN_UsuarioInt_ingreso_resultados() {
    return(
        <>
        <link rel="stylesheet" href="css/ADMIN-UsuarioInt_inicio.css"/>
        <link rel="stylesheet" href="css/UI_ingreso_resultados.css"/>

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
                                    <a href="/A_UI_Resultados" className="nav-link active" aria-current="page"  id="headertxt">RESULTADOS</a>
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
                <a class="nav-link" href="/A_UI_examenes" id="headertxt">Crear y gestionar los<br/> tipos de ex??menes</a>
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
                    <div class="main">
                        <section class="signup">
                            <div class="container">
                                <div class="signup-content">
                                    <form method="POST" id="signup-form" class="signup-form-ag">
                                        <div class="form-row">
                                            <div class="form-group">
                                                <label for="id_muestra">ID de la muestra</label>
                                            </div>
                                            <div class="form-group">
                                                <input type="number" class="form-input" name="id_muestra" id="POSITION_UI_FORM_INPUT" placeholder="ID de la muestra"/>
                                            </div>
                                        </div>
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
                                                <label for="resultado">Resultado obtenido</label>
                                            </div>
                                            <div class="form-group">
                                                <input type="text" class="form-input" name="resultado" id="POSITION_UI_FORM_INPUT" placeholder="Resultado" />
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <input type="submit" name="submit" id="BU-registro"class="form-submit" value="GUARDAR" />
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