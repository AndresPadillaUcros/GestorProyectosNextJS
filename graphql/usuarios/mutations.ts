import {gql} from '@apollo/client'

const EDITAR_USUARIO = gql`
  mutation UpdateUser(
    $where: UserWhereUniqueInput!, 
    $data: UserUpdateInput!
    ) {
    updateUser(
      where: $where, 
      data: $data
      ) {
      id
    }
  }
`;

const ELIMINAR_USUARIO = gql`
  mutation EliminarUsuario(
    $id: String, 
    $correo: String
    ) {
    eliminarUsuario(
      _id: $id, 
      correo: $correo
      ) {
      _id
      nombre
      apellido
      correo
      estado
      identificacion
      rol
    }
  }
`;

const CREAR_USUARIO = gql`
    mutation CreateUsuario(
    $data: UserCreateInput!
    ) {
    createUser(
        data: $data
        ) {
        id
        email
        nombre
    }
    }
`;




export { EDITAR_USUARIO ,ELIMINAR_USUARIO,CREAR_USUARIO};


/*  deben ir los campos que se van actualizar  la base de datos en las ultimas llavesen */