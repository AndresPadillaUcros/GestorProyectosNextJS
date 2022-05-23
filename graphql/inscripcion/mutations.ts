import {gql} from '@apollo/client'


const CREAR_INSCRIPCION= gql`
    mutation CreateInscripcion(
    $data: InscripcionCreateInput!
    ) {
        createInscripcion(
            data: $data
                ) {
                id
                estado
    }
}
`;

const APROBAR_INSCRIPCION= gql`
    mutation UpdateInscripcion(
        $data: InscripcionUpdateInput!, 
        $where: InscripcionWhereUniqueInput!
        ) {
            updateInscripcion(
                data: $data, 
                where: $where
                ) {
                    id
                    estado
    }
    }
`;


const ELIMINAR_INSCRIPCION= gql`
mutation DeleteInscripcion($where: InscripcionWhereUniqueInput!) {
    deleteInscripcion(where: $where) {
      id
      estado
    }
  }
`;




export { CREAR_INSCRIPCION,APROBAR_INSCRIPCION,ELIMINAR_INSCRIPCION };