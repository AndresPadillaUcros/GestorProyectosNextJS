/* El front muestra lo que esta despues de los dos puntos , mientras que el back entiende lo que esta antes*/

const Enum_Rol:any = {
    Administrador: 'Administrador',
    Estudiante: 'Estudiante',
    Lider: 'Líder',
  };
  
const Enum_EstadoUsuario:any= {
    Pendiente: 'Pendiente',
    Autorizado: 'Autorizado',
    NoAutorizado: 'No autorizado',
  };
  
const Enum_EstadoProyecto:any= {
    ACTIVO: 'Activo',
    INACTIVO: 'Inactivo',
  };


const Enum_FaseProyecto:any={
    INICIADO:'Iniciado',
    DESARROLLO:'En desarrollo',
    TERMINADO:'Terminado',
    NULO:'Nulo',
}

const Enum_TipoObjetivo:any={
  GENERAL:'General',
  ESPECIFICO:'Especifico',
}

const Enum_EstadoInscripcion:any={
  ACEPTADO:'Aceptado',
  RECHAZADO:'Rechazado',
  PENDIENTE:'Pendiente',
}

  export { Enum_Rol, Enum_EstadoUsuario, Enum_EstadoProyecto , Enum_FaseProyecto,Enum_TipoObjetivo,Enum_EstadoInscripcion};