import f from 'fastify'
import gql from 'fastify-gql'

import { typeDefs } from './Schema/typeDefs'
import { resolvers } from './Schema/resolvers'
import { config } from './config'

const fastify = f()
fastify.register(gql, {
  schema: typeDefs,
  resolvers,
  graphiql: true
})

export function server() {
  return fastify
    .listen({
      port: config.port
    })
    .then(() => fastify)
}
