export const schema = gql`
  type User {
    id: Int!
    createdAt: DateTime!
    email: String!
    fullName: String!
    heardAbout: String!
    code: String
  }

  input CreateUserInput {
    email: String!
    fullName: String!
    heardAbout: String!
  }

  type Mutation {
    createUser(input: CreateUserInput!): User! @skipAuth
  }
`
