var empleados = [];
const guardar = () => {
    //capturar datos
    let name = document.getElementById("nombre").value;
    let mail = document.getElementById("mail").value;
    let numero = document.getElementById("numero").value;
    let password = document.getElementById("password").value;
    //Crear json
    let persona = {};
    persona.nombre= name;
    persona.correo= mail;
    persona.num= numero;
    persona.contraseña = password;

    //guardar en empleados
    empleados.push(persona);
    alert("Guardado")
}

const listar = () =>{
    let listado = document.getElementById("listado");
    listado.innerHTML="";
    for (const emp of empleados){
        listado.innerHTML +=`<tr>
                               <td> ${emp.nombre}</td>
                               <td> ${emp.correo}</td>
                               <td> ${emp.num}</td>
                               <td> ${emp.contraseña}</td>
                            </tr>`  
    }
}



const limpiar = ()=>{
   document.getElementById("nombre").value = "";
   document.getElementById("mail").value ="";
   document.getElementById("numero").value="";
   document.getElementById("password").value="";
    //Crear json
}