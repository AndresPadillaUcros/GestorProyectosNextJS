import type { AppProps } from 'next/app'
import React,{useEffect,useState} from 'react'
import Layout from '../layouts/PrivateLayout.jsx'
import '../styles/style.css'
import '../styles/tabla.css'
import '../styles/icons.css'
import '../styles/components.css'
import {ApolloProvider} from '@apollo/react-hooks'

import {ApolloClient,HttpLink,InMemoryCache, from} from "@apollo/client";

import { UserContext } from '../context/userContext.js';

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

  const [userData, setUserData] = useState({})
  useEffect(() => {
    setUserData({
      id:"cl31ph66u0002bkdjhqbx38c3",
      email:"andres@hotmail.com"
    })
  },[])

  return(
    <ApolloProvider client={client}>
      <UserContext.Provider value={{ userData, setUserData }}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </UserContext.Provider>
    </ApolloProvider>
   )
}
  

export default MyApp
