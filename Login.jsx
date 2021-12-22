import react from "react";
import { Link } from 'react-router-dom';
export function Login() {
    return(
        <>
        <link rel="icon" type="image/png" href="images/icons/favicon.ico"/>
        <link rel="stylesheet" type="text/css" href="vendor/bootstrap/css/bootstrap.min.css"/>
        <link rel="stylesheet" type="text/css" href="fonts/font-awesome-4.7.0/css/font-awesome.min.css"/>
        <link rel="stylesheet" type="text/css" href="fonts/Linearicons-Free-v1.0.0/icon-font.min.css"/>
        <link rel="stylesheet" type="text/css" href="vendor/animate/animate.css"/>	
        <link rel="stylesheet" type="text/css" href="vendor/css-hamburgers/hamburgers.min.css"/>
        <link rel="stylesheet" type="text/css" href="vendor/select2/select2.min.css"/>
        <link rel="stylesheet" type="text/css" href="css/util.css"/>
        <link rel="stylesheet" type="text/css" href="css/main.css"/>
        <link rel="stylesheet" href="css/bootstrap.min.css"/>
        <link rel="stylesheet" href="css/registro.css"/>
        <link rel="stylesheet" href="css/UI_CyG_agenda.css"/>
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
                                    <a href="/login" className="nav-link active" aria-current="page"  id="headertxt">INGRESAR</a>
                                </li>
                                <img src="img/line.png" alt="Linea" height="120" id="POSICION_IMG_HEADER"/>
                                <li className="nav-item">
                                     <a className="nav-link" href="/UI_inicio" id="headertxt">INICIO</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
                <hr id="line"/>
                <br/>
            </header>
      <hr/>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <h1 id="title">INGRESO</h1>
          <div class="collapse navbar-collapse">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0" id = "parrafo">
              <li class="nav-item">
                <p id="parrafo">¡Recuerda que ingresando puedes <br/>
                  obtener todos tus exámenes!
                </p>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <hr/>
      <div class="limiter">
        <div class="container-login100">
          <div class="wrap-login100 p-l-50 p-r-50 p-t-77 p-b-30">
            <form class="login100-form validate-form">

              <div class="wrap-input100 validate-input m-b-16" data-validate = "Digite correctamente su Identificación">
                <input class="input100" type="text" name="id" placeholder="Identificación"/>
                <span class="focus-input100"></span>
                <span class="symbol-input100">
                  <span class="lnr lnr-envelope"></span>
                </span>
              </div>
              <div class="wrap-input100 validate-input m-b-16" data-validate = "Digite su correo electrónico">
                <input class="input100" type="text" name="email" placeholder="Correo Electronico"/>
                <span class="focus-input100"></span>
                <span class="symbol-input100">
                  <span class="lnr lnr-envelope"></span>
                </span>
              </div>
    
              <div class="wrap-input100 validate-input m-b-16" data-validate = "La contraseña es requerida">
                <input class="input100" type="password" name="pass" placeholder="Contraseña"/>
                <span class="focus-input100"></span>
                <span class="symbol-input100">
                  <span class="lnr lnr-lock"></span>
                </span>
              </div>
    
              <div class="contact100-form-checkbox m-l-4">
                <input class="input-checkbox100" id="ckb1" type="checkbox" name="remember-me"/>
                <label class="label-checkbox100" for="ckb1">
                  Recuerdame
                </label>
              </div>
              
              <div class="container-login100-form-btn p-t-25">
                <button class="login100-form-btn">
                  Ingresar
                </button>
              </div>

    
              <div class="text-center w-full p-t-115">
                <span class="txt1">
                  Aún no te has resgistrado?
                </span>
    
                <a class="txt1 bo1 hov1" href="/registro">
                  Hazlo aquí							
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
      </body>
        </>
    );
}
