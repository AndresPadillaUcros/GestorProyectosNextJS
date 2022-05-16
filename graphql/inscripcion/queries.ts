import {gql} from '@apollo/client'

const GET_INSCRIPCIONES= gql`
    query Inscripcions($where: InscripcionWhereInput) {
    inscripcions(where: $where) {
            proyecto {
                nombre
            }
            estudiante {
                nombre
                apellido
            }
    }
    }
`;

const GET_INSCRIPCIONES_ESTUDIANTE= gql`
    query Inscripcions($where: InscripcionWhereInput) {
    inscripcions(where: $where) {
            proyecto {
                nombre
            }
            estudiante {
                nombre
                apellido
            }
    }
    }
`;

const GET_INSCRIPCION= gql`
    query Inscripcion($where: InscripcionWhereUniqueInput!) {
    inscripcion(where: $where) {
        estado
        estudiante {
            nombre
            apellido
            email
        }
    }
    }
`;



export {GET_INSCRIPCIONES,GET_INSCRIPCIONES_ESTUDIANTE, GET_INSCRIPCION};