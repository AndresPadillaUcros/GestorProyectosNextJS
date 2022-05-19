import {gql} from '@apollo/client'

const GET_USUARIOS = gql`
    query Usuario($where: UserWhereInput) {
        users(where: $where) {
            id
            email
            name
            apellido
            identificacion
            rol
            estado
        }
    }
`;

const GET_USUARIO=gql`
    query Usuario($where: UserWhereUniqueInput!) {
    user(where: $where) {
        id
        email
        name
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
        name
        apellido
        identificacion
        correo
        rol
    }
    }
`;



export {GET_USUARIOS,GET_USUARIO,GET_ESTUDIANTES};