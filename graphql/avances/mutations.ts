import {gql} from '@apollo/client'


const CREAR_AVANCE= gql`
    mutation CreateAvance($data: AvancesCreateInput!) {
    createAvances(data: $data) {
        id
        descripcion
    }
    }
`;

const EDITAR_AVANCE= gql`
    mutation UpdateAvances($data: AvancesUpdateInput!, $where: AvancesWhereUniqueInput!) {
    updateAvances(data: $data, where: $where) {
        id
        descripcion
        observaciones
    }
    }
`;

const ELIMINAR_AVANCE= gql`
    mutation DeleteAvances($where: AvancesWhereUniqueInput!) {
        deleteAvances(where: $where) {
            id
        }
    }
`;



export { CREAR_AVANCE,EDITAR_AVANCE,ELIMINAR_AVANCE };