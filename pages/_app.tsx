import type { AppProps } from 'next/app'
import Layout from '../layouts/PrivateLayout.jsx'
import '../styles/style.css'
import '../styles/tabla.css'
import {ApolloProvider} from '@apollo/react-hooks'

import {ApolloClient,HttpLink,InMemoryCache, from} from "@apollo/client";


const client= new ApolloClient({
  cache:new InMemoryCache(),
  link: from([
    new HttpLink({
      uri:
        process.env.NODE_ENV === 'production'
          ?'https://gestor-proyectos.vercel.app/api/graphql'
          :'https:/gestor-proyectos.vercel.app/api/graphql',
    })
  ])
})


function MyApp({ Component, pageProps }: AppProps) {
  return(
    <ApolloProvider client={client}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
     </ApolloProvider>
   )
}
  

export default MyApp
