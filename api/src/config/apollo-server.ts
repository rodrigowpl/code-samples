import { ApolloServer } from 'apollo-server-express'
import { Express } from 'express'
import { makeExecutableSchema } from '@graphql-tools/schema'

import resolvers from '@/graphql/resolvers'
import typeDefs from '@/graphql/type-defs'

export const schema = makeExecutableSchema({
  typeDefs,
  resolvers
})

export const startApolloServer = async (app: Express) => {
  const server = new ApolloServer({
    schema,
    context: ({ req }) => ({ req }),
    introspection: true
  })

  await server.start()

  server.applyMiddleware({ app })
}
