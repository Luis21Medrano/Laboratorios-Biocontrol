import react from "react";
import { Link } from 'react-router-dom';

export function UsuarioExt_inicio() {
    return(
        <>
        <link rel="stylesheet" href="css/UE_INICIO.css"/>
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
                                    <a href="/UE_inicio" className="nav-link active" aria-current="page"  id="headertxt">INICIO</a>
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
        <h2><strong>??Dudas si te di?? COVID-19?</strong></h2>
        <hr/>
        <p class="text">Con la pruba de anticupero cuantitativa 
            neutralizante SARS-COV-2 IgG (RBD Spike)<br/>
            podras conocer el virus y que cantidad
            o concentraci??n de antivirus tiene...
        </p>
        <br/>
        <br/>
        <br/>
        <h2><strong>MinSalud registra 16,03 millones de vacunas contra el COVID-19 aplicadas</strong></h2>
        <hr/>
        <p class="text">El Ministerio de Salus, en cabeza de Fernando Ruiz, anunci?? con corte a las 23:59 del 
            mi??rcoles 23 de junio de 2021, en el pa??s se han aplicado 16.038.382 dosis de la vacuna contra el
            COVID-19, de las que 356.393 se aplicar??n ayer.
        </p>
    </aside>
    <br/>
        </>
    );
}