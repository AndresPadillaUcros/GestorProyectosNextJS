import {gql} from '@apollo/client'


const GET_PROYECTOS= gql`
    query Query {
    proyectos {
        id
        nombre
        estado
        fase
        lider {
            email
            nombre
            apellido
        }

    }
    }
`;








export {GET_PROYECTOS};