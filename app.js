/*
const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const { buildSchema } = require('graphql')



const app = express();

const schema = buildSchema(`
    type User{
        name: String
        age: Int
        college: String
    }
    type Query{
        hello: String
        user: User
        name(n: String!): String!
    }
`)

const root = {
    hello: ()=>{
        return "Hi There"
    },
    user: ()=>{
        const user = {
            name : "Preetam Sarkar",
            age : 56,
            college : "BIT"
        }
        return user;
    },
    name: (n)=>{
        // console.log(n)
        return n.n;
    }
}

app.use('/graphql', graphqlHTTP({
    graphiql: true,
    schema : schema,
    rootValue: root
}));

app.listen(4000,()=>{
    console.log('Listening to port 4000');
})

app.get('/',(req,res)=>{
    res.send("Hi There")
});
*/
