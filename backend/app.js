const PORT = process.env.PORT

const { ApolloServer, gql } = require('apollo-server-express');
const express = require('express')
const cors = require('cors')

const {typeDefs} = require('./graphql/typeDefs')
const resolvers = require('./graphql/resolvers')

const app = express()

app.use(cors({credentials:true}))

const getUserId = (token) => {
  return {id:'u2'}
}

const context = ({req, res}) => {
  const token = req.headers.authorization || '';
  const user = getUserId(token);
  return { user }
}

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context
});

server.applyMiddleware({ app });

app.listen(PORT, () =>
  console.log(`🚀 Server ready at http://localhost:${PORT}`)
)