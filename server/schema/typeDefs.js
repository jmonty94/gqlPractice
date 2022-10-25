const { gql } = require('apollo-server-express');

// in GraphQL there is no Get, post, put, or delete methods
/**
 * 2 things are queries and mutations
 * query === Get request
 * mutations === Post/put/delete
 */
const typeDefs = gql`
    type User {
        _id: ID
        username: String
        email: String
        todos: [Todo]
        greeting: String
    }

    type Todo {
        _id: ID
        todo: String
        completed: Boolean
        userId: String
        user: User
    }

    type Query {
        users: [User]
        user(id: String!): User
        todos: [Todo]
        todo(id: String!): Todo
    }

    type Mutation {
        createUser(username: String!, email: String!, password: String!): User

    }
`;

module.exports = typeDefs;