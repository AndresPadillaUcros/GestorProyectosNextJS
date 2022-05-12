import {gql} from '@apollo/client'

const CREAR_PROYECTO = gql`
    mutation CreateProyecto($data: ProyectoCreateInput!) {
        createProyecto(
            data: $data
            ) {
                nombre
                presupuesto
        }
    }
`;

const EDITAR_PROYECTO = gql`
    mutation UpdateProyecto($data: ProyectoUpdateInput!,$where: ProyectoWhereUniqueInput!) {
        updateProyecto(
            data: $data,
            where: $where
            ) {
                nombre
                estado
    }
    }
`;

const CREAR_OBJETIVO = gql`
    mutation CreateObjetivosEspecificos($data: ObjetivosEspecificosCreateInput!) {
    createObjetivosEspecificos(
        data: $data
        ) {
        id
    }
    }
`;

const EDITAR_OBJETIVO = gql`
    mutation UpdateObjetivosEspecificos($data: ObjetivosEspecificosUpdateInput!, $where: ObjetivosEspecificosWhereUniqueInput!) {
    updateObjetivosEspecificos(
        data: $data, 
        where: $where
        ) {
            id
    }
}
`;


const ELIMINAR_OBJETIVO = gql`
    mutation DeleteObjetivosEspecificos($where: ObjetivosEspecificosWhereUniqueInput!) {
        deleteObjetivosEspecificos(
            where: $where
            ) {
                id
        }
    }
`;



export { EDITAR_PROYECTO,CREAR_PROYECTO,CREAR_OBJETIVO,EDITAR_OBJETIVO,ELIMINAR_OBJETIVO  };