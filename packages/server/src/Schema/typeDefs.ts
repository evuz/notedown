import { buildSchema } from 'graphql'

export const typeDefs = buildSchema(`
  type User {
    id: ID!
    firstName: String!
    lastName: String
    email: String!
    registerDate: Float
  }

  type Query {
    users: [User]!
    user(id: String): User!
  }

  type Mutation {
    register(firstName: String!, lastName: String, email: String!): User!
  }
`)
