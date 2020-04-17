const PORT = process.env.PORT

const { ApolloServer, gql } = require('apollo-server-express');
const express = require('express')
const cors = require('cors')

const connectDb = require("./db");
const {typeDefs} = require('./graphql/typeDefs')
const resolvers = require('./graphql/resolvers')
const getUserId = require('./utils/getUserId')
const UserModel = require("./models/User");

const app = express()

app.use(cors({origin: "http://localhost:3000", credentials:true}))



const context = ({req, res}) => {
  
  return {user: getUserId(req), UserModel};
}

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context
});

server.applyMiddleware({ app });

connectDb();

app.listen(PORT, () =>
  console.log(`🚀 Server ready at http://localhost:${PORT}`)
)