/* El front muestra lo que esta despues de los dos puntos , mientras que el back entiende lo que esta antes*/

const Enum_Rol:any = {
    Administrador: 'Administrador',
    Estudiante: 'Estudiante',
    Lider: 'Líder',
  };
  
const Enum_EstadoUser:any= {
    Pendiente: 'Pendiente',
    Autorizado: 'Autorizado',
    NoAutorizado: 'No autorizado',
  };
  
const Enum_EstadoProyecto:any= {
    Activo: 'Activo',
    Inactivo: 'Inactivo',
  };


const Enum_FaseProyecto:any={
    Iniciado:'Iniciado',
    Desarrollo:'En desarrollo',
    Terminado:'Terminado',
}

const Enum_EstadoInscripcion:any={
  Aceptado:'Aceptado',
  Rechazado:'Rechazado',
  Pendiente:'Pendiente',
}

  export { Enum_Rol, Enum_EstadoUser, Enum_EstadoProyecto , Enum_FaseProyecto,Enum_EstadoInscripcion};