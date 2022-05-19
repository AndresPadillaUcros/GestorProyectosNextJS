import type { AppProps } from 'next/app'
import React, { Children, useEffect, useState } from 'react'
import Layout from '../layouts/Layout'
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




const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: from([
    new HttpLink({
      uri:
        process.env.NODE_ENV === 'production'
          ? 'http://localhost:3000/api/graphql'
          : 'http://localhost:3000/api/graphql',
    })
  ])
})



function Auth({ children }:{children:any}) {
  // if `{ required: true }` is supplied, `status` can only be "loading" or "authenticated"
  const { data: session, status  } = useSession()
  if (status === 'loading') {
    return <div>Loading...</div>
  }
  if (status === 'authenticated') {
    return children
  }

  else
    return <div>You need to sign in</div>
}


type PageAuth = {
  role: string
  loading: JSX.Element
  unauthorized: string
};

export type NextPageWithAuth = NextPage & {auth: PageAuth}
type CustomAppProps = AppProps & { Component: NextPageWithAuth }

function MyApp({ Component, pageProps: { session, ...pageProps } }: CustomAppProps) {

  return (
    <ApolloProvider client={client}>
      <SessionProvider session={session}>
          {Component.auth?(
            <Auth>
              <Layout>
                <Component {...pageProps} />
              </Layout>
            </Auth>
          ):(
            <Layout>
              <Component {...pageProps} />
            </Layout>
          )}
      </SessionProvider>
    </ApolloProvider>
  )
}


export default MyApp
