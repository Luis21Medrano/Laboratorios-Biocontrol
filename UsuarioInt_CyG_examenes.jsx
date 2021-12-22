import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
export function UsuarioInt_CyG_examenes() {
  const nomRef = useRef(); //document.getElemnetById("nom") ejemplo de la funcio que cumpliria en HTML
  const descripcionRef = useRef();
  const [sucess, setSucess]= useState(false);

  const guardar= () =>{
      //Obtiene lo escrito en las cajas de texto
      let listado = [];
      const nom = nomRef.current.value;
      const descrip = descripcionRef.current.value;

      const examen = {nom,descrip}
      listado = JSON.parse(localStorage.getItem("ListaProducto")) || [];
      listado.push(examen);
      localStorage.setItem("ListaProducto",JSON.stringify(listado))
      nomRef.current.value ="";
      descripcionRef.current.value ="";
      setSucess(true);
      setTimeout(() => setSucess(false), 3000)

  };
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
                                    <a href="/UI_Examenes" className="nav-link active" aria-current="page"  id="headertxt">EXAMENES</a>
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
                                <input href={nomRef} type="text" className="form-input" name="id_muestra" id="POSITION_UI_FORM_INPUT"placeholder="Nombre del examen"/>
                              </div>
                          </div>
                            <div className="form-row">
                            <div className="form-group">
                              <label for="id_paciente">Descripción</label>
                          </div>
                          <div className="form-group">
                            <input type="text" href={descripcionRef} className="form-input" name="id_paciente" id="POSITION_UI_FORM_INPUT" placeholder="Uso o descripción"/>
                          </div>
                        </div>
                        <div className="form-row">
                          <div className="form-group">
                            <input type='button' name="submit" id="BU-REGISTRO_EXAMENES" className="form-submit" value="Guardar" onClick={guardar} />
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