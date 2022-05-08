const Enum_Rol : any = {
    ADMINISTRADOR: 'Administrador',
    ESTUDIANTE: 'Estudiante',
    LIDER: 'Líder',
  };
  
const Enum_EstadoUsuario: any = {
    PENDIENTE: 'Pendiente',
    AUTORIZADO: 'Autorizado',
    NO_AUTORIZADO: 'No autorizado',
  };
  
const Enum_EstadoProyecto: any = {
    ACTIVO: 'Activo',
    INACTIVO: 'Inactivo',
  };


const Enum_FaseProyecto: any={
    INICIADO:'Iniciado',
    DESARROLLO:'En desarrollo',
    TERMINADO:'Terminado',
    NULO:'Nulo',
}

const Enum_TipoObjetivo={
  GENERAL:'General',
  ESPECIFICO:'Especifico',
}

const Enum_EstadoInscripcion={
  ACEPTADO:'Aceptado',
  RECHAZADO:'Rechazado',
  PENDIENTE:'Pendiente',
}

  export { Enum_Rol, Enum_EstadoUsuario, Enum_EstadoProyecto , Enum_FaseProyecto,Enum_TipoObjetivo,Enum_EstadoInscripcion};