const { gql } = require('apollo-server-express')


const typeDefs = gql`
    type User{
        name: String!
    }
    type Comment{
        user: User!
        body: String!
    }
    type Post{
        userId: Int!
        id: ID!
        title: String!
        body: String!
        comment: [Comment]
    }
    type Query{
        getPost: [Post]
        getPostById(id: ID!): Post
    }
`

module.exports = typeDefs