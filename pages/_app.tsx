import type { AppProps } from 'next/app'
import React, { Children, useEffect, useState } from 'react'
import Layout from 'layouts/Layout'
import PrivateLayout from 'layouts/PrivateLayout'

import '../styles/style.css'
import '../styles/tabla.css'
import '../styles/icons.css'
import '../styles/components.css'
import 'react-toastify/dist/ReactToastify.css';

import { ApolloProvider } from '@apollo/react-hooks'

import { ApolloClient, HttpLink, InMemoryCache, from } from "@apollo/client";

import { UserContext } from '../context/userContext.js';
import { SessionProvider } from "next-auth/react"

import { useSession } from "next-auth/react"
import type { NextComponentType  } from 'next'
import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import Loader from 'components/ClipLoader'


const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: from([
    new HttpLink({
      uri:
        process.env.NODE_ENV === 'production'
          ? 'https://gestor-proyectos.vercel.app/api/graphql'
          : 'https://gestor-proyectos.vercel.app/api/graphql',
    })
  ])
})



function Auth({ children }:{children:any}) {
  // if `{ required: true }` is supplied, `status` can only be "loading" or "authenticated"

  const router=useRouter()
  const { data: session, status  } = useSession()

  if (status === 'loading') {
    return (
      <div> 
        <Loader /> 
      </div>
    )
  }
  if (status === 'authenticated') {
    return children
  }
  else{
    router.push('/')
  }
}


type PageAuth = {
  role: string
  loading: JSX.Element
  unauthorized: string
};

export type NextPageWithAuth = NextPage & {auth: boolean}
type CustomAppProps = AppProps & { Component: NextPageWithAuth }

function MyApp({ Component, pageProps: { session, ...pageProps } }: CustomAppProps) {

  const [userData, setUserData] = useState({})

  return (
    <ApolloProvider client={client}>
      <UserContext.Provider value={{ userData, setUserData }}>
        <SessionProvider session={session}>
            {Component.auth?(
              <Auth>
                <PrivateLayout>
                  <Component {...pageProps} />
                </PrivateLayout>
              </Auth>
            ):(
              <Layout>
                <Component {...pageProps} />
              </Layout>
            )}
        </SessionProvider>
      </UserContext.Provider>
    </ApolloProvider>
  )
}


export default MyApp
