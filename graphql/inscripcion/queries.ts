import {gql} from '@apollo/client'

const GET_INSCRIPCIONES= gql`
    query Inscripcions($where: InscripcionWhereInput) {
    inscripcions(where: $where) {
            proyecto {
                nombre
            }
            estudiante {
                name
                apellido
            }
    }
    }
`;

const GET_INSCRIPCIONES_DEL_LIDER= gql`
    query Inscripcions($where: InscripcionWhereInput) {
    inscripcions(where: $where) {
        id
        estado
        proyecto {
            nombre
        }
        estudiante {
            email
            name
            apellido
        }
    }
    }
`;


const GET_INSCRIPCIONES_ESTUDIANTE= gql`
    query Inscripcions($where: InscripcionWhereInput) {
    inscripcions(where: $where) {
            id
            estado
            fechaIngreso
            proyecto {
                id
                nombre
                lider{
                    name
                    apellido
                }
            }
            estudiante {
                name
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
            name
            apellido
            email
        inscripciones {
            estado
            proyecto {
                nombre
            }
        }
        }
    }
}
`;



export {GET_INSCRIPCIONES,GET_INSCRIPCIONES_ESTUDIANTE, GET_INSCRIPCION,GET_INSCRIPCIONES_DEL_LIDER};