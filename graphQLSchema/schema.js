const { gql } = require('apollo-server-express')


const typeDefs = gql`
    type Post{
        userId: Int!
        id: ID!
        title: String!
        body: String!
    }
    type Query{
        getPost: [Post]
        getPostById(id: ID!): Post
    }
`

module.exports = typeDefs