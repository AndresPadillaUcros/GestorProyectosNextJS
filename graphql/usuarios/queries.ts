import {gql} from '@apollo/client'

const GET_USUARIOS = gql`
    query Usuario($where: UsuarioWhereInput) {
        usuarios(where: $where) {
            id
            email
            nombre
            apellido
            identificacion
            rol
            estado
        }
    }
`;

const GET_USUARIO=gql`
    query Usuario($where: UsuarioWhereUniqueInput!) {
    usuario(where: $where) {
        id
        email
        nombre
        apellido
        identificacion
        rol
        estado
    }
    }
`;

const GET_ESTUDIANTES=gql`
    query BuscarEstudiantes($rol: Enum_Rol!){
    Estudiantes(rol: $rol) {
        nombre
        apellido
        identificacion
        correo
        rol
    }
    }
`;



export {GET_USUARIOS,GET_USUARIO,GET_ESTUDIANTES};