import './App.css';
import { Registro } from './componentes/Registro';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { UsuarioInt_inicio } from './componentes/UsuarioInt_inicio.';
import { Inicio } from './componentes/Inicio';
import { UsuarioInt_CyG_agenda } from './componentes/UsuarioInt_CyG_agenda';
import { UsuarioInt_CyG_examenes } from './componentes/UsuarioInt_CyG_examenes';
import { UsuarioInt_CyMod_agenda } from './componentes/UsuarioInt_CyMod_agenda';
import { UsuarioInt_ingreso_resultados } from './componentes/UsuarioInt_ingreso_resultados';
import { UsuarioIntNotificar } from './componentes/UsuarioIntNotificar';
import { Login } from './componentes/Login';
import { UsuarioExt_inicio } from './componentes/UsuarioExt_inicio';
import { UsuarioExt_Agendar_muestra } from './componentes/UsuarioExt_Agendar_muestra';
import { UsuarioExt_Notificaciones } from './componentes/UsuarioExt_Notificaciones';
import { UsuarioExt_Resultados } from './componentes/UsuarioExt_Resultados';
import { UsuarioExt_Cancelar } from './componentes/UsuarioExt_Cancelar';
import { Admin_inicio } from './componentes/Admin_inicio';
import { ADMIN_UsuarioInt_inicio } from './componentes/ADMIN_UsuarioInt_inicio';
import { ADMIN_UsuarioInt_CyG_agenda } from './componentes/ADMIN_UsuarioInt_CyG_agenda';
import { ADMIN_UsuarioInt_CyG_examenes } from './componentes/ADMIN_UsuarioInt_CyG_examenes';
import { ADMIN_UsuarioInt_CyMod_agenda } from './componentes/ADMIN_UsuarioInt_CyMod_agenda';
import { ADMIN_UsuarioInt_ingreso_resultados } from './componentes/ADMIN_UsuarioInt_ingreso_resultados';
import { ADMIN_UsuarioInt_Notificar } from './componentes/ADMIN_UsuarioInt_Notificar';
import { ADMIN_UsuarioExt_inicio } from './componentes/ADMIN_UsuarioExt_inicio';
import { ADMIN_UsuarioExt_Agendar_muestra } from './componentes/ADMIN_UsuarioExt_Agendar_muestra';
import { ADMIN_UsuarioExt_Resultados } from './componentes/ADMIN_UsuarioExt_Resultados.jsx';
import { ADMIN_UsuarioExt_Notificaciones } from './componentes/ADMIN_UsuarioExt_Notificaciones';
import { ADMIN_UsuarioExt_Cancelar } from './componentes/ADMIN_UsuarioExt_Cancelar';
import { ADMIN_Gestionar } from './componentes/ADMIN_Gestionar';





function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Inicio/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/registro" element={<Registro/>} />
      <Route path="/UI_inicio" element={<UsuarioInt_inicio/>} />
      <Route path="/UI_Agenda" element={<UsuarioInt_CyG_agenda/>}/>
      <Route path="/UI_Examenes" element={<UsuarioInt_CyG_examenes/>}/>
      <Route path="/UI_ModAgenda" element={<UsuarioInt_CyMod_agenda/>}/>
      <Route path="/UI_Resultados" element={<UsuarioInt_ingreso_resultados/>}/>
      <Route path="/UI_Notificar" element={<UsuarioIntNotificar/>}/>
      //
      //
      <Route path="/UE_inicio" element={<UsuarioExt_inicio/>}/>
      <Route path="/UE_Agendar" element={<UsuarioExt_Agendar_muestra/>}/>
      <Route path="/UE_Notificaciones" element={<UsuarioExt_Notificaciones/>}/>
      <Route path="/UE_Resultados" element={<UsuarioExt_Resultados/>}/>
      <Route path="/UE_Cancelar" element={<UsuarioExt_Cancelar/>}/>
      //
      //
      <Route path="/A_inicio" element={<Admin_inicio/>}/>
      //
      <Route path="A_UI_inicio" element={<ADMIN_UsuarioInt_inicio/>}/>
      <Route path="/A_UI_agenda" element={<ADMIN_UsuarioInt_CyG_agenda/>}/>
      <Route path="/A_UI_examenes" element={<ADMIN_UsuarioInt_CyG_examenes/>}/>
      <Route path="/A_UI_Modagenda" element={<ADMIN_UsuarioInt_CyMod_agenda/>}/>
      <Route path="/A_UI_Resultados" element={<ADMIN_UsuarioInt_ingreso_resultados/>}/>
      <Route path="/A_UI_Notificaciones" element={<ADMIN_UsuarioInt_Notificar/>}/>
      //
      <Route path="/A_UE_inicio" element={<ADMIN_UsuarioExt_inicio/>}/>
      <Route path="/A_UE_Agenda" element={<ADMIN_UsuarioExt_Agendar_muestra/>}/>
      <Route path="/A_UE_Resultados" element={<ADMIN_UsuarioExt_Resultados/>}/>
      <Route path="/A_UE_Notificaciones" element={<ADMIN_UsuarioExt_Notificaciones/>}/>
      <Route path="/A_UE_Cancelar" element={<ADMIN_UsuarioExt_Cancelar/>}/>
      //
      <Route path="/A_Gestionar" element={<ADMIN_Gestionar/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
