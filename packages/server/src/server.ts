import f from 'fastify'
import gql from 'fastify-gql'

import { typeDefs } from './Schema/typeDefs'
import { resolvers } from './Schema/resolvers'
import { config } from './config'

export function startServer(domain) {
  const fastify = f()
  fastify.register(gql, {
    schema: typeDefs,
    resolvers,
    context: () => ({ domain }),
    graphiql: true
  })

  return fastify
    .listen({
      port: config.port
    })
    .then(() => fastify)
}
