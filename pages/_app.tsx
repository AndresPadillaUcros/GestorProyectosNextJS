import type { AppProps } from 'next/app'
import Layout from '../layouts/PrivateLayout.jsx'
import '../styles/style.css'
import {ApolloProvider} from '@apollo/react-hooks'

import {ApolloClient,HttpLink,InMemoryCache, from} from "@apollo/client";


const client= new ApolloClient({
  cache:new InMemoryCache(),
  link: from([
    new HttpLink({
      uri:
        process.env.NODE_ENV === 'production'
          ?'https://vercelapp/api/graphql'
          :'https://vercelapp/api/graphql',
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
