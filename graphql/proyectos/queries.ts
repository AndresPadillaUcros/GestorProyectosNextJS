import {gql} from '@apollo/client'


const GET_PROYECTOS= gql`
    query Proyectos($where: ProyectoWhereInput) {
        proyectos(where: $where) {
            nombre
            presupuesto
            lider {
            email
            nombre
            apellido
            }
        }
    }
`;

const GET_PROYECTO= gql`
    query Proyecto($where: ProyectoWhereUniqueInput!) {
        proyecto(where: $where) {
            nombre
            presupuesto
            fechaInicio
            fechaFin
            estado
            fase
            objetivoGeneral
            lider {
            email
            nombre
            apellido
            }
            objetivosEspecificos {
            descripcion
            id
            }
            inscripciones {
            estado
            fechaIngreso
            estudiante {
                nombre
                apellido
                id
            }
            }
            avances {
            id
            descripcion
            }
        }
    }

`

const GET_PROYECTOS_LIDER= gql`
    query Proyectos($where: ProyectoWhereInput) {
        proyectos(where: $where) {
            id
            nombre
            objetivoGeneral
            fase
            estado
            lider {
                nombre
                apellido
            }
        }
    }
`
export {GET_PROYECTOS , GET_PROYECTO,GET_PROYECTOS_LIDER};