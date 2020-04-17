const gql = require('graphql-tag')

exports.typeDefs = gql`
  type Query {
    hello: String
    users: [User]
    userPlaces: [Place]
    place(id:ID!): Place!
  }

  type Mutation {
    createUser(data: UserInput): Token
    createPlace(data: PlacesInput): [Place]
  }
  
  type Place {
    id: ID
    title: String
    description: String
    imageUrl: String
    address: String
    creator: User
    coordinates: Location
  }

  type User {
    id: ID
    name: String
    email: String
    places: [Place]
    imageUrl: String
  }

  type Location {
    lat: String
    lng: String
  }
  type Token{
    token: String
  }
  input UserInput{
    name: String
    email: String
    password: String
    imageUrl: String
  }

  input LocationInput {
    lat: String
    lng: String
  }

  input PlacesInput {
    title: String
    description: String
    imageUrl: String
    address: String
    coordinates: LocationInput
  }
`