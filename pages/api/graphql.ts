import 'reflect-metadata'
import 'ts-tiny-invariant'
import { buildSchema } from 'type-graphql'
import { resolvers } from '../../prisma/generated/type-graphql'
import Cors from 'micro-cors'
import { ApolloServer } from 'apollo-server-micro'
import {PrismaClient} from '@prisma/client'
import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from '../../config/prisma'



const cors = Cors({
    allowMethods: ['POST','GET','OPTIONS','HEAD']
})

interface Context{
    prisma:PrismaClient
}


const functionHandler= async(req:NextApiRequest,res:NextApiResponse)=>{
    const schema =await buildSchema({
        resolvers:resolvers,
        validate:false
    })
    
    const apolloServer = new ApolloServer({
        
        context:():Context => ({prisma}),
        schema:schema,
        introspection:true
    })
    
    const startServer = apolloServer.start()
    await startServer
    
    return apolloServer.createHandler({
        path:'/api/graphql'
    })(req,res)
    
}

export default cors((req:any,res:any)  => {
    if(req.method === 'OPTIONS'){
        res.end()
        return false
    }
    return functionHandler(req,res)
})


export const config={
    api:{
        bodyParser:false
    }
}