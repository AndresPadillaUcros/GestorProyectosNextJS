
import {gql} from '@apollo/client'

const GET_AVANCES=gql`
    query FindUniqueAvances($where: AvancesWhereInput) {
    findManyAvances(where: $where) {
        id
        descripcion
        observaciones
        fecha
        creadoPor {
            nombre
            apellido
        }
    }
    }
`;



export {GET_AVANCES};