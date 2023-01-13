import { gql } from "apollo-server";

export const typeDefs = gql`
  type User {
    user_name: String!
    name: String!
    email: String!
    age: Int!
    gender: String!
    phone_no: String!
    city: String!
    postal_code: String!
    time_zone: String!
    date_of_birth: String!
  }

  type BMI {
    bmi: String!
    message: String!
  }

  type Query {
    getAllUsers(
      limit: Int!
      download: Boolean!
      filePath: String!
      selectedFields: [String]
    ): [User!]!
  }
`;
