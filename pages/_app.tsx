import type { AppProps } from 'next/app'
import React,{useEffect,useState} from 'react'
import Layout from '../layouts/PrivateLayout.jsx'
import '../styles/style.css'
import '../styles/tabla.css'
import '../styles/icons.css'
import '../styles/components.css'
import 'react-toastify/dist/ReactToastify.css';

import {ApolloProvider} from '@apollo/react-hooks'

import {ApolloClient,HttpLink,InMemoryCache, from} from "@apollo/client";

import { UserContext } from '../context/userContext.js';

const client= new ApolloClient({
  cache:new InMemoryCache(),
  link: from([
    new HttpLink({
      uri:
        process.env.NODE_ENV === 'production'
          ?'http://localhost:3000/api/graphql'
          :'http://localhost:3000/api/graphql',
    })
  ])
})


function MyApp({ Component, pageProps }: AppProps) {

  const [userData, setUserData] = useState({})
  useEffect(() => {
    setUserData({
      id:"cl385y5470002hgdjb84f5lql",
      nombre:"Andres",
      apellido:"Padilla",
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
